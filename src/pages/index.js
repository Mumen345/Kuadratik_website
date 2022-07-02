import Footer from '../componets/Footer'
import Nav from '../componets/Nav'
import Top from '../componets/Top'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav/>
      <Top/>
      <Footer/>
    </div>
  )
}
