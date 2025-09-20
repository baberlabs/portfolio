import defaultImage from "./assets/default-image.png";
import imageNorthchess from "./assets/projects/northchess.gif";
import imageBabersReach from "./assets/projects/babers-reach.gif";
import imageTaskManager from "./assets/projects/task-manager.gif";
import imageBookSearch from "./assets/projects/book-search.gif";
import imageHangman from "./assets/projects/hangman.gif";
import imageWeatherApp from "./assets/projects/weather-app.gif";
import imageNoughtsAndCrosses from "./assets/projects/noughts-and-crosses.gif";
import imageMemesGenerator from "./assets/projects/memes-generator.gif";
import imageBaberr from "./assets/projects/baberr.gif";
import imageChatr from "./assets/projects/chatr.png";
import imageGrants4You from "./assets/projects/grants4you.png";

export const projects = [
  {
    title: "Chatr",
    description:
      "Built a chat app using React, Node.js, and MongoDB. Added image uploads with Cloudinary and real-time sockets with Socket.IO. Wrote tests using Jest and SuperTest.",
    github_monorepo: "https://github.com/baberlabs/chatr",
    github_client: null,
    github_server: null,
    live: "https://chatr.baberr.com/",
    image: imageChatr,
    built_using: ["React", "Tailwind", "Node.js", "MongoDB", "Socket.IO"],
    isPaired: false,
  },
  {
    title: "Grants4You",
    live: "https://grants4you.org",
    github_monorepo: null,
    github_client: "https://github.com/baberlabs/g4u-frontend",
    github_server: "https://github.com/baberlabs/g4u-backend",
    description:
      "Developed a website for a local company to simplify green energy grants. Focused on clear content and trust-building design.",
    built_using: ["HTML", "CSS", "JavaScript"],
    isPaired: false,
    image: imageGrants4You,
  },
  {
    title: "Northchess",
    live: "https://northchess.netlify.app/",
    github_monorepo: null,
    github_client: "https://github.com/henryloach/nc_abcs_boardgame_frontend",
    github_server: "https://github.com/baberlabs/nc_abcs_boardgame_backend",
    description:
      "Engineered a real-time multiplayer chess platform with innovative gameplay variants. Integrated WebSocket for seamless user interaction and leveraged Flutter for robust cross-platform delivery.",
    image: imageNorthchess,
    built_using: ["Dart", "Flutter", "Material UI", "WebSocket"],
    isPaired: true,
  },
  {
    title: "Baber's Reach",
    live: "https://babers-reach.netlify.app",
    github_monorepo: null,
    github_client: "https://github.com/baberlabs/fe-nc-news",
    github_server: "https://github.com/baberlabs/be-nc-news",
    description:
      "Developed a full-stack news aggregator with a modern, responsive UI. Implemented RESTful APIs, PostgreSQL data modeling, and comprehensive test coverage for reliability.",
    image: imageBabersReach,
    built_using: [
      "React",
      "React Router",
      "Tailwind",
      "Axios",
      "Node",
      "Express",
      "PostgreSQL",
      "Jest",
      "Supertest",
    ],
    isPaired: false,
  },
  {
    title: "Task Manager",
    live: "https://baberlabs.github.io/task-manager",
    github_monorepo: null,
    github_client: "https://github.com/baberlabs/task-manager",
    github_server: null,
    description:
      "Built a productivity tool focused on clarity and efficiency. Designed a dark-themed interface and implemented state management for smooth task tracking.",
    image: imageTaskManager,
    built_using: ["React", "Tailwind CSS"],
    isPaired: false,
  },
  {
    title: "Book Search",
    live: "https://baberlabs.github.io/book-search/",
    github_client: "https://github.com/baberlabs/book-search",
    description:
      "Created a performant book discovery app using the Google Books API. Prioritized fast search, clean UI, and robust API integration.",
    image: imageBookSearch,
    built_using: ["React", "Tailwind CSS", "Axios", "Google API"],
    isPaired: true,
  },
  {
    title: "Hangman",
    live: "https://hangman-by-baberr.netlify.app/",
    github_monorepo: null,
    github_client: "https://github.com/baberlabs/hangman-game",
    github_server: null,
    description:
      "Implemented a classic game with modern web standards. Focused on responsive design and intuitive user experience.",
    image: imageHangman,
    built_using: ["React", "CSS"],
    isPaired: true,
  },
  {
    title: "Weather App",
    live: "https://weather-by-baberr.netlify.app",
    github_monorepo: null,
    github_client: "https://github.com/baberlabs/weather-app",
    github_server: null,
    description:
      "Delivered a global weather dashboard with real-time data. Emphasized usability, API reliability, and clear data presentation.",
    image: imageWeatherApp,
    built_using: ["React", "CSS", "Axios", "WeatherAPI", "Material Icons"],
    isPaired: true,
  },
  {
    title: "Noughts and Crosses",
    live: "https://baberlabs.github.io/noughts-and-crosses",
    github_monorepo: null,
    github_client: "https://github.com/baberlabs/noughts-and-crosses",
    github_server: null,
    description:
      "Programmed a robust Tic-Tac-Toe game. Prioritized code clarity and maintainability.",
    image: imageNoughtsAndCrosses,
    built_using: ["HTML", "CSS", "JavaScript"],
    isPaired: true,
  },
  {
    title: "Memes Generator",
    github_monorepo: null,
    github_client: "https://github.com/baberlabs/memes-generator",
    github_server: null,
    description:
      "Developed a meme generator with dynamic image manipulation. Automated content creation and ensured a responsive, accessible interface.",
    image: imageMemesGenerator,
    built_using: ["HTML", "CSS", "JavaScript"],
    isPaired: true,
  },
  {
    title: "Baberr",
    live: "https://baberr.com",
    github_monorepo: null,
    github_client: "https://github.com/baberlabs/portfolio",
    github_server: null,
    description:
      "Designed and built a personal portfolio to showcase technical projects and skills. Focused on performance, accessibility, and clean architecture.",
    image: imageBaberr,
    built_using: ["React", "React Router", "Tailwind"],
    isPaired: false,
  },
];
