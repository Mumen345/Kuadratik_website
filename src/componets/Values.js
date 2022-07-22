import styles from "../styles/helper/Values.module.css";

export default function Values() {
  return (
    <div className={styles.container}>
      <div className={styles.values_div}>
        <h1>Our Values</h1>
        <p>
          Create digital solutions that elevate the customer’s experience, shape
          cultural landscapes and get people connected globally.
        </p>
        <div className={styles.ol}>
          <ol>
            <li>Quality</li>
            <li>Quality</li>
            <li>Adaptability</li>
            <li>Excellence</li>
          </ol>
        </div>
      </div>
      <img src="/images/our_values.gif" className={styles.value} />
    </div>
  );
}
