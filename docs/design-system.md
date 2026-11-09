# Elite ENT Center — Design System

A restrained visual system for a medical practice: navy for authority, white
for clarity, and one clinical blue for interaction. The tone is calm, precise,
and professional. Decoration is limited to what improves hierarchy.

**Source of truth**

| Concern | Location |
| --- | --- |
| Tokens | `src/app/globals.css` (`@theme`, `:root`) |
| Primitives | `src/components/ui` |
| Visual reference | `/design-system` (noindex, not linked publicly) |
| Fonts | `src/app/layout.tsx` |

Everything in the product should use these tokens or components. Do not add
one-off hex values, shadows, or radii in feature code.

---

## 1. Principles

1. **Clarity before character.** A patient looking for care should never
   decipher the interface.
2. **White space is clinical.** Generous spacing signals cleanliness and
   gives information room to breathe.
3. **One accent, used sparingly.** Azure marks interaction and information.
   If everything is blue, nothing is.
4. **Quiet hierarchy.** Weight, size, and spacing create order; borders are
   hairlines and shadows are barely visible.
5. **Accessible by default.** Contrast, focus, touch targets, and motion
   preferences are part of the tokens, not an afterthought.

---

## 2. Color

### Brand scales

| Token | Hex | Primary use |
| --- | --- | --- |
| `navy-50` | `#F4F7FA` | Tinted section backgrounds, hover fills |
| `navy-100` | `#E8EEF4` | Pressed quiet surfaces |
| `navy-200` | `#CFDCEA` | Decorative lines, illustration fills |
| `navy-300` | `#A9C1D8` | Muted brand text, stat accents |
| `navy-400` | `#7C9DBC` | Disabled brand emphasis |
| `navy-500` | `#557C9E` | Secondary brand text |
| `navy-600` | `#3C6284` | Icons on light surfaces |
| `navy-700` | `#2D4D69` | Strong secondary text |
| `navy-800` | `#1F3950` | Primary hover |
| `navy-900` | `#142A3D` | Headings, primary buttons, logo |
| `navy-950` | `#0B1B29` | Pressed primary, high-contrast text |

| Token | Hex | Primary use |
| --- | --- | --- |
| `azure-50` | `#F1F8FD` | Informational fills, selected rows |
| `azure-100` | `#E1F0FB` | Informational hover |
| `azure-200` | `#C3E0F5` | Soft dividers in informational blocks |
| `azure-300` | `#93C9EC` | Charts, progress |
| `azure-400` | `#5CA9DC` | Chart emphasis |
| `azure-500` | `#3389C4` | Focus ring, active indicators |
| `azure-600` | `#246FA6` | Links on dark, filled accent actions |
| `azure-700` | `#1F5A88` | Links on white (AA) |
| `azure-800` | `#1E4A6E` | Link hover |
| `azure-900` | `#1D3E5B` | Link pressed |

| Token | Hex | Primary use |
| --- | --- | --- |
| `mist-50` | `#F8FAFB` | Page tint |
| `mist-100` | `#F1F4F7` | Muted surfaces |
| `mist-200` | `#E3E9EF` | Dividers, card borders |
| `mist-300` | `#CBD5DF` | Strong borders on secondary controls |
| `mist-400` | `#94A6B8` | Placeholder text |
| `mist-500` | `#6B7F93` | Input borders (3:1 on white), captions |
| `mist-600` | `#4F6377` | Secondary body text (AA on white) |
| `mist-700` | `#3B4C5D` | Strong secondary text |
| `mist-800` | `#273544` | Default body text |
| `mist-900` | `#182331` | Highest-contrast neutral |

### Semantic roles

Components use role tokens, never palette values directly.

