import Header from "../components/Header";

export default function Contact() {
  return (
    <div className="text-base">
      <Header />
      <main className="flex h-screen flex-col items-center justify-center gap-3 bg-zinc-800 text-zinc-200">
        <h1 className="font-black">Contact</h1>
        <p>Contact page for the portfolio website</p>
      </main>
    </div>
  );
}
