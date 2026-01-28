## 3. Performance Optimization

### Q: How do you identify performance bottlenecks in React?

**Answer:**

Performance profiling in React requires a systematic approach using multiple tools, each revealing different types of issues. The key is knowing which tool to use for which symptom.

**1. React DevTools Profiler (React-specific rendering issues):**

```jsx
// Enable profiling in production builds
// In your build config:
// React 17+: Set profiling flag
// webpack: resolve.alias['react-dom$'] = 'react-dom/profiling'

// What to look for in Profiler:
// - Flame graph width = render time
// - Gray bars = components that didn't render
// - Ranked chart shows slowest components first
// - "Why did this render?" shows the trigger
```

**Profiler Workflow:**
1. Open React DevTools → Profiler tab
2. Click record, interact with your app, stop recording
3. Look for: Components rendering >16ms (blocks 60fps), components re-rendering unnecessarily, cascade of re-renders from single state change

**2. Chrome DevTools Performance Tab (JavaScript & Browser issues):**

```
Recording Analysis:
┌─────────────────────────────────────────────────────────────┐
│ Main Thread Timeline                                         │
├─────────────────────────────────────────────────────────────┤
│ [Task][Task][  Long Task (red)  ][Task][Task]               │
│                    ↑                                         │
│         > 50ms blocks user input                            │
├─────────────────────────────────────────────────────────────┤
│ Key Metrics to Check:                                        │
│ • Total Blocking Time (TBT) - sum of long task time > 50ms  │
│ • Scripting vs Rendering vs Painting time                   │
│ • Layout thrashing (purple "Layout" blocks)                 │
│ • Forced synchronous layouts (yellow warning triangles)     │
└─────────────────────────────────────────────────────────────┘
```

**3. Lighthouse & Web Vitals (User-centric metrics):**

```jsx
import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';

// Core Web Vitals (affect SEO ranking)
onLCP(metric => console.log('LCP:', metric.value, 'ms'));   // < 2.5s good
onINP(metric => console.log('INP:', metric.value, 'ms'));   // < 200ms good
onCLS(metric => console.log('CLS:', metric.value));          // < 0.1 good

// Additional metrics
onFCP(metric => console.log('FCP:', metric.value, 'ms'));   // < 1.8s good
onTTFB(metric => console.log('TTFB:', metric.value, 'ms')); // < 800ms good

// Send to analytics
function sendToAnalytics(metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating, // 'good', 'needs-improvement', 'poor'
    delta: metric.delta,
    id: metric.id,
  });
  navigator.sendBeacon('/analytics', body);
}

onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onCLS(sendToAnalytics);
```

**4. Bundle Analysis:**

```bash
# Webpack
npx webpack-bundle-analyzer stats.json

# Vite
npx vite-bundle-visualizer

# Next.js
ANALYZE=true npm run build

# Generic (works with any bundler)
npx source-map-explorer 'build/static/js/*.js'
```

**What to look for in bundle analysis:**
- Large dependencies (moment.js → day.js, lodash → lodash-es with tree-shaking)
- Duplicate dependencies (multiple React versions)
- Code that should be lazy-loaded
- Unused exports (enable tree-shaking)

**5. Programmatic Measurement:**

```jsx
// React Profiler API for production monitoring
import { Profiler } from 'react';

function onRenderCallback(
  id,           // "Navigation" - the Profiler id
  phase,        // "mount" | "update" | "nested-update"
  actualDuration,   // Time spent rendering this update
  baseDuration,     // Estimated time without memoization
  startTime,        // When React started rendering
  commitTime        // When React committed this update
) {
  // Send to monitoring service
  if (actualDuration > 16) { // Longer than one frame
    analytics.track('slow_render', {
      component: id,
      duration: actualDuration,
      phase,
    });
  }
}

<Profiler id="Navigation" onRender={onRenderCallback}>
  <Navigation />
</Profiler>
```

**Diagnostic Decision Tree:**

| Symptom | Tool | Likely Cause | Solution |
|---------|------|--------------|----------|
| Typing lag | React Profiler | Re-rendering large tree | useTransition, memo, debounce |
| List scroll jank | Performance tab | Too many DOM nodes | Virtualization |
| Slow initial load | Lighthouse + Bundle analyzer | Large bundle | Code splitting, lazy loading |
| Memory growth | Memory tab | Leaks (listeners, closures) | Cleanup in useEffect |
| Janky animations | Performance tab | Main thread blocking | CSS animations, Web Workers |
| Slow interactions | INP metric | Heavy event handlers | Debounce, useTransition |

**Senior insight:** The performance optimization workflow should be: (1) Measure with real user data (RUM), (2) Reproduce in DevTools, (3) Identify root cause, (4) Fix and verify improvement, (5) Add regression test. Never optimize based on assumptions - always profile first. A 10ms optimization in a component that renders once is worthless; a 1ms optimization in a component rendering 1000x is valuable.

---

### Q: What causes unnecessary re-renders and how do you prevent them?

**Answer:**

Understanding React's rendering behavior is crucial for optimization. React re-renders are often not the problem - unnecessary re-renders of expensive components are.

**The Re-render Cascade:**

```
State Change in Parent
         │
         ▼
┌─────────────────┐
│ Parent renders  │ ← Always re-renders on its own state change
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌───────┐ ┌───────┐
│ Child │ │ Child │ ← Re-render by default (even if props same!)
└───┬───┘ └───┬───┘
    │         │
    ▼         ▼
┌───────┐ ┌───────┐
│ Grand │ │ Grand │ ← Cascade continues down
└───────┘ └───────┘
```

**Causes of Re-renders (in order of frequency):**

1. **Parent re-renders** → Children re-render by default
2. **State changes** → Component and all descendants re-render
3. **Context value changes** → All consumers re-render
4. **Props reference change** → Breaks memo optimization
5. **forceUpdate()** → Bypasses shouldComponentUpdate (avoid)

**Prevention Strategies:**

**1. React.memo with Proper Usage:**

```jsx
// Basic memo - shallow comparison of all props
const MemoizedChild = React.memo(Child);

// Custom comparison for complex props
const MemoizedChild = React.memo(Child, (prevProps, nextProps) => {
  // Return true if props are equal (skip re-render)
  // Return false if props differ (re-render)
  return (
    prevProps.id === nextProps.id &&
    prevProps.data.version === nextProps.data.version
  );
});

// ⚠️ Common mistake: memo with unstable props
function Parent() {
  return (
    // ❌ memo is useless - new object every render
    <MemoizedChild config={{ theme: 'dark' }} />

    // ❌ memo is useless - new function every render
    <MemoizedChild onClick={() => console.log('clicked')} />
  );
}
```

**2. Stabilize References (useMemo/useCallback):**

```jsx
function Parent({ items, userId }) {
  // ❌ New reference every render
  const activeItems = items.filter(x => x.active);
  const handleClick = (id) => selectItem(id);
  const config = { theme: 'dark', userId };

  // ✅ Stable references - only change when dependencies change
  const activeItems = useMemo(
    () => items.filter(x => x.active),
    [items]
  );

  const handleClick = useCallback(
    (id) => selectItem(id),
    [] // No deps if selectItem is stable
  );

  const config = useMemo(
    () => ({ theme: 'dark', userId }),
    [userId]
  );

  return <MemoizedChild items={activeItems} onClick={handleClick} config={config} />;
}
```

