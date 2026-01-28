## 6. System Design

### Q: Design an infinite scroll feed

**Answer:**

**Requirements Clarification:**
- Load more items when user scrolls near bottom
- Handle loading states
- Support variable item heights?
- Need virtualization for 1000s of items?
- Preserve scroll position on back navigation?

**Architecture:**

```
┌─────────────────────────────────────────┐
│               FeedContainer              │
│  ┌─────────────────────────────────┐   │
│  │    VirtualizedList (optional)    │   │
│  │  ┌─────────────────────────────┐│   │
│  │  │       FeedItem              ││   │
│  │  └─────────────────────────────┘│   │
│  │  ┌─────────────────────────────┐│   │
│  │  │       FeedItem              ││   │
│  │  └─────────────────────────────┘│   │
│  │           ...                    │   │
│  │  ┌─────────────────────────────┐│   │
│  │  │  IntersectionObserver       ││   │←── Triggers load
│  │  │     (LoadMoreTrigger)       ││   │
│  │  └─────────────────────────────┘│   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Implementation:**

```jsx
// hooks/useInfiniteScroll.js
function useInfiniteScroll({ onLoadMore, hasMore, isLoading }) {
  const observerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (triggerRef.current) {
      observerRef.current.observe(triggerRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [onLoadMore, hasMore, isLoading]);

  return triggerRef;
}

// components/Feed.jsx
function Feed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  } = useInfiniteQuery({
    queryKey: ['feed'],
    queryFn: ({ pageParam = null }) => fetchFeedPage(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 5 * 60 * 1000,
  });

  const triggerRef = useInfiniteScroll({
    onLoadMore: fetchNextPage,
    hasMore: hasNextPage,
    isLoading: isFetchingNextPage,
  });

  if (isLoading) return <FeedSkeleton />;
  if (error) return <ErrorState onRetry={refetch} />;

  const items = data.pages.flatMap(page => page.items);

  return (
    <div className="feed">
      {items.map(item => (
        <FeedItem key={item.id} item={item} />
      ))}

      {/* Invisible trigger element */}
      <div ref={triggerRef} style={{ height: 1 }} />

      {isFetchingNextPage && <LoadingSpinner />}
      {!hasNextPage && <EndOfFeed />}
    </div>
  );
}
```

**Data Model:**
```typescript
interface FeedPage {
  items: FeedItem[];
  nextCursor: string | null;
}

interface FeedItem {
  id: string;
  type: 'post' | 'ad' | 'suggestion';
  content: string;
  author: User;
  createdAt: string;
  metrics: { likes: number; comments: number };
}
```

**Optimizations:**

1. **Cursor-based pagination** (not offset):
```jsx
// ✅ Cursor-based - stable with new items
GET /feed?cursor=abc123&limit=20

// ❌ Offset-based - duplicates when new items added
GET /feed?offset=20&limit=20
```

2. **Virtualization for large feeds:**
```jsx
import { Virtuoso } from 'react-virtuoso';

<Virtuoso
  data={items}
  endReached={fetchNextPage}
  itemContent={(index, item) => <FeedItem item={item} />}
/>
```

3. **Preserve scroll on navigation:**
```jsx
// Cache scroll position
useEffect(() => {
  return () => {
    sessionStorage.setItem('feedScroll', window.scrollY);
  };
}, []);

// Restore on mount
useLayoutEffect(() => {
  const saved = sessionStorage.getItem('feedScroll');
  if (saved) window.scrollTo(0, parseInt(saved));
}, []);
```

**Senior insight:** Key decisions: cursor vs offset pagination (cursor handles insertions), when to virtualize (1000+ items), caching strategy (staleTime), and whether to cache pages or flatten items.

---

### Q: How do you handle optimistic updates?

**Answer:**

**Optimistic updates** show the expected result immediately while the actual request happens in the background.

**With React Query:**

```jsx
function useToggleLike(postId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.toggleLike(postId),

    // Optimistically update before request completes
    onMutate: async () => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['post', postId] });

      // Snapshot previous value
      const previousPost = queryClient.getQueryData(['post', postId]);

      // Optimistically update
      queryClient.setQueryData(['post', postId], (old) => ({
        ...old,
        liked: !old.liked,
        likeCount: old.liked ? old.likeCount - 1 : old.likeCount + 1,
      }));

      // Return snapshot for rollback
      return { previousPost };
    },

    // Rollback on error
    onError: (err, variables, context) => {
      queryClient.setQueryData(['post', postId], context.previousPost);
      toast.error('Failed to update like');
    },

    // Refetch after success or error
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['post', postId] });
    },
  });
}

