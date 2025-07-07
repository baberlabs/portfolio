import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-8 py-2">
      <h2 className="sr-only">Contact</h2>
      <div className="mb-28 mt-24 flex max-w-[400px] flex-col gap-6 md:mt-20">
        <ContactsList />
        <ContactForm />
      </div>
    </section>
  );
}
