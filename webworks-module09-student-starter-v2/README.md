# Mission City Makers Market — Module 9

## Project Summary

I added a filter that lets visitors choose the type of craft they want to see. I also added a FAQ accordion so they can open the questions they need without having every answer showing at once. I kept the original market information and matched the new controls to the page.

## Alpine Decision

I used Alpine to help visitors find makers based on what they are interested in. The dropdown lets them choose ceramics, printmaking, textiles, or woodcraft. They can also click Show all makers to bring every card back.

`x-data` stores the category, `x-model` connects it to the dropdown, and `x-show` decides which cards show. I used `x-text` for the results message and `@click` for the reset button. Alpine made sense because this is a small interaction that can stay in the HTML.

## Preline Decision

I used a Preline accordion for the visitor questions. This helps visitors find an answer without having to read through the whole section. I combined the children and pets questions into one section but kept both answers. The other sections explain buying online and whether the event is indoors.

I changed the colors, spacing, borders, and focus styles to match the market page. The first section starts open, and the plus and minus signs show whether a section is open or closed. Preline controls the accordion, while Alpine controls the maker filter.

## Accessibility Notes

- The dropdown has a visible label, and the controls use real buttons so they can be used with a keyboard.
- The buttons have visible focus styles so visitors can see where they are when using Tab.
- Each accordion button connects to its answer through matching IDs and ARIA attributes.
- The filter has a status message that can announce changes to screen readers. I also kept the original image descriptions and skip link.

## Testing Notes

The Tailwind build and code checks passed. The published GitHub Pages page was also checked in a browser.

- **Narrow screen (375px):** The maker cards used one column with no horizontal overflow.
- **Medium screen (768px):** The maker cards used two columns with no horizontal overflow.
- **Wide screen (1440px):** All four cards fit in one row with no horizontal overflow.
- **Filter:** Every category showed the correct maker and booth number. Show all makers brought all four cards back.
- **Keyboard:** The dropdown responded to arrow keys. Tab moved to the reset button with a visible focus ring, and Enter reset the filter. All three accordion buttons responded to Enter and Space.
- **Accordion:** The first section started open. All three sections responded to clicks and repeated keyboard toggles, and the expanded-state attributes changed with them.
- **Console:** No errors or warnings were reported during these checks. All four maker images loaded.

## Dependencies

- **Alpine.js 3.17.1:** Handles the category filter and result message. It uses the CDN script supplied in the starter.
- **Preline UI 4.2.0:** Handles opening and closing the FAQ sections. Its script is copied into `js/vendor/preline.js` so it can load on GitHub Pages.
- **Tailwind CSS and CLI 4.3.3:** Handle the colors, spacing, layout, and focus styles. The build creates `css/output.css`.
- **Tailwind Forms 0.5.11:** Helps style the dropdown.

## Running the Project

Open this folder in VS Code. Run `npm install`, then `npm run dev`. Open `index.html` with Live Server. Run `npm run build` before pushing changes.

Include the generated CSS, local Preline script, and package lock file in Git. Leave `node_modules` out.

## Official Sources

- [Alpine state](https://alpinejs.dev/directives/data)
- [Alpine input binding](https://alpinejs.dev/directives/model)
- [Alpine showing and hiding content](https://alpinejs.dev/directives/show)
- [Preline accordion](https://preline.co/docs/components/accordion.html)

## Submission

- [Live page](https://swjxrge.github.io/webworks-studio/webworks-module09-student-starter-v2/)
- [GitHub project folder](https://github.com/swjxrge/webworks-studio/tree/main/webworks-module09-student-starter-v2)
