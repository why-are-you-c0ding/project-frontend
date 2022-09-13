import styled from "@emotion/styled";

export const Wrapper = styled.section``;

export const TitleContainer = styled.section`
  margin: 2.5rem 0 auto;
  max-width: 80rem;
  padding: 0 2.5rem;
  height: 2.5rem;
`;

export const TitleBox = styled.section`
  margin: 0 auto;
  padding: 0;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 769px) {
    font-size: 1.7rem;
  }
`;

export const SubTitle = styled.div`
  font-size: 0.8rem;
  line-height: 1rem;
  color: gray;
  font-weight: lighter;
  margin: 0;
  padding: 0.3rem 0.3rem;

  @media screen and (max-width: 769px) {
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
  }
`;

export const ItemContainer = styled.div`
  max-width: 100rem;
  padding: 1.8rem 1.8rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(1, minmax(1, auto));
  grid-gap: 1rem;

  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    margin-left: 3rem;
  }
`;

export const ItemBox = styled.div`
  width: 100%;
  height: 28rem;
`;

export const Item = styled.div`
  width: 18rem;
  height: 18rem;
  border-radius: 1rem;
  margin: auto;
  display: flex;
`;
export const Itemdetail = styled.div`
  padding: 1rem;
`;

export const ItemName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-decoration: underline;
`;

export const ItemFullName = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ItemPrice = styled.div`
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const RightPrice = styled.div`
  font-size: 0.8rem;
  color: gray;
`;

export const More = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const MoreBtn = styled.div`
  padding: 1rem 1.3rem;
  border-radius: 20px;
  border: 1px solid #d6c9c9;
  width: 3.8rem;
  height: 1.7rem;
  display: flex;
  align-content: center;
  justify-content: center;
  color: #6b5151;
`;
