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

### Q: What is the difference between shallow copy and deep copy? How does this affect React state?

**Answer:**

**Shallow Copy:** Creates a new object but nested objects/arrays still reference the original.

```javascript
const original = {
  name: 'John',
  address: { city: 'NYC', zip: '10001' },
  hobbies: ['reading', 'gaming'],
};

// Shallow copy methods
const copy1 = { ...original };
const copy2 = Object.assign({}, original);

// Modifying nested object affects both!
copy1.address.city = 'LA';
console.log(original.address.city); // 'LA' - mutated!

// But top-level works fine
copy1.name = 'Jane';
console.log(original.name); // 'John' - unchanged
```

**Deep Copy:** Creates completely independent copy at all levels.

```javascript
// Method 1: structuredClone (modern, recommended)
const deepCopy1 = structuredClone(original);

// Method 2: JSON (limited - loses functions, dates, undefined)
const deepCopy2 = JSON.parse(JSON.stringify(original));

// Method 3: Libraries (lodash)
import { cloneDeep } from 'lodash';
const deepCopy3 = cloneDeep(original);

// Now modifications are safe
deepCopy1.address.city = 'LA';
console.log(original.address.city); // 'NYC' - unchanged!
```

**React State Implications:**

```jsx
// ❌ WRONG - Mutating nested state
function updateCity(newCity) {
  const user = { ...state.user };  // Shallow copy
  user.address.city = newCity;      // Mutates original!
  setState({ user });               // React may not detect change
}

// ✅ CORRECT - Immutable nested update
function updateCity(newCity) {
  setState((prev) => ({
    ...prev,
    user: {
      ...prev.user,
      address: {
        ...prev.user.address,
        city: newCity,
      },
    },
  }));
}

// ✅ BETTER - Using Immer
import { produce } from 'immer';

function updateCity(newCity) {
  setState(produce((draft) => {
    draft.user.address.city = newCity;  // Looks like mutation, but isn't!
  }));
}
```

**When Shallow Copy is Sufficient:**

```jsx
// Flat objects - shallow copy is fine
const [settings, setSettings] = useState({
  theme: 'dark',
  language: 'en',
  fontSize: 14,
});

// Safe update
setSettings((prev) => ({ ...prev, theme: 'light' }));
```

**Array Operations:**

```jsx
// ❌ WRONG - Mutating array
const items = [...state.items];
items[2].name = 'Updated';  // Mutates original item!

// ✅ CORRECT - Map to new objects
setState((prev) => ({
  items: prev.items.map((item, i) =>
    i === 2 ? { ...item, name: 'Updated' } : item
  ),
}));
```

**structuredClone Limitations:**

```javascript
// ❌ Doesn't work with:
const obj = {
  fn: () => {},           // Functions
  sym: Symbol('test'),    // Symbols
  dom: document.body,     // DOM nodes
};

structuredClone(obj); // Throws error
```

**Senior insight:** Default to shallow copies and explicit nested updates - they're faster and make the update path clear. Use Immer for complex nested state - it provides ergonomic "mutable" syntax while maintaining immutability. Reserve deep cloning for truly necessary cases (form state snapshots, undo/redo). Normalized state shape (flat structures with IDs) avoids deep nesting entirely.

---

### Q: Explain prototypal inheritance and how it relates to React class components

**Answer:**

**Prototypal Inheritance:** JavaScript objects inherit from other objects via the prototype chain.

```javascript
// Every object has a [[Prototype]]
const animal = {
  speak() {
    console.log(`${this.name} makes a sound`);
  },
};

const dog = Object.create(animal);
dog.name = 'Rex';
dog.speak(); // "Rex makes a sound" - inherited from animal

// Prototype chain
console.log(dog.hasOwnProperty('name'));  // true (own property)
console.log(dog.hasOwnProperty('speak')); // false (inherited)
```

**Constructor Functions (Pre-ES6):**

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
  Animal.call(this, name);  // Call parent constructor
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof!');
};

const rex = new Dog('Rex', 'German Shepherd');
rex.speak(); // Inherited from Animal
rex.bark();  // Own method
```

**ES6 Classes (Syntactic Sugar):**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Must call super() first
    this.breed = breed;
  }

  bark() {
    console.log('Woof!');
  }
}
```

**React Class Components:**

```jsx
// React.Component is a class with methods on its prototype
class Counter extends React.Component {
  constructor(props) {
    super(props);  // Required! Initializes this.props
    this.state = { count: 0 };
  }

  // Instance method - recreated per instance
  handleClick = () => {
    this.setState((s) => ({ count: s.count + 1 }));
  };

  // Prototype method - shared across instances
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    );
  }
}

// Counter inherits from React.Component:
// - this.setState()
// - this.forceUpdate()
// - Lifecycle methods (componentDidMount, etc.)
```

**`this` Binding Issues:**

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // ❌ Without binding, 'this' is undefined in handler
    // this.handleClick = this.handleClick.bind(this);
  }

  // ❌ Prototype method - 'this' depends on call context
  handleClick() {
    this.setState({ count: this.state.count + 1 }); // Error!
  }

  // ✅ Arrow function - 'this' is lexically bound
  handleClick = () => {
    this.setState({ count: this.state.count + 1 }); // Works!
  };
}
```

**Why Hooks are Preferred:**

```jsx
// Functional component - no 'this', no prototype chain
function Counter() {
  const [count, setCount] = useState(0);

  // Just a regular function - no 'this' binding issues
  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```

**Checking Inheritance:**

```javascript
// instanceof checks prototype chain
console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true
console.log(rex instanceof Object); // true

// Check direct prototype
console.log(Object.getPrototypeOf(rex) === Dog.prototype); // true
```

**Senior insight:** Understanding prototypes explains class component behavior: why `super(props)` is required, why `this` binding is needed, and why arrow functions work differently. Functional components with hooks sidestep all prototype/this complexity, which is a major reason they're now preferred. You still need prototype knowledge for: understanding older codebases, debugging inheritance issues, and working with JavaScript libraries that use prototypal patterns.

---

### Q: Explain async/await vs Promises and how errors propagate

**Answer:**

**Promises - Explicit Chaining:**

```javascript
// Creating a promise
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: 'John' });
      } else {
        reject(new Error('Invalid ID'));
      }
    }, 1000);
  });
}

