import styles from '../styles/helper/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/logo.svg" />
        </div>
        <div className={styles.menu}>
          <h3>MENU</h3>
          <ul>
          <li> HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          </ul>
        </div>
        <div className={styles.service}>
          <h3>SERvices</h3>
          <ul>
          <li> Project Management</li>
          <li>Business Consulting</li>
          <li>Data Analytics</li>
            <li>Web Development</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <div><img src="/images/contact.svg" />
          <ul>
            <li>inquires@kuadratik.com</li>
          </ul>
          </div>
        </div>
        <div className={styles.follow}>
          <h3>FOLLOW US</h3>
          <ul>
            <li><img src="/images/facebook.svg" /></li>
            <li><img src="/images/linkenin.svg" /></li>
            <li><img src="/images/twitter.svg" /></li>
            <li><img src="/images/instagram.svg" /></li>
          </ul>
        </div>
        
        </div>
        <p>© 2022 Kuadratik. All right reserved.</p>
    </div>
  )
}
