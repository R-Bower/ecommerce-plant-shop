## UoP CSS/450 Capstone

### Ecommerce Plant Shop

App details:
- A presentation-only ecommerce experience (stripped of payment capabilities).

Features:
- App based on React/NextJS.
- First-class TypeScript support.
- Styling via [@vanilla-extract](https://vanilla-extract.style).
- API parsing and validation via [zod](https://github.com/colinhacks/zod)

Stretch goals:
- Playwright e2e testing.
- Cypress component testing.
- Static build pipeline for each available plant.

### Getting started

##### Prerequisites:
- node (version 12 minimum).  App developed on version 16+.  Your mileage may vary.  
- yarn

##### Install
- run `yarn` in the project root.

##### Commands
- `yarn dev`
  - start the local dev server at [http://localhost:3000](http://localhost:3000)
- `yarn build`
  - build the production application.
- `yarn start`
  - start the production application (after building).
- `yarn watch`
  - watch TS type errors (run in second terminal while developing)


##### Notes

This project was a quick 5-week demo of a simple e-commerce application.  This is very different from how I'd normally do things, re: production data, and is merely a showcase of a simple ecommerce site.
