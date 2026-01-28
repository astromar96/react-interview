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

### Q: How do you use state machines with XState in React?

**Answer:**

State machines provide explicit, predictable state management by defining all possible states and transitions upfront. XState is the most popular library for this pattern in React.

**Why State Machines?**

```jsx
// ❌ Traditional approach - implicit states, scattered logic
function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [canRetry, setCanRetry] = useState(false);

  // Bug: Can be loading AND error at the same time!
  // Bug: Easy to forget resetting states

  async function handleSubmit() {
    setIsLoading(true);
    setIsError(false); // Don't forget this!
    setIsSuccess(false); // Or this!
    try {
      await submit();
      setIsSuccess(true);
      setIsLoading(false); // Multiple setState calls
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
      setErrorMessage(e.message);
      setCanRetry(true);
    }
  }
}

// ✅ State machine - explicit states, impossible invalid combinations
const formMachine = createMachine({
  initial: 'idle',
  states: {
    idle: { on: { SUBMIT: 'submitting' } },
    submitting: {
      on: {
        SUCCESS: 'success',
        ERROR: 'error'
      }
    },
    success: { type: 'final' },
    error: { on: { RETRY: 'submitting', RESET: 'idle' } }
  }
});
// Only ONE state at a time - no invalid combinations possible
```

**Basic XState Setup:**

```tsx
import { createMachine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

// Define the machine
const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});

// Use in component
function Toggle() {
  const [state, send] = useMachine(toggleMachine);

  return (
    <button onClick={() => send({ type: 'TOGGLE' })}>
      {state.matches('active') ? 'ON' : 'OFF'}
    </button>
  );
}
```

**Multi-Step Form with Context:**

```tsx
import { createMachine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

interface FormContext {
  personalInfo: { name: string; email: string } | null;
  address: { street: string; city: string } | null;
  payment: { cardNumber: string } | null;
  error: string | null;
}

type FormEvent =
  | { type: 'NEXT'; data: Record<string, string> }
  | { type: 'BACK' }
  | { type: 'SUBMIT' }
  | { type: 'RETRY' };

const checkoutMachine = createMachine({
  id: 'checkout',
  initial: 'personalInfo',
  context: {
    personalInfo: null,
    address: null,
    payment: null,
    error: null,
  } as FormContext,

  states: {
    personalInfo: {
      on: {
        NEXT: {
          target: 'address',
          actions: assign({
            personalInfo: (_, event) => event.data as FormContext['personalInfo']
          })
        }
      }
    },

    address: {
      on: {
        NEXT: {
          target: 'payment',
          actions: assign({
            address: (_, event) => event.data as FormContext['address']
          })
        },
        BACK: 'personalInfo'
      }
    },

    payment: {
      on: {
        NEXT: {
          target: 'submitting',
          actions: assign({
            payment: (_, event) => event.data as FormContext['payment']
          })
        },
        BACK: 'address'
      }
    },

    submitting: {
      invoke: {
        src: 'submitOrder',
        onDone: 'success',
        onError: {
          target: 'error',
          actions: assign({
            error: (_, event) => event.data.message
          })
        }
      }
    },

    success: {
      type: 'final'
    },

    error: {
      on: {
        RETRY: 'submitting',
        BACK: 'payment'
      }
    }
  }
}, {
  services: {
    submitOrder: (context) => submitToAPI(context)
  }
});

// Usage
function CheckoutWizard() {
  const [state, send] = useMachine(checkoutMachine);

  return (
    <div className="checkout">
      {/* Progress indicator */}
      <ProgressBar
        steps={['Personal', 'Address', 'Payment', 'Confirm']}
        current={
          state.matches('personalInfo') ? 0 :
          state.matches('address') ? 1 :
          state.matches('payment') ? 2 : 3
        }
      />

      {/* Step content */}
      {state.matches('personalInfo') && (
        <PersonalInfoForm
          onSubmit={(data) => send({ type: 'NEXT', data })}
        />
      )}

      {state.matches('address') && (
        <AddressForm
          onSubmit={(data) => send({ type: 'NEXT', data })}
          onBack={() => send({ type: 'BACK' })}
        />
      )}

      {state.matches('payment') && (
        <PaymentForm
          onSubmit={(data) => send({ type: 'NEXT', data })}
          onBack={() => send({ type: 'BACK' })}
        />
      )}

      {state.matches('submitting') && <LoadingSpinner />}

      {state.matches('error') && (
        <ErrorMessage
          message={state.context.error}
          onRetry={() => send({ type: 'RETRY' })}
          onBack={() => send({ type: 'BACK' })}
        />
      )}

      {state.matches('success') && (
        <SuccessMessage orderId={state.context.orderId} />
      )}
    </div>
  );
}
```

