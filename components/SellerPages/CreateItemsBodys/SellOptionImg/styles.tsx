import styled from "@emotion/styled";

export const SellOptionImgWrapper = styled.div`
  .upload__image-wrapper {
    width: 16rem;

    display: flex;
    justify-content: center;
    align-items: center;

    .inputBtn {
      border: 4px dashed rgba(0, 0, 0, 0.5);
      cursor: pointer;

      width: 100%;
      height: 16rem;

      font-size: 1rem;

      & > span {
        color: rgba(0, 0, 0, 0.4);
        font-size: 14px;
      }
    }

    .image-item {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .image-item__btn-wrapper {
        margin-top: 1rem;

        & > button:first-of-type {
          margin-right: 1rem;
        }
      }
    }
  }
`;

export const EditBtn = styled.button`
  width: 5rem;
  height: 2rem;
  font-size: 0.8rem;

  background-color: #ececec;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
    border: transparent;
  }
`;
