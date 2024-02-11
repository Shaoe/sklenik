import { ReactNode, useEffect, useState } from "react";
import "./Carousel.css";

interface Props {
  children: ReactNode[];
  controls?: boolean;
  timerCD?: number;
}

const Carousel = ({ children, controls, timerCD }: Props) => {
  const [counter, setCounter] = useState(1);
  const [mousedOver, setMousedOver] = useState(false);

  useEffect(() => {
    if (timerCD) {
      const interval = setInterval(() => {
        if (!mousedOver) {
          handleNext();
        } else {
          clearInterval(interval);
        }
      }, timerCD);
      return () => clearInterval(interval);
    }
  });

  const handleMouse = () => {
    setMousedOver(!mousedOver);
  };

  const handleNext = () => {
    if (counter !== children.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handlePre = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    } else {
      setCounter(children.length);
    }
  };

  const activeSlide = children.map((item, index) => (
    <div className={counter - 1 === index ? "show" : "not-show"} key={index}>
      {item}
    </div>
  ));
  return (
    <div onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
      {activeSlide}
      {controls && (
        <>
          <button className="prev" onClick={handlePre}>
            &#10094;
          </button>
          <button className="next" onClick={handleNext}>
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
