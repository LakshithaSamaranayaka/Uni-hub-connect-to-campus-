  import Image from "next/image";
  import styles from "./Footer.module.css";

  export default function Footer() {
    return (
  <section className={styles.footer}>
       <p className={styles.footerText}>Our mission is to provide a free,world-class education to anyone, anywhere..</p>
      < div className={styles.footerImage}>
      <a href="https://play.google.com/store/apps/details?id=com.campusconnect.app" target="_blank" rel="noopener noreferrer">
        <Image
          src="/play store.png"
          alt="Footer"
          width={267}
          height={400}
          className={styles.footerImage1}
        />
      </a>
      <a href="https://apps.apple.com/app/campus-connect/id6449074415" target="_blank" rel="noopener noreferrer">
        <Image
          src="/appstore.png"
          alt="Footer"
          width={200}
          height={400}
          className={styles.footerImage2}
        />
      </a>
       </div>


      <div className={styles.footertitles}>
      <h5 className={styles.footertitle1}>Subject</h5>
      <h6 className={styles.footertitle2}>Usefull Links</h6>
      <h6 className={styles.footertitle3}>Category</h6>
      <h6 className={styles.footertitle4}>Contact Us</h6>
      </div>
       <div className={styles.footerBtns}>
  <a className={styles.footerLink} href="#">Computing</a>
  <a className={styles.footerLink} href="#">Business</a>
  <a className={styles.footerLink} href="#">Engineering</a>
</div>
<div className={styles.footerBtns1}>
  <a className={styles.footerLink} href="#">Profile</a>
  <a className={styles.footerLink} href="#">Home</a>
  <a className={styles.footerLink} href="#">Community</a>
</div>
    <div className={styles.footerBtns2}>
  <a className={styles.footerLink} href="#">Notes</a>
  <a className={styles.footerLink} href="#">Events</a>
  <a className={styles.footerLink} href="#">Groups</a>
  <a className={styles.footerLink} href="#">Announcements</a>
  <a className={styles.footerLink} href="#">Report Issue</a>
</div>
<div className={styles.footerBtns3}>
  <a className={styles.footerLink} href="#">Campusconnect12@gmail.com</a>
  <a className={styles.footerLink} href="#">+94 35 335 7341</a>
  <a className={styles.footerLink} href="#">+94 74 285 9116</a>
</div>


<div className={styles.socialIcons}>
  <a href="#" target="_blank"  rel="noopener noreferrer">
    <Image src="/fb.png" width={50} height={30} alt="facebook" />   
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <Image src="/instagram.png" width={38} height={30} alt="instagram" />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <Image src="/threds.png" width={48} height={30} alt="thread" />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <Image src="/whatsapp.png" width={39} height={30} alt="whatsapp" />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <Image src="/linkedin.png" width={53} height={30} alt="linkedin" />
  </a>
</div>
    </section>
    );
  }