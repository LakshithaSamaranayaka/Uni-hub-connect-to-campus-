import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Navbar />


      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.h1}>It’s your future</h1>
          <h2 className={styles.h2}>Connect.Learn.Grow-Together.</h2>

         
          <div className={styles.dotsRow}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.blob}>
            <Image
              src="/1page backg.png"
              alt="Student"
              width={560}
              height={560}
              // className={styles.heroImg}
              priority
            />
          </div>


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
        </div>
      </section>

       <p className={styles.smallText}>Improve your knowledge</p>
        <h4 className={styles.MidcardTitle}>Personalized learning</h4>
        <h4 className={styles.MidcardTitle1}>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</h4>
        <h4 className={styles.MidcardTitle2}>Trusted content</h4>
        <h4 className={styles.MidcardTitle3}>Created by experts, library of trusted practice and lessons covers math, science, and more. Always free for learners.</h4>
        <h4 className={styles.MidcardTitle4}>Tools to empower teachers</h4>
        <h4 className={styles.MidcardTitle5}>With Uni Hub, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.</h4>

      <h3 className={styles.sectionTitle}>Select&nbsp;&nbsp;Your&nbsp;&nbsp;Subject</h3>

      <section className={styles.subjects}>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Computing</h4>
            <div className={styles.subBtns}>
              <button className={styles.subBtn}>Programming notes</button>
                <button className={styles.subBtn}>Coding resources</button>
                <button className={styles.subBtn}>Project teams</button>
            </div>
          </div>

          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Business</h4>
            <ul className={styles.list}>
              <button className={styles.subBtn}>Case studies</button>
              <button className={styles.subBtn}>Business news</button>
              <button className={styles.subBtn}>Market trends</button>
              <button className={styles.subBtn}>Internship opportunities</button>
              <button className={styles.subBtn}>Career advice</button>
            </ul>
          </div>

          <div className={styles.card}>
            <h4 className={styles.cardTitle}>Engineering</h4>
            <ul className={styles.list}>
                <button className={styles.subBtn}>Engineering notes</button> 
                <button className={styles.subBtn}>Project ideas</button>
                <button className={styles.subBtn}>Internship opportunities</button>
            </ul>
          </div>
        </div>
      </section>

    <section className={styles.unirawsection}>
      <div className={styles.uniraw}>
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
      </div>
    </section>
    <section className={styles.middlebar}>
      <div className={styles.middlebarContent}>
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
        </div>
      <p className={styles.middleText}>Achieve your career goals with </p>
      <p className={styles.middleText2}>Uni Hub.</p> 
      <p className={styles.middleText3}>Built  For Students. Powered by Community.</p>
    </section>
    
  
    </div>
  );
}