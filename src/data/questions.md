# Senior React.js Interview Questions & Answers

A comprehensive guide with detailed answers for Senior Frontend/React.js Developer interviews.

---

## Table of Contents

1. [React Core Concepts](#1-react-core-concepts)
2. [React Hooks](#2-react-hooks)
3. [Performance Optimization](#3-performance-optimization)
4. [State Management](#4-state-management)
5. [Architecture & Design Patterns](#5-architecture--design-patterns)
6. [System Design](#6-system-design)
7. [TypeScript with React](#7-typescript-with-react)
8. [Testing](#8-testing)
9. [Server-Side Rendering & Modern React](#9-server-side-rendering--modern-react)
10. [JavaScript Fundamentals](#10-javascript-fundamentals)
11. [Behavioral & Leadership](#11-behavioral--leadership)
12. [Code Review & Quality](#12-code-review--quality)
13. [React 19 & Latest Features](#13-react-19--latest-features)
14. [Accessibility (A11y)](#14-accessibility-a11y)
15. [Advanced Component Patterns](#15-advanced-component-patterns)
16. [Frontend Monitoring & Observability](#16-frontend-monitoring--observability)
17. [Additional System Design Questions](#17-additional-system-design-questions)
18. [Tricky & Edge Case Questions](#18-tricky--edge-case-questions)

---

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

## 2. React Hooks

### Q: Explain the Rules of Hooks and why they exist

**Answer:**

**Rules:**

1. **Only call Hooks at the top level** - Not inside loops, conditions, or nested functions
2. **Only call Hooks from React functions** - Function components or custom hooks

**Why These Rules Exist:**

React relies on **call order** to associate hook calls with their state. Hooks don't have names - React uses an internal index.

```jsx
// ❌ BROKEN - Conditional hook
function Component({ isLoggedIn }) {
  if (isLoggedIn) {
    const [user, setUser] = useState(null); // Hook #1 sometimes
  }
  const [theme, setTheme] = useState('dark'); // Hook #1 or #2?
}

// React's internal tracking:
// Render 1: [user, theme] - indices 0, 1
// Render 2: [theme] - index 0 now points to wrong state!
```

**How React Tracks Hooks Internally:**

```jsx
// Simplified internal representation
let hookIndex = 0;
let hooks = [];

function useState(initial) {
  const index = hookIndex++;
  if (hooks[index] === undefined) {
    hooks[index] = initial;
  }
  const setState = (newValue) => {
    hooks[index] = newValue;
    rerender();
  };
  return [hooks[index], setState];
}
```

**Senior insight:** The `eslint-plugin-react-hooks` plugin enforces these rules. Enable `react-hooks/rules-of-hooks` (error) and `react-hooks/exhaustive-deps` (warn) in your ESLint config. These catch subtle bugs at compile time.

---

### Q: What's the difference between useState and useRef?

**Answer:**

| Aspect | useState | useRef |
|--------|----------|--------|
| Re-renders | Triggers re-render | Does NOT trigger re-render |
| Value access | `state` | `ref.current` |
| Update method | `setState(newValue)` | `ref.current = newValue` |
| Persistence | Across renders | Across renders |

**When to Use Each:**

```jsx
// useState: Value that affects UI
const [count, setCount] = useState(0);

// useRef: Value that persists but doesn't affect UI
const renderCount = useRef(0);
const intervalId = useRef(null);
const inputRef = useRef(null);

function Component() {
  renderCount.current++; // Doesn't cause re-render

  // Store interval ID without causing re-renders
  useEffect(() => {
    intervalId.current = setInterval(() => {}, 1000);
    return () => clearInterval(intervalId.current);
  }, []);

  // Access DOM element
  return <input ref={inputRef} />;
}
```

**Common useRef Use Cases:**

1. **DOM access** - Focus, scroll, measure elements
2. **Storing mutable values** - Previous props/state, timers, subscriptions
3. **Instance variables** - Values that shouldn't trigger re-render
4. **Storing latest value in closures** - Avoid stale closure issues

```jsx
// Pattern: Latest value ref (avoiding stale closures)
function useLatest(value) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

function Component({ onSave }) {
  const onSaveRef = useLatest(onSave);

  useEffect(() => {
    const interval = setInterval(() => {
      onSaveRef.current(); // Always latest, no dependency needed
    }, 5000);
    return () => clearInterval(interval);
  }, []); // Empty deps is correct!
}
```

**Senior insight:** Updating `ref.current` during render is fine but considered a side effect. The value is immediately available but won't trigger UI updates. Use refs for values you need to read in callbacks without adding them to dependency arrays.

---

### Q: Why can't you use async directly with useEffect?

**Answer:**

`useEffect` expects either `undefined` or a **cleanup function** as its return value. An async function always returns a Promise.

```jsx
// ❌ WRONG - Returns a Promise
useEffect(async () => {
  const data = await fetchData();
  setData(data);
}, []); // React warns: "useEffect function must return a cleanup function or nothing"

// ✅ CORRECT - Define async function inside
useEffect(() => {
  async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  }
  fetchData();
}, []);

// ✅ CORRECT - IIFE pattern
useEffect(() => {
  (async () => {
    const data = await fetchData();
    setData(data);
  })();
}, []);
```

**Handling Race Conditions:**

```jsx
useEffect(() => {
  let cancelled = false;

  async function fetchData() {
    const response = await fetch(`/api/user/${userId}`);
    const data = await response.json();

    if (!cancelled) {
      setUser(data); // Only update if not cancelled
    }
  }

  fetchData();

  return () => {
    cancelled = true; // Cleanup: ignore stale responses
  };
}, [userId]);
```

**With AbortController:**

```jsx
useEffect(() => {
  const controller = new AbortController();

  async function fetchData() {
    try {
      const response = await fetch('/api/data', {
        signal: controller.signal
      });
      const data = await response.json();
      setData(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err);
      }
    }
  }

  fetchData();

  return () => controller.abort();
}, []);
```

**Senior insight:** For data fetching, consider React Query or SWR instead of raw useEffect. They handle caching, race conditions, loading states, and retries out of the box.

---

### Q: When does useEffect run vs useLayoutEffect?

**Answer:**

```
Browser Paint Timeline:

  Render → DOM Update → useLayoutEffect → Paint → useEffect
                        (sync, blocking)          (async, non-blocking)
```

| Aspect | useEffect | useLayoutEffect |
|--------|-----------|-----------------|
| Timing | After paint | Before paint |
| Blocking | No | Yes |
| Use case | Data fetching, subscriptions | DOM measurements, synchronous mutations |

**useEffect (Default - Use 99% of time):**
```jsx
useEffect(() => {
  // Runs after browser paints
  // Good for: data fetching, subscriptions, logging
  fetchData();
}, []);
```

**useLayoutEffect (Rare - DOM measurements):**
```jsx
function Tooltip({ targetRef }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    // Runs BEFORE browser paints
    // No flash of incorrect position
    const rect = targetRef.current.getBoundingClientRect();
    setPosition({ top: rect.bottom, left: rect.left });
  }, [targetRef]);

  return <div style={position}>Tooltip</div>;
}
```

**When useLayoutEffect is Required:**

1. **Measuring DOM** before showing (tooltips, popovers)
2. **Synchronous DOM mutations** (scroll position, focus)
3. **Preventing visual flicker** when state depends on DOM

```jsx
// ❌ useEffect - User sees flash
useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }
}, [messages]);

// ✅ useLayoutEffect - Scroll happens before paint
useLayoutEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }
}, [messages]);
```

**Senior insight:** `useLayoutEffect` fires synchronously and blocks the browser. Overusing it degrades performance. Stick with `useEffect` unless you see visual glitches. Also note: `useLayoutEffect` warns in SSR - use `useEffect` or check `typeof window`.

---

### Q: Explain useCallback vs useMemo - when to use each?

**Answer:**

Both are memoization hooks, but for different things:

| Hook | Memoizes | Returns |
|------|----------|---------|
| `useMemo` | Computed value | The value |
| `useCallback` | Function definition | The function |

```jsx
// useMemo: Memoize expensive COMPUTATION
const sortedList = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// useCallback: Memoize FUNCTION REFERENCE
const handleClick = useCallback((id) => {
  setSelected(id);
}, []);

// They're equivalent:
useCallback(fn, deps)  ===  useMemo(() => fn, deps)
```

**When to Use useCallback:**

```jsx
// ✅ Passing callback to memoized child
const MemoizedList = React.memo(({ items, onItemClick }) => {
  return items.map(item => (
    <Item key={item.id} onClick={() => onItemClick(item.id)} />
  ));
});

function Parent() {
  const [items, setItems] = useState([]);

  // Without useCallback, MemoizedList re-renders every time
  const handleItemClick = useCallback((id) => {
    console.log('Clicked:', id);
  }, []);

  return <MemoizedList items={items} onItemClick={handleItemClick} />;
}
```

**When to Use useMemo:**

```jsx
// ✅ Expensive computation
const stats = useMemo(() => {
  return {
    total: items.reduce((sum, i) => sum + i.value, 0),
    average: items.length ? total / items.length : 0,
    max: Math.max(...items.map(i => i.value))
  };
}, [items]);

// ✅ Referential equality for objects/arrays
const filters = useMemo(() => ({
  status: activeStatus,
  search: searchTerm
}), [activeStatus, searchTerm]);

// Now can use in dependency arrays without infinite loops
useEffect(() => {
  fetchData(filters);
}, [filters]);
```

**When NOT to Use:**

```jsx
// ❌ Premature optimization - simple computation
const doubled = useMemo(() => count * 2, [count]); // Just do: count * 2

// ❌ Not passed to memoized components
const handleClick = useCallback(() => {}, []); // Used only in <button>, not needed
```

**Senior insight:** Profile before optimizing. The memoization itself has cost (comparing deps, storing values). Dan Abramov's rule: "useMemo/useCallback are for referential equality, not avoiding re-computation."

---

### Q: What are stale closures and how do you avoid them?

**Answer:**

A **stale closure** occurs when a function captures old values of variables from a previous render.

```jsx
// ❌ Stale closure problem
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count); // Always logs 0! Stale closure.
      setCount(count + 1); // Always sets to 1!
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty deps = closure captures initial count (0)

  return <div>{count}</div>;
}
```

**Solutions:**

**1. Functional State Updates:**
```jsx
useEffect(() => {
  const interval = setInterval(() => {
    setCount(c => c + 1); // ✅ Always gets latest value
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

**2. Add to Dependency Array:**
```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log(count); // ✅ Fresh value
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(interval);
}, [count]); // ⚠️ But interval restarts on every count change
```

**3. useRef for Latest Value:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count; // Always sync to latest

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(countRef.current); // ✅ Always latest
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
}
```

**4. useEffectEvent (React experimental):**
```jsx
// Future solution - captures latest without being a dependency
const onTick = useEffectEvent(() => {
  console.log(count); // Always latest, not a dependency
});

useEffect(() => {
  const interval = setInterval(onTick, 1000);
  return () => clearInterval(interval);
}, []); // No stale closure!
```

**Senior insight:** Stale closures are the most common hooks bug. The `exhaustive-deps` ESLint rule catches most cases. When you need to break the rules, use refs deliberately and document why.

---

### Q: What is useTransition and when would you use it?

**Answer:**

`useTransition` marks state updates as **non-urgent**, allowing React to interrupt them for urgent updates (like typing).

```jsx
function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;

    // Urgent: Update input immediately
    setQuery(value);

    // Non-urgent: Can be interrupted
    startTransition(() => {
      setResults(filterLargeList(value)); // Expensive operation
    });
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <Spinner />}
      <ResultsList results={results} />
    </div>
  );
}
```

**How It Works:**

1. User types "a" → Input updates immediately
2. React starts filtering (non-urgent)
3. User types "b" → React **interrupts** filtering
4. Input updates to "ab" immediately
5. React restarts filtering with "ab"

**Use Cases:**

1. **Search/Filter** large datasets
2. **Tab switching** with heavy content
3. **Navigation** while keeping old page visible
4. **Any expensive render** triggered by user input

**vs useDeferredValue:**

```jsx
// useTransition: You control when to wrap updates
const [isPending, startTransition] = useTransition();
startTransition(() => setQuery(value));

// useDeferredValue: Defer a VALUE
const deferredQuery = useDeferredValue(query);
// deferredQuery lags behind during typing
```

**Senior insight:** `useTransition` is for when you have control over the state update. `useDeferredValue` is for when you receive a value (e.g., from props) and want to defer its effects. Both leverage Concurrent React.

---

### Q: Implement a custom useDebounce hook

**Answer:**

```jsx
import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      searchAPI(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
```

**Alternative: Debounced Callback**

```jsx
import { useCallback, useRef } from 'react';

function useDebouncedCallback(callback, delay) {
  const timeoutRef = useRef(null);

  const debouncedCallback = useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
}

// Usage
function Search() {
  const [results, setResults] = useState([]);

  const debouncedSearch = useDebouncedCallback((query) => {
    searchAPI(query).then(setResults);
  }, 300);

  return <input onChange={e => debouncedSearch(e.target.value)} />;
}
```

**Senior insight:** The value-based `useDebounce` is simpler but creates a new state. The callback version is more flexible for async operations. Consider `useDeferredValue` for built-in React debouncing that integrates with Concurrent features.

---

## 3. Performance Optimization

### Q: How do you identify performance bottlenecks in React?

**Answer:**

**1. React DevTools Profiler:**
```
- Record a session
- Look for:
  - Components that render often
  - Long render times (>16ms blocks a frame)
  - Components re-rendering when they shouldn't
  - "Why did this render?" feature
```

**2. Chrome DevTools Performance Tab:**
```
- Record while interacting
- Look for:
  - Long tasks (red blocks)
  - JavaScript execution time
  - Layout thrashing
  - Forced reflows
```

**3. Lighthouse / Web Vitals:**
```jsx
import { onCLS, onFID, onLCP } from 'web-vitals';

onCLS(console.log);  // Cumulative Layout Shift
onFID(console.log);  // First Input Delay
onLCP(console.log);  // Largest Contentful Paint
```

**4. Bundle Analysis:**
```bash
# webpack-bundle-analyzer
npx webpack-bundle-analyzer stats.json

# Vite
npx vite-bundle-visualizer
```

**5. Add Measurement in Code:**
```jsx
function SlowComponent({ data }) {
  console.time('SlowComponent render');
  const result = expensiveOperation(data);
  console.timeEnd('SlowComponent render');

  return <div>{result}</div>;
}

// Or use Profiler component
<Profiler id="SlowComponent" onRender={(id, phase, duration) => {
  console.log(`${id} ${phase} took ${duration}ms`);
}}>
  <SlowComponent />
</Profiler>
```

**Common Bottlenecks:**

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| Typing lag | Re-rendering large tree | useTransition, memo |
| List scroll jank | Too many DOM nodes | Virtualization |
| Slow initial load | Large bundle | Code splitting |
| Memory growth | Event listener leaks | Cleanup in useEffect |

**Senior insight:** Don't optimize blindly. Profile first, identify the specific bottleneck, then apply targeted fixes. Premature optimization often adds complexity without measurable benefit.

---

### Q: What causes unnecessary re-renders and how do you prevent them?

**Answer:**

**Causes of Re-renders:**

1. **Parent re-renders** (children re-render by default)
2. **State changes**
3. **Context value changes**
4. **Props change** (reference equality matters)

**Prevention Strategies:**

**1. Memoize Components:**
```jsx
const MemoizedChild = React.memo(Child);

// With custom comparison
const MemoizedChild = React.memo(Child, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
```

**2. Stabilize Object/Array Props:**
```jsx
// ❌ New object every render
<Child style={{ color: 'red' }} />
<Child items={items.filter(x => x.active)} />
<Child onClick={() => handleClick(id)} />

// ✅ Stable references
const style = useMemo(() => ({ color: 'red' }), []);
const activeItems = useMemo(() => items.filter(x => x.active), [items]);
const handleClick = useCallback((id) => {}, []);

<Child style={style} />
<Child items={activeItems} />
<Child onClick={() => handleClick(id)} /> // Still new function, but cheap
```

**3. Split Context:**
```jsx
// ❌ All consumers re-render when ANY value changes
const AppContext = createContext({ user, theme, settings });

// ✅ Split into separate contexts
const UserContext = createContext(null);
const ThemeContext = createContext(null);
```

**4. Move State Down:**
```jsx
// ❌ State too high - entire tree re-renders
function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <Header />
      <HoverableItem hovered={hovered} onHover={setHovered} />
      <Footer />
    </div>
  );
}

// ✅ Colocate state with component that needs it
function App() {
  return (
    <div>
      <Header />
      <HoverableItem /> {/* State inside */}
      <Footer />
    </div>
  );
}
```

**5. Children as Props Pattern:**
```jsx
// ❌ Scroll handler causes children re-render
function ScrollContainer({ children }) {
  const [scrollTop, setScrollTop] = useState(0);
  return (
    <div onScroll={e => setScrollTop(e.target.scrollTop)}>
      {children} {/* Re-renders on scroll! */}
    </div>
  );
}

// ✅ Children created in parent, not affected
function Parent() {
  return (
    <ScrollContainer>
      <ExpensiveChild /> {/* Created here, stable reference */}
    </ScrollContainer>
  );
}
```

**Senior insight:** React.memo is not free - it adds comparison overhead. Use it when: (1) component renders often with same props, (2) component is expensive to render, (3) parent re-renders frequently but child props don't change.

---

### Q: How would you render a list of 10,000 items efficiently?

**Answer:**

**The Problem:**
- 10,000 DOM nodes = slow initial render, high memory, laggy scroll
- Each item re-renders on list change

**Solution: Virtualization (Windowing)**

Only render items visible in the viewport + small buffer. As user scrolls, recycle DOM nodes.

```jsx
// Using react-window (lightweight)
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={600}
      width={400}
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}

// Variable height items
import { VariableSizeList } from 'react-window';

function VirtualList({ items }) {
  const getItemSize = (index) => items[index].height;

  return (
    <VariableSizeList
      height={600}
      width={400}
      itemCount={items.length}
      itemSize={getItemSize}
    >
      {Row}
    </VariableSizeList>
  );
}
```

**With react-virtualized (full-featured):**
```jsx
import { List, AutoSizer } from 'react-virtualized';

function VirtualList({ items }) {
  const rowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      {items[index].name}
    </div>
  );

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          rowCount={items.length}
          rowHeight={50}
          rowRenderer={rowRenderer}
        />
      )}
    </AutoSizer>
  );
}
```

**Additional Optimizations:**

1. **Memoize row component:**
```jsx
const Row = React.memo(({ data, index, style }) => (
  <div style={style}>{data[index].name}</div>
));
```

2. **Use itemData prop:**
```jsx
<FixedSizeList itemData={items}>
  {Row}
</FixedSizeList>

// Row receives data prop instead of closure
const Row = ({ data, index, style }) => <div style={style}>{data[index].name}</div>;
```

3. **Overscan for smooth scrolling:**
```jsx
<FixedSizeList overscanCount={5}> {/* Render 5 extra items above/below */}
```

**Senior insight:** Virtualization adds complexity - use it when you actually have performance issues with large lists. For < 100 items, regular rendering is usually fine. For 100-500, try pagination first. For 500+, virtualization is typically needed.

---

### Q: Explain state colocation - why keep state as local as possible?

**Answer:**

**State Colocation** means placing state as close as possible to where it's used.

**Benefits:**

1. **Performance** - Fewer components re-render
2. **Maintainability** - Easier to understand data flow
3. **Encapsulation** - Component is self-contained
4. **Testing** - Component can be tested in isolation

```jsx
// ❌ State too high - App re-renders on every hover
function App() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div>
      <Header /> {/* Re-renders on hover */}
      <Sidebar /> {/* Re-renders on hover */}
      <List>
        {items.map(item => (
          <ListItem
            key={item.id}
            isHovered={hoveredId === item.id}
            onHover={() => setHoveredId(item.id)}
          />
        ))}
      </List>
    </div>
  );
}

// ✅ State colocated - Only ListItem re-renders
function ListItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={isHovered ? 'highlighted' : ''}
    >
      {item.name}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <List>
        {items.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </List>
    </div>
  );
}
```

**State Location Decision Tree:**

```
Does multiple components need this state?
├── No → Keep in component (useState)
└── Yes → Does it need to go through many levels?
    ├── No → Lift to common parent
    └── Yes → Is it frequently updated?
        ├── No → Context is fine
        └── Yes → Consider state library or split context
```

**Senior insight:** "Lift state up" is common advice, but "push state down" is equally important. Every time you lift state, you're trading encapsulation and performance for shared access. Start local, lift only when needed.

---

## 4. State Management

### Q: When to use useState vs useReducer?

**Answer:**

| Use Case | useState | useReducer |
|----------|----------|------------|
| Simple values | ✅ | Overkill |
| Complex objects | ⚠️ | ✅ |
| Related state updates | ❌ | ✅ |
| State depends on prev state | ✅ (functional update) | ✅ |
| Testing state logic | Harder | Easy (pure function) |
| Next state depends on action type | ❌ | ✅ |

**useState - Simple cases:**
```jsx
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [items, setItems] = useState([]);
```

**useReducer - Complex state logic:**
```jsx
const initialState = {
  loading: false,
  error: null,
  data: null,
};

function dataReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function DataFetcher() {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  async function fetchData() {
    dispatch({ type: 'FETCH_START' });
    try {
      const data = await api.fetch();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }

  return (
    <div>
      {state.loading && <Spinner />}
      {state.error && <Error message={state.error} />}
      {state.data && <DataView data={state.data} />}
    </div>
  );
}
```

**Signals to switch to useReducer:**
- Multiple `setState` calls that should happen together
- State updates that depend on other state values
- Complex state shape with nested objects
- You want to test state transitions in isolation

**Senior insight:** You can combine both: use `useReducer` for complex state, `useState` for simple UI state in the same component. Also, `useReducer` is helpful when passing `dispatch` down (stable reference, unlike callbacks).

---

### Q: Explain Redux's three core principles

**Answer:**

**1. Single Source of Truth**
```jsx
// Entire app state in one store
const store = {
  user: { id: 1, name: 'John' },
  posts: [...],
  ui: { theme: 'dark', sidebarOpen: true }
};

// Access from anywhere
const user = useSelector(state => state.user);
```

**Why:** Predictable, debuggable, enables time-travel, easy to persist/hydrate.

**2. State is Read-Only**
```jsx
// ❌ Never mutate directly
state.user.name = 'Jane';

// ✅ Only change via actions
dispatch({ type: 'UPDATE_USER', payload: { name: 'Jane' } });
```

**Why:** All changes are explicit/trackable, enables middleware, prevents race conditions.

**3. Changes Made with Pure Functions (Reducers)**
```jsx
// Reducers are pure: (state, action) => newState
function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, ...action.payload }; // New object, no mutation
    default:
      return state;
  }
}

// Pure function properties:
// - Same inputs → same output
// - No side effects
// - No mutations
```

**Why:** Predictable, testable, enables hot reloading, time-travel debugging.

**Redux Data Flow:**
```
Action → Middleware → Reducer → Store → UI
   ↑                                   |
   └───────────────────────────────────┘
                dispatch()
```

**Senior insight:** Redux's constraints feel restrictive but provide guarantees: any state change is traceable to an action, state is always consistent, and debugging is straightforward with Redux DevTools.

---

### Q: How do you handle async actions in Redux?

**Answer:**

Redux itself is synchronous. Async operations require middleware.

**1. Redux Thunk (Simple):**
```jsx
// Thunk = function that returns a function
function fetchUser(userId) {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCH_USER_START' });

    try {
      const response = await api.getUser(userId);
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_USER_ERROR', payload: error.message });
    }
  };
}

// Usage
dispatch(fetchUser(123));
```

**2. Redux Toolkit's createAsyncThunk (Recommended):**
```jsx
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getUser(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
```

**3. Redux Saga (Complex flows):**
```jsx
import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchUserSaga(action) {
  try {
    yield put({ type: 'FETCH_USER_START' });
    const user = yield call(api.getUser, action.payload);
    yield put({ type: 'FETCH_USER_SUCCESS', payload: user });
  } catch (error) {
    yield put({ type: 'FETCH_USER_ERROR', payload: error.message });
  }
}

function* rootSaga() {
  yield takeLatest('FETCH_USER_REQUEST', fetchUserSaga);
}
```

**When to Use What:**

| Middleware | Use When |
|------------|----------|
| Thunk | Simple async, most projects |
| RTK Query | Data fetching (built-in caching) |
| Saga | Complex flows, cancellation, racing, debouncing |

**Senior insight:** For data fetching, consider RTK Query or React Query instead of manual async actions. They handle caching, deduplication, and loading states automatically.

---

### Q: What is the difference between server state and client state?

**Answer:**

| Aspect | Client State | Server State |
|--------|--------------|--------------|
| Source | Originates in browser | Originates on server |
| Ownership | Frontend controls | Backend controls |
| Examples | UI state, form input, selected tab | User data, posts, comments |
| Sync | Immediate | Async, potentially stale |
| Persistence | Session/localStorage | Database |

**The Problem with Mixing Them:**
```jsx
// ❌ Treating server state like client state
const [users, setUsers] = useState([]);

useEffect(() => {
  fetchUsers().then(setUsers);
}, []);

// Problems:
// - No loading state
// - No error handling
// - No caching
// - No background refresh
// - No deduplication
// - No optimistic updates
```

**Proper Separation:**

```jsx
// ✅ Client state: useState/useReducer/Zustand
const [selectedUserId, setSelectedUserId] = useState(null);
const [sidebarOpen, setSidebarOpen] = useState(true);

// ✅ Server state: React Query/SWR/RTK Query
const { data: users, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 5 * 60 * 1000, // 5 minutes
});

// Combined
function UserList() {
  const { data: users } = useQuery(['users'], fetchUsers);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <ul>
      {users?.map(user => (
        <li
          key={user.id}
          onClick={() => setSelectedId(user.id)}
          className={selectedId === user.id ? 'selected' : ''}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}
```

**Server State Characteristics:**
- Cached and shared across components
- Can become stale (needs refetching)
- Requires loading/error states
- Requires background synchronization
- May need optimistic updates

**Senior insight:** Don't put server data in Redux just because you have Redux. Redux is great for complex client state but adds unnecessary boilerplate for server state. React Query/SWR handle server state concerns (caching, refetching, deduplication) out of the box.

---

## 5. Architecture & Design Patterns

### Q: How do you structure a large-scale React application?

**Answer:**

**Feature-Based Structure (Recommended):**

```
src/
├── app/                    # App-level setup
│   ├── App.tsx
│   ├── store.ts
│   └── routes.tsx
├── features/               # Feature modules
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── api/
│   │   │   └── authApi.ts
│   │   ├── store/
│   │   │   └── authSlice.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── index.ts        # Public API
│   ├── users/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.ts
│   └── dashboard/
├── shared/                 # Shared across features
│   ├── components/         # Button, Modal, Input
│   ├── hooks/              # useDebounce, useLocalStorage
│   ├── utils/              # formatDate, validators
│   └── types/              # Common types
├── assets/
└── styles/
```

**Key Principles:**

1. **Feature Encapsulation:**
```typescript
// features/users/index.ts - Public API
export { UserList } from './components/UserList';
export { useUser } from './hooks/useUser';
export type { User } from './types';

// Other features import from index, not internal paths
import { UserList, useUser } from '@/features/users';
```

2. **Dependency Direction:**
```
features/ → shared/   ✅
features/ → features/ ⚠️ (careful, use shared)
shared/ → features/   ❌
```

3. **Co-location:**
- Tests next to components
- Types with their feature
- Styles with components (CSS modules/styled-components)

**Alternative: Feature-Sliced Design (FSD):**

```
src/
├── app/          # App initialization
├── processes/    # Complex multi-page flows
├── pages/        # Page components
├── widgets/      # Page sections
├── features/     # User interactions
├── entities/     # Business entities
└── shared/       # Reusable utilities
```

**Senior insight:** Start simple, restructure as needed. A feature folder is justified when it has 3+ components or is reused. Avoid premature abstraction - not everything needs to be in `shared/`.

---

### Q: What is Micro-Frontend architecture?

**Answer:**

**Micro-frontends** split a frontend monolith into independently deployable applications, each owned by different teams.

```
┌─────────────────────────────────────────────────────────┐
│                    Container/Shell                       │
├──────────────┬──────────────┬──────────────────────────┤
│   Header MFE │   Product MFE  │      Cart MFE          │
│   (React)    │   (Vue)        │      (React)           │
│   Team A     │   Team B       │      Team C            │
└──────────────┴──────────────┴──────────────────────────┘
```

**Implementation Approaches:**

**1. Module Federation (Webpack 5):**
```javascript
// products/webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/ProductList',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};

// shell/webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        products: 'products@http://localhost:3001/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};

// shell/src/App.js
const ProductList = React.lazy(() => import('products/ProductList'));
```

**2. Single-SPA (Framework agnostic):**
```javascript
// root-config.js
registerApplication({
  name: '@org/products',
  app: () => System.import('@org/products'),
  activeWhen: ['/products'],
});
```

**3. iframes (Simple but limited):**
```jsx
<iframe src="https://products.myapp.com" />
```

**When to Use Micro-frontends:**

✅ **Good fit:**
- Large teams (10+ frontend devs)
- Different release cycles per feature
- Teams with different tech preferences
- Legacy migration (gradual rewrite)

❌ **Avoid when:**
- Small team
- Single product focus
- Tight feature coupling
- Performance is critical

**Trade-offs:**

| Benefit | Cost |
|---------|------|
| Independent deployments | Increased complexity |
| Team autonomy | Potential inconsistent UX |
| Tech diversity | Larger bundle size |
| Isolated failures | Shared state challenges |

**Senior insight:** Micro-frontends solve organizational problems, not technical ones. If you don't have autonomous teams with clear boundaries, you'll get the complexity without the benefits. Start with a well-structured monolith.

---

### Q: When would you choose Redux over Context API?

**Answer:**

**Choose Context API when:**
```jsx
// ✅ Theme/locale (changes rarely)
const ThemeContext = createContext('light');

// ✅ User authentication (changes rarely)
const AuthContext = createContext(null);

// ✅ Configuration
const ConfigContext = createContext(defaultConfig);

// ✅ Small apps with limited global state
```

**Choose Redux when:**
```jsx
// ✅ Complex state logic
const orderReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': ...
    case 'REMOVE_ITEM': ...
    case 'APPLY_DISCOUNT': ...
    case 'UPDATE_SHIPPING': ...
  }
};

// ✅ Frequent updates (Redux can optimize selectors)
const selectActiveItems = createSelector(
  [selectItems, selectFilter],
  (items, filter) => items.filter(i => i.status === filter)
);

// ✅ Need middleware
const store = configureStore({
  middleware: [thunk, logger, analytics],
});

// ✅ Time-travel debugging needed
// ✅ Large team needs predictable patterns
```

**Comparison:**

| Aspect | Context | Redux |
|--------|---------|-------|
| Setup | Minimal | More boilerplate |
| Performance | Re-renders all consumers | Selective subscriptions |
| DevTools | Limited | Excellent |
| Middleware | No | Yes |
| Learning curve | Low | Medium |
| Best for | Infrequent updates | Complex/frequent updates |

**Context Performance Problem:**
```jsx
// ❌ Every consumer re-renders on ANY change
const AppContext = createContext({ user, theme, cart, notifications });

function Cart() {
  const { cart } = useContext(AppContext);
  // Re-renders when theme changes!
}

// ✅ Redux - only re-renders when selected value changes
function Cart() {
  const cart = useSelector(state => state.cart);
  // Only re-renders when cart changes
}
```

**Senior insight:** Context is for dependency injection (passing values down), not state management. For frequently updated global state with many consumers, Context causes unnecessary re-renders. Split contexts or use a state library.

---

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

## 7. TypeScript with React

### Q: How do you type component props?

**Answer:**

**Basic Props:**
```typescript
// Interface (preferred for props - extendable)
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;  // Optional
}

function Button({ label, onClick, disabled = false }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
}

// Type alias (fine too)
type ButtonProps = {
  label: string;
  onClick: () => void;
};
```

**Children Props:**
```typescript
// Explicit children
interface CardProps {
  title: string;
  children: React.ReactNode;
}

// Using PropsWithChildren
type CardProps = React.PropsWithChildren<{
  title: string;
}>;

// Render prop
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
```

**Event Handlers:**
```typescript
interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
```

**Extending HTML Elements:**
```typescript
// Extend native button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

function Button({ variant, children, ...rest }: ButtonProps) {
  return <button className={variant} {...rest}>{children}</button>;
}

// Usage includes all native button props
<Button variant="primary" disabled onClick={...}>Click</Button>
```

**Component as Prop:**
```typescript
interface LayoutProps {
  header: React.ReactNode;
  sidebar: React.ComponentType<{ collapsed: boolean }>;
}
```

**Senior insight:** Use `interface` for props (can be extended/merged), `type` for unions/complex types. Avoid `React.FC` - it adds implicit children and has issues with generics. Declare return type implicitly.

---

### Q: How do you type a polymorphic component?

**Answer:**

A **polymorphic component** can render as different HTML elements or components via an `as` prop.

```typescript
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

// Base props that all variants share
interface ButtonBaseProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

// Polymorphic props with generic
type ButtonProps<E extends ElementType> = ButtonBaseProps & {
  as?: E;
} & Omit<ComponentPropsWithoutRef<E>, keyof ButtonBaseProps | 'as'>;

// Component with generic default
function Button<E extends ElementType = 'button'>({
  as,
  variant = 'primary',
  children,
  ...props
}: ButtonProps<E>) {
  const Component = as || 'button';
  return (
    <Component className={`btn-${variant}`} {...props}>
      {children}
    </Component>
  );
}

// Usage - fully typed!
<Button onClick={() => {}}>Click</Button>
<Button as="a" href="/about">Link</Button>
<Button as={Link} to="/dashboard">Router Link</Button>

// ❌ Type error - href not valid on button
<Button href="/about">Error</Button>

// ❌ Type error - to not valid on anchor
<Button as="a" to="/about">Error</Button>
```

**Reusable Polymorphic Type:**

```typescript
// types/polymorphic.ts
type AsProp<E extends ElementType> = {
  as?: E;
};

type PropsToOmit<E extends ElementType, P> = keyof (AsProp<E> & P);

type PolymorphicComponentProps<
  E extends ElementType,
  Props = {}
> = Props & AsProp<E> & Omit<ComponentPropsWithoutRef<E>, PropsToOmit<E, Props>>;

// Usage
type TextProps<E extends ElementType> = PolymorphicComponentProps<E, {
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'bold';
}>;

function Text<E extends ElementType = 'span'>({
  as,
  size = 'md',
  weight = 'normal',
  ...props
}: TextProps<E>) {
  const Component = as || 'span';
  return <Component {...props} />;
}
```

**With forwardRef:**

```typescript
type PolymorphicRef<E extends ElementType> =
  ComponentPropsWithRef<E>['ref'];

type ButtonProps<E extends ElementType> = ButtonBaseProps & {
  as?: E;
} & Omit<ComponentPropsWithoutRef<E>, keyof ButtonBaseProps | 'as'>;

const Button = forwardRef(
  <E extends ElementType = 'button'>(
    { as, ...props }: ButtonProps<E>,
    ref: PolymorphicRef<E>
  ) => {
    const Component = as || 'button';
    return <Component ref={ref} {...props} />;
  }
);
```

**Senior insight:** Polymorphic components enable flexible, type-safe UI libraries. They're complex to type but provide excellent DX. Libraries like Radix and Chakra use this pattern extensively.

---

### Q: How do you use discriminated unions for component variants?

**Answer:**

**Discriminated unions** ensure props are valid combinations using a literal type discriminator.

```typescript
// ❌ Problem: Invalid prop combinations allowed
interface ButtonProps {
  variant: 'button' | 'link' | 'submit';
  href?: string;      // Only for link
  onClick?: () => void; // Only for button
  form?: string;      // Only for submit
}

// Nothing prevents: <Button variant="button" href="..." />

// ✅ Solution: Discriminated union
type ButtonProps =
  | { variant: 'button'; onClick: () => void }
  | { variant: 'link'; href: string; external?: boolean }
  | { variant: 'submit'; form?: string };

function Button(props: ButtonProps) {
  switch (props.variant) {
    case 'button':
      return <button onClick={props.onClick}>Click</button>;
    case 'link':
      return <a href={props.href} target={props.external ? '_blank' : undefined}>Link</a>;
    case 'submit':
      return <button type="submit" form={props.form}>Submit</button>;
  }
}

// ✅ Valid
<Button variant="button" onClick={() => {}} />
<Button variant="link" href="/about" external />
<Button variant="submit" form="myForm" />

// ❌ Type errors
<Button variant="button" href="/about" />  // href not allowed
<Button variant="link" onClick={() => {}} />  // onClick not allowed
```

**Real-World Example - Modal:**

```typescript
type ModalProps =
  | {
      type: 'alert';
      title: string;
      message: string;
      onClose: () => void;
    }
  | {
      type: 'confirm';
      title: string;
      message: string;
      onConfirm: () => void;
      onCancel: () => void;
    }
  | {
      type: 'custom';
      title: string;
      children: React.ReactNode;
      onClose: () => void;
    };

function Modal(props: ModalProps) {
  return (
    <div className="modal">
      <h2>{props.title}</h2>

      {props.type === 'alert' && (
        <>
          <p>{props.message}</p>
          <button onClick={props.onClose}>OK</button>
        </>
      )}

      {props.type === 'confirm' && (
        <>
          <p>{props.message}</p>
          <button onClick={props.onCancel}>Cancel</button>
          <button onClick={props.onConfirm}>Confirm</button>
        </>
      )}

      {props.type === 'custom' && props.children}
    </div>
  );
}
```

**API Response Handling:**

```typescript
type ApiResponse<T> =
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'success'; data: T };

function renderResponse<T>(
  response: ApiResponse<T>,
  renderData: (data: T) => React.ReactNode
) {
  switch (response.status) {
    case 'loading':
      return <Spinner />;
    case 'error':
      return <Error message={response.error.message} />;
    case 'success':
      return renderData(response.data);
  }
}
```

**Senior insight:** Discriminated unions are powerful for modeling mutually exclusive states. They make impossible states impossible and give exhaustive type checking in switch statements. Use when props have dependencies on each other.

---

## 8. Testing

### Q: What is the philosophy behind React Testing Library?

**Answer:**

**Core Principle:** "The more your tests resemble the way your software is used, the more confidence they can give you."

**Key Philosophy:**

1. **Test behavior, not implementation:**
```jsx
// ❌ Testing implementation (fragile)
expect(component.state.isOpen).toBe(true);
expect(wrapper.find('.dropdown-menu').length).toBe(1);

// ✅ Testing behavior (resilient)
await user.click(screen.getByRole('button', { name: 'Open menu' }));
expect(screen.getByRole('menu')).toBeVisible();
```

2. **Query like users do:**
```jsx
// Priority order (most to least preferred):
screen.getByRole('button', { name: 'Submit' })  // ✅ Best - accessible
screen.getByLabelText('Email')                   // ✅ Form fields
screen.getByPlaceholderText('Search...')         // ⚠️ OK
screen.getByText('Welcome')                      // ⚠️ OK for non-interactive
screen.getByTestId('submit-btn')                 // ❌ Last resort
```

3. **Avoid testing internal state:**
```jsx
// ❌ Don't test useState value directly
// ✅ Test the visible result of state changes
```

4. **Test from user's perspective:**
```jsx
// ❌ Shallow rendering - misses integration issues
const wrapper = shallow(<MyComponent />);

// ✅ Full rendering - tests real behavior
render(<MyComponent />);
```

**Testing Recipe:**

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('user can submit the form', async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();

  // 1. Arrange
  render(<ContactForm onSubmit={onSubmit} />);

  // 2. Act - simulate user behavior
  await user.type(screen.getByLabelText('Name'), 'John Doe');
  await user.type(screen.getByLabelText('Email'), 'john@example.com');
  await user.click(screen.getByRole('button', { name: 'Submit' }));

  // 3. Assert - verify outcome
  expect(onSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com'
  });
});
```

**Senior insight:** RTL's philosophy discourages testing implementation details (component internals, state values, lifecycle methods). This makes tests more maintainable - refactoring implementation doesn't break tests if behavior stays the same. The tradeoff is tests are slightly less isolated.

---

### Q: How do you test custom hooks?

**Answer:**

Use `@testing-library/react`'s `renderHook`:

```jsx
import { renderHook, act } from '@testing-library/react';

// Hook to test
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset };
}

// Tests
describe('useCounter', () => {
  test('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test('initializes with provided value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  test('increments counter', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test('handles multiple operations', () => {
    const { result } = renderHook(() => useCounter(5));

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.decrement();
    });

    expect(result.current.count).toBe(6);
  });
});
```

**Testing Async Hooks:**

```jsx
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchUser(userId)
      .then(setUser)
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
}

// Test
test('fetches user data', async () => {
  // Mock API
  jest.spyOn(api, 'fetchUser').mockResolvedValue({ id: 1, name: 'John' });

  const { result } = renderHook(() => useUser(1));

  // Initially loading
  expect(result.current.loading).toBe(true);

  // Wait for async update
  await waitFor(() => {
    expect(result.current.loading).toBe(false);
  });

  expect(result.current.user).toEqual({ id: 1, name: 'John' });
});
```

**Testing Hooks with Context:**

```jsx
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be within ThemeProvider');
  return context;
}

// Test with wrapper
test('returns theme from context', () => {
  const wrapper = ({ children }) => (
    <ThemeProvider theme="dark">{children}</ThemeProvider>
  );

  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.theme).toBe('dark');
});
```

**Senior insight:** Prefer testing hooks through components when possible (more realistic). Use `renderHook` for: complex hook logic, hooks with many return values, hooks intended for library distribution, or when isolating hook behavior specifically.

---

## 9. Server-Side Rendering & Modern React

### Q: Explain SSR vs CSR vs SSG vs ISR

**Answer:**

| Strategy | When HTML Generated | Use Case |
|----------|---------------------|----------|
| **CSR** | In browser (runtime) | Dashboards, apps behind auth |
| **SSR** | On server (per request) | Dynamic content, personalized pages |
| **SSG** | At build time | Blogs, docs, marketing pages |
| **ISR** | Build time + revalidation | E-commerce, news sites |

**CSR (Client-Side Rendering):**
```jsx
// Browser downloads JS, fetches data, renders
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);  // Fetch happens client-side
  }, []);

  return data ? <Content data={data} /> : <Loading />;
}

// Pros: Simple, cheap hosting, good for private content
// Cons: Slow initial load, poor SEO, loading spinners
```

**SSR (Server-Side Rendering):**
```jsx
// Next.js example - runs on EVERY request
export async function getServerSideProps(context) {
  const data = await fetchData(context.params.id);
  return { props: { data } };
}

export default function Page({ data }) {
  return <Content data={data} />;  // HTML sent with data
}

// Pros: SEO, fast first paint, personalized content
// Cons: Server cost, slower TTFB than static
```

**SSG (Static Site Generation):**
```jsx
// Next.js - runs at BUILD time only
export async function getStaticProps() {
  const posts = await fetchAllPosts();
  return { props: { posts } };
}

export async function getStaticPaths() {
  const posts = await fetchAllPosts();
  return {
    paths: posts.map(p => ({ params: { id: p.id } })),
    fallback: false,
  };
}

// Pros: Fastest, cheapest (CDN), secure
// Cons: Stale data, long builds for many pages
```

**ISR (Incremental Static Regeneration):**
```jsx
// Next.js - static + background revalidation
export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: { products },
    revalidate: 60,  // Regenerate every 60 seconds
  };
}

// Pros: Best of SSG + fresh data, scales well
// Cons: Stale-while-revalidate semantics
```

**Decision Tree:**
```
Is content public?
├── No → CSR (or SSR with auth)
└── Yes → Does it change often?
    ├── No → SSG
    └── Yes → Is it personalized per user?
        ├── Yes → SSR
        └── No → ISR or SSR
```

**Senior insight:** Modern frameworks (Next.js 13+) let you mix strategies per route. Use SSG for marketing pages, ISR for product listings, SSR for personalized content, and CSR for highly interactive dashboards - all in one app.

---

### Q: What are Server Components vs Client Components?

**Answer:**

**React Server Components (RSC)** run only on the server and never ship JavaScript to the client.

```jsx
// Server Component (default in Next.js App Router)
// ✅ Can: async/await, database access, file system, secrets
// ❌ Cannot: useState, useEffect, onClick, browser APIs

async function ProductList() {
  const products = await db.products.findMany();  // Direct DB access!

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name} - ${p.price}</li>
      ))}
    </ul>
  );
}

