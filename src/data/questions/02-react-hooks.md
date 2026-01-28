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

### Q: How does useSyncExternalStore work and when would you use it?

**Answer:**

`useSyncExternalStore` is a hook for subscribing to external data sources in a way that's compatible with React 18's concurrent rendering. It ensures consistent reads during render, preventing "tearing" (showing inconsistent data).

**The Problem It Solves:**

```jsx
// ❌ Problem: External store can change during React's render
// With concurrent rendering, React may pause and resume rendering
// If store changes mid-render, different components show different values

function Component() {
  // This can cause "tearing" - inconsistent UI
  const [state, setState] = useState(externalStore.getState());

  useEffect(() => {
    return externalStore.subscribe(() => {
      setState(externalStore.getState());
    });
  }, []);

  return <div>{state.value}</div>;
}

// ✅ Solution: useSyncExternalStore guarantees consistency
function Component() {
  const state = useSyncExternalStore(
    externalStore.subscribe,  // Subscribe function
    externalStore.getState,   // Get current value
    externalStore.getState    // Get server snapshot (for SSR)
  );

  return <div>{state.value}</div>;
}
```

**API Signature:**

```jsx
const snapshot = useSyncExternalStore(
  subscribe,       // (callback) => unsubscribe - Subscribe to store changes
  getSnapshot,     // () => snapshot - Get current value (must be immutable)
  getServerSnapshot? // () => snapshot - Get value during SSR (optional)
);
```

**Example: Subscribing to Browser APIs**

```jsx
// Window dimensions
function useWindowWidth() {
  return useSyncExternalStore(
    // Subscribe to resize events
    (callback) => {
      window.addEventListener('resize', callback);
      return () => window.removeEventListener('resize', callback);
    },
    // Get current width
    () => window.innerWidth,
    // Server snapshot (SSR fallback)
    () => 1024
  );
}

function ResponsiveComponent() {
  const width = useWindowWidth();
  return <div>{width > 768 ? 'Desktop' : 'Mobile'}</div>;
}

// Online status
function useOnlineStatus() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    () => navigator.onLine,
    () => true // Assume online during SSR
  );
}

// LocalStorage (with cross-tab sync)
function useLocalStorage(key, initialValue) {
  const getSnapshot = () => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  const subscribe = (callback) => {
    // Listen to storage events (fires when other tabs change localStorage)
    const handler = (e) => {
      if (e.key === key) callback();
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  };

  const value = useSyncExternalStore(subscribe, getSnapshot, () => initialValue);

  const setValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    // Trigger re-render in current tab (storage event doesn't fire in same tab)
    window.dispatchEvent(new StorageEvent('storage', { key }));
  };

  return [value, setValue];
}
```

**Building a Custom Store:**

```jsx
// Simple external store pattern
function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  return {
    getState: () => state,
    setState: (newState) => {
      state = typeof newState === 'function' ? newState(state) : newState;
      listeners.forEach(listener => listener());
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

const counterStore = createStore({ count: 0 });

// Hook to use the store
function useCounterStore(selector = (state) => state) {
  return useSyncExternalStore(
    counterStore.subscribe,
    () => selector(counterStore.getState()),
    () => selector(counterStore.getState())
  );
}

// Usage
function Counter() {
  const count = useCounterStore(state => state.count);
  return (
    <button onClick={() => counterStore.setState(s => ({ count: s.count + 1 }))}>
      {count}
    </button>
  );
}
```

**Important: getSnapshot Must Return Immutable Values**

```jsx
// ❌ Wrong: Returns new object reference every time
const getSnapshot = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});
// This causes infinite re-renders!

// ✅ Correct: Cache the snapshot
let cachedSnapshot = null;
let cachedWidth = 0;
let cachedHeight = 0;

const getSnapshot = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width !== cachedWidth || height !== cachedHeight) {
    cachedWidth = width;
    cachedHeight = height;
    cachedSnapshot = { width, height };
  }

  return cachedSnapshot;
};
```

**When to Use useSyncExternalStore:**

