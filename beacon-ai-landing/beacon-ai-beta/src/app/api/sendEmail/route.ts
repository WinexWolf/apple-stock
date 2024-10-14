import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for joining the Beacon.ai waitlist!",
    text: "Hi there! Thanks for signing up for our beta waitlist. We're excited to have you with us!",
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
