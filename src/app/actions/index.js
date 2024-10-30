"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import template from "./email.template";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const FormSchema = z.object({
  name: z.string().min(3).max(50),
  project: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export const sendEmail = async (_prevState, formData) => {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    project: formData.get("project"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to send an email.",
    };
  }

  const { name, email, project, message } = validatedFields.data;

  const mailOptions = {
    from: `Portfolio<${email}>`,
    to: process.env.MAIL_RECIPIENT,
    subject: project,
    html: template(name, message),
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      message: null,
    };
  } catch (error) {
    return {
      message: "Failed to send an email.",
    };
  }
};