// Client Component
// Add "use client" directive at top
'use client';

import { useState } from 'react';

function AddToCartButton({ productId }) {
  const [loading, setLoading] = useState(false);

  return (
    <button onClick={() => addToCart(productId)}>
      Add to Cart
    </button>
  );
}
```

**Key Differences:**

| Aspect | Server Component | Client Component |
|--------|------------------|------------------|
| Runs on | Server only | Server + Client |
| JS shipped | No | Yes |
| State/Effects | ❌ | ✅ |
| Interactivity | ❌ | ✅ |
| Async/await | ✅ | ❌ (in render) |
| Access secrets | ✅ | ❌ |
| Import client comp | ✅ | ✅ |
| Import server comp | ✅ | ❌ |

**Composition Pattern:**

```jsx
// Server Component (page)
async function ProductPage({ params }) {
  const product = await getProduct(params.id);  // Server

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      {/* Client component for interactivity */}
      <AddToCartButton productId={product.id} />
      <ImageGallery images={product.images} />
    </div>
  );
}
```

**Benefits of Server Components:**

1. **Zero JS for static parts** - Smaller bundle
2. **Direct backend access** - No API layer needed
3. **Automatic code splitting** - Only interactive parts sent
4. **Streaming** - Progressive rendering

**When to Use Client Components:**

- Event handlers (onClick, onChange)
- useState, useEffect, useContext
- Browser APIs (localStorage, geolocation)
- Custom hooks with state
- Third-party libraries using hooks

**Senior insight:** Think of Server Components as the default, add 'use client' only when you need interactivity. Server Components can render Client Components (passing serializable props), but not vice versa. This mental model helps optimize bundle size automatically.

---

## 10. JavaScript Fundamentals

### Q: Explain closures and how they relate to React hooks

**Answer:**

A **closure** is a function that retains access to its lexical scope even when executed outside that scope.

```javascript
function createCounter() {
  let count = 0;  // Enclosed variable

  return function increment() {
    count++;      // Accesses count from outer scope
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2 - remembers count
```

**How React Hooks Use Closures:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  // This function closes over 'count'
  const handleClick = () => {
    console.log(count);  // Captures current count value
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```

**Each render creates a new closure:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count);  // ⚠️ Always logs the count from this render!
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Empty deps = closure captures initial count (0)

  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
// Clicking button updates UI, but interval always logs 0
```

**Stale Closure Problem:**

```jsx
// ❌ Stale closure - captures old value
useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1);  // Always uses initial count
  }, 1000);
  return () => clearInterval(id);
}, []);

