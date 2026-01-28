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

### Q: Compare Zustand, Jotai, and Valtio - when should you use each?

**Answer:**

These three lightweight state management libraries from the same creator (Daishi Kato) take fundamentally different approaches to state management:

| Feature | Zustand | Jotai | Valtio |
|---------|---------|-------|--------|
| Mental Model | Flux-like store | Atomic (like Recoil) | Proxy-based (like MobX) |
| Bundle Size | ~1.1kb | ~2.4kb | ~3.3kb |
| State Shape | Single store object | Individual atoms | Proxy objects |
| Updates | Immutable | Immutable | Mutable (auto-tracked) |
| Learning Curve | Low | Medium | Low |
| DevTools | Redux DevTools | Custom | Proxy DevTools |
| React Dependency | Optional | Required | Optional |

**Zustand - Store-based (Most Popular):**
```tsx
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  fetchBears: () => Promise<void>;
}

const useBearStore = create<BearStore>()(
  devtools(
    persist(
      (set, get) => ({
        bears: 0,
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
        fetchBears: async () => {
          const response = await fetch('/api/bears');
          const bears = await response.json();
          set({ bears: bears.count });
        },
      }),
      { name: 'bear-storage' }
    )
  )
);

// Usage - components only re-render when selected state changes
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} bears around here</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>Add bear</button>;
}

// Access outside React
const bears = useBearStore.getState().bears;
useBearStore.setState({ bears: 10 });
```

**Jotai - Atomic State:**
```tsx
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithStorage, atomWithQuery } from 'jotai/utils';

// Primitive atoms
const countAtom = atom(0);
const nameAtom = atom('');

// Derived atoms (computed values)
const doubleCountAtom = atom((get) => get(countAtom) * 2);

// Writable derived atoms
const countWithMinAtom = atom(
  (get) => get(countAtom),
  (get, set, newValue: number) => {
    set(countAtom, Math.max(0, newValue));
  }
);

// Async atoms
const userAtom = atom(async (get) => {
  const id = get(userIdAtom);
  const response = await fetch(`/api/users/${id}`);
  return response.json();
});

// Persistent atom
const themeAtom = atomWithStorage('theme', 'dark');

// Usage
function Counter() {
  const [count, setCount] = useAtom(countAtom);
  const doubleCount = useAtomValue(doubleCountAtom);

  return (
    <div>
      <p>Count: {count} (Double: {doubleCount})</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

// Fine-grained updates - only reads
function Display() {
  const count = useAtomValue(countAtom);
  return <span>{count}</span>;
}

// Only writes - never re-renders from count changes
function IncrementButton() {
  const setCount = useSetAtom(countAtom);
  return <button onClick={() => setCount(c => c + 1)}>+</button>;
}
```

**Valtio - Proxy-based (Most Intuitive):**
```tsx
import { proxy, useSnapshot, subscribe, ref } from 'valtio';
import { derive } from 'valtio/utils';

// Create proxy state - looks like regular object
const state = proxy({
  count: 0,
  users: [] as User[],
  // Use ref() to opt-out of proxy (for non-serializable values)
  websocket: ref(new WebSocket('...')),
});

// Mutations look normal (no immer needed)
function increment() {
  state.count++; // Direct mutation - Valtio tracks it
}

async function fetchUsers() {
  state.users = await fetch('/api/users').then(r => r.json());
}

// Derived state
const derived = derive({
  doubled: (get) => get(state).count * 2,
});

// Usage in components
function Counter() {
  // useSnapshot creates a reactive read-only view
  const snap = useSnapshot(state);

  return (
    <div>
      <p>Count: {snap.count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Subscribe outside React
const unsubscribe = subscribe(state, () => {
  console.log('State changed:', state.count);
});

// Access/mutate anywhere
console.log(state.count); // Direct access
state.count = 10; // Direct mutation
```

**Decision Matrix:**

