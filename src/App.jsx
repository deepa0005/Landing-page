import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Features from "./components/Features";
import SecondaryCTA from "./components/SecondaryCTA";
import Testimonials from "./components/Testimonials";
import ProductsSections from "./components/ProductsSections";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <ProductsSections />
      <SecondaryCTA />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
// This is the main entry point of the React application.