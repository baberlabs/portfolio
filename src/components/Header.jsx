import { FaTerminal } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/", label: "CV" },
];

const Header = () => (
  <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-300 bg-white/70 p-4 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/70">
    <div className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
      <FaTerminal className="animate-pulse text-2xl text-blue-600 transition-transform duration-300 hover:-rotate-10" />
      <span className="text-xl font-semibold tracking-tight">
        Baber<span className="animate-pulse text-blue-600">r</span>
      </span>
    </div>
    <Navigation />
  </header>
);

const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="flex gap-2">
      {navLinks.map(({ to, label }) => {
        const isActive = location.pathname === to;
        return (
          <Link
            key={to}
            to={to}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
              isActive
                ? "scale-105 bg-blue-600 text-white shadow"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Header;
