import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.css";

const Load = () => (
  <div className={styles.loaderOverlay}>
    <Loader
      className={styles.loader}
      type="Oval"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={10000}
    />
  </div>
);

export default Load;