// ✅ Solution 1: Functional update
setCount(c => c + 1);  // React passes latest value

// ✅ Solution 2: Add to dependencies
useEffect(() => {
  const id = setInterval(() => setCount(count + 1), 1000);
  return () => clearInterval(id);
}, [count]);  // Re-creates interval when count changes

// ✅ Solution 3: useRef for latest value
const countRef = useRef(count);
countRef.current = count;

useEffect(() => {
  const id = setInterval(() => {
    console.log(countRef.current);  // Always latest
  }, 1000);
  return () => clearInterval(id);
}, []);
```

**Senior insight:** Understanding closures is essential for debugging React. Every render creates new functions that close over current state/props. The dependency array in hooks determines when new closures are created. Stale closures cause bugs when old functions reference outdated values.

---

### Q: How does the event loop work? Microtasks vs macrotasks?

**Answer:**

JavaScript is single-threaded. The **event loop** enables async operations by managing a queue of tasks.

```
┌─────────────────────────────────────────────────────┐
│                    Call Stack                        │
│  (Currently executing code)                          │
└─────────────────────────────────────────────────────┘
                        ↓ Empty?
┌─────────────────────────────────────────────────────┐
│                 Microtask Queue                      │
│  (Promises, queueMicrotask, MutationObserver)       │
│  ALL processed before next macrotask                │
└─────────────────────────────────────────────────────┘
                        ↓ Empty?
