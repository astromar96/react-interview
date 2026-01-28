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

### Q: How do you test components that use React Query or SWR?

**Answer:**

Testing data-fetching libraries requires proper provider setup and mocking strategies.

**Setup with React Query:**

```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';

// Create a new QueryClient for each test
function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // Don't retry failed requests in tests
        gcTime: 0,    // Disable garbage collection
      },
    },
  });
}

// Wrapper component
function createWrapper() {
  const queryClient = createTestQueryClient();
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

// Component using React Query
function UserProfile({ userId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>Hello, {data.name}</div>;
}
```

**Testing with MSW (Mock Service Worker):**

```jsx
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/users/:id', (req, res, ctx) => {
    return res(ctx.json({ id: req.params.id, name: 'John Doe' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('displays user data after loading', async () => {
  render(<UserProfile userId="1" />, { wrapper: createWrapper() });

  // Initially shows loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText('Hello, John Doe')).toBeInTheDocument();
  });
});

test('displays error when request fails', async () => {
  // Override handler for this test
  server.use(
    rest.get('/api/users/:id', (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ message: 'Server error' }));
    })
  );

  render(<UserProfile userId="1" />, { wrapper: createWrapper() });

  await waitFor(() => {
    expect(screen.getByText(/Error:/)).toBeInTheDocument();
  });
});
```

**Testing Mutations:**

```jsx
test('submits form and updates cache', async () => {
  const user = userEvent.setup();
  const queryClient = createTestQueryClient();

  // Pre-populate cache
  queryClient.setQueryData(['user', '1'], { id: '1', name: 'John' });

  render(
    <QueryClientProvider client={queryClient}>
      <EditUserForm userId="1" />
    </QueryClientProvider>
  );

  await user.clear(screen.getByLabelText('Name'));
  await user.type(screen.getByLabelText('Name'), 'Jane');
  await user.click(screen.getByRole('button', { name: 'Save' }));

  await waitFor(() => {
    // Verify cache was updated
    expect(queryClient.getQueryData(['user', '1'])).toEqual({
      id: '1',
      name: 'Jane',
    });
  });
});
```

**Senior insight:** MSW is preferred over mocking fetch/axios directly because it intercepts at the network level, making tests more realistic. Always create a fresh QueryClient per test to avoid state leakage. Use `server.use()` to override handlers for specific test scenarios like errors.

---

### Q: How do you write integration tests for React applications?

**Answer:**

Integration tests verify that multiple units work together correctly. They sit between unit tests and E2E tests in the testing pyramid.

**When to Write Integration Tests:**

- Testing user flows across multiple components
- Testing component + API integration
- Testing context/state management integration
- Testing routing behavior

**Integration Test with MSW:**

```jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const server = setupServer(
  rest.get('/api/products', (req, res, ctx) => {
    return res(ctx.json([
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 200 },
    ]));
  }),
  rest.post('/api/cart', (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('user can browse products and add to cart', async () => {
  const user = userEvent.setup();

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Wait for products to load
  await waitFor(() => {
    expect(screen.getByText('Product A')).toBeInTheDocument();
  });

  // Add product to cart
  await user.click(screen.getAllByRole('button', { name: 'Add to Cart' })[0]);

  // Verify cart updated
  await waitFor(() => {
    expect(screen.getByText('Cart (1)')).toBeInTheDocument();
  });

  // Navigate to cart
  await user.click(screen.getByText('Cart (1)'));

  // Verify cart page shows item
  expect(screen.getByText('Product A')).toBeInTheDocument();
  expect(screen.getByText('$100')).toBeInTheDocument();
});
```

**Testing Authentication Flows:**

