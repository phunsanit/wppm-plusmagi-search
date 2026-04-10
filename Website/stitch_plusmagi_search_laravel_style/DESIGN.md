# Design System Specification: High-End Developer Editorial

## 1. Overview & Creative North Star: "The Neon Monolith"
This design system is built to transform standard developer tools into high-end editorial experiences. Our Creative North Star is **"The Neon Monolith."** It represents a shift away from "safe" SaaS layouts toward a high-contrast, structural aesthetic that feels like a premium code editor meets a luxury fashion lookbook.

We achieve this by rejecting the "boxed-in" nature of traditional Material UI. Instead, we use **intentional asymmetry**, **tonal layering**, and **kinetic typography**. The goal is a UI that feels carved out of deep space, illuminated by a single, high-intensity energy source (#F53003).

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in a deep, nocturnal blue-black (#040f1c), punctuated by a high-chroma primary accent.

### Surface Hierarchy & Nesting
To create a "monolithic" feel, we prohibit 1px solid borders for sectioning. Boundaries are defined strictly through background shifts.
- **Base Layer:** `surface` (#040f1c) - The infinite background.
- **Sectioning:** `surface-container-low` (#081422) - Used for large layout blocks.
- **Actionable Areas:** `surface-container-high` (#122032) - For cards and interactive modules.
- **The "Glass & Gradient" Rule:** Use `surface-variant` with a `backdrop-filter: blur(12px)` and 60% opacity for floating navigation or overlays. For primary CTAs, apply a linear gradient from `primary` (#ff8f77) to `primary-dim` (#e12a00) at 135 degrees to add "soul" to the high-contrast aesthetic.

| Role | Token | Hex | Application |
| :--- | :--- | :--- | :--- |
| **Primary** | `primary` | #ff8f77 | Main brand energy, active states. |
| **Accent** | `primary_dim` | #e12a00 | The core #F53003 signature in darkened contexts. |
| **Background**| `background` | #040f1c | The global canvas. |
| **Surface** | `surface_container`| #0d1a2a | Secondary layout containers. |
| **Error** | `error` | #ff6e84 | High-visibility alerts. |

---

## 3. Typography: Editorial Authority
We utilize **Inter** not as a utility font, but as an architectural element. 

- **Display Scale:** `display-lg` (3.5rem) should be used with tight letter-spacing (-0.04em) and `font-weight: 700`. These are "hero" moments—use them sparingly to break the grid.
- **The Contrast Gap:** Jump aggressively between sizes. Place `label-sm` (0.6875rem) in all-caps next to `headline-md` (1.75rem) to create a sophisticated, data-heavy editorial look.
- **Text Color:** Never use pure white. Use `on-surface` (#dee9fc) for primary content and `on-surface-variant` (#a1acbd) for secondary metadata to maintain the nocturnal atmosphere.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are forbidden. We use **Ambient Shadows** and **Tonal Stacking**.

- **The Layering Principle:** A card should not "float" with a shadow; it should "lift" by being one step lighter than its parent container (e.g., a `surface-container-highest` card sitting on a `surface-container-low` section).
- **Ambient Glow:** If a floating element (like a Popover) requires separation, use a shadow with `blur: 40px`, `spread: -10px`, and a color derived from `surface-tint` at 8% opacity. This creates a subtle "glow" rather than a dirty grey shadow.
- **The Ghost Border:** If accessibility requires a boundary, use `outline-variant` at 15% opacity. It should be felt, not seen.

---

## 5. Component Mapping (MUI Implementation)

### Buttons: High-Intensity Tactility
*   **Primary:** No borders. Background: `primary_dim` (#e12a00). Border-radius: `sm` (0.125rem) for a sharp, "pro" feel. On hover, transition to `primary_fixed_dim`.
*   **Secondary:** `variant="outlined"`. Use the "Ghost Border" rule. Text color: `on-surface`.
*   **Tertiary:** Text-only, all-caps, `letter-spacing: 0.1rem`.

### Cards & Layout Containers
*   **MUI Paper/Card:** Disable `elevation`. Use `bgcolor: 'surface-container-low'`.
*   **Spacing:** Use the custom scale. Section padding should default to `10` (2.25rem) or `16` (3.5rem) to provide the "breathing room" of a premium editorial.
*   **Dividers:** Do not use `<Divider />`. Use a `2.5` (0.5rem) vertical margin gap or a subtle color shift between containers.

### Inputs & Form Fields
*   **Text Field:** `variant="filled"`. Background: `surface-container-highest`. 
*   **Focus State:** A 2px bottom-border using `primary` (#ff8f77). No full-box outline.
*   **Labels:** Use `label-md` floating above the input, never inside, to maintain a clean "data-entry" aesthetic.

---

## 6. Do’s and Don’ts

### Do
- **Do** use aggressive whitespace (Scale `20` and `24`) to separate major conceptual blocks.
- **Do** use `backdrop-filter` on top navigation bars to allow the deep blue background to bleed through.
- **Do** use the `primary` accent for small, high-impact details: a 4px tall loading bar, a radio button dot, or a single word in a headline.

### Don’t
- **Don’t** use standard MUI rounded corners (4px). Stick to the sharp `sm` (0.125rem) for a more technical, precise feel.
- **Don’t** use 100% opacity white text on a dark background; it causes "halation" (visual buzzing). Use `on-surface`.
- **Don’t** use icons with fills. Use "Outline" or "Thin" stroke icons to match the Inter font-weight.

### Custom Component Suggestion: "The Monolith Header"
Create a component that spans the full width, using `surface-container-lowest` (#000000) with a `primary` 2px top-border. Inside, place `display-sm` text aligned to the far left and `label-sm` metadata aligned to the far right. This asymmetrical balance is the hallmark of this design system.