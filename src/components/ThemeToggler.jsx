import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggler({ theme, setTheme }) {
  const isLight = theme === "light";
  const buttonClass = `
    fixed right-4 top-3 z-50 rounded-full border 
    ${isLight ? "border-gray-200 bg-white/80" : "border-gray-700 bg-gray-900/80"}
    p-2 transition-colors
  `;

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={buttonClass}
      aria-label="Toggle theme"
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
    >
      {isLight ? (
        <MoonIcon className="h-5 w-5 text-gray-700" />
      ) : (
        <SunIcon className="h-5 w-5 text-yellow-400" />
      )}
    </button>
  );
}
