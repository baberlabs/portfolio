import Section from "../components/Section";
import Heading2 from "../components/Heading2";
import { education } from "../data/education";

const EducationSection = () => (
  <Section>
    <Heading2 heading="Education & Training" />
    <div className="space-y-6 sm:space-y-8">
      {education.map((item) => (
        <div
          key={item.degree}
          className={`${item.isCurrent ? "border-l-4 border-blue-500 pl-4" : ""}`}
        >
          <h3 className="mb-1 text-base font-bold text-blue-900 sm:text-lg dark:text-blue-200">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-1"
            >
              <span>{item.degree}</span>
              {item.isCurrent && (
                <span className="ml-1 rounded-full border border-blue-500 px-1.5 py-0.5 text-xs font-normal text-blue-500">
                  Current
                </span>
              )}
            </a>
          </h3>
          <div className="mb-2 flex flex-col text-xs text-gray-700 sm:text-sm dark:text-gray-300">
            <span>{item.institution}</span>
            <span className="opacity-50">{item.period}</span>
          </div>
          {item.details?.length > 0 && (
            <ul className="ml-4 list-disc space-y-1 text-xs text-gray-700 sm:ml-6 sm:text-sm dark:text-gray-300">
              {item.details.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </Section>
);

export default EducationSection;
