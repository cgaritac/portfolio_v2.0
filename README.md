# Portfolio v2.0

Personal portfolio built with React, strict TypeScript, and a modern 3D experience. The project showcases professional experience, selected projects, and contact options while following Feature-Sliced Design (FSD) and Firebase Hosting deployment.

🌐 **Live Site:** [https://cgarita.web.app](https://cgarita.web.app)

## Highlights

- Interactive landing page with Three.js canvases and Framer Motion animations.
- Feature-Sliced Design (FSD) architecture for scalable, maintainable code.
- Tailwind CSS v4 for responsive, mobile-first layouts without custom CSS files.
- Contact form powered by EmailJS with validation and Firebase analytics tracking.
- Automated CI/CD pipeline using GitHub Actions with deployment to Firebase Hosting.
- **Multilingual support** (English/Spanish) with i18next.
- **SEO optimized** with structured data (JSON-LD), Open Graph, and semantic HTML.

## Tech Stack

| Category        | Technologies                                                                 |
| --------------- | ---------------------------------------------------------------------------- |
| Core            | React 19, TypeScript (strict), Vite 7                                        |
| Styling         | Tailwind CSS v4                                                              |
| 3D & Motion     | Three.js (`@react-three/fiber`, `@react-three/drei`), Framer Motion          |
| Forms & Email   | EmailJS Browser SDK                                                          |
| State & Routing | React Router DOM 7                                                           |
| i18n            | i18next, react-i18next                                                       |
| Analytics       | Firebase Web SDK                                                             |
| Tooling         | ESLint 9, TypeScript ESLint, npm, GitHub Actions, Firebase Hosting           |

## SEO & Accessibility

The portfolio implements comprehensive SEO optimizations for better search engine visibility:

### Structured Data (JSON-LD)

Multiple schema.org schemas are included in `index.html`:

- **Person** – Professional information, skills, and social links
- **WebSite** – Site metadata with multilingual support
- **ProfilePage** – Portfolio page metadata
- **ItemList** – Featured projects with code repositories

### Meta Tags

- Open Graph tags for social media sharing (Facebook, LinkedIn)
- Twitter Card tags for Twitter/X sharing
- Hreflang tags for multilingual support (EN/ES)
- Comprehensive keywords and description

### SEO Files

| File | Purpose |
| ---- | ------- |
| `public/sitemap.xml` | XML sitemap with all sections and hreflang alternates |
| `public/robots.txt` | Crawler directives for search engines and AI bots |
| `public/llms.txt` | Human-readable portfolio info for AI assistants |
| `public/manifest.json` | PWA manifest with app shortcuts |

### Semantic HTML

- Proper heading hierarchy (h1, h2, etc.)
- ARIA labels and roles for accessibility
- Schema.org microdata in components
- Semantic elements (`<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`)

## Internationalization (i18n)

The portfolio supports English and Spanish with automatic language detection:

- Translation files: `src/shared/translations/content/en.json` and `es.json`
- Language toggle component in the navbar
- All UI text, labels, and content are translatable
- Hreflang tags for SEO in both languages

## Architecture

The codebase follows Feature-Sliced Design (FSD), organizing functionality by responsibility layers:

- `app/` – global configuration, root providers, layout, and routing.
- `pages/` – route-level view compositions.
- `widgets/` – large interface blocks composed from features and entities.
- `features/` – user scenarios (e.g., contact form, 3D canvases) with isolated logic/UI.
- `entities/` – domain models or business entities (not used extensively in this version).
- `shared/` – reusable UI components, utilities, configuration, motion helpers, and assets.

This structure keeps features independent, supports scalability, and enforces clear import boundaries (only from same or lower layers).

## Project Structure

```
├── public/
│   ├── sitemap.xml          # XML sitemap for search engines
│   ├── robots.txt           # Crawler directives
│   ├── llms.txt             # AI-readable portfolio info
│   ├── manifest.json        # PWA manifest
│   └── ...                  # 3D models and assets
├── src/
│   ├── app/                 # App bootstrap, providers, layout, routing
│   ├── pages/               # Route-level screens
│   ├── widgets/             # Composite UI sections (Hero, About, Experience, etc.)
│   ├── features/            # Self-contained features (forms, canvases, analytics)
│   ├── entities/            # Domain entities (extensible)
│   └── shared/              # Reusable UI, assets, translations, configuration
│       ├── components/      # Shared components (Header, Footer, etc.)
│       ├── translations/    # i18n translation files (en.json, es.json)
│       └── ...
└── index.html               # Entry point with SEO meta tags and JSON-LD schemas
```

## Getting Started

### Prerequisites

- Node.js 20 LTS (matching the CI environment)  
- npm 10+ (bundled with Node 20)
- Firebase project configured for Hosting
- EmailJS account and template (for the contact form)

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

The command starts Vite with fast refresh at `http://localhost:5173` by default.

### Type Safety & Linting

```bash
npm run type-check
npm run lint      
npm run lint:fix  
```

### Build & Preview

```bash
npm run build     
npm run preview   
```

### Bundle Analysis

```bash
npm run build:analyze
```

Generates a bundle report using `vite-bundle-visualizer` to inspect production builds.

## Environment Variables

The project uses `VITE_*` prefixed variables consumed at build time. Create a `.env` file for local development:

```
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
VITE_FIREBASE_MEASUREMENT_ID=xxx
VITE_EMAILJS_SERVICE_ID=xxx
VITE_EMAILJS_TEMPLATE_ID=xxx
VITE_EMAILJS_TO_NAME=xxx
VITE_EMAILJS_TO_EMAIL=xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
```

Only expose non-sensitive values publicly; keep secrets in GitHub Actions as repository secrets.

## Deployment

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`):

1. On pushes to `main`, the workflow checks out the code, installs dependencies, runs type-check and lint, and builds the project.
2. The build receives Firebase credentials through encrypted repository secrets.
3. Successful builds deploy to Firebase Hosting using `FirebaseExtended/action-hosting-deploy`.

Manual deployment from your machine:

```bash
npm run deploy
```

Ensure the Firebase CLI is authenticated and the `VITE_FIREBASE_PROJECT_ID` is defined.

### Google Search Console

To register the site in Google Search Console:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property with URL prefix: `https://cgarita.web.app`
3. Verify using HTML file upload (place in `public/` folder) or meta tag
4. Submit sitemap: `sitemap.xml`
5. Request indexing for the main URL

## Conventions & Quality

- Strict TypeScript across the app with explicit types and interfaces in dedicated `.types.ts` files.
- Functional components built with hooks; shared logic extracted into custom hooks (`use...` naming).
- Tailwind classes follow a mobile-first approach and the order: layout → spacing → colors → typography → effects.
- Components stay below 200 lines; complex sections are split into smaller widgets/features.
- Animations leverage Framer Motion and reusable motion variants in `shared/motion`.
- Accessibility and performance considerations include lazy-loaded 3D canvases and optimized WebP assets.

## Contact

If you have questions, suggestions, or would like to collaborate, feel free to reach out via the contact form on the site or connect through:

- 🌐 Website: [https://cgarita.web.app](https://cgarita.web.app)
- 📧 Email: [cgaritac@gmail.com](mailto:cgaritac@gmail.com)
- 💼 LinkedIn: [carlos-garita-campos](https://www.linkedin.com/in/carlos-garita-campos-44881a111)
- 🐙 GitHub: [cgaritac](https://github.com/cgaritac)

---

Thanks!