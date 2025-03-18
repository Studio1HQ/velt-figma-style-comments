import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Transform Your Workflow with
          <span className="gradient-text"> AI</span>
        </h1>
        <p>
          Harness the power of artificial intelligence to streamline your
          processes and boost productivity like never before.
        </p>
        <button className="cta-button hero-cta">
          Get Started Free
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="hero-image">
        <div className="gradient-sphere"></div>
      </div>
    </section>
  );
};

export default Hero;
