"use server";

import { MeEmailTemplate } from "@/components/email/MeEmailTemplate";
import { YouEmailTemplate } from "@/components/email/YouEmailTemplate";
import { redirect } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  // mutate data
  const name = formData.get("name");
  const email: any = formData.get("email");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: "Portfolio <info@cleverdevloper.in>",
      to: "cwd.harshit911@gmail.com",
      subject: "New Client",
      react: MeEmailTemplate({
        name,
        email,
        message,
      }),
    });
    await resend.emails.send({
      from: "Portfolio <info@cleverdevloper.in>",
      to: [email],
      subject: "Thanks for Response",
      react: YouEmailTemplate({
        name,
        email,
        message,
      }),
    });
  } catch (error) {
    console.log(error);
  }
  // redirect("/#home?success=true");
}
