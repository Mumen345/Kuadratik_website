import styles from "../styles/helper/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1> About us</h1>
      </div>
      <div className={styles.grid}>
        <div className={styles.details}>
          <h1> KUADRATIK</h1>
          <p>
            We help individuals and small businesses avoid the rigours of manual
            procedures and provide solutions that result in good and long-term
            change for our clients, people, and society.
          </p>
          <p>
            Kuadratik is based in Toronto, Canada, and serves businesses in the
            retail, logistics, fintech and educational sectors globally. In all
            we do, we are dedicated to quality and service excellence, giving
            our all to clients and earning their trust through our professional
            behaviour and emotional intelligence.
          </p>
          <p>
            We lead with integrity throughout our organization, with a strong
            dedication to client success and a desire to serve and better the
            communities in which we work. We inspire confidence and enable
            change in everything we do in a world where rapid change and
            tremendous digital disruption are the new normal.
          </p>
        </div>
        <div className={styles.img}>
          <img src="/images/about.png" />
        </div>
      </div>
    </div>
  );
}
