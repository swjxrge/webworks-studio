# Week 8 — JavaScript Interaction Handoff
## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors
1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection
What elements did your script need to select, and why?

I used document.querySelector() to select the buttons, panel, form fields, and feedback area so Maya’s actions update the correct parts of the page

### Decision 2 — Event Handling
What events did you listen for? Why were those events appropriate?

I used addEventListener() to respond to clicks, form submissions, changes, and invalid fields so Maya can use a mouse or keyboard while keeping native validation

### Decision 3 — State / DOM Update
How did the interface change after user action?

I updated hidden and aria-expanded together and used textContent to display or clear form feedback so Maya sees accurate information without reloading the page

### Decision 4 — Accessibility
How did you preserve or improve keyboard/accessibility behavior?

preserved keyboard controls, visible focus, labels, required fields, and the live feedback region so the interactions remain accessible

---

## Testing Notes

### Difficulty Disclosure
- Mouse:Repeated clicks opened and closed the explanation correctly
- Keyboard:Tab reached the button, and Enter and Space activated it
- `aria-expanded`: aria-expanded matched the panel’s visibility
- Console errors:None were detected

### Planning Form
- Empty/invalid submission: The browser flagged missing required fields and did not show success feedback
- Valid submission: The form displayed the selected trail, experience level, and available time without reloading
- Keyboard: I could navigate with Tab, check the confirmation with Space, and submit with Enter
- Console errors: No JavaScript errors occurred, but the live site reported a missing browser-tab icon

---

## Live Site
(https://github.com/swjxrge/webworks-studio.git) 
