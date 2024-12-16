import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import AppFlowSteps from "./components/AppFlowSteps";
import QAAccordion from "./components/QAAccordion";
import Testimonial from "./components/Testimonail";
import AppPromo from "./components/AppPromo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Hero />
      <section id="About">
        <About />
      </section>
      {/* <section id="Reviews">
        <Testimonial />
      </section> */}
      <section id="How to use">
        <AppFlowSteps />
      </section>
      <section id="Q&A">
        <QAAccordion />
      </section>
      <AppPromo />
      <Footer />
    </main>
  );
};

export default App;
