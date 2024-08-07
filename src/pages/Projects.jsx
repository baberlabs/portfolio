import projects from "../data/projects";

export default function Projects() {
  return (
    <main className="flex h-screen flex-col gap-10 bg-zinc-800 px-[100px] py-10 text-zinc-200">
      <h1 className="text-center text-4xl font-black">Projects</h1>
      <ul className="flex flex-row flex-wrap justify-center gap-8">
        {projects.map((project, index) => {
          return (
            <li key={index} className="flex h-fit w-[300px] flex-col shadow-xl">
              <a
                href={project.live}
                className="bg-zinc-900 p-3 font-bold underline"
              >
                {project.text}
              </a>
              <img
                src={project.image}
                alt={`Screenshot of ${project.text} Project`}
              />
              <a
                href={project.repo}
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
