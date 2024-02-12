import styled from "styled-components";

export const Container = styled.div`
  .highlights {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }

  .highlights .card2 {
    width: 250px;
    height: 150px;
    border-radius: 20px;
    color: #1a1a1a;
    background-color: #fff;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
  }
  .card2 .card-heading {
    color: #c2c2c2;
  }
  .card2 .content {
    margin-top: 20px;
  }
  .card2 .content p:first-child {
    text-align: center;
    font-size: 30px;
  }
  .card2 .content p:last-child {
    font-size: 12px;
    margin-top: 20px;
    text-align: left;
  }
`;
