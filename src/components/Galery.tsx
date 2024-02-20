import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import MyModal from "./modal/Modal";

import Carousel from "./Carousel/Carousel";

const Galery = () => {
  const gallery2021 = Object.values(
    import.meta.glob("/src/assets/2021/small/*.{png,jpg,JPG,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  );
  const gallery2022 = Object.values(
    import.meta.glob("/src/assets/2022/small/*.{png,jpg,JPG,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  );
  const gallery2023 = Object.values(
    import.meta.glob("/src/assets/2023/small/*.{png,jpg,JPG,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  );

  return (
    <div id="galeria" className="">
      <p className=" font-bold">FOTOGALÉRIA</p>
      <div className="grid grid-cols-2">
        <p className="font-bold lg:pt-5">2021</p>
        <MyModal
          title="2021"
          wrap={<img src={img1} className="w-full p-1 lg:p-5" />}
        >
          <Carousel controls>
            {gallery2021.map((img) => (
              <img src={img} />
            ))}
          </Carousel>
        </MyModal>

        <p className="font-bold lg:pt-5">2022</p>
        <MyModal
          title="2022"
          wrap={<img src={img2} className="w-full p-1 lg:p-5" />}
        >
          <Carousel controls>
            {gallery2022.map((img) => (
              <img src={img} />
            ))}
          </Carousel>
        </MyModal>

        <p className="font-bold lg:pt-5">2023</p>
        <MyModal
          title="2023"
          wrap={<img src={img3} className="w-full p-1 lg:p-5" />}
        >
          <Carousel controls>
            {gallery2023.map((img) => (
              <img src={img} />
            ))}
          </Carousel>
        </MyModal>
      </div>
    </div>
  );
};

export default Galery;
