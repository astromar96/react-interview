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
