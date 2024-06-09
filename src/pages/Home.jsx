import Header from "../components/Header";

export default function Home() {
  return (
    <div className="text-base">
      <Header />
      <main className="flex h-screen flex-col items-center justify-center gap-3 bg-zinc-800 text-zinc-200">
        <h1 className="font-black">Home</h1>
        <p>Homepage for the portfolio website</p>
      </main>
    </div>
  );
}
