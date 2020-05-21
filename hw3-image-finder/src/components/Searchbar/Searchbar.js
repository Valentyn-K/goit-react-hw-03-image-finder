import React from "react";
import PropTypes from "prop-types";

import styles from "./Seachbar.module.css";

const Searchbar = ({ onHandleSubmit, onSearchQueryChange, value }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onHandleSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        onChange={onSearchQueryChange}
        className={styles.SearchFormInput}
        type="text"
        value={value}
        // autocomplete="off"
        // autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default Searchbar;

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Searchbar.defaultProps = {
  onHandleSubmit: () => {
    alert("Something went wrong... Try to reload this page");
  },
  onSearchQueryChange: () => {
    alert("Something went wrong... Try to reload this page");
  },
  value: "",
};
