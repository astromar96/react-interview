## 17. Additional System Design Questions

### Q: Design a real-time collaborative text editor

**Answer:**

**Clarifying Questions:**
- How many concurrent editors?
- Conflict resolution strategy?
- Offline support needed?
- Rich text or plain text?

**Architecture:**

```
┌─────────────────────────────────────────────────────────────┐
│                         Client                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                    Editor Component                    │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐ │  │
│  │  │ Text State  │  │ CRDT Engine │  │ Cursor Sync  │ │  │
│  │  └─────────────┘  └─────────────┘  └──────────────┘ │  │
│  └──────────────────────────────────────────────────────┘  │
│                           │                                  │
│                    WebSocket Connection                      │
└───────────────────────────┼─────────────────────────────────┘
                            │
┌───────────────────────────┼─────────────────────────────────┐
│                     Server                                   │
│  ┌─────────────────┐  ┌────────────────┐  ┌─────────────┐ │
│  │ WebSocket Hub   │  │ Document Store │  │ User Presence│ │
│  └─────────────────┘  └────────────────┘  └─────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**Conflict Resolution with CRDT:**

```jsx
// Using Yjs CRDT library
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

function CollaborativeEditor({ documentId }) {
  const [editorRef, setEditorRef] = useState(null);

  useEffect(() => {
    // Create CRDT document
    const ydoc = new Y.Doc();
    const ytext = ydoc.getText('content');

    // Connect to sync server
    const provider = new WebsocketProvider(
      'wss://sync.example.com',
      documentId,
      ydoc
    );

    // User awareness (cursors, selections)
    const awareness = provider.awareness;
    awareness.setLocalState({
      user: { name: currentUser.name, color: '#ff0000' },
      cursor: null,
    });

    // Bind to editor
    if (editorRef) {
      const binding = new YTextBinding(ytext, editorRef);
    }

    return () => {
      provider.destroy();
      ydoc.destroy();
    };
  }, [documentId, editorRef]);

  return <div ref={setEditorRef} contentEditable />;
}
```

**Operational Transform Alternative:**

```jsx
// For simpler cases without CRDT library
function useCollaborativeState(documentId) {
  const [content, setContent] = useState('');
  const [version, setVersion] = useState(0);
  const pendingOps = useRef([]);

  const ws = useWebSocket(`wss://api/docs/${documentId}`);

  // Apply remote operation
  const applyOperation = (op) => {
    setContent(prev => {
      switch (op.type) {
        case 'insert':
          return prev.slice(0, op.position) + op.text + prev.slice(op.position);
        case 'delete':
          return prev.slice(0, op.position) + prev.slice(op.position + op.length);
        default:
          return prev;
      }
    });
    setVersion(op.version);
  };

  // Transform local operation against remote
  const transform = (localOp, remoteOp) => {
    // Adjust position based on remote operation
    if (remoteOp.type === 'insert' && remoteOp.position <= localOp.position) {
      return { ...localOp, position: localOp.position + remoteOp.text.length };
    }
    return localOp;
  };

  return { content, setContent, version };
}
```

**Cursor Synchronization:**

```jsx
function Cursors({ awareness }) {
  const [cursors, setCursors] = useState([]);

  useEffect(() => {
    const handleUpdate = () => {
      const states = Array.from(awareness.getStates().entries())
        .filter(([id]) => id !== awareness.clientID)
        .map(([id, state]) => ({
          id,
          ...state.user,
          cursor: state.cursor,
        }));
      setCursors(states);
    };

    awareness.on('change', handleUpdate);
    return () => awareness.off('change', handleUpdate);
  }, [awareness]);

  return (
    <>
      {cursors.map(cursor => (
        <RemoteCursor
          key={cursor.id}
          position={cursor.cursor}
          color={cursor.color}
          name={cursor.name}
        />
      ))}
    </>
  );
}
```

**Senior insight:** Use CRDTs (Yjs, Automerge) for automatic conflict resolution without central server logic. They're complex but handle edge cases correctly. Consider using existing solutions (Liveblocks, Y-sweet) rather than building from scratch.

---

### Q: Design a file upload system with progress tracking

**Answer:**

**Requirements:**
- Support large files (multi-GB)
- Show upload progress
- Resume failed uploads
- Handle multiple files

**Architecture:**

```jsx
// hooks/useFileUpload.js
function useFileUpload() {
  const [uploads, setUploads] = useState(new Map());

  const uploadFile = useCallback(async (file) => {
    const uploadId = crypto.randomUUID();
    const chunkSize = 5 * 1024 * 1024; // 5MB chunks
    const totalChunks = Math.ceil(file.size / chunkSize);

    setUploads(prev => new Map(prev).set(uploadId, {
      file,
      progress: 0,
      status: 'uploading',
      uploadedChunks: 0,
      totalChunks,
    }));

    try {
      // 1. Initialize upload
      const { uploadUrl, uploadKey } = await api.initializeUpload({
        filename: file.name,
        size: file.size,
        contentType: file.type,
      });

      // 2. Upload chunks
      for (let i = 0; i < totalChunks; i++) {
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, file.size);
        const chunk = file.slice(start, end);

        await uploadChunk(uploadUrl, chunk, i, uploadKey);

        setUploads(prev => {
          const upload = prev.get(uploadId);
          return new Map(prev).set(uploadId, {
            ...upload,
            uploadedChunks: i + 1,
            progress: ((i + 1) / totalChunks) * 100,
          });
        });
      }

      // 3. Complete upload
      const result = await api.completeUpload(uploadKey);

      setUploads(prev => new Map(prev).set(uploadId, {
        ...prev.get(uploadId),
        status: 'completed',
        url: result.url,
      }));

      return result;
    } catch (error) {
      setUploads(prev => new Map(prev).set(uploadId, {
        ...prev.get(uploadId),
        status: 'error',
        error,
      }));
      throw error;
    }
  }, []);

  return { uploads, uploadFile };
}
```

**Upload Component:**

```jsx
function FileUploader() {
  const { uploads, uploadFile } = useFileUpload();
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = async (e) => {
    e.preventDefault();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);

    // Upload files in parallel with limit
    const limit = 3;
    for (let i = 0; i < files.length; i += limit) {
      const batch = files.slice(i, i + limit);
      await Promise.all(batch.map(uploadFile));
    }
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
      className={`dropzone ${dragActive ? 'active' : ''}`}
    >
      <input
        type="file"
        multiple
        onChange={(e) => Array.from(e.target.files).forEach(uploadFile)}
      />

      {Array.from(uploads.entries()).map(([id, upload]) => (
        <UploadProgress key={id} upload={upload} />
      ))}
    </div>
  );
}

