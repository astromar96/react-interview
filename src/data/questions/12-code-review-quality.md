## 12. Code Review & Quality

### Q: What do you look for in a code review?

**Answer:**

**Priority Order:**

1. **Correctness** - Does it solve the problem? Edge cases?
2. **Security** - Injection, XSS, sensitive data exposure?
3. **Architecture** - Right abstraction level? Fits existing patterns?
4. **Performance** - O(n²) loops? Unnecessary re-renders?
5. **Readability** - Can others understand it in 6 months?
6. **Tests** - Adequate coverage? Testing behavior not implementation?

**My Review Process:**

```
1. Read the PR description and linked ticket first
2. Check the test file - understand intended behavior
3. Review main logic changes
4. Look at integration points (API calls, state changes)
5. Consider what's NOT there (error handling, edge cases)
```

**Types of Comments:**

```markdown
# Must fix (blocking)
🔴 **Security**: User input passed directly to SQL query

# Should fix (non-blocking)
🟡 **Performance**: This filters on every render. Consider useMemo

# Consider (optional)
🟢 **Suggestion**: Could extract this into a custom hook for reuse

# Praise
✨ Nice use of discriminated unions here!

# Question (not a criticism)
❓ What happens if the API returns empty array?
```

**What I DON'T Nitpick:**

- Style issues (should be automated by Prettier/ESLint)
- Personal preferences with no measurable impact
- Things outside the PR's scope
- Minor naming preferences (unless genuinely confusing)

**Senior insight:** Great code reviews balance thoroughness with velocity. Block on security/correctness, suggest on patterns/performance, let go of style. Always acknowledge good work - reviews shouldn't only be critical. Ask questions when unsure rather than demanding changes.

---

### Q: What is XSS and how do you prevent it in React?

**Answer:**

**XSS (Cross-Site Scripting)** = Attacker injects malicious scripts that execute in users' browsers.

**React's Built-in Protection:**

```jsx
// ✅ Safe - React escapes this automatically
const userInput = '<script>alert("hacked")</script>';
return <div>{userInput}</div>;
// Renders as text: <script>alert("hacked")</script>
```

**The Danger: dangerouslySetInnerHTML:**

```jsx
// ❌ DANGEROUS - Executes injected scripts
const userInput = '<img src=x onerror=alert("XSS")>';
return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
// XSS vulnerability!

// ✅ Safe - Sanitize first
import DOMPurify from 'dompurify';

const sanitized = DOMPurify.sanitize(userInput);
return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
```

**Other XSS Vectors in React:**

```jsx
// ❌ href with javascript: protocol
const userUrl = 'javascript:alert("XSS")';
<a href={userUrl}>Click</a>  // Executes on click!

// ✅ Validate URLs
const isValidUrl = (url) => {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
};

// ❌ Injecting into script tags
<script>{userInput}</script>  // Never do this

// ❌ eval() with user input
eval(userInput);  // Never do this
```

**Prevention Checklist:**

1. **Trust React's escaping** - Don't bypass it unnecessarily
2. **Sanitize HTML** - Use DOMPurify for user-generated HTML
3. **Validate URLs** - Check protocol before using in href/src
4. **Content-Security-Policy** - HTTP header to restrict script sources
5. **HttpOnly cookies** - Prevent JS access to session cookies
6. **Avoid `dangerouslySetInnerHTML`** - Use only with sanitized content

```jsx
// CSP Header example
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-abc123'
```

**Senior insight:** React handles 90% of XSS prevention automatically. The remaining 10% requires vigilance: sanitizing HTML, validating URLs, avoiding eval/new Function, and setting proper CSP headers. Review any use of `dangerouslySetInnerHTML` carefully.

---

### Q: How do you approach refactoring a legacy React codebase?

**Answer:**

Refactoring legacy code requires balancing improvement with risk mitigation.

**Assessment Phase:**

```markdown
## Legacy Codebase Audit

### 1. Understand Current State
- [ ] Map component hierarchy
- [ ] Identify shared state patterns
- [ ] Check test coverage
- [ ] List known pain points from team

### 2. Categorize Code Quality
HIGH RISK (refactor carefully):
- Payment/checkout flows
- Authentication
- Data mutations

MEDIUM RISK (opportunistic refactor):
- Dashboard components
- Settings pages
- Read-only displays

LOW RISK (refactor freely):
- Utility functions
- Styling/layout
- Static pages
```

**Strategy: Strangler Fig Pattern**

```jsx
// Instead of rewriting everything, gradually replace

// 1. Identify boundary
// Old: Class component with complex state
class LegacyUserList extends React.Component {
  state = { users: [], filter: '', sortBy: 'name' };
  // ... hundreds of lines
}

// 2. Create new implementation alongside
function UserList() {
  const { users, isLoading } = useUsers();
  const [filter, setFilter] = useState('');
  // Clean hooks-based implementation
}

// 3. Feature flag the switch
function UserListWrapper(props) {
  const useNewUserList = useFeatureFlag('newUserList');

  if (useNewUserList) {
    return <UserList {...props} />;
  }
  return <LegacyUserList {...props} />;
}

// 4. Gradually roll out, then remove legacy
```

**Class to Hooks Migration:**

