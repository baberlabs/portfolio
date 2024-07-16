import contacts from "../data/contacts";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 bg-zinc-950 pt-52 text-zinc-200">
      <Heading />
      <ContactMethods />
      <ContactForm />
      <div className="h-[100px]"></div>
    </main>
  );
}

function Heading() {
  return <h1 className="text-5xl font-black">Contact</h1>;
}

function ContactMethods() {
  return (
    <div className="flex flex-row justify-between gap-10">
      {contacts.map((contact) => (
        <div
          key={contact.text}
          className="flex flex-col justify-center gap-4 text-center"
        >
          <img
            src={contact.icon}
            alt={`${contact.text} Icon`}
            className="h-10"
          />
          <a href={contact.url}>{contact.text}</a>
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Dave"
          className="w-[300px] rounded px-4 py-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="johndave@email.com"
          className="w-[300px] rounded px-4 py-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          placeholder="Hi, I'd like to talk about..."
          className="h-[200px] w-[300px] rounded px-4 py-2"
        ></textarea>
      </div>

      <button
        className="mt-2 rounded-full bg-blue-500 px-4 py-2 font-black text-black"
        onClick={() => alert("It won't work now! Still in development :)")}
      >
        Send Direct Message
      </button>
    </form>
  );
}
