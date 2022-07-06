import styles from "../styles/connect.module.css";
import { useFormik } from "formik";
import Footer from "../componets/Footer";
import * as Yup from "yup";
import Nav from "../componets/Nav";
// import FormHelper from "../componets/FormHelper";
export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.touched);
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.contactDiv}>
          <h2>Get in touch</h2>

          <form onSubmit={formik.handleSubmit}>
            <label className={styles.labeltext} htmlFor="fullName">
              First Name
            </label>
            <div className={styles.Iconinside}>
              <input
                id="fullName"
                name="fullName"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
              <img src="/images/user_img.svg" />
            </div>
            {formik.touched.fullName && formik.errors.fullName ? (
              <p className={styles.errorMessage}>{formik.errors.fullName}</p>
            ) : null}
            <label className={styles.labeltext} htmlFor="email">
              Email Address
            </label>
            <div className={styles.Iconinside}>
              <input
                id="email"
                name="email"
                type="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <img src="/images/messageses.svg" />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <p className={styles.errorMessage}>{formik.errors.email}</p>
            ) : null}

            <label className={styles.labeltext} htmlFor="message">
              Message
            </label>
            <textarea
              rows={5}
              id="message"
              name="message"
              type="text"
              className={styles.Iconinside}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className={styles.errorMessage}>{formik.errors.message}</p>
            ) : null}

            <button type="submit" className={styles.contactUsButton}>
              Submit
            </button>
          </form>
        </div>

        <img
          className={styles.contact_img}
          src="images/extra/people.webp"
          alt="contactus img"
        />
      </div>
      <Footer />
    </>
  );
}
