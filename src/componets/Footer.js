import styles from "../styles/helper/Footer.module.css";

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
          <div>
            <img src="/images/contact.svg" />
            <ul>
              <li>
                <a href="mailto:inquires@kuadratik.com">
                  inquires@kuadratik.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.follow}>
          <h3>FOLLOW US</h3>
          <ul>
            <li>
              <a href="mailto:inquires@kuadratik.com">
                <img src="/images/facebook.svg" />
              </a>
            </li>
            <li>
              <a href="mailto:inquires@kuadratik.com">
                <img src="/images/linkenin.svg" />
              </a>
            </li>
            <li>
              <a href="mailto:inquires@kuadratik.com">
                <img src="/images/twitter.svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>© 2022 Kuadratik. All right reserved.</p>
    </div>
  );
}
