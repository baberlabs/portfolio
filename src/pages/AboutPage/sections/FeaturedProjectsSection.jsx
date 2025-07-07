import Section from "../components/Section";
import Heading2 from "../components/Heading2";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/featuredProjects";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const FeaturedProjectsSection = () => (
  <Section>
    <Heading2 heading="Featured Projects" />
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-12">
      {featuredProjects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </div>
    <div className="mt-8 flex justify-end text-sm text-blue-600 dark:text-blue-400">
      <Link to="/projects" className="flex items-center gap-2 hover:underline">
        View all projects <FaArrowAltCircleRight />
      </Link>
    </div>
  </Section>
);

export default FeaturedProjectsSection;
