# Mission Trail Kayak Rentals — Client Project Plan

**WebWorks Studio**  
**Module 13 — Kick Off the Client Project**

**Student** — Sample Student  
**Submission** — Completed model response for the instructor demonstration

# 1. Client & Project Summary

Mission Trail Kayak Rentals is a small outdoor recreation business offering guided and self-guided rentals near the Mission Reach of the San Antonio River. Its online presence is mainly social media and a map listing, so customers repeatedly contact staff with basic questions. The proposed website will help visitors understand rental options, find meeting instructions, prepare for a visit, and contact the business. Many customers use phones, and tourists and first-time paddlers need clear explanations before arriving. WebWorks Studio will plan a small, accessible informational site with understandable navigation and client-approved content. Seasonal hours need an update process staff can maintain. Hosting, final photography, and any booking requirements remain open questions. This plan defines the initial scope and the checks that will guide production and QA.

# 2. Prioritized Business Goals

## Goal 1 — Highest Priority

**Goal** — Help visitors find essential rental and arrival information on a phone.

**Why it matters** — Clear information supports decisions and reduces uncertainty before arrival.

**Evidence from the brief** — Most customers check information on phones, and some arrive unsure of the meeting location or supplied equipment.

## Goal 2

**Goal** — Reduce repetitive preparation and beginner questions sent to staff.

**Why it matters** — Visitors can prepare using consistent information while staff have fewer recurring explanations to provide.

**Evidence** — Customers repeatedly message or call with common questions. The client wants rental descriptions, what-to-bring information, safety expectations, and beginner FAQs on the site.

## Goal 3

**Goal** — Give staff a practical way to keep seasonal hours accurate.

**Why it matters** — Visitors need current information, and staff prefer to make ordinary changes themselves.

**Evidence** — Seasonal hours change several times per year. The brief explicitly records staff’s preference for updating them without a developer.

# 3. Target Users & User Needs

The demo brief supplies audience notes rather than named persona profiles. The following groups summarize those notes and their tasks.

## First-Time Paddler

**Context** — A beginner deciding whether a rental suits their experience.

**Primary goal** — Understand the options and how to prepare.

**Important information/tasks** — Rental descriptions, approved beginner guidance, supplied equipment, safety information, and contact details.

**Likely friction** — Unanswered questions about prior experience and equipment.

**Design/accessibility implication** — Use plain headings, readable text, and clear links between rentals, preparation, and FAQs.

## Tourist or Unfamiliar Visitor

**Context** — A visitor who may be unfamiliar with the Mission Reach meeting arrangements.

**Primary goal** — Find the meeting instructions and plan arrival.

**Important information/tasks** — Meeting location, seasonal hours, preparation information, and contact method.

**Likely friction** — Scattered information or unclear navigation labels.

**Design/accessibility implication** — Keep essential details in real text and make Plan Your Visit understandable from any entry page.

## Customer Checking Information on a Phone

**Context** — A customer using a phone to find practical details before a visit.

**Primary goal** — Quickly check rental and visit information.

**Important information/tasks** — Rental options, hours, what to bring, and how to contact staff.

**Likely friction** — Long undifferentiated text, content that overflows, or controls that are hard to operate.

**Design/accessibility implication** — Plan scannable content, flexible layouts, meaningful links, and usable controls at narrow widths.

# 4. User-Need Statements

## First-Time Paddler

A first-time paddler needs a way to understand rental options and preparation expectations so that they can decide whether the experience suits them and arrive prepared.

## Tourist or Unfamiliar Visitor

An unfamiliar visitor needs a way to find clear meeting instructions and seasonal hours so that they can plan arrival at the correct place.

## Customer Checking Information on a Phone

A mobile customer needs a way to find essential rental, preparation, and contact information on a small screen so that they can answer practical questions before visiting.

# 5. Priority User Tasks

