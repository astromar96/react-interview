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

---

### Q: Explain aria-live regions and how to implement them properly in React

**Answer:**

ARIA live regions enable screen readers to announce dynamic content changes without requiring the user to navigate to that content. This is essential for SPAs where content updates frequently.

**Live Region Politeness Levels:**

| Value | Behavior | Use Case |
|-------|----------|----------|
| `off` | No announcements | Default, manually managed |
| `polite` | Announces when user is idle | Status updates, search results |
| `assertive` | Interrupts immediately | Errors, urgent alerts |

**Basic Implementation:**

```jsx
// ❌ Common mistake: aria-live added when content appears
function Notification({ message }) {
  if (!message) return null;

  // This won't be announced! Region wasn't in DOM when populated
  return (
    <div aria-live="polite">
      {message}
    </div>
  );
}

// ✅ Correct: aria-live region always in DOM
function Notification({ message }) {
  return (
    <div aria-live="polite" aria-atomic="true">
      {message} {/* Empty when no message, announced when populated */}
    </div>
  );
}
```

**Role Shortcuts:**

```jsx
// These roles have implicit aria-live behavior

// role="status" = aria-live="polite"
<div role="status">Loading complete</div>

// role="alert" = aria-live="assertive"
<div role="alert">Form submission failed!</div>

// role="log" = aria-live="polite" with aria-relevant="additions"
<div role="log">
  {chatMessages.map(msg => <p key={msg.id}>{msg.text}</p>)}
</div>

// role="timer" = aria-live="off" (needs manual handling)
<div role="timer" aria-live="off" aria-atomic="true">
  {formatTime(timeRemaining)}
</div>
```

**aria-atomic and aria-relevant:**

```jsx
// aria-atomic="true" - announce entire region (default for role="alert")
<div aria-live="polite" aria-atomic="true">
  {/* Screen reader reads whole region when anything changes */}
  Your cart has {itemCount} items totaling ${total}
</div>

// aria-atomic="false" - announce only changed nodes
<ul aria-live="polite" aria-atomic="false">
  {/* Only new list items are announced */}
  {notifications.map(n => <li key={n.id}>{n.message}</li>)}
</ul>

// aria-relevant controls what changes are announced
<div
  aria-live="polite"
  aria-relevant="additions removals" // "additions text removals all"
>
  {/* Announces when items added or removed */}
</div>
```

**Robust Announcement Hook:**

```tsx
import { useCallback, useRef, useState } from 'react';

interface AnnouncerOptions {
  politeness?: 'polite' | 'assertive';
  timeout?: number;
}

function useAnnouncer() {
  const [politeMessage, setPoliteMessage] = useState('');
  const [assertiveMessage, setAssertiveMessage] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout>();

  const announce = useCallback((
    message: string,
    { politeness = 'polite', timeout = 7000 }: AnnouncerOptions = {}
  ) => {
    const setter = politeness === 'assertive' ? setAssertiveMessage : setPoliteMessage;

    // Clear then set (ensures re-announcement of same message)
    setter('');

    // Use requestAnimationFrame to ensure DOM updates
    requestAnimationFrame(() => {
      setter(message);
    });

    // Clear after timeout
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setter('');
    }, timeout);
  }, []);

  const Announcer = useCallback(() => (
    <>
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {politeMessage}
      </div>
      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
      >
        {assertiveMessage}
      </div>
    </>
  ), [politeMessage, assertiveMessage]);

  return { announce, Announcer };
}

// Usage
function App() {
  const { announce, Announcer } = useAnnouncer();

  async function handleSubmit() {
    try {
      await submitForm();
      announce('Form submitted successfully');
    } catch (error) {
      announce('Submission failed. Please try again.', { politeness: 'assertive' });
    }
  }

  return (
    <>
      <Announcer />
      <form onSubmit={handleSubmit}>
        {/* ... */}
      </form>
    </>
  );
}
```

**Common Patterns:**

