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

### Q: How do you set up and use Mock Service Worker (MSW) for React testing?

**Answer:**

MSW (Mock Service Worker) intercepts network requests at the service worker level, providing realistic API mocking without changing application code. It's the modern standard for API mocking in React testing.

**MSW 2.0 Setup:**

```typescript
// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  // GET request
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ]);
  }),

  // GET with params
  http.get('/api/users/:id', ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      id: Number(id),
      name: 'John Doe',
      email: 'john@example.com',
    });
  }),

  // POST request
  http.post('/api/users', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(
      { id: 3, ...body },
      { status: 201 }
    );
  }),

  // Error response
  http.delete('/api/users/:id', ({ params }) => {
    if (params.id === '999') {
      return HttpResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    return HttpResponse.json({ success: true });
  }),
];
```

```typescript
// src/mocks/server.ts (for Node/Jest)
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
```

```typescript
// src/mocks/browser.ts (for browser/Storybook)
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
```

**Test Setup:**

```typescript
// setupTests.ts or jest.setup.ts
import { server } from './mocks/server';

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset handlers after each test (removes runtime overrides)
afterEach(() => server.resetHandlers());

// Clean up after all tests
afterAll(() => server.close());
```

**Using MSW in Tests:**

```typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { server } from './mocks/server';
import UserList from './UserList';

test('displays users from API', async () => {
  render(<UserList />);

  // Wait for data to load
  expect(await screen.findByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Jane Smith')).toBeInTheDocument();
});

test('handles API errors gracefully', async () => {
  // Override handler for this specific test
  server.use(
    http.get('/api/users', () => {
      return HttpResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    })
  );

  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText('Failed to load users')).toBeInTheDocument();
  });
});

test('shows loading state while fetching', async () => {
  // Delay response to test loading state
  server.use(
    http.get('/api/users', async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      return HttpResponse.json([{ id: 1, name: 'John' }]);
    })
  );

  render(<UserList />);

  // Loading state should be visible initially
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Then data appears
  expect(await screen.findByText('John')).toBeInTheDocument();
});
```

**Testing Different HTTP Methods:**

```typescript
test('creates new user via POST', async () => {
  const user = userEvent.setup();
  const onUserCreated = jest.fn();

  // Track what was sent to the API
  let capturedBody: any;
  server.use(
    http.post('/api/users', async ({ request }) => {
      capturedBody = await request.json();
      return HttpResponse.json(
        { id: 99, ...capturedBody },
        { status: 201 }
      );
    })
  );

  render(<CreateUserForm onSuccess={onUserCreated} />);

  await user.type(screen.getByLabelText('Name'), 'New User');
  await user.type(screen.getByLabelText('Email'), 'new@example.com');
  await user.click(screen.getByRole('button', { name: 'Create' }));

  await waitFor(() => {
    expect(onUserCreated).toHaveBeenCalledWith(
      expect.objectContaining({ id: 99, name: 'New User' })
    );
  });

  // Verify request body
  expect(capturedBody).toEqual({
    name: 'New User',
    email: 'new@example.com',
  });
});
```

**Testing Query Parameters:**

```typescript
test('filters users by role', async () => {
  let capturedUrl: URL;

  server.use(
    http.get('/api/users', ({ request }) => {
      capturedUrl = new URL(request.url);
      const role = capturedUrl.searchParams.get('role');

      if (role === 'admin') {
        return HttpResponse.json([{ id: 1, name: 'Admin User', role: 'admin' }]);
      }
      return HttpResponse.json([]);
    })
  );

  render(<UserList filter="admin" />);

  await waitFor(() => {
    expect(screen.getByText('Admin User')).toBeInTheDocument();
  });

  expect(capturedUrl!.searchParams.get('role')).toBe('admin');
});
```

**Network Conditions Simulation:**

