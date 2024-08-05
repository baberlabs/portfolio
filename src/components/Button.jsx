export default function Button({ text, icon }) {
  return (
    <button className="bg-text text-background mt-2 flex w-fit flex-row items-center gap-2 rounded px-4 py-2 text-sm font-bold">
      {icon}
      <span>{text}</span>
    </button>
  );
}
