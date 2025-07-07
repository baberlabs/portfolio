import Section from "../components/Section";
import Heading2 from "../components/Heading2";

const PersonalStatementSection = () => (
  <Section>
    <Heading2 heading="Personal Statement" srOnly />
    <div className="space-y-4 text-base leading-relaxed text-gray-700 sm:space-y-6 sm:text-lg dark:text-gray-200">
      <p>
        I'm a software developer with hands-on experience building real-world
        apps using React, Node.js, Express, MongoDB, and PostgreSQL. I care
        about clean code, meaningful features, and writing my own tests with
        Jest and SuperTest to keep things reliable.
      </p>
      <p>
        I've completed an intensive bootcamp and will soon begin a Computer
        Science degree to deepen my foundation — but I'm ready to contribute
        now. I'm looking for a junior developer role where I can keep learning,
        solve useful problems, and grow with a thoughtful team. After university
        starts, I plan to continue part-time, ideally on weekends.
      </p>
    </div>
  </Section>
);

export default PersonalStatementSection;
