import { v4 as uuid } from "uuid";
import { contactsList } from "./contactsList";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export default function ContactsList() {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === "light" ? "bg-zinc-200" : "bg-zinc-800";

  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      {contactsList.map((contact) => {
        const key = uuid();
        return (
          <a
            key={key}
            href={contact.href}
            className={`flex flex-col items-center gap-2 ${bgColor} rounded p-4`}
          >
            <contact.icon />
            <p className="text-sm">{contact.text}</p>
          </a>
        );
      })}
    </div>
  );
}