| Token | Value | Use |
| --- | --- | --- |
| `background` | White | Page surface |
| `foreground` | `mist-800` | Body text |
| `heading` | `navy-900` | Display and headings |
| `primary` | `navy-900` | Primary buttons, key brand surfaces |
| `primary-hover` | `navy-800` | Primary hover |
| `secondary` | `azure-50` | Soft buttons, quiet emphasis |
| `muted` | `mist-100` | Disabled fills, subdued blocks |
| `muted-foreground` | `mist-600` | Helper text, captions |
| `accent` | `azure-50` | Informational surface |
| `accent-foreground` | `azure-700` | Links, informational text |
| `destructive` | `#B42318` | Errors, irreversible actions |
| `success` / `success-soft` | `#0F6B4F` / `#E7F5EF` | Confirmed, completed |
| `warning` / `warning-soft` | `#8A5A0B` / `#FDF4E3` | Attention, pending |
| `border` | `mist-200` | Default hairlines |
| `border-strong` | `mist-300` | Secondary button border |
| `input` | `mist-500` | Form control border |
| `ring` | `azure-500` | Focus ring |

### Color rules

- White is the dominant surface. Navy is for structure and primary actions,
  not large background fills except the footer and a single hero band.
- Azure is for links, focus, selection, and informational emphasis only.
- Status colors appear only with a status meaning, never for decoration.
- Never use gradients, neon tints, or pure black (`#000`).
- Body text must remain `foreground` or `mist-600`; captions may not go
  lighter than `mist-600` on white.
- Links use `accent-foreground` with an underline on hover and a visible
  focus ring.

---

## 3. Typography

| Role | Family | Token | Size |
| --- | --- | --- | --- |
| Display / hero | Source Serif 4, 600 | `text-display` | fluid 44 → 68px |
| Page title | Source Serif 4, 600 | `text-h1` | fluid 36 → 48px |
| Section title | Source Serif 4, 600 | `text-h2` | fluid 28 → 36px |
| Subsection | Source Serif 4, 600 | `text-h3` | 24px |
| Card / minor title | Source Serif 4, 600 | `text-h4` | 20px |
| Intro paragraph | Inter, 400 | `text-lead` | 18px / 1.65 |
| Body | Inter, 400 | `text-body` | 16px / 1.65 |
| Interface text | Inter, 400 | `text-small` | 14px / 1.55 |
| Caption / metadata | Inter, 400 | `text-caption` | 12px / 1.5 |
| Eyebrow / label | Inter, 600 | `text-eyebrow` | 12px, 0.08em tracking |

Rules:

- One `h1` per page. Do not skip heading levels for visual reasons.
- Serif is for headings and card titles only. Body, labels, buttons, table
  data, and form help text are always Inter.
- Buttons and labels use `font-medium` (500) at 14px; do not use the serif
  family inside controls.
- Uppercase is reserved for the eyebrow style and short section labels.
  Never uppercase sentences or patient instructions.
- Body copy measures 65–75 characters (`max-w-prose`). Never justify.
- Clinical numbers (times, dosages, phone numbers, IDs) use `tabular-nums`.
- Do not exceed `text-display` on any screen; one display statement per page.

---

## 4. Spacing & layout

Base unit is **4px**. Use the standard scale: `1` (4px), `2` (8px), `3`
(12px), `4` (16px), `6` (24px), `8` (32px), `12` (48px), `16` (64px).

| Token | Value | Use |
| --- | --- | --- |
| `px-gutter` | clamp 20 → 40px | Page side padding |
| `py-section` | clamp 64 → 96px | Standard section rhythm |
| `py-section-lg` | clamp 80 → 128px | Hero and major breaks |
| `max-w-page` | 1200px | Page shell |
| `max-w-narrow` | 672px | Section intro text |
| `max-w-prose` | 65ch | Body copy |

- Every page uses the `page-container` utility: max width, centered, fluid
  gutters.
- Card padding is 24px (`p-6`). Form controls are 44px tall.
- Use an 8px grid for gaps between related items, 16–24px between groups.
- Grids: 1 column below `sm`, 2 at `sm`/`md`, 3 at `lg`, 4 only for short
  summary cards at `xl`. Gap is 24px.
- Section spacing is applied to the section, not to its first child.
- Avoid arbitrary spacing values. If a value is missing, add a token.

