import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./internship-opportunities.module.css";

const internships = [
  {
    id: 1,
    company: "TechNova Solutions",
    role: "Business Analyst Intern",
    location: "Colombo",
    type: "On-site",
    duration: "6 Months",
    description:
      "Support business analysis, documentation, and market research activities for client projects.",
  },
  {
    id: 2,
    company: "FutureEdge Consulting",
    role: "Marketing Intern",
    location: "Kandy",
    type: "Hybrid",
    duration: "3 Months",
    description:
      "Assist the marketing team with campaign planning, brand research, and content strategy.",
  },
  {
    id: 3,
    company: "NextPath Finance",
    role: "Finance Intern",
    location: "Remote",
    type: "Remote",
    duration: "4 Months",
    description:
      "Work with budgeting data, reporting tasks, and financial planning support for internal teams.",
  },
  {
    id: 4,
    company: "GlobalBiz Lanka",
    role: "Operations Intern",
    location: "Colombo",
    type: "On-site",
    duration: "6 Months",
    description:
      "Help improve workflows, monitor daily operations, and support process documentation.",
  },
  {
    id: 5,
    company: "BrightBridge Ventures",
    role: "HR Intern",
    location: "Kurunegala",
    type: "Hybrid",
    duration: "3 Months",
    description:
      "Support recruitment, interview coordination, intern communication, and HR administration.",
  },
  {
    id: 6,
    company: "Insight Loop Media",
    role: "Content Strategy Intern",
    location: "Remote",
    type: "Remote",
    duration: "2 Months",
    description:
      "Contribute to content planning, competitor analysis, and audience research for campaigns.",
  },
];

export default function InternshipOpportunitiesPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.breadcrumb}>
              <Link href="/home">Home</Link> /{" "}
              <Link href="/business/internship-opportunities">
                Internship Opportunities
              </Link>
            </p>

            <h1 className={styles.title}>Internship Opportunities</h1>
            <p className={styles.subtitle}>
              Discover internship opportunities in business-related fields and
              explore roles that can help you build practical experience.
            </p>
          </div>

          <section className={styles.heroCard}>
            <div className={styles.heroText}>
              <h2 className={styles.heroTitle}>Start building real experience</h2>
              <p className={styles.heroDesc}>
                This page helps students explore internship roles in business,
                marketing, finance, HR, operations, and related areas.
              </p>
            </div>

            <div className={styles.heroTags}>
              <span className={styles.tag}>Business</span>
              <span className={styles.tag}>Marketing</span>
              <span className={styles.tag}>Finance</span>
              <span className={styles.tag}>HR</span>
            </div>
          </section>

          <section className={styles.grid}>
            {internships.map((item) => (
              <article key={item.id} className={styles.card}>
                <div className={styles.topRow}>
                  <p className={styles.company}>{item.company}</p>
                  <span className={styles.type}>{item.type}</span>
                </div>

                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.location}>Location: {item.location}</p>
                <p className={styles.duration}>Duration: {item.duration}</p>
                <p className={styles.description}>{item.description}</p>

                <div className={styles.actions}>
                  <button className={styles.applyBtn} type="button">
                    Apply Now
                  </button>
                  <button className={styles.saveBtn} type="button">
                    Save
                  </button>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}