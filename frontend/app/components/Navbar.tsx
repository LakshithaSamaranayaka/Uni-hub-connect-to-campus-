import Link from "next/link";
import  Styles  from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={Styles.header}>
                  <p className={Styles.headerTitle}>UNI  HUB</p>
                  <p className={Styles.headerTitle1}>campus connect</p>

        <nav className={Styles.nav}>
            <Link className={Styles.link} href="/home">Home</Link>
            <Link className={Styles.link} href="/services">Services</Link>
            <Link className={Styles.link} href="/faqs">FAQs</Link>
            <Link className={Styles.link} href="/contact">Contact</Link>
            <Link className={Styles.link} href="/community">Community</Link>
            <Link className={Styles.link} href="/profile">Profile</Link>
        </nav>

    </div>
    
  );
}