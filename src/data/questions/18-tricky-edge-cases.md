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

### Q: What happens when you render a component inside a callback passed to setState?

**Answer:**

This is an anti-pattern that can cause subtle bugs and confusing behavior.

**The Problem:**

```jsx
// ❌ Anti-pattern: Rendering inside setState
function Parent() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems(prev => {
      // DON'T do this! Side effect during state update
      const newItem = <ChildComponent id={prev.length} />;
      return [...prev, newItem];
    });
  }

  return (
    <div>
      {items}
      <button onClick={addItem}>Add</button>
    </div>
  );
}
```

**Why It's Problematic:**

1. **Render during update:** setState's updater function should be pure
2. **Stale closures:** The component captures props/state from when it was created
3. **Breaks React's model:** Components should be functions of props, not stored values
4. **StrictMode issues:** Updater may run multiple times

**Correct Pattern:**

```jsx
// ✅ Store data, render components from data
function Parent() {
  const [items, setItems] = useState([]);  // Store DATA, not components

  function addItem() {
    setItems(prev => [
      ...prev,
      { id: crypto.randomUUID(), createdAt: Date.now() }
    ]);
  }

  return (
    <div>
      {items.map(item => (
        <ChildComponent key={item.id} item={item} />
      ))}
      <button onClick={addItem}>Add</button>
    </div>
  );
}
```

**Similar Anti-Patterns:**

```jsx
// ❌ Storing components in state
const [modal, setModal] = useState(null);
setModal(<ConfirmDialog onConfirm={handleConfirm} />);

// ✅ Store data, render conditionally
const [modalConfig, setModalConfig] = useState(null);
// ...
{modalConfig && (
  <ConfirmDialog
    message={modalConfig.message}
    onConfirm={modalConfig.onConfirm}
  />
)}

// ❌ Using components as object keys
const cache = new Map();
cache.set(<Component />, value);

// ✅ Use stable identifiers
const cache = new Map();
cache.set('component-unique-id', value);
```

**When You Might Think You Need This:**

```jsx
// Dynamic component rendering
// ❌ Wrong approach
const [CurrentComponent, setCurrentComponent] = useState(ComponentA);

// ✅ Use a mapping
const components = {
  a: ComponentA,
  b: ComponentB,
  c: ComponentC,
};
const [activeKey, setActiveKey] = useState('a');
const CurrentComponent = components[activeKey];

return <CurrentComponent />;
```

**Senior insight:** React's model is: data flows down, events flow up. Store data in state, derive UI from data during render. Storing React elements in state breaks this model - components become stale snapshots instead of live reflections of current data.

---

### Q: How do you handle circular dependencies in React modules?

**Answer:**

Circular dependencies occur when module A imports B, and B imports A (directly or indirectly). They can cause `undefined` imports and initialization errors.

**Detecting Circular Dependencies:**

```bash
# Using madge
npx madge --circular src/

# Output:
# Circular dependency detected:
# src/components/Header.tsx → src/context/AppContext.tsx → src/components/Header.tsx
```

**Common React Circular Dependency Patterns:**

```jsx
// ❌ Pattern 1: Component ↔ Context circular reference

// AppContext.tsx
import { Header } from './Header';  // Imports Header
export const AppContext = createContext();
export function AppProvider({ children }) {
  return (
    <AppContext.Provider>
      <Header />  // Uses Header
      {children}
    </AppContext.Provider>
  );
}

// Header.tsx
import { AppContext } from './AppContext';  // Creates circle!
export function Header() {
  const context = useContext(AppContext);
  return <header>...</header>;
}
```

**Solutions:**

**1. Restructure to break the cycle:**

```jsx
// ✅ Separate context definition from provider component

// AppContext.tsx - Only exports context
export const AppContext = createContext();

// AppProvider.tsx - Imports context AND Header
import { AppContext } from './AppContext';
import { Header } from './Header';
export function AppProvider({ children }) {
  return (
    <AppContext.Provider>
      <Header />
      {children}
    </AppContext.Provider>
  );
}

// Header.tsx - Only imports context
import { AppContext } from './AppContext';  // No cycle!
```

**2. Use children pattern:**

```jsx
// ✅ Avoid importing Header in AppProvider

// AppProvider.tsx
export function AppProvider({ children }) {
  return (
    <AppContext.Provider>
      {children}  // Header passed as child from parent
    </AppContext.Provider>
  );
}

// App.tsx
<AppProvider>
  <Header />  // Header imported here instead
  <Main />
</AppProvider>
```

**3. Dynamic imports (lazy loading):**

```jsx
// ✅ Break cycle with dynamic import

// ComponentA.tsx
const ComponentB = lazy(() => import('./ComponentB'));

export function ComponentA() {
  return (
    <Suspense fallback={<Spinner />}>
      <ComponentB />
    </Suspense>
  );
}
```

**4. Dependency injection:**

```jsx
// ✅ Pass dependencies through props/context instead of importing

// Instead of importing directly
function ComponentA() {
  // const B = ComponentB;  // Circular import
  const { ComponentB } = useComponents();  // Injected
  return <ComponentB />;
}

// Components provided via context
const ComponentsContext = createContext({});
function ComponentsProvider({ children }) {
  return (
    <ComponentsContext.Provider value={{ ComponentA, ComponentB }}>
      {children}
    </ComponentsContext.Provider>
  );
}
```

**5. Colocate related code:**

