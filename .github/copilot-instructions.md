# Copilot Instructions for grace-garnet-website

## Project Overview
- This is a single-page React application for Grace Garnet Group, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- The app is structured around a main landing page with sections: Home, About, Services, Testimonials, Contact, and Footer.
- All major UI and logic are implemented in `src/App.js` using functional React components and hooks.
- Styling is handled with Tailwind CSS (see `src/index.css`), and icons are provided by `lucide-react`.

## Key Files & Structure
- `src/App.js`: Main component, contains all page sections, navigation, and business logic.
- `src/index.js`: Entry point, renders `App` into the DOM and sets up web vitals reporting.
- `src/index.css`: Tailwind CSS imports; all styling is utility-first via Tailwind classes.
- `public/index.html`: HTML template, root div for React.
- `package.json`: Scripts, dependencies, and devDependencies (notably Tailwind, lucide-react, testing-library).

## Developer Workflows
- **Start development server:** `npm start` (auto-reloads on changes)
- **Run tests:** `npm test` (uses React Testing Library and Jest; see `src/App.test.js`)
- **Build for production:** `npm run build` (outputs to `/build`)
- **Eject (advanced):** `npm run eject` (irreversible; exposes config)

## Patterns & Conventions
- **Component Structure:** All UI is in a single main component (`GraceGarnetWebsite` in `App.js`).
- **Section Navigation:** Uses anchor links (`#home`, `#about`, etc.) and state for active section highlighting.
- **Responsive Design:** Mobile menu toggles with state; uses Tailwind responsive classes.
- **Data Organization:** Service divisions and testimonials are defined as arrays of objects in `App.js` for easy mapping and rendering.
- **Icons:** Imported from `lucide-react` and passed as components to UI elements.
- **Testing:** Minimal, but set up for React Testing Library (see `src/setupTests.js`).

## Integration & External Dependencies
- **Tailwind CSS:** Configured via `index.css` and `package.json` devDependencies.
- **Lucide-react:** Used for all icons in the UI.
- **Web Vitals:** Optional performance reporting via `src/reportWebVitals.js`.

## Notable Customizations
- No routing library; navigation is via anchor links and scroll.
- No backend/API integration; all data is static in the codebase.
- No Redux or context; state is managed locally in `App.js`.

## Examples
- To add a new service division, update the `subsidiaries` array in `App.js`.
- To add a new testimonial, update the `testimonials` array in `App.js`.
- To change styles, edit Tailwind classes in JSX or update `index.css`.

## References
- For more, see [README.md](../../README.md) and [Create React App docs](https://facebook.github.io/create-react-app/docs/getting-started).

---

**Update this file if you introduce new architectural patterns, workflows, or major dependencies.**
