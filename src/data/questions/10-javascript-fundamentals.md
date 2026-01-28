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