// Consuming with .then/.catch
fetchUser(1)
  .then((user) => {
    console.log(user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Done');
  });
```

**Async/Await - Synchronous-Looking Syntax:**

```javascript
// Same logic, cleaner syntax
async function loadUserData(id) {
  try {
    const user = await fetchUser(id);
    console.log(user);

    const posts = await fetchPosts(user.id);
    console.log(posts);

    return { user, posts };
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw if needed
  } finally {
    console.log('Done');
  }
}
```

**Error Propagation with Promises:**

```javascript
// Errors propagate down the chain until caught
fetchUser(1)
  .then((user) => {
    throw new Error('Oops!');  // Error thrown
    return fetchPosts(user.id);
  })
  .then((posts) => {
    // This is SKIPPED - error propagates past it
    console.log(posts);
  })
  .catch((error) => {
    // Error caught here
    console.error(error);
  });

// Catching in the middle
fetchUser(1)
  .then((user) => fetchPosts(user.id))
  .catch((error) => {
    // Handle and recover
    console.warn('Using fallback');
    return [];  // Return fallback value
  })
  .then((posts) => {
    // Continues with [] from catch
    console.log('Posts:', posts);
  });
```

**Error Propagation with Async/Await:**

```javascript
async function example() {
  try {
    const user = await fetchUser(-1);  // Throws
    const posts = await fetchPosts(user.id);  // Never reached
    return posts;
  } catch (error) {
    // All errors in the try block caught here
    console.error(error);
    return [];  // Fallback
  }
}

// Calling async function
example()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));  // If throw in catch

// Or with await
const result = await example();
```

**Promise Combinators:**

```javascript
// Promise.all - All must succeed
const [user, posts, comments] = await Promise.all([
  fetchUser(1),
  fetchPosts(1),
  fetchComments(1),
]);
// If any fails, entire Promise.all rejects

// Promise.allSettled - Get results regardless of success/failure
const results = await Promise.allSettled([
  fetchUser(1),
  fetchUser(-1),  // Will reject
]);
// results: [
//   { status: 'fulfilled', value: {...} },
//   { status: 'rejected', reason: Error }
// ]

// Promise.race - First to settle (resolve or reject)
const fastest = await Promise.race([
  fetchFromServer1(),
  fetchFromServer2(),
]);

// Promise.any - First to succeed (ignores rejections)
const firstSuccess = await Promise.any([
  fetchFromServer1(),  // Might fail
  fetchFromServer2(),  // Might fail
  fetchFromServer3(),  // First success wins
]);
// Only rejects if ALL reject
```

**React Patterns:**

```jsx
// ❌ Don't use async directly in useEffect
useEffect(async () => {  // Wrong!
  const data = await fetchData();
  setData(data);
}, []);

// ✅ Define async function inside
useEffect(() => {
  async function loadData() {
    try {
      const data = await fetchData();
      setData(data);
    } catch (error) {
      setError(error);
    }
  }
  loadData();
}, []);

// ✅ Handle race conditions
useEffect(() => {
  let cancelled = false;

  async function loadData() {
    try {
      const data = await fetchData(id);
      if (!cancelled) {
        setData(data);
      }
    } catch (error) {
      if (!cancelled) {
        setError(error);
      }
    }
  }

  loadData();
  return () => { cancelled = true; };
}, [id]);
```

**Error Boundaries Don't Catch Async Errors:**

```jsx
// ❌ Error boundary won't catch this
async function handleClick() {
  throw new Error('Async error');  // Not caught by boundary
}

// ✅ Convert to synchronous throw
function useAsyncError() {
  const [, setError] = useState();
  return useCallback((error) => {
    setError(() => { throw error; });  // Now caught by boundary
  }, []);
}

function Component() {
  const throwError = useAsyncError();

  async function handleClick() {
    try {
      await riskyOperation();
    } catch (error) {
      throwError(error);  // Triggers error boundary
    }
  }
}
```

**Senior insight:** Use async/await for readability but understand Promise mechanics for debugging. Key gotchas: unhandled rejections (always have a catch), race conditions (cleanup/cancellation), error boundaries not catching async errors. Use Promise.allSettled when you need all results regardless of individual failures. AbortController is essential for cancellable fetch operations.

---

### Q: How does JavaScript handle memory management and garbage collection?

**Answer:**

**Automatic Memory Management:**

JavaScript automatically allocates memory when objects are created and frees it when no longer needed (garbage collection).

```javascript
// Memory allocated
let user = { name: 'John', age: 30 };
let items = [1, 2, 3, 4, 5];

// Memory released when no references exist
user = null;  // Original object can be garbage collected
items = null;
```

**Mark-and-Sweep Algorithm:**

Modern JavaScript engines use mark-and-sweep:

1. **Mark**: Start from "roots" (global object, stack), mark all reachable objects
2. **Sweep**: Delete unmarked objects

```javascript
// Reachable - won't be collected
let root = {
  child: {
    grandchild: { value: 1 },
  },
};

