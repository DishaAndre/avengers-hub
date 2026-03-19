import React from "react";
import "../styles/hero.css";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import avengers from "../data/avengers";

const Hero = () => {
  const repeated = [...avengers, ...avengers, ...avengers];

  return (
    <div className="hero">
      <Navbar />

      <motion.div
        className="hero-slider"
        drag="x"
        dragConstraints={{ left: -3000, right: 0 }}
      >
        {repeated.map((hero, i) => (
          <motion.div className="hero-card" key={i}>
            <img src={hero.img} alt={hero.name} />
            <div className="hero-name">{hero.name}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="scroll-indicator">
        ↓ Scroll up
      </div>

    </div>
  );
};

export default Hero;