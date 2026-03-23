"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import styles from "./faqs.module.css";

const faqData = [
  {
    question: "What is Campus Connect?",
    answer:
      "Campus Connect is a student platform where users can connect, learn, share resources, and grow together.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Go to the Register page, fill in your details, and submit the form to create your account.",
  },
  {
    question: "How do I log in?",
    answer:
      "Open the Login page, enter your email and password, and click the Sign In button.",
  },
  {
    question: "How can I upload my work?",
    answer:
      "Go to your Profile page and use the Upload Your Work button to submit your work.",
  },
  {
    question: "Can I edit my profile details?",
    answer:
      "Yes. Open the Profile page and go to the Edit Profile page to update your information.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can use the contact details in the footer or the Contact page to reach support.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Find quick answers about Campus Connect.
          </p>

          <div className={styles.faqList}>
            {faqData.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                  type="button"
                >
                  <span>{item.question}</span>
                  <span className={styles.icon}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className={styles.answer}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}