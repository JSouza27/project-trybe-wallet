import styled from 'styled-components';

export const TableContent = styled.section`
  align-items: center;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 755px;
  width: 21.43rem;

  table {
    border-collapse: separate;
    border-spacing: 0 1rem;

    thead {
      display: none;
    }

    tbody {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
  }

  @media(min-width: 600px) {
    display: block;
    top: 525px;
    width: 58rem;

    table {
      border-spacing: 0rem;

      thead {
        background-color: #EEEEEE;
        border-spacing: 1rem;
        color: #3D6670;
        display: none;
      }
    }
  }
`;

export const Row = styled.tr`
  border-bottom: 1px solid #94AFB6;
  color: #3D6670;
  display: block;
  font-weight: 600;
  width: 95%;

  th {
    color: #94AFB6;
    font-weight: 600;
  }

  @media(min-width: 600px) {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    width: 56rem;

    tr {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      
      th {
        margin-top: 0.5rem;
      }
      td {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`;
