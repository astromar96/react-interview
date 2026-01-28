## 16. Frontend Monitoring & Observability

### Q: How do you implement error monitoring in a React application?

**Answer:**

**1. Error Boundaries for Render Errors:**

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Send to monitoring service
    Sentry.captureException(error, {
      extra: {
        componentStack: errorInfo.componentStack,
      },
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}
```

**2. Global Error Handlers:**

```jsx
// index.js
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'YOUR_DSN',
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 0.1,  // 10% of transactions
  replaysSessionSampleRate: 0.1,
});

// Catch unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  Sentry.captureException(event.reason);
});

// Catch global errors
window.addEventListener('error', (event) => {
  Sentry.captureException(event.error);
});
```

**3. API Error Tracking:**

```jsx
// Axios interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    Sentry.captureException(error, {
      tags: {
        url: error.config?.url,
        method: error.config?.method,
        status: error.response?.status,
      },
    });
    return Promise.reject(error);
  }
);

// React Query global error handler
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      Sentry.captureException(error, {
        tags: { queryKey: query.queryKey.join('.') },
      });
    },
  }),
});
```

**4. User Context for Better Debugging:**

```jsx
function useErrorTracking() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      Sentry.setUser({
        id: user.id,
        email: user.email,
        // Don't include PII unnecessarily
      });
    } else {
      Sentry.setUser(null);
    }
  }, [user]);
}
```

**5. Custom Error with Context:**

```jsx
function useApiCall() {
  const mutation = useMutation({
    mutationFn: api.createOrder,
    onError: (error, variables) => {
      Sentry.withScope((scope) => {
        scope.setTag('feature', 'checkout');
        scope.setContext('order', {
          items: variables.items.length,
          total: variables.total,
        });
        Sentry.captureException(error);
      });
    },
  });

  return mutation;
}
```

**Senior insight:** Capture enough context to debug but not too much (privacy/performance). Set up alerts for error rate spikes, not individual errors. Use source maps in production for readable stack traces.

---

### Q: How do you measure and monitor frontend performance?

**Answer:**

**1. Core Web Vitals:**

```jsx
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

function reportWebVitals(metric) {
  // Send to analytics
  analytics.track('Web Vitals', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,  // 'good', 'needs-improvement', 'poor'
    delta: metric.delta,
    id: metric.id,
  });
}

onCLS(reportWebVitals);   // Cumulative Layout Shift
onFID(reportWebVitals);   // First Input Delay
onLCP(reportWebVitals);   // Largest Contentful Paint
onFCP(reportWebVitals);   // First Contentful Paint
onTTFB(reportWebVitals);  // Time to First Byte
```

**2. React-Specific Performance:**

```jsx
// React Profiler API
function ProfiledApp() {
  const onRenderCallback = (
    id,           // Component name
    phase,        // "mount" | "update"
    actualDuration,  // Time spent rendering
    baseDuration,    // Estimated time without memoization
    startTime,
    commitTime
  ) => {
    if (actualDuration > 16) {  // Longer than one frame
      analytics.track('Slow Render', {
        component: id,
        phase,
        duration: actualDuration,
      });
    }
  };

  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <App />
    </Profiler>
  );
}
```

**3. Custom Performance Marks:**

```jsx
function ProductList() {
  useEffect(() => {
    performance.mark('ProductList-start');

    return () => {
      performance.mark('ProductList-end');
      performance.measure(
        'ProductList-render',
        'ProductList-start',
        'ProductList-end'
      );

      const measures = performance.getEntriesByName('ProductList-render');
      const duration = measures[0]?.duration;

      if (duration > 100) {
        analytics.track('Slow Component', {
          name: 'ProductList',
          duration,
        });
      }
    };
  }, []);

  return <div>...</div>;
}
```

**4. Long Tasks Detection:**

```jsx
// Detect tasks blocking main thread > 50ms
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > 50) {
      analytics.track('Long Task', {
        duration: entry.duration,
        startTime: entry.startTime,
      });
    }
  }
});

