import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  padding: 0.5rem 3rem;
`;

export const SideBar = styled.section`
  font-weight: bolder;
  border: 1px solid;
`;

export const RightSide = styled.section`
  border: 1px solid;
  padding: 0 6rem;
  padding-bottom: 1rem;
`;

export const UserProfile = styled.section`
  display: flex;

  gap: 1rem;
  border-radius: 20px;
  padding: 2rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.3);

  margin-top: 2rem;

  & img {
    width: 7rem;
    height: 7rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginId = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Email = styled.span`
  margin-bottom: 0.8rem;
  font-size: 0.9rem;

  color: rgba(0, 0, 0, 0.4);
`;

export const EditBtn = styled.button`
  padding: 1rem 1.3rem;

  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: inherit;
  color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
`;

export const BuyItem = styled.div`
  margin-top: 2rem;

  & > span {
    font-size: 1.3rem;
  }
`;

export const BuyStatus = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin-top: 1rem;
  height: 15vh;

  border: 1px solid;
  border-radius: 10px;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Letter = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.1rem;
`;

export const Count = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const DetailOrder = styled.div`
  margin-top: 2rem;

  & > span {
    font-size: 1.3rem;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    border-top: 2px solid;
    border-bottom: 1px solid;

    margin-top: 1rem;
    padding: 0.6rem 0;

    & span {
      text-align: center;
    }
  }
`;