// Usage
function LikeButton({ post }) {
  const toggleLike = useToggleLike(post.id);

  return (
    <button
      onClick={() => toggleLike.mutate()}
      disabled={toggleLike.isPending}
    >
      {post.liked ? '❤️' : '🤍'} {post.likeCount}
    </button>
  );
}
```

**With useOptimistic (React 19):**

```jsx
function LikeButton({ post, onLike }) {
  const [optimisticLiked, setOptimisticLiked] = useOptimistic(
    post.liked,
    (current, newValue) => newValue
  );

  async function handleClick() {
    setOptimisticLiked(!optimisticLiked); // Immediate UI update
    await onLike(post.id); // Actual request
  }

  return (
    <button onClick={handleClick}>
      {optimisticLiked ? '❤️' : '🤍'}
    </button>
  );
}
```

**Pattern for Complex Updates:**

```jsx
// List operations (add/remove/reorder)
onMutate: async (newItem) => {
  await queryClient.cancelQueries({ queryKey: ['items'] });

  const previous = queryClient.getQueryData(['items']);

  queryClient.setQueryData(['items'], (old) => [...old, {
    ...newItem,
    id: 'temp-' + Date.now(), // Temporary ID
    isPending: true, // Visual indicator
  }]);

  return { previous };
},

onSuccess: (savedItem, variables, context) => {
  // Replace temp item with real item
  queryClient.setQueryData(['items'], (old) =>
    old.map(item =>
      item.id.startsWith('temp-') ? savedItem : item
    )
  );
},
```

**When NOT to Use Optimistic Updates:**

- Payment/financial transactions
- Irreversible operations
- Operations that frequently fail
- When server response has critical data

**Senior insight:** Optimistic updates improve perceived performance but add complexity. Use them for low-risk, frequent operations (likes, bookmarks). Always implement rollback and consider showing a subtle pending indicator.

---

### Q: Design an autocomplete/typeahead search component

**Answer:**

**Requirements Clarification:**
- Client-side filtering vs server-side search?
- How large is the dataset?
- Keyboard navigation required?
- Multi-select or single select?
- Show recent searches?
- Accessibility requirements?

**Architecture:**

```
┌─────────────────────────────────────────────────────────────┐
│                    AutocompleteSearch                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  SearchInput (combobox role)                          │   │
│  │  [🔍 Search products...                         ▼]   │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  SuggestionsList (listbox role)                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │ 💡 Recent: "laptop", "phone"                │    │   │
│  │  ├─────────────────────────────────────────────┤    │   │
│  │  │ ▸ Product A (highlighted)                    │    │   │
│  │  │   Product B                                  │    │   │
│  │  │   Product C                                  │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Implementation:**

