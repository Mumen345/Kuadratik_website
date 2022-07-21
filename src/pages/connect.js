import styles from "../styles/connect.module.css";
import axios from "axios";
import Footer from "../componets/Footer";
// import toast, { Toaster } from "react-hot-toast";
import Nav from "../componets/Nav";
import { useRef, useState } from "react";
// import { Toaster, resolveValue } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignupForm() {
  const emailForm = useRef(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // global.FormData = FormData
  // let FormData = require('form-data');
  // const sendForm = new FormData(emailForm.current);

  const validateNdForward = async (e) => {
    e.preventDefault();
    let errorObj = {};

    !fullName ? (errorObj.fullName = "Field is required") : null;
    !message ? (errorObj.message = "Field is required") : null;

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    !email
      ? (errorObj.email = "Field is required")
      : regexEmail.test(email) == false
      ? (errorObj.email = "Field is not a valid email address")
      : null;

    if (Object.keys(errorObj).length > 0) {
      setFormErrors(errorObj);
      return;
    }
    setFormErrors("");

    let sendForm = new FormData(emailForm.current);
    for (var par of sendForm.entries()) {
      console.log(par[0], par[1]);
    }

    let formData = {
      fullName: sendForm.get("fullName"),
      email: sendForm.get("email"),
      message: sendForm.get("message"),
    };
    console.log({ formData });
    axios;
    // .post("https://jsonplaceholder.typicode.com/posts", formData)
    // .then(() => {
    //   if (response.status === 201) toast.success("Success!");
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    //   toast.error("opps something went wrong");
    // });
    // setFullName("");
    // setEmail("");
    // setMessage("");

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          formData,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      // toast("Hello World");
      console.log("I dey here");
      toast.success("Success!");
      console.log(response);
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log("I am here");
      toast.error("opps something went wrong");
    }
  };

  return (
    <>
      <Nav />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="colored"
      />
      {/* <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      /> */}
      <div className={styles.container}>
        <div className={styles.contactDiv}>
          <h2>Get in touch</h2>

          <form ref={emailForm}>
            <label className={styles.labeltext}>First Name</label>
            <div className={styles.Iconinside}>
              <input
                // id="fullName"
                name={"fullName"}
                type="text"
                // onBlur={formik.handleBlur}
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
              <img src="/images/user_img.svg" />
            </div>
            {formErrors.fullName ? (
              <p className={styles.errorMessage}>{formErrors.fullName}</p>
            ) : null}
            <label className={styles.labeltext}>Email Address</label>
            <div className={styles.Iconinside}>
              <input
                name={"email"}
                type="email"
                // onBlur={formik.handleBlur}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <img src="/images/messageses.svg" />
            </div>
            {formErrors.email ? (
              <p className={styles.errorMessage}>{formErrors.email}</p>
            ) : null}

            <label className={styles.labeltext}>Message</label>
            <textarea
              rows={5}
              // id="message"
              name={"message"}
              type="text"
              className={styles.Iconinside}
              onChange={(e) => setMessage(e.target.value)}
              // onBlur={formik.handleBlur}
              value={message}
            ></textarea>
            {formErrors.message ? (
              <p className={styles.errorMessage}>{formErrors.message}</p>
            ) : null}

            <button
              type="submit"
              className={styles.contactUsButton}
              onClick={validateNdForward}
            >
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
