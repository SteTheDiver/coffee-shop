import React from "react";

import styles from "./Gallery.module.scss";
import { images } from "../../data";

function Gallery() {
  return (
    <main className={styles.Container}>
      <header>
        <h1 className={styles.Heading}>Gallery</h1>
      </header>
      <div className={styles.GridContainer}>
        {images.map((image) => {
          const { url, id } = image;
          return (
            <div className={styles.ImageContainer} key={id}>
              <img className={styles.Image} src={url} alt="gallery" />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Gallery;