// Unreachable after reassignment
root.child = null;
// grandchild object is now unreachable → will be collected
```

**Common Memory Leak Patterns:**

```javascript
// 1. Forgotten timers
function startPolling() {
  setInterval(() => {
    fetchData().then(updateUI);
  }, 1000);
  // Interval never cleared → runs forever
}

// Fix: Store and clear interval
const intervalId = setInterval(...);
clearInterval(intervalId);

// 2. Event listeners not removed
function setupListener() {
  window.addEventListener('resize', handleResize);
  // Listener keeps references alive
}

// Fix: Remove on cleanup
window.removeEventListener('resize', handleResize);

// 3. Closures retaining large objects
function createHandler() {
  const hugeData = new Array(1000000).fill('data');

  return function handler() {
    console.log(hugeData.length);  // Keeps hugeData alive!
  };
}

// Fix: Only capture what's needed
function createHandler() {
  const hugeData = new Array(1000000).fill('data');
  const length = hugeData.length;

  return function handler() {
    console.log(length);  // Only captures the number
  };
}

// 4. Detached DOM nodes
let element = document.getElementById('button');
document.body.removeChild(element);
// element variable still references the detached node!
element = null;  // Now it can be collected
```

**WeakMap and WeakSet:**

Hold "weak" references that don't prevent garbage collection.

```javascript
// Regular Map - prevents garbage collection
const cache = new Map();
let user = { id: 1, name: 'John' };
cache.set(user, 'cached data');
user = null;  // Object still in Map → NOT collected

// WeakMap - allows garbage collection
const weakCache = new WeakMap();
let user = { id: 1, name: 'John' };
weakCache.set(user, 'cached data');
user = null;  // No strong references → CAN be collected
```

**Use Cases for WeakMap/WeakSet:**

```javascript
// 1. Private data for objects
const privateData = new WeakMap();

class User {
  constructor(name, password) {
    this.name = name;
    privateData.set(this, { password });  // Private!
  }

  checkPassword(input) {
    return privateData.get(this).password === input;
  }
}

// 2. Caching computed values
const computeCache = new WeakMap();

function expensiveComputation(obj) {
  if (computeCache.has(obj)) {
    return computeCache.get(obj);
  }

  const result = /* expensive work */;
  computeCache.set(obj, result);
  return result;
}
// Cache entry automatically removed when obj is garbage collected

// 3. Tracking DOM elements
const elementData = new WeakMap();

function addData(element, data) {
  elementData.set(element, data);
}
// When element is removed from DOM and dereferenced,
// the data is also eligible for collection
```

**React-Specific Memory Concerns:**

```jsx
// ❌ Memory leak - subscription not cleaned up
useEffect(() => {
  const subscription = eventEmitter.subscribe(handler);
  // Missing cleanup!
}, []);

// ✅ Proper cleanup
useEffect(() => {
  const subscription = eventEmitter.subscribe(handler);
  return () => subscription.unsubscribe();
}, []);

// ❌ Memory leak - stale closure keeps old state
useEffect(() => {
  const interval = setInterval(() => {
    console.log(count);  // Closes over initial count
  }, 1000);
  return () => clearInterval(interval);
}, []);  // Empty deps = closure never updates

// ✅ Fix with ref or proper deps
const countRef = useRef(count);
countRef.current = count;

