## 1. React Core Concepts

### Q: What is the Virtual DOM and how does React's reconciliation algorithm work?

**Answer:**

The Virtual DOM (VDOM) is an in-memory JavaScript representation of the actual DOM. It's a lightweight copy that React uses to optimize updates.

**How Reconciliation Works:**

1. **State/Props Change** → React creates a new VDOM tree
2. **Diffing** → React compares the new VDOM with the previous one using a diffing algorithm
3. **Batch Updates** → React calculates the minimal set of changes needed
4. **Commit** → React updates only the changed parts of the real DOM

**Key Optimizations:**
- **O(n) complexity** instead of O(n³) by using heuristics:
  - Elements of different types produce different trees (full replacement)
  - Developer hints via `key` prop for list items
  - Same component type = update props, different type = unmount/remount

**Senior insight:** The VDOM isn't inherently faster than direct DOM manipulation. Its value is in providing a declarative API while React handles efficient batching and minimal updates internally.

```jsx
// React batches these into a single DOM update
setCount(1);
setName('John');
setActive(true);
// Only one re-render and DOM update occurs
```

---

### Q: Explain React Fiber architecture and how it improves responsiveness

**Answer:**

**React Fiber** is a complete rewrite of React's core reconciliation algorithm (introduced in React 16). It enables **incremental rendering** - splitting rendering work into chunks spread across multiple frames.

**Problems Fiber Solves:**

1. **Main thread blocking** - Old React couldn't pause rendering, causing janky UIs
2. **No prioritization** - All updates treated equally (typing vs. data fetch)
3. **No interruption** - Once rendering started, it had to complete

**How Fiber Works:**

```
Each React element → Fiber Node → Forms Fiber Tree
```

**Key Concepts:**

1. **Work Units (Fibers):** Each fiber is a unit of work that can be paused/resumed
2. **Two Phases:**
   - **Render Phase (interruptible):** Build work-in-progress tree, call render functions, diff
   - **Commit Phase (synchronous):** Apply DOM changes, run effects, cannot be interrupted

3. **Priority Levels:**
   - Immediate (user input)
   - User-blocking (hover, click)
   - Normal (data fetching)
   - Low (analytics)
   - Idle (prefetching)

4. **Time Slicing:** React monitors execution time, yields to browser for animations/input, continues in next frame

**Senior insight:** Fiber enables Concurrent Features in React 18 (useTransition, Suspense) by allowing React to prepare multiple versions of UI simultaneously and interrupt low-priority work for high-priority updates.

---

### Q: What is JSX and how does it get transformed?

**Answer:**

JSX is a syntax extension that lets you write HTML-like code in JavaScript. It's **not** valid JavaScript - it must be transformed at build time.

**Transformation (Modern - React 17+):**

```jsx
// JSX
<Button onClick={handleClick} primary>
  Click me
</Button>

// Transforms to (new JSX transform)
import { jsx as _jsx } from 'react/jsx-runtime';
_jsx(Button, {
  onClick: handleClick,
  primary: true,
  children: "Click me"
});

// Old transform (pre-React 17)
React.createElement(Button, {
  onClick: handleClick,
  primary: true
}, "Click me");
```

**Key Points:**

- Components must start with uppercase (lowercase = DOM elements)
- Expressions in `{}` are evaluated JavaScript
- `className` instead of `class`, `htmlFor` instead of `for`
- All tags must be closed
- Adjacent elements need a parent wrapper or Fragment

**Senior insight:** The new JSX transform (React 17+) eliminates the need for `import React from 'react'` in every file and produces slightly smaller bundles.

---

### Q: Explain the difference between controlled and uncontrolled components

**Answer:**

| Aspect | Controlled | Uncontrolled |
|--------|-----------|--------------|
| State location | React state | DOM (refs) |
| Data flow | React → DOM | DOM → React (on demand) |
| Validation | Real-time | On submit |
| Re-renders | On every change | Minimal |

