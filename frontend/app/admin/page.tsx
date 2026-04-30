"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./admin.module.css";

const pendingNotesData = [
  {
    id: 1,
    title: "Java Basics Notes",
    category: "Computing",
    uploader: "Lakshitha",
    fileName: "java-basics.pdf",
    status: "Pending",
  },
  {
    id: 2,
    title: "Engineering Mathematics",
    category: "Engineering",
    uploader: "Alex",
    fileName: "engineering-maths.pdf",
    status: "Pending",
  },
  {
    id: 3,
    title: "Marketing Case Study",
    category: "Business",
    uploader: "Samantha",
    fileName: "marketing-case-study.pdf",
    status: "Pending",
  },
];

export default function AdminPage() {
  const [pendingNotes, setPendingNotes] = useState(pendingNotesData);

  const approveNote = (id: number) => {
    setPendingNotes(pendingNotes.filter((note) => note.id !== id));
    alert("Note approved successfully.");
  };

  const rejectNote = (id: number) => {
    setPendingNotes(pendingNotes.filter((note) => note.id !== id));
    alert("Note rejected.");
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.badge}>Admin Dashboard</p>
            <h1 className={styles.title}>Content Approval Panel</h1>
            <p className={styles.subtitle}>
              Review student uploads before publishing them to the platform.
            </p>
          </div>

          <Link href="/home" className={styles.backBtn}>
            Back to Home
          </Link>
        </div>

        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>{pendingNotes.length}</h3>
            <p>Pending Notes</p>
          </div>

          <div className={styles.statCard}>
            <h3>24</h3>
            <p>Approved Notes</p>
          </div>

          <div className={styles.statCard}>
            <h3>5</h3>
            <p>Rejected Notes</p>
          </div>
        </section>

        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Pending Uploads</h2>

          {pendingNotes.length === 0 ? (
            <p className={styles.empty}>No pending notes available.</p>
          ) : (
            <div className={styles.table}>
              {pendingNotes.map((note) => (
                <div key={note.id} className={styles.row}>
                  <div>
                    <h3 className={styles.noteTitle}>{note.title}</h3>
                    <p className={styles.noteMeta}>
                      {note.category} • Uploaded by {note.uploader}
                    </p>
                    <p className={styles.fileName}>File: {note.fileName}</p>
                  </div>

                  <span className={styles.status}>{note.status}</span>

                  <div className={styles.actions}>
                    <button
                      className={styles.approveBtn}
                      onClick={() => approveNote(note.id)}
                    >
                      Approve
                    </button>

                    <button
                      className={styles.rejectBtn}
                      onClick={() => rejectNote(note.id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}