useEffect(() => {
  const interval = setInterval(() => {
    console.log(countRef.current);  // Always current
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

**Debugging Memory Issues:**

```javascript
// Chrome DevTools Memory tab:
// 1. Take heap snapshot
// 2. Perform actions
// 3. Take another snapshot
// 4. Compare to find leaked objects

// Memory timeline:
// - Look for sawtooth pattern (normal GC)
// - Steadily increasing = potential leak
```

**Senior insight:** Most memory issues in React come from: uncleaned subscriptions/timers, stale closures holding references, and storing too much in component state. Use WeakMap for caches tied to object lifetimes. Profile with Chrome DevTools Memory tab to identify leaks. The cleanup function in useEffect is your primary tool for preventing leaks in functional components.

---

### Q: Explain advanced WeakMap and WeakSet use cases in React applications

**Answer:**

WeakMap and WeakSet hold "weak" references to objects, allowing them to be garbage collected when no other references exist. This makes them powerful for caching, private data, and tracking without causing memory leaks.

**Key Differences from Map/Set:**

| Feature | Map/Set | WeakMap/WeakSet |
|---------|---------|-----------------|
| Keys | Any type | Objects only |
| Iteration | Yes (forEach, keys, values) | No |
| size property | Yes | No |
| Garbage collection | Prevents | Allows |
| Use case | Data storage | Object metadata |

**Pattern 1: Component Instance Metadata:**

```typescript
// Track additional data about component instances
// without modifying the instance or preventing GC

const componentMetadata = new WeakMap<object, {
  renderCount: number;
  lastRenderTime: number;
  mountedAt: number;
}>();

function useRenderTracking() {
  const instanceRef = useRef({});

  useEffect(() => {
    const instance = instanceRef.current;

    if (!componentMetadata.has(instance)) {
      componentMetadata.set(instance, {
        renderCount: 0,
        lastRenderTime: 0,
        mountedAt: Date.now(),
      });
    }

    const meta = componentMetadata.get(instance)!;
    meta.renderCount++;
    meta.lastRenderTime = Date.now();

    // When component unmounts and instanceRef is garbage collected,
    // the metadata is automatically cleaned up
  });
}
```

**Pattern 2: Private Class Fields (Pre-ES2022):**

```typescript
// Before #privateField syntax, WeakMap was the standard pattern

const _password = new WeakMap<User, string>();
const _sessions = new WeakMap<User, Set<string>>();

class User {
  name: string;

  constructor(name: string, password: string) {
    this.name = name;
    _password.set(this, password);
    _sessions.set(this, new Set());
  }

  authenticate(input: string): boolean {
    return _password.get(this) === input;
  }

  addSession(sessionId: string) {
    _sessions.get(this)!.add(sessionId);
  }

  removeSession(sessionId: string) {
    _sessions.get(this)!.delete(sessionId);
  }
}

// Password is truly private - can't be accessed from outside
const user = new User('John', 'secret123');
console.log(_password.get(user)); // Only accessible if you have _password reference
```

**Pattern 3: Memoization Cache that Doesn't Leak:**

```typescript
// Cache expensive computations tied to object lifetime

const computationCache = new WeakMap<object, Map<string, unknown>>();

function memoize<T extends object, R>(
  obj: T,
  key: string,
  compute: () => R
): R {
  if (!computationCache.has(obj)) {
    computationCache.set(obj, new Map());
  }

  const objCache = computationCache.get(obj)!;

  if (!objCache.has(key)) {
    objCache.set(key, compute());
  }

  return objCache.get(key) as R;
}

// Usage
function ExpensiveComponent({ data }: { data: ComplexData }) {
  // Cache is automatically cleared when data object is garbage collected
  const processed = memoize(data, 'processed', () => {
    return expensiveProcessing(data);
  });

  const summary = memoize(data, 'summary', () => {
    return generateSummary(data);
  });

  return <div>{processed.map(item => <Item key={item.id} item={item} />)}</div>;
}
```

**Pattern 4: DOM Element Association:**

```typescript
// Associate data with DOM elements without data attributes

const elementHandlers = new WeakMap<Element, {
  cleanup: () => void;
  state: Record<string, unknown>;
}>();

function attachBehavior(element: Element, options: BehaviorOptions) {
  // Clean up previous behavior if any
  if (elementHandlers.has(element)) {
    elementHandlers.get(element)!.cleanup();
  }

  const handler = createHandler(element, options);
  const cleanup = () => {
    handler.destroy();
    element.removeEventListener('click', handler.onClick);
  };

  element.addEventListener('click', handler.onClick);

  elementHandlers.set(element, {
    cleanup,
    state: {},
  });

  // When element is removed from DOM and dereferenced,
  // handler data is automatically garbage collected
}

// React integration
function useElementBehavior(ref: RefObject<Element>, options: BehaviorOptions) {
  useEffect(() => {
    if (ref.current) {
      attachBehavior(ref.current, options);
      return () => elementHandlers.get(ref.current!)?.cleanup();
    }
  }, [options]);
}
```

**Pattern 5: Tracking Processed Objects:**

```typescript
// Track which objects have been processed without modifying them

const processedObjects = new WeakSet<object>();

async function processOnce<T extends object>(obj: T, processor: (obj: T) => Promise<void>) {
  if (processedObjects.has(obj)) {
    console.log('Already processed, skipping');
    return;
  }

  await processor(obj);
  processedObjects.add(obj);
}

// React example: Process data only once
function DataProcessor({ data }: { data: Record[] }) {
  useEffect(() => {
    data.forEach(item => {
      processOnce(item, async (record) => {
        await sendToAnalytics(record);
      });
    });
  }, [data]);

  return <DataView data={data} />;
}
```

**Pattern 6: Circular Reference Safe Comparison:**

```typescript
// Deep comparison that handles circular references

function deepEqual(a: unknown, b: unknown, seen = new WeakSet<object>()): boolean {
  // Handle primitives
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object') return false;
  if (a === null || b === null) return false;

  // Handle circular references
  if (seen.has(a as object)) return true; // Assume equal if seen
  seen.add(a as object);

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(key =>
    deepEqual((a as any)[key], (b as any)[key], seen)
  );
}

// Usage in React
function useDeepMemo<T>(value: T): T {
  const ref = useRef<T>(value);

  if (!deepEqual(ref.current, value)) {
    ref.current = value;
  }

  return ref.current;
}
```

**Pattern 7: Event Listener Registry:**

```typescript
// Track event listeners for proper cleanup

const listenerRegistry = new WeakMap<EventTarget, Map<string, Set<EventListener>>>();

function addTrackedListener(
  target: EventTarget,
  type: string,
  listener: EventListener
) {
  if (!listenerRegistry.has(target)) {
    listenerRegistry.set(target, new Map());
  }

  const targetListeners = listenerRegistry.get(target)!;

  if (!targetListeners.has(type)) {
    targetListeners.set(type, new Set());
  }

  targetListeners.get(type)!.add(listener);
  target.addEventListener(type, listener);
}

function removeAllListeners(target: EventTarget, type?: string) {
  const targetListeners = listenerRegistry.get(target);
  if (!targetListeners) return;

  if (type) {
    targetListeners.get(type)?.forEach(listener => {
      target.removeEventListener(type, listener);
    });
    targetListeners.delete(type);
  } else {
    targetListeners.forEach((listeners, eventType) => {
      listeners.forEach(listener => {
        target.removeEventListener(eventType, listener);
      });
    });
    listenerRegistry.delete(target);
  }
}
```

**Senior insight:** WeakMap is essential when you need to associate metadata with objects without preventing garbage collection. Common React patterns: component instance tracking, memoization caches, and DOM element metadata. The key insight is that WeakMap entries are automatically cleaned up when the key object is garbage collected—you never need to manually delete entries. This is crucial for long-running applications where manual cleanup is error-prone.

---

### Q: How do Proxy and Reflect enable reactive state management patterns?

**Answer:**

Proxy and Reflect are JavaScript metaprogramming features that allow you to intercept and customize object operations. They're the foundation for reactive state libraries like Vue, MobX, and Valtio.

**Proxy Basics:**

```javascript
const target = { name: 'John', age: 30 };

const handler = {
  get(target, prop, receiver) {
    console.log(`Getting ${prop}`);
    return Reflect.get(target, prop, receiver);
  },

  set(target, prop, value, receiver) {
    console.log(`Setting ${prop} to ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
};

const proxy = new Proxy(target, handler);

proxy.name;        // Logs: "Getting name", returns "John"
proxy.age = 31;    // Logs: "Setting age to 31"
```

**Why Reflect?**

```javascript
// Reflect provides the default behavior for all proxy traps
// It's preferred over direct operations:

const handler = {
  get(target, prop, receiver) {
    // ❌ Direct access doesn't handle inheritance correctly
    return target[prop];

    // ✅ Reflect handles receiver (this) correctly
    return Reflect.get(target, prop, receiver);
  },
};

// Example of why receiver matters
const parent = {
  get value() {
    return this._value;
  }
};

const child = Object.create(new Proxy(parent, handler));
child._value = 42;
child.value; // With Reflect: 42, Without: undefined
```

**Building Observable State (Valtio-style):**

```typescript
type Listener = () => void;

const listeners = new Set<Listener>();
const proxyCache = new WeakMap<object, object>();

function proxy<T extends object>(obj: T): T {
  // Return cached proxy if exists
  if (proxyCache.has(obj)) {
    return proxyCache.get(obj) as T;
  }

  const handler: ProxyHandler<T> = {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);

      // Recursively proxy nested objects
      if (value !== null && typeof value === 'object') {
        return proxy(value);
      }

      return value;
    },

    set(target, prop, value, receiver) {
      const oldValue = Reflect.get(target, prop, receiver);

      if (oldValue !== value) {
        Reflect.set(target, prop, value, receiver);
        // Notify all listeners of change
        listeners.forEach(listener => listener());
      }

      return true;
    },

    deleteProperty(target, prop) {
      const result = Reflect.deleteProperty(target, prop);
      listeners.forEach(listener => listener());
      return result;
    },
  };

  const proxied = new Proxy(obj, handler);
  proxyCache.set(obj, proxied);
  return proxied;
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// Usage
const state = proxy({
  count: 0,
  user: { name: 'John' },
});

subscribe(() => console.log('State changed!', state.count));

state.count++;          // Logs: "State changed! 1"
state.user.name = 'Jane'; // Logs: "State changed! 1" (nested proxy)
```

**React Integration with Snapshot:**

```typescript
// Valtio-style useSnapshot hook

function useSnapshot<T extends object>(proxyState: T): T {
  const [, forceUpdate] = useReducer(c => c + 1, 0);

  useEffect(() => {
    // Subscribe to state changes
    return subscribe(() => forceUpdate());
  }, [proxyState]);

  // Return a read-only snapshot
  return proxyState;
}

// Usage
const state = proxy({ count: 0 });

function Counter() {
  const snap = useSnapshot(state);

  return (
    <div>
      <p>Count: {snap.count}</p>
      <button onClick={() => state.count++}>
        Increment
      </button>
    </div>
  );
}
```

**Tracking Property Access (MobX-style):**

```typescript
// Track which properties were accessed during render

let currentTracker: Set<string> | null = null;

function createObservable<T extends object>(obj: T): T {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      // Track access if we're in a tracking context
      if (currentTracker && typeof prop === 'string') {
        currentTracker.add(prop);
      }
      return Reflect.get(target, prop, receiver);
    },

    set(target, prop, value, receiver) {
      const result = Reflect.set(target, prop, value, receiver);
      // Notify observers of this specific property
      notifyPropertyObservers(prop as string);
      return result;
    },
  });
}

