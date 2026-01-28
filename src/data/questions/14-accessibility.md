## 14. Accessibility (A11y)

### Q: What accessibility concerns are important in React applications?

**Answer:**

**Core Principles (POUR):**
- **Perceivable** - Content available to all senses
- **Operable** - All functionality via keyboard/assistive tech
- **Understandable** - Clear, predictable interface
- **Robust** - Works with current/future assistive technologies

**React-Specific Concerns:**

**1. Semantic HTML:**
```jsx
// ❌ Div soup
<div onClick={handleClick}>Click me</div>
<div className="heading">Title</div>

// ✅ Semantic elements
<button onClick={handleClick}>Click me</button>
<h1>Title</h1>
```

**2. Focus Management in SPAs:**
```jsx
// After route change, focus should move to main content
function Page() {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <main>
      <h1 ref={headingRef} tabIndex={-1}>Page Title</h1>
      {/* Content */}
    </main>
  );
}
```

**3. ARIA for Custom Components:**
```jsx
// Custom dropdown needs ARIA
function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <button
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="dropdown-label"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || 'Select...'}
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-activedescendant={`option-${activeIndex}`}
        >
          {options.map((opt, i) => (
            <li
              key={opt.value}
              id={`option-${i}`}
              role="option"
              aria-selected={opt.value === value}
              onClick={() => onChange(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

**4. Live Regions for Dynamic Content:**
```jsx
function Notifications() {
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Screen readers announce changes */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {message}
      </div>

      {/* For urgent announcements */}
      <div
        role="alert"
        aria-live="assertive"
      >
        {urgentMessage}
      </div>
    </>
  );
}
```

**5. Keyboard Navigation:**
```jsx
function TabPanel({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowRight':
        setActiveTab((prev) => (prev + 1) % tabs.length);
        break;
      case 'ArrowLeft':
        setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
        break;
      case 'Home':
        setActiveTab(0);
        break;
      case 'End':
        setActiveTab(tabs.length - 1);
        break;
    }
  }

  return (
    <div role="tablist" onKeyDown={handleKeyDown}>
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={i === activeTab}
          tabIndex={i === activeTab ? 0 : -1}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
```

**Testing Tools:**

```bash
# ESLint plugin (catches issues during development)
npm install eslint-plugin-jsx-a11y

# Automated testing
npm install @axe-core/react  # Runtime warnings in dev
npm install jest-axe          # Jest assertions
```

```jsx
// jest-axe example
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('form is accessible', async () => {
  const { container } = render(<LoginForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

**Senior insight:** Accessibility isn't optional - it's a legal requirement (ADA, WCAG 2.1 AA). Build it in from the start - retrofitting is expensive. Use native elements when possible; only reach for ARIA when building truly custom interactions.

---

### Q: How do you handle focus management in React SPAs?

**Answer:**

SPAs break the browser's natural focus behavior on navigation. You need to manage it manually.

**Problem:**
```jsx
// User clicks link, content changes, but focus stays on link
// Screen reader users don't know content changed
```

**Solution 1: Focus Main Content on Route Change:**
```jsx
// Layout component
function Layout({ children }) {
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Focus main content on route change
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <>
      <nav>...</nav>
      <main ref={mainRef} tabIndex={-1}>
        {children}
      </main>
    </>
  );
}
```

**Solution 2: Announce Route Changes:**
```jsx
function RouteAnnouncer() {
  const [announcement, setAnnouncement] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Get page title or derive from route
    const pageTitle = document.title;
    setAnnouncement(`Navigated to ${pageTitle}`);
  }, [location]);

  return (
    <div
      role="status"
      aria-live="assertive"
      aria-atomic="true"
      className="sr-only"  // Visually hidden
    >
      {announcement}
    </div>
  );
}
```

**Solution 3: Focus Trapping in Modals:**
```jsx
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Save current focus
      previousFocus.current = document.activeElement;
      // Focus modal
      modalRef.current?.focus();
    } else {
      // Restore focus on close
      previousFocus.current?.focus();
    }
  }, [isOpen]);

  // Trap focus within modal
  function handleKeyDown(e) {
    if (e.key === 'Tab') {
      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    if (e.key === 'Escape') onClose();
  }

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}
```

**Using Focus-Trap Library:**
```jsx
import FocusTrap from 'focus-trap-react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <FocusTrap>
      <div role="dialog" aria-modal="true">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </FocusTrap>
  );
}
```

**Senior insight:** Focus management is critical for keyboard/screen reader users. Test with keyboard-only navigation. Libraries like `@radix-ui/react-dialog` and `react-aria` handle focus management properly - use them for complex components.

---

### Q: How do you test accessibility in React applications?

**Answer:**

Accessibility testing combines automated tools, manual testing, and assistive technology verification.

**1. Automated Testing with jest-axe:**

```jsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <button aria-label="Submit form">Submit</button>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('detects missing button text', async () => {
    const { container } = render(
      <button><Icon name="check" /></button>  // No accessible name!
    );

    const results = await axe(container);
    expect(results.violations).toHaveLength(1);
    expect(results.violations[0].id).toBe('button-name');
  });
});
```

**2. Testing with React Testing Library (A11y First):**

```jsx
import { render, screen } from '@testing-library/react';

test('form inputs have associated labels', () => {
  render(<LoginForm />);

  // getByLabelText ensures label-input association
  const emailInput = screen.getByLabelText('Email address');
  const passwordInput = screen.getByLabelText('Password');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('errors are announced to screen readers', async () => {
  const user = userEvent.setup();
  render(<LoginForm />);

  await user.click(screen.getByRole('button', { name: 'Submit' }));

  // Check error is in accessible role
  const error = await screen.findByRole('alert');
  expect(error).toHaveTextContent('Email is required');
});

test('modal can be operated with keyboard', async () => {
  const user = userEvent.setup();
  render(<ModalWithTrigger />);

  // Open with Enter key
  await user.tab();
  await user.keyboard('{Enter}');

  const dialog = await screen.findByRole('dialog');
  expect(dialog).toBeVisible();

  // Close with Escape
  await user.keyboard('{Escape}');
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
```

**3. Storybook + A11y Addon:**

```jsx
// .storybook/main.js
module.exports = {
  addons: ['@storybook/addon-a11y'],
};

// Button.stories.tsx
export const Primary = {
  args: { children: 'Click me' },
};

// A11y panel shows violations directly in Storybook
```

**4. E2E Testing with Playwright:**

```javascript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    // Enable accessibility scanning
    actionTimeout: 10000,
  },
});

// tests/accessibility.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage has no accessibility violations', async ({ page }) => {
  await page.goto('/');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test('form with violations', async ({ page }) => {
  await page.goto('/contact');

  const results = await new AxeBuilder({ page })
    .include('#contact-form')
    .analyze();

  // Check for specific rule
  const colorContrastViolations = results.violations.filter(
    v => v.id === 'color-contrast'
  );
  expect(colorContrastViolations).toHaveLength(0);
});
```

**5. Manual Testing Checklist:**

| Test | How |
|------|-----|
| Keyboard navigation | Tab through entire page, check focus visible |
| Skip links | First Tab should offer "Skip to content" |
| Focus trapping | Can't Tab out of modals |
| Color contrast | Use browser devtools or extensions |
| Zoom to 200% | Layout shouldn't break |
| Screen reader | Test with VoiceOver/NVDA |
| Reduced motion | Test with `prefers-reduced-motion` |

**6. Screen Reader Testing:**

```jsx
// Key things to verify with screen reader:

// 1. Headings create outline
// VoiceOver: Ctrl+Opt+U → Headers
// NVDA: H to navigate by heading

// 2. Forms announce properly
// "Email, required, text field"
// "Password, required, password field"

// 3. Dynamic content announced
<div role="status" aria-live="polite">
  {message} {/* Screen reader announces when changed */}
</div>

// 4. Images have alt text
<img src="chart.png" alt="Sales increased 50% in Q4" />
```

**CI Integration:**

```yaml
# .github/workflows/a11y.yml
jobs:
  accessibility:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run test:a11y  # jest with jest-axe
      - run: npx playwright test tests/accessibility/
```

**Senior insight:** Automated tools catch ~30-40% of issues (missing labels, color contrast, invalid ARIA). Manual testing catches context-dependent issues (confusing flow, poor announcements). Test with real users of assistive tech when possible. Make a11y part of Definition of Done, not an afterthought.

---

### Q: Explain ARIA roles and when you would use custom roles vs semantic HTML

**Answer:**

**The First Rule of ARIA:** Don't use ARIA if native HTML works.

```jsx
// ❌ Unnecessary ARIA
<div role="button" tabIndex={0} onClick={handleClick}>
  Click me
</div>

// ✅ Just use a button
<button onClick={handleClick}>
  Click me
</button>
```

**When Semantic HTML Isn't Enough:**

**1. Custom interactive components:**

```jsx
// Tabs - no native HTML equivalent
function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div role="tablist">
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === i}
          aria-controls={`panel-${tab.id}`}
          onClick={() => onChange(i)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function TabPanel({ id, hidden, children }) {
  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      hidden={hidden}
    >
      {children}
    </div>
  );
}
```

**2. Dynamic content announcements:**

```jsx
// Live regions announce changes to screen readers
function Notification({ message }) {
  return (
    <div
      role="status"      // Polite announcement
      aria-live="polite" // Wait for pause to announce
    >
      {message}
    </div>
  );
}

function Alert({ message }) {
  return (
    <div
      role="alert"       // Assertive - announces immediately
      aria-live="assertive"
    >
      {message}
    </div>
  );
}
```

**3. Relationships that HTML can't express:**

```jsx
// Describing what controls what
<button aria-controls="menu-dropdown" aria-expanded={isOpen}>
  Menu
</button>

<ul id="menu-dropdown" aria-labelledby="menu-button">
  {/* Menu items */}
</ul>

// Describing progress
<div
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label="Upload progress"
/>

// Grouping with description
<fieldset>
  <legend id="payment-legend">Payment method</legend>
  <div role="group" aria-labelledby="payment-legend">
    {/* Radio buttons */}
  </div>
</fieldset>
```

**Common ARIA Patterns:**

| Use Case | Role/Attribute | Example |
|----------|---------------|---------|
| Expandable content | aria-expanded | Accordion, dropdown |
| Loading state | aria-busy | Form submitting |
| Current page | aria-current="page" | Navigation |
| Required field | aria-required | Form inputs |
| Invalid field | aria-invalid | Form validation |
| Descriptions | aria-describedby | Help text |
| Hidden but readable | aria-hidden="false" | Icon + label |
| Hidden from a11y | aria-hidden="true" | Decorative icons |

**role="presentation" vs aria-hidden:**

```jsx
// role="presentation" - removes semantic meaning
// Still visible and in tab order
<table role="presentation">
  {/* Layout table, not data table */}
</table>

// aria-hidden="true" - hides from assistive tech
// Still visible but not announced
<span aria-hidden="true">★</span>
<span className="sr-only">Rated 4 stars</span>
```

**When NOT to Use Custom Roles:**

```jsx
// ❌ Wrong: role on wrong element
<span role="heading" aria-level="2">Title</span>
// ✅ Just use h2
<h2>Title</h2>

// ❌ Wrong: redundant role
<button role="button">Click</button>
// ✅ Button already has implicit role
<button>Click</button>

// ❌ Wrong: misusing landmark roles
<div role="main">
  <div role="main">  {/* Only one main per page! */}
  </div>
</div>
```

**The ARIA Authoring Practices Guide:**

```jsx
// For complex widgets, follow WAI-ARIA Authoring Practices
// https://www.w3.org/WAI/ARIA/apg/patterns/

// Example: Combobox with listbox pattern
<input
  role="combobox"
  aria-expanded={isOpen}
  aria-controls="suggestions"
  aria-autocomplete="list"
  aria-activedescendant={activeId}
/>
<ul id="suggestions" role="listbox">
  {suggestions.map(s => (
    <li role="option" id={s.id} aria-selected={s.id === activeId}>
      {s.label}
    </li>
  ))}
</ul>
```

**Senior insight:** ARIA fixes accessibility gaps in HTML, but wrong ARIA is worse than no ARIA. Native HTML elements have built-in behaviors (keyboard support, focus management) that ARIA roles don't provide - you must implement them yourself. When building complex widgets, use the WAI-ARIA Authoring Practices Guide or adopt libraries like Radix UI, Headless UI, or React Aria that implement patterns correctly.

---

### Q: How do you handle accessible forms in React?

**Answer:**

Accessible forms ensure all users can understand, navigate, and complete forms successfully.

**1. Label Association:**

```jsx
// ✅ Explicit association with htmlFor
<label htmlFor="email">Email address</label>
<input id="email" type="email" />

// ✅ Implicit association (wrapping)
<label>
  Email address
  <input type="email" />
</label>

// ✅ aria-labelledby for complex labels
<span id="card-label">Credit card number</span>
<span id="card-format">(1234 5678 9012 3456)</span>
<input aria-labelledby="card-label card-format" />

// ✅ aria-label for visually hidden labels
<input
  aria-label="Search products"
  placeholder="Search..."
  type="search"
/>
```

**2. Required Fields:**

```jsx
// Use both visual and semantic indicators
<label htmlFor="email">
  Email address
  <span aria-hidden="true" className="required">*</span>
</label>
<input
  id="email"
  type="email"
  aria-required="true"
  required
/>

// Or in the label itself
<label htmlFor="phone">
  Phone number (required)
</label>
```

**3. Error Handling:**

```jsx
function FormField({ label, error, ...inputProps }) {
  const inputId = useId();
  const errorId = `${inputId}-error`;

  return (
    <div className="form-field">
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />
      {error && (
        <span id={errorId} role="alert" className="error">
          {error}
        </span>
      )}
    </div>
  );
}

// Form-level errors should also be announced
function Form() {
  const [formError, setFormError] = useState(null);

  return (
    <form onSubmit={handleSubmit}>
      {formError && (
        <div role="alert" className="form-error">
          {formError}
        </div>
      )}

      <FormField
        label="Email"
        name="email"
        error={errors.email}
      />
      {/* ... */}
    </form>
  );
}
```

**4. Help Text and Instructions:**

```jsx
// Use aria-describedby for additional context
<label htmlFor="password">Password</label>
<input
  id="password"
  type="password"
  aria-describedby="password-requirements"
/>
<p id="password-requirements" className="help-text">
  Must be at least 8 characters with one number and one special character.
</p>
```

**5. Fieldsets for Groups:**

```jsx
// Group related inputs with fieldset and legend
<fieldset>
  <legend>Shipping Address</legend>

  <FormField label="Street" name="street" />
  <FormField label="City" name="city" />
  <FormField label="ZIP Code" name="zip" />
</fieldset>

// For radio/checkbox groups
<fieldset>
  <legend>Preferred contact method</legend>

  <label>
    <input type="radio" name="contact" value="email" />
    Email
  </label>
  <label>
    <input type="radio" name="contact" value="phone" />
    Phone
  </label>
</fieldset>
```

**6. Focus Management on Errors:**

```jsx
function Form() {
  const firstErrorRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const errors = validate(formData);

    if (Object.keys(errors).length > 0) {
      // Focus first error field
      firstErrorRef.current?.focus();
      // Or focus error summary
      document.getElementById('error-summary')?.focus();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {hasErrors && (
        <div id="error-summary" tabIndex={-1} role="alert">
          <h2>Please fix the following errors:</h2>
          <ul>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>
                <a href={`#${field}`}>{message}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* ... */}
    </form>
  );
}
```

**7. Loading and Disabled States:**

```jsx
<button
  type="submit"
  disabled={isSubmitting}
  aria-disabled={isSubmitting}
  aria-busy={isSubmitting}
>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</button>

// For the whole form
<form aria-busy={isSubmitting}>
  {/* ... */}
</form>
```

**8. Autocomplete Attributes:**

```jsx
// Help password managers and autofill
<input type="email" autoComplete="email" />
<input type="password" autoComplete="current-password" />
<input type="password" autoComplete="new-password" />
<input type="text" autoComplete="name" />
<input type="tel" autoComplete="tel" />
<input type="text" autoComplete="address-line1" />
```

**Complete Accessible Form Example:**

```jsx
function ContactForm() {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const errorSummaryRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      errorSummaryRef.current?.focus();
      return;
    }

    setIsSubmitting(true);
    await submitForm(formData);
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={isSubmitting} noValidate>
      {Object.keys(errors).length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="error-heading"
        >
          <h2 id="error-heading">There were errors with your submission</h2>
          <ul>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>
                <a href={`#${field}`}>{message}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <FormField
        id="name"
        label="Full name"
        required
        autoComplete="name"
        error={errors.name}
      />

      <FormField
        id="email"
        label="Email address"
        type="email"
        required
        autoComplete="email"
        error={errors.email}
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

**Senior insight:** Common form a11y failures: missing labels, errors not announced, errors without programmatic association, and no focus management after validation. Use `noValidate` with custom validation for consistent UX, but ensure your validation is more accessible than native browser validation. Test with screen reader to ensure error announcements work.