| Priority | User Task | Primary Audience(s) | Why It Matters |
|---|---|---|---|
| 1 | Find the meeting instructions and hours | Unfamiliar and mobile visitors | Supports arrival planning. |
| 2 | Understand guided and self-guided rental options | Beginners and mobile visitors | Supports choosing an appropriate option. |
| 3 | Check what to bring and what equipment is supplied | Beginners and unfamiliar visitors | Supports preparation. |
| 4 | Read beginner answers and approved safety guidance | Beginners | Helps visitors understand expectations. |
| 5 | Contact the business with remaining questions | All groups | Provides a next step when published information is insufficient. |

# 6. Content Inventory & Organization

| Content / Proposed Section | Primary Purpose | Primary User Task | Supplied Content / Assets | Missing / Needed | MVP or Future |
|---|---|---|---|---|---|
| Home / introduction | Explain the business and connect visitors to key destinations | Understand the service and choose a next step | Business description in the brief | Approved visitor-facing introduction | MVP |
| Rentals | Explain rental options and equipment | Compare options and prepare | Brief identifies descriptions as content the client can provide | Final descriptions and equipment details | MVP |
| Plan Your Visit | Gather practical arrival and preparation information | Find meeting details, hours, what to bring, and safety guidance | These content categories are identified in the brief | Approved instructions, hours, preparation list, and safety wording | MVP |
| FAQ | Answer recurring beginner questions | Check experience and preparation expectations | Brief identifies beginner answers as available from the client | Exact approved questions and answers | MVP content; reveal interaction optional |
| About | Introduce the business and guides | Understand who provides the experience | Brief identifies short guide biographies | Approved biographies and any photos | MVP |
| Contact | Provide a direct contact route | Ask a remaining question | Contact information is identified as client-provided content | Approved phone/email details | MVP |

## Content Grouping Notes

Group meeting instructions, seasonal hours, what to bring, and approved safety guidance under Plan Your Visit. Keep rental options and supplied equipment together under Rentals. FAQ answers can link to these fuller explanations. The brief names content the client can provide; it does not supply complete production copy. Request that copy before building the final pages.

# 7. Functional Requirements

1. The site must provide Home, Rentals, Plan Your Visit, FAQ, About, and Contact through consistent navigation. **Check** — Follow each destination from every page.
2. The site must display approved guided and self-guided rental descriptions and supplied-equipment information. **Check** — Compare Rentals with the approved source copy.
3. The site must make meeting instructions and seasonal hours reachable from Home and other entry pages. **Check** — Follow Plan Your Visit using keyboard and pointer and verify its text.
4. The site must provide approved what-to-bring and safety information. **Check** — Locate and read both sections at narrow and wide widths.
5. The site must provide readable beginner FAQ answers, including the client’s answer about prior experience when supplied. **Check** — Confirm each approved answer is present and accessible.
6. The site must provide a working contact route using client-approved details. **Check** — Verify the visible details and any contact-link destination.
7. The site must support staff updates to seasonal hours through a documented, agreed workflow. **Check** — Have an authorized editor change sample hours, preview the result, and confirm surrounding structure remains usable.
8. The site must keep essential tasks usable at narrow, intermediate, and wide widths. **Check** — Repeat the rental, arrival, and contact tasks across those conditions.

# 8. Accessibility Requirements

## Semantic Structure

Use appropriate navigation, main content, and footer structure, with a way to reach the main content efficiently.

## Heading Structure

Use descriptive page headings and logically nested headings for rental options and visit information.

## Keyboard Access

Make required navigation, links, and any FAQ controls reachable and operable with a keyboard.

## Visible Focus

Keep keyboard focus visible on the backgrounds where links and controls appear.

## Color Contrast

Verify actual text and control color combinations against the course accessibility standard during production and QA.

## Images / Alternative Text

Provide useful alternatives for informative images and appropriate decorative treatment for purely decorative images. Keep meeting instructions, hours, and safety information available as text.

## Links & Buttons

Use clear labels such as Plan Your Visit and Contact. Use links for destinations and suitable controls for revealing content.

## Responsive Reflow / Zoom

Keep content and controls usable when text is enlarged or the viewport narrows. Check overflow and wrapping in navigation and FAQs.

## Interactive Components / Forms

Readable FAQ content is required. A simple reveal pattern is optional if it helps scanning. If used, verify keyboard operation, visible focus, and correct communication of open and closed states. No form workflow is established in the current scope.

