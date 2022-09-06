import styled from "@emotion/styled";

export const Wrapper = styled.section`
`

export const TitleContainer = styled.section`
    margin: 2.5rem 0 auto;
    max-width: 80rem;
    padding: 0 2.5rem;
    height:2.5rem;
`

export const TitleBox = styled.section`
  margin:0 auto;
  padding:0;
`


export const Title = styled.div`
  font-size:1.5rem;
  line-height: 1.5rem;
  margin:0;
  padding:0;
`

export const SubTitle = styled.div`
  font-size: 0.8rem;
  line-height: 1rem;
  color:gray;
  font-weight: lighter;
  margin:0;
  padding:0;
`

export const ItemContainer = styled.div`
  max-width: 100rem;
  padding:1.8rem 1.8rem;
  margin:0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(1,minmax(auto,auto));
  grid-gap:1rem;
`

export const ItemBox = styled.div`
  width: 100%;
  height: 28rem;
`

export const Item =styled.div`
  width: 18rem;
  height: 18rem;
  border-radius: 1rem;
  margin: auto;
  display: flex;
 `
export const Itemdetail= styled.div`
  padding: 1rem;
`


export const ItemName = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  text-decoration: underline;
  margin-bottom: 0.5rem;
`;

export const ItemFullName = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const ItemPrice = styled.div`
  font-weight: bold;
`;

export const RightPrice = styled.div`
  font-size: 0.75rem;
  color: gray;
`;