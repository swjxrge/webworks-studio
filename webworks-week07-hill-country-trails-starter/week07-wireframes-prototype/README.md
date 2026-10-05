# Week 7 — Wireframes & Prototype Handoff
## Hill Country Trail Guide

**Primary User:** Maya Torres  
**Primary Task:** Choose a beginner-appropriate Saturday hike that can be completed in about three hours or less.

---

## 1. Project Overview
Briefly summarize the Week 6 problem you are carrying forward.

[Write here.]

---

## 2. Three Design Requirements
Translate your **top three Week 6 priorities** into exactly three interface requirements.

### Requirement 1
**Week 6 problem:**  
**Design requirement:**  
**How this helps Maya:**  

### Requirement 2
**Week 6 problem:**  
**Design requirement:**  
**How this helps Maya:**  

### Requirement 3
**Week 6 problem:**  
**Design requirement:**  
**How this helps Maya:**  

---

## 3. Figma Prototype Link
https://www.figma.com/design/f5ASZlVQHmOGyCZaIcB9Lv/Hill-Country-Trail-Guide-%E2%80%94-Week-7?node-id=0-1&t=KHcFPfoYpYZoOqEk-1 

---

## 4. Required Wireframe Exports

1. `wireframes/desktop-primary.png`
2. `wireframes/mobile-primary.png`
3. `wireframes/task-state-01.png`
4. `wireframes/task-state-02.png`

---

## 5. Prototype Flow
the prototype shows maya narrowing down trails based pn her experience and time limit

**Starting point:**  
maya selected beginner friendly and 3hrs or less but hasnt applied filters
**User action:**  
User clicks apply filters
**System/interface response:** 
the interface cofirms the selections and shows that explains the result and provides a chang filters aciton 

**End state:**  
user can change filters to return and reconsider her selection

---

## 6. Design Rationale
Document approximately three important decisions.

### Decision 1
**Problem:**  
original trail information did not include estimated hiking times, so Maya had to guess whether a hike would fit within three hours.
**Design response:**  
I placed estimated completion-time ranges near the top of each trail card. These are example estimates for the prototype and would need verification before development.
**Why:**  
Time is one of Maya’s main requirements. Showing it while she compares trails helps her decide without relying only on distance.

### Decision 2
**Problem:**  
Difficulty labels like “Easy” did not explain the terrain or effort involved.
**Design response:**  
 included short descriptions of footing, climbing, and terrain cautions alongside each trail’s difficulty rating.
**Why:**  
Maya is a beginner, so a rating alone may not tell her enough. Plain-language descriptions help her judge whether a trail fits her comfort level.

### Decision 3
**Problem:**  
original categories looked selectable but did not actually filter the trail list.
**Design response:**  
planned clearly labeled filters and connected the “Apply filters” action to a results state. I also included a way to return when no trails match.
**Why:**  
Maya needs to know that her action worked and what she can do next. Showing no matches is more useful than suggesting a trail that does not fit her selections.

---

## 7. Accessibility Notes
Document at least two accessibility decisions you planned before development.

### Accessibility Decision 1
used visible labels for the experience and hiking-time filters. On mobile, the filters appear above the results in a single column. This keeps the reading order clear and helps users understand what each field controls.

### Accessibility Decision 2
used text to explain difficulty and filter results instead of relying only on color. I also planned large action buttons and keyboard-operable controls with visible focus for development. This helps people using touch screens or keyboards follow the same task path.

---

## Week 8 Handoff
In Week 8, the client moves into a common production starter. You will implement two JavaScript behaviors connected to Maya's needs:
1. an accessible explanation/disclosure for trail difficulty; and
2. form validation and user feedback for a hike-planning form.

Your Week 7 prototype may explore these or another related solution. The important continuity is the user need and interaction reasoning.