**Controlled Component:**
```jsx
function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

**Uncontrolled Component:**
```jsx
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return <input ref={inputRef} defaultValue="initial" />;
}
```

**When to Use Each:**

- **Controlled:** Form validation, conditional disabling, enforcing input format, dynamic inputs
- **Uncontrolled:** Simple forms, file inputs (always uncontrolled), integrating with non-React code, performance-critical forms with many fields

**Senior insight:** For complex forms, consider libraries like React Hook Form which use uncontrolled components internally for performance while providing a controlled-like API.

---

### Q: What are Pure Components and when should you use them?

**Answer:**

**PureComponent** (class) and **React.memo** (functional) implement shallow comparison of props to prevent unnecessary re-renders.

```jsx
// Class component
class MyPureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}

// Functional equivalent
const MyComponent = React.memo(function MyComponent({ name }) {
  return <div>{name}</div>;
});

// With custom comparison
const MyComponent = React.memo(
  function MyComponent({ user }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => prevProps.user.id === nextProps.user.id
);
```

**Shallow Comparison Behavior:**

```jsx
// ✅ Will prevent re-render (primitives)
<Pure value={5} />

// ❌ Will RE-RENDER (new object reference each time)
<Pure style={{ color: 'red' }} />
<Pure onClick={() => handleClick()} />
<Pure items={items.filter(x => x.active)} />
```

**When to Use:**

- Components that render often with same props
- Components with expensive render logic
- List items in large lists

**When NOT to Use:**

- Props change frequently anyway
- Props contain callbacks/objects created in parent render
- Component is already fast

**Senior insight:** Don't wrap everything in `React.memo`. Measure first. The comparison itself has a cost, and incorrect usage (with unstable references) gives false confidence while still re-rendering.

---

### Q: How does React's batching of state updates work?

**Answer:**

**Batching** groups multiple state updates into a single re-render for performance.

**React 17 and earlier - Limited batching:**
```jsx
// ✅ Batched (inside React event handlers)
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Only ONE re-render
}

// ❌ NOT batched (async callbacks)
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // TWO re-renders in React 17!
}, 1000);
```

**React 18+ - Automatic Batching:**
```jsx
// ✅ ALL of these are now batched
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // ONE re-render
}, 1000);

fetch('/api').then(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // ONE re-render
});
```

**Opting Out of Batching:**
```jsx
import { flushSync } from 'react-dom';

function handleClick() {
  flushSync(() => {
    setCount(c => c + 1);
  });
  // DOM updated here
  flushSync(() => {
    setFlag(f => !f);
  });
  // DOM updated again
}
```

**Senior insight:** React 18's automatic batching is one of the most impactful performance improvements. If migrating from 17, test async code paths for behavior changes.

---

### Q: What are React Portals and when would you use them?

**Answer:**

**Portals** render children into a DOM node outside the parent component's DOM hierarchy while preserving React's component tree (events, context, etc.).

```jsx
import { createPortal } from 'react-dom';

function Modal({ children, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Renders here in DOM
  );
}

// Usage
function App() {
  return (
    <div className="app"> {/* Has overflow: hidden */}
      <Modal isOpen={showModal}>
        <p>I escape overflow:hidden!</p>
      </Modal>
    </div>
  );
}
```

**Use Cases:**

1. **Modals/Dialogs** - Escape parent `overflow: hidden` or `z-index` stacking
2. **Tooltips/Popovers** - Position relative to viewport, not parent
3. **Floating menus** - Dropdowns that need to overflow containers
4. **Full-screen overlays** - Loading screens, image lightboxes

**Key Behavior:**
- Events bubble through React tree (not DOM tree)
- Context providers work normally
- Refs work normally

**Senior insight:** Portals are essential for accessible modals. They solve CSS stacking context issues while maintaining React's event delegation and context. Always ensure the portal target exists before rendering.

---

### Q: What are Higher-Order Components (HOCs)? Provide examples

**Answer:**

A **HOC** is a function that takes a component and returns a new enhanced component. It's a pattern for reusing component logic.

```jsx
// HOC Definition
function withLogger(WrappedComponent) {
  return function WithLogger(props) {
    useEffect(() => {
      console.log('Component mounted:', WrappedComponent.name);
      return () => console.log('Component unmounted:', WrappedComponent.name);
    }, []);

    return <WrappedComponent {...props} />;
  };
}