| Scenario | Best Choice | Reason |
|----------|-------------|--------|
| Simple global state | Zustand | Minimal API, tiny bundle |
| Complex derived state | Jotai | Atoms compose naturally |
| Forms with many fields | Valtio | Direct mutations are intuitive |
| Team from Redux | Zustand | Similar mental model |
| Team from MobX | Valtio | Same proxy concept |
| Team from Recoil | Jotai | Atomic model, easier API |
| Need outside React | Zustand/Valtio | Both work outside components |
| Maximum re-render control | Jotai | Atom-level subscriptions |
| Rapid prototyping | Valtio | Most intuitive API |

**Performance Characteristics:**

```tsx
// Zustand - explicit selectors for optimization
const bears = useBearStore((state) => state.bears); // ✅ Only re-renders on bears change
const state = useBearStore(); // ❌ Re-renders on any change

// Jotai - naturally granular
const count = useAtomValue(countAtom); // ✅ Only this atom
const name = useAtomValue(nameAtom);   // ✅ Independent subscription

// Valtio - automatic tracking
const snap = useSnapshot(state);
return <div>{snap.count}</div>; // ✅ Only re-renders if count accessed
```

**Senior insight:** All three libraries solve the "prop drilling" problem with ~1-3kb. Choose based on your team's mental model: Zustand for Redux folks (store + actions), Jotai for React Query/Recoil mindset (atoms compose like hooks), Valtio for anyone who wants to just mutate objects. For most apps, any of these is simpler than Redux.

---

### Q: Explain TanStack Query (React Query) patterns for server state management

**Answer:**

TanStack Query is a powerful server state management library that handles caching, synchronization, and background updates. It's become the de facto standard for data fetching in React applications.

**Core Concepts:**

```tsx
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create client with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30,   // 30 minutes (formerly cacheTime)
      retry: 3,
      refetchOnWindowFocus: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

**Query Keys - The Foundation:**

```tsx
// Query keys uniquely identify cached data
// They should be serializable and hierarchical

// Simple key
useQuery({ queryKey: ['todos'], queryFn: fetchTodos });

// With parameters
useQuery({
  queryKey: ['todos', { status: 'done' }],
  queryFn: () => fetchTodos({ status: 'done' })
});

// Nested/hierarchical (enables partial invalidation)
useQuery({
  queryKey: ['users', userId, 'posts', postId],
  queryFn: () => fetchPost(userId, postId)
});

// Query key factory pattern (recommended)
const todoKeys = {
  all: ['todos'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  list: (filters: Filters) => [...todoKeys.lists(), filters] as const,
  details: () => [...todoKeys.all, 'detail'] as const,
  detail: (id: number) => [...todoKeys.details(), id] as const,
};

// Usage
useQuery({ queryKey: todoKeys.detail(5), queryFn: () => fetchTodo(5) });
queryClient.invalidateQueries({ queryKey: todoKeys.lists() }); // Invalidates all lists
```

**Dependent Queries:**

```tsx
function UserPosts({ userId }: { userId: string }) {
  // First query
  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  // Dependent query - only runs when user exists
  const { data: posts } = useQuery({
    queryKey: ['posts', user?.id],
    queryFn: () => fetchPostsByUser(user!.id),
    enabled: !!user?.id, // Query won't execute until user is available
  });

  return <PostList posts={posts} />;
}
```

**Optimistic Updates:**

```tsx
function TodoList() {
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation({
    mutationFn: (newTodo: Todo) => axios.post('/todos', newTodo),

    // Optimistically update cache before server responds
    onMutate: async (newTodo) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      // Snapshot previous value
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      // Optimistically add new todo
      queryClient.setQueryData<Todo[]>(['todos'], (old) => [
        ...(old || []),
        { ...newTodo, id: Date.now() }, // Temporary ID
      ]);

      // Return context with snapshot
      return { previousTodos };
    },

    // On error, rollback to snapshot
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context?.previousTodos);
      toast.error('Failed to add todo');
    },

    // Always refetch after success or error
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <button onClick={() => addTodoMutation.mutate({ title: 'New Todo' })}>
      {addTodoMutation.isPending ? 'Adding...' : 'Add Todo'}
    </button>
  );
}
```

**Parallel and Sequential Queries:**

```tsx
// Parallel queries - run simultaneously
function Dashboard() {
  const usersQuery = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
  const projectsQuery = useQuery({ queryKey: ['projects'], queryFn: fetchProjects });
  const statsQuery = useQuery({ queryKey: ['stats'], queryFn: fetchStats });

  // Or use useQueries for dynamic parallel queries
  const queries = useQueries({
    queries: userIds.map((id) => ({
      queryKey: ['user', id],
      queryFn: () => fetchUser(id),
    })),
  });
}

