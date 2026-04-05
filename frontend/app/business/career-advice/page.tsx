import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./career-advice.module.css";

const adviceList = [
  {
    id: 1,
    title: "Build a strong CV",
    category: "Career Preparation",
    description:
      "Keep your CV clear, professional, and focused on your education, skills, projects, and achievements.",
  },
  {
    id: 2,
    title: "Improve communication skills",
    category: "Soft Skills",
    description:
      "Good communication helps in interviews, teamwork, presentations, and professional networking.",
  },
  {
    id: 3,
    title: "Gain internship experience early",
    category: "Experience",
    description:
      "Internships help students understand real work environments and build confidence before graduation.",
  },
  {
    id: 4,
    title: "Create a LinkedIn profile",
    category: "Professional Branding",
    description:
      "A strong LinkedIn profile helps you connect with professionals, recruiters, and job opportunities.",
  },
  {
    id: 5,
    title: "Learn how to perform in interviews",
    category: "Interviews",
    description:
      "Prepare for common interview questions, company research, and speaking confidently about your strengths.",
  },
  {
    id: 6,
    title: "Keep learning industry skills",
    category: "Growth",
    description:
      "Employers value students who continue learning through online courses, certifications, and projects.",
  },
];

export default function CareerAdvicePage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.breadcrumb}>
              <Link href="/home">Home</Link> /{" "}
              <Link href="/business/career-advice">Career Advice</Link>
            </p>

            <h1 className={styles.title}>Career Advice</h1>
            <p className={styles.subtitle}>
              Explore useful career advice for students who want to improve
              their professional skills, confidence, and future opportunities.
            </p>
          </div>

          <section className={styles.heroCard}>
            <div className={styles.heroText}>
              <h2 className={styles.heroTitle}>Prepare for your future career</h2>
              <p className={styles.heroDesc}>
                This page helps students understand how to build professional
                value through skills, experience, personal branding, and career
                preparation.
              </p>
            </div>

            <div className={styles.heroTags}>
              <span className={styles.tag}>CV</span>
              <span className={styles.tag}>Interviews</span>
              <span className={styles.tag}>Skills</span>
              <span className={styles.tag}>Growth</span>
            </div>
          </section>

          <section className={styles.grid}>
            {adviceList.map((item) => (
              <article key={item.id} className={styles.card}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>

                <button className={styles.readBtn} type="button">
                  Read Advice
                </button>
              </article>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}