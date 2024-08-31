import {
  Email,
  Facebook,
  GitHub,
  Message,
  Phone,
  Send,
  WhatsApp,
} from "@mui/icons-material";
import Button from "../../components/Button";
import { useEffect, useState } from "react";

export default function Contact() {
  return (
    <section className="flex min-h-screen flex-col gap-16 px-8 py-4">
      <h2 className="hidden">Projects</h2>
      <div className="mt-16 flex flex-row justify-center gap-4 pt-10">
        <Email />
        <Phone />
        <WhatsApp />
        <Facebook />
        <GitHub />
      </div>
      <form className="mx-auto flex w-fit flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="opacity-80">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className={`roundedpy-2 w-52 border-text bg-background italic outline-none`}
            autoComplete="true"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="opacity-80">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="w-64 rounded border-text bg-background py-2 italic outline-none"
            autoComplete="true"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="opacity-80">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            className="h-20 w-56 rounded border-text bg-background py-2 italic outline-none"
          ></textarea>
        </div>
        <Button text="Message Me" icon={<Message />} />
      </form>
    </section>
  );
}
