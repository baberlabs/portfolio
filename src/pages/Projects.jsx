import { PROJECTS } from "../my-projects";
import { SCREENSHOTS } from "../images";
import { imageName, projectName } from "../functions";

export default function Projects() {
  return (
    <main className="flex h-screen flex-col gap-10 bg-zinc-800 px-[100px] py-10 text-zinc-200">
      <h1 className="text-center text-4xl font-black">Projects</h1>
      <ul className="flex flex-row flex-wrap justify-center gap-8">
        {PROJECTS.map((project) => {
          return (
            <li
              key={project}
              className="flex h-fit w-[300px] flex-col shadow-xl"
            >
              <a
                href={`https://baberlabs.github.io/${project}`}
                className="bg-zinc-900 p-3 font-bold underline"
              >
                {projectName(project)}
              </a>
              <img
                src={SCREENSHOTS[imageName(project)]}
                alt={`Screenshot of ${projectName(project)}`}
              />
              <a
                href={`https://github.com/baberlabs/${project}`}
                className="bg-zinc-800 p-2 text-right underline"
              >
                GitHub
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
