import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "./components/Carousel/Carousel";
import BottomLine from "./components/BottomLine";
import LayeredImage from "./components/LayeredImage";

import img1 from "./assets/1.jpg";
import logo from "./assets/logo_final_invert.png";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
// import sklenikLogo from "../assets/logo_final.png";

function App() {
  return (
    <div className="">
      <div className="h-screen flex flex-col">
        <div className="">
          <Header />
        </div>
        <div className="mb-auto pl-40 pr-40 grow">
          <Carousel>
            <LayeredImage img={img1} overlay={logo} />
            <LayeredImage img={img2} overlay={logo} />
            <LayeredImage img={img3} overlay={logo} />
          </Carousel>
        </div>
        {/* <div className="flex-none h-20 w-full bg-base-200 grid place-items-center  absolute bottom-0  z-30">
          logo
        </div> */}

        {/* <div className="">
          <BottomLine />
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