function track<T>(fn: () => T): { result: T; dependencies: Set<string> } {
  const tracker = new Set<string>();
  currentTracker = tracker;

  try {
    const result = fn();
    return { result, dependencies: tracker };
  } finally {
    currentTracker = null;
  }
}

// React usage - only re-render when accessed properties change
function useObservable<T extends object, R>(
  observable: T,
  selector: (state: T) => R
): R {
  const [, forceUpdate] = useReducer(c => c + 1, 0);
  const { result, dependencies } = track(() => selector(observable));

  useEffect(() => {
    // Only subscribe to properties that were actually accessed
    const unsubscribes = [...dependencies].map(prop =>
      subscribeToProperty(prop, forceUpdate)
    );

    return () => unsubscribes.forEach(unsub => unsub());
  }, [observable, ...dependencies]);

  return result;
}
```

**Validation Proxy:**

```typescript
// Automatically validate state updates

interface ValidationRules<T> {
  [K in keyof T]?: (value: T[K]) => boolean | string;
}

function createValidatedState<T extends object>(
  initial: T,
  rules: ValidationRules<T>
): T {
  return new Proxy(initial, {
    set(target, prop, value, receiver) {
      const rule = rules[prop as keyof T];

      if (rule) {
        const result = rule(value);

        if (result === false) {
          throw new Error(`Invalid value for ${String(prop)}`);
        }

        if (typeof result === 'string') {
          throw new Error(result);
        }
      }

      return Reflect.set(target, prop, value, receiver);
    },
  });
}