**3. Context Optimization Patterns:**

```jsx
// ❌ Monolithic context - everyone re-renders on any change
const AppContext = createContext({ user, theme, cart, notifications });

// ✅ Split by update frequency
const UserContext = createContext(null);     // Rarely changes
const ThemeContext = createContext(null);    // Rarely changes
const CartContext = createContext(null);     // Changes often
const NotificationContext = createContext(null); // Changes very often

// ✅ Separate state from dispatch
const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

// Components that only dispatch don't re-render on state change
function AddToCartButton({ productId }) {
  const dispatch = useContext(CartDispatchContext); // Stable reference
  return <button onClick={() => dispatch({ type: 'ADD', productId })}>Add</button>;
}

// ✅ Memoize context value
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Without useMemo, new object every render → all consumers re-render
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
```

**4. Component Composition Patterns:**

```jsx
// ✅ Children as props - children don't re-render with parent state
function ScrollTracker({ children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div>
      <ScrollIndicator position={scrollY} />
      {children} {/* ✅ Created in parent, stable reference */}
    </div>
  );
}

// Usage - ExpensiveComponent won't re-render on scroll
<ScrollTracker>
  <ExpensiveComponent />
</ScrollTracker>

// ✅ Extracting expensive subtrees
function Dashboard() {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <ExpensiveCharts /> {/* ❌ Re-renders on every keystroke */}
    </div>
  );
}

// Better: Extract the stateful part
function FilterInput({ onFilterChange }) {
  const [filter, setFilter] = useState('');
  return (
    <input
      value={filter}
      onChange={e => {
        setFilter(e.target.value);
        onFilterChange(e.target.value);
      }}
    />
  );
}

function Dashboard() {
  const handleFilter = useCallback((filter) => {
    // Debounced API call or state update
  }, []);

  return (
    <div>
      <FilterInput onFilterChange={handleFilter} />
      <ExpensiveCharts /> {/* ✅ Doesn't re-render on typing */}
    </div>
  );
}
```

**5. React 19 Compiler (Automatic Memoization):**

```jsx
// React 19 with compiler - no manual optimization needed
function Parent({ items, userId }) {
  // Compiler automatically memoizes these
  const activeItems = items.filter(x => x.active);
  const handleClick = (id) => selectItem(id);

  return <Child items={activeItems} onClick={handleClick} />;
}
```

**Re-render Debugging Checklist:**

| Check | How to Verify | Solution |
|-------|---------------|----------|
| Is parent re-rendering? | React DevTools highlight | Move state down or extract child |
| Are props actually changing? | Add console.log in component | useMemo/useCallback |
| Is context causing it? | DevTools "Why did this render?" | Split context or memoize value |
| Is key changing? | Check key prop in lists | Use stable keys (not index for dynamic lists) |

**Senior insight:** Before adding React.memo everywhere, try these free optimizations first: (1) Move state closer to where it's used, (2) Extract stateful logic into smaller components, (3) Use children props pattern. React.memo should be a last resort for leaf components that receive stable primitives but have expensive renders. With React 19's compiler, manual memoization becomes largely unnecessary - but understanding why re-renders happen remains essential for debugging.

---

### Q: How would you render a list of 10,000 items efficiently?

**Answer:**

Rendering large lists is one of the most common performance challenges in React. The DOM simply cannot handle 10,000+ nodes efficiently - the browser becomes unresponsive during initial render, scrolling is janky, and memory usage explodes.

**The Problem Quantified:**

```
10,000 items =
  • 10,000+ DOM nodes minimum (likely 30,000+ with nested elements)
  • ~50-100MB memory for DOM alone
  • 2-10 seconds initial render
  • Scroll events trigger style recalculations on all nodes
  • Search/filter operations re-render entire list
```

**Solution: Virtualization (Windowing)**

Only render items visible in the viewport + small buffer. As user scrolls, recycle DOM nodes.

```
┌──────────────────────────────────────┐
│          Items 1-50 (buffer)          │ ← Not visible, but pre-rendered
├──────────────────────────────────────┤
│ ┌──────────────────────────────────┐ │
│ │        Visible Viewport          │ │ ← User sees items 51-70
│ │        Items 51-70               │ │
│ └──────────────────────────────────┘ │
├──────────────────────────────────────┤
│          Items 71-100 (buffer)        │ ← Pre-rendered for smooth scroll
├──────────────────────────────────────┤
│          Items 101-10,000             │ ← NOT in DOM at all
│          (just empty space)           │
└──────────────────────────────────────┘

Total DOM nodes: ~100 instead of 10,000
```

**react-window (Recommended - 6KB gzipped):**

```jsx
import { FixedSizeList } from 'react-window';

// Fixed height items (most performant)
function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      <img src={items[index].avatar} alt="" />
      <span>{items[index].name}</span>
    </div>
  );

  return (
    <FixedSizeList
      height={600}           // Container height
      width="100%"           // Container width
      itemCount={items.length}
      itemSize={50}          // Each row height in px
      overscanCount={5}      // Extra items to render above/below
    >
      {Row}
    </FixedSizeList>
  );
}

// Variable height items (for dynamic content)
import { VariableSizeList } from 'react-window';

function VirtualList({ items }) {
  const listRef = useRef(null);
  const rowHeights = useRef({});

  // Measure row height after render
  function setRowHeight(index, size) {
    if (rowHeights.current[index] !== size) {
      rowHeights.current[index] = size;
      listRef.current?.resetAfterIndex(index);
    }
  }

  const getItemSize = (index) => rowHeights.current[index] || 50;

  const Row = ({ index, style }) => {
    const rowRef = useRef(null);

    useEffect(() => {
      if (rowRef.current) {
        setRowHeight(index, rowRef.current.getBoundingClientRect().height);
      }
    }, [index]);

    return (
      <div style={style}>
        <div ref={rowRef}>
          {items[index].content} {/* Variable length content */}
        </div>
      </div>
    );
  };

  return (
    <VariableSizeList
      ref={listRef}
      height={600}
      width="100%"
      itemCount={items.length}
      itemSize={getItemSize}
      estimatedItemSize={50}
    >
      {Row}
    </VariableSizeList>
  );
}
```

**@tanstack/react-virtual (Modern alternative):**

```jsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 5,
  });

  return (
    <div ref={parentRef} style={{ height: 600, overflow: 'auto' }}>
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {items[virtualRow.index].name}
          </div>
        ))}
      </div>
    </div>
  );
}
```

**Optimization Techniques:**

