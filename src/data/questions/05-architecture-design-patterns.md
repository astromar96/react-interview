## 5. Architecture & Design Patterns

### Q: How do you structure a large-scale React application?

**Answer:**

**Feature-Based Structure (Recommended):**

```
src/
├── app/                    # App-level setup
│   ├── App.tsx
│   ├── store.ts
│   └── routes.tsx
├── features/               # Feature modules
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── api/
│   │   │   └── authApi.ts
│   │   ├── store/
│   │   │   └── authSlice.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── index.ts        # Public API
│   ├── users/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.ts
│   └── dashboard/
├── shared/                 # Shared across features
│   ├── components/         # Button, Modal, Input
│   ├── hooks/              # useDebounce, useLocalStorage
│   ├── utils/              # formatDate, validators
│   └── types/              # Common types
├── assets/
└── styles/
```

**Key Principles:**

1. **Feature Encapsulation:**
```typescript
// features/users/index.ts - Public API
export { UserList } from './components/UserList';
export { useUser } from './hooks/useUser';
export type { User } from './types';

// Other features import from index, not internal paths
import { UserList, useUser } from '@/features/users';
```

2. **Dependency Direction:**
```
features/ → shared/   ✅
features/ → features/ ⚠️ (careful, use shared)
shared/ → features/   ❌
```

3. **Co-location:**
- Tests next to components
- Types with their feature
- Styles with components (CSS modules/styled-components)

**Alternative: Feature-Sliced Design (FSD):**

```
src/
├── app/          # App initialization
├── processes/    # Complex multi-page flows
├── pages/        # Page components
├── widgets/      # Page sections
├── features/     # User interactions
├── entities/     # Business entities
└── shared/       # Reusable utilities
```

**Senior insight:** Start simple, restructure as needed. A feature folder is justified when it has 3+ components or is reused. Avoid premature abstraction - not everything needs to be in `shared/`.

---

### Q: What is Micro-Frontend architecture?

**Answer:**

**Micro-frontends** split a frontend monolith into independently deployable applications, each owned by different teams.

```
┌─────────────────────────────────────────────────────────┐
│                    Container/Shell                       │
├──────────────┬──────────────┬──────────────────────────┤
│   Header MFE │   Product MFE  │      Cart MFE          │
│   (React)    │   (Vue)        │      (React)           │
│   Team A     │   Team B       │      Team C            │
└──────────────┴──────────────┴──────────────────────────┘
```

**Implementation Approaches:**

**1. Module Federation (Webpack 5):**
```javascript
// products/webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/ProductList',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};

// shell/webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        products: 'products@http://localhost:3001/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};

// shell/src/App.js
const ProductList = React.lazy(() => import('products/ProductList'));
```

**2. Single-SPA (Framework agnostic):**
```javascript
// root-config.js
registerApplication({
  name: '@org/products',
  app: () => System.import('@org/products'),
  activeWhen: ['/products'],
});
```

**3. iframes (Simple but limited):**
```jsx
<iframe src="https://products.myapp.com" />
```

**When to Use Micro-frontends:**

✅ **Good fit:**
- Large teams (10+ frontend devs)
- Different release cycles per feature
- Teams with different tech preferences
- Legacy migration (gradual rewrite)

❌ **Avoid when:**
- Small team
- Single product focus
- Tight feature coupling
- Performance is critical

**Trade-offs:**

| Benefit | Cost |
|---------|------|
| Independent deployments | Increased complexity |
| Team autonomy | Potential inconsistent UX |
| Tech diversity | Larger bundle size |
| Isolated failures | Shared state challenges |

**Senior insight:** Micro-frontends solve organizational problems, not technical ones. If you don't have autonomous teams with clear boundaries, you'll get the complexity without the benefits. Start with a well-structured monolith.

---

### Q: When would you choose Redux over Context API?

**Answer:**

