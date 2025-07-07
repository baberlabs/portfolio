import { AdsClick, Article } from "@mui/icons-material";
import LinkButton from "../../components/LinkButton";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-start justify-center gap-8 px-6 py-12 md:px-32 lg:px-64">
      <header>
        <div className="mb-2 text-xl font-black uppercase italic tracking-widest opacity-50 md:text-2xl">
          Fullstack
        </div>
        <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
          Software Developer
        </h1>
      </header>
      <p className="max-w-[600px] text-lg leading-relaxed">
        Combining creativity and technical expertise to deliver websites that
        look beautiful and serve business needs.
      </p>
      <ul className="flex flex-wrap justify-start gap-2 text-base font-medium opacity-80">
        {["React", "Tailwind", "Node.js", "Express", "MongoDB/PostgreSQL"].map(
          (tech) => (
            <li
              key={tech}
              className="rounded-full border border-current border-opacity-20 px-4 py-1 text-xs shadow-sm transition-transform hover:scale-105"
            >
              {tech}
            </li>
          ),
        )}
      </ul>
      <div className="flex flex-row gap-2">
        <LinkButton text="Hire Me" link="/contact" icon={<AdsClick />} />
        <LinkButton text="About Me" link="/cv" icon={<Article />} />
      </div>
    </section>
  );
}
