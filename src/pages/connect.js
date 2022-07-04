import styles from "../styles/connect.module.css";
import React from "react";
import Footer from "../componets/Footer";
import Nav from "../componets/Nav";

export default function connect() {
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <div className={styles.contactDiv}>
          <h2>Get in touch</h2>
          <div className={styles.inputDiv}>
            <div>
              <label className={styles.labeltext} htmlFor="fname">
                Full Name
              </label>
              <br />

              <div class={styles.Iconinside}>
                <input type="email" placeholder="Email address" />
                <img src="images/messageses.svg" alt="contactus img" />
              </div>
            </div>
            <div className={styles.emailName}>
              <label className={styles.labeltext} htmlFor="lnamex">
                Email
              </label>
              <br />
              <div class={styles.Iconinside}>
                <input type="email" placeholder="Email address" />
                <img src="images/user_img.svg" alt="contactus img" />
              </div>
            </div>
            <div className={styles.emailName}>
              <label className={styles.labeltext} htmlFor="lname">
                Your message
              </label>
              <br />
              <textarea
                rows="4"
                cols="50"
                className={styles.inputName}
                type="email"
                name="lastname"
                placeholder="Your last name.."
              ></textarea>
            </div>
            <div>
              <button className={styles.contactUsButton}>Send Message</button>
            </div>
          </div>
        </div>

        <img
          className={styles.contact_img}
          src="images/contactus.png"
          alt="contactus img"
        />
      </div>
      <Footer />
    </div>
  );
}