```jsx
function Autocomplete({ onSelect, fetchSuggestions }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);
  const listRef = useRef(null);
  const listId = useId();

  // Debounced search
  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();

    async function search() {
      setIsLoading(true);
      try {
        const results = await fetchSuggestions(debouncedQuery, {
          signal: controller.signal,
        });
        setSuggestions(results);
        setIsOpen(true);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      } finally {
        setIsLoading(false);
      }
    }

    search();
    return () => controller.abort();
  }, [debouncedQuery, fetchSuggestions]);

  // Keyboard navigation
  function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((i) =>
          i < suggestions.length - 1 ? i + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((i) =>
          i > 0 ? i - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0) {
          handleSelect(suggestions[activeIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.focus();
        break;
    }
  }

  function handleSelect(item) {
    onSelect(item);
    setQuery(item.label);
    setIsOpen(false);
    saveToRecentSearches(item);
  }

  return (
    <div className="autocomplete" onKeyDown={handleKeyDown}>
      <input
        ref={inputRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-activedescendant={
          activeIndex >= 0 ? `option-${activeIndex}` : undefined
        }
        aria-autocomplete="list"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setActiveIndex(-1);
        }}
        onFocus={() => suggestions.length > 0 && setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        placeholder="Search..."
      />

      {isLoading && <Spinner className="input-spinner" />}

      {isOpen && suggestions.length > 0 && (
        <ul ref={listRef} id={listId} role="listbox">
          {suggestions.map((item, index) => (
            <li
              key={item.id}
              id={`option-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              className={index === activeIndex ? 'highlighted' : ''}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleSelect(item)}
            >
              <HighlightMatch text={item.label} query={query} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

**Highlight Matching Text:**

```jsx
function HighlightMatch({ text, query }) {
  if (!query) return text;

  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i}>{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
}
```

**Caching Recent Searches:**

```jsx
function useRecentSearches(key = 'recent-searches', maxItems = 5) {
  const [recent, setRecent] = useLocalStorage(key, []);

  const add = useCallback((item) => {
    setRecent((prev) => {
      const filtered = prev.filter((i) => i.id !== item.id);
      return [item, ...filtered].slice(0, maxItems);
    });
  }, [maxItems]);

  const clear = useCallback(() => setRecent([]), []);

  return { recent, add, clear };
}
```

**Performance Optimizations:**

1. **Request cancellation** - Abort stale requests
2. **Debouncing** - Don't search on every keystroke
3. **Caching** - Use React Query with staleTime
4. **Minimum query length** - Don't search for 1-2 chars

**Senior insight:** Key decisions include debounce timing (150-300ms), whether to show suggestions on focus (recent searches), and accessibility (proper ARIA roles). Consider libraries like Downshift or React-Select for production - they handle dozens of edge cases. For server-side, implement prefix-based indexing (trie) or use dedicated search services (Algolia, Elasticsearch).

---

### Q: Design a toast notification system

**Answer:**

**Requirements:**
- Queue multiple notifications
- Auto-dismiss with configurable duration
- Manual dismiss capability
- Different types (success, error, warning, info)
- Accessible announcements
- Stacking/positioning

**Architecture:**

```
┌─────────────────────────────────────────────────────────────┐
│                       Application                            │
│                                                             │
│    ┌─────────────────────────────────────────────────┐     │
│    │              ToastProvider                        │     │
│    │   (Context + State Management)                   │     │
│    │                                                   │     │
│    │    ┌───────────────────────────────────────┐    │     │
│    │    │         ToastContainer (Portal)        │    │     │
│    │    │   ┌─────────────────────────────────┐ │    │     │
│    │    │   │ ✓ Item saved        [×]        │ │    │     │
│    │    │   └─────────────────────────────────┘ │    │     │
│    │    │   ┌─────────────────────────────────┐ │    │     │
│    │    │   │ ⚠ Connection lost   [×]        │ │    │     │
│    │    │   └─────────────────────────────────┘ │    │     │
│    │    └───────────────────────────────────────┘    │     │
│    └─────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

**Implementation:**

```jsx
// types
interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  dismissible?: boolean;
}

// Context
const ToastContext = createContext(null);

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = crypto.randomUUID();
    const newToast = {
      id,
      duration: 5000,
      dismissible: true,
      ...toast,
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto-dismiss
    if (newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Convenience methods
  const toast = useMemo(() => ({
    success: (message, options) =>
      addToast({ type: 'success', message, ...options }),
    error: (message, options) =>
      addToast({ type: 'error', message, duration: 0, ...options }),
    warning: (message, options) =>
      addToast({ type: 'warning', message, ...options }),
    info: (message, options) =>
      addToast({ type: 'info', message, ...options }),
    dismiss: removeToast,
    dismissAll: () => setToasts([]),
  }), [addToast, removeToast]);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </ToastContext.Provider>
  );
}

