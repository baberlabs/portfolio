import { Link, NavLink } from "react-router-dom";

export default function Header() {
  function Logo() {
    return (
      <Link to="/" className="text-xl font-black">
        BaberLabs
      </Link>
    );
  }
  const nav = {
    activeClasses: "font-black text-blue-500",
    defaultClasses: "font-semibold",
    links: ["", "About", "Projects", "Docs", "Contact"],
  };

  function NavList() {
    return (
      <nav className="flex flex-row gap-10">
        {nav.links.map((navlink, index) => (
          <NavLink
            key={`${index}-${navlink}`}
            to={`/${navlink.toLowerCase()}`}
            end={navlink === ""}
            className={({ isActive }) =>
              isActive ? nav.activeClasses : nav.defaultClasses
            }
          >
            {navlink === "" ? "Home" : navlink}
          </NavLink>
        ))}
      </nav>
    );
  }

  return (
    <>
      <header className="fixed top-0 flex h-14 w-full flex-row items-center justify-between bg-zinc-900 px-[100px] text-zinc-200">
        <Logo />
        <NavList />
      </header>
      <div className="h-14 bg-zinc-900"></div>
    </>
  );
}
