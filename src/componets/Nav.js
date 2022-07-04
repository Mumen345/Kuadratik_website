import styles from '../styles/helper/Nav.module.css'
import Link from "next/link"
import { useRef } from 'react'


export default function Nav() {
const navRef= useRef()
const showNavBar=()=>{
  navRef.current.classList.toggle(`${styles.responsive_nav}`)
}
  return (
    <nav>
        <div className={styles.nav}> 
       <Link href='/'><a><img src="/images/logo.svg" className={styles.navimg}/></a></Link>
            <ul ref={navRef} className={styles.flow}>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/#Services'>Services</Link></li>
                <li className={styles.connect}><Link href='/'>Connect</Link></li>
                
                <img className={`${styles.nav_btn} ${styles.nav_close_btn}`} src="/images/close1.svg" 
                style={{filter:'invert(100%)'}}
                onClick={showNavBar}
                />
            </ul>
            <div className={styles.nav_btn}
             onClick={showNavBar}
            >
              <div className={styles.one}></div>
              <div className={styles.two}></div>
              <div className={styles.three}></div>
            </div>
   
        </div>
    </nav>
  )
}
