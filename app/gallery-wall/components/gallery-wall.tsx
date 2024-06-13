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

// 必要的库和样式引入
"use client";
import React, { useState } from 'react';
import FramedPicture, { FramedPictureProps } from "./framed-picture";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';  // 确保你有这个CSS文件

interface GalleryWallProps {
  picturePropsList: FramedPictureProps[];
}

export default function GalleryWall({ picturePropsList }: GalleryWallProps) {
  // 状态管理
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-between items-center xl:py-20 xl:p-40 gap-x-10 gap-y-20">
      {picturePropsList.map((pictureProps, index) => (
        <FramedPicture
          key={pictureProps.nameTag + index.toString()}
          {...pictureProps}  // 展开其他所有props
          onClick={() => {
            setPhotoIndex(index);  // 设置当前图片索引
            setIsOpen(true);  // 打开lightbox
          }}
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={picturePropsList[photoIndex].imageSrc}
          nextSrc={picturePropsList[(photoIndex + 1) % picturePropsList.length].imageSrc}
          prevSrc={picturePropsList[(photoIndex + picturePropsList.length - 1) % picturePropsList.length].imageSrc}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + picturePropsList.length - 1) % picturePropsList.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % picturePropsList.length)
          }
        />
      )}
    </div>
  );
}
