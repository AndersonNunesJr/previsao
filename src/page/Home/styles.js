import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 1200px;
  min-width: 900px;
  border-radius: 20px;
  overflow: hidden;

  .header-options {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .header-options button {
    border: none;
    background: transparent;
    font-size: 16px;
    font-weight: 600;
    color: #495057;
    text-transform: capitalize;
  }

  .header-options button.active {
    color: ${({ theme }) => theme.COLOR.PRIMARY};
  }
  .units button {
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;

    border-radius: 50%;

    color: #1a1a1a;
    background-color: #fff;
  }
  .units button.active {
    color: #fff;
    background-color: #1a1a1a;
  }

  .heading {
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
  }

  .hearder0 {
    justify-content: space-between;
  }
  .hearder1 {
    justify-content: space-around;
  }

  /*Card Content*/
`;
