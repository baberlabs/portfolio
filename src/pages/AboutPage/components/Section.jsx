const Section = ({ children, firstSection }) => {
  if (firstSection) {
    return (
      <section className="relative mt-5 mb-10 w-full max-w-full flex-col md:mt-0">
        {children}
      </section>
    );
  } else {
    return (
      <section className="relative mb-10 w-full max-w-full flex-col rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-2xl backdrop-blur-lg transition-all sm:p-8 md:max-w-4xl md:p-12 lg:p-16 dark:border-gray-800 dark:bg-gray-900/90">
        <div className="absolute -top-6 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-blue-200 opacity-60 dark:bg-blue-900/60" />

        {children}
      </section>
    );
  }
};

export default Section;
