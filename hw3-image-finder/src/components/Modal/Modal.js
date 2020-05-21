import React, { Component, createRef } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

export default class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    largeURL: PropTypes.string.isRequired,
  };

  static defaultProps = {
    onCloseModal: () => {
      alert("Something went wrong... Try to reload this page");
    },
    largeURL:
      "https://www.gsb.stanford.edu/sites/gsb/files/resources/internetbroken_0.gif",
  };

  backdropRef = createRef();

  handleKeyPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    this.props.onCloseModal();
  };

  handleBackdropClick = (e) => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) return;
    this.props.onCloseModal();
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <div className={styles.Backdrop} onClick={this.handleBackdropClick}>
        <img src={this.props.largeURL} alt="img" className={styles.Modal} />
      </div>
    );
  }
}
