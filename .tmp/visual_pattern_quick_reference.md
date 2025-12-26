# Visual Pattern Quick Reference
## Long-Form Content Design for Offline App

---

## THE "NO BORING SCROLL" FORMULA

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ENGAGEMENT = Visual Interest + Progressive Disclosure      │
│               ──────────────────────────────────────────    │
│                      Information Density                    │
│                                                             │
│  WHERE:                                                     │
│    Visual Interest = Animation + Gradients + White Space   │
│    Progressive Disclosure = Chunking + Hierarchy + Control │
│    Information Density = Words per Screen / Scroll Depth   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## PATTERN COMPARISON TABLE

```
╔═══════════════╦══════════════╦══════════════╦══════════════╗
║   Pattern     ║   Headspace  ║     Calm     ║  Nielsen NN  ║
╠═══════════════╬══════════════╬══════════════╬══════════════╣
║ Screen Focus  ║ Card grid    ║ Single topic ║ Scannable    ║
║               ║ Multi-option ║ One concept  ║ Hierarchical ║
╠═══════════════╬══════════════╬══════════════╬══════════════╣
║ Content/      ║ 5-20 min     ║ 1 screen =   ║ 300-500 word ║
║ Screen        ║ sessions     ║ 1 idea       ║ sections     ║
╠═══════════════╬══════════════╬══════════════╬══════════════╣
║ Visual        ║ Animated     ║ Full-bleed   ║ Bold text +  ║
║ Interest      ║ icons +      ║ gradients +  ║ Bullets +    ║
║               ║ Playful UI   ║ Minimal UI   ║ Callouts     ║
╠═══════════════╬══════════════╬══════════════╬══════════════╣
║ Scroll Depth  ║ Browse grid  ║ 0-1 screens  ║ 2-4 screens  ║
║               ║ (0.5 scroll) ║ per concept  ║ with TOC     ║
╠═══════════════╬══════════════╬══════════════╬══════════════╣
║ White Space   ║ 40% cards    ║ 60-70%       ║ 30-40%       ║
║ Ratio         ║ + padding    ║ background   ║ margins      ║
╠═══════════════╬══════════════╬══════════════╬══════════════╣
║ Best For      ║ Exploration  ║ Onboarding   ║ Educational  ║
║               ║ & browsing   ║ & focus      ║ content      ║
╚═══════════════╩══════════════╩══════════════╩══════════════╝
```

---

## 3-SCREEN MODULE STRUCTURE

```
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│   SCREEN 1:     │   │   SCREEN 2:     │   │   SCREEN 3:     │
│   LANDING       │ → │   CONTENT       │ → │   PRACTICE      │
└─────────────────┘   └─────────────────┘   └─────────────────┘
         ↓                     ↓                      ↓
   ╔═══════════╗         ╔═══════════╗          ╔═══════════╗
   ║  0 SCROLL ║         ║ 1-2 SCROLL║          ║  0 SCROLL ║
   ║           ║         ║           ║          ║           ║
   ║ Gradient  ║         ║ Progress  ║          ║  Centered ║
   ║ + Icon    ║         ║ Indicator ║          ║  Prompt   ║
   ║ + Title   ║         ║           ║          ║           ║
   ║ + Meta    ║         ║ Section 1 ║          ║  Input    ║
   ║           ║         ║ [Bullets] ║          ║  Area     ║
   ║ [Begin]   ║         ║           ║          ║           ║
   ║           ║         ║ Section 2 ║          ║ [Complete]║
   ╚═══════════╝         ║ [Callout] ║          ╚═══════════╝
                         ║           ║
    40% content          ║ Section 3 ║           30% content
    60% space            ║ [Visual]  ║           70% space
                         ║           ║
                         ║ [Continu] ║
                         ╚═══════════╝

                          60% content
                          40% space
```

---

## SPACING RHYTHM VISUALIZATION

