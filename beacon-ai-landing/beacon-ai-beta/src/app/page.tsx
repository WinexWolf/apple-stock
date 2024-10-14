"use client";

import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { sendSignupNotification } from "./sendThankYouEmail";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Unlock datasets across the globe at our data marketplace";
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 50;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === fullText) {
      // Pause before starting to delete
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === "") {
      // Pause before starting to type again
      timeout = setTimeout(() => setIsDeleting(false), pauseTime);
    } else {
      // Typing or deleting
      timeout = setTimeout(
        () => {
          const currentText = isDeleting
            ? fullText.slice(0, displayedText.length - 1)
            : fullText.slice(0, displayedText.length + 1);
          setDisplayedText(currentText);
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, fullText]);


 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   try {
     await axios.post("/api/sendEmail", { email });
     setSubmitted(true);
   } catch (error) {
     console.error("Error adding email to waitlist: ", error);
   }
 };


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb34acea8323f8799895d4d9b3d8a8973d74394e2b007e856d1c893ff56ffd0b?placeholderIfAbsent=true&apiKey=416c44c8e63b4ddfa6060e4311fc9257"
          alt="Beacon"
          className=" w-16 md:w-20 "
        />
        <span className="font-bold flex text-xl md:text-2xl items-center justify-center">
          beacon.ai
        </span>
      </header>
      <section className={styles.hero}>
        <h2 className={styles.title}>{displayedText}</h2>
        <p className={styles.subtitle}>
          Join our beta and be the first to experience <b>beacon.ai</b>
        </p>
        {!submitted ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button}>
              Join the Waitlist
            </button>
          </form>
        ) : (
          <p className={styles.successMessage}>
            Thank you for joining the waitlist!
          </p>
        )}
      </section>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Beacon.ai. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