// Hook
function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}
```

**Toast Container with Portal:**

```jsx
function ToastContainer({ toasts, onDismiss }) {
  return createPortal(
    <div
      className="toast-container"
      role="region"
      aria-label="Notifications"
    >
      {/* Live region for screen readers */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {toasts.length > 0 && toasts[toasts.length - 1].message}
      </div>

      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onDismiss={() => onDismiss(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}
```

**Individual Toast with Animation:**

```jsx
function Toast({ toast, onDismiss }) {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (toast.duration <= 0 || isPaused) return;

    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / toast.duration) * 100);
      setProgress(remaining);
    }, 50);

    return () => clearInterval(interval);
  }, [toast.duration, isPaused]);

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100 }}
      className={`toast toast-${toast.type}`}
      role="alert"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <span className="toast-icon">{icons[toast.type]}</span>
      <span className="toast-message">{toast.message}</span>

      {toast.dismissible && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="toast-close"
        >
          ×
        </button>
      )}

      {toast.duration > 0 && (
        <div
          className="toast-progress"
          style={{ width: `${progress}%` }}
        />
      )}
    </motion.div>
  );
}
```

**Usage:**

```jsx
function App() {
  return (
    <ToastProvider>
      <MyComponent />
    </ToastProvider>
  );
}

function MyComponent() {
  const toast = useToast();

  async function handleSave() {
    try {
      await saveData();
      toast.success('Changes saved successfully');
    } catch (error) {
      toast.error(`Failed to save: ${error.message}`);
    }
  }

  return <button onClick={handleSave}>Save</button>;
}
```

**Senior insight:** Key decisions include max visible toasts (usually 3-5), positioning (top-right common, but bottom-left better for mobile), pause-on-hover behavior, and whether errors should auto-dismiss (usually not). Consider libraries like react-hot-toast or Sonner for production - they're well-tested and accessible out of the box.

---

### Q: Design a form builder with dynamic fields

**Answer:**

**Requirements:**
- Define forms via JSON schema
- Support various field types (text, select, checkbox, etc.)
- Conditional field visibility
- Nested/repeatable fields (arrays)
- Validation
- Custom field components

**Architecture:**

```
┌─────────────────────────────────────────────────────────────┐
│                      FormBuilder                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    FormProvider                       │   │
│  │  (react-hook-form context)                           │   │
│  │                                                       │   │
│  │    ┌─────────────────────────────────────────┐      │   │
│  │    │           DynamicField                    │      │   │
│  │    │  ┌─────────────────────────────────┐    │      │   │
│  │    │  │ TextField / SelectField / etc    │    │      │   │
│  │    │  └─────────────────────────────────┘    │      │   │
│  │    └─────────────────────────────────────────┘      │   │
│  │                                                       │   │
│  │    ┌─────────────────────────────────────────┐      │   │
│  │    │           ArrayField                      │      │   │
│  │    │  ┌───────────────────────────────────┐  │      │   │
│  │    │  │ [+] Add Item  [DynamicField...]   │  │      │   │
│  │    │  └───────────────────────────────────┘  │      │   │
│  │    └─────────────────────────────────────────┘      │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Schema Definition:**

```typescript
interface FieldSchema {
  name: string;
  type: 'text' | 'number' | 'email' | 'select' | 'checkbox' | 'array';
  label: string;
  placeholder?: string;
  required?: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
  options?: { value: string; label: string }[]; // For select
  fields?: FieldSchema[]; // For nested/array fields
  condition?: {
    field: string;
    value: any;
    operator: 'equals' | 'notEquals' | 'contains';
  };
}

// Example schema
const formSchema: FieldSchema[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    required: true,
  },
  {
    name: 'employmentType',
    type: 'select',
    label: 'Employment Type',
    options: [
      { value: 'fullTime', label: 'Full Time' },
      { value: 'contractor', label: 'Contractor' },
    ],
  },
  {
    name: 'companyName',
    type: 'text',
    label: 'Company Name',
    condition: {
      field: 'employmentType',
      value: 'contractor',
      operator: 'equals',
    },
  },
  {
    name: 'skills',
    type: 'array',
    label: 'Skills',
    fields: [
      { name: 'skillName', type: 'text', label: 'Skill' },
      { name: 'level', type: 'select', label: 'Level', options: [
        { value: 'beginner', label: 'Beginner' },
        { value: 'expert', label: 'Expert' },
      ]},
    ],
  },
];
```

