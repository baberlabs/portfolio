import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

import Section from "../components/Section";
import Heading2 from "../components/Heading2";
import ContactLink from "../components/ContactLink";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:bbrkhnn@outlook.com",
    icon: <FaEnvelope />,
    colors: "hover:text-blue-400",
  },
  {
    label: "GitHub",
    href: "https://github.com/baberlabs",
    icon: <FaGithub />,
    colors: "hover:text-gray-700 dark:hover:text-gray-200",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/baberr/",
    icon: <FaLinkedin />,
    colors: "hover:text-blue-600",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/447438234827",
    icon: <FaWhatsapp />,
    colors: "hover:text-green-500",
  },
  {
    label: "Phone",
    href: "tel:+447438234827",
    icon: <FaPhone />,
    colors: "hover:text-purple-500",
  },
];

const IntroSection = () => (
  <Section>
    <div className="flex flex-col items-center">
      <img
        src="/avatar.png"
        alt="Portrait of Baber Khan"
        className="mb-6 h-24 w-24 -rotate-8 rounded-full shadow-lg ring-4 ring-blue-200 transition-transform duration-300 hover:scale-105 hover:rotate-0 sm:h-28 sm:w-28 md:h-36 md:w-36 dark:ring-blue-900"
        loading="lazy"
      />
      <h1 className="mb-1 text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl md:text-5xl dark:text-white">
        Baber Khan
      </h1>
      <Heading2 heading="Software Developer" />
      <div className="mt-3 flex flex-row flex-wrap justify-center gap-2">
        {contactLinks.map((props) => (
          <ContactLink {...props} key={props.label} />
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 text-gray-500 dark:text-gray-400">
        <FaLocationDot className="animate-pulse text-base text-red-400 sm:text-lg" />
        <p className="text-sm font-medium sm:text-base">Birmingham, UK</p>
      </div>
    </div>
  </Section>
);

export default IntroSection;
