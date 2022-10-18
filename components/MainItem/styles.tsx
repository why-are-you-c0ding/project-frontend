import styled from "@emotion/styled";

export const Wrapper = styled.section`
  margin: 2rem 4rem;
`;

export const TitleContainer = styled.section`
  margin-bottom: 2rem;
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(18rem, 1fr));
  grid-gap: 1rem;

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

export const ItemBox = styled.div`
  width: 90%;
  min-height: 25rem;
  max-height: 25rem;

  margin: 0 auto;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 769px) {
    max-width: 80%;
    min-width: 80%;
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const ItemImg = styled.div`
  & img {
    width: 15rem;
    height: 15rem;
  }
`;

export const ItemInfo = styled.div`
  align-self: flex-start;
  margin: 1rem 0;
  padding: 0 1rem;
`;

export const ItemName = styled.div`
  margin-bottom: 0.3rem;

  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
`;

export const ItemPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;
