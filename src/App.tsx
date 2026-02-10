import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "./components/Carousel/Carousel";
import BottomLine from "./components/BottomLine";
import LayeredImage from "./components/LayeredImage";

import img1 from "./assets/1.jpg";
//import logo from "./assets/logo_final_invert_16_centered.png";
import logo from "./assets/DARUJTE_2_16.png";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";

function App() {
  return (
    <div className="">
      <div className="lg:h-screen flex flex-col ">
        <Header />
        <div className="pl-10 pr-10 lg:pl-60 lg:pr-60 overflow-hidden">
          <a href="#support_us">
            <Carousel timerCD={5000}>
              <LayeredImage img={img1} overlay={logo} />
              <LayeredImage img={img2} overlay={logo} />
              <LayeredImage img={img3} overlay={logo} />
            </Carousel>
          </a>
        </div>

        <BottomLine />
      </div>
      <Footer />
    </div>
  );
}

export default App;