observer.observe({ entryTypes: ['longtask'] });
```

**5. Bundle Size Monitoring:**

```bash
# In CI pipeline
npx bundlesize --config bundlesize.config.json
```

```json
// bundlesize.config.json
{
  "files": [
    {
      "path": "./build/static/js/main.*.js",
      "maxSize": "200 kB"
    },
    {
      "path": "./build/static/css/main.*.css",
      "maxSize": "50 kB"
    }
  ]
}
```

**6. Real User Monitoring (RUM) Setup:**

```jsx
// Using DataDog RUM
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: 'xxx',
  clientToken: 'xxx',
  site: 'datadoghq.com',
  service: 'my-app',
  env: process.env.NODE_ENV,
  version: process.env.REACT_APP_VERSION,
  sampleRate: 100,
  trackInteractions: true,
  trackResources: true,
  trackLongTasks: true,
});
```

**Senior insight:** Focus on user-centric metrics (Core Web Vitals) over technical metrics. Set performance budgets and fail CI on regressions. Use RUM for real user data, synthetic monitoring for baseline comparisons.

---

### Q: How do you integrate Sentry with React Error Boundaries for comprehensive error tracking?

**Answer:**

Combining Sentry with custom Error Boundaries provides both automatic error capture and graceful UI recovery. Sentry's `@sentry/react` package includes an Error Boundary component, but building your own gives more control.

**Sentry Setup with Source Maps:**

```tsx
// src/lib/sentry.ts
import * as Sentry from '@sentry/react';

export function initSentry() {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    release: `my-app@${import.meta.env.VITE_APP_VERSION}`,

    // Integrations
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],

    // Performance monitoring
    tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0, // 10% in prod

    // Session replay
    replaysSessionSampleRate: 0.1, // 10% of sessions
    replaysOnErrorSampleRate: 1.0, // 100% when error occurs

    // Filter out noise
    ignoreErrors: [
      'ResizeObserver loop limit exceeded',
      'Non-Error promise rejection captured',
      /^Network request failed$/,
    ],

    // Before sending, scrub sensitive data
    beforeSend(event, hint) {
      // Remove sensitive query params
      if (event.request?.query_string) {
        event.request.query_string = event.request.query_string
          .replace(/token=[^&]+/g, 'token=[FILTERED]')
          .replace(/password=[^&]+/g, 'password=[FILTERED]');
      }
      return event;
    },
  });
}

