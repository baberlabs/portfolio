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
            <p className="max-w-[600px]">{project.description}</p>

            <div className="mt-2 flex flex-row flex-wrap justify-end gap-2 text-xs">
              {project.built_using.map((tech) => (
                <span key={tech} className="font-bold text-blue-500">
                  @{tech}
                </span>
              ))}
            </div>
            <img
              className="mt-2 w-full max-w-[600px] rounded-xl object-cover shadow-xl"
              src={project.image}
              alt={project.title}
            />

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
          </li>
        ))}
      </ul>
    </section>
  );
}
