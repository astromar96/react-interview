## 7. TypeScript with React

### Q: How do you type component props?

**Answer:**

**Basic Props:**
```typescript
// Interface (preferred for props - extendable)
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;  // Optional
}

function Button({ label, onClick, disabled = false }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
}

// Type alias (fine too)
type ButtonProps = {
  label: string;
  onClick: () => void;
};
```

**Children Props:**
```typescript
// Explicit children
interface CardProps {
  title: string;
  children: React.ReactNode;
}

// Using PropsWithChildren
type CardProps = React.PropsWithChildren<{
  title: string;
}>;

// Render prop
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
```

**Event Handlers:**
```typescript
interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
```

**Extending HTML Elements:**
```typescript
// Extend native button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

function Button({ variant, children, ...rest }: ButtonProps) {
  return <button className={variant} {...rest}>{children}</button>;
}

// Usage includes all native button props
<Button variant="primary" disabled onClick={...}>Click</Button>
```

**Component as Prop:**
```typescript
interface LayoutProps {
  header: React.ReactNode;
  sidebar: React.ComponentType<{ collapsed: boolean }>;
}
```

**Senior insight:** Use `interface` for props (can be extended/merged), `type` for unions/complex types. Avoid `React.FC` - it adds implicit children and has issues with generics. Declare return type implicitly.

---

### Q: How do you type a polymorphic component?

**Answer:**

A **polymorphic component** can render as different HTML elements or components via an `as` prop.

```typescript
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

// Base props that all variants share
interface ButtonBaseProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

// Polymorphic props with generic
type ButtonProps<E extends ElementType> = ButtonBaseProps & {
  as?: E;
} & Omit<ComponentPropsWithoutRef<E>, keyof ButtonBaseProps | 'as'>;

// Component with generic default
function Button<E extends ElementType = 'button'>({
  as,
  variant = 'primary',
  children,
  ...props
}: ButtonProps<E>) {
  const Component = as || 'button';
  return (
    <Component className={`btn-${variant}`} {...props}>
      {children}
    </Component>
  );
}

// Usage - fully typed!
<Button onClick={() => {}}>Click</Button>
<Button as="a" href="/about">Link</Button>
<Button as={Link} to="/dashboard">Router Link</Button>

// ❌ Type error - href not valid on button
<Button href="/about">Error</Button>

// ❌ Type error - to not valid on anchor
<Button as="a" to="/about">Error</Button>
```

**Reusable Polymorphic Type:**

```typescript
// types/polymorphic.ts
type AsProp<E extends ElementType> = {
  as?: E;
};

type PropsToOmit<E extends ElementType, P> = keyof (AsProp<E> & P);

type PolymorphicComponentProps<
  E extends ElementType,
  Props = {}
> = Props & AsProp<E> & Omit<ComponentPropsWithoutRef<E>, PropsToOmit<E, Props>>;

// Usage
type TextProps<E extends ElementType> = PolymorphicComponentProps<E, {
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'bold';
}>;

function Text<E extends ElementType = 'span'>({
  as,
  size = 'md',
  weight = 'normal',
  ...props
}: TextProps<E>) {
  const Component = as || 'span';
  return <Component {...props} />;
}
```

**With forwardRef:**

```typescript
type PolymorphicRef<E extends ElementType> =
  ComponentPropsWithRef<E>['ref'];

type ButtonProps<E extends ElementType> = ButtonBaseProps & {
  as?: E;
} & Omit<ComponentPropsWithoutRef<E>, keyof ButtonBaseProps | 'as'>;

const Button = forwardRef(
  <E extends ElementType = 'button'>(
    { as, ...props }: ButtonProps<E>,
    ref: PolymorphicRef<E>
  ) => {
    const Component = as || 'button';
    return <Component ref={ref} {...props} />;
  }
);
```

**Senior insight:** Polymorphic components enable flexible, type-safe UI libraries. They're complex to type but provide excellent DX. Libraries like Radix and Chakra use this pattern extensively.

---

### Q: How do you use discriminated unions for component variants?

**Answer:**

**Discriminated unions** ensure props are valid combinations using a literal type discriminator.

```typescript
// ❌ Problem: Invalid prop combinations allowed
interface ButtonProps {
  variant: 'button' | 'link' | 'submit';
  href?: string;      // Only for link
  onClick?: () => void; // Only for button
  form?: string;      // Only for submit
}

// Nothing prevents: <Button variant="button" href="..." />

// ✅ Solution: Discriminated union
type ButtonProps =
  | { variant: 'button'; onClick: () => void }
  | { variant: 'link'; href: string; external?: boolean }
  | { variant: 'submit'; form?: string };

function Button(props: ButtonProps) {
  switch (props.variant) {
    case 'button':
      return <button onClick={props.onClick}>Click</button>;
    case 'link':
      return <a href={props.href} target={props.external ? '_blank' : undefined}>Link</a>;
    case 'submit':
      return <button type="submit" form={props.form}>Submit</button>;
  }
}

// ✅ Valid
<Button variant="button" onClick={() => {}} />
<Button variant="link" href="/about" external />
<Button variant="submit" form="myForm" />

// ❌ Type errors
<Button variant="button" href="/about" />  // href not allowed
<Button variant="link" onClick={() => {}} />  // onClick not allowed
```

**Real-World Example - Modal:**