**Async Data Fetching Machine:**

```tsx
const fetchMachine = createMachine({
  id: 'fetch',
  initial: 'idle',
  context: {
    data: null,
    error: null,
  },

  states: {
    idle: {
      on: { FETCH: 'loading' }
    },

    loading: {
      invoke: {
        src: 'fetchData',
        onDone: {
          target: 'success',
          actions: assign({ data: (_, event) => event.data })
        },
        onError: {
          target: 'failure',
          actions: assign({ error: (_, event) => event.data })
        }
      }
    },

    success: {
      on: {
        REFRESH: 'loading',
        RESET: 'idle'
      }
    },

    failure: {
      on: {
        RETRY: 'loading',
        RESET: 'idle'
      }
    }
  }
});

// With useSelector for optimized renders
function UserProfile({ userId }) {
  const [state, send] = useMachine(fetchMachine, {
    services: {
      fetchData: () => fetch(`/api/users/${userId}`).then(r => r.json())
    }
  });

  // Only re-renders when these specific values change
  const user = useSelector(state, state => state.context.data);
  const isLoading = useSelector(state, state => state.matches('loading'));

  useEffect(() => {
    send({ type: 'FETCH' });
  }, [userId, send]);

  if (isLoading) return <Skeleton />;

  return <Profile user={user} />;
}
```

**When to Use State Machines:**

| Scenario | Use State Machine? | Why |
|----------|-------------------|-----|
| Toggle button | ❌ Overkill | useState is simpler |
| Form with validation | ⚠️ Maybe | Depends on complexity |
| Multi-step wizard | ✅ Yes | Clear step transitions |
| Authentication flow | ✅ Yes | Multiple states, async |
| Media player | ✅ Yes | Play/pause/stop/loading |
| File upload | ✅ Yes | Selecting/uploading/success/error |
| Game logic | ✅ Definitely | Complex state transitions |

**Visualizing Machines:**

```tsx
// XState provides visualization tools
// 1. Stately.ai visualizer (online)
// 2. @xstate/inspect for dev tools

import { inspect } from '@xstate/inspect';

// In development only
if (process.env.NODE_ENV === 'development') {
  inspect({
    iframe: false // Opens in new window
  });
}

// Then use devTools option
const [state, send] = useMachine(machine, {
  devTools: true
});
```

**XState v5 Patterns:**

```tsx
// XState v5 uses setup() and simpler syntax
import { setup, assign } from 'xstate';

const machine = setup({
  types: {
    context: {} as { count: number },
    events: {} as { type: 'INCREMENT' } | { type: 'DECREMENT' }
  },
  actions: {
    increment: assign({ count: ({ context }) => context.count + 1 }),
    decrement: assign({ count: ({ context }) => context.count - 1 })
  }
}).createMachine({
  context: { count: 0 },
  initial: 'active',
  states: {
    active: {
      on: {
        INCREMENT: { actions: 'increment' },
        DECREMENT: { actions: 'decrement' }
      }
    }
  }
});
```

**Senior insight:** State machines excel when you can draw a state diagram on a whiteboard. If your component has boolean flags like `isLoading && !isError && isSubmitted`, you likely have an implicit state machine that would benefit from being explicit. The initial setup is more work, but machines are self-documenting, make impossible states impossible, and can be visualized/tested in isolation.

---

### Q: What is the Headless UI pattern and when should you use it?

**Answer:**

Headless UI is a pattern where components provide behavior, state management, and accessibility without any styling or markup. The consumer provides all the visual elements.

**The Problem Headless UI Solves:**

```jsx
// ❌ Traditional component library
// - Opinionated styling that fights your design system
// - Hard to customize beyond provided props
// - Bloated bundle with unused styles

<DatePicker
  theme="light"
  primaryColor="#007bff"
  borderRadius={8}
  // Still can't get it to match your design exactly
/>

// ✅ Headless component
// - Zero styling decisions
// - Full control over markup
// - Accessibility built-in
// - Works with any styling solution

const { selectedDate, openCalendar, calendarProps } = useDatePicker();
// You render however you want
```