```jsx
// 1. Memoize row component (critical for performance)
const Row = React.memo(({ data, index, style }) => {
  const item = data[index];
  return (
    <div style={style}>
      <span>{item.name}</span>
    </div>
  );
}, (prev, next) => {
  // Custom comparison for complex items
  return prev.index === next.index &&
         prev.data[prev.index].id === next.data[next.index].id;
});

// 2. Use itemData to avoid closure re-creation
function VirtualList({ items, onSelect }) {
  // ✅ Stable object passed to all rows
  const itemData = useMemo(() => ({ items, onSelect }), [items, onSelect]);

  return (
    <FixedSizeList itemData={itemData} {...otherProps}>
      {Row}
    </FixedSizeList>
  );
}

const Row = React.memo(({ data, index, style }) => {
  const { items, onSelect } = data;
  return (
    <div style={style} onClick={() => onSelect(items[index].id)}>
      {items[index].name}
    </div>
  );
});

// 3. Implement windowed search/filter
function SearchableVirtualList({ items }) {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  // Filter runs on deferred value, typing stays responsive
  const filteredItems = useMemo(
    () => items.filter(item =>
      item.name.toLowerCase().includes(deferredQuery.toLowerCase())
    ),
    [items, deferredQuery]
  );

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <FixedSizeList itemCount={filteredItems.length} {...props}>
        {({ index, style }) => (
          <div style={style}>{filteredItems[index].name}</div>
        )}
      </FixedSizeList>
    </>
  );
}
```

**Decision Framework:**

| List Size | Recommendation |
|-----------|----------------|
| < 100 items | Regular rendering, no optimization needed |
| 100-500 items | Consider pagination or "load more" button |
| 500-5,000 items | Virtualization recommended |
| 5,000+ items | Virtualization required + server-side pagination |

**Common Pitfalls:**

```jsx
// ❌ Defining Row inside render - new function every render
function VirtualList({ items }) {
  return (
    <FixedSizeList>
      {({ index, style }) => <div style={style}>{items[index]}</div>}
    </FixedSizeList>
  );
}

// ✅ Define Row outside or memoize
const Row = memo(({ data, index, style }) => (
  <div style={style}>{data[index].name}</div>
));

// ❌ Not using style prop correctly - breaks positioning
const Row = ({ data, index }) => <div>{data[index]}</div>; // Missing style!

// ✅ Always apply the style prop
const Row = ({ data, index, style }) => (
  <div style={style}>{data[index]}</div>
);
```

**Senior insight:** Virtualization trades complexity for performance. Before implementing, ask: (1) Do we actually have 500+ items? (2) Can we paginate instead? (3) Is the performance issue real or perceived? If you need virtualization, @tanstack/react-virtual is the modern choice with better TypeScript support and React 18 compatibility. For infinite scroll, combine virtualization with intersection observer to load more data as user approaches the end.

---

### Q: Explain state colocation - why keep state as local as possible?

**Answer:**

**State Colocation** is the principle of placing state as close as possible to where it's used. It's the opposite of the common instinct to "lift state up" for everything. Both principles are valid - the skill is knowing when to apply each.

**Why Colocation Matters:**

```
Global State (everything at top):
┌─────────────────────────────────────────────┐
│ App (owns: user, theme, cart, hover, form,  │
│       search, modal, tooltip, selection...) │
│                    │                         │
│        ┌──────────┼──────────┐              │
│        ▼          ▼          ▼              │
│    [Header]   [Main]    [Footer]            │
│                 │                            │
│    Every state change re-renders EVERYTHING │
└─────────────────────────────────────────────┘

Colocated State:
┌─────────────────────────────────────────────┐
│ App (owns: user, theme - rarely change)     │
│                    │                         │
│        ┌──────────┼──────────┐              │
│        ▼          ▼          ▼              │
│    [Header]   [Main]    [Footer]            │
│    hover ↓    search↓                        │
│    [Nav]     [Results]                       │
│              form ↓                          │
│              [EditModal]                     │
│                                              │
│    State changes only affect owning subtree │
└─────────────────────────────────────────────┘
```

**Benefits of Colocation:**

| Benefit | Explanation |
|---------|-------------|
| **Performance** | State change only re-renders owning component + children |
| **Maintainability** | Find state next to where it's used, not in distant parent |
| **Encapsulation** | Component is self-contained, can be moved/reused easily |
| **Testing** | Test component in isolation without mocking global state |
| **Bundle Size** | No need for state management library for simple cases |

**Real-World Example:**

```jsx
// ❌ State too high - App re-renders on every hover
function App() {
  const [hoveredId, setHoveredId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [editingId, setEditingId] = useState(null);

  return (
    <div>
      <Header user={user} /> {/* Re-renders on hover! */}
      <Sidebar /> {/* Re-renders on hover! */}
      <Dashboard /> {/* Re-renders on hover! */}
      <List>
        {items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            isHovered={hoveredId === item.id}
            isExpanded={expandedId === item.id}
            isEditing={editingId === item.id}
            onHover={() => setHoveredId(item.id)}
            onExpand={() => setExpandedId(item.id)}
            onEdit={() => setEditingId(item.id)}
          />
        ))}
      </List>
    </div>
  );
}

// ✅ State colocated - Each piece of state where it belongs
function ListItem({ item, onSelect }) {
  // Hover state - only affects this item's styling
  const [isHovered, setIsHovered] = useState(false);

  // Expanded state - only affects this item's content
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={isHovered ? 'highlighted' : ''}
    >
      <span onClick={onSelect}>{item.name}</span>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && <Details item={item} />}
    </div>
  );
}

function App() {
  // Only truly global state here
  const [selectedId, setSelectedId] = useState(null); // Needed by multiple components

  return (
    <div>
      <Header user={user} />
      <Sidebar selectedId={selectedId} />
      <List>
        {items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            onSelect={() => setSelectedId(item.id)}
          />
        ))}
      </List>
    </div>
  );
}
```

**State Location Decision Tree:**

```
Where should this state live?
│
├─ Is it only used by one component?
│   └─ YES → Keep it local (useState in that component)
│
├─ Is it used by siblings?
│   └─ YES → Lift to closest common parent
│
├─ Is it used by distant components?
│   │
│   ├─ Does it change frequently (>1x/sec)?
│   │   └─ YES → State library (Zustand) or split context
│   │
│   ├─ Does it need to be accessed in callbacks/effects?
│   │   └─ YES → Consider useRef + state library
│   │
│   └─ Otherwise → Context is fine
│
└─ Is it server data (users, posts, etc.)?
    └─ YES → TanStack Query / SWR (not local state at all)
```

**Anti-Patterns to Avoid:**

```jsx
// ❌ Anti-pattern: Putting form state in global store
const formSlice = createSlice({
  name: 'form',
  initialState: { name: '', email: '', errors: {} },
  reducers: { ... }
});
// This causes the entire app to re-render on every keystroke!

// ✅ Form state should be local (or use a form library)
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  // Only this component re-renders on input
}

// ❌ Anti-pattern: Derived state that could be computed
const [items, setItems] = useState([...]);
const [filteredItems, setFilteredItems] = useState([]); // Redundant!

// ✅ Derive during render instead
const [items, setItems] = useState([...]);
const [filter, setFilter] = useState('');
const filteredItems = useMemo(
  () => items.filter(item => item.name.includes(filter)),
  [items, filter]
);
```

**Performance Impact Measurement:**

```jsx
// Add this to see re-render impact
function useRenderCount(componentName) {
  const renderCount = useRef(0);
  renderCount.current++;

  useEffect(() => {
    console.log(`${componentName} rendered ${renderCount.current} times`);
  });
}

function Header() {
  useRenderCount('Header'); // See how often this re-renders
  return <header>...</header>;
}
```