```typescript
type ModalProps =
  | {
      type: 'alert';
      title: string;
      message: string;
      onClose: () => void;
    }
  | {
      type: 'confirm';
      title: string;
      message: string;
      onConfirm: () => void;
      onCancel: () => void;
    }
  | {
      type: 'custom';
      title: string;
      children: React.ReactNode;
      onClose: () => void;
    };

function Modal(props: ModalProps) {
  return (
    <div className="modal">
      <h2>{props.title}</h2>

      {props.type === 'alert' && (
        <>
          <p>{props.message}</p>
          <button onClick={props.onClose}>OK</button>
        </>
      )}

      {props.type === 'confirm' && (
        <>
          <p>{props.message}</p>
          <button onClick={props.onCancel}>Cancel</button>
          <button onClick={props.onConfirm}>Confirm</button>
        </>
      )}

      {props.type === 'custom' && props.children}
    </div>
  );
}
```

**API Response Handling:**

```typescript
type ApiResponse<T> =
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'success'; data: T };

function renderResponse<T>(
  response: ApiResponse<T>,
  renderData: (data: T) => React.ReactNode
) {
  switch (response.status) {
    case 'loading':
      return <Spinner />;
    case 'error':
      return <Error message={response.error.message} />;
    case 'success':
      return renderData(response.data);
  }
}
```

**Senior insight:** Discriminated unions are powerful for modeling mutually exclusive states. They make impossible states impossible and give exhaustive type checking in switch statements. Use when props have dependencies on each other.

---

### Q: How do you type a custom hook that returns different values based on options?

**Answer:**

Using function overloads and conditional types to create flexible, type-safe hooks.

**Function Overloads Pattern:**

```typescript
// Hook that can return data in different formats
interface User {
  id: string;
  name: string;
  email: string;
}

// Overload signatures
function useUser(id: string): { user: User | null; loading: boolean };
function useUser(id: string, options: { select: 'name' }): { user: string | null; loading: boolean };
function useUser(id: string, options: { select: 'email' }): { user: string | null; loading: boolean };

// Implementation signature
function useUser(id: string, options?: { select?: 'name' | 'email' }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(id).then(setUser).finally(() => setLoading(false));
  }, [id]);

  if (options?.select === 'name') {
    return { user: user?.name ?? null, loading };
  }
  if (options?.select === 'email') {
    return { user: user?.email ?? null, loading };
  }

  return { user, loading };
}

// Usage - TypeScript knows the return type!
const { user: fullUser } = useUser('123');         // User | null
const { user: name } = useUser('123', { select: 'name' }); // string | null
```

**Generic Conditional Return Types:**

```typescript
// More flexible: Generic with conditional type
type UseQueryResult<T, TSelect = T> = {
  data: TSelect | undefined;
  loading: boolean;
  error: Error | null;
};

function useQuery<T, TSelect = T>(
  queryFn: () => Promise<T>,
  options?: { select?: (data: T) => TSelect }
): UseQueryResult<T, TSelect> {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    queryFn()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const selectedData = options?.select && data
    ? options.select(data)
    : data;

  return {
    data: selectedData as TSelect | undefined,
    loading,
    error,
  };
}

// Usage
const { data: users } = useQuery(() => fetchUsers());
// data: User[] | undefined

const { data: names } = useQuery(
  () => fetchUsers(),
  { select: (users) => users.map(u => u.name) }
);
// data: string[] | undefined (inferred from select!)
```

**Discriminated Union Return Type:**

```typescript
// Hook that returns different shapes based on status
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'success'; data: T };

function useAsync<T>(asyncFn: () => Promise<T>): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ status: 'idle' });

  const execute = useCallback(() => {
    setState({ status: 'loading' });
    asyncFn()
      .then((data) => setState({ status: 'success', data }))
      .catch((error) => setState({ status: 'error', error }));
  }, [asyncFn]);

  return state;
}

// Usage with type narrowing
function Component() {
  const state = useAsync(fetchData);

  if (state.status === 'loading') {
    return <Spinner />;
  }

  if (state.status === 'error') {
    return <Error message={state.error.message} />; // error is available!
  }

  if (state.status === 'success') {
    return <div>{state.data}</div>; // data is available!
  }

  return <button onClick={execute}>Load</button>;
}
```

**Conditional Types Based on Options:**

```typescript
// Hook that returns array or single item based on option
interface UseFetchOptions<TMultiple extends boolean> {
  multiple?: TMultiple;
}

type UseFetchReturn<T, TMultiple extends boolean> =
  TMultiple extends true ? T[] : T | null;

function useFetch<T, TMultiple extends boolean = false>(
  url: string,
  options?: UseFetchOptions<TMultiple>
): UseFetchReturn<T, TMultiple> {
  // Implementation
}

// Usage
const singleUser = useFetch<User>('/api/user/1');
// Type: User | null

const allUsers = useFetch<User>('/api/users', { multiple: true });
// Type: User[]
```

**Senior insight:** Function overloads are best for a small, fixed set of variations. Generic conditional types scale better for complex combinations. Use discriminated unions when the return structure itself varies (not just the type of a property). TypeScript 5.0+ has better inference - prefer generics over overloads when possible for cleaner code.

---

### Q: How do you handle typing for Context with possibly null values?

**Answer:**

Context often starts as null/undefined before being initialized. Here are patterns to handle this type-safely.

**The Problem:**

```typescript
// ❌ Annoying: Every consumer must handle null
const UserContext = createContext<User | null>(null);

function useUser() {
  const user = useContext(UserContext);
  return user; // User | null - consumers always check null
}

function Component() {
  const user = useUser();
  return <div>{user?.name}</div>; // Optional chaining everywhere
}
```

**Pattern 1: Non-null Assertion Hook:**

```typescript
const UserContext = createContext<User | null>(null);

function useUser(): User {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error('useUser must be used within UserProvider');
  }

  return user; // Type is now User (not null)
}

// Usage - no null checks needed!
function Profile() {
  const user = useUser();
  return <div>{user.name}</div>; // Safe!
}
```

