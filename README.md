# Portfolio Website

A personal portfolio website showcasing my projects, skills, and contact information. Built with a modern tech stack, it highlights my work as a **Junior Full-stack Developer** and serves as a gateway for potential collaborators or employers.

## Live Site

- [baberr.com](https://baberr.com)

## Features

- **Dynamic Theme Toggle:** Users can switch between light and dark mode.
- **Responsive Design:** Optimised for various screen sizes, ensuring a seamless experience across devices.
- **Projects Section:** Showcases key projects with live demo links and GitHub repositories.
- **Contact Form:** Integrated with Email.js for direct communication.
- **Blog Section:** Space for future blog posts on development topics.

## Tech Stack

- **Design Tools:** Figma
- **Frontend:** React, React Router, Tailwind CSS, Material UI Icons
- **Development Tools:**: Vite, ESLint, Prettier
- **Utilities:** UUID v4, Email.js
- **Deployment:** Netlify

## Project Structure

The project follows a simple and modular structure:

```bash
portfolio/
│
├── src/
│   ├── assets/         # Images, icons, and other media
│   ├── components/     # Reusable components (e.g., buttons, theme toggler)
│   ├── context/        # Context API for managing theme state
│   ├── pages/          # Individual page components (e.g., Home, About, Projects)
│   ├── App.jsx         # Main application file with routing logic
│   └── index.jsx       # Application entry point
│
├── public/             # Static files
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Key Pages

- **Home:** Introduction to who I am and what I do.
- **About:** Detailed breakdown of my skills, background, and tech expertise.
- **Projects:** A curated selection of my development work, both solo and collaborative.
- **Contact:** Contact form and social media links allowing users to get in touch with me.
- **404 Page:** Custom "Page Not Found" for non-existent routes.

## Installation and Local Development

To run this project locally:

1. Clone the repository:

```bash
$ git clone https://github.com/baberlabs/portfolio.git
```

2. Navigate to the project directory:

```bash
$ cd portfolio
```

3. Install dependencies

```bash
$ npm install
```

4. Start the development server

```bash
$ npm run dev
```

The project will be running at `http://localhost:5173` (default for Vite)

## Build for Production

To create a production-ready build:

```bash
$ npm run build
```

This will generate optimised assets in the `dist/` folder.

## Deployment

This site is deployed using [Netlify](https://www.netlify.com/) with the Netlify CLI. To deploy:

1. Install the Netlify CLI:

```bash
$ npm install -g netlify-cli
```

2. Build the project:

```bash
$ npm run build
```

3. Deploy to Netlify:

```bash
$ netlify deploy
```

This will create a draft version on a temporary link. When you're ready for production, run:

```bash
$ netlify deploy --prod
```

Ensure you are logged into your Netlify account and have configured the deployment settings.

## Contributing

This is a personal project, but if you notice any bugs or have suggestions for improvements, please open an issue or submit a pull request.

Alternatively, feel free to reach out via the contact form on the website or connect with me through:

- **GitHub:** [github.com/baberlabs](https://github.com/baberlabs)
- **LinkedIn:** [linkedin.com/in/baberr](https://linkedin.com/in/baberr)

## License

This project is open source under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).
