import styles  from "./register.module.css";
import Image from "next/image";
export default function RegisterPage() {
  return (
    <div className={styles.bg}>
    <div className={styles["split-card"]}>
  <div className={styles.left}>
    <h2>Welcome Back !</h2>
    <p> To keep connected with us please login with your personal info.</p>
    <button className={`${styles["btn"]} ${styles.outline}`}>Sign In</button>

    <div className={styles.social}>
    <button type="button" className={styles.socialBtn}>
      <Image src="/icons8-facebook-48.png" alt="Facebook" width={60} height={50} />    
    </button> 
    <button type="button" className={styles.socialBtn}>
      <Image src="/instagram.png" alt="Instagram" width={33} height={20}  />
    </button> 
    <button type="button" className={styles.socialBtn}>
      <Image src="/icons8-linkedin-48.png" alt="LinkedIn" width={60} height={50} />
    </button> 
    </div>
  </div>

  <div className={styles.right}>
    <h2>Create Account</h2>
    <form className={styles.form}>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />

      <button className={`${styles["btn"]} ${styles.solid}`} type="button">Sign Up</button>
    </form>
  </div>
</div>

    </div> 

    
  );
}
