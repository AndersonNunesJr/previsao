import styled from "styled-components";

export const Container = styled.div`
  .cards .card {
    display: flex;
    width: 80px;
    height: 130px;

    flex-direction: column;
    justify-content: space-between;

    padding: 10px 0;
    border-radius: 20px;

    text-align: center;

    color: #1a1a1a;
    background-color: #a9cafc;
  }

  .card h2 {
    font-size: 15px;
    font-weight: 600;
  }
  .card .card-icon {
    width: 50%;
    margin: 0 auto;
  }
  .card .day-temp {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
