import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="flex min-h-screen flex-col gap-16 px-8 py-4">
      <h2 className="hidden">Contact</h2>
      <div className="mt-16 flex flex-col gap-8">
        <p className="text-center">Contact me using:</p>
        <ContactsList />
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-center">or directly send me a message:</p>
        <ContactForm />
      </div>
    </section>
  );
}