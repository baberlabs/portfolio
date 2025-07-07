import Section from "../components/Section";
import Heading2 from "../components/Heading2";
import { experience } from "../data/experience";

const ExperienceSection = () => (
  <Section>
    <Heading2 heading="Experience" />
    <div className="space-y-6 sm:space-y-8">
      {experience.map((item) => (
        <div key={item.role}>
          <h3 className="mb-1 text-base font-bold text-blue-900 sm:text-lg dark:text-blue-200">
            {item.role}
          </h3>
          <div className="mb-2 flex flex-col text-xs text-gray-700 sm:text-sm dark:text-gray-300">
            <span>{item.company}</span>
            <span className="opacity-50">{item.period}</span>
          </div>
          <ul className="ml-4 list-disc space-y-1 text-xs text-gray-700 sm:ml-6 sm:text-sm dark:text-gray-300">
            {item.details.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default ExperienceSection;
