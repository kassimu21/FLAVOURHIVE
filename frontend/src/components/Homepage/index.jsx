import React from "react";
import Navbar from "../Navbar";
import Hero from "./hero/Hero";
import OurRecipes from "./recipes/OurRecipes";
import Features from "./Features";
import AboutSection from "./About/AboutusSection";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <OurRecipes /> */}
      <Features />
      <AboutSection />
      <Footer />
    </>
  );
};

export default HomePage;
