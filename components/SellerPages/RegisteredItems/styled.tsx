import styled from "@emotion/styled";
import { SignUpBtn } from "@pages/SignUp/styles";

export const RegisteredItem = styled.div`
  display: flex;

  border: 2px solid #cccccc;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;

  cursor: pointer;

  & > div {
    width: 25%;
  }

  // 이미지
  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 769px) {
      width: 28%;
    }

    & > img {
      width: 90%;
      //min-width: 7rem;
      height: 90%;
    }
  }

  // 상품 정보
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 1rem;

    @media (max-width: 769px) {
      width: 28%;
    }

    & > div:first-of-type {
      margin-bottom: 0.4rem;

      & > span:first-of-type {
        font-size: 1.2rem;
        font-weight: bold;

        @media (max-width: 769px) {
          font-size: 1rem;
        }
      }
      & > span:last-of-type {
        font-size: 0.8rem;
        color: gray;

        @media (max-width: 769px) {
          font-size: 0.6rem;
        }
      }
    }

    & > div:last-of-type {
      font-size: 0.9rem;

      @media (max-width: 769px) {
        font-size: 0.7rem;
      }
    }
  }

  // 가격
  & > div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 769px) {
      width: 22%;
    }

    & > span:first-of-type {
      font-size: 1.2rem;
      font-weight: bold;

      margin-bottom: 0.4rem;

      @media (max-width: 769px) {
        font-size: 0.8rem;
      }
    }
  }

  // 상품 관리 버튼
  & > div:last-of-type {
    & > div {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 769px) {
      width: 22%;
    }
  }
`;

export const ManageItemBtn = styled(SignUpBtn)`
  width: 6rem;
  height: 2.5rem;

  @media (max-width: 769px) {
    width: 5rem;
    height: 2rem;

    font-size: 0.8rem;
  }
`;
