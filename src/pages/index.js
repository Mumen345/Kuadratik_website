import Footer from '../componets/Footer'
import Nav from '../componets/Nav'
import Playbook from '../componets/Playbook'
import Services from '../componets/Services'
import Top from '../componets/Top'
import Why from '../componets/Why'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Nav/>
     
      <Top/>
      <Services/>
      <Why/>
      <Playbook/>
      
      <Footer/>
      </>
  )
}
