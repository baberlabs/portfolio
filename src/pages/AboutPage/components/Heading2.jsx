const Heading2 = ({ heading, srOnly }) => (
  <h2
    className={`${srOnly ? "sr-only" : "mb-6 text-2xl font-extrabold tracking-tight text-blue-800 sm:text-3xl dark:text-blue-200"}`}
  >
    {heading}
  </h2>
);

export default Heading2;