---

## 5. Borders & radii

| Token | Value | Use |
| --- | --- | --- |
| `rounded-control` | 8px | Buttons, inputs, selects, textareas |
| `rounded-card` | 12px | Cards, panels, informational blocks |
| `rounded-pill` | Full | Small indicators, tags if introduced |

- Default border is 1px `border` (`mist-200`). Use `border-strong` for
  secondary buttons and `input` for controls (meets 3:1 on white).
- Never use more than one border weight in a composition.
- Dividers are 1px `border`, full width of their container.
- Do not mix a strong border with a heavy shadow on the same surface.
- Avoid nested cards. If content needs grouping inside a card, use spacing
  and dividers.

---

## 6. Shadows

| Token | Use |
| --- | --- |
| `shadow-xs` | Inputs, flat cards, secondary buttons |
| `shadow-sm` | Raised cards, sticky summary panels |
| `shadow-md` | Dropdown menus, hover elevation |
| `shadow-lg` | Dialogs, mobile sheets, overlays |

Shadows are navy-tinted and low opacity. Elevation indicates layering only;
it is never decoration. A card should use either a border or a shadow as its
primary separation, not both at high strength.

---

## 7. Buttons

```tsx
import { Button } from "@/components/ui/button";

<Button>Book appointment</Button>
<Button variant="secondary">View directions</Button>
<Button variant="soft">Add to calendar</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="destructive">Delete record</Button>

<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon" aria-label="Add appointment">
  <PlusIcon aria-hidden="true" />
</Button>
```

| Variant | Appearance | Use |
| --- | --- | --- |
| `primary` | Navy fill, white text | The single main action |
| `secondary` | White fill, strong border | Alternative action beside primary |
| `soft` | Azure-50 fill, navy text | Quiet in-context action |
| `ghost` | Transparent | Tertiary actions, toolbar buttons |
| `destructive` | Red fill | Irreversible or destructive actions |

| Size | Height | Use |
| --- | --- | --- |
| `sm` | 36px | Dense tables, inline actions |
| `md` | 44px | Default; meets touch target |
| `lg` | 48px | Primary conversion actions |
| `icon` | 44px square | Icon-only; requires `aria-label` |

Rules:

- One primary button per view or card. Everything else is secondary, soft,
  ghost, or a link.
- Button labels are verbs: "Book appointment", "Confirm", "Reschedule".
- No icon-only buttons without an accessible label or visible tooltip.
- Loading buttons keep their width and label; replace the icon with a
  progress indicator and set `aria-busy`.
- Do not place two primary actions side by side.

---

## 8. Form controls

```tsx
<FormField id="email" label="Email" hint="We reply within one business day.">
  <Input id="email" type="email" aria-describedby="email-hint" />
</FormField>

<FormField id="email" label="Email" error="Enter a valid email address.">
  <Input id="email" aria-invalid="true" aria-describedby="email-error" />
</FormField>
```

Anatomy: label above, control, then hint or error. Never use a placeholder as
the label. Always mark required fields and explain format requirements before
the error occurs.

| Control | Height | Notes |
| --- | --- | --- |
| `Input` | 44px | All text-like types |
| `Select` | 44px | Native select, custom chevron |
| `Textarea` | min 112px | Resizable vertically |
| `Checkbox` | 16px box, 44px row | Native control, navy accent |

States:

- **Default:** white surface, 1px `input` border, `shadow-xs`.
- **Focus:** `azure-500` border with a 3px azure/25 ring. Keyboard focus is
  always visible.
- **Invalid:** destructive border, destructive/20 ring, message below with
  `aria-invalid` and `aria-describedby`.
- **Disabled:** `muted` fill, muted text, no shadow, `cursor-not-allowed`.
- **Success:** show confirmation text, not a green border on every field.

Rules:

- Labels are always visible. Do not replace them with tooltips.
- Group related fields with fieldsets and legends when a group has a shared
  question.
- Errors state what happened and how to fix it; never say only "Invalid".
- Do not validate on every keystroke; validate on blur or submit.
- Form actions align to the start of the form, primary first.