// Usage
const userState = createValidatedState(
  { name: '', age: 0, email: '' },
  {
    name: (v) => v.length > 0 || 'Name is required',
    age: (v) => v >= 0 && v <= 150 || 'Invalid age',
    email: (v) => v.includes('@') || 'Invalid email',
  }
);

userState.name = '';     // Throws: "Name is required"
userState.age = -5;      // Throws: "Invalid age"
userState.email = 'john'; // Throws: "Invalid email"
```

**Immutable Updates with Proxy (Immer-style):**

```typescript
function produce<T extends object>(base: T, recipe: (draft: T) => void): T {
  const copy = structuredClone(base);
  const changes: Array<{ prop: string; value: unknown }> = [];

  const draft = new Proxy(copy, {
    set(target, prop, value, receiver) {
      changes.push({ prop: String(prop), value });
      return Reflect.set(target, prop, value, receiver);
    },
  });

  recipe(draft);

  // Return original if no changes
  if (changes.length === 0) {
    return base;
  }

  return copy;
}

// Usage in React
function reducer(state: State, action: Action): State {
  return produce(state, draft => {
    switch (action.type) {
      case 'INCREMENT':
        draft.count++;
        break;
      case 'SET_USER':
        draft.user = action.payload;
        break;
    }
  });
}
```

**Proxy Traps Reference:**

| Trap | Intercepts |
|------|-----------|
| get | Property access (obj.prop) |
| set | Property assignment (obj.prop = val) |
| has | `in` operator |
| deleteProperty | `delete` operator |
| apply | Function calls |
| construct | `new` operator |
| getPrototypeOf | Object.getPrototypeOf |
| setPrototypeOf | Object.setPrototypeOf |
| ownKeys | Object.keys, for...in |

**Senior insight:** Proxy enables "transparent" reactivity—state mutations look like normal JavaScript but trigger updates automatically. This is why Valtio and MobX feel more intuitive than Redux. The trade-off is debuggability: proxied objects can behave unexpectedly in devtools. Use Proxy for reactive state management but understand the limitations: no support for primitive values (use a wrapper object), performance overhead for very high-frequency updates, and complexity in debugging.

---

### Q: Explain AbortController patterns for cancellable operations in React

**Answer:**

AbortController provides a standard way to cancel async operations like fetch requests, timers, and any Promise-based API. It's essential for preventing race conditions and memory leaks in React.

**Basic AbortController:**

```javascript
const controller = new AbortController();
const signal = controller.signal;

// Pass signal to fetch
fetch('/api/data', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request was cancelled');
    } else {
      console.error('Request failed:', error);
    }
  });

// Cancel the request
controller.abort();
```

**React useEffect with AbortController:**

```typescript
function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/users/${userId}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        // Only set error if not aborted
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        // Only update loading if not aborted
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    // Cleanup: abort on unmount or userId change
    return () => controller.abort();
  }, [userId]);

  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  return <UserCard user={user} />;
}
```

**Custom Hook for Abortable Fetch:**

```typescript
interface UseFetchOptions extends RequestInit {
  immediate?: boolean;
}

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  abort: () => void;
}

function useFetch<T>(url: string, options: UseFetchOptions = {}): UseFetchReturn<T> {
  const { immediate = true, ...fetchOptions } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<Error | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const abort = useCallback(() => {
    controllerRef.current?.abort();
  }, []);

  const fetchData = useCallback(async () => {
    // Abort any in-flight request
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setError(err);
      }
    } finally {
      if (!controllerRef.current?.signal.aborted) {
        setLoading(false);
      }
    }
  }, [url, JSON.stringify(fetchOptions)]);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }

    return () => abort();
  }, [fetchData, immediate, abort]);

  return { data, loading, error, refetch: fetchData, abort };
}

// Usage
function SearchResults({ query }: { query: string }) {
  const { data, loading, error, abort } = useFetch<SearchResult[]>(
    `/api/search?q=${encodeURIComponent(query)}`
  );

  // Component handles abort automatically on unmount/query change
  return (
    <div>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage error={error} />}
      {data?.map(result => <ResultItem key={result.id} result={result} />)}
    </div>
  );
}
```

**Timeout with AbortController:**

```typescript
async function fetchWithTimeout<T>(
  url: string,
  options: RequestInit = {},
  timeoutMs: number = 5000
): Promise<T> {
  const controller = new AbortController();

  // Set timeout to abort
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Request timeout after ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

// Usage
try {
  const data = await fetchWithTimeout('/api/slow-endpoint', {}, 3000);
} catch (error) {
  console.log(error.message); // "Request timeout after 3000ms"
}
```

**Cancellable Promise Pattern:**

```typescript
interface CancellablePromise<T> extends Promise<T> {
  cancel: () => void;
}

function makeCancellable<T>(promise: Promise<T>): CancellablePromise<T> {
  let isCancelled = false;

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then(
      (value) => {
        if (!isCancelled) {
          resolve(value);
        }
      },
      (error) => {
        if (!isCancelled) {
          reject(error);
        }
      }
    );
  }) as CancellablePromise<T>;

  wrappedPromise.cancel = () => {
    isCancelled = true;
  };

  return wrappedPromise;
}

