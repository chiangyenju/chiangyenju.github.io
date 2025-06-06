# Kindle Dark Mode Design System

A comprehensive design system for creating warm, eye-friendly dark interfaces inspired by Kindle's reading experience.

## Overview

This design system provides a cohesive set of colors, components, and utilities that create a comfortable reading and browsing experience while reducing eye strain.

## Core Philosophy

- **Warm Dark Theme**: Uses stone/neutral colors instead of pure black/white
- **Eye Comfort**: Reduces harsh contrasts that cause eye strain
- **Consistency**: Centralized color system for easy maintenance
- **Accessibility**: Maintains proper contrast ratios while being gentle

## Color System

### CSS Custom Properties

All colors are defined as CSS custom properties in `globals.css`:

```css
:root {
  /* Background Colors */
  --bg-primary: #171717;           /* Main dark background */
  --bg-secondary: #1c1917;         /* Secondary background */
  --bg-tertiary: #292524;          /* Card backgrounds */
  
  /* Text Colors */
  --text-primary: #f5f5f4;         /* Main text */
  --text-secondary: #e7e5e4;       /* Secondary text */
  --text-tertiary: #d6d3d1;        /* Muted text */
  --text-quaternary: #a8a29e;      /* Subtle text */
  --text-quinary: #78716c;         /* Very subtle text */
  
  /* Interactive Colors */
  --interactive-bg-subtle: rgba(120, 113, 108, 0.12);
  --interactive-bg-hover: rgba(120, 113, 108, 0.20);
  
  /* Borders */
  --border-subtle: rgba(120, 113, 108, 0.15);
  --border-medium: rgba(120, 113, 108, 0.30);
  --border-strong: rgba(168, 162, 158, 0.50);
  
  /* Glass Effects */
  --glass-bg-light: rgba(120, 113, 108, 0.08);
  --glass-bg-medium: rgba(87, 83, 78, 0.12);
  
  /* Accent Colors */
  --accent-warm: #f59e0b;          /* Amber accent */
  --accent-warm-muted: rgba(245, 158, 11, 0.6);
}
```

## Usage

### 1. CSS Custom Properties (Recommended)

```css
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
}
```

### 2. Tailwind Utilities

```html
<!-- Design System Classes -->
<div class="bg-ds-primary text-ds-primary border-ds-subtle">
  Content
</div>

<!-- Tailwind Extended Colors -->
<div class="bg-kindle-bg-primary text-kindle-text-primary">
  Content
</div>
```

### 3. Pre-built Component Classes

```html
<!-- Glass Card -->
<div class="glass-card p-6">
  <h3 class="text-hierarchy-1">Heading</h3>
  <p class="text-hierarchy-3">Description</p>
</div>

<!-- Interactive Element -->
<button class="interactive btn-primary">
  Button
</button>

<!-- Project Card -->
<div class="project-card p-8">
  Card content
</div>
```

## Component Patterns

### Glass Morphism Cards

```html
<!-- Subtle Glass Effect -->
<div class="glass-subtle rounded-2xl p-6">
  Content
</div>

<!-- Medium Glass Effect -->
<div class="glass-medium rounded-2xl p-8">
  Content  
</div>

<!-- Strong Glass Effect -->
<div class="glass-strong rounded-2xl p-10">
  Content
</div>
```

### Text Hierarchy

```html
<h1 class="text-hierarchy-1 text-2xl">Primary Heading</h1>
<h2 class="text-hierarchy-2 text-xl">Secondary Heading</h2>
<p class="text-hierarchy-3 text-base">Body Text</p>
<span class="text-hierarchy-4 text-sm">Subtle Text</span>
<small class="text-hierarchy-5 text-xs">Very Subtle Text</small>
```

### Interactive Elements

```html
<!-- Primary Button -->
<button class="btn-primary">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="btn-secondary">
  Secondary Action
</button>

<!-- Interactive Background -->
<div class="interactive p-4 rounded-lg cursor-pointer">
  Clickable Area
</div>
```

### Navigation Dots

```html
<div class="nav-dot w-2 h-2"></div>
<div class="nav-dot w-2 h-2 active"></div>
```

## Shadows and Effects

### Box Shadows

```html
<!-- Warm Shadow -->
<div class="shadow-warm">Warm glow effect</div>

<!-- Glass Shadow -->
<div class="shadow-glass">Subtle glass shadow</div>

<!-- Glow Effect -->
<div class="shadow-glow">Accent glow</div>
```

### Animations

```html
<!-- Floating Animation -->
<div class="animate-float">Floating element</div>

<!-- Glow Animation -->
<div class="animate-glow">Glowing element</div>

<!-- Warm Pulse -->
<div class="animate-pulse-warm">Pulsing element</div>
```

## Migration Guide

### From Individual Classes to Design System

**Before:**
```html
<div class="bg-stone-900 text-stone-100 border border-stone-500/15">
  <!-- Complex, hard to maintain -->
</div>
```

**After:**
```html
<div class="bg-ds-primary text-ds-primary border-ds-subtle">
  <!-- Clean, maintainable -->
</div>
```

### Converting Existing Components

1. **Replace background colors:**
   - `bg-black` → `bg-ds-primary`
   - `bg-neutral-900` → `bg-ds-primary`
   - `bg-stone-900` → `bg-ds-secondary`

2. **Replace text colors:**
   - `text-white` → `text-ds-primary`
   - `text-stone-100` → `text-ds-primary`
   - `text-stone-300` → `text-ds-tertiary`

3. **Replace borders:**
   - `border-white/20` → `border-ds-subtle`
   - `border-stone-500/30` → `border-ds-medium`

4. **Replace glass effects:**
   - Complex gradients → `glass-card` or `glass-subtle`

## Theme Switching

To switch themes, simply update the CSS custom properties:

```css
/* Light theme example */
:root {
  --bg-primary: #fafaf9;
  --text-primary: #1c1917;
  /* ... other colors */
}

/* Dark theme */
:root {
  --bg-primary: #171717;
  --text-primary: #f5f5f4;
  /* ... other colors */
}
```

## Benefits

1. **Easy Maintenance**: Change entire theme by updating CSS variables
2. **Consistency**: All components use the same color system
3. **Performance**: Fewer class changes, better CSS optimization
4. **Scalability**: Easy to add new themes or color variants
5. **Developer Experience**: Clear, semantic class names

## File Structure

```
app/
├── globals.css          # Design system CSS variables & utilities
├── tailwind.config.js   # Extended Tailwind configuration
└── components/          # Components using design system
```

## Best Practices

1. **Always use design system classes** for colors and common patterns
2. **Use CSS custom properties** for complex or unique styling
3. **Extend the system** rather than overriding it
4. **Test accessibility** with contrast checking tools
5. **Document new patterns** when adding to the system

## Examples

### Complete Component Example

```tsx
const ProjectCard = ({ title, description, tags }) => (
  <div className="project-card group">
    <h3 className="text-hierarchy-1 text-xl mb-4">{title}</h3>
    <p className="text-hierarchy-3 mb-6">{description}</p>
    <div className="flex gap-2">
      {tags.map(tag => (
        <span 
          key={tag}
          className="px-3 py-1 text-hierarchy-4 text-xs bg-ds-interactive rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);
```

This design system ensures consistent, maintainable, and eye-friendly interfaces across the entire application. 