```
TOP OF SCREEN
│
├─ 64px ──────────────────────────┐
│                                 │  Hero Space
│         [Hero Element]          │  (breathing room)
│                                 │
├─ 48px ──────────────────────────┘
│
│  ████████████                   ← H1 Heading (48px)
│
├─ 24px ──────────────────────────
│
│  Body text introducing the      ← Body (18px, 1.5 line-height)
│  concept with enough context
│  to hook interest.
│
├─ 32px ──────────────────────────┐
│  ┌─────────────────────────┐   │  Elevated Element
│  │ [Visual Callout/Quote]  │   │  (16px padding)
│  └─────────────────────────┘   │
├─ 32px ──────────────────────────┘
│
│  ████                           ← H2 Subheading (32px)
│
├─ 16px ──────────────────────────
│
│  • Bullet point one             ← List items (18px, 1.5 leading)
├─ 12px
│  • Bullet point two
├─ 12px
│  • Bullet point three
│
├─ 48px ──────────────────────────┐
│                                 │  Section Break
├─ 48px ──────────────────────────┘  (visual pause)
│
│  ████                           ← Next H2 (32px)
│
└─ Continue pattern...

BOTTOM OF SCREEN
```

**Rule of Thumb:**
- Heading → Content: 50% of heading size (e.g., 48px heading → 24px gap)
- Content → Content: 32px standard
- Section → Section: 48px minimum
- Hero elements: 64px buffer top/bottom

---

## COLOR & CONTRAST GUIDE

```
╔════════════════════════════════════════════════════════════╗
║                    DARK THEME LAYERS                       ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  Layer 0 (Base):        #0A0A0A  ░░░░░░░░░░░░░░░░         ║
║  Layer 1 (Surface):     #1A1A1A  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒         ║
║  Layer 2 (Elevated):    #242424  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ║
║                                                            ║
║  Text Primary:          #FFFFFF  ████████████████         ║
║  Text Secondary:        #A3A3A3  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ║
║  Text Tertiary:         #737373  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒         ║
║                                                            ║
║  Accent Purple:         #8B5CF6  ████ (primary actions)   ║
║  Accent Cyan:           #06B6D4  ████ (secondary accents) ║
║  Accent Warm:           #F59E0B  ████ (highlights/alerts) ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║                   CONTRAST RATIOS (WCAG)                   ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  #FFFFFF on #0A0A0A:    19.8:1   ✓✓✓ AAA                   ║
║  #A3A3A3 on #0A0A0A:    7.2:1    ✓✓  AA Large              ║
║  #737373 on #0A0A0A:    4.6:1    ✓   AA Body               ║
║  #8B5CF6 on #0A0A0A:    5.1:1    ✓   AA Large              ║
║  #FFFFFF on #8B5CF6:    3.7:1    ✓   AA Large (buttons)    ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

GRADIENT EXAMPLES:

Calm Background:
┌──────────────────────────────────┐
│ #8B5CF6 ─┐                       │
│          │ 135° diagonal         │
│          ↓                       │
│                         #06B6D4  │
└──────────────────────────────────┘

Subtle Glow (for cards):
         ┌─ Radial from top
         ↓
┌──────────────────────────────────┐
│    #8B5CF6 (20% opacity)         │
│         ╲                        │
│          ╲  fade to              │
│           ╲                      │
│            transparent           │
└──────────────────────────────────┘
```

---

## TYPOGRAPHY SCALE VISUALIZATION

```
████████████████████████████  ← 64px Hero (Module Titles)
                                 Weight: 700, Leading: 1.2
                                 Use: Landing screens only

████████████████████  ← 48px H1 (Screen Headers)
                        Weight: 700, Leading: 1.2
                        Use: Page titles, emphasis

████████████  ← 32px H2 (Section Headers)
                 Weight: 600, Leading: 1.3
                 Use: Content sections

████████  ← 24px H3 (Subsections)
            Weight: 600, Leading: 1.4
            Use: Subheadings within sections

██████  ← 18px Body (Primary Reading)
          Weight: 400, Leading: 1.6
          Use: Paragraphs, bullets, main content

████  ← 14px Small (Meta/Secondary)
        Weight: 400, Leading: 1.5
        Use: Timestamps, counts, labels
```

**Line Length for Readability:**
- Optimal: 50-75 characters per line
- Mobile: 35-50 characters per line
- Max width: 680px for body text

---