**Building a Headless Component:**

```tsx
import { useState, useCallback, useId } from 'react';

interface UseToggleReturn {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
  buttonProps: {
    'aria-expanded': boolean;
    'aria-controls': string;
    onClick: () => void;
  };
  panelProps: {
    id: string;
    hidden: boolean;
  };
}

function useToggle(defaultOpen = false): UseToggleReturn {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    toggle,
    open,
    close,
    buttonProps: {
      'aria-expanded': isOpen,
      'aria-controls': panelId,
      onClick: toggle,
    },
    panelProps: {
      id: panelId,
      hidden: !isOpen,
    },
  };
}

// Usage - consumer controls ALL markup and styling
function FAQ({ question, answer }) {
  const { isOpen, buttonProps, panelProps } = useToggle();

  return (
    <div className="faq-item">
      <button
        {...buttonProps}
        className={`faq-question ${isOpen ? 'expanded' : ''}`}
      >
        <span>{question}</span>
        <ChevronIcon direction={isOpen ? 'up' : 'down'} />
      </button>
      <div {...panelProps} className="faq-answer">
        {answer}
      </div>
    </div>
  );
}
```

**Headless Dropdown (More Complex):**

```tsx
import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useId,
  KeyboardEvent
} from 'react';

interface UseDropdownOptions<T> {
  items: T[];
  onSelect: (item: T) => void;
  getItemId?: (item: T) => string;
}

function useDropdown<T>({ items, onSelect, getItemId }: UseDropdownOptions<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const menuId = useId();
  const triggerId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const open = useCallback(() => {
    setIsOpen(true);
    setHighlightedIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  const selectItem = useCallback((item: T) => {
    onSelect(item);
    close();
  }, [onSelect, close]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          open();
        } else {
          setHighlightedIndex(i => (i + 1) % items.length);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(i => (i - 1 + items.length) % items.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen) {
          selectItem(items[highlightedIndex]);
        } else {
          open();
        }
        break;
      case 'Escape':
        close();
        break;
      case 'Home':
        e.preventDefault();
        setHighlightedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setHighlightedIndex(items.length - 1);
        break;
    }
  }, [isOpen, items, highlightedIndex, open, close, selectItem]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    function handleClick(e: MouseEvent) {
      if (!triggerRef.current?.contains(e.target as Node)) {
        close();
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen, close]);

  return {
    isOpen,
    highlightedIndex,
    open,
    close,

    triggerProps: {
      ref: triggerRef,
      id: triggerId,
      'aria-haspopup': 'listbox' as const,
      'aria-expanded': isOpen,
      'aria-controls': menuId,
      onClick: () => (isOpen ? close() : open()),
      onKeyDown: handleKeyDown,
    },

    menuProps: {
      id: menuId,
      role: 'listbox' as const,
      'aria-labelledby': triggerId,
      tabIndex: -1,
      onKeyDown: handleKeyDown,
    },

    getItemProps: (item: T, index: number) => ({
      role: 'option' as const,
      id: getItemId?.(item) || `${menuId}-option-${index}`,
      'aria-selected': index === highlightedIndex,
      onClick: () => selectItem(item),
      onMouseEnter: () => setHighlightedIndex(index),
    }),
  };
}

// Usage with Tailwind
function CountryPicker({ countries, onSelect }) {
  const {
    isOpen,
    highlightedIndex,
    triggerProps,
    menuProps,
    getItemProps
  } = useDropdown({
    items: countries,
    onSelect,
    getItemId: (c) => c.code,
  });

  const [selected, setSelected] = useState(null);

  return (
    <div className="relative">
      <button
        {...triggerProps}
        className="px-4 py-2 border rounded-lg flex items-center gap-2"
      >
        {selected?.flag} {selected?.name || 'Select country'}
        <ChevronDown className={isOpen ? 'rotate-180' : ''} />
      </button>

      {isOpen && (
        <ul
          {...menuProps}
          className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto"
        >
          {countries.map((country, index) => (
            <li
              key={country.code}
              {...getItemProps(country, index)}
              className={`
                px-4 py-2 cursor-pointer flex items-center gap-2
                ${index === highlightedIndex ? 'bg-blue-100' : 'hover:bg-gray-50'}
              `}
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

**Popular Headless UI Libraries:**

| Library | Focus | Style |
|---------|-------|-------|
| Headless UI | Tailwind integration | Component-based |
| Radix UI | Primitives | Component-based |
| React Aria | Comprehensive a11y | Hook-based |
| Downshift | Autocomplete/select | Hook-based |
| TanStack Table | Data tables | Hook-based |
| Ariakit | General purpose | Both styles |

**React Aria Example:**

```tsx
import { useButton, useDialog, useModal, useOverlay } from 'react-aria';

