import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1 className="fade-in">Find Your Dream Space</h1>
          <p className="fade-in">Your next home or workspace is just a scroll away.</p>
          <a href="#services" className="btn">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;