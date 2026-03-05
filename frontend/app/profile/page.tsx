"use client"
import Image from "next/image";
import styles from "./profile.module.css";

export default function ProfilePage() {
  return (
    <main>
    <div className={styles.page1}></div>
      <div className={styles.card}>
        {/* top actions */}
        <div className={styles.topRow}>
          <button className={styles.topBtn} type="button">
            Edit Profile
          </button>
        </div>

        <div className={styles.avatarWrap}>
          <Image
            src="/avatar.jpg"
            alt="Profile"
            width={120}
            height={120}
            className={styles.avatar}
            priority
          />
        </div>

        {/* main info */}
        <h1 className={styles.name}>Samantha Jones</h1>
        <p className={styles.location}>New York, United States</p>

        <div className={styles.meta}>
          <p>Web Producer - Web Specialist</p>
          <p>Columbia University - New York</p>
        </div>

        <p className={styles.pitch}>
          &quot;Submit your valuable work — we’ll showcase your talent to the world
          while inspiring fellow students to learn, collaborate, and grow
          together.
        </p>

        {/* bottom row */}
        <div className={styles.bottomRow}>
          <button className={styles.linkBtn} type="button">
            Contact details
          </button>

          <button className={styles.cta} type="button">
            Upload Your work
          </button>

          <button className={styles.logoutBtn} type="button">
            Log out
          </button>

        </div>
      </div>
</main>    
  );
}