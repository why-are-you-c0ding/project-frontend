import styled from '@emotion/styled';


export const Wrapper =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  margin-top: 0.2rem;
`

export const Header = styled.header`
  font-weight: bolder;
  font-size: 40px;
  letter-spacing: -0.75px;
  margin-top: 30px;
  margin-bottom: 30px;
`;


export const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`;


export const Label = styled.label`
  margin-bottom: 16px;
  & > span {
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
  }
  
  & > button{
    width: 4rem;
    height:1.5rem;
    border-radius: 5px;
    background-color: #e8e1e1;
    color : black;
    border: transparent;
    text-align: center;
    margin: 10px 20px 10px 2rem;
    font-weight: bold;
    transition: all 0.2s ;
    :hover{
      margin-top: 15px;
      margin-bottom: 5px;
    }
  }
`;


export const Input = styled.input`
  position: relative;
  box-sizing: border-box;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #ebebeb;
  width: 25rem;
  height: 2rem;
  outline: none;
  font-size: 1rem;
  padding: 10px 0 14px;
  margin-bottom:30px;
  :focus {
    border-bottom: 2px solid black;

  }
  ::placeholder {
    font-size: 0.9rem;
  }

`;


export const SignUpBtn = styled.button`
  width: 25rem;
  height: 4rem;
  background-color: blueviolet;
  color : white;
  border: transparent;
  border-radius: 20px;
  text-align: center;
  outline: none;
  margin-top: 1rem;
  font-size:1.5rem;
  font-weight: bold;
`;
