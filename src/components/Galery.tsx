import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import MyModal from "./modal/Modal";

import Carousel from "./Carousel/Carousel";

const Galery = () => (
  <div id="galeria" className="">
    <p className=" font-bold">FOTOGALÉRIA</p>
    <div className="grid grid-cols-2">
      <p className="font-bold lg:pt-5">2021</p>
      <MyModal
        title="2021"
        wrap={<img src={img1} className="w-full p-1 lg:p-5" />}
      >
        <Carousel controls>
          <img src={img1} alt="" className="w-full h-auto" />
          <img src={img2} alt="" className="w-full h-auto" />
          <img src={img3} alt="" className="w-full h-auto" />
        </Carousel>
      </MyModal>

      <p className="font-bold lg:pt-5">2022</p>
      <MyModal
        title="2022"
        wrap={<img src={img2} className="w-full p-1 lg:p-5" />}
      >
        <Carousel controls>
          <img src={img1} alt="" className="w-full h-auto" />
          <img src={img2} alt="" className="w-full h-auto" />
          <img src={img3} alt="" className="w-full h-auto" />
        </Carousel>
      </MyModal>

      <p className="font-bold lg:pt-5">2023</p>
      <MyModal
        title="2023"
        wrap={<img src={img3} className="w-full p-1 lg:p-5" />}
      >
        <Carousel controls>
          <img src={img1} alt="" className="w-full h-auto" />
          <img src={img2} alt="" className="w-full h-auto" />
          <img src={img3} alt="" className="w-full h-auto" />
        </Carousel>
      </MyModal>
    </div>
  </div>
);

export default Galery;
