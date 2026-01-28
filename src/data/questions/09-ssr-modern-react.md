## 9. Server-Side Rendering & Modern React

### Q: Explain SSR vs CSR vs SSG vs ISR

**Answer:**

| Strategy | When HTML Generated | Use Case |
|----------|---------------------|----------|
| **CSR** | In browser (runtime) | Dashboards, apps behind auth |
| **SSR** | On server (per request) | Dynamic content, personalized pages |
| **SSG** | At build time | Blogs, docs, marketing pages |
| **ISR** | Build time + revalidation | E-commerce, news sites |

**CSR (Client-Side Rendering):**
```jsx
// Browser downloads JS, fetches data, renders
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);  // Fetch happens client-side
  }, []);

  return data ? <Content data={data} /> : <Loading />;
}

// Pros: Simple, cheap hosting, good for private content
// Cons: Slow initial load, poor SEO, loading spinners
```

**SSR (Server-Side Rendering):**
```jsx
// Next.js example - runs on EVERY request
export async function getServerSideProps(context) {
  const data = await fetchData(context.params.id);
  return { props: { data } };
}

export default function Page({ data }) {
  return <Content data={data} />;  // HTML sent with data
}

// Pros: SEO, fast first paint, personalized content
// Cons: Server cost, slower TTFB than static
```

**SSG (Static Site Generation):**
```jsx
// Next.js - runs at BUILD time only
export async function getStaticProps() {
  const posts = await fetchAllPosts();
  return { props: { posts } };
}

export async function getStaticPaths() {
  const posts = await fetchAllPosts();
  return {
    paths: posts.map(p => ({ params: { id: p.id } })),
    fallback: false,
  };
}

// Pros: Fastest, cheapest (CDN), secure
// Cons: Stale data, long builds for many pages
```

**ISR (Incremental Static Regeneration):**
```jsx
// Next.js - static + background revalidation
export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: { products },
    revalidate: 60,  // Regenerate every 60 seconds
  };
}

// Pros: Best of SSG + fresh data, scales well
// Cons: Stale-while-revalidate semantics
```

**Decision Tree:**
```
Is content public?
├── No → CSR (or SSR with auth)
└── Yes → Does it change often?
    ├── No → SSG
    └── Yes → Is it personalized per user?
        ├── Yes → SSR
        └── No → ISR or SSR
```

**Senior insight:** Modern frameworks (Next.js 13+) let you mix strategies per route. Use SSG for marketing pages, ISR for product listings, SSR for personalized content, and CSR for highly interactive dashboards - all in one app.

---

### Q: What are Server Components vs Client Components?

**Answer:**

**React Server Components (RSC)** run only on the server and never ship JavaScript to the client.

```jsx
// Server Component (default in Next.js App Router)
// ✅ Can: async/await, database access, file system, secrets
// ❌ Cannot: useState, useEffect, onClick, browser APIs

async function ProductList() {
  const products = await db.products.findMany();  // Direct DB access!

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name} - ${p.price}</li>
      ))}
    </ul>
  );
}

// Client Component
// Add "use client" directive at top
'use client';

import { useState } from 'react';

function AddToCartButton({ productId }) {
  const [loading, setLoading] = useState(false);

  return (
    <button onClick={() => addToCart(productId)}>
      Add to Cart
    </button>
  );
}
```

**Key Differences:**

| Aspect | Server Component | Client Component |
|--------|------------------|------------------|
| Runs on | Server only | Server + Client |
| JS shipped | No | Yes |
| State/Effects | ❌ | ✅ |
| Interactivity | ❌ | ✅ |
| Async/await | ✅ | ❌ (in render) |
| Access secrets | ✅ | ❌ |
| Import client comp | ✅ | ✅ |
| Import server comp | ✅ | ❌ |

**Composition Pattern:**

```jsx
// Server Component (page)
async function ProductPage({ params }) {
  const product = await getProduct(params.id);  // Server

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      {/* Client component for interactivity */}
      <AddToCartButton productId={product.id} />
      <ImageGallery images={product.images} />
    </div>
  );
}
```

**Benefits of Server Components:**

