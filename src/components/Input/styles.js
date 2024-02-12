import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > input {
    width: 100%;
    height: 40px;

    padding: 0 5px;

    border: 1px solid #ced4da;
    border-radius: 10px;

    font-size: 14px;
    color: #495057;
  }
  > input:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.COLOR.PRIMARY};
  }
`;
