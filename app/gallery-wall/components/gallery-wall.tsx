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
import styles from "./styles.module.css";

interface GalleryWallProps {
  picturePropsList: FramedPictureProps[];
}

export default function GalleryWall({ picturePropsList }: GalleryWallProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setCurrentImageIndex(null);
  };

  const showPrevious = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const showNext = () => {
    if (currentImageIndex !== null && currentImageIndex < picturePropsList.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const downloadImage = () => {
    if (currentImageIndex !== null) {
      const a = document.createElement('a');
      a.href = picturePropsList[currentImageIndex].imageSrc;
      a.download = picturePropsList[currentImageIndex].imageSrc.split('/').pop()!;
      a.click();
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center xl:py-20 xl:p-40 gap-x-10 gap-y-20">
      {picturePropsList.map((pictureProps, index) => (
        <FramedPicture
          key={pictureProps.nameTag + index.toString()}
          {...pictureProps}
          onClick={() => openImage(index)}
        />
      ))}

      {currentImageIndex !== null && (
        <div className={styles.lightboxOverlay} onClick={closeImage}>
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <img src={picturePropsList[currentImageIndex].imageSrc} alt="Current" className={styles.lightboxImage} />
            <button className={styles.lightboxButton} onClick={showPrevious}>Previous</button>
            <button className={styles.lightboxButton} onClick={showNext}>Next</button>
            <button className={styles.lightboxButton} onClick={downloadImage}>Download</button>
            <button className={styles.lightboxButton} onClick={closeImage}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}