| Scenario | Use useSyncExternalStore? |
|----------|---------------------------|
| External state library (Zustand, etc.) | Yes (usually built-in) |
| Browser APIs (scroll, resize, online) | Yes |
| WebSocket messages | Yes |
| Third-party SDK state | Yes |
| React state (useState, useReducer) | No - already safe |
| Server state (React Query, SWR) | No - they handle it |

**Senior insight:** You rarely need to use `useSyncExternalStore` directly - most state libraries (Zustand, Redux, Jotai) use it internally. But understanding it is crucial when: (1) integrating with vanilla JS libraries, (2) subscribing to browser APIs, (3) building your own state management. The key insight is that `getSnapshot` must be stable (return same reference if value unchanged) or you'll get infinite re-renders.

---

### Q: What is useImperativeHandle and when should you use it?

**Answer:**

`useImperativeHandle` customizes the value exposed to parent components when using `ref`. It lets you expose a limited, imperative API instead of the entire DOM node or component instance.

**Basic Pattern:**

```jsx
import { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef(function CustomInput(props, ref) {
  const inputRef = useRef(null);

  // Expose only specific methods to parent
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => { inputRef.current.value = ''; },
    getValue: () => inputRef.current.value,
  }), []);

  return <input ref={inputRef} {...props} />;
});

// Parent component
function Form() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.getValue());
    inputRef.current.clear();
    inputRef.current.focus();
  };

  return (
    <>
      <CustomInput ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

**React 19: ref as a prop (no forwardRef needed)**

```jsx
// React 19+
function CustomInput({ ref, ...props }) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => { inputRef.current.value = ''; },
  }), []);

  return <input ref={inputRef} {...props} />;
}

// Usage remains the same
<CustomInput ref={inputRef} />
```

**Real-World Use Cases:**

**1. Video Player Controls:**

```jsx
const VideoPlayer = forwardRef(function VideoPlayer({ src }, ref) {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    seek: (time) => { videoRef.current.currentTime = time; },
    getCurrentTime: () => videoRef.current.currentTime,
    getDuration: () => videoRef.current.duration,
    setVolume: (vol) => { videoRef.current.volume = vol; },
  }), []);

  return <video ref={videoRef} src={src} />;
});

// Parent with custom controls
function VideoWithControls() {
  const playerRef = useRef(null);

  return (
    <>
      <VideoPlayer ref={playerRef} src="/video.mp4" />
      <button onClick={() => playerRef.current.play()}>Play</button>
      <button onClick={() => playerRef.current.pause()}>Pause</button>
      <button onClick={() => playerRef.current.seek(0)}>Restart</button>
    </>
  );
}
```

**2. Form with Validation:**

```jsx
const FormField = forwardRef(function FormField({ label, validate }, ref) {
  const inputRef = useRef(null);
  const [error, setError] = useState(null);

  useImperativeHandle(ref, () => ({
    validate: () => {
      const value = inputRef.current.value;
      const validationError = validate?.(value);
      setError(validationError);
      return !validationError;
    },
    getValue: () => inputRef.current.value,
    focus: () => inputRef.current.focus(),
    reset: () => {
      inputRef.current.value = '';
      setError(null);
    },
  }), [validate]);

  return (
    <div>
      <label>{label}</label>
      <input ref={inputRef} />
      {error && <span className="error">{error}</span>}
    </div>
  );
});

function RegistrationForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    const isEmailValid = emailRef.current.validate();
    const isPasswordValid = passwordRef.current.validate();

    if (isEmailValid && isPasswordValid) {
      submit({
        email: emailRef.current.getValue(),
        password: passwordRef.current.getValue(),
      });
    } else {
      // Focus first invalid field
      if (!isEmailValid) emailRef.current.focus();
      else if (!isPasswordValid) passwordRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        ref={emailRef}
        label="Email"
        validate={(v) => !v.includes('@') ? 'Invalid email' : null}
      />
      <FormField
        ref={passwordRef}
        label="Password"
        validate={(v) => v.length < 8 ? 'Min 8 characters' : null}
      />
      <button type="submit">Register</button>
    </form>
  );
}
```

**3. Animation Control:**

```jsx
const AnimatedBox = forwardRef(function AnimatedBox({ children }, ref) {
  const elementRef = useRef(null);
  const animationRef = useRef(null);

  useImperativeHandle(ref, () => ({
    shake: () => {
      animationRef.current = elementRef.current.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(0)' },
      ], { duration: 300 });
      return animationRef.current.finished;
    },
    fadeIn: () => {
      animationRef.current = elementRef.current.animate([
        { opacity: 0 },
        { opacity: 1 },
      ], { duration: 500, fill: 'forwards' });
      return animationRef.current.finished;
    },
    cancel: () => animationRef.current?.cancel(),
  }), []);

  return <div ref={elementRef}>{children}</div>;
});
```

**TypeScript with useImperativeHandle:**

```tsx
interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
  getValue: () => string;
}

const CustomInput = forwardRef<CustomInputHandle, InputProps>(
  function CustomInput(props, ref) {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      clear: () => {
        if (inputRef.current) inputRef.current.value = '';
      },
      getValue: () => inputRef.current?.value ?? '',
    }), []);

    return <input ref={inputRef} {...props} />;
  }
);

// Usage with proper typing
function Parent() {
  const inputRef = useRef<CustomInputHandle>(null);
  inputRef.current?.focus(); // TypeScript knows available methods
}
```

**When NOT to Use useImperativeHandle:**

```jsx
// ❌ Don't use for data that should be props/state
useImperativeHandle(ref, () => ({
  setData: (data) => setInternalState(data), // Wrong! Use props
}));

// ❌ Don't use when you can lift state up
useImperativeHandle(ref, () => ({
  isValid: () => checkValid(), // Wrong! Expose via callback prop
}));

// ❌ Don't expose too much
useImperativeHandle(ref, () => ({
  ...inputRef.current, // Wrong! Leaking entire DOM node
}));
```

**Decision Framework:**

| Need | Solution |
|------|----------|
| Share state between parent/child | Lift state up or use context |
| Notify parent of events | Use callback props |
| Trigger imperative actions (focus, scroll, animate) | useImperativeHandle |
| Access DOM measurements | useImperativeHandle |
| Complex forms with programmatic validation | useImperativeHandle |

**Senior insight:** `useImperativeHandle` is an escape hatch from React's declarative model. Use it sparingly - in most cases, callback props or lifted state are better. Valid use cases are when you need to trigger imperative DOM operations (focus, scroll, animations) or when building low-level component libraries. If you're using it to pass data, you're probably doing it wrong - use props instead.

---

### Q: What patterns exist for composing and testing custom hooks?

**Answer:**

Custom hooks are the primary mechanism for reusing stateful logic in React. Understanding composition patterns and testing strategies is essential for building maintainable applications.

**Hook Composition Patterns:**

**1. Layered Hooks (Building on Primitives):**

```jsx
// Layer 1: Low-level utility hook
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return { value, toggle, setTrue, setFalse };
}

// Layer 2: Feature hook using utility hook
function useModal() {
  const { value: isOpen, setTrue: open, setFalse: close } = useToggle();
  const [content, setContent] = useState(null);

  const openWith = useCallback((modalContent) => {
    setContent(modalContent);
    open();
  }, [open]);

  const closeAndClear = useCallback(() => {
    close();
    setContent(null);
  }, [close]);

  return { isOpen, content, open: openWith, close: closeAndClear };
}

// Layer 3: Domain hook using feature hook
function useConfirmDialog() {
  const modal = useModal();
  const resolveRef = useRef(null);

  const confirm = useCallback((message) => {
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      modal.open({ message });
    });
  }, [modal]);

  const handleConfirm = useCallback(() => {
    resolveRef.current?.(true);
    modal.close();
  }, [modal]);

  const handleCancel = useCallback(() => {
    resolveRef.current?.(false);
    modal.close();
  }, [modal]);

  return { ...modal, confirm, handleConfirm, handleCancel };
}
```

**2. Dependency Injection Pattern:**

```jsx
// Hook that accepts dependencies (testable)
function useFetchData(
  fetcher = fetch,  // Inject dependency
  url
) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetcher(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [fetcher, url]);

  return { data, loading, error };
}

