import styles from "../styles/helper/Top.module.css";
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from "react";

const TEXTS = ["creativity", "innovations", "projects", "designs"];

export default function Top() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.blackdiv}>
        <div className={styles.header}>
          <div>
            <h1>
              Activate your
              <TextTransition
                springConfig={presets.default}
                className={styles.transition}
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </h1>
            <p>
              Build customer-driven products leveraging Kuadratiks team of
              experts who explore the latest technology for your optimal
              experience.
            </p>
          </div>
          {/*     INPUT THE GIF IN THE DIV BELOW */}
          <div className={styles.herogif}>
            <img src="/images/herogif.gif" />
          </div>
        </div>
      </div>

      <div className={styles.product}>
        <h2>Products</h2>
        <p className={styles.p}>
          An instance helps Streamline your workflows, create more value and
          focus on what&#8217;s important
        </p>
        <div className={styles.product_grid}>
          <div className={styles.eki}>
            <img src="/images/eki-screen.svg" className={styles.p_screen} />
            <div className={styles.p_details}>
              <img src="/images/eki-logo.svg" />
              <p>
                An online marketplace where buyers can shop bulk food and
                general household items from verified suppliers. Creating
                opportunities for sellers to meet the needs of buyers globally.
              </p>
            </div>
          </div>
          <div className={styles.teddyship}>
            <img src="/images/teddy-screen.svg" className={styles.p_screen} />
            <div className={styles.p_details}>
              <img src="/images/teddy-logo.svg" />
              <p>
                A shipping marketplace with modernized shipping technology that
                creates visibility for local shippers and their top
                counterparts, making shipping a breeze for every customer.
              </p>
            </div>
          </div>
          <div className={styles.teddyed}>
            <img src="/images/teddyed-screen.svg" className={styles.p_screen} />
            <div className={styles.p_details}>
              <img src="/images/teddyed-logo.svg" />
              <p>
                A modular school management system that streamlines routine
                school workflows to focus on what matters most - your students!
              </p>
            </div>
          </div>
          <div className={styles.jolificate}>
            <img
              src="/images/jollificate-screen.svg"
              className={styles.p_screen}
            />
            <div className={styles.p_details}>
              <img src="/images/jollificate-icon.svg" />
              <p>
                An online celebration portal for electronic gift cards and
                rewards where users can celebrate anyone and everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
