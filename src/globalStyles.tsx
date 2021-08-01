import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: auto;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #DDDDDD;
  margin: 0;
}
`

export default GlobalStyle;