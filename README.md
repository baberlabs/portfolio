# Portfolio

Personal portfolio website.

Live (on Netlify): https://baberr.com

## Built With

- React
- React Router
- Tailwind CSS
- Vite

## Contents

- Projects
- Background and CV
- Contact information

## Project Data

The projects shown on the site are populated from a single data file (`projects.js`).

Each project is defined as a plain JavaScript object (title, description, links, tech used, etc.), which allows new projects to be added or updated without changing page logic or components.

This keeps the site content easy to maintain and avoids duplicating project details across the codebase.

```js
export const projects = [
  {
    title: String,
    description: String,
    github_monorepo: String | null,
    github_client: String | null,
    github_server: String | null,
    live: String,
    image: String,
    built_using: [String],
    isPaired: Boolean,
  },
];
```

## Local Development

```bash
git clone https://github.com/baberlabs/portfolio.git
cd portfolio
npm install
npm run dev
```

## License

The **design and code** in this repository may be reused with attribution.

The **content** (text, images, personal information) is personal and may not be reused without explicit permission.
