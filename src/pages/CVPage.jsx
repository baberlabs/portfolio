// Removed unused import: import { link } from "framer-motion/client";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  // FaLocationDot,
  FaGlobe,
} from "react-icons/fa";
import { FaRegCheckCircle, FaLifeRing } from "react-icons/fa";
import { FaFilePdf, FaLocationDot } from "react-icons/fa6";
import {
  SiCloudinary,
  SiCss3,
  SiDart,
  SiExcalidraw,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiFlutter,
  SiJest,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactrouter,
  SiRender,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTestinglibrary,
  SiVite,
  SiGithubpages,
  SiAxios,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

// --- Small Reusable Components ---

const Section = ({ children }) => (
  <section className="flex w-full max-w-full flex-col rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-xl backdrop-blur-lg transition-all sm:p-6 md:max-w-4xl md:p-8 lg:p-12 dark:border-gray-800 dark:bg-gray-900/90">
    {children}
  </section>
);

const Heading2 = ({ heading, srOnly }) => (
  <h2
    className={`${srOnly ? "sr-only" : "mb-5 text-2xl font-bold tracking-tight text-blue-800 sm:text-3xl dark:text-blue-200"}`}
  >
    {heading}
  </h2>
);

const SkillBadge = ({ children }) => (
  <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-800 sm:text-xs dark:bg-blue-900 dark:text-blue-200">
    {children}
  </span>
);

const ContactLink = ({ label, href, icon, colors }) => (
  <a
    aria-label={label}
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-1 transition-all duration-200 hover:bg-blue-50 focus:bg-blue-100 focus:outline-none sm:gap-2 sm:px-3 sm:py-2 dark:hover:bg-gray-800"
  >
    <div
      className={`rounded-full bg-white p-3 text-xl shadow-md ring-2 ring-blue-100 sm:p-4 sm:text-2xl dark:bg-gray-950 dark:ring-gray-900 ${colors} transition-transform duration-200 group-hover:scale-110`}
    >
      {icon}
    </div>
    <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
      {label}
    </div>
  </a>
);

const ProjectCard = ({ project }) => (
  <div
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white/90 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900/90"
    tabIndex={0}
    aria-label={project.title}
  >
    <div className="relative h-40 w-full overflow-hidden sm:h-48 md:h-56">
      <img
        src={project.image}
        alt={`Screenshot of ${project.title} project`}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
    </div>
    <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
      <div>
        <h3 className="mb-1 text-lg font-bold text-blue-900 sm:text-xl dark:text-blue-200">
          {project.title}
        </h3>
        <p className="mb-2 text-xs font-medium text-blue-600 sm:text-sm dark:text-blue-300">
          {project.subtitle}
        </p>
        <p className="mb-3 text-sm text-gray-700 sm:mb-4 sm:text-base dark:text-gray-300">
          {project.description}
        </p>
        <div className="mb-3 flex flex-wrap gap-1 sm:mb-4 sm:gap-2">
          {project.techStack.map((tech) => (
            <SkillBadge key={tech}>{tech}</SkillBadge>
          ))}
        </div>
      </div>
      <div className="flex gap-2 sm:gap-3">
        {project.links.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center gap-1 rounded-lg border border-blue-200 bg-white px-2 py-1 text-xs font-medium text-blue-700 shadow transition hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:outline-none sm:gap-2 sm:px-3 sm:py-2 sm:text-sm dark:border-blue-900 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-900/30"
          >
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

// --- Main Sections ---

const contactLinks = [
  {
    label: "Email",
    href: "mailto:bbrkhnn@outlook.com",
    icon: <FaEnvelope />,
    colors: "hover:text-blue-400",
  },
  {
    label: "GitHub",
    href: "https://github.com/baberlabs",
    icon: <FaGithub />,
    colors: "hover:text-gray-700 dark:hover:text-gray-200",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/baberr/",
    icon: <FaLinkedin />,
    colors: "hover:text-blue-600",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/447438234827",
    icon: <FaWhatsapp />,
    colors: "hover:text-green-500",
  },
  {
    label: "Phone",
    href: "tel:+447438234827",
    icon: <FaPhone />,
    colors: "hover:text-purple-500",
  },
];

const DownloadCVButton = () => (
  <a
    href="/Baber_Khan_FullStack_Developer_CV.pdf"
    download="Baber_Khan_FullStack_Developer_CV.pdf"
    className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-700 focus:bg-blue-800 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-700"
    aria-label="Download CV in PDF format"
  >
    <FaFilePdf className="text-lg" />
    Download CV
  </a>
);

const IntroSection = () => (
  <Section>
    <div className="flex flex-col items-center">
      <img
        src="/avatar.png"
        alt="Portrait of Baber Khan"
        className="mb-4 h-24 w-24 rounded-full shadow-lg ring-4 ring-blue-200 transition-transform duration-300 hover:scale-105 hover:-rotate-8 sm:h-28 sm:w-28 md:h-36 md:w-36 dark:ring-blue-900"
        loading="lazy"
      />
      <h1 className="mb-1 text-2xl font-extrabold tracking-tight text-blue-900 sm:text-3xl md:text-4xl dark:text-white">
        Baber Khan
      </h1>
      <Heading2 heading="Software Engineer" srOnly={false} />
      <div className="mt-3 flex flex-row flex-wrap justify-center gap-2">
        {contactLinks.map((props) => (
          <ContactLink {...props} key={props.label} />
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 text-gray-500 dark:text-gray-400">
        <FaLocationDot className="animate-pulse text-base text-red-400 sm:text-lg" />
        <p className="text-sm font-medium sm:text-base">Birmingham, UK</p>
      </div>
    </div>
  </Section>
);

const lookingFor = [
  "Full-time",
  "Part-time",
  "Frontend",
  "Backend",
  "Full-stack",
  "Remote",
  "In-person",
  "Relocation within UK",
  "JavaScript Developer",
  "React Developer",
];

const PersonalStatementSection = () => (
  <Section>
    <Heading2 heading="Personal Statement" srOnly />
    <div className="space-y-4 text-base leading-relaxed text-gray-700 sm:space-y-6 sm:text-lg dark:text-gray-200">
      <p>
        I’m a self-taught full-stack developer who took the long route to code.
        Before writing JavaScript, I managed people, handled stock, trained
        teams, and kept a business running under pressure. That experience
        shaped how I approach software: practical, reliable, and built to serve
        real needs.
      </p>
      <p>
        I learned to code through focused bootcamp training, consistent personal
        study, and by building full-stack projects from the ground up. I’ve
        worked with React, Node.js, Express, MongoDB, and PostgreSQL. I use
        tools like Tailwind, Vite, Git, and Socket.IO to create fast, testable,
        real-time apps — and I write my own test suites with Jest and SuperTest
        to keep things honest.
      </p>
      <p>
        I’m not just interested in software — I enjoy it. I like the
        problem-solving, the systems thinking, and the quiet satisfaction of
        making something work well. That’s why I’m starting a Computer Science
        degree: to deepen my understanding and broaden my thinking. But I’m
        ready to contribute now.
      </p>
      <p>
        I'm looking for a junior developer role where I can keep learning, write
        useful code, and be part of a team that builds with care. Once
        university begins, I plan to continue part-time, ideally on weekends.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {lookingFor.map((item) => (
          <div
            key={item}
            className="w-fit rounded-lg bg-blue-600/30 px-2 py-1 text-xs"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const simplifiedSkills = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Tailwind CSS",
    "React Router",
  ],
  Backend: ["Node.js", "Express", "MongoDB (Mongoose)", "PostgreSQL"],
  Testing: ["Jest", "SuperTest", "TDD"],
  Other: [
    "Git",
    "GitHub",
    "Vite",
    "Supabase",
    "Cloudinary",
    "Netlify",
    "Render",
  ],
  Concepts: ["REST APIs", "WebSockets", "Agile"],
};

const TechnicalSkillsSection = () => (
  <Section>
    <Heading2 heading="Technical Skills" />
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {Object.entries(simplifiedSkills).map(([category, items]) => (
        <div
          key={category}
          className="rounded-lg bg-white p-4 shadow-xl dark:bg-gray-800/50"
        >
          <h3 className="mb-2 text-base font-semibold text-blue-800 dark:text-blue-200">
            {category}
          </h3>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-300">
            {items.map((item) => (
              <li
                key={item}
                className="flex h-7 w-fit items-center rounded-sm bg-gray-200 px-2 hover:bg-gray-400/60 dark:bg-gray-800 dark:hover:bg-black/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

const updatedProjects = [
  {
    title: "Chatr",
    subtitle: "Real-Time Messaging App",
    description:
      "Built a chat app using React, Node.js, and MongoDB. Added image uploads with Cloudinary and real-time sockets with Socket.IO. Wrote tests using Jest and SuperTest.",
    techStack: ["React", "Tailwind", "Node.js", "MongoDB", "Socket.IO"],
    links: [
      {
        href: "https://chatr.baberlabs.com",
        label: "Live",
        icon: <FaGlobe />,
      },
      {
        href: "https://github.com/baberlabs/chatr",
        label: "Code",
        icon: <FaGithub />,
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
        icon: <FaGlobe />,
      },
      {
        href: "https://github.com/baberlabs/fe-nc-news",
        label: "Client",
        icon: <FaGithub />,
      },
      {
        href: "https://github.com/baberlabs/be-nc-news",
        label: "Server",
        icon: <FaGithub />,
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
        href: "https://northchess.netlify.com",
        label: "Live",
        icon: <FaGlobe />,
      },
      {
        href: "https://github.com/baberlabs/northchess-client",
        label: "Client",
        icon: <FaGithub />,
      },
      {
        href: "https://github.com/baberlabs/northchess-server",
        label: "Server",
        icon: <FaGithub />,
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
        icon: <FaGlobe />,
      },
      {
        href: "https://github.com/baberlabs/grants4you-client",
        label: "Client",
        icon: <FaGithub />,
      },
      {
        href: "https://github.com/baberlabs/grants4you-server",
        label: "Server",
        icon: <FaGithub />,
      },
    ],
    image: "/projects/grants4you.png",
  },
];

const ProjectsSection = () => (
  <Section>
    <Heading2 heading="Selected Projects" />
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-12">
      {updatedProjects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </div>
  </Section>
);

const education = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "Birmingham City University, UK",
    period: "2025 – 2029",
    link: "https://www.bcu.ac.uk/courses/computer-science-bsc-hons-2025-26",
    isCurrent: true,
    details: [
      "Starting in September 2025",
      "Focus: full-stack development, systems design, and AI foundations",
    ],
  },
  {
    degree: "Digital Training (IT, Cybersecurity, Call Centre)",
    institution: "EE & B2W Group Partnership, UK",
    period: "2025",
    link: "https://www.b2wcompletetraining.com/our-training-courses",
    isCurrent: true,
    details: [
      "Level 2 IT Skills, Level 1 Cybersecurity, and Call Centre Operations",
      "Hands-on learning in practical workplace tech scenarios",
    ],
  },
  {
    degree: "Software Development Bootcamp (Level 4)",
    institution: "Northcoders, UK",
    period: "2024",
    link: "https://www.northcoders.com/our-courses/software-development-bootcamp-in-javascript/",
    isCurrent: false,
    details: [
      "Full-time, DfE-funded bootcamp (12 weeks)",
      "Covered: JavaScript, TDD, Node.js, PostgreSQL, Express, React, Tailwind",
      "Completed real-world group and solo projects with test coverage",
    ],
  },
  {
    degree: "Access to HE Diploma in Computing (Level 3)",
    institution: "Birmingham Metropolitan College, UK",
    period: "2016 – 2017",
    link: "https://www.bmet.ac.uk/",
    isCurrent: false,
  },
  {
    degree: "GCSEs in English and Maths",
    institution: "Birmingham Metropolitan College, UK",
    period: "2016 – 2017",
    link: "https://www.bmet.ac.uk/",
    isCurrent: false,
  },
  {
    degree: "Secondary & Higher Secondary Education",
    institution: "Aziz Bhatti Shaheed Army Public School, Pakistan",
    period: "2010 – 2014",
    link: "https://campusguru.pk/en/college/mardan/aziz-bhatti-shaheed-army-college-mardan-main-campus",
    isCurrent: false,
    details: ["Matriculation in Science and FSc Pre-Engineering"],
  },
];

const EducationSection = () => (
  <Section>
    <Heading2 heading="Education & Training" />
    <div className="space-y-6 sm:space-y-8">
      {education.map((item) => (
        <div
          key={item.degree}
          className={`${item.isCurrent ? "border-l-4 border-blue-500 pl-4" : ""}`}
        >
          <h3 className="mb-1 text-base font-bold text-blue-900 sm:text-lg dark:text-blue-200">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-1"
            >
              <span>{item.degree}</span>
              {item.isCurrent && (
                <span className="ml-1 rounded-full border border-blue-500 px-1.5 py-0.5 text-xs font-normal text-blue-500">
                  Current
                </span>
              )}
            </a>
          </h3>
          <div className="mb-2 flex flex-col text-xs text-gray-700 sm:text-sm dark:text-gray-300">
            <span>{item.institution}</span>
            <span className="opacity-50">{item.period}</span>
          </div>
          {item.details?.length > 0 && (
            <ul className="ml-4 list-disc space-y-1 text-xs text-gray-700 sm:ml-6 sm:text-sm dark:text-gray-300">
              {item.details.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </Section>
);

const experience = [
  {
    role: "Assistant Manager",
    company: "HRS News Ltd, Birmingham",
    period: "2022 - 2024",
    details: [
      "Managed operations, staff training, and inventory",
      "Led transition to a new EPOS system with technical onboarding",
      "Strengthened leadership, problem-solving, and accountability",
    ],
  },
];

const ExperienceSection = () => (
  <Section>
    <Heading2 heading="Experience" />
    <div className="space-y-6 sm:space-y-8">
      {experience.map((item) => (
        <div key={item.role}>
          <h3 className="mb-1 text-base font-bold text-blue-900 sm:text-lg dark:text-blue-200">
            {item.role}
          </h3>
          <div className="mb-2 flex flex-col text-xs text-gray-700 sm:text-sm dark:text-gray-300">
            <span>{item.company}</span>
            <span className="opacity-50">{item.period}</span>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-xs text-gray-700 sm:ml-6 sm:text-sm dark:text-gray-300">
            {item.details.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

const PersonalInterestsSection = () => (
  <Section>
    <Heading2 heading="Personal Interests" />
    <p className="text-sm text-gray-700 sm:text-base dark:text-gray-300">
      I enjoy reading Xianxia and Xuanhuan fantasy novels and exploring
      fanfiction across expansive worlds like Harry Potter, Swallowed Star,
      Naruto and One Piece. I also sketch and create character-driven visual art
      as a form of focused creativity.
    </p>
  </Section>
);

const CVPage = () => (
  <main className="mx-auto flex min-h-screen flex-col flex-wrap items-center gap-6 bg-gradient-to-br from-blue-50 via-white to-gray-100 p-2 text-gray-900 transition-all sm:p-4 md:p-8 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-gray-100">
    <DownloadCVButton />
    <IntroSection />
    <PersonalStatementSection />
    <TechnicalSkillsSection />
    <ProjectsSection />
    <EducationSection />
    <ExperienceSection />
    <PersonalInterestsSection />
    <div className="mt-2"></div>
  </main>
);

export default CVPage;
