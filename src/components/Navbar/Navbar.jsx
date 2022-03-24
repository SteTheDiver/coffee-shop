import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import { links } from "../../data";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [active, setActice] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={styles.Navbar}>
      <div className={styles.HeaderContainer}>
        <button className={styles.HamburgerMenu} onClick={toggleLinks}>
          <MenuIcon fontSize="large" className={styles.ActiveMenuIcon} />
        </button>
        <aside
          className={
            showLinks
              ? `${styles.LinksContainer} ${styles.ShowLinksContainer}`
              : styles.LinksContainer
          }
        >
          <ul className={styles.Links}>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li className={styles.Link} key={`menuItem-${id}`}>
                  <Link to={url} className={styles.Item} onClick={toggleLinks}>
                    <span className={styles.Item}>{text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
        <section className={styles.Logo}>
          <Link className={styles.LogoLink} to="/">
            The CoffeeShop
          </Link>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
