import React, { useState } from "react";
import "../styles/slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import avengers from "../data/avengers";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handlePrev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + avengers.length) % avengers.length);
  };

  const handleNext = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % avengers.length);
  };

  return (
    <div
      className="slider"
      style={{ background: avengers[index].background }}
    >
      {/* LEFT BUTTON */}
      <button className="arrow left-arrow" onClick={handlePrev}>
        <FaChevronLeft size={28} />
      </button>

      {/* IMAGES */}
      <div className="slider-images">
        {avengers.map((hero, i) => {
          const offset = (i - index + avengers.length) % avengers.length;

          let x = 0,
            y = 0,
            scale = 1,
            opacity = 1,
            blur = "none",
            zIndex = 1;

          if (offset === 0) {
            x = 0;
            scale = 1.4;
            zIndex = 3;
          } else if (offset === 1) {
            x = 220;
            y = -80;
            scale = 0.9;
            opacity = 0.4;
            blur = "blur(3px)";
            zIndex = 2;
          } else if (offset === avengers.length - 1) {
            x = -220;
            y = 80;
            scale = 0.7;
            opacity = 0.4;
            blur = "blur(6px)";
            zIndex = 2;
          } else {
            opacity = 0;
            blur = "blur(10px)";
            zIndex = 0;
          }

          return (
            <img
              key={i}
              src={hero.img}
              alt={hero.name}
              className="alien-img"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                opacity,
                filter: blur,
                zIndex,
              }}
            />
          );
        })}
      </div>

      {/* RIGHT BUTTON */}
      <button className="arrow right-arrow" onClick={handleNext}>
        <FaChevronRight size={28} />
      </button>

      {/* TEXT SECTION */}
      <div className="slider-info-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="slider-info"
            initial={{ y: direction === "next" ? -80 : 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction === "next" ? 80 : -80, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>{avengers[index].name}</h1>
            <p>{avengers[index].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slider;