**Choose Context API when:**
```jsx
// ✅ Theme/locale (changes rarely)
const ThemeContext = createContext('light');

// ✅ User authentication (changes rarely)
const AuthContext = createContext(null);

// ✅ Configuration
const ConfigContext = createContext(defaultConfig);

// ✅ Small apps with limited global state
```

**Choose Redux when:**
```jsx
// ✅ Complex state logic
const orderReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': ...
    case 'REMOVE_ITEM': ...
    case 'APPLY_DISCOUNT': ...
    case 'UPDATE_SHIPPING': ...
  }
};

// ✅ Frequent updates (Redux can optimize selectors)
const selectActiveItems = createSelector(
  [selectItems, selectFilter],
  (items, filter) => items.filter(i => i.status === filter)
);

// ✅ Need middleware
const store = configureStore({
  middleware: [thunk, logger, analytics],
});

// ✅ Time-travel debugging needed
// ✅ Large team needs predictable patterns
```

**Comparison:**

| Aspect | Context | Redux |
|--------|---------|-------|
| Setup | Minimal | More boilerplate |
| Performance | Re-renders all consumers | Selective subscriptions |
| DevTools | Limited | Excellent |
| Middleware | No | Yes |
| Learning curve | Low | Medium |
| Best for | Infrequent updates | Complex/frequent updates |

**Context Performance Problem:**
```jsx
// ❌ Every consumer re-renders on ANY change
const AppContext = createContext({ user, theme, cart, notifications });

function Cart() {
  const { cart } = useContext(AppContext);
  // Re-renders when theme changes!
}

// ✅ Redux - only re-renders when selected value changes
function Cart() {
  const cart = useSelector(state => state.cart);
  // Only re-renders when cart changes
}
```

**Senior insight:** Context is for dependency injection (passing values down), not state management. For frequently updated global state with many consumers, Context causes unnecessary re-renders. Split contexts or use a state library.

---

### Q: How do you approach building a design system or component library?

**Answer:**

Building a design system requires balancing flexibility, consistency, and developer experience.

**Key Architecture Decisions:**

```
┌─────────────────────────────────────────────────────────────────┐
│                     Design System                                │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                    Design Tokens                         │  │
│  │   colors, spacing, typography, shadows, breakpoints     │  │
│  └─────────────────────────────────────────────────────────┘  │
│                            ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                  Primitive Components                     │  │
│  │   Box, Text, Icon, Button, Input                         │  │
│  └─────────────────────────────────────────────────────────┘  │
│                            ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                  Composite Components                     │  │
│  │   Card, Modal, Dropdown, Table, Form                     │  │
│  └─────────────────────────────────────────────────────────┘  │
│                            ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                    Page Templates                         │  │
│  │   Dashboard, Settings, Profile                           │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

**1. Design Tokens:**

```typescript
// tokens/colors.ts
export const colors = {
  // Semantic colors
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  },
  success: { /* ... */ },
  error: { /* ... */ },

  // Contextual
  text: {
    primary: '#111827',
    secondary: '#6b7280',
    disabled: '#9ca3af',
  },
  background: {
    default: '#ffffff',
    subtle: '#f9fafb',
  },
};

// tokens/spacing.ts
export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  4: '1rem',
  8: '2rem',
  // ...
} as const;

// tokens/index.ts
export const tokens = {
  colors,
  spacing,
  typography,
  shadows,
  radii,
  breakpoints,
};
```

**2. Component API Design:**

```typescript
// Consistent prop patterns across all components
interface CommonProps {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;  // For testing
}

// Polymorphic "as" prop for flexibility
interface BoxProps<T extends React.ElementType> extends CommonProps {
  as?: T;
  children?: React.ReactNode;
}

function Box<T extends React.ElementType = 'div'>({
  as,
  children,
  ...props
}: BoxProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}

