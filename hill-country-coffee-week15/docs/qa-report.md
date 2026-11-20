# Hill Country Coffee — QA Report

**WebWorks Studio**  
**Week 15: Test, Refine & Deliver — Quality Assurance**

**Student:** [Your Name]  
**Test Date:** [Date]  
**Live Site URL:** [Paste the published GitHub Pages URL]  
**Repository URL:** [Paste the Hill Country Coffee GitHub repository/folder URL]

---

# 1. Release Candidate Summary

Briefly describe the current state of the Hill Country Coffee site before QA.

Include:

- which MVP pages/features are complete;
- any known Week 14 issues;
- whether the site is currently feature complete.

[Write 2–4 sentences here.]

---

# 2. Test Environment

## Browsers Tested

| Browser | Version | Device / OS | Result |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |

Test at least two modern browsers available to you.

## Representative Viewports

| Viewport | Approximate Width | Result |
|---|---:|---|
| Narrow / phone |  |  |
| Medium / tablet-like |  |  |
| Wide / desktop |  |  |

---

# 3. Definition of Done Review

Compare the live site against the Week 13 Definition of Done.

## Content

- [ ] Required MVP content is present.
- [ ] Client facts have not been invented.
- [ ] Content has been proofread.
- [ ] Required pages are complete.

**Notes:**  
[Add notes.]

## Responsive Design

- [ ] Required pages work at narrow widths.
- [ ] Required pages work at medium widths.
- [ ] Required pages work at wide widths.
- [ ] No layout-caused horizontal scrolling occurs.
- [ ] Content order remains understandable.

**Notes:**  
[Add notes.]

## Functionality

- [ ] Primary navigation works.
- [ ] Required links work.
- [ ] Required calls to action work.
- [ ] Required interactions work.
- [ ] No obvious unresolved JavaScript errors remain.

**Notes:**  
[Add notes.]

## Accessibility

- [ ] Semantic HTML reviewed.
- [ ] Heading structure reviewed.
- [ ] Keyboard operation tested.
- [ ] Visible focus verified.
- [ ] Focus order reviewed.
- [ ] Color contrast reviewed.
- [ ] Alternative-text decisions reviewed.
- [ ] Link/button labels reviewed.
- [ ] Responsive reflow / enlarged text reviewed.
- [ ] Custom interactive states/labels reviewed, if applicable.

**Notes:**  
[Add notes.]

## GitHub & Handoff

- [ ] Latest source is pushed.
- [ ] Live GitHub Pages site reflects the latest source.
- [ ] README is current.
- [ ] Discovery plan remains in `docs/`.
- [ ] QA report is saved in `docs/`.

**Notes:**  
[Add notes.]

---

# 4. Functional Testing

Record the result for each important user task.

| Test ID | User Task / Feature | Expected Result | Actual Result | Pass / Fail | Defect ID if Failed |
|---|---|---|---|---|---|
| F-01 | Primary navigation |  |  |  |  |
| F-02 | Home page primary CTA |  |  |  |  |
| F-03 | Menu access |  |  |  |  |
| F-04 | Location information access |  |  |  |  |
| F-05 | About / brand information |  |  |  |  |
| F-06 | Required interaction, if any |  |  |  |  |

Add rows as needed.

---

# 5. Responsive Testing

| Test ID | Page / Component | Narrow | Medium | Wide | Notes / Defect ID |
|---|---|---|---|---|---|
| R-01 | Header / navigation |  |  |  |  |
| R-02 | Home hero |  |  |  |  |
| R-03 | Repeated cards / sections |  |  |  |  |
| R-04 | Menu content |  |  |  |  |
| R-05 | Locations content |  |  |  |  |
| R-06 | Footer |  |  |  |  |

---

# 6. Cross-Browser Testing

| Test ID | Feature / Page | Browser 1 | Browser 2 | Notes / Defect ID |
|---|---|---|---|---|
| B-01 | Home page |  |  |  |
| B-02 | Navigation |  |  |  |
| B-03 | Menu page |  |  |  |
| B-04 | Location page / section |  |  |  |
| B-05 | Required interaction |  |  |  |

---

# 7. Accessibility Testing

## Tool-Assisted Check

**Tool Used:**  
[Name the accessibility checker or browser audit.]