// In tests, inject mock fetcher
const mockFetcher = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({ id: 1, name: 'Test' })
});

const { result } = renderHook(() =>
  useFetchData(mockFetcher, '/api/test')
);
```

**3. Options Object Pattern:**

```jsx
// Flexible configuration via options
function useAsync(asyncFn, options = {}) {
  const {
    immediate = true,      // Run on mount?
    onSuccess,             // Callback on success
    onError,               // Callback on error
    initialData = null,    // Initial data value
  } = options;

  const [state, setState] = useState({
    data: initialData,
    loading: immediate,
    error: null,
  });

  const execute = useCallback(async (...args) => {
    setState(s => ({ ...s, loading: true, error: null }));
    try {
      const data = await asyncFn(...args);
      setState({ data, loading: false, error: null });
      onSuccess?.(data);
      return data;
    } catch (error) {
      setState(s => ({ ...s, loading: false, error }));
      onError?.(error);
      throw error;
    }
  }, [asyncFn, onSuccess, onError]);

  useEffect(() => {
    if (immediate) execute();
  }, [immediate, execute]);

  return { ...state, execute };
}

// Usage with options
const { data, loading, execute } = useAsync(fetchUser, {
  immediate: false,
  onSuccess: (user) => analytics.track('user_loaded', user.id),
  onError: (err) => toast.error(err.message),
});
```

**4. Reducer Pattern for Complex State:**

```jsx
// Hook with reducer for complex state transitions
function useFormState(initialValues, validationSchema) {
  const [state, dispatch] = useReducer(formReducer, {
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    isValid: true,
  });

  const setFieldValue = useCallback((field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  }, []);

  const setFieldTouched = useCallback((field) => {
    dispatch({ type: 'SET_TOUCHED', field });
  }, []);

  const validate = useCallback(() => {
    const errors = validationSchema.validate(state.values);
    dispatch({ type: 'SET_ERRORS', errors });
    return Object.keys(errors).length === 0;
  }, [state.values, validationSchema]);

  const handleSubmit = useCallback((onSubmit) => async (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch({ type: 'SUBMIT_START' });
      try {
        await onSubmit(state.values);
        dispatch({ type: 'SUBMIT_SUCCESS' });
      } catch (error) {
        dispatch({ type: 'SUBMIT_ERROR', error });
      }
    }
  }, [state.values, validate]);

  return {
    ...state,
    setFieldValue,
    setFieldTouched,
    validate,
    handleSubmit,
  };
}
```

**Return Value Patterns:**

```jsx
// Tuple (simple hooks - like useState)
function useToggle(initial) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle]; // Allows destructuring rename: [isOpen, toggleOpen]
}

// Object (complex hooks - named properties)
function useForm(initialValues) {
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isValid,
  }; // Clear naming, order-independent
}

// Discriminated Union (state machine-like)
function useAsync(asyncFn) {
  // Returns different shapes based on state
  if (loading) return { status: 'loading' };
  if (error) return { status: 'error', error };
  return { status: 'success', data };
}
```

**Testing Custom Hooks:**

```jsx
import { renderHook, act, waitFor } from '@testing-library/react';

// Testing basic hook
test('useToggle toggles value', () => {
  const { result } = renderHook(() => useToggle(false));

  expect(result.current.value).toBe(false);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.value).toBe(true);
});

// Testing hook with dependencies
test('useAsync fetches data', async () => {
  const mockFetch = jest.fn().mockResolvedValue({ id: 1 });

  const { result } = renderHook(() =>
    useAsync(mockFetch, { immediate: true })
  );

  // Initially loading
  expect(result.current.loading).toBe(true);

  // Wait for async completion
  await waitFor(() => {
    expect(result.current.loading).toBe(false);
  });

  expect(result.current.data).toEqual({ id: 1 });
});