// Usage
<Box>Default div</Box>
<Box as="section">Semantic section</Box>
<Box as="a" href="/home">Link</Box>
```

**3. Variant-Based Components (CVA/Stitches Pattern):**

```typescript
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        ghost: 'hover:bg-gray-100',
        danger: 'bg-red-500 text-white hover:bg-red-600',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

function Button({
  variant,
  size,
  fullWidth,
  loading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, fullWidth })}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <Spinner className="mr-2" />}
      {children}
    </button>
  );
}
```

**4. Theming:**

```typescript
// ThemeProvider with CSS variables
function ThemeProvider({ theme, children }) {
  return (
    <div
      style={{
        '--color-primary': theme.colors.primary,
        '--color-background': theme.colors.background,
        '--spacing-unit': theme.spacing.unit,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

// Components use CSS variables
const buttonStyles = {
  backgroundColor: 'var(--color-primary)',
  padding: 'var(--spacing-unit)',
};
```

**5. Documentation (Storybook):**

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
```

**6. Publishing:**

```json
// package.json
{
  "name": "@company/design-system",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./tokens": {
      "import": "./dist/tokens.mjs"
    }
  },
  "sideEffects": false,
  "files": ["dist"]
}
```

**Senior insight:** Key decisions: (1) CSS approach - CSS-in-JS vs Tailwind vs CSS Modules, (2) Flexibility vs consistency - how much customization to allow, (3) Accessibility from day one - don't bolt it on later, (4) Versioning strategy - semantic versioning, changelog. Start small (5-10 core components), get adoption, then expand based on actual needs.

---

### Q: Explain the Container/Presentational pattern and its modern alternatives

**Answer:**

**The Original Pattern (Pre-Hooks):**

Separate components into two types:
- **Container (Smart)**: Handles logic, state, data fetching
- **Presentational (Dumb)**: Renders UI based on props

```jsx
// Container - handles logic
class UserListContainer extends React.Component {
  state = { users: [], loading: true };

  componentDidMount() {
    fetchUsers().then(users => this.setState({ users, loading: false }));
  }

  render() {
    return (
      <UserList
        users={this.state.users}
        loading={this.state.loading}
      />
    );
  }
}

// Presentational - pure rendering
function UserList({ users, loading }) {
  if (loading) return <Spinner />;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Why It Was Useful:**
- Separation of concerns
- Presentational components easy to test
- Reusable UI components
- Easier reasoning about data flow

**Modern Alternative: Custom Hooks**

Hooks extract logic without wrapper components:

```jsx
// Hook handles all logic
function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
}

// Component uses hook directly
function UserList() {
  const { users, loading, error } = useUsers();

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Benefits of Hooks Over Containers:**
- No wrapper component = no extra nesting
- Logic is truly reusable (not tied to component hierarchy)
- Easier to compose multiple behaviors
- Better TypeScript support
- No render prop / HOC callback hell

**When Container Pattern Still Makes Sense:**

**1. Reusable presentation with different data sources:**

```jsx
// Same UI, different data sources
function RecentOrdersList() {
  const { orders } = useRecentOrders();
  return <OrderList orders={orders} />;
}

function SearchResultsList({ query }) {
  const { orders } = useOrderSearch(query);
  return <OrderList orders={orders} />;
}

// OrderList is purely presentational
function OrderList({ orders }) {
  return (
    <ul>
      {orders.map(order => <OrderItem key={order.id} order={order} />)}
    </ul>
  );
}
```

**2. Complex layout components:**

```jsx
// Container handles business logic
function DashboardContainer() {
  const { user } = useAuth();
  const { metrics } = useMetrics();
  const { notifications } = useNotifications();

  return (
    <Dashboard
      user={user}
      metrics={metrics}
      notifications={notifications}
    />
  );
}

// Presentational handles layout
function Dashboard({ user, metrics, notifications }) {
  return (
    <div className="dashboard">
      <Header user={user} />
      <MetricsPanel metrics={metrics} />
      <NotificationList notifications={notifications} />
    </div>
  );
}
```

**3. Storybook/testing isolation:**

```jsx
// Presentational component is easy to test/story
// Button.stories.tsx
export const Loading = () => <Button loading>Submit</Button>;
export const Disabled = () => <Button disabled>Submit</Button>;
export const WithIcon = () => <Button icon={<CheckIcon />}>Submit</Button>;

// vs testing component with hooks requires mocking
```

**Hybrid Approach (Most Common Today):**

```jsx
// Colocated hook + component
function UserProfile({ userId }) {
  // Logic via hook
  const { user, loading, error, updateUser } = useUser(userId);

  // Handle states
  if (loading) return <ProfileSkeleton />;
  if (error) return <ErrorState error={error} />;

  // Render UI
  return (
    <div className="profile">
      <Avatar src={user.avatar} />
      <h1>{user.name}</h1>
      <EditButton onClick={() => updateUser({ /* ... */ })} />
    </div>
  );
}
```

**Senior insight:** Don't religiously follow Container/Presentational - use it where separation adds value. Hooks eliminated most of its use cases. Still useful for: Storybook-first development, highly reusable UI components, and complex components with many data sources. The goal is testability and reusability, not rigid patterns.

---

### Q: How do you handle feature flags in React applications?

**Answer:**

Feature flags enable controlled rollouts, A/B testing, and kill switches without deployments.

**Basic Implementation:**

```typescript
// types
interface FeatureFlags {
  newCheckoutFlow: boolean;
  darkMode: boolean;
  betaFeatures: boolean;
  experimentalEditor: boolean;
}

// Context-based feature flags
const FeatureFlagContext = createContext<FeatureFlags | null>(null);

function FeatureFlagProvider({ children }) {
  const [flags, setFlags] = useState<FeatureFlags | null>(null);

  useEffect(() => {
    // Fetch from server on mount
    fetchFeatureFlags().then(setFlags);
  }, []);

  if (!flags) return <Spinner />; // Or use default flags

  return (
    <FeatureFlagContext.Provider value={flags}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

function useFeatureFlag<K extends keyof FeatureFlags>(
  flag: K
): FeatureFlags[K] {
  const flags = useContext(FeatureFlagContext);
  if (!flags) {
    throw new Error('useFeatureFlag must be within FeatureFlagProvider');
  }
  return flags[flag];
}
```

**Usage Patterns:**

```jsx
// 1. Conditional rendering
function Checkout() {
  const newCheckoutFlow = useFeatureFlag('newCheckoutFlow');

  if (newCheckoutFlow) {
    return <NewCheckoutFlow />;
  }
  return <LegacyCheckout />;
}

// 2. Feature wrapper component
function Feature({ flag, children, fallback = null }) {
  const isEnabled = useFeatureFlag(flag);
  return isEnabled ? children : fallback;
}

function App() {
  return (
    <Feature flag="betaFeatures" fallback={<ComingSoon />}>
      <BetaDashboard />
    </Feature>
  );
}

// 3. Hook for feature-dependent logic
function useEditorConfig() {
  const experimentalEditor = useFeatureFlag('experimentalEditor');

  return {
    plugins: experimentalEditor
      ? [...standardPlugins, ...experimentalPlugins]
      : standardPlugins,
    theme: experimentalEditor ? 'modern' : 'classic',
  };
}
```

**Server-Side Integration (LaunchDarkly, Split.io):**

```typescript
// Initialize with user context
import { LDClient, LDUser } from 'launchdarkly-js-client-sdk';

function FeatureFlagProvider({ children }) {
  const { user } = useAuth();
  const [client, setClient] = useState<LDClient | null>(null);
  const [flags, setFlags] = useState<Record<string, any>>({});

  useEffect(() => {
    const ldUser: LDUser = {
      key: user?.id ?? 'anonymous',
      email: user?.email,
      custom: {
        plan: user?.subscription?.plan,
        company: user?.company?.id,
      },
    };

    const ldClient = LDClient.initialize(
      process.env.LAUNCHDARKLY_CLIENT_ID!,
      ldUser
    );

    ldClient.on('ready', () => {
      setFlags(ldClient.allFlags());
    });

    ldClient.on('change', () => {
      setFlags(ldClient.allFlags());
    });

    setClient(ldClient);

    return () => ldClient.close();
  }, [user]);

  // ...
}
```

**Gradual Rollout Patterns:**

```typescript
// Percentage-based rollout
function shouldShowFeature(userId: string, percentage: number): boolean {
  // Consistent hashing ensures same user always gets same result
  const hash = hashCode(userId);
  return (hash % 100) < percentage;
}

// Cohort-based
interface FeatureFlagConfig {
  enabled: boolean;
  percentage: number;
  allowList: string[];  // User IDs always enabled
  denyList: string[];   // User IDs always disabled
  rules: FlagRule[];    // Custom targeting rules
}

function evaluateFlag(flag: FeatureFlagConfig, user: User): boolean {
  if (flag.denyList.includes(user.id)) return false;
  if (flag.allowList.includes(user.id)) return true;

  // Evaluate custom rules
  for (const rule of flag.rules) {
    if (matchesRule(rule, user)) {
      return rule.enabled;
    }
  }

  // Fall back to percentage rollout
  return shouldShowFeature(user.id, flag.percentage);
}
```

**Testing with Feature Flags:**

```jsx
// Test wrapper
function renderWithFlags(ui, flags = {}) {
  const defaultFlags: FeatureFlags = {
    newCheckoutFlow: false,
    darkMode: false,
    betaFeatures: false,
    experimentalEditor: false,
  };

  return render(
    <FeatureFlagContext.Provider value={{ ...defaultFlags, ...flags }}>
      {ui}
    </FeatureFlagContext.Provider>
  );
}

// Tests
test('shows new checkout when flag enabled', () => {
  renderWithFlags(<Checkout />, { newCheckoutFlow: true });
  expect(screen.getByText('New Checkout')).toBeInTheDocument();
});

test('shows legacy checkout when flag disabled', () => {
  renderWithFlags(<Checkout />, { newCheckoutFlow: false });
  expect(screen.getByText('Legacy Checkout')).toBeInTheDocument();
});
```

**SSR Considerations:**

```typescript
// Next.js - pass flags through server
export async function getServerSideProps(context) {
  const flags = await fetchFeatureFlags(context.req);

  return {
    props: {
      featureFlags: flags,
    },
  };
}

// App Router - Server Component
async function Page() {
  const flags = await getFeatureFlags();

  return (
    <FeatureFlagProvider initialFlags={flags}>
      <Content />
    </FeatureFlagProvider>
  );
}
```

**Cleanup Strategy:**

```typescript
// Track flag usage for cleanup
const usedFlags = new Set<string>();

function useFeatureFlag(flag: keyof FeatureFlags) {
  usedFlags.add(flag);  // Track usage

  // In production, report unused flags for cleanup
  useEffect(() => {
    reportFlagUsage(flag);
  }, [flag]);

  // ...
}

// CI check for stale flags
// scripts/check-stale-flags.js
const declaredFlags = Object.keys(flagConfig);
const usedFlags = findFlagsInCode('./src');
const staleFlags = declaredFlags.filter(f => !usedFlags.has(f));

if (staleFlags.length > 0) {
  console.warn('Stale flags:', staleFlags);
  process.exit(1);
}
```

**Senior insight:** Key practices: (1) default to "off" for safety, (2) keep flag scope small (one feature per flag), (3) set expiration dates and clean up, (4) log flag evaluations for debugging, (5) test both on AND off states. Avoid flag debt - too many flags becomes unmaintainable. Services like LaunchDarkly handle complexity (targeting, analytics, audit logs) better than DIY for enterprise use.

---
