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

export const projects = [
  {
    title: "Northchess",
    github: "https://github.com/henryloach/nc_abcs_boardgame_frontend",
    description: "An online multiplayer chess game with variant gameplay modes",
    image: imageNorthchess,
    built_using: "Dart, Flutter, Material UI, WebSocket",
    isPaired: true,
  },
  {
    title: "Baber's Reach",
    live: "https://babers-reach.netlify.app",
    github: "https://github.com/baberlabs/fe-nc-news",
    description: "Read news from the farthest reaches of the world at NN",
    image: imageBabersReach,
    built_using:
      "React, React Router, Tailwind, Axios, Node, Express, PostgreSQL, Jest, Supertest",
    isPaired: false,
  },
  {
    title: "Task Manager",
    live: "https://baberlabs.github.io/task-manager",
    github: "https://github.com/baberlabs/task-manager",
    description: "A dark-themed task manager for your todos",
    image: imageTaskManager,
    built_using: "React, Tailwind CSS",
    isPaired: false,
  },
  {
    title: "Book Search",
    live: "https://baberlabs.github.io/book-search/",
    github: "https://github.com/baberlabs/book-search",
    description: "Search for your favourite books from Google",
    image: imageBookSearch,
    built_using: "React, Tailwind CSS, Axios, Google API",
    isPaired: true,
  },
  {
    title: "Hangman",
    live: "https://hangman-by-baberr.netlify.app/",
    github: "https://github.com/baberlabs/hangman-game",
    description: "Play the classic Hangman game",
    image: imageHangman,
    built_using: "React, CSS",
    isPaired: true,
  },
  {
    title: "Weather App",
    live: "https://weather-by-baberr.netlify.app",
    github: "https://github.com/baberlabs/weather-app",
    description:
      "Get the latest weather updates from around the world with a quick search",
    image: imageWeatherApp,
    built_using: "React, CSS, Axios, WeatherAPI, Material Icons",
    isPaired: true,
  },
  {
    title: "Noughts and Crosses",
    live: "https://baberlabs.github.io/noughts-and-crosses",
    github: "https://github.com/baberlabs/noughts-and-crosses",
    description: "The classic Noughts and Crosses (Tic-Tac-Toe) game",
    image: imageNoughtsAndCrosses,
    built_using: "HTML, CSS, JavaScript",
    isPaired: true,
  },
  {
    title: "Memes Generator",
    github: "https://github.com/baberlabs/memes-generator",
    description:
      "Generate your own memes or auto-generate a Mitch (our fav coding tutor) meme!",
    image: imageMemesGenerator,
    built_using: "HTML, CSS, JavaScript",
    isPaired: true,
  },
  {
    title: "Baberr",
    live: "https://baberr.com",
    github: "https://github.com/baberlabs/portfolio",
    description: "This website that you're viewing right now!",
    image: imageBaberr,
    built_using: "React, React Router, Tailwind",
    isPaired: false,
  },
];
