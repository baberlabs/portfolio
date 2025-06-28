import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTerminal,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  {
    href: "https://github.com/baberlabs",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "mailto:bbrkhnn@outlook.com",
    label: "Email",
    icon: FaEnvelope,
  },
  {
    href: "https://www.linkedin.com/in/baberr/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://wa.me/447438234827",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-gray-700 dark:bg-gray-900 dark:text-gray-400">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <span className="mb-4 text-lg font-semibold tracking-tight text-gray-900 md:mb-0 dark:text-white">
          <FaTerminal className="mr-2 inline text-blue-700 dark:text-blue-600" />
          Baber<span className="text-blue-700 dark:text-blue-600">r</span>
        </span>
        <div className="flex space-x-4">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="rounded-full p-2 transition-all duration-200 hover:bg-gray-200/60 hover:text-gray-900 focus:ring-2 focus:ring-gray-900 focus:outline-none dark:hover:bg-white/10 dark:hover:text-white dark:focus:ring-white"
            >
              <Icon className="size-6" />
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-600 opacity-60 md:mt-0 dark:text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
