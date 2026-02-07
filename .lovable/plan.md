
# Enhancement Plan: GST, Audit Pages, Micro-interactions, Header & Process Cards

## 1. Apply Enhanced Design to GST Services Page

Update `src/pages/services/GSTServices.tsx` to match the TaxationServices pattern:

- Add `useScrollAnimation`, `AnimatedSection` hooks (same as TaxationServices)
- Enhanced hero with animated background blobs, gradient overlays, gold accent label, and dual CTA buttons (Book Consultation + Phone)
- Upgrade key highlights cards: larger icons, gradient backgrounds, hover lift/scale effects, rounded-3xl
- Add scroll animations to service cards with staggered delays
- Enhance GST Calendar section with hover animations and gradient card backgrounds
- Add animated `StatCounter` component for the stats section
- Enhanced CTA with WhatsApp button alongside phone and contact link
- Add service highlight badges (e.g., "Most Popular" on GST Return Filing, "Specialized" on GST Litigation)

## 2. Apply Enhanced Design to Audit & Assurance Page

Update `src/pages/services/AuditAssurance.tsx` to match:

- Same `useScrollAnimation`/`AnimatedSection` pattern
- Enhanced hero with animated background elements and dual CTAs
- Upgrade highlight cards with gradient backgrounds and hover-lift animations
- Add scroll-reveal animations to the Audit Approach section
- Animate service cards with staggered entry
- Add `StatCounter` animation to the stats section
- Enhanced RBI Panel badge section with subtle animation
- Add highlight badges ("Core Service" for Statutory Audit, "Banking" for Bank Audit)

## 3. Micro-interactions & Loading States

### SubServiceTemplate.tsx enhancements:
- Add smooth hover scale on FAQ items (already partially done, refine timing)
- Add a subtle skeleton loading state wrapper that shows before content animates in
- Add scroll-to-top on page load
- Add hover ripple effect on CTA buttons

### Global CSS additions in `src/index.css`:
- Add `.hover-lift` utility: `transform: translateY(-4px)` on hover with shadow
- Add `.hover-glow` utility: subtle box-shadow glow on hover
- Add `.animate-count-up` keyframe for number counters
- Add smooth scroll behavior: `html { scroll-behavior: smooth; }`

## 4. Enhanced Header Menu

Update `src/components/layout/Header.tsx`:

- Add hover-open behavior for desktop dropdown (onMouseEnter/onMouseLeave) alongside click toggle
- Add brief descriptions under each service category name in the dropdown
- Add a "Popular" badge next to Taxation and GST services
- Improve mobile menu with accordion-style animation (max-height transition) instead of instant show/hide
- Add active route indicator with gold underline animation
- Add scroll-triggered header background change (transparent to solid when not at top -- optional, since it's always navy)

## 5. Fix Process Cards Equal Height

Update the "How It Works" grid in `src/components/services/SubServiceTemplate.tsx`:

**Current issue**: Cards have `h-full` on the inner div but the `AnimatedSection` wrapper and `.relative.group` wrapper don't enforce equal height in the grid.

**Fix**: Add `h-full` to both the `AnimatedSection` wrapper and the `.relative.group` wrapper so the CSS grid can enforce equal row heights:

```
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {data.process.map((step, index) => (
    <AnimatedSection key={index} delay={index * 100} className="h-full">
      <div className="relative group h-full">
        <div className="bg-white/10 ... rounded-3xl p-8 h-full flex flex-col ...">
```

The `AnimatedSection` component already accepts `className` prop, so adding `h-full` will propagate through the chain, making all cards stretch to the tallest card's height.

---

## Technical Details

### Files Modified (5)
| File | Changes |
|------|---------|
| `src/pages/services/GSTServices.tsx` | Full redesign matching TaxationServices pattern |
| `src/pages/services/AuditAssurance.tsx` | Full redesign matching TaxationServices pattern |
| `src/components/services/SubServiceTemplate.tsx` | Fix process card heights, add scroll-to-top |
| `src/components/layout/Header.tsx` | Hover dropdown, descriptions, mobile animation |
| `src/index.css` | Add utility classes, smooth scroll |

### Implementation Order
1. Fix process card equal heights in SubServiceTemplate (quick fix)
2. Add CSS utilities and smooth scroll to index.css
3. Enhance Header with hover dropdown and descriptions
4. Redesign GSTServices page
5. Redesign AuditAssurance page
