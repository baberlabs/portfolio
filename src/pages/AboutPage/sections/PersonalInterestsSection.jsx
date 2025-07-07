import Section from "../components/Section";
import Heading2 from "../components/Heading2";
import { personalInterests } from "../data/personalInterests";

const PersonalInterestsSection = () => (
  <Section>
    <Heading2 heading="Hobbies" />
    <div className="flex flex-row flex-wrap gap-4">
      {personalInterests.map((interest) => (
        <div key={interest.title} className="w-60">
          <div className="mb-3 flex items-center gap-2">
            {interest.icon()}
            <h3 className="text-lg font-semibold">{interest.title}</h3>
          </div>
          <div className="mb-3 aspect-[2/3] w-full">
            <img
              src={interest.image}
              alt={`Image representing ${interest.title}`}
              className="h-full w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          <p>
            {interest.modes.map((mode) => (
              <span
                key={mode}
                className="mr-1 mb-1 inline-block rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {mode}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

export default PersonalInterestsSection;
