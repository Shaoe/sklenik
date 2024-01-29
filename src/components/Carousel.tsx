import img1 from "../assets/1_logo.jpg";
import img2 from "../assets/2_logo.jpg";
import img3 from "../assets/3_logo.jpg";
// import sklenikLogo from "../assets/logo_final.png";

const Carousel = () => (
  <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      {/* <div className="relative"> */}
      <img src={img1} className="w-full" />
      {/* <img src={sklenikLogo} className="w-1/3 lg:w-1/5" /> */}
      {/* </div> */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img src={img2} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide3" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img src={img3} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide4" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  </div>
);

export default Carousel;
