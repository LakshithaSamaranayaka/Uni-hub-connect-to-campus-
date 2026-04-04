import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./project-teams.module.css";

const teams = [
  {
    id: 1,
    projectTitle: "Campus Event Finder App",
    description:
      "Looking for students to build a web app that helps users discover university events and club activities.",
    rolesNeeded: ["Frontend Developer", "Backend Developer", "UI/UX Designer"],
    leader: "Lakshitha",
    contact: "lakshitha@email.com",
  },
  {
    id: 2,
    projectTitle: "Smart Study Planner",
    description:
      "A team project to build a productivity tool for students to organize tasks, deadlines, and schedules.",
    rolesNeeded: ["React Developer", "Java Developer", "Tester"],
    leader: "Samantha",
    contact: "samantha@email.com",
  },
  {
    id: 3,
    projectTitle: "Online Note Sharing Platform",
    description:
      "Creating a platform where students can upload and share notes with approval and admin moderation.",
    rolesNeeded: ["Full-stack Developer", "Database Designer"],
    leader: "Alex",
    contact: "alex@email.com",
  },
  {
    id: 4,
    projectTitle: "Final Year Research Team",
    description:
      "Need motivated students for research, documentation, UI design, and system implementation support.",
    rolesNeeded: ["Research Writer", "Frontend Developer", "Presentation Designer"],
    leader: "Nadun",
    contact: "nadun@email.com",
  },
];

export default function ProjectTeamsPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.breadcrumb}>
              <Link href="/home">Home</Link> /{" "}
              <Link href="/computing/project-teams">Project Teams</Link>
            </p>

            <h1 className={styles.title}>Project Teams</h1>
            <p className={styles.subtitle}>
              Join student project teams, explore ideas, and collaborate with
              others to build meaningful computing projects.
            </p>
          </div>

          <section className={styles.heroCard}>
            <div className={styles.heroText}>
              <h2 className={styles.heroTitle}>Collaborate and build together</h2>
              <p className={styles.heroDesc}>
                This page helps students find team members, share project ideas,
                and work together on academic and creative software projects.
              </p>
            </div>

            <div className={styles.heroTags}>
              <span className={styles.tag}>Teamwork</span>
              <span className={styles.tag}>Projects</span>
              <span className={styles.tag}>Networking</span>
              <span className={styles.tag}>Collaboration</span>
            </div>
          </section>

          <section className={styles.grid}>
            {teams.map((team) => (
              <div key={team.id} className={styles.card}>
                <p className={styles.leader}>Team Lead: {team.leader}</p>
                <h3 className={styles.cardTitle}>{team.projectTitle}</h3>
                <p className={styles.cardText}>{team.description}</p>

                <div className={styles.rolesBox}>
                  <p className={styles.rolesTitle}>Roles Needed</p>
                  <div className={styles.rolesList}>
                    {team.rolesNeeded.map((role, index) => (
                      <span key={index} className={styles.roleTag}>
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.actions}>
                  <a
                    href={`mailto:${team.contact}`}
                    className={styles.joinBtn}
                  >
                    Join Team
                  </a>

                  <button className={styles.detailsBtn} type="button">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}