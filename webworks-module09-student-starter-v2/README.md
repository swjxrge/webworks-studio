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

The Tailwind build passed. The code checks confirmed that all four maker cards have matching filter values and that the three accordion buttons connect to the correct answers. These checks do not replace testing the page in a browser.

Browser testing is still pending because the preview tools could not open the page successfully. Before submitting, I need to check:

- **Narrow screen (375px):** Make sure the controls fit, the cards are readable, and the page does not scroll sideways.
- **Medium screen (768px):** Check the two-column card layout and make sure the FAQ text fits.
- **Wide screen (1440px):** Check the four-card layout and the spacing around the accordion.
- **Filter:** Try every category, check that the correct maker shows, and use Show all makers to reset it.
- **Keyboard:** Use Tab to move through the page, arrow keys to change the dropdown, and Enter or Space to use the buttons. Check that the focus indicator stays visible.
- **Accordion:** Check that the first answer starts open and that every section opens and closes more than once.
- **Console and live page:** Check for errors and repeat the interaction tests after publishing.

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

The project belongs in the existing webworks-studio repository. After publishing and testing, add the verified live page link here and submit the direct GitHub folder link.