```typescript
test('handles network timeout', async () => {
  server.use(
    http.get('/api/users', async () => {
      // Simulate network timeout
      await new Promise(resolve => setTimeout(resolve, 10000));
      return HttpResponse.json([]);
    })
  );

  render(<UserList timeout={1000} />);

  await waitFor(() => {
    expect(screen.getByText('Request timed out')).toBeInTheDocument();
  }, { timeout: 2000 });
});

test('handles network failure', async () => {
  server.use(
    http.get('/api/users', () => {
      return HttpResponse.error(); // Simulates network error
    })
  );

  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText('Network error')).toBeInTheDocument();
  });
});
```

**Reusable Response Factories:**

```typescript
// mocks/factories.ts
import { faker } from '@faker-js/faker';

export function createUser(overrides = {}) {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    createdAt: faker.date.recent().toISOString(),
    ...overrides,
  };
}

export function createUsers(count: number) {
  return Array.from({ length: count }, () => createUser());
}

// In tests
server.use(
  http.get('/api/users', () => {
    return HttpResponse.json(createUsers(10));
  })
);
```

**Senior insight:** MSW 2.0 represents a significant API change from 1.x - ensure you're using the correct syntax. Key benefits over jest.mock(fetch): (1) tests your actual fetch/axios code, (2) works with any HTTP client, (3) same handlers work in tests, Storybook, and development. Set `onUnhandledRequest: 'error'` in tests to catch missing handlers. Use response factories for realistic data that catches edge cases.

---

### Q: How do you test components using React Query/TanStack Query?

**Answer:**

Testing React Query requires proper QueryClient setup, cache management, and understanding of its async patterns.

**QueryClient Setup for Tests:**

```typescript
// test-utils/react-query.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Don't retry on failure in tests
        retry: false,
        // Don't cache between tests
        gcTime: 0,
        // Don't refetch on window focus in tests
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: false,
      },
    },
    // Suppress error logging in tests (optional)
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });
}

export function renderWithQueryClient(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  const queryClient = createTestQueryClient();

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...options }),
    queryClient,
  };
}
```

**Testing Queries:**

```typescript
import { renderWithQueryClient } from './test-utils/react-query';
import { screen, waitFor } from '@testing-library/react';
import { server } from './mocks/server';
import { http, HttpResponse } from 'msw';
import UserProfile from './UserProfile';

test('displays user data after successful fetch', async () => {
  server.use(
    http.get('/api/users/:id', () => {
      return HttpResponse.json({ id: 1, name: 'John Doe', email: 'john@test.com' });
    })
  );

  renderWithQueryClient(<UserProfile userId="1" />);

  // Check loading state
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for data
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  expect(screen.getByText('john@test.com')).toBeInTheDocument();
});

test('displays error message on fetch failure', async () => {
  server.use(
    http.get('/api/users/:id', () => {
      return HttpResponse.json({ message: 'User not found' }, { status: 404 });
    })
  );

  renderWithQueryClient(<UserProfile userId="999" />);

  await waitFor(() => {
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
```

**Testing Mutations:**

```typescript
import userEvent from '@testing-library/user-event';

test('updates user and invalidates cache', async () => {
  const user = userEvent.setup();

  // Initial user data
  server.use(
    http.get('/api/users/1', () => {
      return HttpResponse.json({ id: 1, name: 'John', email: 'john@test.com' });
    }),
    http.patch('/api/users/1', async ({ request }) => {
      const body = await request.json();
      return HttpResponse.json({ id: 1, ...body });
    })
  );

  const { queryClient } = renderWithQueryClient(<EditUserForm userId="1" />);

  // Wait for initial data load
  await waitFor(() => {
    expect(screen.getByDisplayValue('John')).toBeInTheDocument();
  });

  // Update name
  await user.clear(screen.getByLabelText('Name'));
  await user.type(screen.getByLabelText('Name'), 'Jane');
  await user.click(screen.getByRole('button', { name: 'Save' }));

  // Wait for mutation to complete
  await waitFor(() => {
    expect(screen.getByText('Saved!')).toBeInTheDocument();
  });

  // Verify cache was updated
  const cachedUser = queryClient.getQueryData(['user', '1']);
  expect(cachedUser).toEqual(expect.objectContaining({ name: 'Jane' }));
});
```

