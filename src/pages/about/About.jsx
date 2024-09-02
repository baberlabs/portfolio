import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import {
  Email,
  GitHub,
  WhatsApp,
  LinkedIn,
  Info,
  LocationOn,
  Language,
} from "@mui/icons-material";

import Button from "../../components/Button";

import { ThemeContext } from "../../context/ThemeProvider";

import { skills } from "../../skills";
import { projects } from "../../top-projects";

import defaultImage from "../../assets/default-image.png";

export default function CV() {
  const [infoOpen, setInfoOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const iconColor = theme === "light" ? "#111111" : "#eeeeee";

  function handleInfo(e) {
    if (e.type === "mouseenter") {
      setInfoOpen(true);
    } else if (e.type === "mouseleave") {
      setInfoOpen(false);
    }
  }

  return (
    <section className="flex min-h-screen flex-col gap-16 px-8 py-32 md:px-32 lg:px-64">
      <h2 className="hidden">CV</h2>
      <section className="flex flex-col gap-4">
        <h3 className="">Baber Khan</h3>
        <p className="text-2xl">Junior Software Developer</p>
        <div className="relative flex w-fit flex-row items-center gap-2">
          <p>United Kingdom</p>
          <button onMouseEnter={handleInfo} onMouseLeave={handleInfo}>
            <Info />
          </button>
          {infoOpen && (
            <div className="absolute left-0 top-10 flex w-64 flex-col gap-2 rounded bg-text p-4 text-sm text-background">
              <div className="flex flex-row items-center gap-1">
                <LocationOn />
                <p className="font-bold">Birmingham, UK</p>
              </div>
              <p>
                Prefer on-site in Birmingham, but open to remote work and
                willing to relocate within the UK
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          <Button text="Email" theme={theme} icon={<Email />} />
          <Button text="GitHub" theme={theme} icon={<GitHub />} />
          <Button text="WhatsApp" theme={theme} icon={<WhatsApp />} />
          <Button text="LinkedIn" theme={theme} icon={<LinkedIn />} />
        </div>
      </section>

      <Section>
        <Heading>Why I Am Here</Heading>
        <p>
          My journey into technology began after two years of managing a local
          shop. Though I had a diploma in computing, it wasn't until I started
          learning web development in my free time that I found my true calling.
          The basics of HTML, CSS, and JavaScript opened up a new world for me.
          This self-study led me to join Northcoders' bootcamp, where I gained
          solid skills in full-stack development.
        </p>
        <p>
          My background gives me a unique view of the tech world. From my time
          in retail, I learned how to work with people and solve everyday
          problems. Now, I combine these skills with my tech knowledge to build
          useful software. I aim to create programs that meet real needs and are
          easy for people to use.
        </p>
        <p>
          Each new project is a chance to use my mix of people skills and coding
          ability. I focus on making things that work well and truly help users.
          As I grow in this field, I want to work on projects that make a real
          difference in how people use technology. My goal is to create software
          that's both powerful and user-friendly, drawing on my understanding of
          customer needs and good design.
        </p>
      </Section>

      <Section>
        <Heading>Technologies I Can Use</Heading>
        <List skills={skills} iconColor={iconColor}></List>
        <List>
          <ListItem textOnly text="Functional Programming" />
          <ListItem textOnly text="Test Driven Development (TDD)" />
          <ListItem textOnly text="Agile Methodology" />
          <ListItem textOnly text="Object Oriented Programming (OOP)" />
        </List>
      </Section>

      <Section>
        <Heading>What I Can Do</Heading>
        <p>
          With these skills, I can build entire websites from the ground up. I
          start by making the backend - that's the part of a website that users
          don't see, but it's crucial for storing and managing data. I use a
          method called test-driven development to make sure everything works
          properly. Then, I create the frontend - the part of the website that
          people interact with. I make sure it looks good and is easy to use.
        </p>
        <p>
          My knowledge of both frontend and backend makes me a full-stack
          developer. This means I can work on all parts of a website. I enjoy
          seeing a project through from start to finish, making sure all the
          pieces fit together well. My goal is always to create websites that
          are not only powerful but also simple for people to use.
        </p>
      </Section>

      <Section>
        <Heading>Projects I've Built</Heading>
        <ul className="flex flex-row flex-wrap gap-4 text-sm">
          <li className="h-fit w-fit rounded bg-blue-600 px-2 py-1 font-bold tracking-widest text-white">
            SOLO by myself
          </li>
          <li className="h-fit w-fit rounded bg-purple-600 px-2 py-1 font-bold tracking-widest text-white">
            PAIRED with a dev
          </li>
        </ul>
        <List projects={projects}></List>
      </Section>

      <Section>
        <Heading>Beyond the Code</Heading>
        <p>
          My interests extend beyond the world of technology. As a child, I
          often found myself lost in imagination, swinging a wooden stick on our
          balcony under the moonlight. In my mind, I was wielding a powerful
          sword, sending arc-like slashes through the air, much like the
          characters in my favorite anime series.
        </p>
        <p>
          This love for fantasy has stayed with me. I'm an avid reader of
          Xianxia and Xuanhuan novels, genres that blend martial arts and
          mysticism. I also enjoy fan fiction, particularly stories set in the
          universes of Harry Potter, Marvel, Swallowed Star, Naruto, and One
          Piece.
        </p>
        <p>
          If you share a passion for fantasy or creative writing, I'd be
          delighted to discuss it further. Who knows? We might even collaborate
          on a fantasy novel someday. Feel free to reach out using any of the
          contact methods provided at the top of this page.
        </p>
      </Section>
    </section>
  );
}

function Section({ children }) {
  return <div className="flex flex-col gap-8">{children}</div>;
}

function SubSection({ children }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

function Heading({ children }) {
  return <h3 className="text-xl font-black uppercase">{children}</h3>;
}

function List({ children, projects, skills, iconColor }) {
  if (projects) {
    return (
      <ul className="flex flex-row flex-wrap gap-8">
        {projects.map((project) => {
          const id = uuid();
          return <ListItem key={id} project={project} />;
        })}
      </ul>
    );
  }
  if (skills) {
    console.log(skills);
    return (
      <ul className="flex flex-row flex-wrap gap-2">
        {skills.map((skill) => {
          const id = uuid();
          return (
            <ListItem
              key={id}
              text={skill.text}
              icon={<skill.icon fill={iconColor} />}
            />
          );
        })}
      </ul>
    );
  }
  return <ul className="flex flex-row flex-wrap gap-2">{children}</ul>;
}

function ListItem({ icon, text, textOnly, project }) {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === "light" ? "bg-zinc-200" : "bg-zinc-800";
  if (textOnly) {
    return <li className={`${bgColor} w-fit p-4`}>{text}</li>;
  } else if (project) {
    return (
      <li className={`w-[360px] rounded-xl text-text ${bgColor}`}>
        <img
          src={project.image ? project.image : defaultImage}
          alt={project.title ? project.title : "image"}
          className="rounded-t-xl"
        />

        <div className="relative flex flex-col gap-2 p-6">
          <h4 className="font-bold">
            {project.title ? project.title : "Project Title"}
          </h4>
          <p>
            {project.description ? project.description : "Project description"}
          </p>
          <div className="my-2 flex flex-row gap-4">
            {project.live ? (
              <Link
                to={project.live}
                className="flex flex-row items-center justify-center gap-2 rounded bg-text px-4 py-2 text-background"
              >
                <Language />
                <span>Live Demo</span>
              </Link>
            ) : null}
            {project.github ? (
              <Link
                to={project.github}
                className="flex flex-row items-center justify-center gap-2 rounded bg-text px-4 py-2 text-background"
              >
                <GitHub />
                <span>GitHub</span>
              </Link>
            ) : null}
          </div>
          {project.built_using ? (
            <p className="opacity-70">{project.built_using}</p>
          ) : null}
          {project.isPaired ? (
            <p className="absolute right-0 top-0 rounded-bl bg-purple-600 px-2 py-1 text-sm font-bold tracking-widest text-white">
              PAIRED
            </p>
          ) : (
            <p className="absolute right-0 top-0 rounded-bl bg-blue-600 px-2 py-1 text-sm font-bold tracking-widest text-white">
              SOLO
            </p>
          )}
        </div>
      </li>
    );
  } else {
    return (
      <li
        className={`flex w-fit flex-col items-center justify-center gap-3 rounded ${bgColor} p-4`}
      >
        <span className="text-4xl">{icon}</span>
        <span className="text-sm">{text}</span>
      </li>
    );
  }
}
