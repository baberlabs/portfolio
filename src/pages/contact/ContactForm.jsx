import { Loop, Message } from "@mui/icons-material";
import Button from "../../components/Button";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { theme } = useContext(ThemeContext);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", msg: "Please fill in all fields." });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      setStatus({ type: "success", msg: "Message sent! Thank you." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: "error", msg: "Failed to send message. Try again!" });
    }
    setIsSubmitting(false);
  }

  const inputStyle = `w-full rounded border px-3 py-2 italic outline-none transition focus:ring-2 ${
    theme === "light"
      ? "bg-white border-zinc-300 focus:ring-primary"
      : "bg-zinc-800 border-zinc-700 focus:ring-primary"
  }`;

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-col gap-6 rounded-xl p-8 shadow-lg ${
        theme === "light" ? "bg-zinc-100" : "bg-zinc-900"
      }`}
    >
      <input
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        type="text"
        placeholder="Your name"
        className={inputStyle}
        autoComplete="name"
        disabled={isSubmitting}
        value={form.name}
      />
      <input
        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        type="email"
        placeholder="Your email"
        className={inputStyle}
        autoComplete="email"
        disabled={isSubmitting}
        value={form.email}
      />
      <textarea
        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        placeholder="Your message"
        className={`${inputStyle} h-28 resize-none`}
        disabled={isSubmitting}
        value={form.message}
      />
      <Button
        text={isSubmitting ? "Sending..." : "Message Me"}
        icon={
          isSubmitting ? (
            <Loop sx={{ animation: "spin 1s linear infinite" }} />
          ) : (
            <Message />
          )
        }
        type="submit"
        disabled={isSubmitting}
      />
      {status && (
        <p
          className={`text-center font-medium ${
            status.type === "success" ? "text-green-600" : "text-red-500"
          }`}
        >
          {status.msg}
        </p>
      )}
    </form>
  );
}
