import styles from "../styles/helper/Nav.module.css";
import Link from "next/link";
import { useRef, useState } from "react";
import {useRouter}  from 'next/router';
import Router  from 'next/router';

export default function Nav() {
  const router = useRouter()
  const navRef = useRef();
  console.log(router.asPath)
  const showNavBar = () => {
    navRef.current.classList.toggle(`${styles.responsive_nav}`);
  };
    const scroll=async()=>{
      if (router.asPath == "/about" ||"/contact"){
        
        await Router.push("/");
        await (document.querySelector( '#services' )).scrollIntoView( { behavior: 'smooth', block: 'start' } )
      }
    }
    // const view=()=>{
    //   const section =document.querySelector( '#services' );
    //     section.scrollIntoView( { behavior: 'smooth', block: 'start' } )
    // }
// TOOGLE ACTIVE CLASS TO NAV BTN ON CLICK
    const [toogleState, setToogleState] = useState(null);

    const toogleTab =async (index) => {
    setToogleState(index);
    };

  return (

    <>
        <div className={styles.nav}> 
       <Link href='/'><a><img src="/images/logo.svg" className={styles.navimg}/></a></Link>
            <ul ref={navRef} className={styles.flow}>
                <li
                className={`${styles.tabs} ${router.pathname=="/about"?styles.activetabs:""}`}
                onClick={() => { Router.push("/about"); toogleTab(null)              }}
                
                >About</li>
                <li 
                className={`${styles.tabs} ${toogleState?styles.activetabs:""}`}
                onClick={async() => { await toogleTab(3)
                 await scroll(); 
                 }}
               >Services</li>
               
                <li className={styles.connect} onClick={()=> router.push('/connect')}>Connect</li>
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
        </>
  )

}
