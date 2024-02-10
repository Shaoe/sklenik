interface Props {
  img: string;
  overlay: string;
}

const LayeredImage = (props: Props) => {
  const { img, overlay } = props;

  return (
    <div className="container mx-auto relative">
      <img src={img} alt="" className="w-full h-auto" />
      <div className=" w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4">
        <img src={overlay} />
      </div>
    </div>
  );
};

export default LayeredImage;