**Pages Checked:**  
[List pages.]

**Important Findings:**  
[Summarize findings. Do not paste an automated score and stop there.]

## Keyboard Test

Test the site using only the keyboard.

- [ ] Skip link works, if present.
- [ ] Primary navigation is reachable.
- [ ] All links/buttons are reachable.
- [ ] Required interaction works.
- [ ] Focus remains visible.
- [ ] Focus order is logical.
- [ ] No keyboard trap occurs.

**Notes:**  
[Add notes.]

## Headings & Landmarks

**Findings:**  
[Add notes.]

## Alternative Text

**Findings:**  
[Add notes.]

## Links & Buttons

**Findings:**  
[Add notes.]

## Contrast

**Findings:**  
[Add notes.]

## Reflow / Enlarged Text

**Method:**  
[Describe how you checked.]

**Findings:**  
[Add notes.]

---

# 8. Content & Link Review

- [ ] Client-facing copy proofread.
- [ ] No unsupported client facts added.
- [ ] All navigation links tested.
- [ ] All calls to action tested.
- [ ] External links, if any, tested.
- [ ] Images/assets load on the published site.
- [ ] Page titles are meaningful.
- [ ] Basic metadata is present.

**Notes:**  
[Add notes.]

---

# 9. Defect Log

Use one row per defect.

Severity:
- Critical
- High
- Medium
- Low

Status:
- Open
- In Progress
- Fixed — Needs Retest
- Verified Fixed
- Deferred

| ID | Title | Severity | Page / Location | Steps to Reproduce | Expected | Actual | Status | Resolution / Retest Notes |
|---|---|---|---|---|---|---|---|---|
| BUG-001 |  |  |  |  |  |  |  |  |
| BUG-002 |  |  |  |  |  |  |  |  |
| BUG-003 |  |  |  |  |  |  |  |  |

Add rows as needed.

---

# 10. Retest Record

Record every corrected Critical, High, and Medium defect.

| Defect ID | Fix Commit / Description | Retest Steps | Result | Final Status |
|---|---|---|---|---|
|  |  |  | Pass / Fail |  |
|  |  |  | Pass / Fail |  |

---

# 11. Regression Check

After important fixes, confirm that related functionality still works.

- [ ] Navigation still works after fixes.
- [ ] Responsive behavior remains intact.
- [ ] Accessibility behavior remains intact.
- [ ] Required interaction still works.
- [ ] No new console errors appeared.
- [ ] Published GitHub Pages build reflects the fix.

**Notes:**  
[Add notes.]

---

# 12. Final Defect Summary

| Severity | Found | Verified Fixed | Remaining |
|---|---:|---:|---:|
| Critical |  |  |  |
| High |  |  |  |
| Medium |  |  |  |
| Low |  |  |  |

---

# 13. Release Readiness

Choose one:

- [ ] **Ready**
- [ ] **Ready with documented minor issues**
- [ ] **Not ready**

## Release Statement

In approximately 75–125 words, explain your decision.

Address:

- whether essential user tasks work;
- whether Critical/High issues remain;
- whether accessibility requirements were reviewed;
- whether remaining issues materially affect release;
- what, if anything, should happen next.

[Write your release statement here.]

---

# 14. Remaining Issues

If any issues remain, list them here.

| Issue | Severity | Why It Remains | Recommended Next Step |
|---|---|---|---|
|  |  |  |  |

If none remain, write:

`No known release-blocking issues remain.`

---

# Final QA Handoff Check

- [ ] I tested the published site.
- [ ] I tested at least two browsers available to me.
- [ ] I tested narrow, medium, and wide layouts.
- [ ] I ran a tool-assisted accessibility check.
- [ ] I completed a keyboard-only test.
- [ ] I reviewed headings, labels, alt text, contrast, and reflow.
- [ ] I created reproducible defect reports.
- [ ] I assigned severity and status to defects.
- [ ] Critical defects are resolved.
- [ ] Required High-severity defects are resolved.
- [ ] Fixed Critical/High/Medium defects were retested.
- [ ] Important fixes were checked for regressions.
- [ ] Latest fixes are pushed to GitHub.
- [ ] The live site reflects the current source.
- [ ] README links to this QA report and the live site.
- [ ] A release-readiness statement is complete.