---

## 9. Cards

```tsx
<Card>
  <CardHeader>
    <CardTitle>Consultation follow-up</CardTitle>
    <CardDescription>Wednesday, 18 November · 10:30 AM</CardDescription>
  </CardHeader>
  <CardContent>{/* details */}</CardContent>
  <CardFooter>
    <Button>Confirm</Button>
    <Button variant="secondary">Reschedule</Button>
  </CardFooter>
</Card>
```

- White surface, 1px `border`, `rounded-card`, `shadow-xs`.
- 24px interior padding; header, content, and footer share the rhythm.
- One topic per card. Titles are short nouns; descriptions add context.
- Footers hold actions only, aligned left, primary first.
- The whole card is not a link unless it contains no other interactive
  elements; otherwise link the title and keep card actions separate.

---

## 10. Icons

- Family: **Lucide** only (already a project dependency).
- Stroke: **1.5** everywhere. The `Icon` wrapper enforces this.
- Sizes: `sm` 16px, `md` 20px (default), `lg` 24px, `xl` 32px.
- Icons inherit `currentColor`; tint with text color tokens.
- Decorative icons are `aria-hidden` automatically. For a meaningful
  standalone icon, pass `label` to `Icon`.
- An icon never replaces a text label in navigation or actions.
- Do not mix filled and outlined icons, and do not use icon fonts.

```tsx
import { Stethoscope } from "lucide-react";
import { Icon } from "@/components/ui/icon";

<Icon icon={Stethoscope} />
<Icon icon={Stethoscope} size="lg" label="Otolaryngology" />
```

---

## 11. Responsive rules

| Breakpoint | Width | Typical change |
| --- | --- | --- |
| base | < 640px | Single column, stacked actions |
| `sm` | 640px | 2-column forms and summary cards |
| `md` | 768px | Side-by-side content, wider cards |
| `lg` | 1024px | Inline navigation, 3-column grids |
| `xl` | 1280px | Full page container |
| `2xl` | 1536px | No further growth; whitespace only |

- Display and heading sizes are fluid via `clamp()`; never set separate mobile
  heading sizes with `sm:` overrides.
- Layouts reorganize rather than shrink. Avoid horizontal scrolling at all
  costs; clinical content must remain readable without pinch-zoom.
- Body text is never smaller than 16px; captions are metadata only, never
  primary instructions.
- Touch targets are at least 44px with 8px between adjacent controls.
- Primary actions stay visible on small screens. Secondary actions can move
  below the primary or into an overflow menu.
- Never hide essential information behind hover. Hover is an enhancement,
  not a requirement.
- Tables: below `md`, convert to stacked label/value rows rather than
  horizontal scroll.
- Test at 320px, 768px, 1024px, and 1440px. Check 200% zoom in a desktop
  browser.

---

## 12. Accessibility baseline

- Text meets WCAG AA: body `mist-800` on white, secondary `mist-600` on
  white, links `azure-700` on white.
- Every interactive element has a visible `:focus-visible` ring. Components
  use a 3px `ring` token at reduced opacity.
- Form controls expose label, hint, and error through `htmlFor`,
  `aria-describedby`, and `aria-invalid`.
- Decorative icons are hidden from assistive technology; meaningful icons
  carry a label.
- Motion is short (150ms) and respects `prefers-reduced-motion`.
- Do not use color alone to convey status; pair it with text or an icon.
- The palette is light-theme only in v1. Keep semantic roles in place so a
  dark theme can be added later without touching components.

---

## 13. Adding new components

1. Compose existing primitives before adding a new one.
2. Use semantic color tokens and the `control` / `card` radii.
3. Put shared primitives in `src/components/ui`, clinic compositions in the
   surface folder (`public`, `patient`, `admin`, `shared`).
4. Support `className` so callers can compose layout without forking.
5. Set `type="button"` on buttons unless the button submits a form.
6. Document any new visual pattern here and add it to the reference page.
