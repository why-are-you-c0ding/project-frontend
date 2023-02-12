import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpItem = createAsyncThunk(
  "signUpItem/signUpItem",
  async (data: any) => {
    try {
      const { jwt, itemImg, itemName, information, category, optionGroups } =
        data;

      const formData = new FormData();
      formData.append("images", itemImg[0].file);

      const imageUrl = await axios
        .post("/images", formData, {
          headers: { Authorization: `Bearer ${jwt}` },
        })
        .then((res) => res.data.imageUrl)
        .catch((err) => {
          console.error(err);
          alert("이미지 등록에 실패하였습니다.");
        });

      await axios
        .post(
          "/items",
          { itemName, information, category, optionGroups, imageUrl },
          {
            headers: { Authorization: `Bearer ${data.jwt}` },
          }
        )
        .then(() => {
          alert("상품 등록 성공");
        });
    } catch (err) {
      console.error(err);
    }
  }
);
