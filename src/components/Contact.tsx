"use client";

import React, { useEffect } from "react";
import "@/styles/contact.scss";
import { Resend } from "resend";
import { MeEmailTemplate } from "./email/MeEmailTemplate";
import { YouEmailTemplate } from "./email/YouEmailTemplate";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

export default function Contact({}) {
  return (
    <section id="contact">
      <p>
        {"<"}
        <span>Contact Me</span>
        {"/>"}
      </p>
      <form
        action={sendEmail}
        onSubmit={() => toast.success("Success! Your Message Has Been Sent")}
        className="contactForm"
      >
        <input required type="text" placeholder="Name" name="name" />
        <input required type="email" placeholder="Email" name="email" />
        <textarea
          required
          rows={10}
          style={{ resize: "none" }}
          placeholder="Messsage"
          name="message"
        />
        <input type="submit" hidden />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