**Testing Optimistic Updates:**

```typescript
test('shows optimistic update then reverts on error', async () => {
  const user = userEvent.setup();
  let callCount = 0;

  server.use(
    http.post('/api/todos', async () => {
      callCount++;
      // First call fails
      if (callCount === 1) {
        await new Promise(r => setTimeout(r, 100));
        return HttpResponse.json({ error: 'Failed' }, { status: 500 });
      }
      return HttpResponse.json({ id: 1, text: 'New todo', completed: false });
    })
  );

  renderWithQueryClient(<TodoList />);

  await user.type(screen.getByPlaceholderText('Add todo'), 'New todo');
  await user.click(screen.getByRole('button', { name: 'Add' }));

  // Optimistic update should show immediately
  expect(screen.getByText('New todo')).toBeInTheDocument();

  // After error, optimistic update should be rolled back
  await waitFor(() => {
    expect(screen.queryByText('New todo')).not.toBeInTheDocument();
  });

  // Error should be shown
  expect(screen.getByText(/failed/i)).toBeInTheDocument();
});
```

**Testing Query Invalidation:**

```typescript
test('refetches data after invalidation', async () => {
  const user = userEvent.setup();
  let fetchCount = 0;

  server.use(
    http.get('/api/todos', () => {
      fetchCount++;
      if (fetchCount === 1) {
        return HttpResponse.json([{ id: 1, text: 'Original', completed: false }]);
      }
      return HttpResponse.json([
        { id: 1, text: 'Original', completed: false },
        { id: 2, text: 'New item', completed: false },
      ]);
    }),
    http.post('/api/todos', () => {
      return HttpResponse.json({ id: 2, text: 'New item', completed: false });
    })
  );

  const { queryClient } = renderWithQueryClient(<TodoApp />);

  // Initial load
  await waitFor(() => {
    expect(screen.getByText('Original')).toBeInTheDocument();
  });
  expect(fetchCount).toBe(1);

  // Add new todo (should invalidate and refetch)
  await user.click(screen.getByRole('button', { name: 'Add Todo' }));

  await waitFor(() => {
    expect(screen.getByText('New item')).toBeInTheDocument();
  });

  // Verify refetch occurred
  expect(fetchCount).toBe(2);
});
```

**Testing with Pre-populated Cache:**

```typescript
test('renders with pre-populated cache', async () => {
  const queryClient = createTestQueryClient();

  // Pre-populate cache (useful for testing cache-dependent behavior)
  queryClient.setQueryData(['user', '1'], {
    id: 1,
    name: 'Cached User',
    email: 'cached@test.com',
  });

  render(
    <QueryClientProvider client={queryClient}>
      <UserProfile userId="1" />
    </QueryClientProvider>
  );

  // Should show cached data immediately (no loading state)
  expect(screen.getByText('Cached User')).toBeInTheDocument();
});
```

**Testing Infinite Queries:**

```typescript
test('loads more items on scroll', async () => {
  const user = userEvent.setup();

  server.use(
    http.get('/api/posts', ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get('page')) || 1;

      return HttpResponse.json({
        posts: [
          { id: page * 10 + 1, title: `Post ${page}-1` },
          { id: page * 10 + 2, title: `Post ${page}-2` },
        ],
        nextPage: page < 3 ? page + 1 : null,
      });
    })
  );

  renderWithQueryClient(<InfinitePostList />);

  // Initial load
  await waitFor(() => {
    expect(screen.getByText('Post 1-1')).toBeInTheDocument();
  });

  // Load more
  await user.click(screen.getByRole('button', { name: 'Load More' }));

  await waitFor(() => {
    expect(screen.getByText('Post 2-1')).toBeInTheDocument();
  });

  // Previous items should still be visible
  expect(screen.getByText('Post 1-1')).toBeInTheDocument();
});
```

