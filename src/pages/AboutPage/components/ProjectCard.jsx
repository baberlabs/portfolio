import { FaGlobe, FaGithub } from "react-icons/fa6";

import SkillBadge from "./SkillBadge";

const ProjectCard = ({ project }) => (
  <div
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white/90 shadow-xl transition-all hover:scale-[1.025] hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900/90"
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
            className="flex items-center gap-1 rounded-lg border border-blue-200 bg-white px-2 py-1 text-xs font-medium text-blue-700 shadow transition hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-100 focus:outline-none sm:gap-2 sm:px-3 sm:py-2 sm:text-sm dark:border-blue-900 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
          >
            {icon === "globe" && <FaGlobe className="h-4 w-4" />}
            {icon === "github" && <FaGithub className="h-4 w-4" />}
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
