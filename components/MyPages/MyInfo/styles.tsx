import styled from "@emotion/styled";

export const Wrapper = styled.section`
  padding: 0 2rem 2rem 2rem;
  @media (max-width: 769px) {
    padding: 0 2rem 2rem 2rem;
  }
`;
export const InfoSection = styled.div`
  width: 100%;
  height: fit-content;
`;
export const InfoBox = styled.div`
  width: 100%;
  height: fit-content;
  box-shadow: 0.3em 0.3em 0.7em #b9b9b9;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 2rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 769px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const InfoBoxLeft = styled.div``;
export const InfoBoxRight = styled.div``;

export const InfoDetail = styled.div`
  font-size: 1rem;
  padding: 0.5rem 0 0.5rem 0;
  & :first-child {
    color: gray;
  }
  & :last-child {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const UpdateInfoSection = styled.div`
  width: 100%;
  height: fit-content;
  font-weight: 500;
`;
export const UpdateInfoBtn = styled.button`
  width: 7rem;
  border: 1px black solid;
  border-radius: 8px;
  margin-top: 1rem;
`;

export const UnderLine = styled.div`
  content: "";
  display: block;
  width: 100%; /* 밑줄 길이 조절 */
  border-bottom: 2px solid #f9f9f9;
  margin-top: 2rem;
`;
