"use client";
import { motion, scale } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import styles from "./home.module.css";
import { tr } from "framer-motion/client";


const slowPopUp = {
  hidden: { opacity: 0, y: 60 },
  scale: { scale: 0.95 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 3 , ease: "easeOut" },
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Navbar />
        

      <section className={styles.hero}>
        <motion.div
          className={styles.heroLeft}
          initial="hidden"
          variants={slowPopUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.8}}
        >
          <h1 className={styles.h1}>It’s your future</h1>
          <h2 className={styles.h2}>Connect.Learn.Grow-Together.</h2>

         
          <div className={styles.dotsRow}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </motion.div>

        <motion.div className={styles.heroRight}>
          <motion.div className={styles.blob}>
            <Image
              src="/1page backg.png"
              alt="Student"
              width={560}
              height={560}
              // className={styles.heroImg}
              priority
            />
          </motion.div>


        <div className={styles.heroRight1}>
            <Image
              src="/1.png"
              alt="Student"
              width={510}
              height={510}
              // className={styles.heroImg}
              priority
            />
          </div>
        </motion.div>
      </section>

       <motion.p
          className={styles.smallText}
          initial="hidden"
          variants={slowPopUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          Improve your knowledge
        </motion.p>
        <motion.h4 className={styles.MidcardTitle} initial="hidden" variants={slowPopUp} whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
          Personalized learning
        </motion.h4>
        <motion.h4 className={styles.MidcardTitle1} initial="hidden" variants={slowPopUp} whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
          Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.
        </motion.h4>
        <motion.h4 className={styles.MidcardTitle2} initial="hidden" variants={slowPopUp} whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
          Tracked content
        </motion.h4>
        <motion.h4 className={styles.MidcardTitle3} initial="hidden" variants={slowPopUp} whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
          Created by experts, library of trusted practice and lessons covers math, science, and more. Always free for learners.
        </motion.h4>
        <motion.h4 className={styles.MidcardTitle4} initial="hidden" variants={slowPopUp} whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
          Tools to empower teachers
        </motion.h4>
        <motion.h4 className={styles.MidcardTitle5} initial="hidden" variants={slowPopUp} whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
          With Uni Hub, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.
        </motion.h4>

      <h3 className={styles.sectionTitle}>Select&nbsp;&nbsp;Your&nbsp;&nbsp;Subject</h3>

      <section className={styles.subjects}>

        <motion.div className={styles.cards}
          initial="hidden"
          variants={slowPopUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >

          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Computing</h4>
            <div className={styles.subBtns}>
              <Link href="/computing/programming-notes" className={styles.subBtn}>Programming notes</Link>
              <Link href="/computing/coding-resources" className={styles.subBtn}>Coding resources</Link>
              <Link href="/computing/project-teams" className={styles.subBtn}>Project teams</Link>  
            </div>
          </div>

          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Business</h4>
            <ul className={styles.list}>
              <Link href="/business/case-studies" className={styles.subBtn}>Case studies</Link>
              <Link href="/business/business-news" className={styles.subBtn}>Business news</Link>
              <Link href="/business/market-trends" className={styles.subBtn}>Market trends</Link>
              <Link href="/business/internship-opportunities" className={styles.subBtn}>Internship opportunities</Link>
              <Link href="/business/career-advice" className={styles.subBtn}>Career advice</Link>
            </ul>
          </div>

          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Engineering</h4>
            <ul className={styles.list}>
              <Link href="/engineering/engineering-notes" className={styles.subBtn}>Engineering notes</Link>
              <Link href="/engineering/project-ideas" className={styles.subBtn}>Project ideas</Link>
              <Link href="/engineering/internship-opportunities" className={styles.subBtn}>Internship opportunities</Link>
            </ul>
          </div>
        </motion.div>
      </section>

    <section className={styles.unirawsection}>
      <motion.div className={styles.uniraw}
        initial="hidden"
        variants={slowPopUp}
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
          <p className={styles.subline}>Learn from 20+ top local and foreign universities</p>
            <div className={styles.unirawImage}>
             <Image
              src="../nsbm.svg"
              alt="Universities"
              width={200}
              height={400}
              className={styles.unirawImg0}
              priority
            /> 
              <Image
              src="/sliit.png"
              alt="Universities"
              width={280}
              height={400}
              className={styles.unirawImg1}
              priority
            />
             <Image
              src="/plymouth.jpg"
              alt="Universities"
              width={250}
              height={400}
              className={styles.unirawImg3}
              priority
            />
             <Image
              src="/iit.jpg"
              alt="Universities"
              width={210}
              height={400}
              className={styles.unirawImg4}
              priority
            />
             <Image
              src="/nibm.png"
              alt="Universities"
              width={390}
              height={400}
              className={styles.unirawImg5}
              priority
            />
            </div>
      </motion.div>
    </section>
    <section className={styles.middlebar}>
      <motion.div className={styles.middlebarContent}
        initial="hidden"
        variants={slowPopUp}
        whileInView="visible"
        viewport={{ once: true, amount: 0.9 }}
      >
        <Image
          src="/2nd back.png"
          alt="Middle Bar"
          width={800}
          height={100}
          className={styles.middlebarImg}
        />
        <Image
          src="/2nd boy.png"
          alt="Middle Bar"
          width={300}
          height={100}
          className={styles.middlebarImg1}
        />
        <div className={styles.middlebarImg3}>
          <Image
        src="/font back.png"
        alt="Middle Bar"
        width={230}
        height={100}
        className={styles.middlebarImg3}
      />
      </div>
        </motion.div>
      <p className={styles.middleText}>Achieve your career goals with </p>
      <p className={styles.middleText2}>Uni Hub.</p> 
      <p className={styles.middleText3}>Built  For Students. Powered by Community.</p>
    </section>
        <Footer />
    
  
    
    </div>
  );
}