function Modal({ isOpen, onClose, children, title }) {
  const ref = useRef(null);

  // Handles focus, scroll lock, aria-hidden on siblings
  const { modalProps } = useModal();

  // Handles overlay click to close
  const { overlayProps } = useOverlay(
    { isOpen, onClose, isDismissable: true },
    ref
  );

  // Handles dialog role and labeling
  const { dialogProps, titleProps } = useDialog({}, ref);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div
        {...overlayProps}
        {...dialogProps}
        {...modalProps}
        ref={ref}
        className="bg-white rounded-lg p-6 max-w-md"
      >
        <h2 {...titleProps} className="text-xl font-bold">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
```

**When to Use Headless UI:**

| Use Case | Headless UI? | Reasoning |
|----------|--------------|-----------|
| Unique design system | ✅ Yes | Full control over styling |
| Complex interactions | ✅ Yes | Built-in accessibility |
| Rapid prototyping | ❌ No | Use styled components like MUI/Chakra |
| Form inputs | ⚠️ Maybe | Native inputs often sufficient |
| Custom select/dropdown | ✅ Yes | Native select is limited |
| Modal/Dialog | ✅ Yes | Complex focus/a11y requirements |

**Senior insight:** Headless UI is the best approach when your design system doesn't fit standard component libraries. The tradeoff is writing more markup, but you get full control and proper accessibility. For production apps, prefer established libraries (Radix, React Aria) over building your own—they've solved edge cases you haven't encountered yet.

---

### Q: Explain the Slots pattern in React

**Answer:**

The Slots pattern allows parent components to accept children that fill specific "slots" in their layout, giving consumers control over what appears where while the parent controls the overall structure.

**The Problem Slots Solve:**

```jsx
// ❌ Props-based approach - limited flexibility
<Card
  title="User Profile"
  subtitle="Account settings"
  icon={<UserIcon />}
  actions={<Button>Edit</Button>}
  footer={<CardFooter />}
/>
// What if I need two icons? Different layout? Custom elements?

// ✅ Slots pattern - maximum flexibility
<Card>
  <Card.Header>
    <Card.Icon><UserIcon /></Card.Icon>
    <Card.Title>User Profile</Card.Title>
  </Card.Header>
  <Card.Body>Content here</Card.Body>
  <Card.Footer>Footer content</Card.Footer>
</Card>
```

**Basic Slots Implementation:**

```tsx
import { Children, ReactNode, isValidElement, createContext, useContext } from 'react';

// Context for slot data
const CardContext = createContext<{ variant?: 'default' | 'compact' }>({});

// Slot components
function CardHeader({ children }: { children: ReactNode }) {
  return <div className="card-header">{children}</div>;
}

function CardBody({ children }: { children: ReactNode }) {
  return <div className="card-body">{children}</div>;
}

function CardFooter({ children }: { children: ReactNode }) {
  const { variant } = useContext(CardContext);
  return (
    <div className={`card-footer ${variant === 'compact' ? 'p-2' : 'p-4'}`}>
      {children}
    </div>
  );
}

// Main component that arranges slots
function Card({ children, variant = 'default' }: {
  children: ReactNode;
  variant?: 'default' | 'compact';
}) {
  const childArray = Children.toArray(children);

  // Find specific slot components
  const header = childArray.find(
    child => isValidElement(child) && child.type === CardHeader
  );
  const body = childArray.find(
    child => isValidElement(child) && child.type === CardBody
  );
  const footer = childArray.find(
    child => isValidElement(child) && child.type === CardFooter
  );

  return (
    <CardContext.Provider value={{ variant }}>
      <div className={`card card-${variant}`}>
        {header}
        {body}
        {footer}
      </div>
    </CardContext.Provider>
  );
}

// Attach slot components
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

// Usage
<Card variant="compact">
  <Card.Header>
    <h2>Settings</h2>
  </Card.Header>
  <Card.Body>
    <p>Configure your preferences</p>
  </Card.Body>
  <Card.Footer>
    <Button>Save</Button>
  </Card.Footer>
</Card>
```

**Named Slots with displayName:**

```tsx
// More robust slot detection using displayName

function createSlot(name: string) {
  const Slot = ({ children }: { children: ReactNode }) => <>{children}</>;
  Slot.displayName = name;
  return Slot;
}

// Create slots
const Header = createSlot('Layout.Header');
const Sidebar = createSlot('Layout.Sidebar');
const Main = createSlot('Layout.Main');
const Footer = createSlot('Layout.Footer');

function Layout({ children }: { children: ReactNode }) {
  const slots = {
    header: null as ReactNode,
    sidebar: null as ReactNode,
    main: null as ReactNode,
    footer: null as ReactNode,
  };

  // Categorize children into slots
  Children.forEach(children, child => {
    if (!isValidElement(child)) return;

    const displayName = (child.type as any).displayName;

    switch (displayName) {
      case 'Layout.Header':
        slots.header = child.props.children;
        break;
      case 'Layout.Sidebar':
        slots.sidebar = child.props.children;
        break;
      case 'Layout.Main':
        slots.main = child.props.children;
        break;
      case 'Layout.Footer':
        slots.footer = child.props.children;
        break;
    }
  });

  return (
    <div className="layout">
      {slots.header && (
        <header className="layout-header">{slots.header}</header>
      )}
      <div className="layout-content">
        {slots.sidebar && (
          <aside className="layout-sidebar">{slots.sidebar}</aside>
        )}
        <main className="layout-main">{slots.main}</main>
      </div>
      {slots.footer && (
        <footer className="layout-footer">{slots.footer}</footer>
      )}
    </div>
  );
}

Layout.Header = Header;
Layout.Sidebar = Sidebar;
Layout.Main = Main;
Layout.Footer = Footer;

// Usage - order doesn't matter, parent controls layout
<Layout>
  <Layout.Footer>© 2024</Layout.Footer>
  <Layout.Main>Page content</Layout.Main>
  <Layout.Header><Nav /></Layout.Header>
  <Layout.Sidebar><Menu /></Layout.Sidebar>
</Layout>
```

**Context-Based Slots (Alternative):**

```tsx
import { createContext, useContext, ReactNode } from 'react';

type SlotRegistry = Map<string, ReactNode>;

const SlotContext = createContext<{
  registerSlot: (name: string, content: ReactNode) => void;
  slots: SlotRegistry;
} | null>(null);

function SlotProvider({ children }: { children: ReactNode }) {
  const [slots, setSlots] = useState<SlotRegistry>(new Map());

  const registerSlot = useCallback((name: string, content: ReactNode) => {
    setSlots(prev => new Map(prev).set(name, content));
  }, []);

  return (
    <SlotContext.Provider value={{ registerSlot, slots }}>
      {children}
    </SlotContext.Provider>
  );
}

function Slot({ name, children }: { name: string; children: ReactNode }) {
  const context = useContext(SlotContext);

  useEffect(() => {
    context?.registerSlot(name, children);
    return () => context?.registerSlot(name, null);
  }, [name, children, context]);

  return null; // Renders nothing - just registers
}

function SlotOutlet({ name, fallback }: { name: string; fallback?: ReactNode }) {
  const context = useContext(SlotContext);
  return <>{context?.slots.get(name) ?? fallback}</>;
}

// Usage
function PageLayout({ children }: { children: ReactNode }) {
  return (
    <SlotProvider>
      {children}
      <div className="page">
        <header><SlotOutlet name="header" /></header>
        <main><SlotOutlet name="content" /></main>
        <footer><SlotOutlet name="footer" fallback="Default footer" /></footer>
      </div>
    </SlotProvider>
  );
}

function MyPage() {
  return (
    <PageLayout>
      <Slot name="header">
        <h1>My Page</h1>
      </Slot>
      <Slot name="content">
        <p>Page content here</p>
      </Slot>
      {/* Footer slot not provided - uses fallback */}
    </PageLayout>
  );
}
```

**Slots with Render Props:**

```tsx
// Slots can pass data back to their content

interface TableSlotProps<T> {
  header: (columns: Column[]) => ReactNode;
  row: (item: T, index: number) => ReactNode;
  empty?: () => ReactNode;
  loading?: () => ReactNode;
}

function Table<T>({
  data,
  columns,
  isLoading,
  slots,
}: {
  data: T[];
  columns: Column[];
  isLoading: boolean;
  slots: TableSlotProps<T>;
}) {
  if (isLoading && slots.loading) {
    return slots.loading();
  }

  if (data.length === 0 && slots.empty) {
    return slots.empty();
  }

  return (
    <table>
      <thead>
        <tr>{slots.header(columns)}</tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>{slots.row(item, index)}</tr>
        ))}
      </tbody>
    </table>
  );
}

