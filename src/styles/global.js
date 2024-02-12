import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    display: flex;
    justify-content: center;
    
    min-height: 100vh;
    min-width: 100px;
    padding:50px;
    
    font-family: "Roboto Slab", serif;
  
    background: ${({ theme }) => theme.COLOR.PRIMARY};
    transition: background-image .3s ease;
    background-image:linear-gradient(rgba(0,0,0,0.5)),rgba(0,0,0,0.5),url("../assets/cd.jpg");
}
img{
  width: 100%;
}

  `;
