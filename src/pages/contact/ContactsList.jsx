import { contactsList } from "./contactsList";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export default function ContactsList() {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === "light" ? "bg-zinc-100" : "bg-zinc-900";
  const textColor = theme === "light" ? "text-zinc-800" : "text-zinc-100";
  const hoverBg = theme === "light" ? "hover:bg-zinc-200" : "hover:bg-zinc-800";
  const borderColor = theme === "light" ? "border-zinc-200" : "border-zinc-800";

  return (
    <ul className="mx-auto flex flex-row flex-wrap gap-3">
      {contactsList.map((contact) => (
        <li key={contact.href}>
          <a
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-lg border ${borderColor} ${bgColor} ${textColor} ${hoverBg} px-3 py-2 text-sm shadow-sm transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400/30`}
          >
            <contact.icon className="h-5 w-5 opacity-80 transition-transform duration-200 group-hover:scale-110" />
            <span className="truncate">{contact.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
