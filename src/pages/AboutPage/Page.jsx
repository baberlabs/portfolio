import DownloadCVButton from "./sections/DownloadCVButton";
import IntroSection from "./sections/IntroSection";
import PersonalStatementSection from "./sections/PersonalStatement";
import TechnicalSkillsSection from "./sections/TechnicalSkillsSection";
import FeaturedProjectsSection from "./sections/FeaturedProjectsSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import PersonalInterestsSection from "./sections/PersonalInterestsSection";

const AboutPage = () => (
  <main className="relative mx-auto flex min-h-screen flex-col flex-wrap items-center gap-8 bg-gradient-to-br from-blue-50 via-white to-gray-100 px-2 pt-2 text-gray-900 transition-all sm:pt-4 md:pt-8 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-gray-100">
    <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08)_0,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.06)_0,transparent_70%)]" />
    <div className="z-10 flex w-full flex-col items-center">
      <DownloadCVButton />
      <IntroSection />
      <PersonalStatementSection />
      <TechnicalSkillsSection />
      <FeaturedProjectsSection />
      <EducationSection />
      <ExperienceSection />
      <PersonalInterestsSection />
    </div>
  </main>
);

export default AboutPage;
