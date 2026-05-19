import Link from "next/link";
import styles from "./profile.module.css";

export default function ProfilePage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topRow}>
          <Link href="/profile/Edit" className={styles.editBtn}>
            Edit Profile
          </Link>

          <Link href="/auth/login" className={styles.logoutBtn}>
            Log out
          </Link>
        </div>

        <div className={styles.avatar}>L</div>

        <div className={styles.content}>
          <h1 className={styles.name}>Lakshitha Samaranayaka</h1>
          <p className={styles.location}>Kurunegala, Sri Lanka</p>

          <div className={styles.meta}>
            <p>Software Engineering Student</p>
            <p>University of Plymouth</p>
          </div>

          <p className={styles.bio}>
            Passionate student focused on full-stack development, academic
            resource sharing, and building useful digital platforms for learners.
          </p>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.infoBox}>
            <h3>Contact Details</h3>
            <p>lakshitha@email.com</p>
          </div>

          <Link href="/home" className={styles.homeBtn}>
            Back to Home
          </Link>

          <div className={styles.infoBox}>
            <h3>Role</h3>
            <p>Student</p>
          </div>
        </div>
      </section>
    </main>
  );
}