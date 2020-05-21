import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

export default class ImageGallery extends Component {
  ListRef = createRef();

  static propTypes = {
    onHandleClickOnImage: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  static defaultProps = {
    onHandleClickOnImage: () => {
      alert("Something went wrong... Try to reload this page");
    },
    images: [],
  };

  handleClick = (e) => {
    if (this.ListRef.current && e.target === this.ListRef.current) return;
    this.props.onHandleClickOnImage(e);
  };

  render() {
    return (
      <ul
        className={styles.ImageGallery}
        ref={this.ListRef}
        onClick={this.handleClick}
      >
        {this.props.images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={this.handleClick}
          />
        ))}
      </ul>
    );
  }
}
