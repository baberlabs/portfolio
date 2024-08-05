import { Link } from "react-router-dom";

export default function LinkButton({ link, text, icon }) {
  return (
    <Link
      to={link}
      className="bg-text text-background mt-2 flex w-fit flex-row items-center gap-2 rounded px-4 py-2 text-sm font-bold"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
