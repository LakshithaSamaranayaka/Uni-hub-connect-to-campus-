import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./internship-opportunities.module.css";

const internships = [
  {
    id: 1,
    company: "BuildTech Lanka",
    role: "Civil Engineering Intern",
    location: "Colombo",
    type: "On-site",
    duration: "6 Months",
    description:
      "Assist with site supervision, quantity estimation, and project documentation for civil engineering work.",
  },
  {
    id: 2,
    company: "PowerGrid Solutions",
    role: "Electrical Engineering Intern",
    location: "Kandy",
    type: "Hybrid",
    duration: "4 Months",
    description:
      "Support electrical design, maintenance planning, and testing activities in power system projects.",
  },
  {
    id: 3,
    company: "MechaCore Industries",
    role: "Mechanical Engineering Intern",
    location: "Kurunegala",
    type: "On-site",
    duration: "6 Months",
    description:
      "Work with mechanical systems, equipment inspections, and maintenance process support.",
  },
  {
    id: 4,
    company: "AutoWave Technologies",
    role: "Engineering Technology Intern",
    location: "Remote",
    type: "Remote",
    duration: "3 Months",
    description:
      "Contribute to prototype testing, system integration, and technical documentation tasks.",
  },
  {
    id: 5,
    company: "GreenEnergy Hub",
    role: "Renewable Energy Intern",
    location: "Colombo",
    type: "Hybrid",
    duration: "5 Months",
    description:
      "Assist solar and sustainable energy projects with technical analysis and field coordination.",
  },
  {
    id: 6,
    company: "Smart Systems Lab",
    role: "Embedded Systems Intern",
    location: "Remote",
    type: "Remote",
    duration: "3 Months",
    description:
      "Support sensor-based solutions, device programming, and testing for smart engineering systems.",
  },
];

export default function EngineeringInternshipsPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.breadcrumb}>
              <Link href="/home">Home</Link> /{" "}
              <Link href="/engineering/internship-opportunities">
                Internship Opportunities
              </Link>
            </p>

            <h1 className={styles.title}>Engineering Internship Opportunities</h1>
            <p className={styles.subtitle}>
              Explore engineering internship roles and discover opportunities to
              gain practical industry experience.
            </p>
          </div>

          <section className={styles.heroCard}>
            <div className={styles.heroText}>
              <h2 className={styles.heroTitle}>Take your engineering skills into industry</h2>
              <p className={styles.heroDesc}>
                This page helps engineering students explore internships in civil,
                electrical, mechanical, renewable energy, and embedded systems fields.
              </p>
            </div>

            <div className={styles.heroTags}>
              <span className={styles.tag}>Civil</span>
              <span className={styles.tag}>Electrical</span>
              <span className={styles.tag}>Mechanical</span>
              <span className={styles.tag}>Embedded</span>
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