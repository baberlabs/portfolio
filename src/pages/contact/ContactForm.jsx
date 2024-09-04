import { Message } from "@mui/icons-material";
import Button from "../../components/Button";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export default function ContactForm() {
  const { theme } = useContext(ThemeContext);
  const bgColor = theme === "light" ? "bg-zinc-200" : "bg-zinc-800";
  return (
    <form
      className={`mx-auto flex w-fit flex-col gap-6 ${bgColor} mb-24 rounded p-8`}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="opacity-80">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          className="w-52 rounded border-text bg-background py-2 italic outline-none"
          autoComplete="true"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="opacity-80">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your email"
          className="w-64 rounded border-text bg-background italic outline-none"
          autoComplete="true"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="opacity-80">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your message"
          className="h-20 w-56 rounded border-text bg-background py-2 italic outline-none"
        ></textarea>
      </div>
      <Button text="Message Me" icon={<Message />} />
    </form>
  );
}