// Testing with rerender (prop changes)
test('useFetch refetches on URL change', async () => {
  const { result, rerender } = renderHook(
    ({ url }) => useFetch(url),
    { initialProps: { url: '/api/v1' } }
  );

  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(fetchMock).toHaveBeenCalledWith('/api/v1');

  rerender({ url: '/api/v2' });

  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(fetchMock).toHaveBeenCalledWith('/api/v2');
});

// Testing with wrapper (context dependencies)
test('useAuth reads from AuthContext', () => {
  const wrapper = ({ children }) => (
    <AuthContext.Provider value={{ user: { id: 1 } }}>
      {children}
    </AuthContext.Provider>
  );

  const { result } = renderHook(() => useAuth(), { wrapper });

  expect(result.current.user.id).toBe(1);
});
```

**Common Testing Patterns:**

```jsx
// Testing error states
test('useAsync handles errors', async () => {
  const error = new Error('Network error');
  const mockFetch = jest.fn().mockRejectedValue(error);

  const { result } = renderHook(() => useAsync(mockFetch));

  await act(async () => {
    await result.current.execute().catch(() => {});
  });

  expect(result.current.error).toBe(error);
  expect(result.current.data).toBe(null);
});

// Testing cleanup
test('useInterval cleans up on unmount', () => {
  jest.useFakeTimers();
  const callback = jest.fn();

  const { unmount } = renderHook(() => useInterval(callback, 1000));

  jest.advanceTimersByTime(3000);
  expect(callback).toHaveBeenCalledTimes(3);

  unmount();

  jest.advanceTimersByTime(3000);
  expect(callback).toHaveBeenCalledTimes(3); // No more calls after unmount
});
```

**Senior insight:** The best custom hooks are single-purpose, composable, and testable. Follow these principles: (1) One hook, one responsibility - compose hooks for complex features, (2) Accept dependencies as parameters for testability, (3) Use options objects for configurable behavior, (4) Return stable references (memoize callbacks and objects). When testing, focus on behavior, not implementation - test what the hook does, not how it does it.

---

### Q: What is useEffectEvent and what problem does it solve?

**Answer:**

`useEffectEvent` (currently experimental in React) solves the "stale closure" problem in effects by allowing you to read the latest props/state without adding them to the dependency array.

**The Problem:**

```jsx
// Classic stale closure dilemma
function Chat({ roomId, onMessage }) {
  useEffect(() => {
    const connection = createConnection(roomId);

    connection.on('message', (msg) => {
      onMessage(msg); // ❌ Might be stale!
    });

    return () => connection.disconnect();
  }, [roomId, onMessage]); // ⚠️ Adding onMessage causes reconnection on every render!
}

// Why this is problematic:
// 1. onMessage is often an inline function: <Chat onMessage={(m) => log(m)} />
// 2. Inline functions change every render
// 3. Effect re-runs on every render → connection restarts
```

**Current Workarounds (Without useEffectEvent):**

```jsx
// Workaround 1: useRef to store latest callback
function Chat({ roomId, onMessage }) {
  const onMessageRef = useRef(onMessage);
  onMessageRef.current = onMessage; // Always update to latest

  useEffect(() => {
    const connection = createConnection(roomId);

    connection.on('message', (msg) => {
      onMessageRef.current(msg); // Always calls latest
    });

    return () => connection.disconnect();
  }, [roomId]); // onMessage not in deps
}

// Workaround 2: useCallback in parent (often not possible)
// Parent must memoize the callback
const handleMessage = useCallback((msg) => {
  console.log(msg);
}, []); // But what if it needs to use state?
```

**useEffectEvent Solution:**

```jsx
// 🧪 Experimental - may change before stable release
import { useEffectEvent } from 'react';

function Chat({ roomId, onMessage }) {
  // Wrap the "event" (something that responds to a specific trigger)
  const onMessageEvent = useEffectEvent((msg) => {
    onMessage(msg); // Always reads latest onMessage
  });

  useEffect(() => {
    const connection = createConnection(roomId);

    connection.on('message', (msg) => {
      onMessageEvent(msg); // ✅ Safe to call, always fresh
    });

    return () => connection.disconnect();
  }, [roomId]); // ✅ No need for onMessage in deps!
}
```

**How It Works:**

```
useEffectEvent creates a function that:
1. Always reads the latest props/state when called
2. Is stable (same reference across renders)
3. Should NOT be listed in dependency arrays
4. Executes synchronously when invoked

