import styled from 'styled-components';

export const FormWallet = styled.section`
  align-items: center;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 31rem;
  justify-content: center;
  position: absolute;
  top: 230px;
  width: 21.43rem;

  @media(min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: 16rem;
    width: 41rem;
  }
`;

export const FieldContainer = styled.div`
  height: 4.75rem;
  width: 19.43rem;

  .label {
    display: flex;
    color: #94AFB6;
    font-size: 0.75rem;
    font-weight: normal;
    flex-direction: column;

    .input {
      background-color: white;
      border: 1px solid #94AFB6;
      border-radius: 4px;
      color: #3D6670;
      font-size: 0.875rem;
      font-weight: 400;
      height: 2.5rem;
      margin-top: 0.5rem;
      padding: 0 0.3rem;
    }

    @media(min-width: 600px) {
      margin: 0.5rem 0.5rem;
    }
  }
`;

export const SaveButton = styled.button`
  background-color: #404CB3;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  height: 2.37rem;
  margin-top: 1rem;
  outline: none;
  text-align: center;
  width: 19.43rem;

  @media(min-width: 600px) {
    width: 12rem;
  }
`;
