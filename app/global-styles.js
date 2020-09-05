import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    
    * {
      scrollbar-width: thin;  /* Firefox */
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #706f79; 
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: #777879; 
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #5d5d5e; 
      }
    }
  
  }
`;

export default GlobalStyle;
