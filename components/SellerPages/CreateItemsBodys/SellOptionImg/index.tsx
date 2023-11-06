import React, { useCallback, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import {
  EditBtn,
  SellOptionImgWrapper,
} from "@components/SellerPages/CreateItemsBodys/SellOptionImg/styles";
import { useAppDispatch } from "@redux/hooks";
import { changeItemImg } from "@redux/reducers/createItemsSlice";

const SellOptionImg = () => {
  const maxNumber = 1;
  const dispatch = useAppDispatch();
  const [images, setImages] = useState([]);

  const onChange = useCallback(
    (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
      setImages(imageList as never[]);
      dispatch(changeItemImg(imageList));
    },
    [images],
  );

  return (
    <SellOptionImgWrapper>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        acceptType={["jpg", "jpeg"]}
        maxFileSize={1024 * 1024 * 2}
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
                style={isDragging ? { color: "blue" } : undefined}
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
                  <EditBtn onClick={() => onImageUpdate(index)}>
                    수정하기
                  </EditBtn>
                  <EditBtn onClick={() => onImageRemove(index)}>
                    삭제하기
                  </EditBtn>
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
