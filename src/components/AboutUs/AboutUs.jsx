import React from "react";

import styles from "./AboutUs.module.scss";
import { aboutUsContent } from "../../data";

function AboutUs() {
  return (
    <main className={styles.AboutUs}>
      <h1 className={styles.Heading}>About Us</h1>
      <section>
        <div className={styles.Container}>
          {aboutUsContent.map((item) => {
            const { id, title, description, image } = item;
            return (
              <article className={styles.TopContainer} key={id}>
                <div
                  className={
                    id % 2 ? styles.SectionTitle : styles.SectionTitleRight
                  }
                >
                  <h3 className={styles.Title}>{title}</h3>
                </div>
                <span className={styles.Text}>{description}</span>
                <div className={styles.ImageContainer}>
                  <img src={image} alt={title} />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
