import React from "react";
import { Bar } from "./style";
import { useScroll, useSpring } from "framer-motion";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <Bar style={{ scaleX }}></Bar>;
}

export default ProgressBar;