**Senior insight:** The key to testing React Query effectively is understanding its cache behavior. Always use a fresh QueryClient per test to prevent state leakage. Use `gcTime: 0` to prevent cache retention between tests. When testing mutations, verify both the UI update AND the cache state. For complex scenarios (optimistic updates, invalidation), test the full flow rather than mocking useQuery directly.

---

### Q: What are strategies for visual regression testing in React?

**Answer:**

Visual regression testing catches unintended UI changes by comparing screenshots. It's essential for design systems, component libraries, and UI-heavy applications.

**Tool Options:**

| Tool | Type | Pros | Cons |
|------|------|------|------|
| **Chromatic** | Cloud service | Storybook integration, review workflow | Paid for private projects |
| **Percy** | Cloud service | Multi-browser, review workflow | Paid |
| **Playwright** | Built-in screenshots | Free, full control | Self-managed, more setup |
| **Storybook Test Runner** | Local/CI | Free, Storybook native | Less sophisticated diff |
| **Loki** | Local | Free, works with Storybook | Docker required |

**Storybook + Chromatic Setup:**

```typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook', // Chromatic addon
  ],
};

export default config;
```

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  // Chromatic-specific settings
  parameters: {
    chromatic: {
      // Capture multiple viewports
      viewports: [320, 768, 1200],
      // Delay for animations
      delay: 300,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

// Story with interaction states
export const Hover: Story = {
  args: { variant: 'primary', children: 'Hover Me' },
  parameters: {
    pseudo: { hover: true }, // Chromatic hover state
  },
};

export const Focused: Story = {
  args: { variant: 'primary', children: 'Focus Me' },
  parameters: {
    pseudo: { focus: true },
  },
};

// Disable chromatic for specific story
export const Animation: Story = {
  parameters: {
    chromatic: { disableSnapshot: true }, // Skip animated stories
  },
};
```

**Playwright Visual Testing:**

```typescript
// tests/visual.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('homepage matches snapshot', async ({ page }) => {
    await page.goto('/');

    // Wait for content to load
    await page.waitForSelector('[data-testid="hero-section"]');

    // Full page screenshot
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      // Mask dynamic content
      mask: [page.locator('[data-testid="timestamp"]')],
    });
  });

  test('button states', async ({ page }) => {
    await page.goto('/components/button');

    const button = page.locator('button.primary');

    // Default state
    await expect(button).toHaveScreenshot('button-default.png');

    // Hover state
    await button.hover();
    await expect(button).toHaveScreenshot('button-hover.png');

    // Focus state
    await button.focus();
    await expect(button).toHaveScreenshot('button-focus.png');

    // Disabled state
    await page.locator('button.disabled').first().screenshot({
      path: 'test-results/button-disabled.png',
    });
  });

  test('responsive layout', async ({ page }) => {
    await page.goto('/dashboard');

    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page).toHaveScreenshot('dashboard-mobile.png');

    // Tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page).toHaveScreenshot('dashboard-tablet.png');

    // Desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page).toHaveScreenshot('dashboard-desktop.png');
  });
});
```

**Playwright Configuration:**

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  snapshotDir: './tests/__snapshots__',

  // Screenshot comparison settings
  expect: {
    toHaveScreenshot: {
      // Allow small differences (anti-aliasing, fonts)
      maxDiffPixels: 100,
      // Or percentage-based threshold
      maxDiffPixelRatio: 0.01,
      // Animation handling
      animations: 'disabled',
    },
  },

  // Update snapshots in CI
  updateSnapshots: process.env.UPDATE_SNAPSHOTS === 'true' ? 'all' : 'missing',

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});
```

**Handling Dynamic Content:**

