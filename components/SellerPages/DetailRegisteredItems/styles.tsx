import styled from "@emotion/styled";
import { SignUpBtn } from "@pages/SignUp/styles";

export const ItemInfosWrapper = styled.div`
  padding: 0 4rem;

  @media (max-width: 1000px) {
    padding: 0 2rem;
  }

  @media (max-width: 800px) {
    padding: 0;
  }
`;

export const ItemImg = styled.div`
  & > img {
    width: 50%;
    margin: 0 auto;

    @media (max-width: 769px) {
      width: 70%;
    }
  }
`;

export const ItemInfo = styled.div`
  margin-top: 1rem;

  & > div {
    & > span:first-of-type {
      font-weight: 500;
      font-size: 1.2rem;
    }

    margin-bottom: 0.4rem;
  }

  & > div:not(:first-of-type) {
    display: flex;
    flex-direction: column;
  }

  // 상품멍
  & > div:first-of-type {
    & > div:last-of-type {
      & > span:last-of-type {
        color: gray;
        font-size: 0.8rem;
        margin-left: 0.1rem;
      }
    }
  }
`;

export const StocksWrapper = styled.div`
  & > div:first-of-type {
    font-weight: 500;
    font-size: 1.2rem;

    display: flex;
    align-items: center;
    gap: 0.1rem;
  }
`;

export const MangeStocksBtn = styled(SignUpBtn)`
  width: 4rem;
  height: 1.6rem;

  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

export const ModifyAllBtn = styled(MangeStocksBtn)`
  width: 6rem;
`;

export const CompleteBtnWrapper = styled.div`
  text-align: center;

  margin-bottom: 2rem;
`;
export const CompleteBtn = styled(MangeStocksBtn)`
  width: 10rem;
  height: 2.8rem;

  font-size: 1.2rem;
`;