```jsx
// 1. Search results count
function SearchResults({ results, query }) {
  return (
    <>
      <div role="status" aria-live="polite">
        {results.length} results found for "{query}"
      </div>
      <ul>
        {results.map(r => <ResultItem key={r.id} result={r} />)}
      </ul>
    </>
  );
}

// 2. Form validation (on blur or submit)
function EmailField() {
  const [error, setError] = useState('');

  return (
    <div>
      <input
        type="email"
        aria-invalid={!!error}
        aria-describedby={error ? 'email-error' : undefined}
        onBlur={e => validateEmail(e.target.value, setError)}
      />
      {/* role="alert" immediately announces errors */}
      {error && (
        <span id="email-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

// 3. Async operation status
function SaveButton({ onSave }) {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  async function handleClick() {
    setStatus('saving');
    try {
      await onSave();
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2000);
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <button onClick={handleClick} disabled={status === 'saving'}>
        {status === 'saving' ? 'Saving...' : 'Save'}
      </button>

      {/* Separate live region for status - not inside button */}
      <span role="status" aria-live="polite" className="sr-only">
        {status === 'saved' && 'Changes saved successfully'}
        {status === 'error' && 'Failed to save changes'}
      </span>
    </>
  );
}

// 4. Chat/log with new messages
function ChatLog({ messages }) {
  const prevCountRef = useRef(messages.length);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    if (messages.length > prevCountRef.current) {
      const newMsg = messages[messages.length - 1];
      setAnnouncement(`${newMsg.author} says: ${newMsg.text}`);
    }
    prevCountRef.current = messages.length;
  }, [messages]);

  return (
    <>
      <div role="log" aria-live="polite" className="sr-only">
        {announcement}
      </div>
      <div className="chat-messages">
        {messages.map(m => <Message key={m.id} {...m} />)}
      </div>
    </>
  );
}
```

**Timing Considerations:**

```jsx
// Problem: Rapid updates flood screen reader
function Counter({ count }) {
  return (
    <div aria-live="polite">
      Count: {count} {/* Announced on every increment! */}
    </div>
  );
}

// Solution: Debounce announcements
function Counter({ count }) {
  const [announcedCount, setAnnouncedCount] = useState(count);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnnouncedCount(count);
    }, 1000); // Wait for rapid changes to settle

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <>
      <div>Count: {count}</div>
      <div role="status" aria-live="polite" className="sr-only">
        Count is now {announcedCount}
      </div>
    </>
  );
}
```

**Visually Hidden Utility:**

```css
/* sr-only class - visible to screen readers only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

**Senior insight:** The most common aria-live mistake is adding the live region dynamically with content. The region must exist in the DOM *before* content populates it. Also, don't over-announce—screen reader users will mute your site if every hover state triggers an announcement. Reserve assertive for actual errors; use polite for status updates. Test with a screen reader because timing and announcement behavior varies between NVDA, VoiceOver, and JAWS.

---

### Q: How do you implement focus trapping for modals and dialogs?

**Answer:**

Focus trapping keeps keyboard focus within a modal or dialog, preventing users from tabbing to elements behind it. This is essential for accessibility—without it, keyboard users can tab into obscured content.

**Manual Focus Trap Implementation:**

```tsx
import { useEffect, useRef, useCallback } from 'react';

function useFocusTrap<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Save current focus to restore later
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus the container or first focusable element
    const focusableElements = getFocusableElements(container);
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else {
      container.focus();
    }

    // Cleanup: restore focus when unmounting
    return () => {
      previousFocusRef.current?.focus();
    };
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    const container = containerRef.current;
    if (!container) return;

    const focusableElements = getFocusableElements(container);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Shift+Tab on first element -> go to last
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    }
    // Tab on last element -> go to first
    else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }, []);

  return { containerRef, handleKeyDown };
}

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  return Array.from(container.querySelectorAll<HTMLElement>(selector))
    .filter(el => el.offsetParent !== null); // Filter out hidden elements
}

