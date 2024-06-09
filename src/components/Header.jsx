import { Link, NavLink } from "react-router-dom";

export default function Header() {
  function Logo() {
    return (
      <Link to="/portfolio/home" className="text-xl font-black">
        BaberLabs
      </Link>
    );
  }
  const nav = {
    activeClasses: "font-black text-blue-500",
    defaultClasses: "font-semibold",
    links: ["Home", "About", "Projects", "Docs", "Contact"],
  };

  function NavList() {
    return (
      <nav className="flex flex-row gap-10">
        {nav.links.map((navlink, index) => (
          <NavLink
            key={`${index}-${navlink}`}
            to={`/portfolio/${navlink.toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? nav.activeClasses : nav.defaultClasses
            }
          >
            {navlink}
          </NavLink>
        ))}
      </nav>
    );
  }

  return (
    <header className="fixed top-0 flex w-full flex-row items-center justify-between bg-zinc-900 px-[100px] py-1 text-zinc-200">
      <Logo />
      <NavList />
    </header>
  );
}