```typescript
test('page with dynamic content', async ({ page }) => {
  await page.goto('/feed');

  // Mask timestamps, avatars, or any dynamic content
  await expect(page).toHaveScreenshot('feed.png', {
    mask: [
      page.locator('.timestamp'),
      page.locator('.user-avatar'),
      page.locator('[data-testid="ad-slot"]'),
    ],
  });

  // Or hide elements entirely
  await page.addStyleTag({
    content: `
      .timestamp { visibility: hidden !important; }
      .user-avatar { background: gray !important; }
    `,
  });
  await expect(page).toHaveScreenshot('feed-normalized.png');
});

// Wait for fonts and images to load
test('page with lazy content', async ({ page }) => {
  await page.goto('/gallery');

  // Wait for all images
  await page.waitForFunction(() => {
    const images = document.querySelectorAll('img');
    return Array.from(images).every(img => img.complete);
  });

  // Wait for fonts
  await page.waitForFunction(() => document.fonts.ready);

  // Small delay for any animations
  await page.waitForTimeout(500);

  await expect(page).toHaveScreenshot('gallery.png');
});
```

**Component-Level Visual Testing with Storybook:**

```typescript
// Button.test.ts (using @storybook/test-runner)
import { test, expect } from '@storybook/test';

// Visual test runs against compiled Storybook
test('Button - primary variant', async ({ page }) => {
  await page.goto('/iframe.html?id=button--primary');

  // Wait for story to render
  await page.waitForSelector('.storybook-button');

  // Component screenshot
  const button = page.locator('.storybook-button');
  await expect(button).toHaveScreenshot();
});
```

**CI Integration:**

```yaml
# .github/workflows/visual-tests.yml
name: Visual Regression Tests

on: [push, pull_request]

jobs:
  visual-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Build Storybook
        run: npm run build-storybook

      - name: Run Chromatic
        uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          buildScriptName: build-storybook

      # OR Playwright visual tests
      - name: Run Playwright tests
        run: npx playwright test --project=chromium

      - name: Upload test results
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: visual-test-results
          path: test-results/
```

**Best Practices:**

| Practice | Reason |
|----------|--------|
| Test in CI only | Local rendering varies (fonts, GPU) |
| Use consistent viewport sizes | Responsive layouts cause false positives |
| Mask dynamic content | Timestamps, avatars cause failures |
| Disable animations | Animation frames cause flaky tests |
| Review changes, don't auto-approve | Visual tests need human judgment |
| Test key states | Default, hover, focus, disabled, error |
| Component-level over page-level | Smaller diffs, faster debugging |

**Senior insight:** Visual regression testing is best for component libraries and design systems where pixel-perfect consistency matters. For applications, it can be noisy due to content changes. Use it strategically - test core UI components, not every page. Chromatic's workflow is excellent for team collaboration (designers can approve changes). Playwright is great for full control and self-hosting. Always mask or mock dynamic content to avoid false positives.

---

### Q: How do you test components with complex async behavior like debouncing, polling, and race conditions?

**Answer:**

Testing complex async patterns requires understanding timing, proper timer mocking, and careful assertion strategies.

**Testing Debounced Inputs:**

```typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Component with debounced search
function SearchBox({ onSearch, debounceMs = 300 }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) onSearch(query);
    }, debounceMs);
    return () => clearTimeout(timer);
  }, [query, debounceMs, onSearch]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}

// Test with fake timers
test('debounces search input', async () => {
  jest.useFakeTimers();
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  const onSearch = jest.fn();

  render(<SearchBox onSearch={onSearch} debounceMs={300} />);

  // Type quickly
  await user.type(screen.getByRole('textbox'), 'react');

  // Search should NOT have been called yet
  expect(onSearch).not.toHaveBeenCalled();

  // Advance timers past debounce
  jest.advanceTimersByTime(300);

  // Now search should be called with final value
  expect(onSearch).toHaveBeenCalledTimes(1);
  expect(onSearch).toHaveBeenCalledWith('react');

  jest.useRealTimers();
});

test('cancels pending search when typing continues', async () => {
  jest.useFakeTimers();
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  const onSearch = jest.fn();

  render(<SearchBox onSearch={onSearch} debounceMs={300} />);

  await user.type(screen.getByRole('textbox'), 'rea');

  // Advance part way
  jest.advanceTimersByTime(200);

  // Type more (should reset timer)
  await user.type(screen.getByRole('textbox'), 'ct');

  // Advance another 200ms (total 400ms from first keystroke)
  jest.advanceTimersByTime(200);

  // Still shouldn't have fired (timer was reset)
  expect(onSearch).not.toHaveBeenCalled();

  // Advance remaining time
  jest.advanceTimersByTime(100);

  // Now it should fire with complete value
  expect(onSearch).toHaveBeenCalledWith('react');
  expect(onSearch).toHaveBeenCalledTimes(1);

  jest.useRealTimers();
});
```

