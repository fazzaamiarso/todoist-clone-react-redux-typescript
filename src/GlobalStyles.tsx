import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --fontStack : 'Lato', sans-serif;
        --primaryColor : rgb(238, 96, 85);
        --borderRadius : 3px;
      }

    * {
    margin: 0;
    padding: 0;
  }
  
  *,
  *:before, 
  *:after {
    box-sizing: border-box;
  }
  
  body {
    font-family: var(--fontStack);
  }
  
  
  img {
    max-width: 100%;
    display: block;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }  


button {
  display: inline-block;
  font-family: var(---fontStack);
    border : none;
    background-color: transparent;
    &:hover{
        cursor: pointer;
    }
}
`;

export default GlobalStyle;
