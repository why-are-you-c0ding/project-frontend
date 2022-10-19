import React, { CSSProperties, useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Post = (props: any) => {
  const address = props.address;
  const setAddress = props.setAddress;

  const onCompletePost = (data: any) => {
    console.log(data.address);
    setAddress(data.address);
  };

  const postCodeStyle: CSSProperties = {
    display: "block",
    position: "absolute",
    top: "20%",
    width: "400px",
    height: "400px",
    padding: "7px",
    zIndex: 100,
  };

  return (
    <div>
      <DaumPostcode
        style={postCodeStyle}
        autoClose
        onComplete={onCompletePost}
      />
    </div>
  );
};

export default Post;