**Senior insight:** The instinct to "lift state up" comes from React's documentation, but it's meant for sharing state between siblings, not as a default strategy. Every piece of state you lift is technical debt - it couples components, hurts performance, and makes code harder to understand. Start with state as local as possible, lift only when you have a concrete need. If you find yourself prop-drilling more than 2 levels, that's when Context or state libraries make sense - not before.

---

### Q: How do you use the React Profiler API for production monitoring?

**Answer:**

The React Profiler API lets you measure rendering performance programmatically, enabling you to collect real-world performance data from production users - not just synthetic benchmarks.

**Basic Profiler Usage:**

```jsx
import { Profiler } from 'react';

function onRenderCallback(
  id,                // Profiler tree "id"
  phase,             // "mount" | "update" | "nested-update"
  actualDuration,    // Time spent rendering committed update
  baseDuration,      // Estimated time to render without memoization
  startTime,         // When React began rendering this update
  commitTime         // When React committed this update
) {
  // Log or send to analytics
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  });
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Navigation />
      <Main />
      <Footer />
    </Profiler>
  );
}
```

**Understanding the Metrics:**

| Metric | Meaning | What It Tells You |
|--------|---------|-------------------|
| `actualDuration` | Time spent rendering this update | How long this render actually took |
| `baseDuration` | Time without memoization | How long it would take without React.memo/useMemo |
| `startTime` | When rendering began | Useful for correlating with user actions |
| `commitTime` | When DOM was updated | When users actually see the change |

```jsx
// Key insight: actualDuration vs baseDuration
// If actualDuration << baseDuration, your memoization is working!
// If actualDuration ≈ baseDuration, memoization isn't helping

function onRenderCallback(id, phase, actualDuration, baseDuration) {
  const memoizationEfficiency = 1 - (actualDuration / baseDuration);
  console.log(`${id}: ${(memoizationEfficiency * 100).toFixed(1)}% saved by memoization`);
}
```

**Production Monitoring Setup:**

```jsx
// utils/profiling.js
const SAMPLE_RATE = 0.01; // Profile 1% of users

export function shouldProfile() {
  return Math.random() < SAMPLE_RATE;
}

export function createProfilerCallback(analytics) {
  return function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    // Only report slow renders (>16ms = dropped frame)
    if (actualDuration > 16) {
      analytics.track('slow_render', {
        component: id,
        phase,
        actualDuration: Math.round(actualDuration),
        baseDuration: Math.round(baseDuration),
        timestamp: commitTime,
        url: window.location.pathname,
        userAgent: navigator.userAgent,
      });
    }

    // Track all renders for specific critical components
    if (id === 'Checkout' || id === 'ProductList') {
      analytics.track('component_render', {
        component: id,
        phase,
        duration: Math.round(actualDuration),
      });
    }
  };
}

// App.jsx
import { Profiler } from 'react';
import { shouldProfile, createProfilerCallback } from './utils/profiling';
import analytics from './utils/analytics';

const profileCallback = createProfilerCallback(analytics);
const isProfilingEnabled = shouldProfile();

function App() {
  // Only wrap with Profiler for sampled users
  const content = (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );

  if (!isProfilingEnabled) return content;

  return (
    <Profiler id="App" onRender={profileCallback}>
      {content}
    </Profiler>
  );
}
```

**Nested Profilers for Granular Data:**

```jsx
function Dashboard() {
  return (
    <Profiler id="Dashboard" onRender={onRenderCallback}>
      <Profiler id="Dashboard-Header" onRender={onRenderCallback}>
        <DashboardHeader />
      </Profiler>

      <Profiler id="Dashboard-Charts" onRender={onRenderCallback}>
        <ChartsSection />
      </Profiler>

      <Profiler id="Dashboard-Table" onRender={onRenderCallback}>
        <DataTable />
      </Profiler>
    </Profiler>
  );
}

// Output helps identify which section is slow:
// Dashboard-Header: 2ms (mount)
// Dashboard-Charts: 145ms (mount)  ← Problem area!
// Dashboard-Table: 12ms (mount)
// Dashboard: 162ms (mount)
```

**Enabling Profiler in Production:**

```js
// By default, Profiler is disabled in production builds
// Enable it in your bundler config:

// webpack.config.js
module.exports = {
  resolve: {
    alias: {
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    },
  },
};

// Vite (vite.config.js)
export default {
  resolve: {
    alias: {
      'react-dom': 'react-dom/profiling',
    },
  },
};

// Next.js (next.config.js)
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['react-dom$'] = 'react-dom/profiling';
    }
    return config;
  },
};
```

**Building a Performance Dashboard:**

```jsx
// Collect data over time
const performanceData = [];

function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  performanceData.push({
    id,
    phase,
    actualDuration,
    baseDuration,
    timestamp: Date.now(),
  });

  // Periodically send batch to backend
  if (performanceData.length >= 50) {
    sendToAnalytics(performanceData.splice(0, 50));
  }
}

// Query examples for your analytics dashboard:
// - P95 render time by component
// - Components with >50ms renders
// - Render count by component per session
// - Correlation between slow renders and user actions
```

**Profiler with React 18 Concurrent Features:**

```jsx
// With concurrent rendering, renders may be interrupted
// Profiler only reports committed renders

import { useTransition } from 'react';

function SearchResults({ query }) {
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState([]);

  function handleSearch(q) {
    startTransition(() => {
      // This render may be interrupted multiple times
      // Profiler only reports the final committed render
      setResults(search(q));
    });
  }

  return (
    <Profiler id="SearchResults" onRender={onRenderCallback}>
      {isPending ? <Spinner /> : <ResultsList results={results} />}
    </Profiler>
  );
}
```

**Senior insight:** Production profiling is about statistical significance, not individual measurements. Sample users randomly (1-5%), focus on P95/P99 metrics rather than averages, and correlate slow renders with user actions (search, navigation, form submission). The goal isn't to profile everything - it's to find the components that actually impact user experience. A 100ms render during a button click matters more than a 500ms render during initial page load.

---

### Q: How do you read and interpret React DevTools Flame Graph?

**Answer:**

The React DevTools Flame Graph is the most powerful tool for understanding your app's rendering behavior. Mastering it lets you quickly identify performance bottlenecks without guessing.

**Accessing the Profiler:**

1. Install React DevTools browser extension
2. Open DevTools → React tab → Profiler
3. Click Record → Interact with app → Stop
4. Analyze the flame graph

**Anatomy of the Flame Graph:**

```
┌──────────────────────────────────────────────────────────────────┐
│ Commit #3 (took 45.2ms)                                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  [App]──────────────────────────────────────────────────────      │
│    │                                                              │
│    ├──[Header]─────────                                           │
│    │                                                              │
│    ├──[Main]──────────────────────────────────────────────        │
│    │    │                                                         │
│    │    ├──[ProductList]───────────────────────────────           │
│    │    │    │                                                    │
│    │    │    ├──[ProductCard]────                                 │
│    │    │    ├──[ProductCard]────                                 │
│    │    │    └──[ProductCard]────                                 │
│    │    │                                                         │
│    │    └──[Sidebar]──────                                        │
│    │                                                              │
│    └──[Footer]─────                                               │
│                                                                   │
│  Legend:                                                          │
│  █████ Wide bar = Took longer                                     │
│  ██    Narrow bar = Fast                                          │
│  ░░░░░ Gray = Didn't render this commit                           │
└──────────────────────────────────────────────────────────────────┘
```

