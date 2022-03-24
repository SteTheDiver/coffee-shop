import React from "react";

import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import Mission from "../components/Mission/Mission";

function Home() {
  return (
    <div>
      <Hero />
      <Menu />
      <Gallery />
      <Mission />
    </div>
  );
}

export default Home;