**Pattern 2: Create Context with Undefined Check:**

```typescript
// Generic helper for creating typed context
function createSafeContext<T>(name: string) {
  const Context = createContext<T | undefined>(undefined);

  function useContext_() {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error(`use${name} must be used within ${name}Provider`);
    }
    return context;
  }

  return [Context.Provider, useContext_] as const;
}

// Usage
interface AuthContextType {
  user: User | null;
  login: (creds: Credentials) => Promise<void>;
  logout: () => void;
}

const [AuthProvider, useAuth] = createSafeContext<AuthContextType>('Auth');

// In provider
function AuthProviderComponent({ children }) {
  const value: AuthContextType = {
    user: /* ... */,
    login: /* ... */,
    logout: /* ... */,
  };

  return <AuthProvider value={value}>{children}</AuthProvider>;
}

// In consumer - useAuth() always returns AuthContextType
function LoginButton() {
  const { user, logout } = useAuth(); // Never undefined!
}
```

**Pattern 3: Separate Loading State:**

```typescript
// Context value explicitly handles loading state
interface UserContextType {
  user: User | null;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// Consumer handles loading explicitly
function Profile() {
  const { user, isLoading } = useUser();

  if (isLoading) return <Spinner />;
  if (!user) return <LoginPrompt />;

  return <div>{user.name}</div>;
}
```

**Pattern 4: Default Value with Type Guard:**

```typescript
// Provide a "fake" default that's detectable
const CONTEXT_UNINITIALIZED = Symbol('CONTEXT_UNINITIALIZED');

type UserContextValue = User | typeof CONTEXT_UNINITIALIZED;

const UserContext = createContext<UserContextValue>(CONTEXT_UNINITIALIZED);

function useUser(): User {
  const value = useContext(UserContext);

  if (value === CONTEXT_UNINITIALIZED) {
    throw new Error('useUser must be used within UserProvider');
  }

  return value;
}
```

**Pattern 5: Optional Context (When Missing is OK):**

```typescript
// Sometimes you WANT to handle missing context
const ThemeContext = createContext<Theme | null>(null);

function useTheme(): Theme {
  const theme = useContext(ThemeContext);
  // Return default if not in provider
  return theme ?? defaultTheme;
}

// Or provide both hooks
function useThemeOptional(): Theme | null {
  return useContext(ThemeContext);
}

function useThemeRequired(): Theme {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error('...');
  return theme;
}
```

**Typing Context with Dispatch:**

```typescript
// For reducer-based context
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };
type State = { count: number };

interface CounterContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within CounterProvider');
  }
  return context;
}
```

**Senior insight:** The throw-if-missing pattern (Pattern 1/2) is most common and provides the best DX. It catches bugs early (missing provider) and eliminates null checks in consumers. For contexts where missing IS valid (theming, feature flags), use Pattern 5 with defaults. TypeScript 5.4+ has improved narrowing, but explicit hooks remain clearer.

---

### Q: What are common TypeScript patterns for handling API responses?

**Answer:**

Type-safe API handling involves: defining response shapes, validating at runtime, and handling errors gracefully.

**Typed Fetch Wrapper:**

```typescript
// Generic fetch with type safety
async function fetchApi<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new ApiError(response.status, await response.text());
  }

  return response.json() as Promise<T>;
}

// Custom error class
class ApiError extends Error {
  constructor(
    public status: number,
    public body: string
  ) {
    super(`API Error: ${status}`);
    this.name = 'ApiError';
  }
}

// Usage
interface User {
  id: string;
  name: string;
  email: string;
}

const user = await fetchApi<User>('/api/users/123');
// TypeScript knows: user.id, user.name, user.email
```

**Runtime Validation with Zod:**

```typescript
import { z } from 'zod';

// Define schema AND type together
const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email(),
  createdAt: z.string().datetime().transform(s => new Date(s)),
});

type User = z.infer<typeof UserSchema>; // Type derived from schema!

// Validated fetch
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json();

  // Throws if data doesn't match schema
  return UserSchema.parse(data);
}

// Safe parse (doesn't throw)
function parseUser(data: unknown): User | null {
  const result = UserSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
  console.error('Invalid user data:', result.error);
  return null;
}
```

**Type Guards for Response Handling:**

```typescript
// API might return different shapes
type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: { code: string; message: string } };

// Type guard
function isSuccessResponse<T>(
  response: ApiResponse<T>
): response is { success: true; data: T } {
  return response.success === true;
}

// Usage
async function fetchUser(id: string) {
  const response = await fetchApi<ApiResponse<User>>(`/api/users/${id}`);

  if (isSuccessResponse(response)) {
    return response.data; // Type: User
  } else {
    throw new Error(response.error.message); // error is typed!
  }
}
```

**Branded Types for IDs:**

```typescript
// Prevent mixing up different ID types
type UserId = string & { readonly brand: unique symbol };
type PostId = string & { readonly brand: unique symbol };

// Helper to create branded IDs
function createUserId(id: string): UserId {
  return id as UserId;
}

function createPostId(id: string): PostId {
  return id as PostId;
}

// Now you can't mix them up!
async function fetchUser(id: UserId): Promise<User> {
  return fetchApi(`/api/users/${id}`);
}

async function fetchPost(id: PostId): Promise<Post> {
  return fetchApi(`/api/posts/${id}`);
}

// Usage
const userId = createUserId('123');
const postId = createPostId('456');

fetchUser(userId); // ✅ OK
fetchUser(postId); // ❌ Error: PostId not assignable to UserId
```

**Result Type Pattern:**

