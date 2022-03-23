import React, { useState } from "react";
import styles from "./Hero.module.scss";
import Carousel from "react-bootstrap/Carousel";

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={styles.Hero}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div
            className={styles.HeroBackground}
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
            }}
          ></div>
          <Carousel.Caption>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                height: "300px",
              }}
            >
              <h1 className={styles.Title}>The Coffee Shop</h1>
              <h2 className={styles.SubTitle}>
                Your favourite coffee shop next door
              </h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className={styles.HeroBackground}
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1574783756547-258b3c720fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
            }}
          ></div>
          <Carousel.Caption>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                height: "300px",
              }}
            >
              <h1 className={styles.Title}>Our Sunday Brunch</h1>
              <h2 className={styles.SubTitle}>
                Come to enjoy our nice brunch!
              </h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
