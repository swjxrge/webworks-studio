# Week 10: Meet React — Component-Based Web Development

## Project Overview

The repeated service cards now use one ServiceCard component with the supplied service data. Category buttons use React state to filter the cards while keeping the original design.

## React Decisions

### Decision 1
**React Concept:** Components and props.

**Used For:** ServiceCard receives categoryLabel, title, description, and detail through props. It is exported from ServiceCard.jsx and imported into App.jsx.

**Why It Helps:** Every card uses the same structure, so changes only need to be made in one component.

### Decision 2
**React Concept:** List rendering and stable keys.

**Used For:** filteredServices.map() creates the cards, using each supplied service.id as the key.

**Why It Helps:** The service data controls the content, and React can identify each card consistently.

### Decision 3
**React Concept:** State and events.

**Used For:** useState starts selectedCategory at all. Button clicks update it, filter() selects matching services, and aria-pressed communicates the active button.

**Why It Helps:** React updates the cards and selected button together without manually hiding elements.

## React Reflection

React keeps the service cards more organized because one component handles the repeated layout. In Week 8, JavaScript selected elements and changed them directly. Here, the selected category is stored in state, and React renders the matching services when that state changes. Props and map make it easier to display different information without copying the same markup. The new complexity is understanding JSX, imports, and how state updates work. Component and state thinking would be useful for professional sites with repeated cards, product lists, or filters that need to stay consistent.

## Testing Notes

- Dependency installation and the development server work.
- ServiceCard uses props and supplied IDs as stable keys.
- Production build completed successfully.

## Run Locally

From week10-react, run npm install and npm run dev. Run npm run build to check the production build.

## Final Handoff

The supplied React/Vite setup, semantic markup, CSS, and service data are preserved. The project remains in week10-react. node_modules and dist are excluded by .gitignore.

## Verified Interaction Checks

- All displays six services; Health, Housing, and Community each display their two matching services.
- Active filters expose aria-pressed and retain the supplied selected styling.
- Tab, Enter, and Space work, with a visible focus outline.
- Narrow layout uses one card column; wide layout uses three.
- Browser console check found no warnings or errors.
- Build and browser tests used a matching temporary copy; the completed source files were copied into this repository folder.

