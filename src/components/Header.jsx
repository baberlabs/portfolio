import {
  HomeIcon,
  BriefcaseIcon,
  IdentificationIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="">
      <h1 className="fixed left-0 top-0 z-10 w-full bg-background p-4 font-bold text-text">
        Baberr
      </h1>
      <Nav />
    </header>
  );
}

function Nav() {
  const className = {
    icon: "w-6",
    activeLink: "flex flex-col items-center gap-2 text-button_background ",
    defaultLink: "flex flex-col items-center gap-2 opacity-50",
  };
  const navLinks = [
    { text: "Home", href: "/", icon: <HomeIcon className={className.icon} /> },
    {
      text: "Projects",
      href: "/projects",
      icon: <BriefcaseIcon className={className.icon} />,
    },
    {
      text: "Blog",
      href: "/blog",
      icon: <BookOpenIcon className={className.icon} />,
    },
    {
      text: "Contact",
      href: "/contact",
      icon: <IdentificationIcon className={className.icon} />,
    },
  ];
  return (
    <nav className="fixed bottom-0 left-0 z-10 flex w-full flex-row justify-around bg-background py-4 text-text md:bottom-8 md:left-[50%] md:w-fit md:translate-x-[-50%] md:gap-10 md:rounded-full md:px-16 md:py-4 md:shadow-xl md:shadow-black/30">
      {navLinks.map((link) => (
        <NavLink
          key={link.text}
          to={link.href}
          className={({ isActive }) =>
            isActive ? className.activeLink : className.defaultLink
          }
        >
          {link.icon}
          <span className="text-sm">{link.text}</span>
        </NavLink>
      ))}
    </nav>
  );
}
