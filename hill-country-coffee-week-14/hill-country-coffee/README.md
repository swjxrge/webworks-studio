# Hill Country Coffee

**WebWorks Studio · Week 14 Production**  
**Student:** Jorge Martinez

Hill Country Coffee needs a mobile-friendly site where customers can browse the menu, find visit information, and learn about the company. The four-page site continues the [Week 13 client project plan](docs/client-project-plan.md).

## Live development site

[Expected GitHub Pages URL](https://swjxrge.github.io/webworks-studio/hill-country-coffee/). Deployment and the live URL still need verification.

## Production status

- Home, Menu, Locations, and About share a primary navigation menu and one stylesheet.
- Home links directly to the menu and location information. Menu lists the three approved categories and their supplied items.
- The Locations page flags the pending instructor-approved names, addresses, and hours. Add those together in `locations.html` when supplied.
- Menu prices, detailed descriptions, and photography are pending approval. Ordering, accounts, and reservations are outside the production scope.

## Technology and accessibility

The site uses semantic HTML and a shared mobile-first CSS stylesheet. Navigation wraps and the menu uses a responsive grid. The pages include a skip link, visible keyboard focus, descriptive link text, and an active-page indicator. The site uses a text-based brand and requires no JavaScript or external libraries.

## Maintenance and handoff

- Edit approved menu content in `menu.html` and visit information in `locations.html`.
- Shared styles live in `css/styles.css`. The source material is in [assets](assets/).
- Before submission, test the published pages at 375, 768, and 1280 pixels, use the keyboard to check navigation, and confirm the live URL.
