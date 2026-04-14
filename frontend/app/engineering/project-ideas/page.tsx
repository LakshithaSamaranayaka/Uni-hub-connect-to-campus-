"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./project-ideas.module.css";

const projectIdeas = [
  {
    id: 1,
    title: "Smart Traffic Light System",
    field: "Electrical Engineering",
    difficulty: "Medium",
    description:
      "Develop an intelligent traffic system that adjusts signal timing based on traffic density.",
  },
  {
    id: 2,
    title: "Solar Powered Water Pump",
    field: "Mechanical Engineering",
    difficulty: "Medium",
    description:
      "Create a solar-powered water pump for agricultural irrigation systems.",
  },
  {
    id: 3,
    title: "Smart Home Automation System",
    field: "Electronics Engineering",
    difficulty: "Easy",
    description:
      "Build a home automation system using sensors and mobile control.",
  },
  {
    id: 4,
    title: "Bridge Load Monitoring System",
    field: "Civil Engineering",
    difficulty: "Hard",
    description:
      "Monitor bridge load and safety conditions using sensors.",
  },
  {
    id: 5,
    title: "Electric Vehicle Charging Station",
    field: "Electrical Engineering",
    difficulty: "Hard",
    description:
      "Design and implement an EV charging station prototype.",
  },
  {
    id: 6,
    title: "IoT Based Smart Parking System",
    field: "Engineering Technology",
    difficulty: "Medium",
    description:
      "Create a smart parking system using IoT sensors.",
  },
];

export default function EngineeringProjectIdeasPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.breadcrumb}>
              <Link href="/home">Home</Link> /{" "}
              <Link href="/engineering/project-ideas">Project Ideas</Link>
            </p>

            <h1 className={styles.title}>Engineering Project Ideas</h1>
            <p className={styles.subtitle}>
              Explore innovative engineering project ideas for your academic
              and final year projects.
            </p>
          </div>

          <div className={styles.grid}>
            {projectIdeas.map((project) => (
              <div key={project.id} className={styles.card}>
                <span className={styles.field}>{project.field}</span>

                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>

                <p className={styles.description}>
                  {project.description}
                </p>

                <div className={styles.footer}>
                  <span className={styles.difficulty}>
                    {project.difficulty}
                  </span>

                  <button className={styles.btn}>
                    View Idea
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}