Think of it as: "I want to do X (latest behavior) when Y (trigger) happens"
```

**More Examples:**

```jsx
// Logging with latest state
function Counter({ count, onIncrement }) {
  // Event: "log the current count"
  const logCount = useEffectEvent(() => {
    console.log('Current count:', count); // Always latest count
  });

  useEffect(() => {
    const interval = setInterval(() => {
      onIncrement();
      logCount(); // Logs correct count every time
    }, 1000);

    return () => clearInterval(interval);
  }, []); // No deps needed!
}

// Analytics tracking
function ProductPage({ product, user }) {
  const trackView = useEffectEvent(() => {
    analytics.track('product_viewed', {
      productId: product.id,
      userId: user?.id, // Always latest user
    });
  });

  useEffect(() => {
    trackView(); // Track when component mounts
  }, [product.id]); // Only re-track when product changes
}

// Timer with fresh callback
function Timer({ duration, onComplete }) {
  const onCompleteEvent = useEffectEvent(() => {
    onComplete(); // Latest callback when timer fires
  });

  useEffect(() => {
    const timer = setTimeout(onCompleteEvent, duration);
    return () => clearTimeout(timer);
  }, [duration]); // onComplete not needed in deps
}
```

**Rules of useEffectEvent:**

```jsx
// ✅ Call useEffectEvent functions from inside effects
useEffect(() => {
  myEffectEvent(); // Good
}, []);

// ❌ DON'T call during render
function Component() {
  const logState = useEffectEvent(() => console.log(state));
  logState(); // ❌ Wrong - not inside effect or event handler
  return <div />;
}

// ❌ DON'T pass to other components
function Parent() {
  const handleClick = useEffectEvent(() => {});
  return <Child onClick={handleClick} />; // ❌ Wrong - pass regular callback
}

// ❌ DON'T add to dependency arrays
useEffect(() => {
  myEffectEvent();
}, [myEffectEvent]); // ❌ Wrong - never add Effect Events to deps
```

**Comparison: useEffectEvent vs useCallback:**

| Aspect | useCallback | useEffectEvent |
|--------|-------------|----------------|
| Purpose | Stable function reference | Access latest values in effects |
| Re-creates when | Dependencies change | Never (always stable) |
| Reads values from | Closure (at creation time) | Latest (at call time) |
| Use in deps | Yes, when needed | Never |
| Call in render | Yes | No (only in effects/events) |
| Can pass to children | Yes | No |

**Polyfill Pattern (Until Stable):**

```jsx
// Approximate behavior with useRef + useCallback
function useEffectEvent(fn) {
  const ref = useRef(fn);
  ref.current = fn;

  return useCallback((...args) => {
    return ref.current(...args);
  }, []);
}

// Usage same as experimental version
const onMessageEvent = useEffectEvent((msg) => {
  onMessage(msg);
});
```

**When to Use Each Pattern:**

```jsx
// Scenario: Effect callback needs latest props/state

// 1. Value is truly a dependency (effect should re-run)
useEffect(() => {
  fetchData(userId); // Refetch when userId changes
}, [userId]); // ✅ userId in deps is correct

// 2. Callback that shouldn't trigger re-subscription
// → Use useEffectEvent
const onConnected = useEffectEvent(() => {
  toast(`Welcome ${user.name}`); // Latest user, no reconnection
});

// 3. Stable callback needed for child components
// → Use useCallback
const handleClick = useCallback(() => {
  setCount(c => c + 1); // Works with functional update
}, []); // Stable for memoized children
```

**Senior insight:** `useEffectEvent` (when stable) will be a game-changer for React patterns. It directly addresses one of the most common frustrations with useEffect: the tension between "I need fresh values" and "I don't want to re-run the effect." Until it's stable, the useRef pattern is the reliable workaround. The key mental model: useEffectEvent is for "reactive values I want to read" but "not react to" - logging, analytics, callbacks that shouldn't change behavior.

---
