"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./register.module.css";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: React.FormEvent) {
  e.preventDefault();

  if (!name || !university || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        university,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Registration failed");
      return;
    }

    alert("Account created successfully");
    router.push("/auth/login");
  } catch (error) {
    console.error(error);
    alert("Server error. Please check backend.");
  }
}

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Join Campus Connect and start learning</p>

        <form className={styles.form} onSubmit={handleRegister}>
          <div className={styles.field}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>University / Institute</label>
            <input
              type="text"
              placeholder="Enter your university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className={styles.btn} type="submit">
            Sign Up
          </button>
        </form>

        <p className={styles.bottomText}>
          Already have an account? <Link href="/auth/login">Sign in</Link>
        </p>
      </div>
    </main>
  );
}