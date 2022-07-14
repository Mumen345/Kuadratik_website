import styles from "../styles/helper/Services.module.css";

export default function Services() {
  return (
    <div className={styles.container} id="services">
      <div className={styles.services}>
        <h1>SERVICES</h1>
        <div className={styles.grid_card}>
          <div className={styles.card}>
            <div className={styles.details}>
              <img src="/images/project-managment.svg" />
              <div className={styles.text}>
                <h3>Project Management</h3>
                <p>
                  Working with your stakeholders to determine value, execute a
                  developed plan and deliver as promised.
                </p>
              </div>
            </div>
            <div className={styles.details}>
              <img src="/images/busness-consulting.svg" />
              <div className={styles.text}>
                <h3>Business Consulting</h3>
                <p>
                  Our managerial skills focus on understand your current
                  processes, identify gaps and change level to support
                  recommending and implementing new processes to increase your
                  bottom line.
                </p>
              </div>
            </div>
            <div className={styles.details}>
              <img src="/images/data- analytics.svg" />
              <div className={styles.text}>
                <h3>Data Analytics</h3>
                <p>
                  With your applications' data, we make meaningful insights that
                  tell a story and support business decision making.
                </p>
              </div>
            </div>
            <div className={styles.details}>
              <img src="/images/web- development.svg" />
              <div className={styles.text}>
                <h3>Web Development</h3>
                <p>
                  Our designers, front-end and back-end developers understand
                  the moving parts of a website and focus more on security and
                  performance using modern content management systems.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.hero}>
            <img src="/images/services-hero.png" />
          </div>
        </div>
      </div>
      {/* <div className={styles.affiliates}>
            <img src="/images/purepng 1.svg"  />
            <img src="/images/Exxon Mobil 1.svg"  />
            <img src="/images/pertamina_logo_WB 1.svg"  />
            <img src="/images/dhl.svg"  />
        </div> */}
    </div>
  );
}
