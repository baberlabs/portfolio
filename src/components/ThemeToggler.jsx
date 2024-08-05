import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggler({ theme, setTheme }) {
  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      console.log(`theme toggled: ${nextTheme}`);
      return nextTheme;
    });
  }

  const className =
    "fixed right-3 top-3 z-20 flex flex-row gap-4 rounded-full p-1 shadow-xl";

  function LightModeButton() {
    return (
      <button onClick={toggleTheme} className={className}>
        <MoonIcon className="w-6" />
      </button>
    );
  }

  function DarkModeButton() {
    return (
      <button onClick={toggleTheme} className={className}>
        <SunIcon className="w-6" />
      </button>
    );
  }

  if (theme === "light") {
    return <LightModeButton />;
  } else {
    return <DarkModeButton />;
  }
}