// Usage - full control over rendering
<Table
  data={users}
  columns={columns}
  isLoading={isLoading}
  slots={{
    header: (cols) => cols.map(c => <th key={c.key}>{c.label}</th>),
    row: (user, i) => (
      <>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><StatusBadge status={user.status} /></td>
      </>
    ),
    empty: () => <EmptyState message="No users found" />,
    loading: () => <TableSkeleton rows={5} />,
  }}
/>
```

**Slots vs Props vs Children:**

| Pattern | Use When |
|---------|----------|
| Props | Simple, single values |
| children | Single content area |
| Slots | Multiple content areas, order matters |
| Render Props | Content needs data from parent |
| Compound Components | Related components share state |

**Senior insight:** Slots shine in layout components and complex UI primitives. Vue has native slots; React achieves the same through Children manipulation or compound components. The tradeoff is verbosity versus flexibility—props are simpler when you only need 1-2 customization points. Use slots when you have 3+ customizable regions or when the order of declaration shouldn't dictate visual order.

---

### Q: How do you design controlled vs uncontrolled compound components?

**Answer:**

Compound components can be either fully controlled (parent manages state), fully uncontrolled (component manages its own state), or support both modes. The best APIs let consumers choose based on their needs.

**Uncontrolled Compound Component:**

```tsx
// Component manages its own state internally
// Consumer just declares structure

