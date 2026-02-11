# vBox Documentation

User documentation for [vBox Azure Cloud Management](https://www.vbox-cloud.com/) platform.

Built with [Starlight](https://starlight.astro.build/) (Astro), hosted on [Netlify](https://www.netlify.com/).

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  assets/          # Images, logo, and other static assets
  content/
    docs/          # All documentation pages (Markdown)
      index.mdx              # Homepage
      getting-started/       # Prerequisites, onboarding, navigation
      cost-management/       # Cost details, recommendations, assessments
      security/              # Secure score, vulnerabilities, recommendations
      operations/            # Observability score, recommendations
      tasks/                 # Task management
      analytics/             # BI Analytics (Metabase)
      integrations/          # Defender XDR, AzGovViz, App Consent
      administration/        # Workspaces, customers, user roles
  styles/
    custom.css     # Brand colors and custom styling
```

## Updating Documentation

1. Edit Markdown files in `src/content/docs/`
2. Run `npm run dev` to preview locally
3. Commit and push to `main` — Netlify auto-deploys

### Using Cursor AI

Open this project in Cursor and use the AI assistant to:
- Generate new documentation from source code analysis
- Update existing pages based on feature changes
- Polish and improve content quality

See `.cursor/rules/docs-update.mdc` for AI editing guidelines.

## Configuration

- `astro.config.mjs` — Site title, sidebar navigation, social links
- `netlify.toml` — Netlify build configuration
- `src/styles/custom.css` — Brand colors and custom CSS

## Search

- **Built-in**: Pagefind provides instant client-side search (zero config)
- **Algolia DocSearch**: Apply at [docsearch.algolia.com](https://docsearch.algolia.com/) once the site is public