1. **Zero JS for static parts** - Smaller bundle
2. **Direct backend access** - No API layer needed
3. **Automatic code splitting** - Only interactive parts sent
4. **Streaming** - Progressive rendering

**When to Use Client Components:**

- Event handlers (onClick, onChange)
- useState, useEffect, useContext
- Browser APIs (localStorage, geolocation)
- Custom hooks with state
- Third-party libraries using hooks

**Senior insight:** Think of Server Components as the default, add 'use client' only when you need interactivity. Server Components can render Client Components (passing serializable props), but not vice versa. This mental model helps optimize bundle size automatically.

---

### Q: How do you handle authentication in Next.js App Router?

**Answer:**

Authentication in the App Router involves middleware, server actions, and session management across server and client boundaries.

**Architecture Overview:**

```
┌──────────────────────────────────────────────────────────────┐
│                       Next.js App                             │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                    Middleware                           │ │
│  │  • Check session on every request                      │ │
│  │  • Redirect unauthenticated users                      │ │
│  │  • Refresh tokens if needed                            │ │
│  └────────────────────────────────────────────────────────┘ │
│                            ↓                                 │
│  ┌─────────────────────┐  ┌────────────────────────────────┐│
│  │  Server Components  │  │  Server Actions                ││
│  │  • Read session     │  │  • Login/logout                ││
│  │  • Fetch user data  │  │  • Update session              ││
│  └─────────────────────┘  └────────────────────────────────┘│
│                            ↓                                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                  Client Components                      │ │
│  │  • useSession hook for reactive state                  │ │
│  │  • Login forms, logout buttons                         │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

**Middleware for Route Protection:**

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './lib/session';

const protectedRoutes = ['/dashboard', '/settings', '/profile'];
const authRoutes = ['/login', '/signup'];

export async function middleware(request: NextRequest) {
  const session = await getSession(request);
  const { pathname } = request.nextUrl;

  // Redirect authenticated users away from auth pages
  if (authRoutes.includes(pathname) && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirect unauthenticated users to login
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !session) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```

**Session Management with Cookies:**

```typescript
// lib/session.ts
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';

const secretKey = process.env.SESSION_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(key);
}

export async function decrypt(token: string) {
  const { payload } = await jwtVerify(token, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) return null;

  try {
    return await decrypt(sessionCookie);
  } catch {
    return null;
  }
}

export async function createSession(userId: string) {
  const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
  const session = await encrypt({ userId, expires });

  const cookieStore = await cookies();
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires,
    sameSite: 'lax',
    path: '/',
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}
```

**Server Actions for Login/Logout:**

```typescript
// app/actions/auth.ts
'use server';

import { redirect } from 'next/navigation';
import { createSession, deleteSession } from '@/lib/session';
import { verifyCredentials } from '@/lib/auth';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const user = await verifyCredentials(email, password);

  if (!user) {
    return { error: 'Invalid credentials' };
  }

  await createSession(user.id);
  redirect('/dashboard');
}

export async function logout() {
  await deleteSession();
  redirect('/login');
}
```

**Using in Server Components:**

```tsx
// app/dashboard/page.tsx
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { getUser } from '@/lib/db';

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  const user = await getUser(session.userId);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <LogoutButton />
    </div>
  );
}
```

**Client-Side Session Context:**

```tsx
// providers/SessionProvider.tsx
'use client';

import { createContext, useContext } from 'react';

type User = { id: string; name: string; email: string } | null;

const SessionContext = createContext<{ user: User }>({ user: null });

export function SessionProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User;
}) {
  return (
    <SessionContext.Provider value={{ user }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}

// In layout.tsx
export default async function RootLayout({ children }) {
  const session = await getSession();
  const user = session ? await getUser(session.userId) : null;

  return (
    <html>
      <body>
        <SessionProvider user={user}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
```

**Senior insight:** Key decisions in App Router auth: (1) use middleware for route protection (runs on edge, fast), (2) use HTTP-only cookies for sessions (not accessible via JS, more secure), (3) keep auth logic in server actions (credentials never exposed to client), (4) pass minimal user data to client context. For OAuth, consider next-auth/authjs which handles the complexity.