┌─────────────────────────────────────────────────────┐
│                 Macrotask Queue                      │
│  (setTimeout, setInterval, I/O, UI rendering)       │
│  ONE processed per loop iteration                   │
└─────────────────────────────────────────────────────┘
```

**Key Difference:**

- **Microtasks**: All execute before rendering/next macrotask
- **Macrotasks**: One per event loop iteration

```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);  // Macrotask

Promise.resolve().then(() => console.log('3'));  // Microtask

console.log('4');

// Output: 1, 4, 3, 2
// Stack: 1, 4 → Microtasks: 3 → Macrotasks: 2
```

**Complex Example:**

```javascript
console.log('start');

setTimeout(() => {
  console.log('timeout 1');
  Promise.resolve().then(() => console.log('promise inside timeout'));
}, 0);

Promise.resolve().then(() => {
  console.log('promise 1');
  setTimeout(() => console.log('timeout inside promise'), 0);
});

setTimeout(() => console.log('timeout 2'), 0);

console.log('end');

// Output:
// start
// end
// promise 1
// timeout 1
// promise inside timeout
// timeout 2
// timeout inside promise
```

**React Implications:**

```jsx
// React 17 - setState in setTimeout NOT batched
setTimeout(() => {
  setCount(1);  // Render
  setFlag(true); // Render again
}, 0);