function UploadProgress({ upload }) {
  return (
    <div className="upload-item">
      <span>{upload.file.name}</span>
      <progress value={upload.progress} max={100} />
      <span>{Math.round(upload.progress)}%</span>
      <span>{upload.status}</span>
    </div>
  );
}
```

**XHR for Progress Events:**

```jsx
function uploadChunk(url, chunk, index, uploadKey) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        const chunkProgress = (e.loaded / e.total) * 100;
        // Update chunk-level progress if needed
      }
    });

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(`Upload failed: ${xhr.status}`));
      }
    };

    xhr.onerror = () => reject(new Error('Upload failed'));

    xhr.open('PUT', `${url}?partNumber=${index}`);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.setRequestHeader('X-Upload-Key', uploadKey);
    xhr.send(chunk);
  });
}
```

**Resume Support:**

```jsx
async function resumeUpload(uploadKey) {
  // Get upload status
  const status = await api.getUploadStatus(uploadKey);

  // Find missing chunks
  const missingChunks = [];
  for (let i = 0; i < status.totalChunks; i++) {
    if (!status.completedChunks.includes(i)) {
      missingChunks.push(i);
    }
  }

  // Upload only missing chunks
  for (const chunkIndex of missingChunks) {
    await uploadChunk(status.uploadUrl, getChunk(file, chunkIndex), chunkIndex);
  }
}
```

**Senior insight:** Use presigned URLs (S3) for direct-to-storage uploads. Implement chunking for reliability and progress tracking. Store upload state in localStorage for resume across sessions.
