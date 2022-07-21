import "../styles/globals.css";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Helmet } from "react-helmet";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kuadratik</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Tag Line" />
        <link rel="canonical" href="http://kuadratik.com" />
      </Helmet>
      <Component {...pageProps} />;
      {/* <ToastContainer
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
      /> */}
    </div>
  );
}

export default MyApp;