## Accessibility QA

Combine manual keyboard, heading, label, image, contrast, and reflow checks with an available accessibility checker. Record relevant findings, fixes, and retest results.

# 9. MVP — Must Ship

- [ ] Core informational destinations and their approved content are present.
- [ ] Meeting details, hours, rental options, equipment, and preparation information are easy to find.
- [ ] Beginner FAQs and an approved contact route work.
- [ ] Navigation and content remain accessible and responsive.
- [ ] Staff have a documented seasonal-hours update workflow.
- [ ] The published site, source or permitted configuration evidence, and handoff are available for review.

This scope addresses the recurring questions in the brief and supports preparation and arrival. It is achievable as a small informational site once copy and platform decisions are resolved. These boxes remain open until production and testing verify completion.

# 10. Future / Out of Scope

| Idea | Why It Is Not in the MVP |
|---|---|
| Customer accounts and saved profiles | The brief provides no account-specific task or launch requirement. |
| Online booking and reservations | Whether booking belongs in the project remains an explicit open question. |
| Payment processing or membership features | No requirements, service providers, or approval are supplied. |
| Custom interactive trip tools | The brief supports informational tasks without establishing these features. |

# 11. Sitemap / Information Architecture

## Proposed Sitemap

Primary navigation is Home, Rentals, Plan Your Visit, FAQ, About, Contact.

| Destination | Content Within It |
|---|---|
| Home | Business introduction and routes to essential information |
| Rentals | Rental Options; Equipment Included |
| Plan Your Visit | Meeting Location; Seasonal Hours; What to Bring; Approved Safety Guidance |
| FAQ | Approved beginner questions and answers |
| About | Business introduction and guide biographies |
| Contact | Approved contact methods |

The listed content groups are sections within their parent destinations rather than additional required pages.

## Information Architecture Rationale

Visitors can predict that arrival and preparation information belongs under Plan Your Visit. Rentals supports comparison, while FAQ addresses recurring beginner questions and links to fuller explanations. Shared navigation supports users who arrive through a search result on an interior page.

# 12. Technical Approach

## HTML

**Approach** — Use semantic content structure through the selected platform’s page content and templates.

**Reason** — Clear headings, landmarks, and links support the core information tasks.

## CSS

**Approach / framework, if any** — Use a coherent responsive system for type, spacing, content width, and repeated elements. If WordPress is approved, start with the block theme’s global styles and layout controls.

**Reason** — Shared rules reduce inconsistent presentation and support predictable editing.

## JavaScript

**Needed?** Limited, if justified.

**Planned use** — A simple FAQ reveal interaction only if it improves access to the approved answers. Evaluate built-in or native options first.

**Reason** — The requirement is accessible information. Added interaction must support that task.

## Libraries / Components

**Needed?** No external interaction library is currently justified.

**If yes, what and why?** Reconsider only if the approved interaction requires capabilities the chosen platform cannot provide simply.

## GitHub / Deployment

**Approach** — Propose a WordPress block-theme site because staff want to update seasonal hours. Confirm hosting access, editor permissions, and course approval before committing to that platform. Store the plan, approved content, and appropriate handoff evidence in GitHub; use the agreed host for the live WordPress site. Keep credentials private.

If the course requires a static deployment, resolve the staff-update workflow with the instructor before finalizing the technical plan.

## Technologies Considered but Not Selected

React and a custom application stack add complexity unsupported by the brief. A static HTML/CSS build could serve the visitor information, but the staff-editing requirement needs an agreed solution. The proposed WordPress approach remains conditional on hosting and course constraints.

# 13. Production Milestones

| Milestone | What Should Be True at This Point | Key Dependency |
|---|---|---|
| Production ready | Module 13 plan, sitemap, scope, and acceptance checks are ready for review | Platform decision and client content requests |
| Core site built | Module 14 required content and navigation are substantially functional on the agreed host | Approved copy, contact details, and site access |
| QA / refinement ready | Module 15 visitor tasks and editor update are tested; priority defects corrected and retested | Published build and authorized editor access |
| Final delivery ready | Module 16 final links, documentation, presentation, and portfolio evidence are prepared | Verified release candidate |