// Usage
const EnhancedButton = withLogger(Button);

// Real-world example: withAuth HOC
function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const { user, loading } = useAuth();

    if (loading) return <Spinner />;
    if (!user) return <Navigate to="/login" />;

    return <WrappedComponent {...props} user={user} />;
  };
}

const ProtectedDashboard = withAuth(Dashboard);
```

**Common HOC Examples:**
- `connect()` from React-Redux
- `withRouter()` from React Router (deprecated)
- `withStyles()` from Material-UI

**HOC Best Practices:**

```jsx
// ✅ Pass through unrelated props
return <WrappedComponent {...props} extraProp={value} />;

// ✅ Set displayName for debugging
WithAuth.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name})`;

// ✅ Copy static methods
hoistNonReactStatics(WithAuth, WrappedComponent);

// ✅ Forward refs
const WithAuth = React.forwardRef((props, ref) => {
  return <WrappedComponent ref={ref} {...props} />;
});
```

**Senior insight:** HOCs were the primary pattern before Hooks. Today, custom hooks are preferred for logic reuse because they're simpler and don't create wrapper hell. HOCs are still useful for cross-cutting concerns that need to wrap JSX (error boundaries, providers).

---

### Q: How do you implement Error Boundaries?

**Answer:**

Error Boundaries catch JavaScript errors in child component tree, log them, and display fallback UI. They **must** be class components (no hook equivalent).

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log to error reporting service
    logErrorToService(error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ErrorBoundary>
  );
}

// Granular boundaries
function Dashboard() {
  return (
    <div>
      <ErrorBoundary fallback={<WidgetError />}>
        <UnstableWidget />
      </ErrorBoundary>
      <StableWidget /> {/* Unaffected by errors above */}
    </div>
  );
}
```

**What Error Boundaries DON'T Catch:**

- Event handlers (use try/catch)
- Async code (promises, setTimeout)
- Server-side rendering
- Errors in the error boundary itself

**For async errors:**
```jsx
function useAsyncError() {
  const [, setError] = useState();
  return useCallback((e) => {
    setError(() => { throw e; }); // Triggers error boundary
  }, []);
}
```

**Senior insight:** Use multiple granular error boundaries to isolate failures. A single error in a widget shouldn't crash the entire app. Libraries like `react-error-boundary` provide a more feature-rich implementation with reset capabilities.

---

### Q: Explain React Fiber's work loop and priority lanes in depth

**Answer:**

React Fiber's work loop is the mechanism that schedules and executes rendering work. Understanding it helps debug performance issues and explains why React 18's concurrent features work the way they do.

**The Two Trees:**

```
Current Tree (displayed)    Work-In-Progress Tree (being built)
        ↓                              ↓
   FiberRoot                      FiberRoot
       |                              |
     App                            App'
    /   \                          /   \
  Nav   Main         ←→         Nav'   Main'
        /   \        (reconciled)        /   \
    Header Content               Header' Content'
```

React maintains two fiber trees:
- **Current Tree**: What's currently rendered on screen
- **Work-In-Progress (WIP) Tree**: The tree being built during reconciliation

When reconciliation completes, React swaps the pointers (double buffering).

**Fiber Node Structure:**

```typescript
interface Fiber {
  // Identity
  type: ComponentType | string;  // Function/class component or DOM tag
  key: string | null;

  // Tree structure (linked list, not array)
  return: Fiber | null;         // Parent fiber
  child: Fiber | null;          // First child
  sibling: Fiber | null;        // Next sibling

  // State
  memoizedState: any;           // Hook state (linked list for hooks)
  memoizedProps: any;           // Props from last render

  // Effects
  flags: Flags;                 // What work needs to be done
  subtreeFlags: Flags;          // What work children need

  // Priority
  lanes: Lanes;                 // Update priority (bit field)
  childLanes: Lanes;            // Priority of children's work

