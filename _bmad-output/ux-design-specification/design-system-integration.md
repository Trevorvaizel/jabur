# DESIGN SYSTEM INTEGRATION

### Glassmorphism Token Usage

**All patterns use consistent design tokens:**

**Colors:**
- `--color-primary`: #3B82F6 (Blue accent)
- `--color-success`: #22C55E (Green)
- `--color-error`: #DC2626 (Red)
- `--color-warning-orange`: #FB923C (Orange)
- `--color-warning-yellow`: #FBBF24 (Yellow)
- `--color-info`: #3B82F6 (Blue)
- `--color-glass-background`: rgba(255, 255, 255, 0.1)
- `--color-glass-border`: rgba(255, 255, 255, 0.2)

**Effects:**
- `--blur-light`: blur(10px)
- `--blur-medium`: blur(20px)
- `--blur-strong`: blur(40px)
- `--opacity-glass`: 0.9
- `--shadow-glassmorphism`: 0 8px 32px rgba(0, 0, 0, 0.1)

**Spacing (8px base):**
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-2xl`: 48px

**Typography:**
- `--font-heading`: 'Inter', sans-serif
- `--font-body`: 'Inter', sans-serif
- `--font-mono`: 'Fira Code', monospace

**Border Radius:**
- `--radius-sm`: 4px
- `--radius-md`: 8px
- `--radius-lg`: 12px
- `--radius-xl`: 16px
- `--radius-full`: 999px

---

### Pattern Consistency Rules

1. **Glass Effect Hierarchy**: Solid colors for primary actions, glassmorphism for secondary/supporting elements
2. **Consistent Blur Strength**: 20px blur for standard glass, 40px for modals, 10px for inputs
3. **Warm Transparency**: White-based glass (not gray) for warmer aesthetic
4. **Accent Sparing**: Accent color reserved for primary actions and active states only
5. **Shadow Subtlety**: Soft shadows (not heavy Material Design shadows)
6. **Animation Easing**: `ease-out` for entrances, `ease-in` for exits, `ease-in-out` for loops
7. **Icon Consistency**: 20px for inline icons, 24px for standalone, 64px for empty states

---

*UX Consistency Patterns completed: 2025-12-27*
*8 pattern categories defined with comprehensive specifications*
*All patterns integrate with glassmorphism design system*
*Accessibility standards included for every pattern*
*Mobile-first approach documented throughout*