```typescript
// Explicit success/failure handling
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

async function fetchUserSafe(id: string): Promise<Result<User, ApiError>> {
  try {
    const user = await fetchApi<User>(`/api/users/${id}`);
    return { ok: true, value: user };
  } catch (error) {
    if (error instanceof ApiError) {
      return { ok: false, error };
    }
    return { ok: false, error: new ApiError(500, 'Unknown error') };
  }
}

// Usage forces handling both cases
const result = await fetchUserSafe('123');
if (result.ok) {
  console.log(result.value.name); // TypeScript knows it's User
} else {
  console.error(result.error.status); // TypeScript knows it's ApiError
}
```

**Typed React Query:**

```typescript
import { useQuery, useMutation } from '@tanstack/react-query';

// Fully typed queries
function useUser(id: string) {
  return useQuery({
    queryKey: ['user', id] as const,
    queryFn: () => fetchApi<User>(`/api/users/${id}`),
  });
}

// Typed mutations
function useUpdateUser() {
  return useMutation({
    mutationFn: (data: { id: string; updates: Partial<User> }) =>
      fetchApi<User>(`/api/users/${data.id}`, {
        method: 'PATCH',
        body: JSON.stringify(data.updates),
      }),
  });
}

// Usage
function Profile({ id }: { id: string }) {
  const { data: user, isLoading, error } = useUser(id);
  const updateUser = useUpdateUser();

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;
  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1> {/* Fully typed! */}
      <button
        onClick={() => updateUser.mutate({ id, updates: { name: 'New Name' } })}
      >
        Update
      </button>
    </div>
  );
}
```

**Senior insight:** TypeScript types are erased at runtime - API responses can't be trusted to match types. Use Zod/io-ts for runtime validation on untrusted boundaries (external APIs). For internal APIs you control, type-only approaches are often sufficient. Branded types prevent ID mix-ups at compile time. The Result pattern makes error handling explicit but adds verbosity - use judiciously.

---

### Q: How do you use template literal types for design tokens and CSS-in-JS?

**Answer:**

Template literal types allow you to create strongly-typed string patterns, perfect for design systems with consistent spacing, colors, and responsive props.

**Basic Template Literal Types:**

```typescript
// Simple pattern matching
type Greeting = `Hello, ${string}!`;
const valid: Greeting = 'Hello, World!'; // ✅
const invalid: Greeting = 'Hi, World!';   // ❌ Type error

// Combining literals
type Size = 'sm' | 'md' | 'lg';
type Breakpoint = 'mobile' | 'tablet' | 'desktop';
type ResponsiveSize = `${Size}-${Breakpoint}`;
// Result: 'sm-mobile' | 'sm-tablet' | 'sm-desktop' | 'md-mobile' | ...
```

**Design Token Spacing:**

```typescript
// Spacing scale (4px base)
type SpacingValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
type SpacingUnit = 'px' | 'rem';
type Spacing = SpacingValue | `${SpacingValue}${SpacingUnit}`;

interface BoxProps {
  padding?: Spacing;
  margin?: Spacing;
  gap?: Spacing;
}

function Box({ padding, margin, gap }: BoxProps) {
  const style = {
    padding: typeof padding === 'number' ? `${padding * 4}px` : padding,
    margin: typeof margin === 'number' ? `${margin * 4}px` : margin,
    gap: typeof gap === 'number' ? `${gap * 4}px` : gap,
  };
  return <div style={style} />;
}

// Usage
<Box padding={4} />        // ✅ 16px
<Box padding="16px" />     // ✅ explicit
<Box padding={7} />        // ❌ Error: 7 not in scale
<Box padding="15px" />     // ❌ Error: not in type
```

**Typed Color Palette:**

```typescript
// Color with opacity variations
type ColorName = 'primary' | 'secondary' | 'success' | 'error' | 'warning';
type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type Color = ColorName | `${ColorName}-${ColorShade}`;

interface TextProps {
  color?: Color;
  bg?: Color;
}

// Map to actual CSS values
const colorMap: Record<Color, string> = {
  'primary': '#3B82F6',
  'primary-50': '#EFF6FF',
  'primary-100': '#DBEAFE',
  'primary-500': '#3B82F6',
  'primary-900': '#1E3A8A',
  // ... etc
};

function Text({ color = 'primary', children }: TextProps & { children: React.ReactNode }) {
  return <span style={{ color: colorMap[color] }}>{children}</span>;
}

// Usage
<Text color="primary-500">Hello</Text>  // ✅
<Text color="brand">Hello</Text>        // ❌ Error: not a valid color
```

**Responsive Props (Tailwind-style):**

```typescript
// Breakpoint prefixed props
type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type SpacingKey = 'p' | 'px' | 'py' | 'pt' | 'pb' | 'pl' | 'pr' | 'm' | 'mx' | 'my';
type SpacingScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;

// Generate all responsive spacing classes
type ResponsiveSpacing =
  | `${SpacingKey}-${SpacingScale}`
  | `${Breakpoint}:${SpacingKey}-${SpacingScale}`;

// Example: 'p-4' | 'sm:p-4' | 'md:p-4' | 'px-2' | 'lg:mx-8' | ...

interface TailwindProps {
  className?: ResponsiveSpacing | ResponsiveSpacing[];
}

// Type-safe Tailwind-like classes
function classNames(...classes: (ResponsiveSpacing | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Usage
<div className={classNames('p-4', 'md:p-6', 'lg:p-8')} />  // ✅
<div className={classNames('p-4', 'md:p-15')} />           // ❌ 15 not in scale
```

**CSS Grid/Flex Values:**

