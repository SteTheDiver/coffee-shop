import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "./Contacts.module.scss";

function Contacts() {
  return (
    <main className={styles.Contacts}>
      <header>
        <h1 className={styles.Title}>Contact</h1>
      </header>
      <p className={styles.Subheding}>
        We are looking forward to receive your calls, messages and pigeons if
        you feel like training one and use it as a messanger. Our staff will not
        leave any communication device ungarded during our opening ours, unless
        there is a busy moment our answer will come shortly! <br />
        <b>
          Contact us 24 hours in advance if you want to make a reservation over
          6 people!
        </b>
      </p>
      <div className={styles.Container}>
        <section className={styles.Info}>
          <div className={styles.HoursWrapper}>
            <h4>When we are open</h4>
            <div className={styles.Hours}>
              <span className={styles.Text}>Mon - Fri </span>
              <span className={styles.Text}>7.00 - 19.00</span>
              <span className={styles.Text}>Sat - Sun </span>
              <span className={styles.Text}>9.00 - 16.00</span>
            </div>
          </div>
          <div className={styles.AddressWrapper}>
            <h4>Where we are</h4>
            <span className={styles.Text}>
              Street with no name 8, 20158 A country
            </span>
          </div>
          <div className={styles.ContactWrapper}>
            <h4>How to get in touch</h4>
            <span className={styles.Text}>
              Phone:{" "}
              <a className={styles.Phone} href=" tel:123456789">
                123456789
              </a>
            </span>
            <span className={styles.Text}>
              Email:{" "}
              <a className={styles.Email} href="mailTo">
                www.email.com
              </a>
            </span>
            <div className={styles.Social}>
              <a href="/">
                <FacebookIcon className={styles.IconLink} />
              </a>
              <a href="/">
                <InstagramIcon className={styles.IconLink} />
              </a>
            </div>
          </div>
        </section>
        <section className={styles.Map}>
          <div style={{ width: "100%" }}>
            <iframe
              style={{
                width: "100%",
                height: "500px",
                frameBorder: "0",
                scrolling: "no",
                marginHeight: "0",
                marginWidth: "0",
              }}
              src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=330%20Royal%20Hawaiian%20Ave,%20Honolulu,%20HI%2096815,%20Stati%20Uniti+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/truck-gps/">transport gps</a>
            </iframe>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contacts;
