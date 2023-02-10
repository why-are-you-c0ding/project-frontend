import styled from "@emotion/styled";

export const SellOptionImgWrapper = styled.div`
  .upload__image-wrapper {
    width: 20rem;
    height: 20rem;

    display: flex;
    justify-content: center;
    align-items: center;

    .inputBtn {
      border: 4px dashed rgba(0, 0, 0, 0.5);
      cursor: pointer;

      width: 100%;
      height: 100%;

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

        & > button {
        }

        & > button:first-of-type {
          margin-right: 1rem;
        }
      }
    }
  }
`;
