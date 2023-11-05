import React, { useEffect, useState } from "react";
import { ChangingText } from "./TextChangeStyle";

function TextChange({ words, interval = 2000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, interval);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [interval, words]);
  
    return <ChangingText>{words[currentIndex]}</ChangingText>;
  };

export default TextChange;