```typescript
// Typed CSS values
type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GridTemplate = `repeat(${GridCols}, 1fr)` | `${GridCols}fr`;

interface FlexProps {
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: SpacingValue;
}

interface GridProps {
  cols?: GridCols;
  template?: GridTemplate;
  gap?: SpacingValue;
}

function Flex({ direction = 'row', justify = 'start', align = 'stretch', gap = 0 }: FlexProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify === 'between' ? 'space-between' : justify,
        alignItems: align,
        gap: gap * 4,
      }}
    />
  );
}
```

**CSS Custom Properties:**

```typescript
// Typed CSS variables
type CSSVariableName = 'color-primary' | 'color-secondary' | 'spacing-base' | 'font-size-base';
type CSSVariable = `var(--${CSSVariableName})`;

interface ThemedProps {
  color?: Color | CSSVariable;
  spacing?: Spacing | CSSVariable;
}

// Usage
<Box color="var(--color-primary)" spacing="var(--spacing-base)" />
<Box color="var(--invalid-var)" />  // ❌ Error if not in CSSVariableName
```

**Mapped Types for Design Tokens:**

```typescript
// Generate props from token object
const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
} as const;

type SpacingToken = keyof typeof spacing;

// Auto-generate responsive spacing props
type SpacingProps = {
  [K in `${'p' | 'm' | 'gap'}${'' | 'x' | 'y' | 't' | 'b' | 'l' | 'r'}`]?: SpacingToken;
};

// Result: { p?: 'xs'|'sm'|..., px?: ..., py?: ..., m?: ..., gap?: ... }
```

**With styled-components:**

```typescript
import styled from 'styled-components';

type ThemeColor = 'primary' | 'secondary' | 'success' | 'error';
type ThemeSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  variant?: ThemeColor;
  size?: ThemeSpacing;
}

const Button = styled.button<ButtonProps>`
  background: ${({ variant = 'primary', theme }) => theme.colors[variant]};
  padding: ${({ size = 'md', theme }) => theme.spacing[size]};
`;

// Theme type ensures colors/spacing keys exist
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<ThemeColor, string>;
    spacing: Record<ThemeSpacing, string>;
  }
}
```

**Senior insight:** Template literal types shine for design systems with a finite set of valid values. They catch typos at compile time and provide excellent autocomplete. However, they add complexity - use them when you have a stable design token system. For prototyping, plain strings with runtime validation may be simpler. TypeScript 4.1+ supports template literal types; ensure your tsconfig target supports them.

---

### Q: How do you type generic components in React?

**Answer:**

Generic components let you write reusable, type-safe components that work with any data type while preserving type information through the component tree.

**Basic Generic Component:**

```typescript
// Generic list that works with any item type
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}

// Usage - T is inferred from items
interface User {
  id: string;
  name: string;
  email: string;
}

const users: User[] = [{ id: '1', name: 'John', email: 'john@example.com' }];

<List
  items={users}
  keyExtractor={(user) => user.id}  // user is User
  renderItem={(user) => <span>{user.name}</span>}  // user is User
/>
```

**Generic with Constraints:**

```typescript
// Constraint: items must have an 'id' property
interface WithId {
  id: string | number;
}

interface SelectProps<T extends WithId> {
  items: T[];
  value: T | null;
  onChange: (item: T) => void;
  getLabel: (item: T) => string;
}

function Select<T extends WithId>({
  items,
  value,
  onChange,
  getLabel,
}: SelectProps<T>) {
  return (
    <select
      value={value?.id ?? ''}
      onChange={(e) => {
        const selected = items.find(item => String(item.id) === e.target.value);
        if (selected) onChange(selected);
      }}
    >
      <option value="">Select...</option>
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {getLabel(item)}
        </option>
      ))}
    </select>
  );
}

// Usage
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [];

<Select
  items={products}
  value={selectedProduct}
  onChange={setSelectedProduct}  // (item: Product) => void
  getLabel={(p) => `${p.name} - $${p.price}`}  // p is Product
/>

// ❌ Error: type without 'id'
<Select items={[{ name: 'Test' }]} />  // Error: missing 'id'
```

**Generic Table Component:**

```typescript
interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
  width?: string;
}

interface TableProps<T extends WithId> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
}

function Table<T extends WithId>({
  data,
  columns,
  onRowClick,
  isLoading,
}: TableProps<T>) {
  if (isLoading) return <Skeleton />;

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} style={{ width: col.width }}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            onClick={() => onRowClick?.(item)}
            style={{ cursor: onRowClick ? 'pointer' : undefined }}
          >
            {columns.map((col) => (
              <td key={String(col.key)}>
                {col.render
                  ? col.render(item)
                  : String(item[col.key as keyof T] ?? '')}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Usage
<Table
  data={users}
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    {
      key: 'actions',
      header: '',
      render: (user) => <button onClick={() => deleteUser(user.id)}>Delete</button>,
    },
  ]}
  onRowClick={(user) => navigate(`/users/${user.id}`)}  // user is User
/>
```

**Generic with Default Type:**

```typescript
// Default to unknown if not specified
interface FormFieldProps<T = unknown> {
  value: T;
  onChange: (value: T) => void;
  validate?: (value: T) => string | undefined;
}

function FormField<T = unknown>({ value, onChange, validate }: FormFieldProps<T>) {
  const error = validate?.(value);
  // ...
}

// Without explicit type, T = unknown
<FormField value={name} onChange={setName} />

// With explicit type
<FormField<number>
  value={age}
  onChange={setAge}
  validate={(v) => v < 0 ? 'Must be positive' : undefined}
/>
```

**Multiple Generics:**

