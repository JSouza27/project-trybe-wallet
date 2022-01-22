import styled from 'styled-components';

export const App = styled.section`
  background-color: #F1F3F6;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const FormLogin = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormContent = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageLogo = styled.img`
  height: 6rem;
  margin-bottom: 1rem;
  width: 6rem;
`;

export const SignIn = styled.h1`
  color: #3D6670;
  font-size: 1.87rem;
  font-weight: 900;
  margin: 0;
`;

export const InputContainer = styled.section`
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15rem;
  justify-content: center;
  margin-top: 3.12rem;
  width: 21.43rem;
`;

export const InfoFields = styled.section`
  align-items: start;
  background-color: white;
  border-bottom: 1px solid #DDDDDD;
  display: flex;
  flex-direction: column;
  height: 3rem;
  margin: 0.5rem 0;
  position: relative;
  width: 20rem;

  .label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .span-title {
    color: #94AFB6;
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    position: absolute;
    transform-origin: top left;
    transition: all 200ms ease-in;
  }

  &:focus-within .span-title {
    color: #404CB2;
    transform: translate(-8px, -12px) scale(0.75);
  }

  & .Active .span-title {
    color: #404CB2;
    transform: translate(-8px, -12px) scale(0.75);
  }
  
  .input {
    color: #3D6670;
    border: none;
    font-size: 1.21rem;
    font-weight: 400;
    outline: none;
    padding: 0.4rem;
    width: 19rem;
  }
`;

export const Error = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  left: 20px;
  position: absolute;
  top: 50px;
`;

export const Button = styled.button`
  border: 1px solid;
  border-radius: 4px;
  bottom: 65px;
  font-weight: 700;
  height: 3rem;
  line-height: 18px;
  outline: none;
  position: absolute;
  text-align: center;
  width: 10.43rem;

  &:enabled {
    border: none;
    background-color: #404CB2;
    color: white;
  }
`;
