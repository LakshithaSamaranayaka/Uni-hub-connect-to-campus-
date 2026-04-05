import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./market-trends.module.css";

const trends = [
  {
    id: 1,
    title: "Growth of AI in business operations",
    category: "Technology Trend",
    summary:
      "Businesses are using AI to automate tasks, improve customer support, analyze data, and increase efficiency.",
    impact: "Companies that adopt AI early can improve productivity and decision-making.",
  },
  {
    id: 2,
    title: "Rise of remote and hybrid work models",
    category: "Workplace Trend",
    summary:
      "Many organizations continue using hybrid work structures to balance productivity, flexibility, and employee wellbeing.",
    impact: "Work culture is becoming more flexible and digitally connected.",
  },
  {
    id: 3,
    title: "Sustainability becoming a business priority",
    category: "Sustainability",
    summary:
      "Customers and investors expect companies to reduce waste, improve ethics, and follow environmentally friendly practices.",
    impact: "Sustainability now influences brand image and long-term business strategy.",
  },
  {
    id: 4,
    title: "Digital payments and cashless transactions expanding",
    category: "Finance Trend",
    summary:
      "Mobile wallets, online payments, and digital banking are rapidly changing how businesses and customers transact.",
    impact: "Convenient digital payment systems improve customer experience and speed.",
  },
  {
    id: 5,
    title: "Personalized marketing using data",
    category: "Marketing Trend",
    summary:
      "Brands are using customer behavior and analytics to create more personalized campaigns and recommendations.",
    impact: "Personalized marketing can increase engagement, trust, and conversion rates.",
  },
  {
    id: 6,
    title: "Expansion of e-commerce and direct-to-consumer models",
    category: "Retail Trend",
    summary:
      "More companies are selling directly to customers through online platforms without relying fully on physical stores.",
    impact: "Digital channels are becoming essential for business growth.",
  },
];

export default function MarketTrendsPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.breadcrumb}>
              <Link href="/home">Home</Link> /{" "}
              <Link href="/business/market-trends">Market Trends</Link>
            </p>

            <h1 className={styles.title}>Market Trends</h1>
            <p className={styles.subtitle}>
              Discover current market shifts, business patterns, and emerging
              trends that are shaping the modern business world.
            </p>
          </div>

          <section className={styles.heroCard}>
            <div className={styles.heroText}>
              <h2 className={styles.heroTitle}>Understand what is changing in the market</h2>
              <p className={styles.heroDesc}>
                This page helps students learn about important trends in
                technology, finance, sustainability, retail, and workplace transformation.
              </p>
            </div>

            <div className={styles.heroTags}>
              <span className={styles.tag}>AI</span>
              <span className={styles.tag}>Finance</span>
              <span className={styles.tag}>Retail</span>
              <span className={styles.tag}>Workplace</span>
            </div>
          </section>

          <section className={styles.grid}>
            {trends.map((item) => (
              <article key={item.id} className={styles.card}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.summary}</p>

                <div className={styles.impactBox}>
                  <p className={styles.impactLabel}>Business Impact</p>
                  <p className={styles.impactText}>{item.impact}</p>
                </div>

                <button className={styles.readBtn} type="button">
                  Explore Trend
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