**Testing Polling:**

```typescript
function PollingStatus({ pollInterval = 5000 }) {
  const [status, setStatus] = useState('unknown');

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await fetch('/api/status');
      const data = await response.json();
      setStatus(data.status);
    };

    fetchStatus(); // Initial fetch
    const interval = setInterval(fetchStatus, pollInterval);

    return () => clearInterval(interval);
  }, [pollInterval]);

  return <div data-testid="status">{status}</div>;
}

test('polls for status updates', async () => {
  jest.useFakeTimers();
  let pollCount = 0;

  server.use(
    http.get('/api/status', () => {
      pollCount++;
      const statuses = ['pending', 'processing', 'complete'];
      return HttpResponse.json({
        status: statuses[Math.min(pollCount - 1, 2)],
      });
    })
  );

  render(<PollingStatus pollInterval={1000} />);

  // Initial fetch
  await waitFor(() => {
    expect(screen.getByTestId('status')).toHaveTextContent('pending');
  });
  expect(pollCount).toBe(1);

  // Advance to second poll
  jest.advanceTimersByTime(1000);
  await waitFor(() => {
    expect(screen.getByTestId('status')).toHaveTextContent('processing');
  });
  expect(pollCount).toBe(2);

  // Advance to third poll
  jest.advanceTimersByTime(1000);
  await waitFor(() => {
    expect(screen.getByTestId('status')).toHaveTextContent('complete');
  });
  expect(pollCount).toBe(3);

  jest.useRealTimers();
});

test('stops polling on unmount', async () => {
  jest.useFakeTimers();
  let pollCount = 0;

  server.use(
    http.get('/api/status', () => {
      pollCount++;
      return HttpResponse.json({ status: 'ok' });
    })
  );

  const { unmount } = render(<PollingStatus pollInterval={1000} />);

  // Initial fetch
  await waitFor(() => expect(pollCount).toBe(1));

  // Unmount
  unmount();

  // Advance time - should NOT trigger more fetches
  jest.advanceTimersByTime(5000);

  expect(pollCount).toBe(1);

  jest.useRealTimers();
});
```

**Testing Race Conditions:**

```typescript
function TypeaheadSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    fetch(`/api/search?q=${query}`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => setResults(data.results))
      .catch(err => {
        if (err.name !== 'AbortError') console.error(err);
      });

    return () => controller.abort();
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        data-testid="search-input"
      />
      <ul>
        {results.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}

test('handles race conditions - only shows final result', async () => {
  const user = userEvent.setup();
  const responses: Record<string, string[]> = {
    'a': ['apple', 'apricot'],
    'ab': ['abstract', 'absorb'],
    'abc': ['abcd', 'abcde'],
  };

  // Delay responses to create race condition potential
  server.use(
    http.get('/api/search', async ({ request }) => {
      const url = new URL(request.url);
      const q = url.searchParams.get('q') || '';

      // Longer queries return faster (simulating real-world)
      const delay = q.length === 1 ? 300 : q.length === 2 ? 200 : 100;
      await new Promise(r => setTimeout(r, delay));

      return HttpResponse.json({ results: responses[q] || [] });
    })
  );

  render(<TypeaheadSearch />);

  // Type quickly - creates overlapping requests
  await user.type(screen.getByTestId('search-input'), 'abc');

  // Wait for results to settle
  await waitFor(() => {
    expect(screen.getByText('abcd')).toBeInTheDocument();
  });

  // Should ONLY show results for 'abc', NOT for 'a' or 'ab'
  expect(screen.queryByText('apple')).not.toBeInTheDocument();
  expect(screen.queryByText('abstract')).not.toBeInTheDocument();
});
```

