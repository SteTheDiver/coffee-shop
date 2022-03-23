import React from "react";

import styles from "../Menu.module.scss";

function Categories({ categories, filterItems, isActive }) {
  return (
    <section className={styles.ButtonContainer}>
      {categories.map((category, index) => {
        return (
          <button
            className={
              isActive === category ? styles.ButtonActive : styles.Button
            }
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
}

export default Categories;
