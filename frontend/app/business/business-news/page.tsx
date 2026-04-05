import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./business-news.module.css";

const newsItems = [
  {
    id: 1,
    title: "Apple reports strong quarterly revenue growth",
    category: "Corporate News",
    date: "March 2026",
    summary:
      "Apple announced stronger-than-expected quarterly revenue, driven by services growth and steady device sales.",
    source: "Business Desk",
  },
  {
    id: 2,
    title: "Tesla expands global EV production capacity",
    category: "Industry News",
    date: "March 2026",
    summary:
      "Tesla continues to expand manufacturing capacity to meet electric vehicle demand in multiple markets.",
    source: "Market Watch",
  },
  {
    id: 3,
    title: "Amazon invests in faster logistics operations",
    category: "Operations",
    date: "March 2026",
    summary:
      "Amazon is improving delivery speed and warehouse efficiency through new logistics investments.",
    source: "Business Daily",
  },
  {
    id: 4,
    title: "Nike focuses on direct-to-consumer sales strategy",
    category: "Marketing",
    date: "March 2026",
    summary:
      "Nike is strengthening its direct customer channels to improve profit margins and brand control.",
    source: "Retail Update",
  },
  {
    id: 5,
    title: "Coca-Cola launches new regional marketing campaigns",
    category: "Brand Strategy",
    date: "March 2026",
    summary:
      "Coca-Cola is adapting campaigns for regional audiences to improve market penetration and engagement.",
    source: "Global Brands",
  },
  {
    id: 6,
    title: "Microsoft expands AI investments across business tools",
    category: "Technology Business",
    date: "March 2026",
    summary:
      "Microsoft is integrating more AI capabilities into enterprise products to support productivity and innovation.",
    source: "Tech Business News",
  },
];

export default function BusinessNewsPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.breadcrumb}>
              <Link href="/home">Home</Link> /{" "}
              <Link href="/business/business-news">Business News</Link>
            </p>

            <h1 className={styles.title}>Business News</h1>
            <p className={styles.subtitle}>
              Stay updated with important business news, company updates,
              strategy shifts, and market developments.
            </p>
          </div>

          <section className={styles.heroCard}>
            <div className={styles.heroText}>
              <h2 className={styles.heroTitle}>Follow what is happening in business</h2>
              <p className={styles.heroDesc}>
                This page helps students explore real business events, company
                updates, and industry changes to improve awareness and analysis skills.
              </p>
            </div>

            <div className={styles.heroTags}>
              <span className={styles.tag}>Companies</span>
              <span className={styles.tag}>Markets</span>
              <span className={styles.tag}>Strategy</span>
              <span className={styles.tag}>Trends</span>
            </div>
          </section>

          <section className={styles.newsList}>
            {newsItems.map((item) => (
              <article key={item.id} className={styles.newsCard}>
                <div className={styles.topRow}>
                  <span className={styles.category}>{item.category}</span>
                  <span className={styles.date}>{item.date}</span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.summary}</p>

                <div className={styles.bottomRow}>
                  <span className={styles.source}>Source: {item.source}</span>
                  <button className={styles.readBtn} type="button">
                    Read More
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