**Key Visual Indicators:**

| Visual | Meaning |
|--------|---------|
| Bar width | Time spent rendering (wider = slower) |
| Bar color | Render time relative to siblings (yellow/orange = slow) |
| Gray bar | Component didn't render this commit (memoization worked!) |
| Nested depth | Component tree structure |

**Reading Individual Component Details:**

```
Click on any component bar to see:

┌─────────────────────────────────────────────────┐
│ ProductList                                      │
├─────────────────────────────────────────────────┤
│ Rendered at: 14.2ms for 23.5ms                  │
│                                                  │
│ Priority: Normal                                 │
│                                                  │
│ Why did this render?                            │
│   • Props changed: products                     │
│   • Hooks changed: [1] useState                 │
│                                                  │
│ Rendered: 3 times during this session           │
└─────────────────────────────────────────────────┘
```

**The "Why did this render?" Feature:**

This is the most valuable debugging feature. It tells you exactly what triggered the re-render:

```jsx
// Common "Why did this render?" answers:

// 1. "The parent component rendered"
//    → Parent state changed, consider React.memo

// 2. "Props changed: onClick"
//    → Unstable function reference, use useCallback

// 3. "Props changed: style"
//    → Inline object, use useMemo or CSS class

// 4. "Hooks changed: [0] useContext"
//    → Context value changed, consider splitting context

// 5. "First time render"
//    → Mount, expected behavior
```

**Analyzing Commit-by-Commit:**

```
Session Recording:
┌────────────────────────────────────────────────────────────┐
│ Commits: [1] [2] [3] [4] [5] [6] [7] [8] [9]              │
│          2ms 3ms 145ms 2ms 2ms 178ms 3ms 2ms 2ms          │
│                   ↑              ↑                         │
│            Investigate these outliers                      │
└────────────────────────────────────────────────────────────┘

Click commit #3 to see:
- What user action triggered it
- Which components rendered
- What caused the slow render
```

**Ranked View vs Flame Graph:**

```jsx
// Flame Graph: Shows hierarchy and render cascade
// Best for: Understanding WHAT rendered and WHY

// Ranked View: Shows components sorted by render time
// Best for: Finding the SLOWEST components quickly

// Toggle between views in Profiler toolbar
```

**Common Patterns to Look For:**

```
Pattern 1: Wide bar at top, narrow children
┌─────────[App]─────────────────────────────────────┐
│    [Header]   [Main]   [Footer]                   │
└───────────────────────────────────────────────────┘
Diagnosis: Parent is doing expensive work before rendering children
Fix: Move computation into child or useMemo

Pattern 2: Many identical siblings all rendering
┌─────[List]─────────────────────────────────────────┐
│ [Item][Item][Item][Item][Item][Item][Item][Item]   │
└────────────────────────────────────────────────────┘
Diagnosis: Parent state change re-renders all items
Fix: React.memo on Item, stable keys, virtualization

Pattern 3: Deep re-render cascade from context
┌─────[Provider]─────────────────────────────────────┐
│     [Layout]──────────────────────────────         │
│         [Page]────────────────────                 │
│             [Component]───────                     │
│                 [DeepChild]──                      │
└────────────────────────────────────────────────────┘
All yellow = Context update re-rendered everything
Fix: Split context, memoize context value, use selectors

Pattern 4: Only specific components rendering (good!)
┌─────[App]─────────────────────────────────────────┐
│ ░░░[Header]░░░  [SearchResults]  ░░░[Footer]░░░   │
└───────────────────────────────────────────────────┘
Gray = Didn't render (memoization working!)
This is what well-optimized apps look like
```

**Profiler Settings to Enable:**

```
DevTools Settings → Profiler:

☑ Record why each component rendered while profiling
  → Enables "Why did this render?" (slight overhead)

☑ Highlight updates when components render
  → Visual flash on screen when components re-render
  → Great for seeing render cascades in real-time
```

**Practical Debugging Workflow:**

```
1. Reproduce the slow interaction (typing, clicking, scrolling)
2. Stop profiling, find the slow commit
3. Look at the widest bars (slowest components)
4. Click "Why did this render?" on each
5. Trace back to the root cause:
   - Unstable props → Add useMemo/useCallback
   - Context change → Split context
   - Parent render → Add React.memo
   - Expensive computation → Add useMemo
6. Re-profile to verify fix worked
```

**Senior insight:** The Profiler's "Why did this render?" is your best friend, but it has a performance cost - only enable it when actively debugging. For production monitoring, use the Profiler API instead. When analyzing flame graphs, focus on outlier commits (>50ms), not average renders. A well-optimized app should show mostly gray bars (memoization preventing renders) with narrow colored bars only where state actually changed.

---

### Q: Explain Core Web Vitals in depth - LCP, INP, CLS, FCP, TTFB

**Answer:**

Core Web Vitals are Google's metrics for measuring real-world user experience. They directly impact SEO rankings and are the industry standard for performance measurement.

**The Core Web Vitals:**

| Metric | Full Name | Measures | Good | Needs Work | Poor |
|--------|-----------|----------|------|------------|------|
| **LCP** | Largest Contentful Paint | Loading performance | ≤2.5s | ≤4.0s | >4.0s |
| **INP** | Interaction to Next Paint | Responsiveness | ≤200ms | ≤500ms | >500ms |
| **CLS** | Cumulative Layout Shift | Visual stability | ≤0.1 | ≤0.25 | >0.25 |

**Additional Important Metrics:**

| Metric | Measures | Good |
|--------|----------|------|
| **FCP** | First Contentful Paint | ≤1.8s |
| **TTFB** | Time to First Byte | ≤800ms |
| **FID** | First Input Delay (deprecated, replaced by INP) | ≤100ms |

---

**LCP (Largest Contentful Paint):**

When the largest content element becomes visible. Usually a hero image, video, or large text block.

```jsx
// Common LCP issues in React:

// ❌ Problem 1: Client-side data fetching delays LCP
function HeroSection() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/hero').then(r => r.json()).then(setData);
  }, []);
  if (!data) return <Skeleton />; // ← User sees this, not real content
  return <img src={data.heroImage} />;
}

// ✅ Solution: Server-side rendering or static generation
// Next.js App Router
async function HeroSection() {
  const data = await fetch('/api/hero').then(r => r.json());
  return <img src={data.heroImage} />;
}

// ❌ Problem 2: Lazy-loaded LCP element
const HeroImage = lazy(() => import('./HeroImage'));
// LCP element shouldn't be lazy loaded!

// ✅ Solution: Prioritize LCP image
<img
  src="/hero.jpg"
  fetchPriority="high"  // Hint browser to load this first
  loading="eager"       // Don't lazy load LCP
  decoding="async"      // Don't block render for decode
/>

// ❌ Problem 3: Render-blocking CSS/JS
// Large CSS files block first paint
// Synchronous scripts block parsing

// ✅ Solution: Critical CSS inlining + async scripts
<head>
  <style>{criticalCSS}</style>  {/* Inline critical CSS */}
  <link rel="stylesheet" href="main.css" media="print" onLoad="this.media='all'" />
  <script src="app.js" defer />  {/* Non-blocking */}
</head>
```