```typescript
// Transform data from one type to another
interface TransformListProps<TInput, TOutput> {
  items: TInput[];
  transform: (item: TInput) => TOutput;
  renderItem: (item: TOutput) => React.ReactNode;
  keyExtractor: (item: TInput) => string;
}

function TransformList<TInput, TOutput>({
  items,
  transform,
  renderItem,
  keyExtractor,
}: TransformListProps<TInput, TOutput>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>
          {renderItem(transform(item))}
        </li>
      ))}
    </ul>
  );
}

// Usage
interface ApiUser {
  user_id: string;
  full_name: string;
}

interface DisplayUser {
  id: string;
  name: string;
}

<TransformList
  items={apiUsers}
  transform={(user) => ({ id: user.user_id, name: user.full_name })}
  renderItem={(user) => <span>{user.name}</span>}  // user is DisplayUser
  keyExtractor={(user) => user.user_id}  // user is ApiUser
/>
```

**Generic with forwardRef:**

```typescript
// Generic forwardRef is tricky - need type assertion
interface InputProps<T> {
  value: T;
  onChange: (value: T) => void;
}

// Option 1: Factory function
function createGenericInput<T>() {
  return forwardRef<HTMLInputElement, InputProps<T>>(
    function GenericInput({ value, onChange }, ref) {
      return (
        <input
          ref={ref}
          value={String(value)}
          onChange={(e) => onChange(e.target.value as T)}
        />
      );
    }
  );
}

const StringInput = createGenericInput<string>();
const NumberInput = createGenericInput<number>();

// Option 2: Type assertion on component
interface GenericInputProps<T> extends InputProps<T> {
  ref?: React.Ref<HTMLInputElement>;
}

function GenericInput<T>({ value, onChange, ref }: GenericInputProps<T>) {
  return (
    <input
      ref={ref}
      value={String(value)}
      onChange={(e) => onChange(e.target.value as T)}
    />
  );
}

// Cast to preserve generic
const ForwardedInput = forwardRef(GenericInput) as <T>(
  props: InputProps<T> & { ref?: React.Ref<HTMLInputElement> }
) => React.ReactElement;
```

**Generic Hooks:**

```typescript
// Generic custom hook
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}

// Usage - type is inferred
const [user, setUser] = useLocalStorage('user', { name: '', email: '' });
// user: { name: string; email: string }
```

**Senior insight:** Generics make components reusable while keeping type safety. Key patterns: (1) Use constraints (`extends`) to ensure required properties, (2) Provide defaults for common cases, (3) Keep generics simple - if you have 4+ type parameters, consider splitting the component. Generic + forwardRef is awkward in TypeScript - consider exposing ref via a prop or using a factory pattern.

---

### Q: What are advanced conditional types and how do you use them with React?

**Answer:**

Conditional types let you create types that depend on other types, enabling sophisticated type transformations. They're essential for building type-safe utility types and complex component APIs.

**Basic Conditional Types:**

```typescript
// Syntax: T extends U ? X : Y
// "If T is assignable to U, the type is X, otherwise Y"

type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;  // true
type B = IsString<42>;       // false

// With never for filtering
type NonNullable<T> = T extends null | undefined ? never : T;

type C = NonNullable<string | null>;  // string
```

**Extracting Types with `infer`:**

```typescript
// infer declares a type variable within the conditional
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type D = GetReturnType<() => string>;  // string
type E = GetReturnType<(x: number) => boolean>;  // boolean

// Extract props type from a component
type GetProps<T> = T extends React.ComponentType<infer P> ? P : never;

type ButtonProps = GetProps<typeof Button>;  // { onClick: () => void; ... }

// Extract array element type
type ArrayElement<T> = T extends (infer E)[] ? E : never;

type F = ArrayElement<string[]>;  // string
type G = ArrayElement<User[]>;    // User
```

**React-Specific Conditional Types:**

```typescript
// Extract ref type from a component
type GetRefType<T> = T extends React.ForwardRefExoticComponent<
  React.RefAttributes<infer R>
>
  ? R
  : T extends React.ComponentType<{ ref?: React.Ref<infer R> }>
  ? R
  : never;

type InputRef = GetRefType<typeof MyInput>;  // HTMLInputElement

// Extract children type
type ChildrenType<T> = T extends { children: infer C } ? C : never;

// Conditionally require props
type RequireIfTrue<T, K extends keyof T, Condition extends boolean> =
  Condition extends true
    ? T & Required<Pick<T, K>>
    : T & Partial<Pick<T, K>>;

interface BaseFormProps {
  onSubmit: () => void;
  validationSchema?: object;
  validateOnChange?: boolean;
}

// If validateOnChange is true, validationSchema is required
type FormProps<ValidateOnChange extends boolean = false> =
  RequireIfTrue<BaseFormProps, 'validationSchema', ValidateOnChange>;

// Usage
const propsA: FormProps<false> = { onSubmit: () => {} };  // ✅ schema optional
const propsB: FormProps<true> = { onSubmit: () => {} };   // ❌ Error: missing validationSchema
const propsC: FormProps<true> = { onSubmit: () => {}, validationSchema: {} };  // ✅
```

**Mapped Conditional Types:**

```typescript
// Transform all properties conditionally
type OptionalIfFunction<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? T[K] | undefined
    : T[K];
};

interface ButtonProps {
  label: string;
  onClick: () => void;
  onHover: () => void;
}

type RelaxedButtonProps = OptionalIfFunction<ButtonProps>;
// { label: string; onClick?: () => void; onHover?: () => void; }

// Make certain keys required based on condition
type RequireKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

type ControlledInputProps = RequireKeys<InputProps, 'value' | 'onChange'>;
```

**Conditional Props Pattern:**

