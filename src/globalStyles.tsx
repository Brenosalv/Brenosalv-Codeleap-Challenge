import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: auto;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
html, body {
  height: 100%;
  display: flex;
  align-items: center;
  background: #DDDDDD;
}
`

export default GlobalStyle;