**LCP Optimization Checklist:**
- [ ] Server-render or statically generate LCP content
- [ ] Use `fetchPriority="high"` on LCP image
- [ ] Preload LCP image: `<link rel="preload" as="image" href="hero.jpg">`
- [ ] Optimize image format (WebP/AVIF) and size
- [ ] Use CDN for assets
- [ ] Inline critical CSS
- [ ] Remove render-blocking JavaScript

---

**INP (Interaction to Next Paint):**

Measures responsiveness - time from user interaction (click, tap, keypress) to next visual update. Replaced FID in March 2024.

```jsx
// INP measures the WORST interaction, not the first

// ❌ Problem 1: Heavy computation on click
function SearchResults({ items }) {
  const handleFilter = (filter) => {
    // Blocking operation - UI freezes
    const filtered = items.filter(item =>
      complexFilterLogic(item, filter)  // 200ms+
    );
    setResults(filtered);
  };

  return <FilterButton onClick={handleFilter} />;
}

// ✅ Solution: useTransition for non-urgent updates
function SearchResults({ items }) {
  const [isPending, startTransition] = useTransition();

  const handleFilter = (filter) => {
    startTransition(() => {
      // Runs in background, UI stays responsive
      const filtered = items.filter(item =>
        complexFilterLogic(item, filter)
      );
      setResults(filtered);
    });
  };

  return (
    <>
      <FilterButton onClick={handleFilter} />
      {isPending && <Spinner />}
    </>
  );
}

// ❌ Problem 2: Layout thrashing in event handlers
function ExpandablePanel({ id }) {
  const handleClick = () => {
    const el = document.getElementById(id);
    const height = el.offsetHeight;  // Forces layout
    el.style.height = height + 100 + 'px';  // Forces layout again
    const newHeight = el.offsetHeight;  // Forces layout AGAIN
  };
}

// ✅ Solution: Batch DOM reads and writes
function ExpandablePanel({ id }) {
  const handleClick = () => {
    // Read phase
    const el = document.getElementById(id);
    const height = el.offsetHeight;

    // Write phase (batched)
    requestAnimationFrame(() => {
      el.style.height = height + 100 + 'px';
    });
  };
}

// ❌ Problem 3: Expensive re-renders on every keystroke
function SearchInput() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setResults(search(e.target.value));  // Expensive on every keystroke
  };
}

// ✅ Solution: Debounce + useDeferredValue
function SearchInput() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(
    () => search(deferredQuery),
    [deferredQuery]
  );

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <Results items={results} />
    </>
  );
}
```

**INP Optimization Checklist:**
- [ ] Use `useTransition` for non-urgent updates
- [ ] Debounce rapid input handlers
- [ ] Avoid layout thrashing (batch DOM reads/writes)
- [ ] Use CSS for animations, not JavaScript
- [ ] Break up long tasks with `scheduler.yield()` or `setTimeout`
- [ ] Virtualize long lists

---

**CLS (Cumulative Layout Shift):**

Measures visual stability - how much content shifts unexpectedly after rendering.

```jsx
// CLS Formula: impact_fraction × distance_fraction
// Score accumulates for every unexpected shift

// ❌ Problem 1: Images without dimensions
<img src="/photo.jpg" />  // Browser doesn't know size until loaded

// ✅ Solution: Always set width and height
<img src="/photo.jpg" width={800} height={600} />
// Or use aspect-ratio in CSS
.image { aspect-ratio: 4/3; width: 100%; }

// ❌ Problem 2: Fonts causing text reflow (FOUT)
// Web fonts load after initial render, text size changes

// ✅ Solution: Font optimization
<link rel="preload" href="/font.woff2" as="font" crossOrigin="" />

// In CSS:
@font-face {
  font-family: 'CustomFont';
  src: url('/font.woff2') format('woff2');
  font-display: optional;  // Don't cause layout shift
  // or: font-display: swap; + size-adjust: 105%;
}

// ❌ Problem 3: Injected content pushing things down
function Page() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    checkIfShouldShowBanner().then(setShowBanner);
  }, []);

  return (
    <div>
      {showBanner && <Banner />}  {/* Shifts content down! */}
      <MainContent />
    </div>
  );
}

// ✅ Solution: Reserve space for dynamic content
function Page() {
  const [banner, setBanner] = useState(null);

  return (
    <div>
      <div style={{ minHeight: 100 }}>  {/* Reserved space */}
        {banner && <Banner data={banner} />}
      </div>
      <MainContent />
    </div>
  );
}

// ❌ Problem 4: Dynamic ads/embeds
// Third-party content often causes CLS

// ✅ Solution: Reserve space with skeleton
<div style={{ minHeight: 250, background: '#f0f0f0' }}>
  <Suspense fallback={<AdSkeleton />}>
    <AdComponent />
  </Suspense>
</div>
```

**CLS Optimization Checklist:**
- [ ] Set explicit width/height on images and videos
- [ ] Reserve space for ads and embeds
- [ ] Preload fonts, use `font-display: optional`
- [ ] Avoid inserting content above existing content
- [ ] Use CSS `transform` for animations (doesn't cause layout)
- [ ] Use `content-visibility` for off-screen content

---

**Measuring Web Vitals in React:**

```jsx
// Using web-vitals library
import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';

function reportWebVitals(metric) {
  const { name, value, rating, delta, id, entries } = metric;

  // Send to analytics
  analytics.track('web_vital', {
    metric: name,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    rating,  // 'good' | 'needs-improvement' | 'poor'
    path: window.location.pathname,
  });

  // Or send to custom endpoint
  navigator.sendBeacon('/vitals', JSON.stringify({
    name,
    value,
    id,
  }));
}

// Report all vitals
onCLS(reportWebVitals);
onINP(reportWebVitals);
onLCP(reportWebVitals);
onFCP(reportWebVitals);
onTTFB(reportWebVitals);

// Next.js built-in reporting
// pages/_app.js
export function reportWebVitals(metric) {
  console.log(metric);
}
```

**Senior insight:** Web Vitals are measured at the 75th percentile of real users, not averages. A single slow user on a bad connection counts. Focus on: (1) LCP - server-render critical content, optimize images, (2) INP - use `useTransition`, debounce inputs, avoid long tasks, (3) CLS - reserve space for dynamic content, set image dimensions. Use Real User Monitoring (RUM), not just Lighthouse - synthetic tests miss real-world network variability and device diversity.

---

### Q: How do you profile memory usage and detect memory leaks in React?

**Answer:**

Memory leaks in React apps cause increasing memory usage over time, eventually leading to slowdowns, crashes, or "out of memory" errors. They're particularly problematic in long-running SPAs where users don't refresh the page.

**Common Memory Leak Sources in React:**

```jsx
// 1. Event listeners not cleaned up
function Component() {
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // ❌ Missing cleanup - listener persists after unmount
  }, []);

  // ✅ Fix: Return cleanup function
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
}

// 2. Timers/Intervals not cleared
function Component() {
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    // ❌ Interval keeps running after unmount
  }, []);

  // ✅ Fix: Clear in cleanup
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);
}

// 3. Subscriptions not unsubscribed
function Component() {
  useEffect(() => {
    const subscription = eventBus.subscribe('event', handler);
    // ❌ Subscription keeps component alive
  }, []);

  // ✅ Fix: Unsubscribe in cleanup
  useEffect(() => {
    const subscription = eventBus.subscribe('event', handler);
    return () => subscription.unsubscribe();
  }, []);
}

// 4. Closures capturing stale references
function Component({ data }) {
  const dataRef = useRef(data);
  dataRef.current = data;

  useEffect(() => {
    // This closure captures the component instance
    someGlobalStore.cache.set(id, () => {
      console.log(dataRef.current);  // Keeps component alive!
    });

    return () => someGlobalStore.cache.delete(id);
  }, [id]);
}

// 5. Forgotten AbortController on fetch
function Component({ id }) {
  useEffect(() => {
    fetch(`/api/data/${id}`)
      .then(r => r.json())
      .then(setData);  // ❌ May set state after unmount
  }, [id]);

  // ✅ Fix: Use AbortController
  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/data/${id}`, { signal: controller.signal })
      .then(r => r.json())
      .then(setData)
      .catch(e => {
        if (e.name !== 'AbortError') throw e;
      });

    return () => controller.abort();
  }, [id]);
}
```

**Using Chrome DevTools Memory Tab:**

```
1. Open DevTools → Memory tab
2. Take heap snapshot (baseline)
3. Perform action that might leak (navigate, open modal, etc.)
4. Go back / close the thing
5. Click garbage collect (🗑️ icon)
6. Take another heap snapshot
7. Compare snapshots

