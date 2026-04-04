import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./coding-resources.module.css";

const resources = [
  {
    id: 1,
    title: "MDN Web Docs",
    category: "Web Development",
    description:
      "Best documentation for HTML, CSS, JavaScript, and modern web APIs.",
    link: "https://developer.mozilla.org/",
  },
  {
    id: 2,
    title: "W3Schools",
    category: "Beginner Learning",
    description:
      "Simple tutorials and examples for frontend, backend, SQL, and more.",
    link: "https://www.w3schools.com/",
  },
  {
    id: 3,
    title: "freeCodeCamp",
    category: "Practice + Courses",
    description:
      "Free coding courses, certifications, and hands-on practice projects.",
    link: "https://www.freecodecamp.org/",
  },
  {
    id: 4,
    title: "GeeksforGeeks",
    category: "DSA + CS Topics",
    description:
      "Good for data structures, algorithms, interview preparation, and CS concepts.",
    link: "https://www.geeksforgeeks.org/",
  },
  {
    id: 5,
    title: "LeetCode",
    category: "Coding Practice",
    description:
      "Coding challenges and interview preparation for software engineering roles.",
    link: "https://leetcode.com/",
  },
  {
    id: 6,
    title: "GitHub",
    category: "Projects + Code",
    description:
      "Explore open-source repositories, project code, and collaboration workflows.",
    link: "https://github.com/",
  },
];

export default function CodingResourcesPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.breadcrumb}>
              <Link href="/home">Home</Link> /{" "}
              <Link href="/computing/coding-resources">Coding Resources</Link>
            </p>

            <h1 className={styles.title}>Coding Resources</h1>
            <p className={styles.subtitle}>
              Explore useful platforms, tutorials, documentation, and coding
              practice resources for computing students.
            </p>
          </div>

          <section className={styles.heroCard}>
            <div className={styles.heroText}>
              <h2 className={styles.heroTitle}>Learn smarter, build faster</h2>
              <p className={styles.heroDesc}>
                This page helps students find trusted coding resources for web
                development, programming fundamentals, interview preparation,
                and practical projects.
              </p>
            </div>

            <div className={styles.heroTags}>
              <span className={styles.tag}>Documentation</span>
              <span className={styles.tag}>Tutorials</span>
              <span className={styles.tag}>Practice</span>
              <span className={styles.tag}>Open Source</span>
            </div>
          </section>

          <section className={styles.grid}>
            {resources.map((resource) => (
              <div key={resource.id} className={styles.card}>
                <p className={styles.category}>{resource.category}</p>
                <h3 className={styles.cardTitle}>{resource.title}</h3>
                <p className={styles.cardText}>{resource.description}</p>

                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visitBtn}
                >
                  Visit Resource
                </a>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}