// Upload source maps during build (vite.config.ts)
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'your-org',
      project: 'your-project',
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
  build: {
    sourcemap: true, // Required for source maps
  },
});
```

**Custom Error Boundary with Sentry:**

```tsx
import * as Sentry from '@sentry/react';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode | ((props: { error: Error; resetError: () => void }) => ReactNode);
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDialog?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  eventId: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    eventId: null,
  };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Capture with Sentry including component stack
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundary', true);
      scope.setContext('react', {
        componentStack: errorInfo.componentStack,
      });

      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });

    // Call optional error handler
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null, eventId: null });
  };

  render() {
    if (this.state.hasError) {
      const { fallback, showDialog } = this.props;
      const { error, eventId } = this.state;

      // Render custom fallback
      if (typeof fallback === 'function') {
        return fallback({ error: error!, resetError: this.resetError });
      }

      if (fallback) {
        return fallback;
      }

      // Default fallback with Sentry feedback dialog
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We've been notified and are working on a fix.</p>

          <button onClick={this.resetError}>
            Try Again
          </button>

          {showDialog && eventId && (
            <button onClick={() => Sentry.showReportDialog({ eventId })}>
              Report Feedback
            </button>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

**Strategic Error Boundary Placement:**

```tsx
// App.tsx - Layered error boundaries

function App() {
  return (
    <Sentry.ErrorBoundary fallback={<CriticalErrorPage />}>
      {/* Catches catastrophic errors */}
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <Layout>
              <ErrorBoundary fallback={<PageErrorFallback />}>
                {/* Catches page-level errors */}
                <Routes>
                  <Route path="/dashboard" element={
                    <ErrorBoundary fallback={<WidgetErrorFallback />}>
                      {/* Catches widget errors */}
                      <Dashboard />
                    </ErrorBoundary>
                  } />
                </Routes>
              </ErrorBoundary>
            </Layout>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  );
}

// Widget-level boundary - doesn't break the whole page
function WidgetErrorFallback({ error, resetError }) {
  return (
    <div className="widget-error">
      <p>This widget couldn't load</p>
      <button onClick={resetError}>Retry</button>
    </div>
  );
}
```

**Tracking Error Boundaries by Feature:**

```tsx
// Create feature-specific error boundaries
function createFeatureErrorBoundary(featureName: string) {
  return function FeatureErrorBoundary({ children }: { children: ReactNode }) {
    return (
      <ErrorBoundary
        onError={(error, errorInfo) => {
          Sentry.withScope((scope) => {
            scope.setTag('feature', featureName);
            scope.setLevel('error');
            Sentry.captureException(error);
          });
        }}
        fallback={({ error, resetError }) => (
          <FeatureErrorFallback
            feature={featureName}
            error={error}
            onRetry={resetError}
          />
        )}
      >
        {children}
      </ErrorBoundary>
    );
  };
}

// Usage
const CheckoutErrorBoundary = createFeatureErrorBoundary('checkout');
const SearchErrorBoundary = createFeatureErrorBoundary('search');

// In your app
<CheckoutErrorBoundary>
  <CheckoutFlow />
</CheckoutErrorBoundary>
```

**Async Error Tracking:**

```tsx
// Error boundaries don't catch async errors
// Handle them separately

function useTrackedMutation<TData, TVariables>(
  options: UseMutationOptions<TData, Error, TVariables>
) {
  return useMutation({
    ...options,
    onError: (error, variables, context) => {
      // Report to Sentry
      Sentry.withScope((scope) => {
        scope.setTag('type', 'mutation');
        scope.setContext('mutation', {
          key: options.mutationKey,
          variables: JSON.stringify(variables).slice(0, 500), // Truncate
        });
        Sentry.captureException(error);
      });

      // Call original handler
      options.onError?.(error, variables, context);
    },
  });
}

// Global React Query error handler
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      // Only report non-network errors
      if (!(error instanceof NetworkError)) {
        Sentry.captureException(error, {
          tags: { type: 'query' },
          extra: { queryKey: query.queryKey },
        });
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, variables, context, mutation) => {
      Sentry.captureException(error, {
        tags: { type: 'mutation' },
        extra: { mutationKey: mutation.options.mutationKey },
      });
    },
  }),
});
```

**Release Tracking:**

```bash
# In CI/CD pipeline
# 1. Create release
sentry-cli releases new my-app@1.2.3

# 2. Upload source maps
sentry-cli releases files my-app@1.2.3 upload-sourcemaps ./dist

# 3. Associate commits
sentry-cli releases set-commits my-app@1.2.3 --auto

# 4. Deploy
sentry-cli releases deploys my-app@1.2.3 new -e production

# 5. Finalize
sentry-cli releases finalize my-app@1.2.3
```

**Senior insight:** Layer error boundaries strategically—global for catastrophic failures, page-level for route errors, widget-level for isolated components. Upload source maps in CI for readable stack traces, but keep them private (don't expose via public URL). Set up release tracking to correlate errors with deployments and enable "suspect commits" feature to identify which PR introduced a bug.

---

### Q: How do you implement custom performance metrics and business metrics tracking?

**Answer:**

Beyond Core Web Vitals, custom metrics help track business-specific performance like time-to-interactive for key features, API latencies, and user flow completion.

**Custom Performance Metrics Pattern:**

```tsx
// src/lib/metrics.ts
type MetricName =
  | 'search_results_loaded'
  | 'checkout_completed'
  | 'dashboard_rendered'
  | 'product_image_loaded'
  | 'form_submitted';

interface Metric {
  name: MetricName;
  value: number;
  tags?: Record<string, string>;
  timestamp?: number;
}

class MetricsCollector {
  private buffer: Metric[] = [];
  private flushInterval = 5000; // 5 seconds

  constructor() {
    // Flush periodically
    setInterval(() => this.flush(), this.flushInterval);

    // Flush on page unload
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.flush();
      }
    });
  }

  record(metric: Metric) {
    this.buffer.push({
      ...metric,
      timestamp: metric.timestamp || Date.now(),
    });

    // Flush immediately if buffer is large
    if (this.buffer.length >= 50) {
      this.flush();
    }
  }

  private async flush() {
    if (this.buffer.length === 0) return;

    const metrics = [...this.buffer];
    this.buffer = [];

    // Use sendBeacon for reliability during page unload
    const blob = new Blob([JSON.stringify({ metrics })], {
      type: 'application/json',
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/metrics', blob);
    } else {
      fetch('/api/metrics', {
        method: 'POST',
        body: blob,
        keepalive: true,
      }).catch(console.error);
    }
  }
}

export const metrics = new MetricsCollector();
```

**Timing Hook:**

```tsx
// Measure time between start and end
function usePerformanceMark(name: string) {
  const startMarkRef = useRef<string>();

  const start = useCallback(() => {
    startMarkRef.current = `${name}-start-${Date.now()}`;
    performance.mark(startMarkRef.current);
  }, [name]);

  const end = useCallback((tags?: Record<string, string>) => {
    if (!startMarkRef.current) return;

    const endMark = `${name}-end-${Date.now()}`;
    performance.mark(endMark);

    try {
      const measure = performance.measure(
        name,
        startMarkRef.current,
        endMark
      );

      metrics.record({
        name: name as MetricName,
        value: measure.duration,
        tags,
      });
    } catch (e) {
      // Marks might be cleared
    }

    // Cleanup
    performance.clearMarks(startMarkRef.current);
    performance.clearMarks(endMark);
    performance.clearMeasures(name);
  }, [name]);

  return { start, end };
}

// Usage
function SearchResults({ query }) {
  const { start, end } = usePerformanceMark('search_results_loaded');

  useEffect(() => {
    start();
  }, [query]);

  const { data } = useQuery({
    queryKey: ['search', query],
    queryFn: () => searchAPI(query),
    onSuccess: (data) => {
      end({ result_count: String(data.length) });
    },
  });

  return <ResultsList results={data} />;
}
```

**Component Render Metrics:**

```tsx
// Track slow renders
function useRenderMetrics(componentName: string, threshold = 16) {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(performance.now());

  useEffect(() => {
    const now = performance.now();
    const renderTime = now - lastRenderTime.current;
    renderCount.current++;

    if (renderTime > threshold) {
      metrics.record({
        name: 'slow_render' as MetricName,
        value: renderTime,
        tags: {
          component: componentName,
          render_count: String(renderCount.current),
        },
      });
    }

    lastRenderTime.current = now;
  });
}

// Usage
function ExpensiveComponent({ data }) {
  useRenderMetrics('ExpensiveComponent', 50);

  return <ComplexVisualization data={data} />;
}
```

**API Latency Tracking:**

```tsx
// Axios interceptor for API metrics
function setupAPIMetrics(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use((config) => {
    config.metadata = { startTime: performance.now() };
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      const duration = performance.now() - response.config.metadata.startTime;

      metrics.record({
        name: 'api_latency' as MetricName,
        value: duration,
        tags: {
          endpoint: new URL(response.config.url!, response.config.baseURL).pathname,
          method: response.config.method!.toUpperCase(),
          status: String(response.status),
        },
      });

      return response;
    },
    (error) => {
      if (error.config?.metadata?.startTime) {
        const duration = performance.now() - error.config.metadata.startTime;

        metrics.record({
          name: 'api_latency' as MetricName,
          value: duration,
          tags: {
            endpoint: new URL(error.config.url!, error.config.baseURL).pathname,
            method: error.config.method!.toUpperCase(),
            status: String(error.response?.status || 'network_error'),
            error: 'true',
          },
        });
      }
      return Promise.reject(error);
    }
  );
}
```

**User Flow Metrics:**

```tsx
// Track multi-step user flows
class FlowTracker {
  private flows = new Map<string, { startTime: number; steps: string[] }>();

  startFlow(flowId: string, flowName: string) {
    this.flows.set(flowId, {
      startTime: performance.now(),
      steps: [flowName],
    });
  }

  addStep(flowId: string, stepName: string) {
    const flow = this.flows.get(flowId);
    if (flow) {
      flow.steps.push(stepName);
    }
  }

  completeFlow(flowId: string, success: boolean) {
    const flow = this.flows.get(flowId);
    if (!flow) return;

    const duration = performance.now() - flow.startTime;

    metrics.record({
      name: 'user_flow_completed' as MetricName,
      value: duration,
      tags: {
        flow_id: flowId,
        steps: flow.steps.join(' -> '),
        step_count: String(flow.steps.length),
        success: String(success),
      },
    });

    this.flows.delete(flowId);
  }

  abandonFlow(flowId: string, lastStep: string) {
    const flow = this.flows.get(flowId);
    if (!flow) return;

    const duration = performance.now() - flow.startTime;

    metrics.record({
      name: 'user_flow_abandoned' as MetricName,
      value: duration,
      tags: {
        flow_id: flowId,
        abandoned_at: lastStep,
        steps_completed: String(flow.steps.length),
      },
    });

    this.flows.delete(flowId);
  }
}

export const flowTracker = new FlowTracker();

// Usage in checkout flow
function CheckoutFlow() {
  const flowId = useRef(`checkout-${Date.now()}`).current;

  useEffect(() => {
    flowTracker.startFlow(flowId, 'cart_review');

    return () => {
      // User navigated away without completing
      flowTracker.abandonFlow(flowId, 'unknown');
    };
  }, []);

  return (
    <Steps>
      <Step
        name="shipping"
        onEnter={() => flowTracker.addStep(flowId, 'shipping')}
      />
      <Step
        name="payment"
        onEnter={() => flowTracker.addStep(flowId, 'payment')}
      />
      <Step
        name="confirmation"
        onComplete={() => flowTracker.completeFlow(flowId, true)}
      />
    </Steps>
  );
}
```

**Business Metrics Dashboard Query:**

```tsx
// Example: Track feature usage
function FeatureUsageTracker({ featureName, children }) {
  const startTime = useRef(performance.now());

  useEffect(() => {
    metrics.record({
      name: 'feature_opened' as MetricName,
      value: 1,
      tags: { feature: featureName },
    });

    return () => {
      const duration = performance.now() - startTime.current;
      metrics.record({
        name: 'feature_time_spent' as MetricName,
        value: duration,
        tags: { feature: featureName },
      });
    };
  }, [featureName]);

  return children;
}

// Wrap features
<FeatureUsageTracker featureName="advanced_search">
  <AdvancedSearch />
</FeatureUsageTracker>
```

**Senior insight:** Business metrics (conversion rates, feature adoption, time-to-value) often matter more than technical metrics. Use percentiles (p50, p95, p99) rather than averages—averages hide tail latencies. Correlate frontend metrics with backend traces using distributed tracing (correlation IDs) to debug full-stack issues. Don't over-instrument: each metric has storage and processing costs.

---

### Q: Explain Real User Monitoring (RUM) vs Synthetic Monitoring and when to use each

**Answer:**

RUM captures actual user experiences from real browsers and devices, while synthetic monitoring runs automated tests from controlled environments. Both are essential for comprehensive observability.

**RUM vs Synthetic Comparison:**

| Aspect | RUM | Synthetic |
|--------|-----|-----------|
| Data Source | Real users | Automated bots |
| Coverage | All user conditions | Predefined scenarios |
| Cost | Based on traffic | Based on check frequency |
| Variability | High (real world) | Low (controlled) |
| Geographic | Where users are | Where you configure |
| Timing | After deployment | Before/after |
| Use Case | Real performance | Baseline, SLA monitoring |

**RUM Implementation (DataDog Example):**

```tsx
// src/lib/rum.ts
import { datadogRum } from '@datadog/browser-rum';

export function initRUM() {
  if (typeof window === 'undefined') return;

  datadogRum.init({
    applicationId: import.meta.env.VITE_DD_APP_ID,
    clientToken: import.meta.env.VITE_DD_CLIENT_TOKEN,
    site: 'datadoghq.com',
    service: 'my-react-app',
    env: import.meta.env.MODE,
    version: import.meta.env.VITE_APP_VERSION,

    // Sampling
    sessionSampleRate: 100, // 100% of sessions
    sessionReplaySampleRate: 20, // 20% get session replay

    // What to track
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    trackFrustrations: true, // Rage clicks, dead clicks, error clicks

    // Privacy
    defaultPrivacyLevel: 'mask-user-input',

    // Custom context
    beforeSend: (event) => {
      // Add custom attributes
      event.context = {
        ...event.context,
        userPlan: getUserPlan(),
        abTestGroup: getABTestGroup(),
      };
      return true;
    },
  });
}

// Set user context when logged in
export function setRUMUser(user: User | null) {
  if (user) {
    datadogRum.setUser({
      id: user.id,
      name: user.name,
      email: user.email,
      plan: user.plan,
    });
  } else {
    datadogRum.clearUser();
  }
}

// Track custom actions
export function trackAction(name: string, context?: Record<string, unknown>) {
  datadogRum.addAction(name, context);
}

// Track errors with context
export function trackError(error: Error, context?: Record<string, unknown>) {
  datadogRum.addError(error, context);
}
```

**Session Replay Configuration:**

```tsx
// Session replay captures user sessions for debugging
datadogRum.init({
  // ... other config
  sessionReplaySampleRate: 20, // 20% of sessions

  // Privacy settings for session replay
  defaultPrivacyLevel: 'mask', // mask | allow | mask-user-input

  // Advanced privacy rules
  beforeSend: (event, context) => {
    // Don't record sessions on sensitive pages
    if (window.location.pathname.includes('/admin')) {
      return false;
    }

    // Mask specific elements
    if (event.type === 'view') {
      event.view.custom = {
        sensitivePageViewed: isSensitivePage(),
      };
    }

    return true;
  },
});

// Start recording manually for specific flows
function CheckoutFlow() {
  useEffect(() => {
    // Ensure this checkout session is recorded
    datadogRum.startSessionReplayRecording();

    return () => {
      datadogRum.stopSessionReplayRecording();
    };
  }, []);

  return <CheckoutSteps />;
}
```

**Custom RUM Views and Actions:**

```tsx
// Track SPA navigation as views
import { useLocation } from 'react-router-dom';

function RUMRouter() {
  const location = useLocation();

  useEffect(() => {
    // Custom view tracking for React Router
    datadogRum.startView({
      name: getViewName(location.pathname),
      service: 'my-app',
      version: import.meta.env.VITE_APP_VERSION,
    });
  }, [location.pathname]);

  return null;
}

// Map routes to readable view names
function getViewName(pathname: string): string {
  const routes: Record<string, string> = {
    '/': 'Home',
    '/products': 'Product Listing',
    '/cart': 'Shopping Cart',
    '/checkout': 'Checkout',
  };

  // Handle dynamic routes
  if (pathname.startsWith('/products/')) {
    return 'Product Detail';
  }
  if (pathname.startsWith('/orders/')) {
    return 'Order Detail';
  }

  return routes[pathname] || pathname;
}

// Track user interactions
function AddToCartButton({ product }) {
  const handleClick = () => {
    datadogRum.addAction('add_to_cart', {
      product_id: product.id,
      product_name: product.name,
      price: product.price,
      category: product.category,
    });

    addToCart(product);
  };

  return <button onClick={handleClick}>Add to Cart</button>;
}
```

**Synthetic Monitoring Setup (Playwright Example):**

```typescript
// tests/synthetic/checkout-flow.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Checkout Flow - Synthetic Monitoring', () => {
  test('complete checkout flow', async ({ page }) => {
    // Start timing
    const startTime = Date.now();

    // Navigate to product
    await page.goto('/products/featured-item');
    await expect(page.locator('h1')).toContainText('Featured Item');

    const productLoadTime = Date.now() - startTime;
    console.log(`Product page load: ${productLoadTime}ms`);

    // Add to cart
    const addToCartStart = Date.now();
    await page.click('[data-testid="add-to-cart"]');
    await expect(page.locator('[data-testid="cart-count"]')).toHaveText('1');
    console.log(`Add to cart: ${Date.now() - addToCartStart}ms`);

    // Go to checkout
    await page.click('[data-testid="go-to-checkout"]');
    await expect(page).toHaveURL('/checkout');

    // Fill shipping
    await page.fill('#email', 'test@example.com');
    await page.fill('#address', '123 Test St');
    await page.click('[data-testid="continue-to-payment"]');

    // Fill payment
    await page.fill('#card-number', '4242424242424242');
    await page.fill('#expiry', '12/30');
    await page.fill('#cvv', '123');

    // Complete order
    const orderStart = Date.now();
    await page.click('[data-testid="place-order"]');
    await expect(page.locator('[data-testid="order-confirmation"]')).toBeVisible();

    const totalTime = Date.now() - startTime;
    console.log(`Order placement: ${Date.now() - orderStart}ms`);
    console.log(`Total checkout flow: ${totalTime}ms`);

    // Assert performance thresholds
    expect(totalTime).toBeLessThan(30000); // 30 seconds max
  });
});
```

**CI Integration for Synthetic Monitoring:**

```yaml
# .github/workflows/synthetic.yml
name: Synthetic Monitoring

on:
  schedule:
    - cron: '*/15 * * * *' # Every 15 minutes
  workflow_dispatch: # Manual trigger

jobs:
  synthetic-tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        region: [us-east, eu-west, ap-southeast]

    steps:
      - uses: actions/checkout@v4

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Run synthetic tests
        run: npx playwright test tests/synthetic/
        env:
          BASE_URL: https://app.example.com
          REGION: ${{ matrix.region }}

      - name: Report to monitoring
        if: always()
        run: |
          curl -X POST ${{ secrets.METRICS_ENDPOINT }} \
            -H "Content-Type: application/json" \
            -d '{
              "test": "checkout_flow",
              "region": "${{ matrix.region }}",
              "status": "${{ job.status }}",
              "duration": "${{ steps.test.outputs.duration }}"
            }'
```

**Correlating RUM with Backend Traces:**

```tsx
// Add trace context to API calls
async function fetchWithTracing(url: string, options?: RequestInit) {
  // Get current RUM context
  const rumContext = datadogRum.getInternalContext();

  const headers = new Headers(options?.headers);

  // Add trace headers for distributed tracing
  if (rumContext) {
    headers.set('x-datadog-trace-id', rumContext.session_id);
    headers.set('x-datadog-parent-id', rumContext.view?.id || '');
  }

  return fetch(url, { ...options, headers });
}

// React Query with tracing
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await fetchWithTracing(`/api/${queryKey.join('/')}`);
        return response.json();
      },
    },
  },
});
```

**When to Use Each:**

| Scenario | Use RUM | Use Synthetic |
|----------|---------|---------------|
| Overall user experience | ✅ | - |
| SLA compliance monitoring | - | ✅ |
| Detecting regional issues | ✅ | ✅ |
| Pre-deployment validation | - | ✅ |
| Real device/browser bugs | ✅ | - |
| Alerting on downtime | - | ✅ |
| Identifying slow pages | ✅ | - |
| Load time benchmarks | - | ✅ |
| Session replay debugging | ✅ | - |

**Senior insight:** Use RUM to understand real user experience and identify issues you'd never find in controlled tests—slow 3G networks in rural areas, old Android devices, browser extensions causing issues. Use synthetic for SLA monitoring, baseline comparisons, and catching regressions before users do. Correlate both with backend APM using distributed tracing to debug full-stack latency issues.

---

### Q: How do you set up frontend alerting without causing alert fatigue?

**Answer:**

Effective alerting catches real issues while avoiding noise that trains teams to ignore alerts. The key is meaningful thresholds, proper grouping, and actionable alerts.

**Alert Design Principles:**

```yaml
# Good alert criteria:
# 1. Actionable - Someone can do something about it
# 2. Urgent - Needs attention soon
# 3. Relevant - Affects users or business
# 4. Clear - Easy to understand and investigate

# Bad alerts:
# - "Error occurred" (too vague)
# - Every 4xx response (often user error)
# - Low traffic at 3am (expected)
```

**Error Rate Alerting:**

```typescript
// Define meaningful error thresholds

interface AlertConfig {
  metric: string;
  condition: 'above' | 'below';
  threshold: number;
  duration: string; // How long condition must persist
  severity: 'critical' | 'warning' | 'info';
  notify: string[]; // Channels to notify
}

const alerts: AlertConfig[] = [
  {
    // Critical: High error rate affecting many users
    metric: 'error_rate',
    condition: 'above',
    threshold: 0.05, // 5% of requests
    duration: '5m', // Sustained for 5 minutes
    severity: 'critical',
    notify: ['pagerduty', 'slack-oncall'],
  },
  {
    // Warning: Elevated errors, investigate soon
    metric: 'error_rate',
    condition: 'above',
    threshold: 0.02, // 2% of requests
    duration: '15m', // Sustained for 15 minutes
    severity: 'warning',
    notify: ['slack-engineering'],
  },
  {
    // Critical: Key user flow completely broken
    metric: 'checkout_success_rate',
    condition: 'below',
    threshold: 0.90, // Below 90% success
    duration: '5m',
    severity: 'critical',
    notify: ['pagerduty', 'slack-oncall'],
  },
];
```

**DataDog Monitor Configuration:**

```typescript
// Using DataDog API to create monitors programmatically
import { client, v1 } from '@datadog/datadog-api-client';

const configuration = client.createConfiguration();
const monitorsApi = new v1.MonitorsApi(configuration);

// Error rate monitor
await monitorsApi.createMonitor({
  body: {
    name: '[Frontend] High Error Rate',
    type: 'query alert',
    query: `
      sum(last_5m):
        sum:frontend.errors{env:production}.as_count() /
        sum:frontend.requests{env:production}.as_count()
      > 0.05
    `,
    message: `
## High Frontend Error Rate

Error rate has exceeded 5% for the past 5 minutes.

### Quick Investigation
1. Check recent deployments: [Deployment Dashboard](link)
2. Review error details: [Sentry](link)
3. Check backend health: [Backend Dashboard](link)

### Contacts
- On-call: @pagerduty
- Team: @slack-frontend-team

{{#is_alert}}
@pagerduty-frontend-oncall
{{/is_alert}}
{{#is_warning}}
@slack-engineering
{{/is_warning}}
    `,
    tags: ['team:frontend', 'env:production'],
    options: {
      thresholds: {
        critical: 0.05,
        warning: 0.02,
      },
      notifyAudit: true,
      includeTags: true,
      // Don't alert for low traffic periods
      newHostDelay: 300,
      requireFullWindow: true,
      // Re-notify every hour if still alerting
      renotifyInterval: 60,
    },
  },
});
```

**Composite Alerts (Reduce Noise):**

```typescript
// Alert only when multiple conditions are true
await monitorsApi.createMonitor({
  body: {
    name: '[Frontend] Checkout Flow Degraded',
    type: 'composite',
    query: `
      ${errorRateMonitorId} &&
      ${latencyMonitorId} &&
      ${trafficMonitorId}
    `,
    message: `
## Checkout Flow Degraded

Multiple indicators showing checkout issues:
- Error rate elevated
- Latency increased
- Traffic still normal (not a traffic dip)

This is likely a real issue, not a false positive.
    `,
  },
});
```

**Anomaly Detection (Avoid Static Thresholds):**

```typescript
// Detect when metrics deviate from normal patterns
await monitorsApi.createMonitor({
  body: {
    name: '[Frontend] Abnormal Error Rate',
    type: 'query alert',
    query: `
      avg(last_1h):anomalies(
        sum:frontend.errors{env:production}.as_count(),
        'agile',
        3,
        direction='above'
      ) >= 1
    `,
    message: `
## Abnormal Error Pattern Detected

Error rate is significantly higher than normal for this time period.

This accounts for:
- Time of day variations
- Day of week patterns
- Seasonal trends

[View anomaly details](link)
    `,
    options: {
      thresholds: {
        critical: 1,
      },
      thresholdWindows: {
        recoveryWindow: 'last_15m',
        triggerWindow: 'last_1h',
      },
    },
  },
});
```

**Alert Grouping and Deduplication:**

```typescript
// Group related alerts to avoid spam

const sentryAlertRules = {
  // Group by error type, not individual occurrences
  grouping: {
    strategy: 'fingerprint',
    fields: ['exception.type', 'exception.message', 'url'],
  },

  // Threshold before alerting
  triggers: [
    {
      // Alert when new issue affects >100 users
      type: 'threshold',
      metric: 'users_affected',
      threshold: 100,
      timeWindow: '1h',
    },
    {
      // Alert when error rate spikes
      type: 'percent_change',
      metric: 'event_count',
      threshold: 200, // 200% increase
      comparisonWindow: '24h',
    },
  ],
};
```

**Runbook Integration:**

```typescript
// Every alert should have a runbook

interface AlertRunbook {
  alertName: string;
  description: string;
  severity: string;
  symptoms: string[];
  investigation: Step[];
  mitigation: Step[];
  escalation: Contact[];
}

const checkoutErrorRunbook: AlertRunbook = {
  alertName: 'Checkout Error Rate High',
  description: 'Checkout completion rate has dropped below threshold',
  severity: 'critical',

  symptoms: [
    'Users unable to complete purchases',
    'Error toasts appearing during checkout',
    'Increased support tickets about payment failures',
  ],

  investigation: [
    {
      title: 'Check recent deployments',
      action: 'Review [deployment dashboard](link) for recent changes',
      expectedOutcome: 'Identify if deployment correlates with error spike',
    },
    {
      title: 'Review error details',
      action: 'Check [Sentry](link) for error stacktraces',
      expectedOutcome: 'Identify root cause (API, validation, etc)',
    },
    {
      title: 'Check payment provider status',
      action: 'Visit [Stripe Status](status.stripe.com)',
      expectedOutcome: 'Confirm if third-party issue',
    },
    {
      title: 'Check backend health',
      action: 'Review [Backend APM](link)',
      expectedOutcome: 'Identify if backend latency/errors causing issues',
    },
  ],

  mitigation: [
    {
      title: 'Rollback if deployment-related',
      action: 'Run: ./scripts/rollback.sh',
      expectedOutcome: 'Return to last known good version',
    },
    {
      title: 'Enable maintenance mode',
      action: 'Set MAINTENANCE_MODE=true in config',
      expectedOutcome: 'Show friendly message, prevent partial orders',
    },
  ],

  escalation: [
    { name: 'Frontend On-Call', contact: '@frontend-oncall' },
    { name: 'Backend On-Call', contact: '@backend-oncall' },
    { name: 'Engineering Manager', contact: '@eng-manager' },
  ],
};
```

**SLO-Based Alerting:**

```typescript
// Alert based on Service Level Objectives, not arbitrary thresholds

const sloConfig = {
  name: 'Frontend Availability',
  target: 99.9, // 99.9% availability
  window: '30d', // Rolling 30-day window

  // Good events = successful page loads
  goodEvents: 'sum:frontend.page_loads{status:success}',
  // Total events = all page loads
  totalEvents: 'sum:frontend.page_loads{*}',

  alerts: [
    {
      // Alert when burning error budget too fast
      name: 'Error Budget Burn Rate - Fast',
      condition: 'burn_rate > 14.4', // 14.4x = budget exhausted in 2 hours
      window: '1h',
      severity: 'critical',
    },
    {
      // Slower burn rate, less urgent
      name: 'Error Budget Burn Rate - Slow',
      condition: 'burn_rate > 6',
      window: '6h',
      severity: 'warning',
    },
    {
      // Approaching budget limit
      name: 'Error Budget Low',
      condition: 'remaining_budget < 20%',
      severity: 'warning',
    },
  ],
};
```

**Alert Lifecycle Management:**

```typescript
// Implement alert hygiene practices

const alertHygieneChecklist = {
  weekly: [
    'Review alerts that fired but had no action taken',
    'Identify alerts with >10% false positive rate',
    'Check for alerts that never fire (dead alerts)',
  ],

  monthly: [
    'Review on-call burden - too many alerts?',
    'Tune thresholds based on actual incidents',
    'Archive alerts for decommissioned features',
  ],

  quarterly: [
    'Comprehensive alert audit',
    'Update runbooks with lessons learned',
    'Review SLO targets based on business needs',
  ],
};
```

**Senior insight:** The best alerting philosophy is "alert on symptoms, not causes." Alert when users are affected (high error rate, slow checkout), not on internal metrics (high CPU, database connections). Use error budgets and burn rates for SLO-based alerting—they naturally account for acceptable error levels. Every alert should have a clear runbook; if you can't write one, the alert probably isn't actionable. Schedule regular alert review sessions to eliminate noise—teams that ignore alerts miss real incidents.