```jsx
// ❌ Separate files creating cycles
// UserList.tsx imports UserCard
// UserCard.tsx imports UserList (for nested users)

// ✅ Keep in same file if tightly coupled
// Users.tsx
function UserCard({ user }) { /* ... */ }
function UserList({ users }) { /* ... */ }

export { UserCard, UserList };
```

**Prevention Strategies:**

```javascript
// eslint-plugin-import
{
  rules: {
    'import/no-cycle': ['error', { maxDepth: 10 }],
  }
}

// CI check
"lint:circular": "madge --circular --extensions ts,tsx src/"
```

**Senior insight:** Circular dependencies usually indicate architectural issues - components are too tightly coupled. The fix isn't just "break the cycle" but "redesign for loose coupling." Common solutions: extract shared code to a third module, use dependency injection, or combine truly coupled code. Add `import/no-cycle` ESLint rule to catch these early.

---

### Q: What are the gotchas with using React.lazy and Suspense?

**Answer:**

`React.lazy` and `Suspense` enable code splitting but have several edge cases to handle.

**Basic Usage:**

```jsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

**Gotcha 1: Module must have default export**

```jsx
// ❌ Named export won't work directly
export function MyComponent() { /* ... */ }

const MyComponent = lazy(() => import('./MyComponent'));
// Error: Element type is invalid

// ✅ Fix 1: Use default export
export default function MyComponent() { /* ... */ }

// ✅ Fix 2: Re-export in import
const MyComponent = lazy(() =>
  import('./MyComponent').then(module => ({
    default: module.MyComponent
  }))
);
```

**Gotcha 2: Error handling requires Error Boundary**

```jsx
// ❌ Lazy load failure crashes the app
const Component = lazy(() => import('./MissingComponent'));
// Network error or 404 = white screen

// ✅ Wrap with Error Boundary
class LazyErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Failed to load component</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <LazyErrorBoundary>
      <Suspense fallback={<Loading />}>
        <HeavyComponent />
      </Suspense>
    </LazyErrorBoundary>
  );
}
```

**Gotcha 3: Suspense boundary placement affects UX**

```jsx
// ❌ Too granular - jarring multiple loading states
function Dashboard() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Header />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Sidebar />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
    </div>
  );
}

// ✅ Strategic grouping - smoother UX
function Dashboard() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <Header />
      <Suspense fallback={<ContentSkeleton />}>
        <Sidebar />
        <Content />
      </Suspense>
    </Suspense>
  );
}
```

**Gotcha 4: SSR requires special handling**

```jsx
// ❌ React.lazy doesn't work with SSR out of the box
const Component = lazy(() => import('./Component'));
// Server throws error

// ✅ Use loadable-components or Next.js dynamic
import dynamic from 'next/dynamic';

const Component = dynamic(() => import('./Component'), {
  loading: () => <Spinner />,
  ssr: false,  // Or true with proper setup
});

// Or @loadable/component
import loadable from '@loadable/component';
const Component = loadable(() => import('./Component'));
```

**Gotcha 5: Preloading for better UX**

```jsx
// ❌ Only loads when rendered - user sees spinner
const Settings = lazy(() => import('./Settings'));

// ✅ Preload on hover/focus
const importSettings = () => import('./Settings');
const Settings = lazy(importSettings);

function Nav() {
  return (
    <Link
      to="/settings"
      onMouseEnter={importSettings}  // Start loading on hover
      onFocus={importSettings}
    >
      Settings
    </Link>
  );
}

// ✅ Or preload based on route
const routes = {
  '/settings': () => import('./Settings'),
  '/profile': () => import('./Profile'),
};

// In router setup, preload adjacent routes
useEffect(() => {
  // Preload likely next pages
  routes['/settings']();
}, [currentRoute]);
```

**Gotcha 6: Lazy components inside frequently remounting components**

```jsx
// ❌ Re-fetches on every remount
function Toggle({ show }) {
  return show ? (
    <Suspense fallback={<Spinner />}>
      <LazyComponent />  {/* Re-imports every show/hide! */}
    </Suspense>
  ) : null;
}

// ✅ Keep mounted, hide with CSS
function Toggle({ show }) {
  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <Suspense fallback={<Spinner />}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

// ✅ Or lift Suspense boundary
function Parent() {
  return (
    <Suspense fallback={<Spinner />}>
      <Toggle show={showSettings} />
    </Suspense>
  );
}
```

**Gotcha 7: useTransition for better loading UX**

```jsx
// ❌ Immediate fallback can be jarring
function TabPanel({ activeTab }) {
  const Component = tabs[activeTab].component;
  return (
    <Suspense fallback={<Spinner />}>
      <Component />
    </Suspense>
  );
}

// ✅ Keep old content while loading new
function TabPanel({ activeTab }) {
  const [isPending, startTransition] = useTransition();
  const [currentTab, setCurrentTab] = useState(activeTab);

  function handleTabChange(newTab) {
    startTransition(() => {
      setCurrentTab(newTab);
    });
  }

  const Component = tabs[currentTab].component;

  return (
    <div style={{ opacity: isPending ? 0.7 : 1 }}>
      <Suspense fallback={<Spinner />}>
        <Component />
      </Suspense>
    </div>
  );
}
```

**Senior insight:** Key considerations: (1) always pair with Error Boundary for production, (2) preload strategically to eliminate loading states, (3) use `startTransition` to keep showing stale content during loads, (4) for SSR, use framework-specific solutions (Next.js dynamic, loadable-components). Don't lazy-load everything - small components aren't worth the overhead. Focus on large, route-based, or conditionally-rendered components.