// Usage in React
function useAsync<T>(asyncFn: () => Promise<T>, deps: unknown[]) {
  const [state, setState] = useState<{
    loading: boolean;
    data: T | null;
    error: Error | null;
  }>({ loading: true, data: null, error: null });

  useEffect(() => {
    const cancellable = makeCancellable(asyncFn());

    cancellable
      .then(data => setState({ loading: false, data, error: null }))
      .catch(error => setState({ loading: false, data: null, error }));

    return () => cancellable.cancel();
  }, deps);

  return state;
}
```

**AbortController with Multiple Requests:**

```typescript
function useParallelFetch<T extends Record<string, string>>(
  urls: T
): { data: { [K in keyof T]: unknown | null }; loading: boolean } {
  const [data, setData] = useState<{ [K in keyof T]: unknown | null }>(
    Object.fromEntries(Object.keys(urls).map(k => [k, null])) as any
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchAll() {
      const entries = Object.entries(urls);

      const results = await Promise.allSettled(
        entries.map(([, url]) =>
          fetch(url, { signal: controller.signal }).then(r => r.json())
        )
      );

      if (!controller.signal.aborted) {
        const newData = Object.fromEntries(
          entries.map(([key], index) => [
            key,
            results[index].status === 'fulfilled'
              ? (results[index] as PromiseFulfilledResult<unknown>).value
              : null,
          ])
        );

        setData(newData as any);
        setLoading(false);
      }
    }

    fetchAll();

    return () => controller.abort();
  }, [JSON.stringify(urls)]);

  return { data, loading };
}

// Usage
function Dashboard() {
  const { data, loading } = useParallelFetch({
    user: '/api/user',
    posts: '/api/posts',
    notifications: '/api/notifications',
  });

  if (loading) return <DashboardSkeleton />;

  return (
    <div>
      <UserCard user={data.user} />
      <PostList posts={data.posts} />
      <NotificationBell notifications={data.notifications} />
    </div>
  );
}
```

**AbortSignal.timeout (Modern):**

```typescript
// Modern browsers support AbortSignal.timeout
async function fetchWithBuiltInTimeout() {
  const response = await fetch('/api/data', {
    signal: AbortSignal.timeout(5000), // 5 second timeout
  });

  return response.json();
}

// Combine with manual abort
function useFetchWithTimeoutAndCancel(url: string, timeoutMs: number) {
  const [loading, setLoading] = useState(true);
  const manualAbortRef = useRef<AbortController>();

  useEffect(() => {
    manualAbortRef.current = new AbortController();

    // Combine timeout signal with manual abort signal
    const signal = AbortSignal.any([
      AbortSignal.timeout(timeoutMs),
      manualAbortRef.current.signal,
    ]);

    fetch(url, { signal })
      .then(r => r.json())
      .then(setData)
      .catch(handleError)
      .finally(() => setLoading(false));

    return () => manualAbortRef.current?.abort();
  }, [url, timeoutMs]);

  const cancel = useCallback(() => {
    manualAbortRef.current?.abort();
  }, []);

  return { loading, cancel };
}
```

**Senior insight:** AbortController is essential for production React apps—without it, rapid user actions cause race conditions where stale data overwrites fresh data. Key patterns: abort in useEffect cleanup, check `signal.aborted` before state updates, and handle AbortError separately from real errors. TanStack Query handles this automatically, which is one reason it's recommended over manual fetch in useEffect.

---

### Q: Compare structuredClone vs JSON.parse/stringify for deep cloning

**Answer:**

Both methods create deep copies of objects, but they have different capabilities, performance characteristics, and limitations.

**Quick Comparison:**

| Feature | JSON.parse/stringify | structuredClone |
|---------|---------------------|-----------------|
| Date objects | ❌ Becomes string | ✅ Preserved |
| undefined | ❌ Lost | ✅ Preserved |
| Functions | ❌ Lost | ❌ Error |
| Symbols | ❌ Lost | ❌ Error |
| RegExp | ❌ Becomes {} | ✅ Preserved |
| Map/Set | ❌ Becomes {} | ✅ Preserved |
| Circular refs | ❌ Error | ✅ Preserved |
| DOM nodes | ❌ Error | ❌ Error |
| Performance | Slower | Faster |
| Browser support | All | Modern (2022+) |

**JSON.parse/stringify Limitations:**

```javascript
const original = {
  // ✅ Works fine
  string: 'hello',
  number: 42,
  boolean: true,
  null: null,
  array: [1, 2, 3],
  nested: { a: 1, b: 2 },

  // ❌ Lost or converted
  date: new Date(),           // → "2024-01-15T..." (string)
  undefined: undefined,       // → property is removed
  regex: /pattern/gi,         // → {}
  map: new Map([['a', 1]]),   // → {}
  set: new Set([1, 2, 3]),    // → {}
  infinity: Infinity,         // → null
  nan: NaN,                   // → null
  bigint: 123n,               // → Error!
  symbol: Symbol('test'),     // → property is removed
  function: () => {},         // → property is removed
};

const copied = JSON.parse(JSON.stringify(original));

console.log(copied.date instanceof Date);  // false (it's a string)
console.log('undefined' in copied);        // false (removed)
console.log(copied.regex);                 // {}
console.log(copied.map);                   // {}
```

**structuredClone Capabilities:**

```javascript
const original = {
  // ✅ All of these work
  string: 'hello',
  number: 42,
  boolean: true,
  null: null,
  undefined: undefined,       // ✅ Preserved!
  array: [1, 2, 3],
  nested: { a: 1, b: 2 },
  date: new Date(),           // ✅ Real Date object
  regex: /pattern/gi,         // ✅ Real RegExp
  map: new Map([['a', 1]]),   // ✅ Real Map
  set: new Set([1, 2, 3]),    // ✅ Real Set
  arrayBuffer: new ArrayBuffer(8),
  typedArray: new Uint8Array([1, 2, 3]),
  blob: new Blob(['hello']),
  error: new Error('test'),   // ✅ Error objects

  // ❌ These still fail
  // function: () => {},      // DataCloneError
  // symbol: Symbol('test'),  // DataCloneError
  // dom: document.body,      // DataCloneError
};

