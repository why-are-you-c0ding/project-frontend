import styled from "@emotion/styled";

export const Wrapper = styled.div`
  @media (max-width: 769px) {
    margin-top: 5rem;
    padding: 2rem 2rem;
  }
`;

export const OrderHistoryItem = styled.div`
  display: flex;

  border: 2px solid #cccccc;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;

  cursor: pointer;

  & > div {
    width: 16%;
  }

  // 이미지
  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 769px) {
      width: 20%;
    }

    & > img {
      width: 90%;
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
      width: 20%;
    }

    & > div:first-of-type {
      margin-bottom: 0.4rem;
      display: flex;
      flex-direction: column;

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

  // 상품 가격
  & > div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 769px) {
      width: 13%;
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

  // 상품 개수
  & > div:nth-of-type(4) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > span:first-of-type {
      font-size: 1.2rem;
      font-weight: bold;

      @media (max-width: 769px) {
        font-size: 1rem;
      }
    }
    & > span:last-of-type {
      @media (max-width: 769px) {
        font-size: 0.8rem;
      }
    }

    @media (max-width: 769px) {
      width: 13%;
    }
  }
  // 상품 상태
  & > div:nth-of-type(5) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > span:first-of-type {
      font-size: 1.2rem;
      font-weight: bold;

      @media (max-width: 769px) {
        font-size: 1rem;
      }
    }
    & > span:last-of-type {
      @media (max-width: 769px) {
        font-size: 0.8rem;
      }
    }

    @media (max-width: 769px) {
      width: 13%;
    }
  }

  // 상품 옵션이름
  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > span:first-of-type {
      font-size: 1.2rem;
      font-weight: bold;

      @media (max-width: 769px) {
        font-size: 1rem;
      }
    }
    & > span:last-of-type {
      @media (max-width: 769px) {
        font-size: 0.8rem;
      }
    }

    @media (max-width: 769px) {
      width: 21%;
    }
  }
`;
