// "use client";

// import FramedPicture, { FramedPictureProps } from "./framed-picture";

// interface GalleryWallProps {
//   picturePropsList: FramedPictureProps[];
// }

// export default function GalleryWall(props: GalleryWallProps) {
//   return (
//     <div className="flex flex-wrap justify-between items-center xl:py-20 xl:p-40 gap-x-10 gap-y-20">
//       {props.picturePropsList.map((props, index) => (
//         <FramedPicture
//           key={props.nameTag + index.toString()}
//           imageSrc={props.imageSrc}
//           nameTag={props.nameTag}
//           timeTag={props.timeTag}
//           rotate={props.rotate}
//           onClick={() => {
//             // Redirect
//             if (props.herf != "" && props.herf) {
//               window.open(props.herf, "_blank");
//             } else {
//               window.open(props.imageSrc, "_blank");
//             }
//           }}
//         ></FramedPicture>
//       ))}
//     </div>
//   );
// }

"use client";
import React, { useState } from 'react';
import FramedPicture, { FramedPictureProps } from "./framed-picture";
import Lightbox from 'react-modal-image';

interface GalleryWallProps {
  picturePropsList: FramedPictureProps[];
}

export default function GalleryWall({ picturePropsList }: GalleryWallProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>("");

  const openLightbox = (imageSrc: string) => {
    console.log('Opening lightbox for:', imageSrc);  // 添加日志
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-wrap justify-between items-center xl:py-20 xl:p-40 gap-x-10 gap-y-20">
      {picturePropsList.map((pictureProps, index) => (
        <FramedPicture
          key={pictureProps.nameTag + index.toString()}
          {...pictureProps}
          onClick={() => openLightbox(pictureProps.imageSrc)}
        />
      ))}

      {isOpen && (
        <Lightbox
          small={currentImage}
          large={currentImage}
          alt="Showing image in modal"
          onClose={() => {
            console.log('Closing lightbox');  // 添加日志
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
}
