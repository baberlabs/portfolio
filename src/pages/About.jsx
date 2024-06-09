import Header from "../components/Header";

export default function About() {
  return (
    <div className="text-base">
      <Header />
      <main className="flex h-screen flex-col items-center justify-center gap-3 bg-zinc-800 text-zinc-200">
        <h1 className="font-black">About</h1>
        <p>About page for the portfolio website</p>
      </main>
    </div>
  );
}