```jsx
test('protected route redirects to login when not authenticated', async () => {
  render(
    <AuthProvider initialUser={null}>
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    </AuthProvider>
  );

  // Should redirect to login
  await waitFor(() => {
    expect(screen.getByText('Please log in')).toBeInTheDocument();
  });
});

test('user can log in and access protected routes', async () => {
  const user = userEvent.setup();

  server.use(
    rest.post('/api/login', (req, res, ctx) => {
      return res(ctx.json({ user: { id: 1, name: 'John' }, token: 'abc123' }));
    })
  );

  render(
    <AuthProvider>
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    </AuthProvider>
  );

  await user.type(screen.getByLabelText('Email'), 'john@example.com');
  await user.type(screen.getByLabelText('Password'), 'password123');
  await user.click(screen.getByRole('button', { name: 'Log In' }));

  // Should redirect to dashboard
  await waitFor(() => {
    expect(screen.getByText('Welcome, John')).toBeInTheDocument();
  });
});
```

**Integration Test Best Practices:**

| Practice | Reason |
|----------|--------|
| Use MSW over mocking fetch | More realistic, catches integration bugs |
| Test happy path + key error paths | Balance coverage and maintenance |
| Use realistic data | Catches edge cases with real-world data shapes |
| Keep tests independent | Each test should work in isolation |
| Mock time when needed | Use `jest.useFakeTimers()` for debounce/throttle |

**Senior insight:** Integration tests provide the best ROI for most React apps. They catch bugs that unit tests miss (component integration issues) without the flakiness and slowness of E2E tests. Focus on critical user journeys - the paths that, if broken, would significantly impact users.

---

### Q: How do you test components with Redux or Context?

**Answer:**

Testing components connected to state management requires providing the appropriate context/store.

**Testing with Redux:**

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import ShoppingCart from './ShoppingCart';

// Create a custom render function
function renderWithRedux(
  component,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { user: userReducer, cart: cartReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(component, { wrapper: Wrapper, ...renderOptions }) };
}

test('displays cart items from Redux store', () => {
  const preloadedState = {
    cart: {
      items: [
        { id: 1, name: 'Widget', quantity: 2, price: 25 },
        { id: 2, name: 'Gadget', quantity: 1, price: 50 },
      ],
    },
  };

  renderWithRedux(<ShoppingCart />, { preloadedState });

  expect(screen.getByText('Widget')).toBeInTheDocument();
  expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
  expect(screen.getByText('Total: $100')).toBeInTheDocument();
});

test('dispatches removeItem action when delete clicked', async () => {
  const user = userEvent.setup();
  const preloadedState = {
    cart: { items: [{ id: 1, name: 'Widget', quantity: 1, price: 25 }] },
  };

  const { store } = renderWithRedux(<ShoppingCart />, { preloadedState });

  await user.click(screen.getByRole('button', { name: 'Remove' }));

  // Verify store state changed
  expect(store.getState().cart.items).toHaveLength(0);
});
```

**Testing with Context:**

```jsx
import { createContext, useContext, useState } from 'react';

// Theme Context
const ThemeContext = createContext(null);

function ThemeProvider({ children, initialTheme = 'light' }) {
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Component using context
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}

// Tests
function renderWithTheme(component, { initialTheme = 'light' } = {}) {
  return render(
    <ThemeProvider initialTheme={initialTheme}>
      {component}
    </ThemeProvider>
  );
}

test('displays current theme', () => {
  renderWithTheme(<ThemeToggle />, { initialTheme: 'dark' });
  expect(screen.getByText('Current: dark')).toBeInTheDocument();
});