---

### Q: Explain streaming SSR and how Suspense enables it

**Answer:**

**Traditional SSR:**
Server renders entire page → sends complete HTML → client hydrates.
Problem: User waits for slowest component.

**Streaming SSR:**
Server starts sending HTML immediately → streams components as they're ready → client progressively hydrates.

```
Traditional SSR:
[──────────Wait──────────][HTML]────────────────►

Streaming SSR:
[Header][──Wait──][Main]───[Sidebar]──────────►
         ↑ Still streaming while showing content
```

**How Suspense Enables Streaming:**

```tsx
// app/dashboard/page.tsx
import { Suspense } from 'react';

export default function Dashboard() {
  return (
    <div>
      {/* Sent immediately */}
      <Header />

      {/* Streamed when ready */}
      <Suspense fallback={<ChartSkeleton />}>
        <SlowChart />  {/* Async data fetch */}
      </Suspense>

      {/* Also streamed independently */}
      <Suspense fallback={<TableSkeleton />}>
        <SlowTable />  {/* Another async fetch */}
      </Suspense>
    </div>
  );
}

// Server Component with async data
async function SlowChart() {
  const data = await fetchChartData(); // 2 second API call
  return <Chart data={data} />;
}
```

**What the Client Receives:**

```html
<!-- Initial response (immediate) -->
<div>
  <header>...</header>
  <div id="chart">
    <template data-suspense>Chart loading...</template>
  </div>
  <div id="table">
    <template data-suspense>Table loading...</template>
  </div>
</div>

<!-- Streamed later when SlowChart resolves -->
<script>
  $RC('chart', '<div class="chart">...actual chart...</div>');
</script>

<!-- Streamed when SlowTable resolves -->
<script>
  $RC('table', '<div class="table">...actual table...</div>');
</script>
```

**Selective Hydration:**

```tsx
// With streaming, React can hydrate parts of the page independently
<Suspense fallback={<Spinner />}>
  <Comments />  {/* Hydrates when JS loads */}
</Suspense>

// If user interacts with Comments before hydration completes,
// React prioritizes hydrating that component first!
```

**Nested Suspense for Granular Control:**

```tsx
function ProductPage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ProductDetails />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />  {/* Can load independently */}

        <Suspense fallback={<RecommendationsSkeleton />}>
          <Recommendations />  {/* Deepest, loads last */}
        </Suspense>
      </Suspense>
    </Suspense>
  );
}
```

**Loading.tsx in Next.js (Automatic Suspense):**

```tsx
// app/dashboard/loading.tsx
export default function Loading() {
  return <DashboardSkeleton />;
}

// Equivalent to wrapping page in Suspense
// app/dashboard/page.tsx content is automatically wrapped
```

**Benefits of Streaming:**

| Metric | Traditional SSR | Streaming SSR |
|--------|----------------|---------------|
| Time to First Byte | Slow (wait for all) | Fast (immediate) |
| First Contentful Paint | Blocked by slowest | Progressive |
| Time to Interactive | All or nothing | Incremental |
| Perceived Performance | Poor | Much better |

**When Streaming Doesn't Help:**

```tsx
// ❌ No benefit - everything is fast
<Suspense fallback={<Spinner />}>
  <FastComponent />  {/* Already fast, Suspense adds overhead */}
</Suspense>

// ❌ Serial dependencies - can't parallelize
async function Page() {
  const user = await getUser();  // Must wait
  const posts = await getPosts(user.id);  // Depends on user
  return <Posts posts={posts} />;
}

// ✅ Better - parallel fetching
async function Page() {
  const [user, posts] = await Promise.all([
    getUser(),
    getPosts(),  // If possible to fetch independently
  ]);
}
```

**Senior insight:** Streaming is about perceived performance, not actual speed. The total server time might be similar, but users see content faster. Strategic Suspense boundary placement matters: wrap slow, independent sections. Avoid suspense boundaries around fast content (adds overhead) or deeply nested critical content (delays everything below).

---

### Q: What are the trade-offs between Pages Router and App Router in Next.js?

**Answer:**

