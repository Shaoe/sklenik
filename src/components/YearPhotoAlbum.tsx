import React, { useEffect, useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import PhotoAlbum from "react-photo-album";


import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "react-photo-album/styles.css";



interface Props {
  year: number;
}

const YearPhotoAlbum = ({year}: Props) => {
  const thumbnailUrls = importThumbnailsGlob(year)
  const imgUrls = importImagesGlob(year)

  const [thumbnails, updateData] = useState<any>([]);
  useEffect(() => {
    const imgSrcPromises = thumbnailUrls.map(async src => {
      const dimensions : any = await getHeightAndWidthFromDataUrl(src)
      return {
        src,
        width: dimensions?.width,
        height: dimensions?.height
      }
    })
    Promise.all(imgSrcPromises).then(data => { updateData(data) })
  }, []);


 const slides = imgUrls.map((src) => ({
    src,
    width: 1980,
    height: 1320 
  }))

  const [index, setIndex] = React.useState(-1);  
  return (thumbnails &&
    
    <div id="album" className="">
      <Lightbox
        index={index}
        slides={slides}
        plugins={[Fullscreen, Thumbnails]}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
      <div className="grid grid-cols-2">
      <p className="font-bold lg:pt-5">{year}</p>
        <PhotoAlbum photos={thumbnails} 
         layout="rows"
        //  columns={10}
        targetRowHeight={66}
          spacing={2}
          padding={0}
          onClick={({ index: current }) => setIndex(current)}/>
      </div>
    </div>
  );
};

export default YearPhotoAlbum;

const getHeightAndWidthFromDataUrl = (dataURL: string) => new Promise(resolve => {
  const img = new Image()
  img.onload = () => {
    resolve({
      height: img.height,
      width: img.width
    })
  }
  img.src = dataURL
})

const importThumbnailsGlob = (year: number) => {
switch (year) {
  case 2021:
   return Object.values(
      import.meta.glob(`/src/assets/2021/small/thumbnail/*.{png,jpg,JPG,jpeg,PNG,JPEG}`, {
        eager: true,
        as: "url",
      })
    );
  case 2022:
   return Object.values(
      import.meta.glob(`/src/assets/2022/small/thumbnail/*.{png,jpg,JPG,jpeg,PNG,JPEG}`, {
        eager: true,
        as: "url",
      })
    );
  case 2023:
      return Object.values(
         import.meta.glob(`/src/assets/2023/small/thumbnail/*.{png,jpg,JPG,jpeg,PNG,JPEG}`, {
           eager: true,
           as: "url",
         })
       );
  default:
    return [];
}
}

const importImagesGlob = (year: number) => {
  switch (year) {
    case 2021:
     return Object.values(
        import.meta.glob(`/src/assets/2021/small/*.{png,jpg,JPG,jpeg,PNG,JPEG}`, {
          eager: true,
          as: "url",
        })
      );
    case 2022:
      return Object.values(
          import.meta.glob(`/src/assets/2022/small/*.{png,jpg,JPG,jpeg,PNG,JPEG}`, {
            eager: true,
            as: "url",
          })
        );
    case 2023:
    return Object.values(
        import.meta.glob(`/src/assets/2023/small/*.{png,jpg,JPG,jpeg,PNG,JPEG}`, {
          eager: true,
          as: "url",
        })
      );
    default:
      return [];
  }

}