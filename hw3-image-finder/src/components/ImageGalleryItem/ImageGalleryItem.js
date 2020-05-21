import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({
  image: {
    id = Date.now,
    webformatURL = "https://www.gsb.stanford.edu/sites/gsb/files/resources/internetbroken_0.gif",
    largeImageURL = "https://www.gsb.stanford.edu/sites/gsb/files/resources/internetbroken_0.gif",
    tags = "image not found",
  },
  onClick,
}) => (
  <li key={id} className={styles.ImageGalleryItem}>
    <img
      onClick={(e) => onClick(e)}
      src={webformatURL}
      data-url={largeImageURL}
      alt={tags}
      className={styles.ImageGalleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