**Implementation:**

```jsx
import { useForm, FormProvider, useFormContext, useFieldArray } from 'react-hook-form';

function FormBuilder({ schema, onSubmit, defaultValues }) {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {schema.map((field) => (
          <DynamicField key={field.name} field={field} />
        ))}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}

function DynamicField({ field, parentName = '' }) {
  const { watch } = useFormContext();
  const fullName = parentName ? `${parentName}.${field.name}` : field.name;

  // Check conditional visibility
  if (field.condition) {
    const watchedValue = watch(field.condition.field);
    const isVisible = evaluateCondition(field.condition, watchedValue);
    if (!isVisible) return null;
  }

  switch (field.type) {
    case 'text':
    case 'email':
    case 'number':
      return <TextField field={field} name={fullName} />;
    case 'select':
      return <SelectField field={field} name={fullName} />;
    case 'checkbox':
      return <CheckboxField field={field} name={fullName} />;
    case 'array':
      return <ArrayField field={field} name={fullName} />;
    default:
      return null;
  }
}

function TextField({ field, name }) {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <div className="field">
      <label htmlFor={name}>{field.label}</label>
      <input
        id={name}
        type={field.type}
        {...register(name, {
          required: field.required && 'This field is required',
          pattern: field.validation?.pattern && {
            value: new RegExp(field.validation.pattern),
            message: field.validation.message || 'Invalid format',
          },
        })}
        placeholder={field.placeholder}
      />
      {error && <span className="error">{error.message}</span>}
    </div>
  );
}

function SelectField({ field, name }) {
  const { register } = useFormContext();

  return (
    <div className="field">
      <label htmlFor={name}>{field.label}</label>
      <select id={name} {...register(name, { required: field.required })}>
        <option value="">Select...</option>
        {field.options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function ArrayField({ field, name }) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div className="array-field">
      <label>{field.label}</label>
      {fields.map((item, index) => (
        <div key={item.id} className="array-item">
          {field.fields?.map((subField) => (
            <DynamicField
              key={subField.name}
              field={subField}
              parentName={`${name}.${index}`}
            />
          ))}
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({})}>
        Add {field.label}
      </button>
    </div>
  );
}

function evaluateCondition(condition, value) {
  switch (condition.operator) {
    case 'equals':
      return value === condition.value;
    case 'notEquals':
      return value !== condition.value;
    case 'contains':
      return Array.isArray(value) && value.includes(condition.value);
    default:
      return true;
  }
}
```

**Usage:**

```jsx
function RegistrationForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <FormBuilder
      schema={formSchema}
      onSubmit={handleSubmit}
      defaultValues={{ employmentType: 'fullTime', skills: [] }}
    />
  );
}
```

**Senior insight:** JSON schema-driven forms are powerful but add complexity. Use them when: forms are defined by non-developers, forms vary per customer, or you need form versioning. For simpler cases, just write the form directly. Consider JSON Schema (draft-07) or Zod schemas for standard validation. Libraries like react-jsonschema-form handle much of this out of the box.

---

### Q: Design a dashboard with real-time data updates

**Answer:**

**Requirements:**
- Multiple widgets displaying different data
- Real-time updates (WebSocket or polling)
- Handle connection loss gracefully
- Efficient updates (minimize re-renders)
- User-configurable refresh rates

**Architecture:**

