import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./case-studies.module.css";

const caseStudies = [
  {
    id: 1,
    title: "How Netflix grew through personalization",
    category: "Business Strategy",
    summary:
      "A study of how personalization, data analysis, and user behavior tracking helped Netflix increase engagement and retention.",
    company: "Netflix",
    takeaway: "Using data correctly can create a major competitive advantage.",
  },
  {
    id: 2,
    title: "Apple’s premium brand positioning",
    category: "Marketing",
    summary:
      "This case study explains how Apple built a strong premium identity through product design, branding, and customer loyalty.",
    company: "Apple",
    takeaway: "Strong brand value allows businesses to compete beyond price.",
  },
  {
    id: 3,
    title: "Amazon and operational efficiency",
    category: "Operations",
    summary:
      "A business case about how Amazon improved delivery, supply chain management, and customer satisfaction through operational excellence.",
    company: "Amazon",
    takeaway: "Efficient operations improve both scale and customer experience.",
  },
  {
    id: 4,
    title: "Coca-Cola’s global marketing success",
    category: "Global Business",
    summary:
      "This case study focuses on Coca-Cola’s global expansion and how localized marketing strategies supported international success.",
    company: "Coca-Cola",
    takeaway: "Global success often depends on adapting to local markets.",
  },
  {
    id: 5,
    title: "Tesla’s innovation-driven market growth",
    category: "Innovation",
    summary:
      "An analysis of how Tesla used innovation, vision, and technology positioning to transform the electric vehicle market.",
    company: "Tesla",
    takeaway: "Innovation can reshape industries and customer expectations.",
  },
  {
    id: 6,
    title: "McDonald’s franchise business model",
    category: "Entrepreneurship",
    summary:
      "A case study on how McDonald’s scaled globally using a powerful franchise-based business model and standardized operations.",
    company: "McDonald’s",
    takeaway: "A scalable business model is key for long-term expansion.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.breadcrumb}>
              <Link href="/home">Home</Link> /{" "}
              <Link href="/business/case-studies">Case Studies</Link>
            </p>

            <h1 className={styles.title}>Case Studies</h1>
            <p className={styles.subtitle}>
              Explore real-world business examples to understand strategy,
              marketing, operations, innovation, and management in practice.
            </p>
          </div>

          <section className={styles.heroCard}>
            <div className={styles.heroText}>
              <h2 className={styles.heroTitle}>Learn from real business stories</h2>
              <p className={styles.heroDesc}>
                This page helps students analyze successful companies, business
                decisions, and market strategies through practical case studies.
              </p>
            </div>

            <div className={styles.heroTags}>
              <span className={styles.tag}>Strategy</span>
              <span className={styles.tag}>Marketing</span>
              <span className={styles.tag}>Innovation</span>
              <span className={styles.tag}>Analysis</span>
            </div>
          </section>

          <section className={styles.grid}>
            {caseStudies.map((item) => (
              <div key={item.id} className={styles.card}>
                <p className={styles.category}>{item.category}</p>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.company}>Company: {item.company}</p>
                <p className={styles.cardText}>{item.summary}</p>

                <div className={styles.takeawayBox}>
                  <p className={styles.takeawayLabel}>Key Takeaway</p>
                  <p className={styles.takeawayText}>{item.takeaway}</p>
                </div>

                <button className={styles.readBtn} type="button">
                  Read More
                </button>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}