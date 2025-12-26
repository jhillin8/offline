# Offline App Module Implementation Guide
## Applying Premium Design Patterns to Your Digital Wellness Product

---

## EXECUTIVE SUMMARY

Based on analysis of Headspace, Calm, Waking Up, Apple HIG, and Stripe documentation, here's your roadmap to avoid "boring scroll" while maintaining information density:

### THE THREE GOLDEN RULES

1. **One Screen = One Purpose** (Calm's approach)
   - Landing: Hook + Context (0 scroll)
   - Content: Learn + Practice (1-2 scroll)
   - Reflect: Apply + Integrate (0 scroll)

2. **70/30 Rule** (Apple's approach)
   - 70% white space for intro/outro screens
   - 60/40 for core content
   - Never below 30% breathing room

3. **5-Minute Sessions** (Headspace's approach)
   - Respect fragmented attention spans
   - Complete value in one sitting
   - Save state automatically

---

## YOUR MODULE STRUCTURE (CONCRETE SPECS)

### MODULE LANDING PAGE

**File:** `ModuleLanding.tsx`

**Layout:**
```typescript
interface ModuleLandingProps {
  moduleNumber: number;
  title: string;
  description: string;
  duration: string;        // e.g., "5-7 minutes"
  practiceCount: number;   // Number of exercises
  iconAnimation: string;   // Lottie or CSS animation
}

// Component structure:
<Container>
  <Background gradient="calm" />           // Full-bleed gradient
  <AnimatedIcon size={200} pulse={true} /> // 3s subtle pulse
  <ModuleTitle size={48}>{title}</ModuleTitle>
  <Description size={18}>{description}</Description>
  <MetaInfo>
    <Duration>{duration}</Duration>
    <PracticeCount>{practiceCount} practices</PracticeCount>
  </MetaInfo>
  <CTAButton primary>Begin Module</CTAButton>
  <CTALink secondary>Save for Later</CTALink>
</Container>
```

**CSS Specifications:**
```css
.module-landing {
  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 48px 24px;

  /* Background */
  background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%);

  /* Content Distribution */
  gap: 24px; /* Between elements */
}

.animated-icon {
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
  animation: subtle-pulse 3s ease-in-out infinite;
}

@keyframes subtle-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
}

.module-title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: #FFFFFF;
  text-align: center;
  max-width: 600px;
  margin: 0;
}

.module-description {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #FFFFFF;
  opacity: 0.9;
  text-align: center;
  max-width: 500px;
  margin: 0;
}

.meta-info {
  display: flex;
  gap: 32px;
  font-size: 16px;
  color: #FFFFFF;
  opacity: 0.8;
}

.cta-button-primary {
  width: 100%;
  max-width: 400px;
  padding: 16px 32px;
  background: #FFFFFF;
  color: #8B5CF6;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
  margin-top: 16px;
}

.cta-button-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
}

.cta-button-primary:active {
  transform: scale(0.98);
}

.cta-link-secondary {
  font-size: 14px;
  color: #FFFFFF;
  opacity: 0.7;
  text-decoration: none;
  margin-top: 8px;
  transition: opacity 200ms ease;
}

.cta-link-secondary:hover {
  opacity: 1;
  text-decoration: underline;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .module-title {
    font-size: 36px;
  }

  .module-description {
    font-size: 16px;
  }

  .module-landing {
    padding: 32px 20px;
  }
}
```

---

### MODULE CONTENT SCREEN

**File:** `ModuleContent.tsx`

**Component Structure:**
```typescript
interface ContentSection {
  id: string;
  heading: string;
  content: string;          // Markdown supported
  bullets?: string[];       // Optional bullet list
  callout?: {              // Optional highlighted box
    text: string;
    type: 'insight' | 'practice' | 'reflection';
  };
  visual?: {               // Optional image/illustration
    src: string;
    alt: string;
  };
}

interface ModuleContentProps {
  sections: ContentSection[];
  currentSection: number;
  totalSections: number;
  onComplete: () => void;
  onSaveProgress: (section: number) => void;
}

// Component structure:
<Container>
  <StickyHeader>
    <ProgressIndicator
      current={currentSection}
      total={totalSections}
      collapsible={true}
    />
  </StickyHeader>

  <ContentArea>
    {sections.map((section, index) => (
      <Section key={section.id} id={section.id}>
        <SectionHeading>{section.heading}</SectionHeading>
        <SectionContent>{section.content}</SectionContent>

        {section.bullets && (
          <BulletList items={section.bullets} />
        )}

        {section.callout && (
          <Callout type={section.callout.type}>
            {section.callout.text}
          </Callout>
        )}

        {section.visual && (
          <Visual src={section.visual.src} alt={section.visual.alt} />
        )}
      </Section>
    ))}
  </ContentArea>

  <BottomCTA>
    <CTAButton primary onClick={onComplete}>
      Continue to Practice
    </CTAButton>
    <CTAButton secondary onClick={() => onSaveProgress(currentSection)}>
      Save Progress
    </CTAButton>
  </BottomCTA>
</Container>
```

**CSS Specifications:**
```css
.module-content-container {
  background: #0A0A0A;
  color: #FFFFFF;
  min-height: 100vh;
  padding-bottom: 120px; /* Space for fixed bottom CTA */
}

/* Sticky Progress Header */
.sticky-header {
  position: sticky;
  top: 0;
  background: #0A0A0A;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 24px;
  z-index: 100;
  transition: padding 300ms ease;
}

.sticky-header.collapsed {
  padding: 12px 24px;
}

.progress-indicator {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.progress-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-dot.active {
  background: #8B5CF6;
  transform: scale(1.4);
}

.progress-dot.completed {
  background: #10B981;
}

/* Content Area */
.content-area {
  max-width: 680px;
  margin: 0 auto;
  padding: 0 24px;
}

.content-section {
  margin-bottom: 48px;
  scroll-margin-top: 80px; /* For anchor navigation */
}

.section-heading {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
  color: #FFFFFF;
  margin: 0 0 24px 0;
  border-bottom: 2px solid #8B5CF6;
  padding-bottom: 12px;
}

.section-content {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: #E5E5E5;
  margin-bottom: 32px;
}

.section-content p {
  margin: 0 0 16px 0;
}

.section-content p:last-child {
  margin-bottom: 0;
}

/* Bullet Lists */
.bullet-list {
  margin: 32px 0;
  padding-left: 0;
  list-style: none;
}

.bullet-list li {
  position: relative;
  padding-left: 32px;
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 1.5;
  color: #E5E5E5;
}

.bullet-list li::before {
  content: "•";
  position: absolute;
  left: 8px;
  color: #8B5CF6;
  font-size: 24px;
  line-height: 1.5;
}

/* Callout Boxes */
.callout {
  background: #1A1A1A;
  border-left: 4px solid #8B5CF6;
  border-radius: 12px;
  padding: 24px;
  margin: 32px 0;
  font-size: 18px;
  line-height: 1.6;
  color: #FFFFFF;
}

.callout.insight {
  border-left-color: #06B6D4;
  background: linear-gradient(90deg, rgba(6, 182, 212, 0.1) 0%, #1A1A1A 100%);
}

.callout.practice {
  border-left-color: #10B981;
  background: linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, #1A1A1A 100%);
}

.callout.reflection {
  border-left-color: #F59E0B;
  background: linear-gradient(90deg, rgba(245, 158, 11, 0.1) 0%, #1A1A1A 100%);
}

.callout::before {
  content: "💡"; /* Icon varies by type */
  font-size: 24px;
  margin-right: 12px;
}

/* Visuals */
.section-visual {
  margin: 32px 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.section-visual img {
  width: 100%;
  height: auto;
  display: block;
}

/* Bottom CTA Bar */
.bottom-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, transparent 0%, #0A0A0A 20%, #0A0A0A 100%);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  z-index: 50;
}

.bottom-cta .cta-button-primary {
  width: 100%;
  max-width: 400px;
  padding: 16px 32px;
  background: #8B5CF6;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
}

.bottom-cta .cta-button-secondary {
  width: 100%;
  max-width: 400px;
  padding: 16px 32px;
  background: transparent;
  color: #8B5CF6;
  border: 1px solid #8B5CF6;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
}

.bottom-cta .cta-button-secondary:hover {
  background: rgba(139, 92, 246, 0.1);
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .section-heading {
    font-size: 28px;
  }

  .section-content,
  .bullet-list li {
    font-size: 16px;
  }

  .content-area {
    padding: 0 20px;
  }
}
```

---

### MODULE PRACTICE/REFLECTION SCREEN

**File:** `ModulePractice.tsx`

**Component Structure:**
```typescript
interface PracticePrompt {
  question: string;
  placeholder: string;
  minLength?: number;      // Optional minimum words
  autoSaveInterval?: number; // Seconds between auto-saves
}

interface ModulePracticeProps {
  prompt: PracticePrompt;
  initialValue?: string;
  onComplete: (response: string) => void;
  onSaveDraft: (response: string) => void;
  onSkip: () => void;
}

// Component structure:
<Container>
  <IntroText>
    Take a moment to reflect
  </IntroText>

  <PromptHeading>{prompt.question}</PromptHeading>

  <TextArea
    placeholder={prompt.placeholder}
    defaultValue={initialValue}
    onChange={handleChange}
    autoFocus={true}
  />

  <AutoSaveIndicator>
    {lastSaved ? `Auto-saved ${lastSaved}` : 'Typing...'}
  </AutoSaveIndicator>

  <CTAContainer>
    <CTAButton primary onClick={() => onComplete(response)}>
      Complete Module
    </CTAButton>
    <CTALink onClick={onSkip}>
      Continue to next module →
    </CTALink>
  </CTAContainer>
</Container>
```

**CSS Specifications:**
```css
.practice-container {
  background: #0A0A0A;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;
  max-width: 680px;
  margin: 0 auto;
}

.intro-text {
  font-size: 18px;
  font-style: italic;
  color: #A3A3A3;
  text-align: center;
  margin-bottom: 32px;
  padding: 16px 24px;
  border-radius: 8px;
  background: rgba(139, 92, 246, 0.05);
}

.prompt-heading {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 32px;
  max-width: 500px;
}

.practice-textarea {
  width: 100%;
  min-height: 200px;
  max-height: 400px;
  padding: 24px;
  background: #1A1A1A;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 12px;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1.6;
  font-family: inherit;
  resize: vertical;
  transition: all 200ms ease;
}

.practice-textarea:focus {
  outline: none;
  border-color: #8B5CF6;
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1),
              0 0 20px rgba(139, 92, 246, 0.2);
}

.practice-textarea::placeholder {
  color: #737373;
  font-style: italic;
}

.autosave-indicator {
  font-size: 14px;
  color: #737373;
  margin-top: 12px;
  text-align: right;
  width: 100%;
}

.autosave-indicator.saved {
  color: #10B981;
}

.autosave-indicator.saving {
  color: #F59E0B;
}

.cta-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 48px;
  width: 100%;
}

.cta-container .cta-button-primary {
  width: 100%;
  max-width: 400px;
  padding: 16px 32px;
  background: #8B5CF6;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
}

.cta-container .cta-link {
  font-size: 14px;
  color: #A3A3A3;
  text-decoration: none;
  cursor: pointer;
  transition: color 200ms ease;
}

.cta-container .cta-link:hover {
  color: #FFFFFF;
  text-decoration: underline;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .practice-container {
    padding: 48px 20px;
  }

  .prompt-heading {
    font-size: 20px;
  }

  .practice-textarea {
    min-height: 150px;
    font-size: 15px;
  }
}
```

---

## INTERACTION PATTERNS

### Auto-Save Logic
```typescript
// Hook for auto-saving user input
function useAutoSave(
  initialValue: string,
  onSave: (value: string) => void,
  interval: number = 30000 // 30 seconds
) {
  const [value, setValue] = useState(initialValue);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (value === initialValue) return;

    const timer = setTimeout(async () => {
      setIsSaving(true);
      await onSave(value);
      setLastSaved(new Date());
      setIsSaving(false);
    }, interval);

    return () => clearTimeout(timer);
  }, [value, interval]);

  return {
    value,
    setValue,
    lastSaved,
    isSaving,
    status: isSaving ? 'saving' : lastSaved ? 'saved' : 'typing'
  };
}

// Usage in component:
const { value, setValue, lastSaved, status } = useAutoSave(
  initialValue,
  handleSave,
  30000
);
```

---

### Scroll Progress Tracking
```typescript
// Hook for tracking scroll progress
function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      setProgress(Math.min(100, Math.max(0, scrollPercentage)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

// Usage: Show progress in sticky header
const scrollProgress = useScrollProgress();

<ProgressBar
  progress={scrollProgress}
  style={{ width: `${scrollProgress}%` }}
/>
```

---

### Reduced Motion Support
```typescript
// Hook for respecting user motion preferences
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

// Usage: Conditionally apply animations
const prefersReducedMotion = usePrefersReducedMotion();

<AnimatedIcon
  animate={!prefersReducedMotion}
  duration={prefersReducedMotion ? 0 : 3000}
/>
```

---

## CONTENT AUTHORING GUIDELINES

### Module Content Template (Markdown)

```markdown
# Module 3: The Core Concept

## Introduction (50-100 words)

Brief hook that establishes context and value. What will the user gain from this module?

## Section 1: Understanding the Foundation (200-300 words)

Core explanation broken into 2-3 short paragraphs. Each paragraph = one idea.

Key insight to remember: "Quote or highlighted thought in 1-2 sentences."

**Why this matters:** One paragraph connecting theory to user's life.

## Section 2: Practical Application (200-300 words)

How to actually use this concept. Be specific.

### Three Ways to Practice:

- **Practice 1:** Specific action with clear outcome (1-2 sentences)
- **Practice 2:** Alternative approach for different contexts
- **Practice 3:** Advanced variation for deeper engagement

## Section 3: Common Challenges (150-200 words)

Acknowledge obstacles users will face. Normalize struggle.

**If you notice X, try Y:** Practical troubleshooting advice.

## Reflection Prompt

"What resonated most with you in this module? How might you apply one of these practices in the next 24 hours?"

---

**Module Metadata:**
- Duration: 5-7 minutes
- Practices: 3
- Difficulty: Beginner
- Prerequisites: None
```

---

## PERFORMANCE OPTIMIZATION

### Lazy Loading Images
```typescript
// Only load images when they enter viewport
import { useInView } from 'react-intersection-observer';

function LazyImage({ src, alt }: { src: string; alt: string }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px' // Start loading 200px before entering view
  });

  return (
    <div ref={ref}>
      {inView ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="image-placeholder" /> // Skeleton
      )}
    </div>
  );
}
```

---

### Code Splitting by Route
```typescript
// Lazy load module screens
import { lazy, Suspense } from 'react';

const ModuleLanding = lazy(() => import('./ModuleLanding'));
const ModuleContent = lazy(() => import('./ModuleContent'));
const ModulePractice = lazy(() => import('./ModulePractice'));

function ModuleRouter() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/module/:id" element={<ModuleLanding />} />
        <Route path="/module/:id/content" element={<ModuleContent />} />
        <Route path="/module/:id/practice" element={<ModulePractice />} />
      </Routes>
    </Suspense>
  );
}
```

---

## ANALYTICS & TRACKING

### Key Events to Track
```typescript
// Track user engagement with modules
interface ModuleEvent {
  event: 'module_started' | 'module_completed' | 'module_saved' |
         'section_viewed' | 'practice_submitted' | 'module_abandoned';
  moduleId: string;
  timestamp: Date;
  metadata?: {
    scrollDepth?: number;
    timeSpent?: number;
    section?: string;
    wordCount?: number;
  };
}

// Example tracking call
function trackModuleEvent(event: ModuleEvent) {
  // Send to your analytics service
  analytics.track(event.event, {
    module_id: event.moduleId,
    timestamp: event.timestamp.toISOString(),
    ...event.metadata
  });
}

// Usage:
useEffect(() => {
  trackModuleEvent({
    event: 'module_started',
    moduleId: module.id,
    timestamp: new Date()
  });
}, []);
```

---

## TESTING CHECKLIST

### Visual Regression Tests
```typescript
// Use Playwright or Cypress for screenshot comparisons
describe('Module Landing Page', () => {
  it('matches desktop snapshot', async () => {
    await page.goto('/module/1');
    await expect(page).toHaveScreenshot('module-landing-desktop.png');
  });

  it('matches mobile snapshot', async () => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/module/1');
    await expect(page).toHaveScreenshot('module-landing-mobile.png');
  });
});
```

### Accessibility Tests
```typescript
// Use @axe-core/react or pa11y
import { axe } from '@axe-core/react';

describe('Accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<ModuleLanding {...props} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Performance Budget
```yaml
# Use Lighthouse CI
budget:
  - resourceSizes:
      - resourceType: 'script'
        budget: 300  # KB
      - resourceType: 'image'
        budget: 500  # KB
  - timings:
      - metric: 'interactive'
        budget: 3000  # ms
      - metric: 'first-contentful-paint'
        budget: 1500  # ms
```

---

## DEPLOYMENT CHECKLIST

- [ ] All gradients render correctly on iOS Safari
- [ ] Auto-save works offline (IndexedDB/localStorage)
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Focus indicators visible on all interactive elements
- [ ] Touch targets minimum 44x44px
- [ ] Text contrast minimum 4.5:1 (WCAG AA)
- [ ] Module state persists across sessions
- [ ] Progress saved to backend on completion
- [ ] Analytics events firing correctly
- [ ] Error boundaries catch component failures
- [ ] Loading states for all async operations
- [ ] 404/error pages styled consistently
- [ ] Meta tags for social sharing
- [ ] PWA manifest for offline capability

---

## QUICK WINS (Implement First)

1. **Full-bleed gradient backgrounds** → Instant visual upgrade
2. **Sticky progress indicator** → Shows user where they are
3. **Auto-save on text input** → Reduces anxiety about losing work
4. **Single CTA per screen** → Removes decision paralysis
5. **One concept per screen on mobile** → Respects cognitive load

---

**Implementation Guide for Offline App**
**Generated:** 2025-12-26
**Based on:** Headspace, Calm, Waking Up, Apple HIG, Stripe Docs research
**Next Steps:** Start with Module Landing Page, then Content Screen, then Practice Screen
