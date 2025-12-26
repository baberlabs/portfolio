import { useContext, useState } from "react";
// import LinkButton from "../../components/LinkButton";
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
import { projects } from "../../projects";

import defaultImage from "../../assets/default-image.png";
import LinkButton from "../../components/LinkButton";

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
    <section
      className="animate-fadein flex min-h-screen flex-col gap-16 px-8 py-32 md:px-32 lg:px-64"
      style={{
        animation: "fadein 0.8s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <style>
        {`
          @keyframes fadein {
            from { opacity: 0; transform: translateY(24px);}
            to { opacity: 1; transform: none;}
          }
          .minimal-shadow {
            box-shadow: 0 2px 16px 0 rgba(0,0,0,0.06);
          }
          .transition-all {
            transition: all 0.2s cubic-bezier(.4,0,.2,1);
          }
          .hover-scale:hover {
            transform: scale(1.025);
            box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
            z-index: 2;
          }
          .fadein-popup {
            animation: fadein 0.2s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
      <h2 className="hidden">CV</h2>
      <section className="flex flex-col gap-4">
        <h3 className="text-3xl font-black tracking-tight">Baber Khan</h3>
        <p className="text-2xl opacity-80">
          Computer Science Student · Software Developer
        </p>
        <div className="relative flex w-fit flex-row items-center gap-2">
          <p>United Kingdom</p>
          <button
            onMouseEnter={handleInfo}
            onMouseLeave={handleInfo}
            className="transition-all hover:scale-110 focus:outline-none"
            aria-label="Show location info"
          >
            <Info />
          </button>
          {infoOpen && (
            <div className="minimal-shadow fadein-popup absolute left-0 top-10 flex w-64 flex-col gap-2 rounded bg-text p-4 text-sm text-background">
              <div className="flex flex-row items-center gap-1">
                <LocationOn />
                <p className="font-bold">Based in Birmingham, UK</p>
              </div>
              <p>Prefer on-site in Birmingham, but open to remote work.</p>
            </div>
          )}
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          <a
            href="mailto:bbrkhnn@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text="Email"
              theme={theme}
              icon={<Email />}
              className="transition-all hover:scale-105"
            />
          </a>
          <a
            href="https://github.com/baberlabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text="GitHub"
              theme={theme}
              icon={<GitHub />}
              className="transition-all hover:scale-105"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/baberr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text="LinkedIn"
              theme={theme}
              icon={<LinkedIn />}
              className="transition-all hover:scale-105"
            />
          </a>
        </div>
      </section>

      <Section>
        <Heading>Why I Am Here</Heading>
        <p>
          I am currently studying BSc (Hons) Computer Science and building
          software to develop a solid understanding of how systems work end to
          end.
        </p>
        <p>
          Before entering full-time study, I worked in retail management while
          teaching myself web development fundamentals. This led me to complete
          the Northcoders Software Development bootcamp, where I gained hands-on
          experience with full-stack applications, testing, and collaborative
          development.
        </p>
        <p>
          My current focus is on strengthening fundamentals: programming
          discipline, system boundaries, data flow, and correction. I am
          intentionally moving away from surface-level feature building toward
          deeper understanding of backend architecture, APIs, databases, and
          application design.
        </p>
        <p>
          I am seeking environments that value clarity, correctness, and
          long-term thinking over sleep alone.
        </p>
      </Section>

      <Section>
        <Heading>Technical Foundations</Heading>
        <p>I work primarily with the following technologies and concepts.</p>
        <List skills={skills} iconColor={iconColor}></List>
        <List>
          <ListItem textOnly text="Functional Programming" />
          <ListItem textOnly text="Test Driven Development (TDD)" />
          <ListItem textOnly text="Agile Methodology" />
          <ListItem textOnly text="Object Oriented Programming (OOP)" />
        </List>
      </Section>

      <Section>
        <Heading>What I Can Work On</Heading>
        <p>
          I build full-stack applications with clearly defined boundaries
          between frontend, backend, and infrastructure.
        </p>
        <p>
          On the backend, I design and implement REST APIs, authentication
          flows, database schemas, and permission rules, with tests validating
          behaviour and failure cases. On the frontend, I focus on predictable
          state management, clear data flow, and interfaces that reflect backend
          constraints accurately.
        </p>
        <p>
          I prefer working through problems end to end, ensuring that each layer
          of the system behaves correctly rather than masking issues behind
          abstraction or UI workarounds.
        </p>
      </Section>

      <Section>
        <Heading>Projects I've Built</Heading>
        <ul className="flex flex-row flex-wrap gap-4 text-sm">
          <li className="h-fit w-fit rounded bg-blue-600 px-2 py-1 font-bold tracking-widest text-white">
            INDIVIDUAL
          </li>
          <li className="h-fit w-fit rounded bg-purple-600 px-2 py-1 font-bold tracking-widest text-white">
            COLLABORATIVE
          </li>
        </ul>
        <List projects={projects}></List>
      </Section>

      <Section>
        <Heading>Outside of Work</Heading>
        <p>
          Outside of software development, I read extensively and maintain
          interest in fiction and long-form narrative writing. These interests
          have shaped how I think about structure, consistency, and long-term
          progression, which also informs how I approach complex software
          systems.
        </p>
        <p>
          I value focused, quiet work and environments that allow for sustained
          attention and deep learning.
        </p>
      </Section>
    </section>
  );
}

function Section({ children }) {
  return (
    <div className="minimal-shadow bg-background/80 flex flex-col gap-8 rounded-xl p-6 transition-all">
      {children}
    </div>
  );
}

function SubSection({ children }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

function Heading({ children }) {
  return (
    <h3 className="mb-2 text-xl font-black uppercase tracking-wide">
      {children}
    </h3>
  );
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
  const borderColor = theme === "light" ? "border-zinc-100" : "border-zinc-700";
  if (textOnly) {
    return (
      <li
        className={`${bgColor} border ${borderColor} minimal-shadow hover-scale w-fit rounded-lg p-4 transition-all`}
      >
        {text}
      </li>
    );
  } else if (project) {
    return (
      <li
        className={`w-[360px] rounded-xl text-text ${bgColor} border ${borderColor} minimal-shadow hover-scale transition-all`}
        style={{ overflow: "hidden" }}
      >
        <img
          src={project.image ? project.image : defaultImage}
          alt={project.title ? project.title : "image"}
          className="h-40 w-full rounded-t-xl object-cover transition-all"
        />

        <div className="relative flex flex-col gap-2 p-6">
          <h4 className="text-lg font-bold">
            {project.title ? project.title : "Project Title"}
          </h4>
          <p className="opacity-80">
            {project.description ? project.description : "Project description"}
          </p>
          <div className="mt-2 flex flex-row gap-2">
            <LinkButton link={project.live} text="Live" icon={<Language />} />
            {project.github_monorepo ? (
              <LinkButton
                link={project.github_monorepo}
                text={"Monorepo"}
                icon={<GitHub />}
              />
            ) : null}

            {project.github_client ? (
              <LinkButton
                link={project.github_client}
                text={"Client"}
                icon={<GitHub />}
              />
            ) : null}

            {project.github_server ? (
              <LinkButton
                link={project.github_server}
                text={"Server"}
                icon={<GitHub />}
              />
            ) : null}
          </div>
          <div className="mt-2 flex flex-row flex-wrap justify-start gap-2 text-xs">
            {project.built_using.map((tech) => (
              <span key={tech} className="font-bold text-blue-500">
                @{tech}
              </span>
            ))}
          </div>
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
        className={`flex w-fit flex-col items-center justify-center gap-3 rounded-lg ${bgColor} border ${borderColor} minimal-shadow hover-scale p-4 transition-all`}
      >
        <span className="text-4xl">{icon}</span>
        <span className="text-sm opacity-90">{text}</span>
      </li>
    );
  }
}
