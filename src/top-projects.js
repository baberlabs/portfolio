import defaultImage from "./assets/default-image.png";
import imageBabersReach from "./assets/projects/babers-reach.png";

export const projects = [
  {
    title: "Baber's Reach - The News",
    live: "https://babers-reach.netlify.app",
    github: "https://github.com/baberlabs/fe-nc-news",
    description: "Read news from the farthest reaches of the world at NN",
    image: imageBabersReach,
    built_using:
      "React, React Router, Tailwind, Axios, Node, Express, PostgreSQL, Jest, Supertest",
    isPaired: false,
  },
  {
    title: "Hangman Game",
    // live: "https://baberr.com/projects/book-search",
    github: "https://github.com/enterthestream/fe-tiny-react-apps",
    description: "Play the classic Hangman game",
    image: defaultImage,
    built_using: "React, CSS",
    isPaired: true,
  },
  {
    title: "Weather App",
    // live: "https://baberr.com/projects/weather-app",
    github: "https://github.com/baberlabs/weather-app",
    description:
      "Discover the latest weather updates around the world with a quick search",
    image: defaultImage,
    built_using: "React, CSS, Axios, WeatherAPI, Material Icons",
    isPaired: true,
  },
  {
    title: "Noughts and Crosses",
    // live: "https://baberr.com/projects/",
    github: "https://github.com/DTCoding01/fe-dom-mini-apps",
    description: "The classic Noughts and Crosses (Tic-Tac-Toe) game",
    image: defaultImage,
    built_using: "HTML, CSS, JavaScript",
    isPaired: true,
  },
  {
    title: "Memes Generator",
    github: "https://github.com/baberlabs/fe-form-validation",
    description:
      "Generate your own memes or auto-generate a Mitch (our fav coding tutor) meme!",
    image: defaultImage,
    built_using: "HTML, CSS, JavaScript",
    isPaired: true,
  },
  {
    title: "Baberr",
    live: "https://baberr.com",
    github: "https://github.com/baberlabs/portfolio",
    description: "This website that you're viewing right now!",
    image: defaultImage,
    built_using: "React, React Router, Tailwind",
  },
];
