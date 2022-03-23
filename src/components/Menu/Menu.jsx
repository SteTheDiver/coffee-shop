import React from "react";
import { useState } from "react";

import { menuItems } from "../../data";
import Categories from "./containers/Categories";
import Offer from "./containers/Offer";
import styles from "./Menu.module.scss";

const allCategories = [
  ...new Set(menuItems.map((menuItem) => menuItem.category)),
];

console.log(allCategories);

function Menu() {
  const [items, setItems] = useState(menuItems);
  const [categories, setCategories] = useState(allCategories);
  const [isActive, setIsActive] = useState("Drink");

  const filterItems = (category) => {
    const newItems = menuItems.filter((item) => item.category === category);
    setItems(newItems);
    setIsActive(category);
  };

  return (
    <main className={styles.Menu}>
      <header>
        <h1 className={styles.Title}>Our Offer</h1>
      </header>
      <Categories
        categories={categories}
        filterItems={filterItems}
        isActive={isActive}
      />
      <Offer menuItems={items} isActive={isActive} />
    </main>
  );
}

export default Menu;
