import styled from "@emotion/styled";

export const Wrapper = styled.section`
  max-width: 90vh;
  display: block;
  margin: 5rem auto 5rem;
`;

export const TitleBox = styled.div`
  padding: 1rem;
  max-width: 90vh;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 0.3rem;
`;

export const SubTitle = styled.div`
  color: gray;
  font-size: 0.8rem;
`;

export const ItemBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
`;

export const ItemList = styled.div`
  width: 100%;
  height: 28rem;
`;


export const ItemImg = styled.div`
  background-color: #f5f5f5;
  width: 18rem;
  height: 18rem;
  border-radius: 1rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & img{
    width: 18rem;
    height: 18rem;
  }
`;

export const ItemSub = styled.div`
  padding: 1rem;
`;

export const ItemName = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  text-decoration: underline;
  margin-bottom: 1rem;
`;

export const ItemFullName = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ItemPrice = styled.div`
  font-weight: bolder;
`;

export const RightPrice = styled.div`
  font-size: 0.8rem;
  color: gray;
`;