```
┌──────────────────────────────────────────────────────────────────┐
│                          Dashboard                                │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    ConnectionStatus                          │ │
│  │   🟢 Connected | Last update: 2s ago | [Pause] [Refresh]   │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │   MetricsWidget     │  │   ChartWidget       │              │
│  │   Active Users: 142 │  │   📈 [Live Graph]   │              │
│  │   Revenue: $5,432   │  │                     │              │
│  └─────────────────────┘  └─────────────────────┘              │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    ActivityFeed                          │   │
│  │   • User A completed purchase ($99)                     │   │
│  │   • User B signed up                                    │   │
│  │   • User C viewed product                               │   │
│  └─────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

**WebSocket Connection Hook:**

```jsx
function useWebSocket(url) {
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState(null);
  const wsRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  const reconnectAttempts = useRef(0);

  const connect = useCallback(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      setIsConnected(true);
      reconnectAttempts.current = 0;
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setLastMessage(data);
    };

    ws.onclose = () => {
      setIsConnected(false);
      // Exponential backoff reconnection
      const delay = Math.min(1000 * 2 ** reconnectAttempts.current, 30000);
      reconnectAttempts.current++;

      reconnectTimeoutRef.current = setTimeout(connect, delay);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      ws.close();
    };

    wsRef.current = ws;
  }, [url]);

  useEffect(() => {
    connect();

    return () => {
      clearTimeout(reconnectTimeoutRef.current);
      wsRef.current?.close();
    };
  }, [connect]);

  const send = useCallback((message) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(message));
    }
  }, []);

  return { isConnected, lastMessage, send };
}
```

**Real-Time Data Context:**

```jsx
const DashboardDataContext = createContext(null);

function DashboardDataProvider({ children }) {
  const [metrics, setMetrics] = useState(null);
  const [activities, setActivities] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  const { isConnected, lastMessage } = useWebSocket(
    'wss://api.example.com/dashboard'
  );

  // Process incoming messages
  useEffect(() => {
    if (!lastMessage || isPaused) return;

    switch (lastMessage.type) {
      case 'METRICS_UPDATE':
        setMetrics(lastMessage.payload);
        break;
      case 'ACTIVITY':
        setActivities((prev) => [lastMessage.payload, ...prev].slice(0, 50));
        break;
      case 'FULL_STATE':
        setMetrics(lastMessage.payload.metrics);
        setActivities(lastMessage.payload.activities);
        break;
    }
  }, [lastMessage, isPaused]);

  const value = useMemo(() => ({
    metrics,
    activities,
    isConnected,
    isPaused,
    togglePause: () => setIsPaused((p) => !p),
  }), [metrics, activities, isConnected, isPaused]);

  return (
    <DashboardDataContext.Provider value={value}>
      {children}
    </DashboardDataContext.Provider>
  );
}
```

**Optimized Widget Components:**

```jsx
// Memoized widget - only re-renders when its specific data changes
const MetricsWidget = memo(function MetricsWidget() {
  const { metrics } = useContext(DashboardDataContext);

  if (!metrics) return <WidgetSkeleton />;

  return (
    <div className="widget metrics-widget">
      <h3>Live Metrics</h3>
      <div className="metric">
        <span className="label">Active Users</span>
        <AnimatedNumber value={metrics.activeUsers} />
      </div>
      <div className="metric">
        <span className="label">Revenue</span>
        <AnimatedNumber value={metrics.revenue} prefix="$" />
      </div>
    </div>
  );
});

// Activity feed with virtualization for performance
function ActivityFeed() {
  const { activities } = useContext(DashboardDataContext);

  return (
    <div className="widget activity-feed">
      <h3>Activity Feed</h3>
      <Virtuoso
        data={activities}
        itemContent={(index, activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        )}
        style={{ height: 300 }}
      />
    </div>
  );
}

