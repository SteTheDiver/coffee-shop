import React, { useState } from "react";

import styles from "./CoffeeList.module.scss";
import { coffeeItems } from "../../data";

function Coffee() {
  const [showAll, setShowAll] = useState(5);
  const [ShowButton, setShowButton] = useState(true);

  const handleShowMore = () => {
    setShowAll(coffeeItems.length);
    setShowButton(false);
  };

  return (
    <main className={styles.CoffeeList}>
      <header>
        <h1 className={styles.Heading}>Our Coffee</h1>
      </header>

      <section className={styles.Container}>
        {coffeeItems.slice(0, showAll).map((item) => {
          const { name, id, price, image, description, region } = item;
          return (
            <section key={id} className={styles.SingleCoffee}>
              <header className={styles.HeaderItem}>
                <img className={styles.Image} src={image} alt={name} />
                <div className={styles.Info}>
                  <span className={styles.Title}>Name: {name}</span>
                  <span className={styles.Title}>Country: {region}</span>
                  <span className={styles.Title}>Price: $ {price}</span>
                </div>
              </header>
              <div className={styles.Description}>
                <span className={styles.DescriptionText}>{description}</span>
              </div>
            </section>
          );
        })}
        {ShowButton ? (
          <button className={styles.Button} onClick={handleShowMore}>
            Show more
          </button>
        ) : null}
      </section>
    </main>
  );
}

export default Coffee;