// React 18 - Automatic batching everywhere
setTimeout(() => {
  setCount(1);
  setFlag(true); // Single render!
}, 0);
```

**Senior insight:** Understanding the event loop helps debug race conditions, optimize animations (requestAnimationFrame runs before paint), and understand why React 18's batching works. Microtasks (promises) execute before the browser paints, which is why too many can cause jank.

---

## 11. Behavioral & Leadership

### Q: Tell me about a time you mentored a junior developer

**Answer Framework (STAR):**

**Situation:**
"When I joined [Company], our team had just hired two junior developers. One in particular was struggling with React patterns and was hesitant to ask questions in our large team channels."

**Task:**
"As the senior developer on the team, I took responsibility for their onboarding and growth. My goal was to get them contributing meaningfully within 3 months while building their confidence."

**Action:**
- "I scheduled weekly 1:1s specifically for technical mentoring, separate from our regular syncs"
- "I started assigning them small features in areas I was familiar with, so I could provide context-rich code reviews"
- "Instead of just fixing issues in reviews, I asked guiding questions: 'What would happen if this component re-rendered frequently?'"
- "I pair-programmed on their first complex feature, thinking aloud to model my problem-solving process"
- "When they made mistakes, I shared times I made similar ones - normalizing the learning process"

**Result:**
"Within 2 months, they were independently handling features. By month 4, they were reviewing others' PRs with insightful comments. They later told me our sessions gave them confidence to speak up in architecture discussions. I learned that mentoring isn't about having answers - it's about asking better questions."

**Senior insight:** Good mentoring answers emphasize: systematic approach, psychological safety, growth over time, what YOU learned. Avoid: vague generalities, taking credit for their success, describing only technical teaching.

---

### Q: How do you balance technical debt vs feature delivery?

**Answer:**

**Framework for Decision Making:**

```
Evaluate debt by:
├── Impact on velocity (slowing future work?)
├── Risk (causing bugs/outages?)
├── Scope (localized or widespread?)
└── Timing (getting worse with time?)
```

**My Approach:**

1. **Quantify the debt**: "This manual process adds 30 minutes per deployment"
2. **Tie to business outcomes**: "Refactoring auth would let us ship SSO in 2 weeks vs 6"
3. **Propose incremental paydown**: "We can refactor as we touch these files"
4. **Negotiate capacity**: "I advocate for 20% of sprint capacity for maintenance"

**Example Answer:**

"In my last role, we had a legacy payment module that was slowing every feature touching checkout. Instead of proposing a full rewrite, I:

1. **Documented the cost** - tracked time spent working around it (40+ hours/quarter)
2. **Identified the 20%** - found three core functions causing 80% of issues
3. **Proposed strangler pattern** - new features use new abstraction, gradually migrate
4. **Got buy-in** - showed PM that fixing it would accelerate Q4 roadmap

We allocated 2 weeks for the critical refactor. Feature velocity improved measurably - checkout features that took 2 sprints dropped to 1. The key was framing debt paydown as enabling business goals, not just engineering preference."

**Red Flags to Avoid:**
- "I just told them we need to fix it" (no business case)
- "We stopped features for a month" (rarely justified)
- "Technical debt is always bad" (sometimes it's strategic)

**Senior insight:** Frame technical debt discussions in business terms: velocity, risk, opportunity cost. Propose incremental approaches. Show you understand that shipping is important - debt isn't inherently bad, unmanaged debt is.

---

## 12. Code Review & Quality

### Q: What do you look for in a code review?

**Answer:**

**Priority Order:**

1. **Correctness** - Does it solve the problem? Edge cases?
2. **Security** - Injection, XSS, sensitive data exposure?
3. **Architecture** - Right abstraction level? Fits existing patterns?
4. **Performance** - O(n²) loops? Unnecessary re-renders?
5. **Readability** - Can others understand it in 6 months?
6. **Tests** - Adequate coverage? Testing behavior not implementation?

**My Review Process:**

```
1. Read the PR description and linked ticket first
2. Check the test file - understand intended behavior
3. Review main logic changes
4. Look at integration points (API calls, state changes)
5. Consider what's NOT there (error handling, edge cases)
```

**Types of Comments:**

```markdown
# Must fix (blocking)
🔴 **Security**: User input passed directly to SQL query

