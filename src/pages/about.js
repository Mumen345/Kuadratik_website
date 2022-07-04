import Nav from "../componets/Nav"
import Footer from "../componets/Footer"
import styles from "../styles/about.module.css"
import About from "../componets/About"
import WhoWeAre from "../componets/WhoWeAre"

export default function about() {
  return (
    <>
    <Nav/>
    
      <About/>
      <WhoWeAre/>
   
    <Footer/>
    </>
  )
}