  // Double buffering
  alternate: Fiber | null;      // Points to other tree's version
}
```

**The Work Loop:**

```typescript
// Simplified work loop (conceptual)
function workLoop() {
  while (workInProgress !== null && !shouldYield()) {
    performUnitOfWork(workInProgress);
  }
}

function performUnitOfWork(fiber: Fiber) {
  // 1. Begin work - process this fiber
  const next = beginWork(fiber);

  if (next !== null) {
    // Has children - go deeper
    workInProgress = next;
  } else {
    // No children - complete this fiber
    completeUnitOfWork(fiber);
  }
}

function completeUnitOfWork(fiber: Fiber) {
  while (fiber !== null) {
    // 2. Complete work - create/update DOM node
    completeWork(fiber);

    if (fiber.sibling !== null) {
      // Has sibling - process sibling next
      workInProgress = fiber.sibling;
      return;
    }

    // No sibling - go back up to parent
    fiber = fiber.return;
  }

  // Reached root - work is complete
  workInProgress = null;
}
```

**Traversal Order (DFS):**

```
       App
      /   \
   Nav    Main
   /      /   \
 Logo  Header Content

Traversal: App → Nav → Logo → (complete) → (complete Nav)
         → Main → Header → (complete) → Content → (complete)
         → (complete Main) → (complete App)
```

**Priority Lanes (React 18):**

```typescript
// Lanes are bit fields for priority (simplified)
const SyncLane           = 0b0000000000000000000000000000001;  // Highest
const InputContinuousLane = 0b0000000000000000000000000000100;
const DefaultLane        = 0b0000000000000000000000000010000;
const TransitionLane     = 0b0000000000000000000001000000000;
const IdleLane           = 0b0100000000000000000000000000000;  // Lowest

// Multiple lanes can be scheduled together
const BatchedLanes = InputContinuousLane | DefaultLane;

// Lane priority determines which updates process first
function getHighestPriorityLane(lanes: Lanes): Lane {
  return lanes & -lanes; // Bit trick: isolate rightmost set bit
}
```

**How Transitions Work:**

```typescript
// When you use startTransition
function startTransition(callback) {
  // 1. Set transition context
  ReactCurrentBatchConfig.transition = {};

  // 2. Run callback - state updates get TransitionLane priority
  callback();

  // 3. Clear transition context
  ReactCurrentBatchConfig.transition = null;
}

// Inside a transition
function handleClick() {
  startTransition(() => {
    // This update gets TransitionLane (low priority)
    setSearchResults(results);
  });

  // This update gets SyncLane (high priority)
  setInputValue(value);
}
```

**Interruptible Rendering:**

```typescript
// shouldYield checks if we should pause
function shouldYield(): boolean {
  const currentTime = performance.now();
  // Yield every 5ms to keep frame rate smooth
  return currentTime >= deadline;
}

// Work loop with interruption
function workLoopConcurrent() {
  while (workInProgress !== null && !shouldYield()) {
    performUnitOfWork(workInProgress);
  }

  if (workInProgress !== null) {
    // More work to do - schedule continuation
    scheduleCallback(performConcurrentWorkOnRoot);
  }
}
```

**Effect Lists (Pre-React 18):**

```
Before React 18, effects were collected in a linked list:

fiber1 (Placement) → fiber2 (Update) → fiber3 (Deletion)
      ↓                    ↓                   ↓
  appendChild          setAttribute        removeChild
```

**Subtree Flags (React 18+):**

```typescript
// Now effects are tracked via subtreeFlags
function bubbleProperties(fiber: Fiber) {
  let subtreeFlags = NoFlags;
  let child = fiber.child;

  while (child !== null) {
    subtreeFlags |= child.subtreeFlags;
    subtreeFlags |= child.flags;
    child = child.sibling;
  }

  fiber.subtreeFlags = subtreeFlags;
}

// During commit, only traverse subtrees with flags
function commitMutationEffects(fiber: Fiber) {
  if (fiber.subtreeFlags & MutationMask) {
    // Children have mutations - traverse down
    let child = fiber.child;
    while (child !== null) {
      commitMutationEffects(child);
      child = child.sibling;
    }
  }

  if (fiber.flags & MutationMask) {
    // This fiber has mutations - apply them
    commitWork(fiber);
  }
}
```

**Debug Tools:**

```jsx
// React DevTools Profiler shows:
// - Commit duration (how long commit phase took)
// - Render duration (how long render phase took)
// - Which components rendered and why