## BUTTON & CTA HIERARCHY

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  PRIMARY CTA (Main Action)                      │
│  ┌────────────────────────────────────────┐    │
│  │                                        │    │
│  │         Begin Module                   │    │ ← Full width
│  │                                        │    │   48px height
│  └────────────────────────────────────────┘    │   #8B5CF6 bg
│  Styles:                                        │   16px text
│  - Background: Accent Purple (#8B5CF6)          │   12px radius
│  - Text: White (#FFFFFF)                        │
│  - Padding: 16px vertical, full width           │
│  - Border-radius: 12px                          │
│  - Hover: Scale 1.02, brightness 1.1            │
│  - Active: Scale 0.98                           │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  SECONDARY CTA (Alternative)                    │
│  ┌────────────────────────────────────────┐    │
│  │                                        │    │
│  │      Save for Later                    │    │ ← Full width
│  │                                        │    │   48px height
│  └────────────────────────────────────────┘    │   Transparent
│  Styles:                                        │   Border 1px
│  - Background: Transparent                      │   #8B5CF6
│  - Border: 1px solid Accent Purple              │
│  - Text: Accent Purple                          │
│  - Same size as primary                         │
│  - Hover: Background #8B5CF6 10% opacity        │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  TERTIARY/TEXT LINK (Low Priority)              │
│                                                 │
│           Skip for now >                        │ ← Inline text
│                                                 │   14px size
│  Styles:                                        │   No background
│  - Text: Secondary (#A3A3A3)                    │   Underline
│  - Size: 14px                                   │   on hover
│  - Underline on hover                           │
│  - No background or border                      │
│                                                 │
└─────────────────────────────────────────────────┘

SPACING BETWEEN CTAs:
Primary → Secondary: 16px gap
Secondary → Tertiary: 24px gap
```

---

## ANIMATION TIMING CHART

```
DURATION SCALE:
═══════════════════════════════════════════════════════════
0ms          100ms        200ms        300ms        500ms+
│────────────│────────────│────────────│────────────│
│  Instant   │    Fast    │   Normal   │    Slow    │ Slower
│            │            │            │            │
│ •Checkbox  │ •Hover     │ •Fade      │ •Slide     │ •Breathing
│  toggle    │  effects   │  in/out    │  panels    │  animation
│            │            │            │            │
│ •Input     │ •Button    │ •Page      │ •Progress  │ •Ambient
│  focus     │  scale     │  transition│  bars      │  motion
│            │            │            │            │
═══════════════════════════════════════════════════════════

EASING FUNCTIONS:
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Ease-Out (Most Common):    •─────╮                    │
│  cubic-bezier(0, 0, 0.2, 1)        ╰──→                │
│  Use: Entering elements, hover                         │
│                                                         │
│  Ease-In (Exits):           •╮                         │
│  cubic-bezier(0.4, 0, 1, 1)  ╰─────→                   │
│  Use: Exiting elements                                 │
│                                                         │
│  Ease-In-Out (Smooth):      •─╮  ╭─→                   │
│  cubic-bezier(0.4, 0, 0.6, 1)  ╰──╯                    │
│  Use: State changes, slides                            │
│                                                         │
│  Standard (Default):        •──╮                       │
│  cubic-bezier(0.4, 0, 0.2, 1)  ╰───→                   │
│  Use: General purpose                                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## PROGRESSIVE DISCLOSURE PATTERN

```
STATE 1: Initial View (Collapsed)
┌─────────────────────────────────────┐
│                                     │
│  ████                               │ Section Title
│  Core Concept                       │
│                                     │
│  Brief teaser (1-2 sentences) that  │
│  explains the main idea...          │
│                                     │
│  [Read more ↓]                      │ Expandable trigger
│                                     │
└─────────────────────────────────────┘
         ↓ User taps "Read more"

STATE 2: Expanded View
┌─────────────────────────────────────┐
│                                     │
│  ████                               │
│  Core Concept                       │
│                                     │
│  Brief teaser (1-2 sentences) that  │
│  explains the main idea...          │
│                                     │
│  ┌─────────────────────────────┐   │
│  │                             │   │ Revealed content
│  │  Full explanation with      │   │ (fades in, 300ms)
│  │  additional details:        │   │
│  │                             │   │
│  │  • Point one                │   │
│  │  • Point two                │   │
│  │  • Point three              │   │
│  │                             │   │
│  │  [Visual or example]        │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Show less ↑]                      │
│                                     │
└─────────────────────────────────────┘

BENEFITS:
✓ Reduces initial cognitive load
✓ User controls depth of engagement
✓ Keeps scanners moving forward
✓ Rewards deep divers with detail
```

---

## MOBILE TOUCH ZONES

```
┌─────────────────────┐
│                     │ ← HARD TO REACH
│    Header/Meta      │   (Read-only content)
│                     │   Top 20%
├─────────────────────┤
│                     │
│                     │ ← EASY TO REACH
│   Scrollable        │   (Primary content)
│   Content Area      │   Middle 50%
│                     │
│                     │
├─────────────────────┤
│                     │ ← EASIEST TO REACH
│  [Primary CTA]      │   (Main actions)
│  [Secondary CTA]    │   Bottom 30%
│                     │
└─────────────────────┘

THUMB REACH ZONES (Right-handed):
┌─────────────────────┐
│ ❌ │ ❌ │ ❌ │ ⚠️  │ Hard: Top corners
├────┼────┼────┼────┤
│ ⚠️  │ ✅ │ ✅ │ ✅ │ Medium: Middle
├────┼────┼────┼────┤
│ ⚠️  │ ✅ │ ✅ │ ✅ │ Easy: Lower right
├────┼────┼────┼────┤
│ ❌ │ ⚠️  │ ✅ │ ✅ │ Easiest: Bottom right
└────┴────┴────┴────┘

INTERACTION SIZE MINIMUMS:
- Tap target: 44x44px (Apple HIG)
- Clickable area: 48x48px (Material)
- Spacing between: 8px minimum
- Comfortable: 56x56px for primary actions
```

---

## CONTENT DENSITY FORMULA

```
╔══════════════════════════════════════════════════════════╗
║         CONTENT DENSITY BY MODULE TYPE                   ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  Introduction Module (High Breathing Room):             ║
║  ┌────────────────────────────────────────────────┐     ║
║  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ 70% ║
║  │                                                │     ║
║  │ ████████████                                   │ 30% ║
║  └────────────────────────────────────────────────┘     ║
║  Words: 50-100 | White Space: 70% | Scroll: 0-0.5      ║
║                                                          ║
║  ─────────────────────────────────────────────────────  ║
║                                                          ║
║  Core Content Module (Balanced):                        ║
║  ┌────────────────────────────────────────────────┐     ║
║  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░                   │ 40% ║
║  │                                                │     ║
║  │ ████████████████████████████████               │ 60% ║
║  └────────────────────────────────────────────────┘     ║
║  Words: 200-400 | White Space: 40% | Scroll: 1-2       ║
║                                                          ║
║  ─────────────────────────────────────────────────────  ║
║                                                          ║
║  Deep Dive Module (Higher Density):                     ║
║  ┌────────────────────────────────────────────────┐     ║
║  │ ░░░░░░░░░░░░░░░░                               │ 30% ║
║  │                                                │     ║
║  │ ████████████████████████████████████████       │ 70% ║
║  └────────────────────────────────────────────────┘     ║
║  Words: 500-1000 | White Space: 30% | Scroll: 2-4      ║
║  REQUIRES: TOC, Progress, Section Anchors               ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝

ENGAGEMENT CORRELATION:
White Space ↑ = Time on Screen ↑ (up to 70% threshold)
Word Count ↑ = Completion Rate ↓ (after 500 words)
Scroll Depth ↑ = Bounce Rate ↑ (after 2 screens without anchors)
```

---

## ACCESSIBILITY CHECKLIST

```
☐ COLOR CONTRAST
  ☑ Body text: 4.5:1 minimum (#FFFFFF on #0A0A0A = 19.8:1 ✓)
  ☑ Large text (18px+): 3:1 minimum
  ☑ UI components: 3:1 minimum
  ☑ Don't rely on color alone for meaning

☐ KEYBOARD NAVIGATION
  ☑ Logical tab order (top → bottom, left → right)
  ☑ Visible focus indicators (2px outline, 4px offset)
  ☑ Skip-to-content link for long pages
  ☑ No keyboard traps

☐ TOUCH TARGETS
  ☑ Minimum 44x44px for all interactive elements
  ☑ 8px spacing between adjacent targets
  ☑ No overlapping hit areas

☐ MOTION & ANIMATION
  ☑ Respect prefers-reduced-motion
  ☑ No auto-playing animations >5 seconds
  ☑ Pause/stop controls for moving content
  ☑ No flashing content >3 times per second

☐ SCREEN READERS
  ☑ Semantic HTML (h1, h2, nav, main, etc.)
  ☑ Alt text for all images/icons
  ☑ ARIA labels for state changes
  ☑ Announce dynamic content updates

☐ TEXT & READABILITY
  ☑ Font size: 16px+ for body text
  ☑ Line height: 1.5+ for paragraphs
  ☑ Line length: <80 characters (680px max)
  ☑ Resizable text up to 200% without loss of content
```

---

**Visual Pattern Quick Reference**
**Generated:** 2025-12-26
**For:** Offline App Module Design
**Use:** Pin this for rapid reference during implementation