// Usage
function Modal({ isOpen, onClose, children }) {
  const { containerRef, handleKeyDown } = useFocusTrap<HTMLDivElement>();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        onClick={e => e.stopPropagation()}
        onKeyDown={(e) => {
          handleKeyDown(e);
          if (e.key === 'Escape') onClose();
        }}
      >
        <h2 id="modal-title">Modal Title</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
```

**Using the `inert` Attribute (Modern Approach):**

```tsx
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Make everything outside the modal inert
    const mainContent = document.getElementById('root');
    if (mainContent && mainContent !== modalRef.current?.parentElement) {
      mainContent.setAttribute('inert', '');
    }

    // Focus the modal
    modalRef.current?.focus();

    return () => {
      mainContent?.removeAttribute('inert');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Render modal in portal to avoid DOM hierarchy issues
  return createPortal(
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={e => e.key === 'Escape' && onClose()}
    >
      {children}
    </div>,
    document.body
  );
}
```

**Focus Trap Library (Recommended):**

```tsx
import FocusTrap from 'focus-trap-react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <FocusTrap
      focusTrapOptions={{
        // Options for customization
        initialFocus: '#first-input', // Selector or false
        fallbackFocus: '[role="dialog"]',
        escapeDeactivates: true,
        clickOutsideDeactivates: true,
        returnFocusOnDeactivate: true,
        allowOutsideClick: (e) => e.target.closest('.toast'), // Allow clicks on toasts
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <h2 id="dialog-title">Confirm Action</h2>
        <input id="first-input" type="text" />
        {children}
        <button onClick={onClose}>Cancel</button>
        <button onClick={onClose}>Confirm</button>
      </div>
    </FocusTrap>
  );
}
```

**Handling Nested Focus Traps:**

```tsx
// Scenario: Modal opens another modal (e.g., confirmation dialog)

function ParentModal({ isOpen, onClose }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <FocusTrap
      active={isOpen && !confirmOpen} // Deactivate when child modal opens
      focusTrapOptions={{ returnFocusOnDeactivate: false }}
    >
      <div role="dialog" aria-modal="true">
        <h2>Parent Modal</h2>
        <button onClick={() => setConfirmOpen(true)}>Delete</button>

        {/* Nested modal has its own focus trap */}
        <ConfirmDialog
          isOpen={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          onConfirm={() => { /* delete logic */ }}
        />
      </div>
    </FocusTrap>
  );
}
```

**Focus Restoration Edge Cases:**

```tsx
function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  const open = useCallback((trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);

    // Restore focus after state update and re-render
    requestAnimationFrame(() => {
      // Check if trigger still exists (might have been removed)
      if (triggerRef.current && document.contains(triggerRef.current)) {
        triggerRef.current.focus();
      } else {
        // Fallback: focus something sensible
        document.querySelector<HTMLElement>('[data-focus-fallback]')?.focus();
      }
    });
  }, []);

  return { isOpen, open, close };
}
```

**Accessibility Checklist for Modals:**

| Requirement | Implementation |
|-------------|----------------|
| Focus trapped inside | Focus trap hook or library |
| Close on Escape | onKeyDown handler |
| Focus first element on open | autoFocus or initialFocus option |
| Restore focus on close | Save/restore activeElement |
| Background inert | `inert` attribute or aria-hidden |
| Announced as dialog | role="dialog" aria-modal="true" |
| Has accessible name | aria-labelledby pointing to heading |
| Scroll lock on body | overflow: hidden on body |

**Senior insight:** The `inert` attribute is now supported in all modern browsers and is the cleanest solution—it makes content unfocusable AND invisible to assistive tech in one attribute. For production apps, use focus-trap-react or Radix Dialog—they handle edge cases like initial focus, nested traps, and focus restoration that are easy to get wrong. Always test with keyboard-only navigation: can you tab through all interactive elements and never escape the modal?

---

### Q: What are skip links and how do you implement them?

**Answer:**

Skip links allow keyboard users to bypass repetitive navigation and jump directly to main content. They're a WCAG 2.1 Level A requirement and essential for users who can't use a mouse.

**Why Skip Links Matter:**

Without skip links, keyboard users must Tab through every navigation item on every page to reach main content. On a site with 20 nav links, that's 20+ key presses before reaching what they came for.

**Basic Implementation:**

```tsx
// Skip link should be the FIRST focusable element on the page
function Layout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>
        <nav>
          {/* 20+ navigation links */}
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </>
  );
}
```

**CSS for Skip Links:**

```css
/* Visually hidden until focused */
.skip-link {
  position: absolute;
  top: -40px; /* Hidden above viewport */
  left: 0;
  padding: 8px 16px;
  background: #000;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  z-index: 9999;

  /* Transition for smooth appearance */
  transition: top 0.2s ease;
}

