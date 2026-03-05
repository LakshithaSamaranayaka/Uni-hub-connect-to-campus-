import Image from "next/image";
import  Styles  from "./footer.module.css";

export default function Footer() {
  return (
    <div className={Styles.footer}>

       <p className={Styles.footerText}>Our mission is to provide a free,world-class education to anyone, anywhere..</p>
      < div className={Styles.footerImage}>
      <a href="https://play.google.com/store/apps/details?id=com.campusconnect.app" target="_blank" rel="noopener noreferrer">
        <Image
          src="/play store.png"
          alt="Footer"
          width={267}
          height={400}
          className={Styles.footerImage1}
        />
      </a>
      <a href="https://apps.apple.com/app/campus-connect/id6449074415" target="_blank" rel="noopener noreferrer">
        <Image
          src="/appstore.png"
          alt="Footer"
          width={200}
          height={400}
          className={Styles.footerImage2}
        />
      </a>
       </div>


      <div className={Styles.footertitles}>
      <h5 className={Styles.footertitle1}>Subject</h5>
      <h6 className={Styles.footertitle2}>Usefull Links</h6>
      <h6 className={Styles.footertitle3}>Category</h6>
      <h6 className={Styles.footertitle4}>Contact Us</h6>
      </div>
       <div className={Styles.footerBtns}>
  <a className={Styles.footerLink} href="#">Computing</a>
  <a className={Styles.footerLink} href="#">Business</a>
  <a className={Styles.footerLink} href="#">Engineering</a>
</div>
<div className={Styles.footerBtns1}>
  <a className={Styles.footerLink} href="#">Profile</a>
  <a className={Styles.footerLink} href="#">Home</a>
  <a className={Styles.footerLink} href="#">Community</a>
</div>
    <div className={Styles.footerBtns2}>
  <a className={Styles.footerLink} href="#">Notes</a>
  <a className={Styles.footerLink} href="#">Events</a>
  <a className={Styles.footerLink} href="#">Groups</a>
  <a className={Styles.footerLink} href="#">Announcements</a>
  <a className={Styles.footerLink} href="#">Report Issue</a>
</div>
<div className={Styles.footerBtns3}>
  <a className={Styles.footerLink} href="#">Campusconnect12@gmail.com</a>
  <a className={Styles.footerLink} href="#">+94 35 335 7341</a>
  <a className={Styles.footerLink} href="#">+94 74 285 9116</a>
</div>


<div className={Styles.socialIcons}>
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


</div>

  );
}         
   