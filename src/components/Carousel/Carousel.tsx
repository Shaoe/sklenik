import { ReactNode, useEffect, useState } from "react";
import "./Carousel.css";

interface Props {
  children: ReactNode[];
}

const Carousel = (props: Props) => {
  const content = props.children;
  const timerCD = 5000;
  const [counter, setCounter] = useState(1);
  const [mousedOver, setMousedOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!mousedOver) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, timerCD);
    return () => clearInterval(interval);
  });

  const handleMouse = () => {
    setMousedOver(!mousedOver);
  };

  const handleNext = () => {
    if (counter !== content.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const activeSlide = content.map((item, index) => (
    <div className={counter - 1 === index ? "show" : "not-show"} key={index}>
      {item}
    </div>
  ));

  return (
    <div onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
      {activeSlide}
    </div>
  );
};

export default Carousel;