/* Visible when focused */
.skip-link:focus {
  top: 0;
  outline: 2px solid #fff;
  outline-offset: 2px;
}

/* Alternative: transform approach */
.skip-link {
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.2s ease;
}

.skip-link:focus {
  transform: translateY(0);
}
```

**Multiple Skip Links:**

```tsx
function Layout() {
  return (
    <>
      <nav aria-label="Skip links" className="skip-links">
        <a href="#main-content">Skip to main content</a>
        <a href="#primary-nav">Skip to navigation</a>
        <a href="#search">Skip to search</a>
        <a href="#footer">Skip to footer</a>
      </nav>

      <header>
        <SearchBar id="search" />
        <nav id="primary-nav" aria-label="Primary">
          {/* Navigation */}
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        {/* Content */}
      </main>

      <footer id="footer">
        {/* Footer */}
      </footer>
    </>
  );
}
```

**SPA Navigation Handling:**

```tsx
// In SPAs, skip link needs to work after client-side navigation
function useSkipLinkFocus() {
  const location = useLocation();

  useEffect(() => {
    // If URL has hash, focus that element
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element instanceof HTMLElement) {
        element.focus();
        element.scrollIntoView();
      }
    }
  }, [location]);
}

// Skip link that works with React Router
function SkipLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const main = document.getElementById('main-content');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
      // Update URL without navigation
      window.history.pushState(null, '', '#main-content');
    }
  };

  return (
    <a href="#main-content" className="skip-link" onClick={handleClick}>
      Skip to main content
    </a>
  );
}
```

**Target Element Setup:**

```tsx
// The target needs tabIndex={-1} to receive programmatic focus
function MainContent({ children }) {
  const mainRef = useRef<HTMLElement>(null);

  // Focus main content after route changes (SPA)
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#main-content') {
      mainRef.current?.focus();
    }
  }, [location]);

  return (
    <main
      ref={mainRef}
      id="main-content"
      tabIndex={-1}
      // Remove focus outline since it's not interactive
      style={{ outline: 'none' }}
    >
      {children}
    </main>
  );
}
```

**Skip Links for Complex Layouts:**

```tsx
// Dashboard with sidebar navigation
function DashboardLayout({ children }) {
  return (
    <>
      <div className="skip-links">
        <a href="#main-content">Skip to main content</a>
        <a href="#sidebar-nav">Skip to sidebar navigation</a>
        <a href="#notifications">Skip to notifications</a>
      </div>

      <header>
        <TopNav />
        <div id="notifications" tabIndex={-1}>
          <NotificationBell />
        </div>
      </header>

      <div className="layout">
        <aside id="sidebar-nav" tabIndex={-1}>
          <SidebarNav />
        </aside>

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>
    </>
  );
}
```

**Skip Link Visibility Pattern:**

```tsx
// Some designs show skip link in a banner-style
function SkipLinkBanner() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`skip-banner ${isVisible ? 'visible' : ''}`}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <a href="#main-content">
        Skip to main content
        <span className="keyboard-hint">Press Enter</span>
      </a>
    </div>
  );
}
```

```css
.skip-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #1a1a2e;
  color: white;
  padding: 12px;
  text-align: center;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 10000;
}