// Sequential with proper typing
function UserProfile({ userId }: { userId: string }) {
  const userQuery = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  const postsQuery = useQuery({
    queryKey: ['user', userId, 'posts'],
    queryFn: () => fetchUserPosts(userId),
    enabled: userQuery.isSuccess,
  });
}
```

**Infinite Queries (Pagination):**

```tsx
function InfinitePostList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam }) => fetchPosts({ cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  });

  return (
    <div>
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </React.Fragment>
      ))}

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading...'
          : hasNextPage
          ? 'Load More'
          : 'No more posts'}
      </button>
    </div>
  );
}
```

**Prefetching Strategies:**

```tsx
// Prefetch on hover
function TodoItem({ todo }: { todo: Todo }) {
  const queryClient = useQueryClient();

  const prefetchTodo = () => {
    queryClient.prefetchQuery({
      queryKey: ['todo', todo.id],
      queryFn: () => fetchTodo(todo.id),
      staleTime: 60000, // Don't refetch if less than 1 minute old
    });
  };

  return (
    <Link
      to={`/todo/${todo.id}`}
      onMouseEnter={prefetchTodo}
      onFocus={prefetchTodo}
    >
      {todo.title}
    </Link>
  );
}

// Prefetch in route loader (React Router)
const todoRoute = {
  path: '/todo/:id',
  loader: async ({ params }) => {
    await queryClient.ensureQueryData({
      queryKey: ['todo', params.id],
      queryFn: () => fetchTodo(params.id!),
    });
    return null;
  },
  element: <TodoDetail />,
};
```

**Replacing Redux for Server State:**

| Redux Pattern | TanStack Query Equivalent |
|---------------|---------------------------|
| Store slice for API data | useQuery with queryKey |
| createAsyncThunk | useMutation |
| selectors | useQuery data + useMemo |
| Loading/error state | Built-in status flags |
| Caching | Automatic with gcTime |
| Normalization | Usually unnecessary |

**Senior insight:** TanStack Query eliminates ~80% of what teams typically put in Redux. Keep Redux/Zustand for true client state (UI preferences, wizard steps, shopping cart) and use TanStack Query for everything that comes from a server. The staleTime and gcTime configuration is critical—understand the difference: staleTime controls when data is considered fresh (no refetch), while gcTime controls how long inactive data stays in memory.

---

### Q: What framework should you use to decide on a state management solution?

**Answer:**

State management decisions should be driven by the nature of your state, team experience, and scale of the application. Here's a decision framework:

**Step 1: Classify Your State**

```
┌─────────────────────────────────────────────────────────────┐
│                    What kind of state?                       │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┴─────────────────────┐
        ▼                                           ▼
   Server State                               Client State
   (from API/DB)                              (UI/local)
        │                                           │
        ▼                                           │
   TanStack Query                                   │
   SWR, RTK Query                     ┌────────────┴────────────┐
                                      ▼                         ▼
                                 Local Only              Shared/Global
                                      │                         │
                                      ▼                         ▼
                                 useState              State Library
                                 useReducer            (see decision tree)
```

**Step 2: Client State Decision Tree**

```
Is the state shared across multiple components?
│
├─ No → useState / useReducer
│
└─ Yes → How many components share it?
         │
         ├─ 2-3 nearby → Lift state up + props
         │
         └─ Many / far apart → Need global state
                               │
                               How complex is the state?
                               │
                               ├─ Simple (few values)
                               │  └─ Context API or Zustand
                               │
                               └─ Complex (many updates, derived state)
                                  │
                                  Team background?
                                  │
                                  ├─ Redux experience → Redux Toolkit
                                  ├─ MobX experience → Valtio
                                  ├─ Prefer atoms → Jotai
                                  └─ Want simplest → Zustand