function Accordion({ children, defaultIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultIndex);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ index, title, children }) {
  const { openIndex, setOpenIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div className="accordion-item">
      <button onClick={() => setOpenIndex(isOpen ? -1 : index)}>
        {title}
      </button>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}

// Usage - state managed internally
<Accordion defaultIndex={0}>
  <AccordionItem index={0} title="Section 1">Content 1</AccordionItem>
  <AccordionItem index={1} title="Section 2">Content 2</AccordionItem>
</Accordion>
// Can't programmatically control which item is open
```

**Controlled Compound Component:**

```tsx
// Parent manages all state, passes via props

function Accordion({ children, openIndex, onOpenChange }) {
  return (
    <AccordionContext.Provider value={{ openIndex, onOpenChange }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ index, title, children }) {
  const { openIndex, onOpenChange } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div className="accordion-item">
      <button onClick={() => onOpenChange(isOpen ? -1 : index)}>
        {title}
      </button>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}

// Usage - parent controls state
function App() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <button onClick={() => setOpenIndex(1)}>Open Section 2</button>
      <Accordion openIndex={openIndex} onOpenChange={setOpenIndex}>
        <AccordionItem index={0} title="Section 1">Content 1</AccordionItem>
        <AccordionItem index={1} title="Section 2">Content 2</AccordionItem>
      </Accordion>
    </>
  );
}
```

**Hybrid: Supporting Both Modes:**

```tsx
// Best practice: support both controlled and uncontrolled usage

function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}): [T, (value: T) => void] {
  // Controlled mode: value prop provided
  const isControlled = value !== undefined;

  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] = useState(defaultValue);

  // Use controlled value if provided, otherwise internal
  const resolvedValue = isControlled ? value : internalValue;

  const setValue = useCallback((newValue: T) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  }, [isControlled, onChange]);

  return [resolvedValue, setValue];
}

// Accordion supporting both modes
interface AccordionProps {
  children: ReactNode;
  defaultOpenIndex?: number;  // Uncontrolled default
  openIndex?: number;         // Controlled value
  onOpenChange?: (index: number) => void;
  allowMultiple?: boolean;
}

