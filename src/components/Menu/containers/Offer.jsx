import React from "react";

import styles from "../Menu.module.scss";

function Offer({ menuItems, isActive }) {
  // console.log(menuItems[0].category);
  return (
    <section className={styles.MenuItemContainer}>
      {menuItems
        .filter((menuItem) => menuItem.category === isActive)
        .map((item) => {
          const { price, name, id } = item;
          return (
            <div className={styles.MenuItem} key={id}>
              <span className={styles.Text}>{name}</span>
              <span className={styles.Price}>$ {price}</span>
            </div>
          );
        })}
    </section>
  );
}

export default Offer;