**Testing Retry Logic:**

```typescript
function DataFetcher({ maxRetries = 3 }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let attempt = 0;
    let cancelled = false;

    async function fetchWithRetry() {
      while (attempt < maxRetries && !cancelled) {
        try {
          const response = await fetch('/api/data');
          if (!response.ok) throw new Error('Failed');
          const data = await response.json();
          if (!cancelled) setData(data);
          return;
        } catch (err) {
          attempt++;
          if (!cancelled) setRetryCount(attempt);
          if (attempt < maxRetries) {
            await new Promise(r => setTimeout(r, 1000 * attempt)); // Exponential backoff
          }
        }
      }
      if (!cancelled) setError('Max retries exceeded');
    }

    fetchWithRetry();
    return () => { cancelled = true; };
  }, [maxRetries]);

  return (
    <div>
      <span data-testid="retry-count">{retryCount}</span>
      {error && <span data-testid="error">{error}</span>}
      {data && <span data-testid="data">{data.value}</span>}
    </div>
  );
}

test('retries on failure with backoff', async () => {
  jest.useFakeTimers();
  let callCount = 0;

  server.use(
    http.get('/api/data', () => {
      callCount++;
      // Fail first 2 attempts, succeed on 3rd
      if (callCount < 3) {
        return HttpResponse.json({ error: 'Server error' }, { status: 500 });
      }
      return HttpResponse.json({ value: 'Success!' });
    })
  );

  render(<DataFetcher maxRetries={3} />);

  // First attempt fails
  await waitFor(() => {
    expect(screen.getByTestId('retry-count')).toHaveTextContent('1');
  });

  // Advance past first backoff (1 second)
  jest.advanceTimersByTime(1000);

  // Second attempt fails
  await waitFor(() => {
    expect(screen.getByTestId('retry-count')).toHaveTextContent('2');
  });

  // Advance past second backoff (2 seconds)
  jest.advanceTimersByTime(2000);

  // Third attempt succeeds
  await waitFor(() => {
    expect(screen.getByTestId('data')).toHaveTextContent('Success!');
  });

  expect(callCount).toBe(3);
  jest.useRealTimers();
});
```

**Testing Concurrent Updates:**

```typescript
test('handles concurrent state updates correctly', async () => {
  const user = userEvent.setup();

  function Counter() {
    const [count, setCount] = useState(0);

    const incrementAsync = async () => {
      await new Promise(r => setTimeout(r, 100));
      setCount(c => c + 1); // Functional update is key
    };

    return (
      <div>
        <span data-testid="count">{count}</span>
        <button onClick={incrementAsync}>Increment</button>
      </div>
    );
  }

  jest.useFakeTimers();
  render(<Counter />);

  // Click multiple times rapidly
  const button = screen.getByRole('button');
  await user.click(button);
  await user.click(button);
  await user.click(button);

  // Advance time for all async operations
  jest.advanceTimersByTime(100);

  // All increments should be applied
  await waitFor(() => {
    expect(screen.getByTestId('count')).toHaveTextContent('3');
  });

  jest.useRealTimers();
});
```

**Senior insight:** The key to testing async patterns is controlling time. Always use `jest.useFakeTimers()` or Vitest's `vi.useFakeTimers()` for deterministic tests. For userEvent with fake timers, pass `advanceTimers` option. Test the edge cases: (1) cancellation on unmount, (2) race conditions with rapid input, (3) retry exhaustion. Remember to clean up timers with `jest.useRealTimers()` to avoid affecting other tests.

---

