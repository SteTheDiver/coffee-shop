import React from "react";
import styles from "./Footer.module.scss";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";


function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Grid}>
        <section className={styles.Details}>
          <span className={styles.Text}>The CoffeeShop</span>
          <span className={styles.Text}>The street for The CoffeeShop</span>
          <span className={styles.Text}>ICO: 1234562</span>
        </section>
        <section className={styles.Contacts}>
          <a href="tel:+00123456789" className={styles.Phone}>
            <LocalPhoneIcon className={styles.Icon} />
            <span className={styles.Link}>+00 123.456.789</span>
          </a>
          <a className={styles.Email} href="mailTo">
            <AlternateEmailIcon className={styles.Icon} />
            <span className={styles.Link}>www.email.com</span>
          </a>
          <div className={styles.Social}>
            <a href="">
              <FacebookIcon className={styles.IconLink} />
            </a>
            <a href="">
              <InstagramIcon className={styles.IconLink} />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
