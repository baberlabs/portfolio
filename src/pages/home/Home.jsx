import LinkButton from "../../components/LinkButton";
import { BriefcaseIcon, IdentificationIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-start justify-center gap-8 px-6 py-12 md:px-32 lg:px-64">
      <header>
        <div className="mb-2 text-xl font-black uppercase italic tracking-widest opacity-50 md:text-2xl">
          Computer Science Student &
        </div>
        <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
          Full-stack Software Engineer
        </h1>
      </header>

      <p className="max-w-[760px] text-balance text-lg leading-relaxed">
        I build software to understand how systems work end to end. My focus is
        on correctness, clarity, and long-term maintainability rather than quick
        demos or surface-level features.
      </p>

      <ul className="flex flex-wrap justify-start gap-2 text-base font-medium opacity-80">
        {[
          "React",
          "Tailwind",
          "Node.js",
          "Express",
          "PostgreSQL",
          "MongoDB",
          "Python",
        ].map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-current border-opacity-20 px-4 py-1 text-xs shadow-sm transition-transform hover:scale-105"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex flex-row gap-2">
        <LinkButton
          text="Projects"
          link="/projects"
          icon={<BriefcaseIcon className="size-6" />}
        />
        <LinkButton
          text="Contact"
          link="/contact"
          icon={<IdentificationIcon className="size-6" />}
        />
      </div>
    </section>
  );
}