Look for:
- Detached DOM elements (elements removed from DOM but still in memory)
- Growing array sizes
- Objects that shouldn't exist anymore
```

**Heap Snapshot Analysis:**

```
Snapshot 2 (after navigation back):

┌────────────────────────────────────────────────────────────────┐
│ Constructor          │ Distance │ Shallow Size │ Retained Size │
├────────────────────────────────────────────────────────────────┤
│ (array)              │ 4        │ 156,000      │ 890,000 ↑     │
│ Detached HTMLDivElement │ 8     │ 340          │ 45,000 ⚠️     │
│ Object               │ 3        │ 23,400       │ 156,000 ↑     │
│ EventListener        │ 5        │ 120          │ 12,000 ⚠️     │
└────────────────────────────────────────────────────────────────┘

⚠️ Detached elements = Memory leak!
Click to see what's retaining them (retainer path)
```

**Finding Detached DOM Elements:**

```
In Memory tab:
1. Take heap snapshot
2. In filter dropdown, select "Detached"
3. Look for "Detached HTMLDivElement", "Detached HTMLInputElement", etc.
4. Click element → Look at "Retainers" panel
5. Retainer shows what's keeping it alive

Common retainers:
- Event listener → Forgot to remove listener
- Closure in setInterval → Forgot to clear interval
- Closure in Promise → Async operation completed after unmount
- Global cache/store → Forgot to clean up entry
```

**Programmatic Memory Monitoring:**

```jsx
// Monitor memory in development
function useMemoryMonitor(label) {
  useEffect(() => {
    if (typeof performance.memory === 'undefined') return;

    const logMemory = () => {
      const { usedJSHeapSize, jsHeapSizeLimit } = performance.memory;
      console.log(`${label} Memory:`, {
        used: (usedJSHeapSize / 1048576).toFixed(2) + ' MB',
        limit: (jsHeapSizeLimit / 1048576).toFixed(2) + ' MB',
        percentage: ((usedJSHeapSize / jsHeapSizeLimit) * 100).toFixed(1) + '%',
      });
    };

    logMemory();
    const interval = setInterval(logMemory, 5000);
    return () => clearInterval(interval);
  }, [label]);
}

// Usage
function App() {
  useMemoryMonitor('App');
  // ...
}
```

**React-Specific Memory Debugging:**

```jsx
// Track component mount/unmount
const mountedComponents = new Set();

function useTrackMount(name) {
  useEffect(() => {
    mountedComponents.add(name);
    console.log('Mounted:', name, 'Total:', mountedComponents.size);

    return () => {
      mountedComponents.delete(name);
      console.log('Unmounted:', name, 'Total:', mountedComponents.size);
    };
  }, [name]);
}

// If count keeps growing when navigating, you have a leak!

// Check for common patterns
function useLeakDetector() {
  const mountTime = useRef(Date.now());

  useEffect(() => {
    return () => {
      const lifetime = Date.now() - mountTime.current;
      if (lifetime < 1000) {
        console.warn('Component unmounted very quickly - check for issues');
      }
    };
  }, []);
}
```

**Using WeakRef for Optional References:**

```jsx
// When you need to reference a component but don't want to prevent GC
const componentRegistry = new Map();

function useRegisterComponent(id) {
  const ref = useRef(null);

  useEffect(() => {
    // WeakRef allows garbage collection
    componentRegistry.set(id, new WeakRef(ref.current));

    return () => {
      componentRegistry.delete(id);
    };
  }, [id]);

  return ref;
}

// Later, check if component still exists
function getComponent(id) {
  const weakRef = componentRegistry.get(id);
  return weakRef?.deref(); // Returns undefined if GC'd
}
```

**Automated Memory Leak Detection:**

```jsx
// In tests, check for memory leaks
import { render, cleanup } from '@testing-library/react';

test('component does not leak memory', async () => {
  // Force GC if available (Node with --expose-gc)
  if (global.gc) global.gc();
  const before = process.memoryUsage().heapUsed;

  // Mount and unmount many times
  for (let i = 0; i < 100; i++) {
    const { unmount } = render(<SuspectedLeakyComponent />);
    unmount();
  }

  if (global.gc) global.gc();
  const after = process.memoryUsage().heapUsed;

  // Memory shouldn't grow significantly
  const growth = after - before;
  expect(growth).toBeLessThan(1024 * 1024); // Less than 1MB growth
});
```

**Memory Profiling Workflow:**

```
1. Establish baseline
   → Take heap snapshot on app load

2. Perform suspected leaky action
   → Navigate to page, open modal, etc.

3. Reverse the action
   → Navigate away, close modal, etc.

4. Force garbage collection
   → Click 🗑️ in DevTools

5. Compare snapshots
   → Look for growing objects, detached elements

6. Find retention path
   → Click leaked object → Retainers panel

7. Fix the leak
   → Add cleanup function, remove listener, etc.

8. Verify fix
   → Repeat steps 2-5, confirm no leak
```

**Senior insight:** Memory leaks in React almost always come from missing cleanup in useEffect. The pattern is: anything you SET UP in useEffect (listener, subscription, timer, fetch) must be TORN DOWN in the cleanup return function. Use the ESLint `react-hooks/exhaustive-deps` rule - it catches many potential leaks by warning about missing dependencies. For production, monitor memory usage with RUM tools and set alerts for anomalous growth patterns.

---

### Q: What is Lighthouse and how do you use it for React performance optimization?

**Answer:**

Lighthouse is Google's automated auditing tool that measures performance, accessibility, SEO, and best practices. It provides actionable recommendations and is integrated into Chrome DevTools, available as a CLI, and runs in CI/CD pipelines.

**Running Lighthouse:**

```bash
# Chrome DevTools
# Open DevTools → Lighthouse tab → Analyze page load

