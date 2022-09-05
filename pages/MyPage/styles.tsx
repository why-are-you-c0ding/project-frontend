import styled from "@emotion/styled";

export const Wrapper = styled.div`
`;

export const SideBar = styled.section`
    font-weight: bolder;
`;

export const RightSide = styled.section`
  min-height: 20rem;
  width: 100%;
`

export const UserProfile = styled.section`
  display: flex;
  gap:2rem;
  border-radius: 20px;
  background-color: #d6abab;
  padding: 3rem 3rem;
  border: 2px solid #d6abab;
  & img{
    width: 7rem;
    height: 7rem;
    border: 1px solid black;
    border-radius: 50%;
  }
`

