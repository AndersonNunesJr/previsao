import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  min-width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.815);

  .status {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .status #temp {
    font-size: 40px;
    font-weight: normal;
    line-height: 1;
    text-align: center;
  }

  .weather-icon {
    width: 100%;
    height: 15px;
    text-align: center;
    margin: 20px 0 100px;
  }
  .weather-icon #icon {
    width: 80%;
    object-fit: cover;
  }

  .temperature {
    display: flex;
  }
  .temperature #temp {
    font-size: 70px;
    font-weight: 100;
    line-height: 1;
  }
  .temperature span {
    font-size: 40px;
    margin-top: -10px;
    display: block;
  }
  .divider {
    width: 100%;
    height: 1px;
    margin: 20px 0;
    background-color: #000;
  }
  .condition-rain {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .condition-rain div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .location {
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 10px;
    margin-top: 10px;
  }
`;