```jsx
// Before: Class component
class Counter extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Count: ${this.state.count}`;
    }
  }

  handleIncrement = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <button onClick={this.handleIncrement}>
        Count: {this.state.count}
      </button>
    );
  }
}

// After: Functional component with hooks
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
```

**Refactoring Order:**

```
1. Add/improve tests for current behavior
   ↓
2. Extract shared logic to custom hooks
   ↓
3. Simplify component hierarchy
   ↓
4. Migrate class → functional components
   ↓
5. Adopt modern patterns (React Query, etc.)
   ↓
6. Clean up deprecated patterns
```

**Safe Refactoring Techniques:**

```jsx
// 1. Extract, don't rewrite
// Pull logic into hooks, keep component structure initially
function useLegacyUserData() {
  // Extract existing logic verbatim first
  // Then improve incrementally
}

// 2. Parallel implementations
// Run old and new code, compare outputs
function ParallelTest({ userId }) {
  const oldResult = useLegacyFetch(userId);
  const newResult = useNewFetch(userId);

  useEffect(() => {
    if (!isEqual(oldResult.data, newResult.data)) {
      logDiscrepancy('user-fetch', oldResult, newResult);
    }
  }, [oldResult, newResult]);

  return <UserDisplay data={newResult.data} />;
}

// 3. Type gradually
// Add TypeScript types incrementally
// @ts-check
/** @type {User | null} */
let user = null;
```

**Common Legacy Patterns to Modernize:**

| Legacy Pattern | Modern Alternative |
|---------------|-------------------|
| HOCs for data | Custom hooks |
| Render props | Custom hooks |
| Redux connect | useSelector/useDispatch |
| componentDidMount | useEffect |
| this.setState callback | useEffect |
| PropTypes | TypeScript |
| Class components | Function + hooks |

**Measuring Success:**

```typescript
// Track metrics before/after
interface RefactorMetrics {
  // Code health
  bundleSize: number;
  testCoverage: number;
  typeScriptCoverage: number;

  // Developer experience
  buildTime: number;
  prCycleTime: number;

  // Runtime
  errorRate: number;
  performanceMetrics: WebVitals;
}
```

**Senior insight:** The biggest risk in refactoring is breaking production with insufficient testing. Always: (1) add tests before changing behavior, (2) make atomic, reversible changes, (3) use feature flags for gradual rollout, (4) have rollback plan. Don't refactor for refactoring's sake - tie improvements to measurable outcomes (velocity, bugs, performance).

---

### Q: What static analysis tools do you use in React projects and why?

**Answer:**

Static analysis catches errors before runtime. A good toolchain includes linting, type checking, and formatting.

**Essential Tools:**

| Tool | Purpose | Catches |
|------|---------|---------|
| ESLint | Code quality | Bugs, bad practices |
| TypeScript | Type safety | Type mismatches, null errors |
| Prettier | Formatting | Style inconsistencies |
| Husky + lint-staged | Git hooks | Pre-commit checks |

**ESLint Configuration for React:**

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',  // Accessibility
    'prettier',  // Disables formatting rules
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jsx-a11y',
    'import',
  ],
  rules: {
    // React Hooks - CRITICAL
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Prevent common bugs
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // Import organization
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],

    // React specific
    'react/jsx-no-leaked-render': 'error',  // Prevents {0 && <X />}
    'react/jsx-key': 'error',
    'react/no-array-index-key': 'warn',
  },
};
```

**TypeScript Configuration:**

```json
// tsconfig.json
{
  "compilerOptions": {
    // Strict mode catches more errors
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,

    // React
    "jsx": "react-jsx",
    "lib": ["dom", "dom.iterable", "esnext"],

    // Module resolution
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "resolveJsonModule": true,

    // Output
    "noEmit": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

**Pre-commit Hooks:**

```javascript
// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,css}": [
      "prettier --write"
    ]
  }
}

// .husky/pre-commit
#!/bin/sh
npx lint-staged
```

**CI Pipeline Integration:**

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run type-check

      - name: Lint
        run: npm run lint

      - name: Test
        run: npm run test -- --coverage

      - name: Build
        run: npm run build
```

**Additional Useful Rules:**

```javascript
// Custom ESLint rules for React projects
{
  // Prevent common mistakes
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/no-unstable-nested-components': 'error',

  // Enforce best practices
  'react/function-component-definition': [
    'error',
    { namedComponents: 'function-declaration' }
  ],

  // TypeScript specific
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/await-thenable': 'error',

  // Performance hints
  'react/jsx-no-bind': [
    'warn',
    {
      allowArrowFunctions: true,
      allowFunctions: false,
    }
  ],
}
```

**Bundle Analysis:**

```bash
# Add to package.json scripts
"analyze": "ANALYZE=true npm run build"

# webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

if (process.env.ANALYZE) {
  config.plugins.push(new BundleAnalyzerPlugin());
}
```

**Editor Integration (VS Code):**

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

**Senior insight:** Static analysis ROI is highest when: (1) rules are strict but not noisy (too many warnings = ignored), (2) integrated into editor AND CI (immediate feedback + gate), (3) team has buy-in (discuss rules together). `react-hooks/exhaustive-deps` alone catches 80% of hooks bugs. Stricter TypeScript settings (`strict: true`, `noUncheckedIndexedAccess`) significantly reduce runtime errors.
