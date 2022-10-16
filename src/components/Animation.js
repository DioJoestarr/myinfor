import React from "react";
import { animate, motion } from "framer-motion";
const variants = {
  spin: {
    scale: [1, 1.4, 1.4, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "50%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: 0,
      repeatDelay: 2,
      
      type: "spring"
    },
  },
};
const Animation = () => {

  return (
    <motion.div
      className="box z-50 relative rounded-full"
      
      variants={variants}
    />
  );
};

export default Animation;
