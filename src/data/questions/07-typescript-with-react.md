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
