import Header from "../components/Header";

export default function Docs() {
  return (
    <div className="text-base">
      <Header />
      <main className="flex h-screen flex-col items-center justify-center gap-3 bg-zinc-800 text-zinc-200">
        <h1 className="font-black">Docs</h1>
        <p>Docs page for the portfolio website</p>
      </main>
    </div>
  );
}
