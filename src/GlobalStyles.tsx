import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --fontStack : 'Lato', sans-serif;
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
  font-family: var(---fontStack);
    border : none;
    &:hover{
        cursor: pointer;
    }
}
`;

export default GlobalStyle;
