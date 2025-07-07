export default function Page404() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-8 py-4 md:px-32 lg:px-64">
      <div className="flex flex-col items-center gap-6">
        <span className="select-none text-9xl font-extrabold text-text opacity-30">
          404
        </span>
        <h2 className="text-3xl font-bold text-gray-600">Page Not Found</h2>
        <p className="max-w-md text-center text-lg text-gray-500">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
      </div>
    </section>
  );
}