```

**When Redux Is Overkill:**

```tsx
// ❌ Overkill - just use Context or Zustand
const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'dark' },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
  },
});

// ✅ Simpler with Zustand
const useThemeStore = create((set) => ({
  mode: 'dark',
  toggle: () => set((s) => ({ mode: s.mode === 'dark' ? 'light' : 'dark' })),
}));

// ✅ Or even just Context
const ThemeContext = createContext({ mode: 'dark', toggle: () => {} });
```

**When Redux Makes Sense:**

```tsx
// ✅ Good Redux use case - complex domain logic
// - Multiple slices that interact
// - Complex async flows (sagas)
// - Need time-travel debugging
// - Large team needing strict patterns
// - Offline-first with persistence

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    checkout: checkoutSlice.reducer,
    orders: ordersSlice.reducer,
    // These slices interact with each other
  },
  middleware: (getDefault) =>
    getDefault().concat(
      cartPersistMiddleware,
      analyticsMiddleware,
      // Complex middleware chain
    ),
});
```

**Recommended Stack by App Size:**

| App Size | Server State | Client State |
|----------|--------------|--------------|
| Small (< 10 pages) | TanStack Query | useState + Context |
| Medium (10-50 pages) | TanStack Query | Zustand |
| Large (50+ pages) | TanStack Query | Zustand or Redux Toolkit |
| Enterprise | TanStack Query + cache normalization | Redux Toolkit |

**The Modern Minimal Stack:**

```tsx
// For 90% of React apps, this is enough:

// 1. Server state - TanStack Query
const { data: user } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
});

// 2. Global client state - Zustand
const useStore = create((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}));

// 3. Local state - useState
const [inputValue, setInputValue] = useState('');

// 4. Complex local state - useReducer
const [formState, dispatch] = useReducer(formReducer, initialFormState);

// 5. URL state - React Router
const [searchParams, setSearchParams] = useSearchParams();
```

**Future Considerations - Signals:**

```tsx
// Signals are coming to the React ecosystem
// Angular, Solid, Preact, Vue already have them

// The Promise: Fine-grained reactivity without re-renders
import { signal, computed } from '@preact/signals-react';

const count = signal(0);
const doubled = computed(() => count.value * 2);

function Counter() {
  // No useState, no re-render of entire component
  return <div>Count: {count}</div>;
}

// Click handler
<button onClick={() => count.value++}>Increment</button>

// React 19's compiler may provide similar optimization
// Watch: https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024
```

**State Location Cheat Sheet:**

| State Type | Location | Example |
|------------|----------|---------|
| Form input (before submit) | useState | Text in input field |
| UI toggles (local) | useState | Accordion open/closed |
| Multi-step form | useReducer | Wizard state machine |
| Theme/locale | Context or Zustand | App-wide preferences |
| Auth state | Context + secure storage | User session |
| Server data | TanStack Query | API responses |
| URL state | Router | Filters, pagination |
| Ephemeral UI | useState | Hover state, animations |

**Decision Questions to Ask:**

1. **Where does this state come from?** (Server → Query, Client → local or global)
2. **How many components need it?** (1 → local, many → lift or global)
3. **How often does it change?** (Frequently → consider performance)
4. **Does it need to survive refresh?** (Yes → persistence layer)
5. **Does it affect the URL?** (Yes → URL state)
6. **Is it sensitive?** (Yes → don't persist in localStorage)

**Senior insight:** The biggest mistake is reaching for Redux by default. Start with the simplest solution (useState), add complexity only when needed. For most modern apps: TanStack Query for server state, Zustand for shared client state, and that's it. The "best" state management is the one that matches your team's mental model and your app's actual complexity—not theoretical future complexity.

---