# Should fix (non-blocking)
🟡 **Performance**: This filters on every render. Consider useMemo

# Consider (optional)
🟢 **Suggestion**: Could extract this into a custom hook for reuse

# Praise
✨ Nice use of discriminated unions here!

# Question (not a criticism)
❓ What happens if the API returns empty array?
```

**What I DON'T Nitpick:**

- Style issues (should be automated by Prettier/ESLint)
- Personal preferences with no measurable impact
- Things outside the PR's scope
- Minor naming preferences (unless genuinely confusing)

**Senior insight:** Great code reviews balance thoroughness with velocity. Block on security/correctness, suggest on patterns/performance, let go of style. Always acknowledge good work - reviews shouldn't only be critical. Ask questions when unsure rather than demanding changes.

---

### Q: What is XSS and how do you prevent it in React?

**Answer:**

**XSS (Cross-Site Scripting)** = Attacker injects malicious scripts that execute in users' browsers.

**React's Built-in Protection:**

```jsx
// ✅ Safe - React escapes this automatically
const userInput = '<script>alert("hacked")</script>';
return <div>{userInput}</div>;
// Renders as text: <script>alert("hacked")</script>
```

**The Danger: dangerouslySetInnerHTML:**

```jsx
// ❌ DANGEROUS - Executes injected scripts
const userInput = '<img src=x onerror=alert("XSS")>';
return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
// XSS vulnerability!

// ✅ Safe - Sanitize first
import DOMPurify from 'dompurify';

const sanitized = DOMPurify.sanitize(userInput);
return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
```

**Other XSS Vectors in React:**

```jsx
// ❌ href with javascript: protocol
const userUrl = 'javascript:alert("XSS")';
<a href={userUrl}>Click</a>  // Executes on click!

// ✅ Validate URLs
const isValidUrl = (url) => {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
};

// ❌ Injecting into script tags
<script>{userInput}</script>  // Never do this

// ❌ eval() with user input
eval(userInput);  // Never do this
```

**Prevention Checklist:**

1. **Trust React's escaping** - Don't bypass it unnecessarily
2. **Sanitize HTML** - Use DOMPurify for user-generated HTML
3. **Validate URLs** - Check protocol before using in href/src
4. **Content-Security-Policy** - HTTP header to restrict script sources
5. **HttpOnly cookies** - Prevent JS access to session cookies
6. **Avoid `dangerouslySetInnerHTML`** - Use only with sanitized content

```jsx
// CSP Header example
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-abc123'
```

**Senior insight:** React handles 90% of XSS prevention automatically. The remaining 10% requires vigilance: sanitizing HTML, validating URLs, avoiding eval/new Function, and setting proper CSP headers. Review any use of `dangerouslySetInnerHTML` carefully.

---

## 13. React 19 & Latest Features

### Q: What are the major new features in React 19?

**Answer:**

React 19 is the biggest update since Hooks. Key features:

**1. React Compiler (Auto-memoization):**
```jsx
// Before React 19 - Manual optimization
const MemoizedComponent = React.memo(({ data }) => {
  const processed = useMemo(() => expensiveCalc(data), [data]);
  const handleClick = useCallback(() => {}, []);
  return <div onClick={handleClick}>{processed}</div>;
});

// React 19 - Compiler handles it automatically
function Component({ data }) {
  const processed = expensiveCalc(data);  // Auto-memoized!
  const handleClick = () => {};            // Auto-memoized!
  return <div onClick={handleClick}>{processed}</div>;
}
```

**2. Actions - Simplified Async State:**
```jsx
// New useActionState hook
function UpdateName() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateName(formData.get('name'));
      if (error) return error;
      redirect('/profile');
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input name="name" />
      <button disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  );
}
```

**3. useOptimistic Hook:**
```jsx
function LikeButton({ initialLikes, postId }) {
  const [likes, setLikes] = useState(initialLikes);
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (current, increment) => current + increment
  );

  async function handleLike() {
    addOptimisticLike(1);  // Instant UI update
    await api.likePost(postId);  // Actual request
    setLikes(l => l + 1);
  }

  return <button onClick={handleLike}>❤️ {optimisticLikes}</button>;
}
```

**4. useFormStatus Hook:**
```jsx
// Access form state from child components
function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

function Form() {
  return (
    <form action={serverAction}>
      <input name="email" />
      <SubmitButton />  {/* Knows form is pending! */}
    </form>
  );
}
```

**5. use() API - Conditional Resource Reading:**
```jsx
// Can call inside conditionals! (unlike hooks)
function Comments({ commentsPromise }) {
  const comments = use(commentsPromise);  // Suspends until resolved

  return comments.map(c => <Comment key={c.id} {...c} />);
}

// Also works with context
function ThemeButton() {
  if (someCondition) {
    const theme = use(ThemeContext);  // ✅ Works in conditionals
    return <button className={theme}>Click</button>;
  }
  return null;
}
```

**6. Document Metadata Support:**
```jsx
// Metadata hoisted automatically
function BlogPost({ post }) {
  return (
    <article>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
      <link rel="canonical" href={post.url} />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
```

**7. ref as a Prop (No forwardRef needed):**
```jsx
// React 19 - ref is just a prop
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}

// Before React 19
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
```

**Senior insight:** React 19's compiler reduces manual optimization needs by 90%. The Actions API moves React toward progressive enhancement - forms work without JS. Evaluate adoption based on ecosystem readiness (libraries, tooling).

---

### Q: How does the React Compiler work?

**Answer:**

The React Compiler (previously "React Forget") automatically adds memoization at build time.

**What It Does:**

```jsx
// Your code
function ProductCard({ product, onAddToCart }) {
  const discountedPrice = product.price * 0.9;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${discountedPrice}</p>
      <button onClick={() => onAddToCart(product.id)}>Add</button>
    </div>
  );
}

// Compiler output (conceptually)
function ProductCard({ product, onAddToCart }) {
  const discountedPrice = useMemo(
    () => product.price * 0.9,
    [product.price]
  );

  const handleClick = useCallback(
    () => onAddToCart(product.id),
    [onAddToCart, product.id]
  );

  return useMemo(() => (
    <div>
      <h2>{product.name}</h2>
      <p>${discountedPrice}</p>
      <button onClick={handleClick}>Add</button>
    </div>
  ), [product.name, discountedPrice, handleClick]);
}
```

**Rules It Enforces:**

The compiler relies on React's rules:
1. Components must be pure (same props → same output)
2. Props/state are immutable
3. Side effects only in useEffect

```jsx
// ❌ Compiler can't optimize - mutation
function BadComponent({ items }) {
  items.sort();  // Mutates prop!
  return <List items={items} />;
}

// ✅ Compiler-friendly
function GoodComponent({ items }) {
  const sorted = [...items].sort();  // New array
  return <List items={sorted} />;
}
```

**Opting Out:**

```jsx
// Disable for specific component
'use no memo';
function UnoptimizedComponent() { ... }

// Or via eslint directive
/* eslint-disable react-compiler/react-compiler */
```

**Senior insight:** The compiler doesn't replace understanding memoization - it automates the boring parts. You still need to understand why mutations break React, why referential equality matters, and when to use refs vs state.

---

### Q: What are Server Actions in React 19?

**Answer:**

**Server Actions** are async functions that run on the server, called directly from client components.

```jsx
// app/actions.js
'use server';

export async function createTodo(formData) {
  const title = formData.get('title');

  await db.todos.create({ title });
  revalidatePath('/todos');

  return { success: true };
}

// app/page.jsx (Client Component)
'use client';

import { createTodo } from './actions';

function TodoForm() {
  return (
    <form action={createTodo}>
      <input name="title" required />
      <button type="submit">Add Todo</button>
    </form>
  );
}
```

**How It Works:**

1. `'use server'` marks function as server action
2. React serializes form data, sends to server
3. Server executes function, returns result
4. React handles revalidation/redirect

**With useActionState:**

```jsx
'use client';

import { useActionState } from 'react';
import { createTodo } from './actions';

function TodoForm() {
  const [state, formAction, isPending] = useActionState(createTodo, null);

  return (
    <form action={formAction}>
      <input name="title" required />
      <button disabled={isPending}>
        {isPending ? 'Adding...' : 'Add Todo'}
      </button>
      {state?.error && <p className="error">{state.error}</p>}
    </form>
  );
}
```

**Validation Pattern:**

```jsx
'use server';

import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function signup(prevState, formData) {
  const parsed = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  // Create user...
  redirect('/dashboard');
}
```

**Senior insight:** Server Actions eliminate API route boilerplate for mutations. They're not a replacement for REST/GraphQL APIs - they're for form submissions and simple mutations within your Next.js app. Be mindful of payload size limits.

---

## 14. Accessibility (A11y)

### Q: What accessibility concerns are important in React applications?

**Answer:**

**Core Principles (POUR):**
- **Perceivable** - Content available to all senses
- **Operable** - All functionality via keyboard/assistive tech
- **Understandable** - Clear, predictable interface
- **Robust** - Works with current/future assistive technologies

**React-Specific Concerns:**

**1. Semantic HTML:**
```jsx
// ❌ Div soup
<div onClick={handleClick}>Click me</div>
<div className="heading">Title</div>

