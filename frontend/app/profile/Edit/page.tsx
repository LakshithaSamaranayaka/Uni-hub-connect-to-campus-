"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./editProfile.module.css";

export default function EditProfilePage() {
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [university, setUniversity] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const previewUrl = useMemo(() => {
    if (!imageFile) return null;
    return URL.createObjectURL(imageFile);
  }, [imageFile]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Saved (demo). Connect backend API next.");
  }

  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <Link className={styles.topLink} href="/profile">
              ← Back to Profile
            </Link>

            <button className={styles.logout} type="button">
              Log out
            </button>
          </div>

          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="Profile preview"
                  fill
                  className={styles.avatarImg}
                />
              ) : (
                <span className={styles.avatarPlaceholder}>👤</span>
              )}
            </div>
          </div>

          <h1 className={styles.title}>Edit Profile</h1>
          <p className={styles.subtitle}>Update your details and save changes.</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  className={styles.input}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  className={styles.input}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Kandy, Sri Lanka"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="university">
                  University
                </label>
                <input
                  id="university"
                  className={styles.input}
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  placeholder="Your university"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="role">
                  Role
                </label>
                <input
                  id="role"
                  className={styles.input}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Software Engineering Student"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="you@email.com"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  className={styles.input}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+94 ..."
                />
              </div>

              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label className={styles.label} htmlFor="photo">
                  Profile Photo
                </label>
                <div className={styles.uploadRow}>
                  <input
                    id="photo"
                    className={styles.file}
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                  />
                  <span className={styles.fileHint}>
                    PNG/JPG recommended. Square looks best.
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.primary} type="submit">
                Save Changes
              </button>

              <Link className={styles.secondary} href="/profile">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}