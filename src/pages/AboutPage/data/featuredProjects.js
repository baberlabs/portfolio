const featuredProjects = [
  {
    title: "Chatr",
    subtitle: "Real-Time Messaging App",
    description:
      "Built a chat app using React, Node.js, and MongoDB. Added image uploads with Cloudinary and real-time sockets with Socket.IO. Wrote tests using Jest and SuperTest.",
    techStack: ["React", "Tailwind", "Node.js", "MongoDB", "Socket.IO"],
    links: [
      {
        href: "https://chatr-3b2a.onrender.com/",
        label: "Live",
        icon: "globe",
      },
      {
        href: "https://github.com/baberlabs/chatr",
        label: "Code",
        icon: "github",
      },
    ],
    image: "/projects/chatr.png",
  },
  {
    title: "Baber’s Reach",
    subtitle: "Reddit-style News Platform",
    description:
      "News platform with voting, commenting, and sorting. Built the frontend with React and the backend using Express and PostgreSQL. Included full test coverage.",
    techStack: ["React", "Tailwind", "Node.js", "PostgreSQL"],
    links: [
      {
        href: "https://babers-reach.netlify.app",
        label: "Live",
        icon: "globe",
      },
      {
        href: "https://github.com/baberlabs/fe-nc-news",
        label: "Client",
        icon: "github",
      },
      {
        href: "https://github.com/baberlabs/be-nc-news",
        label: "Server",
        icon: "github",
      },
    ],
    image: "/projects/babers-reach.png",
  },
  {
    title: "Northchess",
    subtitle: "Multiplayer Chess Variant",
    description:
      "Flutter-based chess game with real-time multiplayer using WebSocket. Designed for quick, collaborative play.",
    techStack: ["Flutter", "Dart", "WebSocket"],
    links: [
      {
        href: "https://northchess.netlify.app",
        label: "Live",
        icon: "globe",
      },
      {
        href: "https://github.com/henryloach/nc_abcs_boardgame_frontend",
        label: "Client",
        icon: "github",
      },
      {
        href: "https://github.com/baberlabs/nc_abcs_boardgame_backend",
        label: "Server",
        icon: "github",
      },
    ],
    image: "/projects/northchess.png",
  },
  {
    title: "Grants4You",
    subtitle: "Green Energy Grants Platform",
    description:
      "Website for a local company to simplify green energy grants. Focused on clear content and trust-building design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        href: "https://grants4you.org",
        label: "Live",
        icon: "globe",
      },
      {
        href: "https://github.com/baberlabs/g4u-frontend",
        label: "Client",
        icon: "github",
      },
      {
        href: "https://github.com/baberlabs/g4u-backend",
        label: "Server",
        icon: "github",
      },
    ],
    image: "/projects/grants4you.png",
  },
];

export { featuredProjects };