// Programmatic profiling
<Profiler id="MyComponent" onRender={(
  id,
  phase,           // "mount" | "update"
  actualDuration,  // Time spent rendering
  baseDuration,    // Time without memoization
  startTime,
  commitTime
) => {
  console.log(`${id} ${phase}: ${actualDuration}ms`);
}}>
  <MyComponent />
</Profiler>
```

**Senior insight:** Understanding the work loop explains React's performance characteristics: why component order matters, why effects run in a specific order, and why state updates batch together. The lane system is why `useTransition` can keep the UI responsive—it literally assigns lower priority bits to those updates. When debugging render performance, think in terms of fibers: each fiber is a unit of work that can be measured, profiled, and optimized independently.

---

### Q: How do you implement advanced Suspense patterns for data fetching and streaming SSR?

**Answer:**

Suspense is React's mechanism for declaratively handling async operations. While initially focused on code-splitting, it now powers data fetching and streaming SSR in React 18+.

**Suspense Mental Model:**

```jsx
// Suspense catches "promises" thrown by children
// When a promise is thrown:
// 1. React shows the fallback
// 2. When promise resolves, React re-renders the subtree
// 3. This time, the component returns real content

<Suspense fallback={<Loading />}>
  <AsyncComponent />  {/* Throws a promise when loading */}
</Suspense>
```

**Building a Suspense-Compatible Data Source:**

```typescript
// The "throw a promise" pattern
interface Resource<T> {
  read(): T;
}

function createResource<T>(promise: Promise<T>): Resource<T> {
  let status: 'pending' | 'success' | 'error' = 'pending';
  let result: T;
  let error: Error;

  const suspender = promise.then(
    (data) => {
      status = 'success';
      result = data;
    },
    (err) => {
      status = 'error';
      error = err;
    }
  );

  return {
    read() {
      switch (status) {
        case 'pending':
          throw suspender;  // Suspense catches this
        case 'error':
          throw error;      // Error boundary catches this
        case 'success':
          return result;
      }
    },
  };
}

// Usage
const userResource = createResource(fetchUser(userId));

function UserProfile() {
  const user = userResource.read(); // Suspends until ready
  return <h1>{user.name}</h1>;
}

<Suspense fallback={<Skeleton />}>
  <UserProfile />
</Suspense>
```

**React Query / TanStack Query with Suspense:**

```tsx
// Modern approach: use a library that supports Suspense

import { useSuspenseQuery } from '@tanstack/react-query';

function UserProfile({ userId }: { userId: string }) {
  // This hook suspends automatically
  const { data: user } = useSuspenseQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  // data is guaranteed to exist here (no loading check needed)
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<UserSkeleton />}>
      <UserProfile userId="123" />
    </Suspense>
  );
}
```

**Nested Suspense Boundaries:**

```tsx
// Fine-grained loading states with nested boundaries

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header loads independently */}
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>

      <div className="content">
        {/* Sidebar loads independently */}
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>

        {/* Main content loads independently */}
        <Suspense fallback={<MainContentSkeleton />}>
          <MainContent />

          {/* Nested: widgets load after main content */}
          <Suspense fallback={<WidgetsSkeleton />}>
            <Widgets />
          </Suspense>
        </Suspense>
      </div>
    </div>
  );
}
```

**SuspenseList for Coordinated Loading:**

```tsx
// Control reveal order of multiple Suspense boundaries
import { SuspenseList } from 'react';

function Feed() {
  return (
    <SuspenseList revealOrder="forwards" tail="collapsed">
      {/* Posts reveal in order, even if later ones load first */}
      {posts.map(post => (
        <Suspense key={post.id} fallback={<PostSkeleton />}>
          <Post id={post.id} />
        </Suspense>
      ))}
    </SuspenseList>
  );
}