// ✅ Semantic elements
<button onClick={handleClick}>Click me</button>
<h1>Title</h1>
```

**2. Focus Management in SPAs:**
```jsx
// After route change, focus should move to main content
function Page() {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <main>
      <h1 ref={headingRef} tabIndex={-1}>Page Title</h1>
      {/* Content */}
    </main>
  );
}
```

**3. ARIA for Custom Components:**
```jsx
// Custom dropdown needs ARIA
function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <button
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="dropdown-label"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || 'Select...'}
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-activedescendant={`option-${activeIndex}`}
        >
          {options.map((opt, i) => (
            <li
              key={opt.value}
              id={`option-${i}`}
              role="option"
              aria-selected={opt.value === value}
              onClick={() => onChange(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

**4. Live Regions for Dynamic Content:**
```jsx
function Notifications() {
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Screen readers announce changes */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {message}
      </div>

      {/* For urgent announcements */}
      <div
        role="alert"
        aria-live="assertive"
      >
        {urgentMessage}
      </div>
    </>
  );
}
```

**5. Keyboard Navigation:**
```jsx
function TabPanel({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowRight':
        setActiveTab((prev) => (prev + 1) % tabs.length);
        break;
      case 'ArrowLeft':
        setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
        break;
      case 'Home':
        setActiveTab(0);
        break;
      case 'End':
        setActiveTab(tabs.length - 1);
        break;
    }
  }

  return (
    <div role="tablist" onKeyDown={handleKeyDown}>
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={i === activeTab}
          tabIndex={i === activeTab ? 0 : -1}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
```

**Testing Tools:**

```bash
# ESLint plugin (catches issues during development)
npm install eslint-plugin-jsx-a11y

# Automated testing
npm install @axe-core/react  # Runtime warnings in dev
npm install jest-axe          # Jest assertions
```

```jsx
// jest-axe example
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('form is accessible', async () => {
  const { container } = render(<LoginForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

**Senior insight:** Accessibility isn't optional - it's a legal requirement (ADA, WCAG 2.1 AA). Build it in from the start - retrofitting is expensive. Use native elements when possible; only reach for ARIA when building truly custom interactions.

---

### Q: How do you handle focus management in React SPAs?

**Answer:**

SPAs break the browser's natural focus behavior on navigation. You need to manage it manually.

**Problem:**
```jsx
// User clicks link, content changes, but focus stays on link
// Screen reader users don't know content changed
```

**Solution 1: Focus Main Content on Route Change:**
```jsx
// Layout component
function Layout({ children }) {
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Focus main content on route change
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <>
      <nav>...</nav>
      <main ref={mainRef} tabIndex={-1}>
        {children}
      </main>
    </>
  );
}
```

**Solution 2: Announce Route Changes:**
```jsx
function RouteAnnouncer() {
  const [announcement, setAnnouncement] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Get page title or derive from route
    const pageTitle = document.title;
    setAnnouncement(`Navigated to ${pageTitle}`);
  }, [location]);

  return (
    <div
      role="status"
      aria-live="assertive"
      aria-atomic="true"
      className="sr-only"  // Visually hidden
    >
      {announcement}
    </div>
  );
}
```

**Solution 3: Focus Trapping in Modals:**
```jsx
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Save current focus
      previousFocus.current = document.activeElement;
      // Focus modal
      modalRef.current?.focus();
    } else {
      // Restore focus on close
      previousFocus.current?.focus();
    }
  }, [isOpen]);

  // Trap focus within modal
  function handleKeyDown(e) {
    if (e.key === 'Tab') {
      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    if (e.key === 'Escape') onClose();
  }

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}
```

**Using Focus-Trap Library:**
```jsx
import FocusTrap from 'focus-trap-react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <FocusTrap>
      <div role="dialog" aria-modal="true">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </FocusTrap>
  );
}
```

**Senior insight:** Focus management is critical for keyboard/screen reader users. Test with keyboard-only navigation. Libraries like `@radix-ui/react-dialog` and `react-aria` handle focus management properly - use them for complex components.

---

## 15. Advanced Component Patterns

### Q: Explain the Compound Components pattern

**Answer:**

**Compound Components** create related components that share implicit state, providing a declarative API similar to HTML's `<select>` and `<option>`.

**Example - Tabs Component:**

```jsx
const TabsContext = createContext(null);

function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div role="tablist">{children}</div>;
}

function Tab({ value, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveTab(value)}
      className={isActive ? 'active' : ''}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }) {
  return <div className="tab-panels">{children}</div>;
}

function TabPanel({ value, children }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) return null;
  return <div role="tabpanel">{children}</div>;
}

// Attach sub-components
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

// Usage - Clean, declarative API!
function App() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">Account</Tabs.Tab>
        <Tabs.Tab value="tab2">Security</Tabs.Tab>
        <Tabs.Tab value="tab3">Billing</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panels>
        <Tabs.Panel value="tab1">Account settings...</Tabs.Panel>
        <Tabs.Panel value="tab2">Security settings...</Tabs.Panel>
        <Tabs.Panel value="tab3">Billing info...</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
}
```

**Benefits:**

1. **Implicit state sharing** - No prop drilling
2. **Flexible structure** - Users control layout
3. **Encapsulation** - Internal state hidden
4. **Intuitive API** - Mirrors native HTML patterns

**Advanced: With Slots Pattern:**

```jsx
function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  // Find child by type
  const tabList = Children.toArray(children).find(
    child => child.type === TabList
  );
  const tabPanels = Children.toArray(children).find(
    child => child.type === TabPanels
  );

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">
        {tabList}
        {tabPanels}
      </div>
    </TabsContext.Provider>
  );
}
```

**Senior insight:** Compound components shine in design systems. They're more flexible than prop-based APIs but require more code. Use them when: (1) components must work together, (2) consumers need layout flexibility, (3) you're building reusable UI libraries.

---

### Q: When would you use Render Props vs Hooks?

**Answer:**

Both patterns share stateful logic, but hooks are generally preferred today.

**Render Props Pattern:**

```jsx
// Render prop component
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return render(position);
}

// Usage
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => <p>Mouse: {x}, {y}</p>}
    />
  );
}
```

**Hook Equivalent:**

```jsx
// Custom hook
function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}

// Usage
function App() {
  const { x, y } = useMouse();
  return <p>Mouse: {x}, {y}</p>;
}
```

**When to Still Use Render Props:**

```jsx
// 1. When you need to wrap JSX
function List({ items, renderItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id}>
          {renderItem(item, index)}  {/* Flexible item rendering */}
        </li>
      ))}
    </ul>
  );
}

// Usage
<List
  items={users}
  renderItem={(user) => <UserCard user={user} />}
/>

// 2. Conditional rendering based on state
function Fetch({ url, children }) {
  const { data, loading, error } = useFetch(url);

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;

  return children(data);  // Only call when data ready
}

<Fetch url="/api/user">
  {(user) => <Profile user={user} />}
</Fetch>
```

**Comparison:**

| Aspect | Hooks | Render Props |
|--------|-------|--------------|
| Syntax | Cleaner | More verbose |
| Nesting | Flat | Can get nested |
| Flexibility | Logic only | Can control JSX structure |
| Performance | Slightly better | Extra function call |
| Use in class components | ❌ | ✅ |

**Senior insight:** Default to hooks for logic reuse. Use render props when you need to: (1) customize how children are rendered, (2) support class components, (3) provide data that controls conditional rendering of JSX. Libraries like Downshift and React Table still use render props for flexibility.

---

### Q: What is the Provider Pattern and how do you optimize it?

**Answer:**

The **Provider Pattern** uses React Context to share state without prop drilling.

**Basic Implementation:**

```jsx
const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth().then(setUser).finally(() => setLoading(false));
  }, []);

  const login = async (credentials) => {
    const user = await api.login(credentials);
    setUser(user);
  };

  const logout = async () => {
    await api.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

**Problem: Unnecessary Re-renders:**

```jsx
// ❌ Every consumer re-renders when ANY value changes
const value = { user, login, logout, theme, settings };

function ThemeToggle() {
  const { theme } = useContext(AppContext);
  // Re-renders when user changes, even though it only uses theme!
}
```

**Optimization 1: Split Contexts:**

```jsx
// ✅ Separate contexts for different concerns
const UserContext = createContext(null);
const ThemeContext = createContext(null);
const ActionsContext = createContext(null);

function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  // Actions don't change - stable reference
  const actions = useMemo(() => ({
    login: async (creds) => { /* ... */ },
    logout: async () => { /* ... */ },
    setTheme,
  }), []);

  return (
    <ActionsContext.Provider value={actions}>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={theme}>
          {children}
        </ThemeContext.Provider>
      </UserContext.Provider>
    </ActionsContext.Provider>
  );
}
```

**Optimization 2: Memoize Value Object:**

```jsx
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // ✅ Memoize to prevent new object on every render
  const value = useMemo(() => ({
    user,
    isAuthenticated: !!user,
  }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
```

**Optimization 3: Separate State from Dispatch:**

```jsx
const StateContext = createContext(null);
const DispatchContext = createContext(null);

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

// Components reading state re-render on changes
function UserName() {
  const { user } = useContext(StateContext);
  return <span>{user.name}</span>;
}

// Components only dispatching never re-render from state changes
function LogoutButton() {
  const dispatch = useContext(DispatchContext);  // dispatch is stable
  return <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>;
}
```

**Senior insight:** Context is for infrequently updated values (theme, user, locale). For frequently updated state with many consumers, use a state library (Zustand, Jotai) that supports selective subscriptions.

---

## 16. Frontend Monitoring & Observability

### Q: How do you implement error monitoring in a React application?

**Answer:**

**1. Error Boundaries for Render Errors:**

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Send to monitoring service
    Sentry.captureException(error, {
      extra: {
        componentStack: errorInfo.componentStack,
      },
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}
```

**2. Global Error Handlers:**

```jsx
// index.js
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'YOUR_DSN',
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 0.1,  // 10% of transactions
  replaysSessionSampleRate: 0.1,
});

// Catch unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  Sentry.captureException(event.reason);
});

// Catch global errors
window.addEventListener('error', (event) => {
  Sentry.captureException(event.error);
});
```

**3. API Error Tracking:**

```jsx
// Axios interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    Sentry.captureException(error, {
      tags: {
        url: error.config?.url,
        method: error.config?.method,
        status: error.response?.status,
      },
    });
    return Promise.reject(error);
  }
);

// React Query global error handler
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      Sentry.captureException(error, {
        tags: { queryKey: query.queryKey.join('.') },
      });
    },
  }),
});
```

**4. User Context for Better Debugging:**

```jsx
function useErrorTracking() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      Sentry.setUser({
        id: user.id,
        email: user.email,
        // Don't include PII unnecessarily
      });
    } else {
      Sentry.setUser(null);
    }
  }, [user]);
}
```

**5. Custom Error with Context:**

```jsx
function useApiCall() {
  const mutation = useMutation({
    mutationFn: api.createOrder,
    onError: (error, variables) => {
      Sentry.withScope((scope) => {
        scope.setTag('feature', 'checkout');
        scope.setContext('order', {
          items: variables.items.length,
          total: variables.total,
        });
        Sentry.captureException(error);
      });
    },
  });

  return mutation;
}
```

**Senior insight:** Capture enough context to debug but not too much (privacy/performance). Set up alerts for error rate spikes, not individual errors. Use source maps in production for readable stack traces.

---

### Q: How do you measure and monitor frontend performance?

**Answer:**

**1. Core Web Vitals:**

```jsx
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

function reportWebVitals(metric) {
  // Send to analytics
  analytics.track('Web Vitals', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,  // 'good', 'needs-improvement', 'poor'
    delta: metric.delta,
    id: metric.id,
  });
}