// Animated number for smooth transitions
function AnimatedNumber({ value, prefix = '', suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const duration = 500;
    const start = displayValue;
    const diff = value - start;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      setDisplayValue(Math.round(start + diff * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span className="animated-number">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}
```

**Polling Fallback:**

```jsx
// For environments where WebSocket isn't available
function useDashboardPolling(interval = 5000) {
  const { data, error, refetch } = useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboardData,
    refetchInterval: interval,
    refetchIntervalInBackground: false, // Pause when tab not visible
  });

  return { data, error, refetch };
}
```

**Connection Status Component:**

```jsx
function ConnectionStatus() {
  const { isConnected, isPaused, togglePause } = useContext(DashboardDataContext);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  // Track time since last update
  useEffect(() => {
    const interval = setInterval(() => setLastUpdate(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="connection-status">
      <span className={`indicator ${isConnected ? 'connected' : 'disconnected'}`}>
        {isConnected ? '🟢 Connected' : '🔴 Reconnecting...'}
      </span>
      <span>Last update: {formatTimeAgo(lastUpdate)}</span>
      <button onClick={togglePause}>
        {isPaused ? '▶️ Resume' : '⏸️ Pause'}
      </button>
    </div>
  );
}
```

**Senior insight:** Key decisions include WebSocket vs polling (WS for true real-time, polling for simpler infra), reconnection strategy (exponential backoff), and how to handle offline state. For charts, consider downsampling high-frequency data. Use shared workers if multiple tabs need the same connection. Always provide visual feedback about connection state.

---

### Q: Design a shopping cart with persistent state

**Answer:**

**Requirements:**
- Persist cart across browser sessions
- Sync with server for logged-in users
- Handle inventory conflicts
- Optimistic updates
- Work offline

**Architecture:**

```
┌────────────────────────────────────────────────────────────────────┐
│                         Cart System                                 │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                      CartProvider                             │ │
│  │  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐ │ │
│  │  │  Local State   │ →│ Sync Manager   │ →│  Server State  │ │ │
│  │  │  (Zustand)     │  │                │  │  (React Query) │ │ │
│  │  └────────────────┘  └────────────────┘  └────────────────┘ │ │
│  │          ↓                    ↓                              │ │
│  │  ┌────────────────┐  ┌────────────────┐                     │ │
│  │  │  localStorage  │  │  Conflict      │                     │ │
│  │  │  (persistence) │  │  Resolution    │                     │ │
│  │  └────────────────┘  └────────────────┘                     │ │
│  └──────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

**Cart Store with Persistence:**

```jsx
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      lastSyncedAt: null,

      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.productId === product.id
          );

          if (existingIndex >= 0) {
            const newItems = [...state.items];
            newItems[existingIndex] = {
              ...newItems[existingIndex],
              quantity: newItems[existingIndex].quantity + quantity,
            };
            return { items: newItems };
          }

          return {
            items: [...state.items, {
              id: crypto.randomUUID(),
              productId: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity,
              addedAt: Date.now(),
            }],
          };
        });
      },

      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => set({ items: [], lastSyncedAt: null }),

      getTotal: () => {
        const { items } = get();
        return items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },

      getItemCount: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.quantity, 0);
      },

      setItems: (items) => set({ items, lastSyncedAt: Date.now() }),
    }),
    {
      name: 'shopping-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        lastSyncedAt: state.lastSyncedAt,
      }),
    }
  )
);
```

**Server Sync Hook:**

```jsx
function useCartSync() {
  const { items, setItems, lastSyncedAt } = useCartStore();
  const { user } = useAuth();

  // Fetch server cart on login
  const { data: serverCart } = useQuery({
    queryKey: ['cart', user?.id],
    queryFn: () => api.getCart(),
    enabled: !!user,
  });

  // Sync mutation
  const syncMutation = useMutation({
    mutationFn: (localItems) => api.syncCart(localItems),
    onSuccess: (serverItems) => {
      setItems(serverItems);
    },
  });

  // Merge local and server carts on login
  useEffect(() => {
    if (!user || !serverCart) return;

    const localItems = items;
    const shouldMerge = localItems.length > 0 && serverCart.length > 0;

    if (shouldMerge) {
      // Merge strategy: combine both, prefer local for conflicts
      const merged = mergeCartItems(localItems, serverCart);
      syncMutation.mutate(merged);
    } else if (localItems.length > 0) {
      // Push local to server
      syncMutation.mutate(localItems);
    } else {
      // Use server cart
      setItems(serverCart);
    }
  }, [user, serverCart]);

  // Debounced sync on cart changes
  const debouncedSync = useDebouncedCallback(() => {
    if (user) {
      syncMutation.mutate(items);
    }
  }, 1000);

  useEffect(() => {
    if (user && items.length > 0) {
      debouncedSync();
    }
  }, [items, user]);

  return { isSyncing: syncMutation.isPending };
}

function mergeCartItems(local, server) {
  const merged = new Map();

  // Add server items first
  server.forEach((item) => {
    merged.set(item.productId, item);
  });

  // Override/add local items (local wins conflicts)
  local.forEach((item) => {
    const existing = merged.get(item.productId);
    if (existing) {
      // Keep the one with higher quantity or more recent
      if (item.addedAt > existing.addedAt) {
        merged.set(item.productId, item);
      }
    } else {
      merged.set(item.productId, item);
    }
  });

  return Array.from(merged.values());
}
```

**Inventory Validation:**

```jsx
function useCartValidation() {
  const { items, updateQuantity, removeItem } = useCartStore();

  // Validate cart against current inventory
  const { data: validation, isLoading } = useQuery({
    queryKey: ['cart-validation', items.map((i) => i.productId)],
    queryFn: () => api.validateCart(items),
    enabled: items.length > 0,
    staleTime: 30000, // Revalidate every 30s
  });

  const issues = useMemo(() => {
    if (!validation) return [];

    return items.map((item) => {
      const productInfo = validation[item.productId];

      if (!productInfo?.inStock) {
        return { itemId: item.id, type: 'OUT_OF_STOCK', message: 'Out of stock' };
      }

      if (item.quantity > productInfo.availableQuantity) {
        return {
          itemId: item.id,
          type: 'INSUFFICIENT_STOCK',
          message: `Only ${productInfo.availableQuantity} available`,
          availableQuantity: productInfo.availableQuantity,
        };
      }

      if (productInfo.price !== item.price) {
        return {
          itemId: item.id,
          type: 'PRICE_CHANGED',
          message: `Price changed to $${productInfo.price}`,
          newPrice: productInfo.price,
        };
      }

      return null;
    }).filter(Boolean);
  }, [items, validation]);

  const resolveIssues = useCallback(() => {
    issues.forEach((issue) => {
      switch (issue.type) {
        case 'OUT_OF_STOCK':
          removeItem(issue.itemId);
          break;
        case 'INSUFFICIENT_STOCK':
          updateQuantity(issue.itemId, issue.availableQuantity);
          break;
        // PRICE_CHANGED - user must acknowledge
      }
    });
  }, [issues, removeItem, updateQuantity]);

  return { issues, isLoading, resolveIssues };
}
```

**Cart Component:**

```jsx
function ShoppingCart() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();
  const { isSyncing } = useCartSync();
  const { issues, resolveIssues } = useCartValidation();

  if (items.length === 0) {
    return (
      <div className="cart empty">
        <p>Your cart is empty</p>
        <Link to="/products">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      {isSyncing && <SyncIndicator />}

      {issues.length > 0 && (
        <div className="cart-issues">
          <h4>Some items need attention</h4>
          {issues.map((issue) => (
            <IssueAlert key={issue.itemId} issue={issue} />
          ))}
          <button onClick={resolveIssues}>Resolve all issues</button>
        </div>
      )}

      <ul className="cart-items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => removeItem(item.id)}
            onQuantityChange={(q) => updateQuantity(item.id, q)}
            hasIssue={issues.some((i) => i.itemId === item.id)}
          />
        ))}
      </ul>

      <div className="cart-summary">
        <div className="total">
          Total: ${getTotal().toFixed(2)}
        </div>
        <button
          disabled={issues.length > 0}
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
```

**Senior insight:** Key decisions include merge strategy (local-wins vs server-wins vs manual), when to validate inventory (on view, on checkout), and how to handle logged-out → logged-in transitions. For guest checkout, use anonymous cart IDs that can be claimed on signup. Consider using optimistic updates for quantity changes but server validation for checkout.

---
