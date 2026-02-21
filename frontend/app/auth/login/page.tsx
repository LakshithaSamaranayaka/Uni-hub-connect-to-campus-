import styles  from "./login.module.css";
import Image from "next/image";
export default function LoginPage() {
  return (
    <div className={styles.bg}>
    <div className={styles["split-card"]}>
        <div className={styles.left}>
     <h2>Sign In</h2>
     <p>Welcome Back! Please enter your details.</p>
    <form className={styles.form}>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button className={`${styles["btn"]} ${styles.solid}`} type="button">Sign In</button>
    </form>
      
  </div>

    <div className={styles.right}>
    <h2>Hello, Friend !</h2>
    <p> Enter your personal details and start journey with us.</p>
    <button className={`${styles["btn"]} ${styles.outline}`}>Sign Up</button>

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
  
    </div> 
    </div>
 

    
  );}


