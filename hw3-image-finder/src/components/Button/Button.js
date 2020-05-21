import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";
const Button = ({ onLoadMoreButtonClick }) => (
  <div className={styles.buttonWrapper}>
    <button onClick={() => onLoadMoreButtonClick()} className={styles.Button}>
      Load More
    </button>
  </div>
);

export default Button;

Button.propTypes = {
  onLoadMoreButtonClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  onLoadMoreButtonClick: () => {
    alert("Something went wrong... Try to reload this page");
  },
};
