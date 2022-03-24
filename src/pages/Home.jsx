import React from "react";

import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";

function Home() {
  return (
    <div>
      <Hero />
      <Menu />
      <Gallery />
    </div>
  );
}

export default Home;
