import { Link } from "react-router-dom";

export default function LinkButton({ link, text, icon }) {
  return (
    <Link
      to={link}
      className="flex w-fit flex-row items-center gap-2 rounded-lg bg-text px-4 py-2 text-sm font-bold text-background shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-text focus:ring-offset-2"
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{text}</span>
    </Link>
  );
}
