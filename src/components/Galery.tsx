import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const Galery = () => (
  <div id="galeria" className="">
    <p className=" font-bold">FOTOGALÉRIA</p>
    <div className="grid p-2 grid-cols-2">
      <p className="font-bold p-1 lg:p-5">2021</p>
      <img src={img1} className="w-full p-1 lg:p-5" />
      <p className=" font-bold p-1 lg:p-5">2022</p>
      <img src={img2} className="w-full p-1 lg:p-5" />
      <p className=" font-bold p-1 lg:p-5">2023</p>
      <img src={img3} className="w-full p-1 lg:p-5" />
    </div>
  </div>
);

export default Galery;