```typescript
// Props that depend on each other
type ConditionalProps<TControlled extends boolean> = TControlled extends true
  ? {
      controlled: true;
      value: string;
      onChange: (value: string) => void;
      defaultValue?: never;  // Disallow
    }
  : {
      controlled?: false;
      value?: never;  // Disallow
      onChange?: (value: string) => void;
      defaultValue?: string;
    };

type InputProps<TControlled extends boolean = false> = {
  label: string;
  placeholder?: string;
} & ConditionalProps<TControlled>;

function Input<TControlled extends boolean = false>(
  props: InputProps<TControlled>
) {
  if (props.controlled) {
    // TypeScript knows: value and onChange exist
    return <input value={props.value} onChange={(e) => props.onChange(e.target.value)} />;
  }
  // TypeScript knows: defaultValue might exist
  return <input defaultValue={props.defaultValue} />;
}

// Usage
<Input label="Name" defaultValue="John" />           // ✅ Uncontrolled
<Input label="Name" controlled value={v} onChange={setV} />  // ✅ Controlled
<Input label="Name" controlled defaultValue="John" />  // ❌ Error: can't mix
<Input label="Name" value={v} />                      // ❌ Error: need controlled=true
```

**Distributive Conditional Types:**

```typescript
// Conditional types distribute over unions automatically
type Wrapped<T> = T extends any ? { value: T } : never;

type Distributed = Wrapped<string | number>;
// Result: { value: string } | { value: number }

// Prevent distribution with [T] extends [any]
type NonDistributed<T> = [T] extends [any] ? { value: T } : never;

type NotDistributed = NonDistributed<string | number>;
// Result: { value: string | number }

// Useful for filtering union members
type FilterByType<T, U> = T extends U ? T : never;

type OnlyStrings = FilterByType<string | number | boolean, string>;  // string
type OnlyFunctions = FilterByType<string | (() => void) | number, Function>;  // () => void
```

**Template Literal Conditional Types:**

```typescript
// Extract parts of string literal types
type ExtractRoute<T extends string> =
  T extends `/${infer Segment}/${infer Rest}`
    ? Segment | ExtractRoute<`/${Rest}`>
    : T extends `/${infer Segment}`
    ? Segment
    : never;

type RouteSegments = ExtractRoute<'/users/123/posts'>;
// Result: 'users' | '123' | 'posts'

// Build route params type
type ExtractParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? Param | ExtractParams<Rest>
    : T extends `${string}:${infer Param}`
    ? Param
    : never;

type Params = ExtractParams<'/users/:userId/posts/:postId'>;
// Result: 'userId' | 'postId'

// Full route params type
type RouteParams<T extends string> = {
  [K in ExtractParams<T>]: string;
};

type UserPostParams = RouteParams<'/users/:userId/posts/:postId'>;
// Result: { userId: string; postId: string }
```

**Complex Component Prop Types:**

```typescript
// Component that changes props based on 'mode'
type Mode = 'view' | 'edit' | 'create';

type BaseProps = {
  title: string;
};

type ModeSpecificProps<M extends Mode> =
  M extends 'view'
    ? { data: User; onEdit?: () => void }
    : M extends 'edit'
    ? { data: User; onSave: (user: User) => void; onCancel: () => void }
    : M extends 'create'
    ? { onSave: (user: Omit<User, 'id'>) => void; onCancel: () => void }
    : never;

type UserFormProps<M extends Mode> = BaseProps & { mode: M } & ModeSpecificProps<M>;

function UserForm<M extends Mode>(props: UserFormProps<M>) {
  // Implementation based on mode
  if (props.mode === 'view') {
    // TypeScript knows: props.data exists
    return <div>{props.data.name}</div>;
  }
  // ... etc
}

// Usage
<UserForm mode="view" title="User" data={user} />
<UserForm mode="edit" title="Edit" data={user} onSave={save} onCancel={cancel} />
<UserForm mode="create" title="New" onSave={create} onCancel={cancel} />

// ❌ Error: missing onSave for edit mode
<UserForm mode="edit" title="Edit" data={user} />
```

**Senior insight:** Conditional types are powerful but can hurt readability. Use them for: (1) Library/utility types that need flexibility, (2) Enforcing prop relationships, (3) Type transformations. Avoid deep nesting - if your conditional type is 4+ levels deep, consider simplifying or using discriminated unions instead. The `infer` keyword is key for extracting types - master it for advanced patterns.

---

### Q: How do you create type-safe event handlers in React?

**Answer:**

React has a comprehensive type system for events. Understanding it helps you write type-safe handlers and avoid common type errors.

**React Event Types Hierarchy:**

```typescript
// Base type - all events extend this
React.SyntheticEvent<T = Element, E = Event>

// Specific event types
React.MouseEvent<T = Element>        // click, mouseenter, etc.
React.KeyboardEvent<T = Element>     // keydown, keyup, etc.
React.ChangeEvent<T = Element>       // input change
React.FormEvent<T = Element>         // form submit
React.FocusEvent<T = Element>        // focus, blur
React.DragEvent<T = Element>         // drag and drop
React.TouchEvent<T = Element>        // touch events
React.WheelEvent<T = Element>        // scroll wheel
React.AnimationEvent<T = Element>    // CSS animations
React.TransitionEvent<T = Element>   // CSS transitions
React.ClipboardEvent<T = Element>    // copy, cut, paste
React.PointerEvent<T = Element>      // unified pointer events
```

**Basic Event Handler Typing:**

```typescript
// Inline handlers - type is inferred
<button onClick={(e) => {
  e.preventDefault();  // ✅ e is MouseEvent<HTMLButtonElement>
  console.log(e.currentTarget.textContent);
}}>
  Click
</button>

// Separate handler function
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget.disabled);  // ✅ knows it's a button
};

<button onClick={handleClick}>Click</button>

// Using event handler type
const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  // e is automatically typed
};
```