**Feature Comparison:**

| Feature | Pages Router | App Router |
|---------|--------------|------------|
| Directory | `/pages` | `/app` |
| Components | All client by default | Server by default |
| Data fetching | getServerSideProps, getStaticProps | async components, fetch |
| Layouts | Manual, re-mount on navigation | Nested, persistent |
| Loading states | Manual | Built-in (loading.tsx) |
| Error handling | _error.js, limited | error.tsx, granular |
| Streaming | Limited | Full support |
| Caching | Manual | Automatic + configurable |
| Stable | Yes, mature | Yes (as of Next 13.4) |

**Pages Router (Traditional):**

```tsx
// pages/products/[id].tsx
export async function getServerSideProps({ params }) {
  const product = await fetchProduct(params.id);
  return { props: { product } };
}

export default function ProductPage({ product }) {
  return <div>{product.name}</div>;
}

// Layout requires _app.tsx, re-mounts on every navigation
// pages/_app.tsx
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

**App Router (Modern):**

```tsx
// app/products/[id]/page.tsx
export default async function ProductPage({ params }) {
  const product = await fetchProduct(params.id);
  return <div>{product.name}</div>;
}

// Layouts persist across navigation
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}  {/* Only this changes */}
        <Footer />
      </body>
    </html>
  );
}
```

**When to Use Pages Router:**

1. **Existing large codebase** - Migration cost is high
2. **Team familiarity** - Everyone knows Pages Router well
3. **Specific library compatibility** - Some libs not yet App Router ready
4. **Simple apps** - Don't need streaming, server components
5. **API routes with specific needs** - Pages API routes have some features App Router route handlers don't

**When to Use App Router:**

1. **New projects** - Future-proof, more features
2. **Performance critical** - Server Components reduce JS bundle
3. **Complex layouts** - Nested layouts with shared state
4. **Streaming needs** - Progressive loading UX
5. **Colocation** - Components, tests, styles in same folder

**Migration Considerations:**

```tsx
// ❌ Common migration pain point: 'use client' everywhere
'use client';
function Page() {
  // If you add 'use client' to everything, you lose Server Component benefits
}

// ✅ Better: Split components
// app/products/page.tsx (Server Component)
async function ProductPage() {
  const products = await fetchProducts(); // Server-side
  return <ProductList products={products} />;
}

// components/ProductList.tsx ('use client' only where needed)
'use client';
function ProductList({ products }) {
  const [filter, setFilter] = useState('');
  // Interactive parts
}
```

**Hybrid Approach:**

```
project/
├── app/                    # New features in App Router
│   ├── dashboard/
│   └── settings/
├── pages/                  # Legacy pages, migrate gradually
│   ├── api/               # API routes (can stay)
│   └── old-feature/
```

**Performance Comparison:**

```
Pages Router:
- All JS shipped to client
- Data fetching tied to route
- Layout re-mounts on navigation

App Router:
- Server Components = 0 JS
- Fetch at component level
- Layouts persist (better UX)
- Streaming (faster perceived load)
```

**Senior insight:** For new projects, App Router is the clear choice - it's where Next.js is heading. For existing projects, migrate incrementally: new features in App Router, migrate old pages when you touch them. The mental model shift (server-first vs client-first) is the hardest part. Don't just add 'use client' everywhere - that defeats the purpose.

---

### Q: How do you handle data fetching patterns in Server Components?

**Answer:**

**Fetching in Server Components:**

```tsx
// Direct async/await in component
async function ProductPage({ params }) {
  const product = await fetchProduct(params.id);
  return <div>{product.name}</div>;
}

// fetch() is extended with caching
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache',  // Default: cache indefinitely
    // cache: 'no-store',  // Don't cache (like getServerSideProps)
    // next: { revalidate: 60 },  // ISR: revalidate every 60s
  });
  return res.json();
}
```

**Parallel vs Sequential Fetching:**

```tsx
// ❌ Sequential - slow!
async function Dashboard() {
  const user = await fetchUser();        // Wait...
  const posts = await fetchPosts();      // Wait...
  const analytics = await fetchAnalytics(); // Wait...
  // Total: user + posts + analytics time

  return <div>...</div>;
}

