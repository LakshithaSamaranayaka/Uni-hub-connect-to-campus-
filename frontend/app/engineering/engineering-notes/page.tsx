"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./engineering-notes.module.css";

type NoteItem = {
  id: number;
  title: string;
  field: string;
  uploader: string;
  fileName: string;
};

export default function EngineeringNotesPage() {
  const [title, setTitle] = useState("");
  const [field, setField] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [notes, setNotes] = useState<NoteItem[]>([
    {
      id: 1,
      title: "Electrical Circuits Basics",
      field: "Electrical Engineering",
      uploader: "Lakshitha",
      fileName: "electrical-circuits.pdf",
    },
    {
      id: 2,
      title: "Statics and Mechanics Notes",
      field: "Mechanical Engineering",
      uploader: "Samantha",
      fileName: "mechanics-notes.pdf",
    },
    {
      id: 3,
      title: "Engineering Mathematics Summary",
      field: "General Engineering",
      uploader: "Alex",
      fileName: "engineering-maths.pdf",
    },
  ]);

  function handleUpload(e: React.FormEvent) {
    e.preventDefault();

    if (!title || !field || !file) {
      alert("Please fill all fields and choose a file.");
      return;
    }

    const newNote: NoteItem = {
      id: Date.now(),
      title,
      field,
      uploader: "Current User",
      fileName: file.name,
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setField("");
    setFile(null);

    alert("Engineering note uploaded successfully (UI demo).");
  }

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.breadcrumb}>
              <Link href="/home">Home</Link> /{" "}
              <Link href="/engineering/engineering-notes">Engineering Notes</Link>
            </p>
            <h1 className={styles.title}>Engineering Notes</h1>
            <p className={styles.subtitle}>
              Upload and explore engineering notes shared by students across
              different engineering fields.
            </p>
          </div>

          <div className={styles.grid}>
            <section className={styles.uploadCard}>
              <h2 className={styles.cardTitle}>Upload Engineering Notes</h2>
              <p className={styles.cardText}>
                Share your engineering notes with other learners.
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
                  <label className={styles.label}>Engineering Field</label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Civil, Mechanical, Electrical..."
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Choose File</label>
                    <input
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

            <section className={styles.notesCard}>
              <h2 className={styles.cardTitle}>Available Notes</h2>
              <p className={styles.cardText}>
                Browse engineering notes uploaded by students.
              </p>

              <div className={styles.notesList}>
                {notes.map((note) => (
                  <div key={note.id} className={styles.noteItem}>
                    <div className={styles.noteInfo}>
                      <h3 className={styles.noteTitle}>{note.title}</h3>
                      <p className={styles.noteMeta}>Field: {note.field}</p>
                      <p className={styles.noteMeta}>
                        Uploaded by: {note.uploader}
                      </p>
                      <p className={styles.noteMeta}>File: {note.fileName}</p>
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