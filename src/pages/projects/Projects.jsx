import { GitHub, Language } from "@mui/icons-material";
import LinkButton from "../../components/LinkButton";

import { projects } from "../../projects";

export default function Projects() {
  return (
    <section className="flex min-h-screen flex-col gap-4 px-8 py-4 md:px-32 lg:px-64">
      <h2 className="hidden">Projects</h2>
      <ul className="mt-24 flex flex-col gap-24 pb-28 pt-10">
        {projects.map((project) => (
          <li
            key={project.title}
            className="flex flex-col items-end gap-2 text-right"
          >
            <div className="mt-2 text-3xl font-black">{project.title}</div>
            <p>{project.description}</p>
            {/* <div className="mt-2 h-44 w-full rounded-xl bg-white shadow-xl"></div> */}
            <img
              className="mt-2 rounded-xl shadow-xl"
              src={project.image}
              alt={project.title}
            />
            <div className="mt-2 text-sm opacity-50">{project.built_using}</div>
            <div className="flex flex-row gap-4">
              <LinkButton
                link={project.live}
                text="Live Demo"
                icon={<Language />}
              />
              <LinkButton
                link={project.github}
                text={"GitHub"}
                icon={<GitHub />}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
