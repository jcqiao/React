import React from "react";
import Cards from "../components/card/cards";
import HeroSection from "../components/heroSection";
import Footer from "../components/footer/footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