# CLI (more consistent results)
npm install -g lighthouse
lighthouse https://yoursite.com --output html --output-path ./report.html

# With specific settings
lighthouse https://yoursite.com \
  --preset=desktop \           # or 'perf' for mobile
  --throttling-method=devtools \
  --chrome-flags="--headless"

# CI mode (returns JSON, exit code based on score)
lighthouse https://yoursite.com \
  --output=json \
  --budget-path=./budget.json
```

**Understanding the Scores:**

```
┌─────────────────────────────────────────────────────────────┐
│ LIGHTHOUSE REPORT                                            │
├───────────────┬───────────────┬───────────────┬─────────────┤
│ Performance   │ Accessibility │ Best Practices│ SEO         │
│     72        │     95        │     100       │    90       │
│    (Orange)   │   (Green)     │   (Green)     │  (Green)    │
└───────────────┴───────────────┴───────────────┴─────────────┘

Score Breakdown (Performance):
• First Contentful Paint (FCP):  1.2s  [10%]
• Largest Contentful Paint (LCP): 3.8s  [25%] ← Needs work
• Total Blocking Time (TBT):     450ms [30%] ← Needs work
• Cumulative Layout Shift (CLS): 0.05  [25%]
• Speed Index:                   2.1s  [10%]
```

**Key Metrics and React Optimization:**

```jsx
// 1. First Contentful Paint (FCP) - When first content appears
// React Problem: Blank page during JS download/parse

// ❌ Client-side only
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// ✅ Server-side rendering or static generation
// Next.js, Remix, or manual SSR

// 2. Largest Contentful Paint (LCP) - When main content loads
// React Problem: Data fetching delays content

// ❌ Fetch in useEffect
function HeroSection() {
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetch('/api/hero').then(r => r.json()).then(setImage);
  }, []);
  return image ? <img src={image.url} /> : <Skeleton />;
}

// ✅ Server Component or prefetching
async function HeroSection() {
  const image = await fetch('/api/hero').then(r => r.json());
  return (
    <img
      src={image.url}
      fetchPriority="high"
      loading="eager"
    />
  );
}

// 3. Total Blocking Time (TBT) - Main thread blocked during load
// React Problem: Large bundle blocks main thread

// ❌ Import everything upfront
import { HeavyChart } from './HeavyChart';
import { DataTable } from './DataTable';

// ✅ Code split with lazy loading
const HeavyChart = lazy(() => import('./HeavyChart'));
const DataTable = lazy(() => import('./DataTable'));

// 4. Cumulative Layout Shift (CLS) - Visual stability
// React Problem: Content shifting as components mount

// ❌ Dynamic content without reserved space
{isLoaded && <Banner />}

// ✅ Reserve space with skeleton
<div style={{ minHeight: 200 }}>
  {isLoaded ? <Banner /> : <BannerSkeleton />}
</div>
```

**Common Lighthouse Opportunities and Fixes:**

```jsx
// "Reduce unused JavaScript"
// → Code split, tree shake, remove unused dependencies
const Chart = lazy(() => import(/* webpackChunkName: "chart" */ './Chart'));

// "Serve images in next-gen formats"
// → Use WebP/AVIF with fallback
<picture>
  <source srcSet="/image.avif" type="image/avif" />
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.jpg" alt="" />
</picture>

// Or with Next.js Image
import Image from 'next/image';
<Image src="/photo.jpg" width={800} height={600} alt="" />

// "Eliminate render-blocking resources"
// → Inline critical CSS, defer non-critical
<style>{criticalCSS}</style>
<link
  rel="stylesheet"
  href="/styles.css"
  media="print"
  onLoad="this.media='all'"
/>

// "Reduce initial server response time"
// → Use CDN, edge caching, optimize API routes
// Next.js: Use ISR or static generation
export const revalidate = 3600; // ISR every hour

// "Preconnect to required origins"
<head>
  <link rel="preconnect" href="https://api.example.com" />
  <link rel="dns-prefetch" href="https://analytics.example.com" />
</head>

// "Avoid enormous network payloads"
// → Compress, optimize images, pagination
// Enable Brotli/Gzip compression in server
```

**Lighthouse CI Integration:**

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://staging.example.com/
            https://staging.example.com/products
          budgetPath: ./lighthouse-budget.json
          uploadArtifacts: true
```

```json
// lighthouse-budget.json
[
  {
    "path": "/*",
    "timings": [
      { "metric": "first-contentful-paint", "budget": 1800 },
      { "metric": "largest-contentful-paint", "budget": 2500 },
      { "metric": "total-blocking-time", "budget": 300 },
      { "metric": "cumulative-layout-shift", "budget": 0.1 }
    ],
    "resourceSizes": [
      { "resourceType": "script", "budget": 300 },
      { "resourceType": "total", "budget": 1000 }
    ]
  }
]
```

**Lighthouse vs Real User Monitoring (RUM):**

| Aspect | Lighthouse | RUM |
|--------|------------|-----|
| Environment | Synthetic (controlled) | Real users (varied) |
| Network | Simulated throttling | Actual connections |
| Device | Emulated mobile | Real devices |
| Data | Single test | Aggregated metrics |
| Use case | Development, CI | Production monitoring |

```jsx
// Both are valuable - use together
// Lighthouse: Catch regressions in CI
// RUM: Measure real-world performance

// Collecting RUM data
import { onLCP, onINP, onCLS } from 'web-vitals';

function sendToAnalytics({ name, value, rating }) {
  fetch('/api/vitals', {
    method: 'POST',
    body: JSON.stringify({ name, value, rating, url: location.href }),
    keepalive: true,
  });
}

onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onCLS(sendToAnalytics);
```

**React-Specific Lighthouse Optimization Checklist:**

```markdown
Performance:
- [ ] Server-side render or statically generate critical pages
- [ ] Code split routes with React.lazy()
- [ ] Use Next.js Image or optimize images manually
- [ ] Implement proper loading states (Suspense boundaries)
- [ ] Use useTransition for non-urgent updates
- [ ] Virtualize long lists

Best Practices:
- [ ] No console errors in production
- [ ] HTTPS only
- [ ] No deprecated APIs
- [ ] Proper error boundaries

SEO:
- [ ] Unique title and meta description per page
- [ ] Proper heading hierarchy (one h1)
- [ ] Valid structured data (JSON-LD)
- [ ] Sitemap.xml and robots.txt

Accessibility:
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Form inputs have labels
- [ ] Focus indicators visible
```

**Senior insight:** Lighthouse scores are useful for tracking regressions, but don't optimize purely for the score. A 100 score doesn't mean great UX - it means you meet minimum thresholds in a synthetic test. Focus on: (1) Real user metrics from RUM, (2) Business-critical user journeys, (3) P75 performance across devices. Use Lighthouse in CI to catch regressions, but make decisions based on real user data. Mobile throttled Lighthouse is intentionally harsh - most real users have better connections.