// ✅ Parallel - fast!
async function Dashboard() {
  const [user, posts, analytics] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchAnalytics(),
  ]);
  // Total: max(user, posts, analytics) time

  return <div>...</div>;
}
```

**Streaming with Suspense for Independence:**

```tsx
// Even better: Stream as each resolves
async function Dashboard() {
  return (
    <div>
      {/* User data might be fast */}
      <Suspense fallback={<UserSkeleton />}>
        <UserSection />
      </Suspense>

      {/* Posts might be slow */}
      <Suspense fallback={<PostsSkeleton />}>
        <PostsSection />
      </Suspense>

      {/* Analytics might be slowest */}
      <Suspense fallback={<AnalyticsSkeleton />}>
        <AnalyticsSection />
      </Suspense>
    </div>
  );
}

// Each component fetches its own data
async function UserSection() {
  const user = await fetchUser();
  return <div>{user.name}</div>;
}
```

**Data Fetching Patterns:**

**1. Fetch in Page, Pass Down:**

```tsx
// app/products/page.tsx
async function ProductsPage() {
  const products = await fetchProducts();
  return <ProductList products={products} />;
}

// Pros: Clear data flow, easy to see what page needs
// Cons: Props drilling for deep components
```

**2. Fetch in Each Component:**

```tsx
// Each component fetches what it needs
async function ProductDetails({ id }) {
  const product = await fetchProduct(id);
  return <div>{product.name}</div>;
}

async function ProductReviews({ id }) {
  const reviews = await fetchReviews(id);
  return <ul>{reviews.map(...)}</ul>;
}

// Pros: Colocated data needs, streaming friendly
// Cons: Multiple fetches, need to handle N+1 problems
```

**3. Preload Pattern:**

```tsx
// lib/data.ts
import { cache } from 'react';

// Deduplicated by React cache
export const getProduct = cache(async (id: string) => {
  const res = await fetch(`/api/products/${id}`);
  return res.json();
});

// Can preload in layout, use in page
export const preloadProduct = (id: string) => {
  void getProduct(id);  // Start fetch without awaiting
};

// app/products/[id]/layout.tsx
export default function Layout({ params, children }) {
  preloadProduct(params.id);  // Start fetching early
  return children;
}

// app/products/[id]/page.tsx
async function ProductPage({ params }) {
  const product = await getProduct(params.id);  // Already started!
  return <div>{product.name}</div>;
}
```

**Caching Strategies:**

```tsx
// Static data - cache forever
fetch('https://api/static-data', {
  cache: 'force-cache',
});

// Dynamic data - never cache
fetch('https://api/user-specific', {
  cache: 'no-store',
});

// Time-based revalidation (ISR)
fetch('https://api/products', {
  next: { revalidate: 3600 },  // Revalidate hourly
});

// Tag-based revalidation
fetch('https://api/products', {
  next: { tags: ['products'] },
});

// Then in a Server Action:
import { revalidateTag } from 'next/cache';
revalidateTag('products');
```

**Request Deduplication:**

```tsx
// React automatically deduplicates identical fetch calls
// in the same render pass

async function Header() {
  const user = await fetchUser();  // Fetch #1
  return <div>{user.name}</div>;
}

async function Sidebar() {
  const user = await fetchUser();  // Same URL = reuses #1
  return <div>{user.avatar}</div>;
}

// Both components get same data, only one fetch!
```

**Database Queries (Prisma, Drizzle):**

```tsx
// For non-fetch data sources, use React cache
import { cache } from 'react';
import { db } from '@/lib/db';

export const getUser = cache(async (id: string) => {
  return db.user.findUnique({ where: { id } });
});

// Now multiple components can call getUser(id)
// and it's deduplicated per request
```

**Senior insight:** Key patterns: (1) use parallel fetching with Promise.all for independent data, (2) use Suspense boundaries to stream independent sections, (3) use React cache() for database queries to get deduplication, (4) preload in layouts for data needed in pages. Avoid waterfalls (sequential dependent fetches) - they're the main cause of slow pages.

---

