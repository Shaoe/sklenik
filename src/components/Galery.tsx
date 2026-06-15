import YearPhotoAlbum from "./YearPhotoAlbum";

const Galery = () => {
  return (
    <div id="galeria" className="space-y-6">
      <p className="font-bold">FOTOGALÉRIA</p>

      <YearPhotoAlbum year={2021} />

      <YearPhotoAlbum year={2022} />

      <YearPhotoAlbum year={2023} />

      <YearPhotoAlbum year={2024} />

      <YearPhotoAlbum year={2025} />
      <div />
    </div>
  );
};

export default Galery;
