import Navbar from "../components/Navbar";
import styles from "./services.module.css";
import Image from "next/image";
import Footer from "../components/Footer";


export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      
   <main className={styles.main}>

       <div className={styles.maincard}>
          <h1 className={styles.h1}>Our Services</h1>
           <h4 className={styles.computing}>Computing</h4>
           <div className={styles.comlogo}>
               <Image
                 src="/com.logo.png"
                 alt="Computing"
                 width={50}
                 height={560}
              priority
            />
           </div>
           <div className={styles.subBtns}>
              <button className={styles.subBtn}>Programming notes</button>
                <button className={styles.subBtn}>Coding resources</button>
                <button className={styles.subBtn}>Project teams</button>
                <button className={styles.subBtn}>Internship oppertunity</button>
                <button className={styles.subBtn}>Industry news</button>
                <button className={styles.subBtn}>Case studies</button>
            </div>



           <h4 className={styles.Business}>Business</h4>
           <div className={styles.busilogo}>
               <Image
                 src="/businesslogo.png"
                 alt="Business"
                 width={45}
                 height={560}
              priority
            />
           </div>
           <div className={styles.subBtns1}>
              <button className={styles.subBtn1}>Case studies</button>
                <button className={styles.subBtn1}>Industery news</button>
                <button className={styles.subBtn1}>Market trends</button>
                <button className={styles.subBtn1}>Internship oppertunity</button>
                <button className={styles.subBtn1}>Business resources</button>
                <button className={styles.subBtn1}>Business projects</button>
            </div>


             <h4 className={styles.Engineering}>Engineering</h4>
           <div className={styles.englogo}>
               <Image
                 src="/engilogo.png"
                 alt="Engineering"
                 width={45}
                 height={560}
              priority
            />
           </div>
           <div className={styles.subBtns2}>
              <button className={styles.subBtn2}>Engineering notes</button>
                <button className={styles.subBtn2}>Peoject ideas</button>
                <button className={styles.subBtn2}>Industry news</button>
                <button className={styles.subBtn2}>Internship oppertunity</button>
                <button className={styles.subBtn2}>Engineering projects</button>
            </div>

                   </div>
    </main>
    <Footer/>
</div>
);
}