test('toggles theme on click', async () => {
  const user = userEvent.setup();
  renderWithTheme(<ThemeToggle />);

  await user.click(screen.getByRole('button'));

  expect(screen.getByText('Current: dark')).toBeInTheDocument();
});
```

**Testing Multiple Contexts:**

```jsx
function renderWithProviders(component, options = {}) {
  const {
    initialTheme = 'light',
    initialUser = null,
    preloadedState = {},
  } = options;

  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <ThemeProvider initialTheme={initialTheme}>
        <AuthProvider initialUser={initialUser}>
          {component}
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}
```

**Senior insight:** Create reusable render utilities (like `renderWithRedux`) in a test-utils file and export them for all tests. This keeps tests DRY and makes it easy to add/modify providers. When testing Redux, prefer testing the integrated behavior (dispatch → state change → UI update) over testing reducers in isolation.

---

### Q: What is your approach to testing asynchronous code in React?

**Answer:**

Async testing in React requires understanding timing, cleanup, and proper assertions.

**Key Tools:**

```jsx
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
```

**Pattern 1: waitFor - Wait for assertion to pass:**

```jsx
test('loads and displays data', async () => {
  render(<UserProfile userId="1" />);

  // Wait for loading to finish and data to appear
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});

// With timeout for slow operations
await waitFor(() => {
  expect(screen.getByText('Data loaded')).toBeInTheDocument();
}, { timeout: 3000 });
```

**Pattern 2: findBy queries - Built-in waitFor:**

```jsx
test('displays data after fetch', async () => {
  render(<UserProfile userId="1" />);

  // findBy = getBy + waitFor
  const heading = await screen.findByText('John Doe');
  expect(heading).toBeInTheDocument();

  // Also works with findAllBy
  const items = await screen.findAllByRole('listitem');
  expect(items).toHaveLength(3);
});
```

**Pattern 3: waitForElementToBeRemoved:**

```jsx
test('shows loading then content', async () => {
  render(<DataFetcher />);

  // Verify loading state
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for loading to disappear
  await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

  // Now content should be visible
  expect(screen.getByText('Data loaded')).toBeInTheDocument();
});
```

**Pattern 4: Testing debounced inputs:**

```jsx
test('search with debounce', async () => {
  jest.useFakeTimers();
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

  render(<SearchBox onSearch={mockSearch} debounceMs={300} />);

  await user.type(screen.getByRole('textbox'), 'react');

  // Search not called yet (still debouncing)
  expect(mockSearch).not.toHaveBeenCalled();

  // Fast-forward past debounce
  act(() => {
    jest.advanceTimersByTime(300);
  });

  expect(mockSearch).toHaveBeenCalledWith('react');

  jest.useRealTimers();
});
```

**Pattern 5: Testing race conditions:**

```jsx
test('handles rapid filter changes correctly', async () => {
  const user = userEvent.setup();

  // Slow API response
  server.use(
    rest.get('/api/search', async (req, res, ctx) => {
      await delay(100);
      return res(ctx.json({ results: [req.url.searchParams.get('q')] }));
    })
  );

  render(<Search />);

  // Type quickly - simulates race condition
  await user.type(screen.getByRole('textbox'), 'abc');

  // Only final result should show (earlier requests should be cancelled/ignored)
  await waitFor(() => {
    expect(screen.getByText('abc')).toBeInTheDocument();
  });

  // Should NOT show intermediate results
  expect(screen.queryByText('a')).not.toBeInTheDocument();
  expect(screen.queryByText('ab')).not.toBeInTheDocument();
});
```

**Common Mistakes:**

```jsx
// ❌ Don't use await on getBy (they're synchronous)
const button = await screen.getByRole('button'); // Wrong!

// ✅ Use findBy for async
const button = await screen.findByRole('button'); // Correct

// ❌ Don't forget to await user events
user.click(button); // Wrong - won't wait

// ✅ Always await user events
await user.click(button); // Correct

// ❌ Empty waitFor callback
await waitFor(() => {}); // Useless - always passes

