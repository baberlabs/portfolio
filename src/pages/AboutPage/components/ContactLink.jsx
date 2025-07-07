const ContactLink = ({ label, href, icon, colors }) => (
  <a
    aria-label={label}
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-1 transition-all duration-200 hover:bg-blue-100 focus:bg-blue-200 focus:outline-none sm:gap-2 sm:px-4 sm:py-2 dark:hover:bg-gray-800"
  >
    <div
      className={`rounded-full bg-white p-3 text-xl shadow-lg ring-2 ring-blue-100 sm:p-4 sm:text-2xl dark:bg-gray-950 dark:ring-gray-900 ${colors} transition-transform duration-200 group-hover:scale-110`}
    >
      {icon}
    </div>
    <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
      {label}
    </div>
  </a>
);

export default ContactLink;