# 14. Risks & Dependencies

| Risk / Dependency | Impact | Likelihood | Response / Mitigation |
|---|---|---|---|
| Platform and staff-hours workflow are unresolved | High | High | Confirm hosting, permissions, and course constraints before final technical approval. |
| Detailed meeting, rental, preparation, and contact copy is pending | High | High | Request client-approved copy and identify missing fields explicitly. Use approved wording for safety information. |
| Final photography is unavailable | Medium | Medium | Confirm approved assets and credits early; keep essential information independent of images. |
| Booking expands the release scope | High | Medium | Seek a clear scope decision. Keep booking outside the current MVP unless requirements and approval are supplied. |

# 15. Prioritized Sprint Backlog

| Task | Priority | Effort | Dependency | Status |
|---|---|---|---|---|
| Confirm platform, hosting, and staff editor workflow | High | Small | Instructor/client response | To Do |
| Collect approved production copy and contact details | High | Medium | Client response | To Do |
| Establish interface system during production | High | Medium | Reviewed plan and platform | To Do |
| Build shared navigation and required destinations | High | Medium | Approved sitemap | To Do |
| Implement Rentals and Plan Your Visit content | High | Medium | Approved detailed copy | To Do |
| Implement FAQ, About, and Contact | High | Medium | Approved answers, biographies, and contact information | To Do |
| Configure and document staff-hours editing | High | Medium | Platform and permissions | To Do |
| Publish and check responsive and keyboard behavior | High | Medium | Representative working pages | To Do |
| Run visitor-task and editor QA, then fix and retest | High | Large | Published build and approved requirements | To Do |
| Prepare final delivery and presentation evidence | Medium | Medium | Verified build and documentation | To Do |

# 16. Definition of Done

## Content

- [ ] Required content is present and proofread.
- [ ] Meeting instructions, seasonal hours, equipment, and contact details match approved client sources.
- [ ] Safety and beginner guidance use approved copy.

## Responsive Design

- [ ] Essential tasks work at narrow, intermediate, and wide widths.
- [ ] Enlarged text remains readable and content reflows without layout overflow.

## Functionality

- [ ] All primary navigation destinations and contact links work.
- [ ] Approved beginner answers are available.
- [ ] Any optional FAQ reveal works by keyboard and pointer.
- [ ] Staff can update hours using the agreed workflow.

## Accessibility

- [ ] Semantic structure, headings, labels, and image alternatives are reviewed.
- [ ] Keyboard navigation, visible focus, contrast, and zoom/reflow are tested.
- [ ] Any interactive state is communicated correctly.

## QA

- [ ] Visitor tasks and the staff update test are recorded.
- [ ] The published site is checked in at least two modern browsers and multiple viewport sizes.
- [ ] Tool-assisted and manual accessibility findings are reviewed.
- [ ] Release-blocking defects are resolved; fixes are retested and remaining issues documented.

## GitHub & Handoff

- [ ] The plan, approved content, and appropriate implementation documentation are available.
- [ ] README links to the live site and QA report.
- [ ] The editor handoff explains how to update hours.
- [ ] Delivery links work and credentials remain private.

# 17. Open Questions / Assumptions

1. Does the client already have hosting or a CMS, and does that environment meet course requirements?
2. Who updates seasonal hours, what access do they need, and how will the workflow be verified?
3. Will online booking be part of the approved release? It is outside the current proposed scope.
4. When will the detailed content, contact information, and final photography be available?
5. Will the FAQ benefit from reveal behavior after the approved answers are reviewed?

# Final Planning Check

- [x] I grounded the plan in the Mission Trail demo brief.
- [x] I used supplied audience notes without inventing named personas.
- [x] I prioritized three goals and wrote user-need statements.
- [x] I completed the content inventory and task list.
- [x] I wrote functional and accessibility requirements.
- [x] I defined MVP and future scope.
- [x] I organized destinations and their content sections.
- [x] I justified a proposed technical approach and identified approval dependencies.
- [x] I recorded milestones, risks, backlog, and a Definition of Done.
- [x] I documented open questions and kept this deliverable at the planning stage.
