import styles from '../styles/helper/WhoWeAre.module.css'
export default function WhoWeAre() {
  return (
    <div className={styles.container}>
            <div className={styles.header}>
                <h1>Who We Are</h1>
            </div>
            <div className={styles.main}>
                <div className={styles.headers}>
                    <h1>Our Mission</h1>
                    <h1>Our Vision</h1>
                    <h1>Our Value</h1>
                </div>
                <div className={styles.details}>
                    
                    <div className={styles.text}>
                        <div>
                            <h1>Our Mission</h1>
                            <p>We are a curated team of talented experts who are motivated by passion, excitement, creativity, and tenacity. Every day, we challenge ourselves to give our absolute best to our clients and one another. Our enthusiasm and pride, our knowledge and curiosity, our culture, and our commitment to supporting tomorrow's leaders sets us apart.</p>
                        </div>
                        <div>
                            <h1>Our Vision</h1>
                             <p>Create digital solutions that elevate the customer’s experience, shape cultural landscapes and get people connected globally.</p>
                            <p>Create digital solutions that elevate the customer’s experience, shape cultural landscapes and get people connected globally.</p>
                        </div>
                        <div>
                            <h1>Our Values</h1>
                            <ol>
                                <li>Quality</li>
                                <li>Integrity</li>
                                <li>Excellence.</li>
                                <li>Adaptability.</li>
                            </ol>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src="/images/whoweare.png" />
                    </div>
                </div>
            </div>
    </div>
  )
}