function Accordion({
  children,
  defaultOpenIndex = -1,
  openIndex,
  onOpenChange,
  allowMultiple = false,
}: AccordionProps) {
  const [currentIndex, setCurrentIndex] = useControllableState({
    value: openIndex,
    defaultValue: defaultOpenIndex,
    onChange: onOpenChange,
  });

  return (
    <AccordionContext.Provider value={{
      openIndex: currentIndex,
      setOpenIndex: setCurrentIndex,
      allowMultiple,
    }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

// Usage - uncontrolled (simple)
<Accordion defaultOpenIndex={0}>
  <AccordionItem index={0} title="FAQ 1">Answer 1</AccordionItem>
  <AccordionItem index={1} title="FAQ 2">Answer 2</AccordionItem>
</Accordion>

// Usage - controlled (when you need external control)
function ControlledExample() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Accordion openIndex={openIndex} onOpenChange={setOpenIndex}>
      <AccordionItem index={0} title="FAQ 1">Answer 1</AccordionItem>
      <AccordionItem index={1} title="FAQ 2">Answer 2</AccordionItem>
    </Accordion>
  );
}
```

**Complete Example: Tabs with Both Modes:**

```tsx
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tab components must be used within Tabs');
  }
  return context;
}

interface TabsProps {
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

function Tabs({ children, defaultValue, value, onValueChange }: TabsProps) {
  const [activeTab, setActiveTab] = useControllableState({
    value,
    defaultValue: defaultValue ?? '',
    onChange: onValueChange,
  });

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: ReactNode }) {
  return (
    <div role="tablist" className="tab-list">
      {children}
    </div>
  );
}

function Tab({ value, children }: { value: string; children: ReactNode }) {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      onClick={() => setActiveTab(value)}
      className={`tab ${isActive ? 'active' : ''}`}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }: { children: ReactNode }) {
  return <div className="tab-panels">{children}</div>;
}

function TabPanel({ value, children }: { value: string; children: ReactNode }) {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <div role="tabpanel" className="tab-panel">
      {children}
    </div>
  );
}

// Attach sub-components
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

// Uncontrolled usage
<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Tab value="account">Account</Tabs.Tab>
    <Tabs.Tab value="security">Security</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel value="account">Account settings</Tabs.Panel>
    <Tabs.Panel value="security">Security settings</Tabs.Panel>
  </Tabs.Panels>
</Tabs>

// Controlled usage
function ControlledTabs() {
  const [tab, setTab] = useState('account');

  // Can programmatically change tab
  const goToSecurity = () => setTab('security');

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <Tabs.List>
        <Tabs.Tab value="account">Account</Tabs.Tab>
        <Tabs.Tab value="security">Security</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel value="account">
          <button onClick={goToSecurity}>Go to Security</button>
        </Tabs.Panel>
        <Tabs.Panel value="security">Security settings</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
}
```

**API Design Guidelines:**

| Prop Pattern | Purpose |
|--------------|---------|
| `value` | Controlled value (from parent) |
| `defaultValue` | Initial value (uncontrolled) |
| `onValueChange` | Callback when value changes |
| `onChange` | Alternative naming convention |

```tsx
// Naming conventions from popular libraries

// Radix UI pattern
<Select value={value} onValueChange={setValue} />
<Select defaultValue="option1" />

// React Hook Form pattern
<Controller
  control={control}
  name="field"
  render={({ field }) => <Input {...field} />}
/>

// MUI pattern
<TextField value={value} onChange={e => setValue(e.target.value)} />
<TextField defaultValue="initial" />
```

**TypeScript Discriminated Union for Props:**

```tsx
// Enforce correct prop combinations with types

type ControlledProps = {
  value: string;
  onValueChange: (value: string) => void;
  defaultValue?: never;
};

type UncontrolledProps = {
  defaultValue?: string;
  value?: never;
  onValueChange?: (value: string) => void;
};

type TabsProps = (ControlledProps | UncontrolledProps) & {
  children: ReactNode;
};

function Tabs(props: TabsProps) {
  // TypeScript ensures correct usage
}

// ✅ Valid
<Tabs value={tab} onValueChange={setTab} />
<Tabs defaultValue="tab1" />

// ❌ Type error
<Tabs value={tab} defaultValue="tab1" />
```

**Senior insight:** The `useControllableState` hook is a powerful pattern used by Radix, Chakra, and other libraries. It lets your component work in both modes without duplicating logic. The key insight is that controlled components should never have internal state for the controlled value—the parent is the single source of truth. For uncontrolled components, the internal state is the source of truth. The hybrid approach elegantly handles both by delegating to the appropriate source based on which props are provided.