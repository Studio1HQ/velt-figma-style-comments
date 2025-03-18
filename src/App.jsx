import React from "react";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import VeltToolbar from "./components/VeltToolbar";
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          AI<span>Product</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <button className="cta-button">Get Started</button>
        </div>
      </nav>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
      <VeltToolbar />
    </div>
  );
}

export default App;