**currentTarget vs target:**

```typescript
// currentTarget - element the handler is attached to (correctly typed)
// target - element that triggered the event (typed as EventTarget)

function handleClick(e: React.MouseEvent<HTMLDivElement>) {
  // currentTarget is always the div we attached onClick to
  e.currentTarget.style.background = 'red';  // ✅ HTMLDivElement

  // target could be any element inside the div that was clicked
  e.target;  // EventTarget - very generic

  // Type guard to narrow target
  if (e.target instanceof HTMLButtonElement) {
    e.target.disabled = true;  // ✅ now knows it's a button
  }
}

// Common pattern: assert target type
function handleClick(e: React.MouseEvent<HTMLDivElement>) {
  const target = e.target as HTMLElement;  // Safe for most cases
  console.log(target.tagName);
}
```

**Form and Input Events:**

```typescript
// Input change event
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  const value = e.target.value;  // string
  const name = e.target.name;    // string
  const checked = e.target.checked;  // boolean (for checkboxes)
}

// Select change event
function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
  const value = e.target.value;
  const selectedIndex = e.target.selectedIndex;
  const selectedOption = e.target.options[selectedIndex];
}

// Textarea change event
function handleTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
  const value = e.target.value;
  const rows = e.target.rows;
}

// Form submit event
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  // Access form data
  const formData = new FormData(e.currentTarget);
  const name = formData.get('name');  // FormDataEntryValue | null

  // Type-safe form access
  const form = e.currentTarget;
  const nameInput = form.elements.namedItem('name') as HTMLInputElement;
  const nameValue = nameInput.value;  // string
}
```

**Generic Event Handler:**

```typescript
// Handler that works with multiple input types
function createChangeHandler<T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
  setter: (value: string) => void
) {
  return (e: React.ChangeEvent<T>) => {
    setter(e.target.value);
  };
}

// Usage
const handleNameChange = createChangeHandler<HTMLInputElement>(setName);
const handleCountryChange = createChangeHandler<HTMLSelectElement>(setCountry);

// Typed form handler factory
function createFormHandler<TFormData>(
  onSubmit: (data: TFormData) => void
) {
  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as TFormData;
    onSubmit(data);
  };
}

interface LoginForm {
  email: string;
  password: string;
}

const handleLogin = createFormHandler<LoginForm>((data) => {
  console.log(data.email, data.password);  // both typed as string
});
```

**Keyboard Event Patterns:**

```typescript
function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  // Key identification
  if (e.key === 'Enter') {
    e.preventDefault();
    submitForm();
  }

  if (e.key === 'Escape') {
    closeModal();
  }

  // Modifier keys
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    save();
  }

  // Deprecated: e.keyCode, e.charCode - use e.key instead
}

// Type-safe key handler map
type KeyHandler = (e: React.KeyboardEvent) => void;
type KeyMap = Partial<Record<string, KeyHandler>>;

function useKeyboardHandlers(keyMap: KeyMap) {
  return (e: React.KeyboardEvent) => {
    const handler = keyMap[e.key];
    if (handler) {
      e.preventDefault();
      handler(e);
    }
  };
}

// Usage
const handleKeyDown = useKeyboardHandlers({
  Enter: () => submit(),
  Escape: () => cancel(),
  ArrowDown: () => selectNext(),
  ArrowUp: () => selectPrev(),
});
```

**Custom Event Types:**

```typescript
// When you need to pass additional data
interface CustomButtonEvent extends React.MouseEvent<HTMLButtonElement> {
  // Can't actually extend, but can create wrapper type
}

// Better: Create a handler type with extra params
type ButtonClickHandler = (
  e: React.MouseEvent<HTMLButtonElement>,
  data: { id: string; action: string }
) => void;

interface ActionButtonProps {
  id: string;
  action: string;
  onClick: ButtonClickHandler;
}

function ActionButton({ id, action, onClick }: ActionButtonProps) {
  return (
    <button onClick={(e) => onClick(e, { id, action })}>
      {action}
    </button>
  );
}

// Usage
<ActionButton
  id="123"
  action="delete"
  onClick={(e, data) => {
    console.log(data.id, data.action);  // Fully typed
  }}
/>
```

**Event Handler Component Props:**

```typescript
// Component that accepts standard event handlers
interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> {
  // Override with custom types
  value: string;
  onChange: (value: string) => void;  // Simplified from ChangeEvent
  onClear?: () => void;
}

function Input({ value, onChange, onClear, ...props }: InputProps) {
  return (
    <div>
      <input
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}  // Wrap native event
      />
      {onClear && <button onClick={onClear}>×</button>}
    </div>
  );
}

// Standard event handler types as props
interface ComponentProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
```

**Debounced Event Handlers:**

```typescript
// Type-safe debounced handler
function useDebouncedCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    ((...args: Parameters<T>) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    }) as T,
    [callback, delay]
  );
}

// Usage
const handleSearch = useDebouncedCallback(
  (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  },
  300
);

<input onChange={handleSearch} />
```

**Senior insight:** The key to mastering React event types is understanding `currentTarget` (always matches the generic parameter) vs `target` (needs type guards). Use `React.MouseEventHandler<T>` et al. when declaring handler props for cleaner signatures. For forms, `FormData` with `Object.fromEntries()` is type-safe with assertion. When wrapping native elements, use `Omit<React.InputHTMLAttributes<...>, 'overriddenProps'>` to inherit all standard props while customizing specific ones.

---