onCLS(reportWebVitals);   // Cumulative Layout Shift
onFID(reportWebVitals);   // First Input Delay
onLCP(reportWebVitals);   // Largest Contentful Paint
onFCP(reportWebVitals);   // First Contentful Paint
onTTFB(reportWebVitals);  // Time to First Byte
```

**2. React-Specific Performance:**

```jsx
// React Profiler API
function ProfiledApp() {
  const onRenderCallback = (
    id,           // Component name
    phase,        // "mount" | "update"
    actualDuration,  // Time spent rendering
    baseDuration,    // Estimated time without memoization
    startTime,
    commitTime
  ) => {
    if (actualDuration > 16) {  // Longer than one frame
      analytics.track('Slow Render', {
        component: id,
        phase,
        duration: actualDuration,
      });
    }
  };

  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <App />
    </Profiler>
  );
}
```

**3. Custom Performance Marks:**

```jsx
function ProductList() {
  useEffect(() => {
    performance.mark('ProductList-start');

    return () => {
      performance.mark('ProductList-end');
      performance.measure(
        'ProductList-render',
        'ProductList-start',
        'ProductList-end'
      );

      const measures = performance.getEntriesByName('ProductList-render');
      const duration = measures[0]?.duration;

      if (duration > 100) {
        analytics.track('Slow Component', {
          name: 'ProductList',
          duration,
        });
      }
    };
  }, []);

  return <div>...</div>;
}
```

**4. Long Tasks Detection:**

```jsx
// Detect tasks blocking main thread > 50ms
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > 50) {
      analytics.track('Long Task', {
        duration: entry.duration,
        startTime: entry.startTime,
      });
    }
  }
});

observer.observe({ entryTypes: ['longtask'] });
```

**5. Bundle Size Monitoring:**

```bash
# In CI pipeline
npx bundlesize --config bundlesize.config.json
```

```json
// bundlesize.config.json
{
  "files": [
    {
      "path": "./build/static/js/main.*.js",
      "maxSize": "200 kB"
    },
    {
      "path": "./build/static/css/main.*.css",
      "maxSize": "50 kB"
    }
  ]
}
```

**6. Real User Monitoring (RUM) Setup:**

```jsx
// Using DataDog RUM
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: 'xxx',
  clientToken: 'xxx',
  site: 'datadoghq.com',
  service: 'my-app',
  env: process.env.NODE_ENV,
  version: process.env.REACT_APP_VERSION,
  sampleRate: 100,
  trackInteractions: true,
  trackResources: true,
  trackLongTasks: true,
});
```

**Senior insight:** Focus on user-centric metrics (Core Web Vitals) over technical metrics. Set performance budgets and fail CI on regressions. Use RUM for real user data, synthetic monitoring for baseline comparisons.

---

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

---

## 18. Tricky & Edge Case Questions

### Q: What happens if you call setState in useEffect without cleanup?

**Answer:**

```jsx
// ❌ Memory leak - component might be unmounted
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      setData(data); // Component may be unmounted!
    });
}, []);

// Warning: Can't perform a React state update on an unmounted component
```

**Fix with Cleanup:**

```jsx
useEffect(() => {
  let mounted = true;

  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      if (mounted) {
        setData(data);
      }
    });

  return () => {
    mounted = false;
  };
}, []);
```

**Better: AbortController:**

```jsx
useEffect(() => {
  const controller = new AbortController();

  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(setData)
    .catch(err => {
      if (err.name !== 'AbortError') {
        setError(err);
      }
    });

  return () => controller.abort();
}, []);
```

---

### Q: Why might useEffect run twice in development?

**Answer:**

**React 18 StrictMode** intentionally double-invokes effects to help find bugs.

```jsx
// In development with StrictMode:
useEffect(() => {
  console.log('Effect runs');  // Logs TWICE
  return () => console.log('Cleanup');  // Also runs between
}, []);

// Sequence: Effect → Cleanup → Effect
```

**Purpose:** Catches effects that don't clean up properly:

```jsx
// ❌ Bug: No cleanup - StrictMode reveals duplicate subscriptions
useEffect(() => {
  eventBus.subscribe('event', handler);
  // Missing: return () => eventBus.unsubscribe('event', handler);
}, []);

// In StrictMode: subscribes TWICE, only one handler active
```

**Not a bug if effect is idempotent:**

```jsx
// ✅ Safe to run twice
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

**Senior insight:** Don't disable StrictMode to "fix" double effects. Fix the actual cleanup issue. In production, effects run once. StrictMode helps catch bugs early.

---

### Q: What's the difference between null and undefined in React props?

**Answer:**

```jsx
// undefined = use default value
<Button size={undefined} />  // Uses defaultProps or default parameter

// null = explicitly "no value"
<Button size={null} />  // Overrides default, size is null

// Component
function Button({ size = 'medium' }) {
  console.log(size);
  // undefined → 'medium' (default applied)
  // null → null (default NOT applied, null is a value)
}

// With defaultProps (legacy)
Button.defaultProps = { size: 'medium' };
// undefined → 'medium'
// null → null
```

**Conditional rendering:**

```jsx
// Both are falsy but render differently
function Component({ label }) {
  return <div>{label}</div>;
}

<Component label={null} />      // Renders: <div></div>
<Component label={undefined} /> // Renders: <div></div>
<Component label={0} />         // Renders: <div>0</div>
<Component label={false} />     // Renders: <div></div>
<Component label="" />          // Renders: <div></div>
```

**Conditional rendering pitfall:**

```jsx
// ❌ Shows "0" when items is empty array
{items.length && <List items={items} />}

// ✅ Explicit boolean
{items.length > 0 && <List items={items} />}
{items.length ? <List items={items} /> : null}
```

---

### Q: How do you handle memory leaks in React?

**Answer:**

**Common Sources:**

```jsx
// 1. Subscriptions without cleanup
useEffect(() => {
  const subscription = observable.subscribe(handler);
  // ❌ Missing cleanup
}, []);

// ✅ Fix
useEffect(() => {
  const subscription = observable.subscribe(handler);
  return () => subscription.unsubscribe();
}, []);

// 2. Timers without cleanup
useEffect(() => {
  const interval = setInterval(tick, 1000);
  // ❌ Interval runs forever
}, []);

// ✅ Fix
useEffect(() => {
  const interval = setInterval(tick, 1000);
  return () => clearInterval(interval);
}, []);

// 3. Event listeners
useEffect(() => {
  window.addEventListener('resize', handler);
  return () => window.removeEventListener('resize', handler);
}, []);

// 4. Async operations setting state after unmount
useEffect(() => {
  let cancelled = false;
  fetchData().then(data => {
    if (!cancelled) setData(data);
  });
  return () => { cancelled = true; };
}, []);
```

**Detection:**

```jsx
// React DevTools Profiler - check for components not unmounting
// Chrome DevTools - Memory tab - heap snapshots
// Memory growth over time indicates leak
```

**Common Patterns:**

```jsx
// Reusable cleanup hook
function useIsMounted() {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => { isMounted.current = false; };
  }, []);

  return isMounted;
}

function Component() {
  const isMounted = useIsMounted();

  async function handleClick() {
    const data = await fetchData();
    if (isMounted.current) {
      setData(data);
    }
  }
}
```

---

### Q: What is the key prop anti-pattern?

**Answer:**

```jsx
// ❌ Anti-pattern: Using index as key
{items.map((item, index) => (
  <Item key={index} data={item} />
))}

// Problems:
// 1. Reordering shuffles keys, causing state bugs
// 2. Adding/removing items causes unnecessary re-mounts
// 3. Animations break
```

**Demonstration of Bug:**

```jsx
// List of inputs with index keys
function List() {
  const [items, setItems] = useState(['A', 'B', 'C']);

  return (
    <>
      {items.map((item, index) => (
        <input key={index} defaultValue={item} />
      ))}
      <button onClick={() => setItems(['X', ...items])}>
        Add to Start
      </button>
    </>
  );
}

// Click button: Items become ['X', 'A', 'B', 'C']
// Expected inputs: X, A, B, C
// Actual inputs: A, B, C, C (states stayed with keys!)
```

**✅ Correct: Stable unique IDs:**

```jsx
{items.map(item => (
  <Item key={item.id} data={item} />
))}

// Or generate ID when creating item
const addItem = (text) => {
  setItems([...items, { id: crypto.randomUUID(), text }]);
};
```

**When index key is OK:**

1. List is static (never reordered)
2. Items have no state or uncontrolled inputs
3. List is never filtered/sorted

**Senior insight:** The key tells React which items are "the same" across renders. Wrong keys cause subtle bugs: state appears on wrong item, animations break, performance degrades. Always use stable unique identifiers.

---

## Quick Reference: Senior vs Mid-Level Expectations

| Area | Mid-Level | Senior |
|------|-----------|--------|
| Hooks | Knows how to use | Explains internals & trade-offs |
| Features | Implements | Designs & architects |
| Patterns | Follows | Chooses & justifies |
| Bugs | Fixes | Prevents categories of bugs |
| Code Review | Participates | Establishes culture |
| Team | Works in | Leads & mentors |
| Decisions | Executes | Drives with rationale |
| Performance | Fixes when slow | Proactively monitors |
| Accessibility | Basic compliance | Builds inclusive by default |
| Testing | Writes tests | Defines testing strategy |

---

## Study Resources

### Technical
- [GitHub - 500+ React Questions](https://github.com/sudheerj/reactjs-interview-questions)
- [GreatFrontEnd - 100+ Questions](https://www.greatfrontend.com/blog/100-react-interview-questions-straight-from-ex-interviewers)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
- [Patterns.dev - React Patterns](https://www.patterns.dev/react)

### System Design
- [Frontend Interview Handbook](https://www.frontendinterviewhandbook.com/front-end-system-design/ui-components)
- [GreatFrontEnd System Design](https://www.greatfrontend.com/questions/system-design)

### Behavioral
- [Tech Interview Handbook - Behavioral](https://www.techinterviewhandbook.org/behavioral-interview-senior-candidates/)

### React 19
- [React 19 Blog Post](https://react.dev/blog)
- [DEV.to - React 19 Features](https://dev.to/fullstackprepdev_sda_d43a/react-19-2025-all-new-features-explained-20-must-know-interview-questions-1l33)

### Accessibility
- [React Accessibility Docs](https://react.dev/reference/react-dom/components#form-components)
- [A11y Interview Questions](https://scottaohara.github.io/accessibility_interview_questions/)

---

*Good luck with your interview!*

| Area | Mid-Level | Senior |
|------|-----------|--------|
| Hooks | Knows how to use | Explains internals & trade-offs |
| Features | Implements | Designs & architects |
| Patterns | Follows | Chooses & justifies |
| Bugs | Fixes | Prevents categories of bugs |
| Code Review | Participates | Establishes culture |
| Team | Works in | Leads & mentors |
| Decisions | Executes | Drives with rationale |

---

## Study Resources

### Technical
- [GitHub - 500+ React Questions](https://github.com/sudheerj/reactjs-interview-questions)
- [GreatFrontEnd - 100+ Questions](https://www.greatfrontend.com/blog/100-react-interview-questions-straight-from-ex-interviewers)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

### System Design
- [Frontend Interview Handbook](https://www.frontendinterviewhandbook.com/front-end-system-design/ui-components)

### Behavioral
- [Tech Interview Handbook - Behavioral](https://www.techinterviewhandbook.org/behavioral-interview-senior-candidates/)

---

*Good luck with your interview!*
