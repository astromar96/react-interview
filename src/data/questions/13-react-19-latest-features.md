## 13. React 19 & Latest Features

### Q: What are the major new features in React 19?

**Answer:**

React 19 is the biggest update since Hooks. Key features:

**1. React Compiler (Auto-memoization):**
```jsx
// Before React 19 - Manual optimization
const MemoizedComponent = React.memo(({ data }) => {
  const processed = useMemo(() => expensiveCalc(data), [data]);
  const handleClick = useCallback(() => {}, []);
  return <div onClick={handleClick}>{processed}</div>;
});

// React 19 - Compiler handles it automatically
function Component({ data }) {
  const processed = expensiveCalc(data);  // Auto-memoized!
  const handleClick = () => {};            // Auto-memoized!
  return <div onClick={handleClick}>{processed}</div>;
}
```

**2. Actions - Simplified Async State:**
```jsx
// New useActionState hook
function UpdateName() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateName(formData.get('name'));
      if (error) return error;
      redirect('/profile');
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input name="name" />
      <button disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  );
}
```

**3. useOptimistic Hook:**
```jsx
function LikeButton({ initialLikes, postId }) {
  const [likes, setLikes] = useState(initialLikes);
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (current, increment) => current + increment
  );

  async function handleLike() {
    addOptimisticLike(1);  // Instant UI update
    await api.likePost(postId);  // Actual request
    setLikes(l => l + 1);
  }

  return <button onClick={handleLike}>❤️ {optimisticLikes}</button>;
}
```

**4. useFormStatus Hook:**
```jsx
// Access form state from child components
function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

function Form() {
  return (
    <form action={serverAction}>
      <input name="email" />
      <SubmitButton />  {/* Knows form is pending! */}
    </form>
  );
}
```

**5. use() API - Conditional Resource Reading:**
```jsx
// Can call inside conditionals! (unlike hooks)
function Comments({ commentsPromise }) {
  const comments = use(commentsPromise);  // Suspends until resolved

  return comments.map(c => <Comment key={c.id} {...c} />);
}

// Also works with context
function ThemeButton() {
  if (someCondition) {
    const theme = use(ThemeContext);  // ✅ Works in conditionals
    return <button className={theme}>Click</button>;
  }
  return null;
}
```

**6. Document Metadata Support:**
```jsx
// Metadata hoisted automatically
function BlogPost({ post }) {
  return (
    <article>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
      <link rel="canonical" href={post.url} />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
```

**7. ref as a Prop (No forwardRef needed):**
```jsx
// React 19 - ref is just a prop
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}

// Before React 19
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
```

**Senior insight:** React 19's compiler reduces manual optimization needs by 90%. The Actions API moves React toward progressive enhancement - forms work without JS. Evaluate adoption based on ecosystem readiness (libraries, tooling).

---

### Q: How does the React Compiler work?

**Answer:**

The React Compiler (previously "React Forget") automatically adds memoization at build time.

**What It Does:**

```jsx
// Your code
function ProductCard({ product, onAddToCart }) {
  const discountedPrice = product.price * 0.9;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${discountedPrice}</p>
      <button onClick={() => onAddToCart(product.id)}>Add</button>
    </div>
  );
}

// Compiler output (conceptually)
function ProductCard({ product, onAddToCart }) {
  const discountedPrice = useMemo(
    () => product.price * 0.9,
    [product.price]
  );

  const handleClick = useCallback(
    () => onAddToCart(product.id),
    [onAddToCart, product.id]
  );

  return useMemo(() => (
    <div>
      <h2>{product.name}</h2>
      <p>${discountedPrice}</p>
      <button onClick={handleClick}>Add</button>
    </div>
  ), [product.name, discountedPrice, handleClick]);
}
```

**Rules It Enforces:**

The compiler relies on React's rules:
1. Components must be pure (same props → same output)
2. Props/state are immutable
3. Side effects only in useEffect

```jsx
// ❌ Compiler can't optimize - mutation
function BadComponent({ items }) {
  items.sort();  // Mutates prop!
  return <List items={items} />;
}

// ✅ Compiler-friendly
function GoodComponent({ items }) {
  const sorted = [...items].sort();  // New array
  return <List items={sorted} />;
}
```

**Opting Out:**

```jsx
// Disable for specific component
'use no memo';
function UnoptimizedComponent() { ... }

// Or via eslint directive
/* eslint-disable react-compiler/react-compiler */
```

**Senior insight:** The compiler doesn't replace understanding memoization - it automates the boring parts. You still need to understand why mutations break React, why referential equality matters, and when to use refs vs state.

---

### Q: What are Server Actions in React 19?

**Answer:**

**Server Actions** are async functions that run on the server, called directly from client components.

```jsx
// app/actions.js
'use server';

export async function createTodo(formData) {
  const title = formData.get('title');

  await db.todos.create({ title });
  revalidatePath('/todos');

  return { success: true };
}

// app/page.jsx (Client Component)
'use client';

import { createTodo } from './actions';

function TodoForm() {
  return (
    <form action={createTodo}>
      <input name="title" required />
      <button type="submit">Add Todo</button>
    </form>
  );
}
```

**How It Works:**

1. `'use server'` marks function as server action
2. React serializes form data, sends to server
3. Server executes function, returns result
4. React handles revalidation/redirect

**With useActionState:**

```jsx
'use client';

import { useActionState } from 'react';
import { createTodo } from './actions';

function TodoForm() {
  const [state, formAction, isPending] = useActionState(createTodo, null);

  return (
    <form action={formAction}>
      <input name="title" required />
      <button disabled={isPending}>
        {isPending ? 'Adding...' : 'Add Todo'}
      </button>
      {state?.error && <p className="error">{state.error}</p>}
    </form>
  );
}
```

**Validation Pattern:**

```jsx
'use server';

import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function signup(prevState, formData) {
  const parsed = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  // Create user...
  redirect('/dashboard');
}
```

**Senior insight:** Server Actions eliminate API route boilerplate for mutations. They're not a replacement for REST/GraphQL APIs - they're for form submissions and simple mutations within your Next.js app. Be mindful of payload size limits.
