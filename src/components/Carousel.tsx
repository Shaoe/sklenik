import { useEffect, useState } from "react";
import img1 from "../assets/1_logo.jpg";
import img2 from "../assets/2_logo.jpg";
import img3 from "../assets/3_logo.jpg";
// import sklenikLogo from "../assets/logo_final.png";

const Carousel = () => {
  const timerCD = 5000;
  const [state, setState] = useState(1);
  const [mousedOver, setMousedOver] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(
      () =>
        setState((old) => {
          if (old === 3) return 1;
          else return old + 1;
        }),
      timerCD
    );
    console.log(state);
    if (mousedOver) return () => clearTimeout(timerId);

    const div = document.getElementById("carousel");
    div?.scrollTo({
      left: document.getElementById(`slide${state}`)?.offsetLeft,
    });
  }, [state, mousedOver]);

  return (
    <div
      id="carousel"
      className="carousel w-full"
      onMouseOver={() => setMousedOver(true)}
      onMouseOut={() => setMousedOver(false)}
    >
      <div id="slide1" className="carousel-item relative w-full">
        {/* <div className="relative"> */}
        <img src={img1} className="w-full" />
        {/* <img src={sklenikLogo} className="w-1/3 lg:w-1/5" /> */}
        {/* </div> */}
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
      </div>
    </div>
  );
};

export default Carousel;