const copied = structuredClone(original);

console.log(copied.date instanceof Date);   // true ✅
console.log(copied.undefined);              // undefined ✅
console.log(copied.map instanceof Map);     // true ✅
console.log(copied.map.get('a'));           // 1 ✅
```

**Circular Reference Handling:**

```javascript
// JSON.parse/stringify fails with circular refs
const circular = { name: 'circular' };
circular.self = circular;

// ❌ Error: Converting circular structure to JSON
JSON.parse(JSON.stringify(circular));

// ✅ structuredClone handles it
const cloned = structuredClone(circular);
console.log(cloned.self === cloned); // true - circular ref preserved
```

**Performance Comparison:**

```javascript
// For simple objects, JSON is surprisingly competitive
// For complex objects (Maps, Sets, Dates), structuredClone wins

const simpleObject = { a: 1, b: 2, c: { d: 3, e: 4 } };
const complexObject = {
  date: new Date(),
  map: new Map([['a', 1], ['b', 2]]),
  set: new Set([1, 2, 3]),
  nested: { deep: { deeper: { value: 42 } } },
};

// Benchmark (approximate)
// Simple object:
// - JSON: ~0.05ms per 1000 operations
// - structuredClone: ~0.03ms per 1000 operations

// Complex object:
// - JSON: N/A (doesn't work correctly)
// - structuredClone: ~0.08ms per 1000 operations
```

**React State Cloning Patterns:**

```typescript
// When you need a true deep copy for state

// Pattern 1: Form state snapshot for reset
function useFormWithReset<T extends object>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const initialRef = useRef<T>();

  // Store deep clone of initial values
  useEffect(() => {
    initialRef.current = structuredClone(initialValues);
  }, []); // Only on mount

  const reset = useCallback(() => {
    if (initialRef.current) {
      setValues(structuredClone(initialRef.current));
    }
  }, []);

  return { values, setValues, reset };
}

// Pattern 2: Undo/Redo history
function useUndoRedo<T extends object>(initial: T) {
  const [history, setHistory] = useState<T[]>([structuredClone(initial)]);
  const [index, setIndex] = useState(0);

  const current = history[index];

  const update = useCallback((newState: T) => {
    const cloned = structuredClone(newState);
    setHistory(prev => [...prev.slice(0, index + 1), cloned]);
    setIndex(i => i + 1);
  }, [index]);

  const undo = useCallback(() => {
    setIndex(i => Math.max(0, i - 1));
  }, []);

  const redo = useCallback(() => {
    setIndex(i => Math.min(history.length - 1, i + 1));
  }, [history.length]);

  return { current, update, undo, redo, canUndo: index > 0, canRedo: index < history.length - 1 };
}

// Pattern 3: Isolated component state
function IsolatedEditor({ initialData }: { initialData: EditorState }) {
  // Each instance gets its own deep copy
  const [state, setState] = useState(() => structuredClone(initialData));

  // Mutations to state won't affect other instances or original
  return <Editor state={state} onChange={setState} />;
}
```

**Transfer vs Clone:**

```javascript
// structuredClone can also transfer ownership (move, not copy)
// Useful for large ArrayBuffers

const buffer = new ArrayBuffer(1024 * 1024); // 1MB

// Clone (copy data)
const clonedBuffer = structuredClone(buffer);
console.log(buffer.byteLength);       // 1048576 (original intact)
console.log(clonedBuffer.byteLength); // 1048576 (copy)

// Transfer (move data - original becomes unusable)
const transferred = structuredClone(buffer, { transfer: [buffer] });
console.log(buffer.byteLength);       // 0 (detached!)
console.log(transferred.byteLength);  // 1048576

// Useful for Web Workers
worker.postMessage({ data: largeBuffer }, [largeBuffer]); // Transfer, not copy
```

**Polyfill for Older Browsers:**

```typescript
// If you need to support older browsers
function deepClone<T>(obj: T): T {
  // Try structuredClone first
  if (typeof structuredClone === 'function') {
    try {
      return structuredClone(obj);
    } catch {
      // Fall through to JSON method
    }
  }

  // Fallback to JSON (with limitations)
  return JSON.parse(JSON.stringify(obj));
}

// Or use a library like lodash
import { cloneDeep } from 'lodash';
const cloned = cloneDeep(complexObject);
```

**When to Use Each:**

| Scenario | Recommendation |
|----------|----------------|
| Simple objects (no special types) | Either works, JSON is more compatible |
| Objects with Dates, Maps, Sets | structuredClone |
| Circular references | structuredClone |
| Serialization for storage/network | JSON (that's what it's for) |
| React state cloning | structuredClone |
| Supporting very old browsers | JSON or lodash.cloneDeep |
| Transferring to Web Workers | structuredClone with transfer |

**Senior insight:** Default to structuredClone for deep cloning in modern apps—it handles more types correctly and is often faster. Use JSON.parse/stringify only when you need JSON serialization (localStorage, API payloads) or must support very old browsers. For React state, prefer shallow updates with spread operator when possible; reserve deep cloning for complex cases like undo/redo or form snapshots. Remember: neither method clones functions or DOM nodes—if you need those, you're probably doing something wrong architecturally.