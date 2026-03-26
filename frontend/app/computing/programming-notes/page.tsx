"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./programming-notes.module.css";

type NoteItem = {
  id: number;
  title: string;
  subject: string;
  uploader: string;
  fileName: string;
};

export default function ProgrammingNotesPage() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [notes, setNotes] = useState<NoteItem[]>([
    {
      id: 1,
      title: "Java Basics Notes",
      subject: "Java",
      uploader: "Lakshitha",
      fileName: "java-basics.pdf",
    },
    {
      id: 2,
      title: "React Introduction",
      subject: "React",
      uploader: "Samantha",
      fileName: "react-intro.pdf",
    },
    {
      id: 3,
      title: "Database Management Summary",
      subject: "DBMS",
      uploader: "Alex",
      fileName: "dbms-summary.pdf",
    },
  ]);

  function handleUpload(e: React.FormEvent) {
    e.preventDefault();

    if (!title || !subject || !file) {
      alert("Please fill all fields and choose a file.");
      return;
    }

    const newNote: NoteItem = {
      id: Date.now(),
      title,
      subject,
      uploader: "Current User",
      fileName: file.name,
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setSubject("");
    setFile(null);

    alert("Note uploaded successfully (UI demo).");
  }

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div>
              <p className={styles.breadcrumb}>
                <Link href="/home">Home</Link> /{" "}
                <Link href="/computing/programming-notes">Programming Notes</Link>
              </p>
              <h1 className={styles.title}>Programming Notes</h1>
              <p className={styles.subtitle}>
                Upload and share your programming notes with other students.
              </p>
            </div>
          </div>

          <div className={styles.grid}>
            {/* Upload card */}
            <section className={styles.uploadCard}>
              <h2 className={styles.cardTitle}>Upload Your Notes</h2>
              <p className={styles.cardText}>
                Only this page allows students to upload their own notes.
              </p>

              <form className={styles.form} onSubmit={handleUpload}>
                <div className={styles.field}>
                  <label className={styles.label}>Note Title</label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Enter note title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Subject / Technology</label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Java, React, DBMS..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className={styles.field}>
                    <label className={styles.label} htmlFor="noteFile">
                        Choose File
                          </label>
                <input
                    id="noteFile"
                    className={styles.fileInput}
                    type="file"
                    accept=".pdf,.doc,.docx"
                     onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                </div>

                <button className={styles.uploadBtn} type="submit">
                  Upload Notes
                </button>
              </form>
            </section>

            {/* Notes list */}
            <section className={styles.notesCard}>
              <h2 className={styles.cardTitle}>Available Notes</h2>
              <p className={styles.cardText}>
                Browse uploaded notes shared by students.
              </p>

              <div className={styles.notesList}>
                {notes.map((note) => (
                  <div key={note.id} className={styles.noteItem}>
                    <div className={styles.noteInfo}>
                      <h3 className={styles.noteTitle}>{note.title}</h3>
                      <p className={styles.noteMeta}>
                        Subject: {note.subject}
                      </p>
                      <p className={styles.noteMeta}>
                        Uploaded by: {note.uploader}
                      </p>
                      <p className={styles.noteMeta}>
                        File: {note.fileName}
                      </p>
                    </div>

                    <div className={styles.noteActions}>
                      <button className={styles.downloadBtn} type="button">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}