// ✅ Include assertion in waitFor
await waitFor(() => {
  expect(screen.getByText('Done')).toBeInTheDocument();
});
```

**Senior insight:** The most common async testing bugs are: (1) not awaiting user events, (2) not cleaning up pending promises/timers, and (3) race conditions in tests. Use `waitFor` judiciously - overusing it can hide real timing bugs. For complex async flows, MSW + realistic timing is better than mocking everything to be instant.

---

### Q: How do you balance unit tests, integration tests, and E2E tests?

**Answer:**

The testing pyramid helps allocate testing effort effectively for frontend applications.

**Frontend Testing Pyramid:**

```
        /\
       /  \
      / E2E \        ← Few: Critical paths only
     /-------\
    /         \
   /Integration\     ← Many: User journeys, component integration
  /-------------\
 /               \
/   Unit Tests    \  ← Many: Utilities, hooks, pure functions
-------------------
```

**What to Test at Each Level:**

| Level | What to Test | Tools | Speed | Confidence |
|-------|--------------|-------|-------|------------|
| Unit | Utilities, hooks, reducers, pure functions | Jest, Vitest | Fast | Lower |
| Integration | Component + API, user flows, multiple components together | RTL + MSW | Medium | High |
| E2E | Critical user journeys, cross-browser, real environment | Playwright, Cypress | Slow | Highest |

**Unit Tests (Fast, Isolated):**

```jsx
// Utility function
test('formatPrice formats currency correctly', () => {
  expect(formatPrice(1000)).toBe('$1,000.00');
  expect(formatPrice(0)).toBe('$0.00');
  expect(formatPrice(99.9)).toBe('$99.90');
});

// Custom hook
test('useToggle toggles value', () => {
  const { result } = renderHook(() => useToggle(false));
  expect(result.current[0]).toBe(false);

  act(() => result.current[1]());
  expect(result.current[0]).toBe(true);
});

// Reducer
test('cartReducer adds item', () => {
  const state = { items: [] };
  const action = { type: 'ADD_ITEM', payload: { id: 1, name: 'Widget' } };

  expect(cartReducer(state, action)).toEqual({
    items: [{ id: 1, name: 'Widget' }],
  });
});
```

**Integration Tests (User-Focused):**

```jsx
// Test user flow, not implementation
test('user can complete checkout flow', async () => {
  const user = userEvent.setup();
  render(<App />);

  // Add item to cart
  await user.click(await screen.findByRole('button', { name: 'Add to Cart' }));

  // Go to checkout
  await user.click(screen.getByText('Checkout'));

  // Fill shipping form
  await user.type(screen.getByLabelText('Address'), '123 Main St');

  // Complete order
  await user.click(screen.getByRole('button', { name: 'Place Order' }));

  // Verify confirmation
  await waitFor(() => {
    expect(screen.getByText('Order Confirmed!')).toBeInTheDocument();
  });
});
```

**E2E Tests (Real Environment):**

```javascript
// Playwright
test('checkout with real payment', async ({ page }) => {
  await page.goto('/products');
  await page.click('[data-testid="product-1"] button');
  await page.click('text=Checkout');

  // Fill real Stripe test card
  const stripeFrame = page.frameLocator('iframe[name^="__privateStripeFrame"]');
  await stripeFrame.locator('[name="cardnumber"]').fill('4242424242424242');

  await page.click('text=Pay Now');

  await expect(page.locator('text=Payment Successful')).toBeVisible();
});
```

**Recommended Distribution:**

For a typical React app:
- **70% Integration tests** - Most bugs caught, good ROI
- **20% Unit tests** - Complex logic, utilities, edge cases
- **10% E2E tests** - Critical paths (checkout, signup, core features)

**When to Adjust:**

| Scenario | Adjustment |
|----------|------------|
| Utility-heavy library | More unit tests |
| E-commerce with payments | More E2E tests |
| Design system | More integration + visual tests |
| Rapid iteration startup | Fewer E2E, more integration |

**Senior insight:** Don't aim for 100% coverage - aim for confidence. Integration tests give the best ROI for most React apps because they test real user behavior without E2E flakiness. Use E2E sparingly for critical money/data paths. Coverage metrics can be misleading - 80% coverage with good tests beats 95% coverage with brittle tests.

---

