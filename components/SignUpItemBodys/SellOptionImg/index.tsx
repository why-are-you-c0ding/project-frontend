import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { SellOptionImgWrapper } from "@components/SignUpItemBodys/SellOptionImg/styles";

const SellOptionImg = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    setImages(imageList as never[]);
  };

  console.log(images);

  return (
    <SellOptionImgWrapper>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {images.length === 0 && (
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                className={"inputBtn"}
              >
                사진을 입력해주세요. <br />
                <span>(jpeg 형식만 가능, 1:1 비율을 권장)</span>
              </button>
            )}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt={image.name} width="90%" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>수정하기</button>
                  <button onClick={() => onImageRemove(index)}>삭제하기</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </SellOptionImgWrapper>
  );
};

export default SellOptionImg;
