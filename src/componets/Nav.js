import styles from "../styles/helper/Nav.module.css";
import Link from "next/link";
import { useRef } from "react";

export default function Nav() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle(`${styles.responsive_nav}`);
  };
  return (
    <nav>
      <div className={styles.nav}>
        <Link href="/">
          <img src="/images/logo.svg" className={styles.navimg} />
        </Link>
        <ul ref={navRef} className={styles.flow}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li className={styles.connect}>
            <Link href="/connect">Connect</Link>
          </li>

          <img
            className={`${styles.nav_btn} ${styles.nav_close_btn}`}
            src="/images/close1.svg"
            style={{ filter: "invert(100%)" }}
            onClick={showNavBar}
          />
        </ul>
        <img
          className={styles.nav_btn}
          src="/images/menu5.svg"
          style={{ filter: "invert(100%)" }}
          onClick={showNavBar}
        />
      </div>
    </nav>
  );
}
