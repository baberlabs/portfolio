import { Loop, Message, Refresh } from "@mui/icons-material";
import Button from "../../components/Button";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        throw Error("** Input fields cannot be empty");
      }

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { name, email, message },
        import.meta.env.VITE_PUBLIC_KEY,
      );

      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error.message || "Failed to send message. Please try again!",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const bgColor = theme === "light" ? "bg-zinc-200" : "bg-zinc-800";

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto flex w-fit flex-col gap-6 ${bgColor} mb-24 rounded p-8`}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="opacity-80">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="Your name"
          className="w-52 rounded border-text bg-background py-2 italic outline-none"
          autoComplete="name"
          disabled={isSubmitting}
          value={name}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="opacity-80">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="Your email"
          className="w-64 rounded border-text bg-background italic outline-none"
          autoComplete="email"
          disabled={isSubmitting}
          value={email}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="opacity-80">
          Message
        </label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Your message"
          className="h-20 w-56 rounded border-text bg-background py-2 italic outline-none"
          disabled={isSubmitting}
          value={message}
        ></textarea>
      </div>
      <Button
        text={isSubmitting ? "Sending..." : "Message Me"}
        icon={
          isSubmitting ? (
            <Loop
              sx={{
                animation: "spin 2s linear infinite",
                "@keyframes spin": {
                  "0%": { transform: "rotate(360deg)" },
                  "100%": { transform: "rotate(0deg" },
                },
              }}
            />
          ) : (
            <Message />
          )
        }
        type="submit"
        disabled={isSubmitting}
      />

      {submitStatus === "success" && (
        <p className="text-green-600">Message sent!</p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-500">{errorMessage}</p>
      )}
    </form>
  );
}
