import Section from "../components/Section";
import Heading2 from "../components/Heading2";
import { skills } from "../data/skills";

const TechnicalSkillsSection = () => (
  <Section>
    <Heading2 heading="Technical Skills" />
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {Object.entries(skills).map(([category, items]) => (
        <div
          key={category}
          className="rounded-lg bg-white p-4 shadow-xl dark:bg-gray-800/50"
        >
          <h3 className="mb-2 text-base font-semibold text-blue-800 dark:text-blue-200">
            {category}
          </h3>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-300">
            {items.map((item) => (
              <li
                key={item}
                className="flex h-7 w-fit items-center rounded-sm bg-gray-200 px-2 hover:bg-gray-400/60 dark:bg-gray-800 dark:hover:bg-black/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default TechnicalSkillsSection;