// revealOrder options:
// - "forwards": reveal in order (top to bottom)
// - "backwards": reveal in reverse order
// - "together": reveal all at once when all ready

// tail options:
// - "collapsed": show only one fallback at a time
// - "hidden": show no fallbacks for unrevealed items
```

**Suspense with useTransition (Avoid Unwanted Fallbacks):**

```tsx
function SearchResults() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Immediate update (high priority)
    setQuery(value);

    // Deferred update (low priority)
    startTransition(() => {
      // This won't trigger Suspense fallback
      // Instead, isPending becomes true
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />

      {/* Show stale content with pending indicator instead of fallback */}
      <div style={{ opacity: isPending ? 0.7 : 1 }}>
        <Suspense fallback={<ResultsSkeleton />}>
          <Results query={query} />
        </Suspense>
      </div>
    </div>
  );
}
```

**Streaming SSR with Suspense:**

```tsx
// Server component (Next.js App Router or similar)

// app/page.tsx
export default function Page() {
  return (
    <html>
      <body>
        <header>
          <nav>Always rendered immediately</nav>
        </header>

        {/* This streams in when ready */}
        <Suspense fallback={<MainSkeleton />}>
          <MainContent />
        </Suspense>

        {/* This can stream independently */}
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
      </body>
    </html>
  );
}

// React Server Component that fetches data
async function MainContent() {
  const data = await fetchMainContent(); // Server-side fetch

  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </main>
  );
}
```

**How Streaming Works:**

```html
<!-- Initial HTML sent immediately -->
<html>
  <body>
    <header><nav>...</nav></header>

    <!-- Placeholder with fallback -->
    <template id="B:0"></template>
    <div>Loading main content...</div>
    <!--/$-->

    <template id="B:1"></template>
    <div>Loading sidebar...</div>
    <!--/$-->

    <!-- React runtime to handle streaming -->
    <script src="/_next/static/chunks/main.js"></script>
  </body>
</html>

<!-- Streamed later when MainContent resolves -->
<script>
  $RC = function(b, c) {
    // Replaces template B:0 with actual content
  };
  $RC("B:0", "<main><h1>Title</h1><p>Content</p></main>");
</script>

<!-- Streamed even later when Sidebar resolves -->
<script>
  $RC("B:1", "<aside>Sidebar content</aside>");
</script>
```

**Error Handling with Suspense:**

```tsx
// Combine Suspense with Error Boundaries

function DataComponent() {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <Suspense fallback={<Loading />}>
        <DataFetcher />
      </Suspense>
    </ErrorBoundary>
  );
}

// With react-error-boundary library
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset any state that caused the error
        queryClient.clear();
      }}
    >
      <Suspense fallback={<GlobalLoading />}>
        <Routes />
      </Suspense>
    </ErrorBoundary>
  );
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
```

**Preloading Data:**

```tsx
// Preload data before Suspense boundary is rendered

import { preload } from 'react-dom';

// Preload on hover
function ProductLink({ productId }) {
  const handleMouseEnter = () => {
    // Start fetching before navigation
    preloadProduct(productId);
  };

  return (
    <Link
      to={`/products/${productId}`}
      onMouseEnter={handleMouseEnter}
    >
      View Product
    </Link>
  );
}

// In React Query
function preloadProduct(id: string) {
  queryClient.prefetchQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  });
}
```

**Suspense Boundaries Strategy:**

| Granularity | Pros | Cons |
|-------------|------|------|
| Page-level | Simple, fewer boundaries | All-or-nothing loading |
| Section-level | Independent loading | More complexity |
| Component-level | Maximum parallelism | Many loading states |

**Senior insight:** Suspense inverts the loading state paradigm—instead of components managing their own loading states, they simply declare what data they need, and boundaries handle the rest. For SSR, Suspense enables streaming, which dramatically improves Time to First Byte by sending HTML as it's ready. The key architectural decision is boundary placement: too few boundaries mean users wait longer; too many create a "popcorn" loading experience. Use useTransition to prevent Suspense fallbacks during navigation—users prefer stale content with a loading indicator over a full skeleton.