.skip-banner.visible,
.skip-banner:focus-within {
  transform: translateY(0);
}

.skip-banner a {
  color: white;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.keyboard-hint {
  background: rgba(255,255,255,0.2);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.875em;
}
```

**Testing Skip Links:**

```tsx
// Jest + Testing Library
test('skip link navigates to main content', async () => {
  const user = userEvent.setup();
  render(<App />);

  // First Tab should focus skip link
  await user.tab();
  expect(screen.getByText('Skip to main content')).toHaveFocus();

  // Enter activates it
  await user.keyboard('{Enter}');
  expect(document.getElementById('main-content')).toHaveFocus();
});

// Playwright E2E
test('skip link workflow', async ({ page }) => {
  await page.goto('/');

  // Tab to skip link
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();

  // Should be visible when focused
  await expect(page.locator('.skip-link')).toBeVisible();

  // Activate and verify focus moves
  await page.keyboard.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();
});
```

**Senior insight:** Skip links are often overlooked because they're invisible in normal use. Test your site by pressing Tab immediately after page load—the skip link should be the first thing that appears. For SPAs, the skip link must work after client-side navigation, not just on initial load. Consider adding skip links to all major sections, not just main content, for complex dashboards.

---

### Q: Explain roving tabindex and other keyboard navigation patterns

**Answer:**

Roving tabindex is a keyboard navigation pattern where only one element in a group is tabbable at a time, and arrow keys move focus within the group. This reduces the number of Tab stops while maintaining full keyboard accessibility.

**The Problem Without Roving Tabindex:**

```jsx
// ❌ Bad: User must Tab through every toolbar button
function Toolbar() {
  return (
    <div role="toolbar">
      <button>Bold</button>      {/* Tab stop 1 */}
      <button>Italic</button>    {/* Tab stop 2 */}
      <button>Underline</button> {/* Tab stop 3 */}
      <button>Link</button>      {/* Tab stop 4 */}
      {/* 10 more buttons = 14 Tab presses to get through */}
    </div>
  );
}
```

**Roving Tabindex Pattern:**

```tsx
function Toolbar() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const buttons = ['Bold', 'Italic', 'Underline', 'Link', 'Image'];
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    let newIndex = index;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        newIndex = (index + 1) % buttons.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        newIndex = (index - 1 + buttons.length) % buttons.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = buttons.length - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    setFocusedIndex(newIndex);
    refs.current[newIndex]?.focus();
  }

  return (
    <div role="toolbar" aria-label="Text formatting">
      {buttons.map((label, index) => (
        <button
          key={label}
          ref={el => refs.current[index] = el}
          tabIndex={index === focusedIndex ? 0 : -1}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={() => setFocusedIndex(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
```

**Reusable Roving Tabindex Hook:**

```tsx
interface UseRovingTabindexOptions {
  orientation?: 'horizontal' | 'vertical' | 'both';
  loop?: boolean;
}

function useRovingTabindex<T extends HTMLElement>(
  itemCount: number,
  options: UseRovingTabindexOptions = {}
) {
  const { orientation = 'horizontal', loop = true } = options;
  const [focusedIndex, setFocusedIndex] = useState(0);
  const refs = useRef<(T | null)[]>([]);

  const setRef = useCallback((index: number) => (el: T | null) => {
    refs.current[index] = el;
  }, []);

  const getTabIndex = useCallback((index: number) =>
    index === focusedIndex ? 0 : -1
  , [focusedIndex]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    const horizontalKeys = ['ArrowLeft', 'ArrowRight'];
    const verticalKeys = ['ArrowUp', 'ArrowDown'];

    let delta = 0;

    if (orientation !== 'vertical' && horizontalKeys.includes(e.key)) {
      delta = e.key === 'ArrowRight' ? 1 : -1;
    } else if (orientation !== 'horizontal' && verticalKeys.includes(e.key)) {
      delta = e.key === 'ArrowDown' ? 1 : -1;
    } else if (e.key === 'Home') {
      delta = -index;
    } else if (e.key === 'End') {
      delta = itemCount - 1 - index;
    } else {
      return; // Don't prevent default for other keys
    }

    e.preventDefault();

    let newIndex = index + delta;
    if (loop) {
      newIndex = (newIndex + itemCount) % itemCount;
    } else {
      newIndex = Math.max(0, Math.min(itemCount - 1, newIndex));
    }

    setFocusedIndex(newIndex);
    refs.current[newIndex]?.focus();
  }, [itemCount, orientation, loop]);

  return { setRef, getTabIndex, handleKeyDown, focusedIndex, setFocusedIndex };
}
```

**Tab Panel Navigation (WAI-ARIA Pattern):**

```tsx
function Tabs({ tabs }: { tabs: { id: string; label: string; content: React.ReactNode }[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    let newIndex = index;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = (index + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        newIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    setActiveTab(newIndex);
    tabRefs.current[newIndex]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Content tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={el => tabRefs.current[index] = el}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={index === activeTab}
            aria-controls={`panel-${tab.id}`}
            tabIndex={index === activeTab ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={index !== activeTab}
          tabIndex={0}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
```

**Menu Navigation Pattern:**

```tsx
function DropdownMenu({ items }: { items: { label: string; onClick: () => void }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const menuRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [isOpen, focusedIndex]);

  function handleMenuKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(i => (i + 1) % items.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(i => (i - 1 + items.length) % items.length);
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(items.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        items[focusedIndex].onClick();
        setIsOpen(false);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  }

  return (
    <div className="dropdown">
      <button
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Options
      </button>

      {isOpen && (
        <ul
          ref={menuRef}
          role="menu"
          onKeyDown={handleMenuKeyDown}
        >
          {items.map((item, index) => (
            <li
              key={item.label}
              ref={el => itemRefs.current[index] = el}
              role="menuitem"
              tabIndex={index === focusedIndex ? 0 : -1}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

**Grid Navigation (2D):**

```tsx
function GridNavigation({ rows, cols, items }: {
  rows: number;
  cols: number;
  items: string[];
}) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: React.KeyboardEvent) {
    const row = Math.floor(focusedIndex / cols);
    const col = focusedIndex % cols;
    let newIndex = focusedIndex;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = row * cols + ((col + 1) % cols);
        break;
      case 'ArrowLeft':
        newIndex = row * cols + ((col - 1 + cols) % cols);
        break;
      case 'ArrowDown':
        newIndex = ((row + 1) % rows) * cols + col;
        break;
      case 'ArrowUp':
        newIndex = ((row - 1 + rows) % rows) * cols + col;
        break;
      case 'Home':
        newIndex = e.ctrlKey ? 0 : row * cols;
        break;
      case 'End':
        newIndex = e.ctrlKey ? items.length - 1 : row * cols + cols - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    setFocusedIndex(newIndex);
    refs.current[newIndex]?.focus();
  }

  return (
    <div
      role="grid"
      aria-label="Color picker"
      onKeyDown={handleKeyDown}
      style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {items.map((item, index) => (
        <button
          key={index}
          ref={el => refs.current[index] = el}
          role="gridcell"
          tabIndex={index === focusedIndex ? 0 : -1}
          onClick={() => setFocusedIndex(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
```

**Keyboard Pattern Quick Reference:**

| Component | Tab Behavior | Arrow Behavior |
|-----------|--------------|----------------|
| Toolbar | Single stop | Left/Right moves focus |
| Tab list | Single stop | Left/Right moves & activates |
| Menu | Single stop | Up/Down moves, Enter selects |
| Tree | Single stop | Up/Down siblings, Left/Right expand |
| Grid | Single stop | All arrows for 2D navigation |
| Radio group | Single stop | Up/Down or Left/Right |
| Listbox | Single stop | Up/Down moves, Enter selects |

**Senior insight:** Roving tabindex dramatically improves keyboard UX for widget-heavy interfaces. The key insight is that Tab navigates *between* components while arrows navigate *within* components. Follow WAI-ARIA Authoring Practices patterns exactly—users expect consistent behavior. Libraries like Radix, Headless UI, and React Aria implement these patterns correctly; use them unless you have a compelling reason to build custom.

---

### Q: How do you test with screen readers and what should you verify?

**Answer:**

Screen reader testing is essential for verifying that your application is usable by blind and visually impaired users. Automated tools catch ~30-40% of issues; screen reader testing catches the rest.

**Screen Reader Landscape:**

| Screen Reader | OS | Browser | Market Share |
|---------------|-----|---------|--------------|
| NVDA | Windows | Firefox/Chrome | ~40% |
| JAWS | Windows | Chrome/Edge | ~30% |
| VoiceOver | macOS/iOS | Safari | ~25% |
| TalkBack | Android | Chrome | ~5% |

**VoiceOver Quick Start (macOS):**

```bash
# Enable VoiceOver
Cmd + F5

# Basic navigation
Ctrl + Option + Right Arrow  # Next element
Ctrl + Option + Left Arrow   # Previous element
Ctrl + Option + Space        # Activate/click
Ctrl + Option + U            # Open rotor (landmarks, headings, links)
Ctrl + Option + A            # Start reading all

# Web navigation
Ctrl + Option + Cmd + H      # Next heading
Ctrl + Option + Cmd + J      # Next form control
Ctrl + Option + Cmd + L      # Next link
```

**NVDA Quick Start (Windows):**

```
# Download from nvaccess.org (free)

# Basic commands (Insert = NVDA key)
Insert + Space              # Toggle focus/browse mode
Tab / Shift+Tab             # Navigate focusable elements
H / Shift+H                 # Next/previous heading
F / Shift+F                 # Next/previous form field
D / Shift+D                 # Next/previous landmark
B / Shift+B                 # Next/previous button
Insert + F7                 # Elements list (links, headings, landmarks)
```

**What to Test:**

```tsx
// 1. PAGE STRUCTURE
// Test: Can user understand page layout?
// VoiceOver Rotor → Landmarks should show logical structure

<header role="banner">         {/* "banner" landmark */}
  <nav aria-label="Primary">   {/* "Primary navigation" */}
</header>
<main role="main">             {/* "main" landmark */}
<aside aria-label="Related">   {/* "Related complementary" */}
<footer role="contentinfo">    {/* "content info" landmark */}

// 2. HEADING HIERARCHY
// Test: H key should navigate through logical outline

<h1>Page Title</h1>           {/* Only one h1 */}
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>    {/* Don't skip levels */}

// 3. FORM FIELDS
// Test: Each field announces label, type, required status, errors

<label htmlFor="email">Email (required)</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : "email-hint"}
/>
// Should announce: "Email, required, edit text, invalid entry"

// 4. IMAGES
// Test: Meaningful images described, decorative images silent

<img src="chart.png" alt="Sales increased 50% in Q4 2024" />
<img src="divider.png" alt="" />  {/* Decorative - silent */}
<Icon aria-hidden="true" />       {/* Decorative icon */}

// 5. LINKS
// Test: Link text makes sense out of context

// ❌ Bad - "click here" means nothing in links list
<a href="/more">Click here</a>

// ✅ Good - descriptive link text
<a href="/pricing">View pricing plans</a>

// 6. BUTTONS
// Test: Button purpose is clear

// ❌ Bad - no accessible name
<button><Icon name="close" /></button>

// ✅ Good
<button aria-label="Close dialog"><Icon name="close" /></button>

// 7. DYNAMIC CONTENT
// Test: Changes are announced appropriately

<div role="status" aria-live="polite">
  {searchResults.length} results found
</div>
// Should announce when results update

// 8. FOCUS MANAGEMENT
// Test: Focus moves logically, modals trap focus

// After opening modal - focus should be inside
// After closing modal - focus should return to trigger
```

**Screen Reader Testing Checklist:**

```markdown
## Page Load
- [ ] Page title is announced
- [ ] Skip link is first interactive element
- [ ] Main heading (h1) is immediately identifiable

## Navigation
- [ ] All interactive elements are reachable with Tab
- [ ] Focus order matches visual order
- [ ] Current page/section is indicated
- [ ] Keyboard shortcuts work (if provided)

## Content
- [ ] Headings create logical outline
- [ ] Images have appropriate alt text
- [ ] Tables have headers and captions
- [ ] Lists are marked up as lists

## Forms
- [ ] All inputs have associated labels
- [ ] Required fields are indicated
- [ ] Error messages are announced
- [ ] Success/submission is confirmed

## Interactive Components
- [ ] Buttons announce their purpose
- [ ] Links describe their destination
- [ ] Modals trap focus and close with Escape
- [ ] Dropdown menus are navigable with arrows

## Dynamic Content
- [ ] Loading states are announced
- [ ] Error messages appear in live regions
- [ ] Route changes are announced (SPA)
- [ ] Auto-updating content doesn't overwhelm
```

**Automated + Manual Testing Strategy:**

```tsx
// Automated: Catch low-hanging fruit in CI
// jest-axe for unit tests
import { axe, toHaveNoViolations } from 'jest-axe';

test('form is accessible', async () => {
  const { container } = render(<LoginForm />);
  expect(await axe(container)).toHaveNoViolations();
});

// Playwright + axe for E2E
import AxeBuilder from '@axe-core/playwright';

test('checkout page accessibility', async ({ page }) => {
  await page.goto('/checkout');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
```

**Recording Screen Reader Sessions:**

```tsx
// For bug reports and documentation, record your screen
// macOS: Cmd + Shift + 5
// Windows: Win + G (Xbox Game Bar)

// Include in bug reports:
// 1. Screen reader used (NVDA 2024.1, VoiceOver macOS 14)
// 2. Browser and version
// 3. Steps to reproduce
// 4. What was announced vs expected
// 5. Video/audio recording if possible
```

**Common Screen Reader Issues:**

| Issue | What You Hear | Fix |
|-------|---------------|-----|
| Missing label | "Edit text" (no context) | Add `<label>` or `aria-label` |
| Unlabeled button | "Button" | Add text or `aria-label` |
| Broken heading order | Confusing outline | Use sequential h1→h2→h3 |
| Image without alt | Filename announced | Add meaningful `alt` |
| Focus trap escape | Focus leaves modal | Implement proper focus trap |
| Silent updates | Nothing announced | Add `aria-live` region |
| Redundant text | "Link link" | Remove `aria-label="link"` |

**CI Integration for A11y:**

```yaml
# .github/workflows/accessibility.yml
name: Accessibility Tests

on: [push, pull_request]

jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install dependencies
        run: npm ci

      - name: Run jest-axe tests
        run: npm run test:a11y

      - name: Build app
        run: npm run build

      - name: Start server
        run: npm run preview &

      - name: Run Playwright a11y tests
        run: npx playwright test tests/accessibility/

      - name: Upload test results
        uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: a11y-report
          path: playwright-report/
```

**Senior insight:** Screen reader testing feels slow at first but becomes intuitive with practice. Start with VoiceOver on Mac or NVDA on Windows—both are free. Test the critical user journeys first: can a blind user sign up, log in, and complete the core action? Document your findings with recordings. Most importantly, include screen reader users in usability testing when possible—they'll find issues you never considered. The goal isn't perfection; it's ensuring the core experience works for everyone.