import React from "react";

import { missionImages } from "../../data";
import styles from "./Mission.module.scss";

function Mission() {
  return (
    <main className={styles.Mission}>
      <h1 className={styles.Title}>How we do it</h1>
      {missionImages.map((item) => {
        const { image, text, id, title } = item;
        return (
          <section key={id} className={styles.Container}>
            <div className={styles.Info}>
              <h2>{title}</h2>
              <span className={styles.Text}>{text}</span>
            </div>
            <div className={styles.ImageContainer}>
              <img src={image} alt="" className={styles.Image} />
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default Mission;
