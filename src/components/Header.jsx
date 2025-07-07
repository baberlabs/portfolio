import {
  HomeIcon,
  BriefcaseIcon,
  IdentificationIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="bg-background/80 text-text fixed left-0 top-0 z-20 flex w-full items-center justify-start border-b border-white/10 p-4 text-xl font-extrabold tracking-tight shadow-lg backdrop-blur-lg md:left-1/2 md:top-0 md:translate-x-[-50%] md:shadow-lg md:shadow-black/10">
        Baber<span className="opacity-30">r</span>
      </h1>
      <Nav />
    </header>
  );
}

function Nav() {
  const iconClass =
    "size-6 transition-transform duration-200 group-hover:scale-125 group-hover:rotate-6 drop-shadow-md";
  const commonLink =
    "flex flex-col items-center px-4 py-2 rounded-xl transition-all duration-200 group";
  const activeLink =
    "text-button_background font-bold bg-background/90 shadow-lg scale-110";
  const defaultLink =
    "opacity-70 hover:opacity-100 hover:text-button_background hover:bg-background/60 hover:shadow-md";

  const navLinks = [
    { text: "Home", href: "/", icon: <HomeIcon className={iconClass} /> },
    {
      text: "Projects",
      href: "/projects",
      icon: <BriefcaseIcon className={iconClass} />,
    },
    {
      text: "Blog",
      href: "/blog",
      icon: <BookOpenIcon className={iconClass} />,
    },
    {
      text: "Contact",
      href: "/contact",
      icon: <IdentificationIcon className={iconClass} />,
    },
  ];
  return (
    <nav className="bg-background/80 text-text shadow-t fixed bottom-0 left-0 z-20 flex w-full flex-row items-center justify-around border-t border-white/10 py-2 shadow-2xl backdrop-blur-lg md:bottom-8 md:left-1/2 md:w-fit md:translate-x-[-50%] md:gap-4 md:rounded-2xl md:border-none md:px-6 md:py-4 md:shadow-2xl md:shadow-black/40">
      {navLinks.map((link) => (
        <NavLink
          key={link.text}
          to={link.href}
          className={({ isActive }) =>
            [commonLink, isActive ? activeLink : defaultLink].join(" ")
          }
        >
          {link.icon}
          <span className="mt-2 text-[10px] font-semibold uppercase tracking-wide">
            {link.text}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}
