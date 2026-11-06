# Week 12 Customization Audit

## 1. What is already working from Week 11?
- Home, Programs, About, News, and the approved workshop announcement.
- Original navigation, shared header/footer, and Southtown - Program Callout synced pattern.
- Exported the existing CMS into local WordPress with the same Assembler theme because WordPress.com Free blocked the required global customization.

## 2. Which requirements are global?
- All five Southtown palette colors, sans-serif typography, teal buttons, and consistent content widths.
- Use Global Styles rather than restyling pages separately.

## 3. Which requirement belongs in a reusable pattern?
- Brand the existing program callout with a soft surface, dark text, warm border, padding, and a primary CTA.
- Verify the same structure in two page contexts while keeping approved content editable.

## 4. Which requirement belongs in shared site structure?
- Refine the shared footer with brand colors, spacing, and a wrapped layout separating identity from contact information.
- Preserve the original contact details and tagline.

## 5. What is your one development-level modification?
- [ ] Small theme.json adjustment
- [x] Small targeted CSS rule

A two-color keyboard-focus indicator is not exposed by the normal global controls. Add one focus-visible rule with a dark outline and white outer ring. Keep the original theme.json unchanged.

## 6. What will you test?
Visitor: Multiple pages, narrow/wide layouts, overflow, contrast, keyboard access, mobile navigation, visible focus, and reusable pattern consistency.

Editor: Temporarily update one Programs sentence in the block editor, preview it, then restore the exact original approved text. Confirm that no code or global settings are needed for routine content updates.

## Environment note
This is a migrated local continuation of Week 11. Instructor acceptance of local WordPress instead of the stated instructor-supplied environment has not been confirmed.
