import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

html, body {
  width: 100%;
  height: 100%;
  background: #DDDDDD;
  margin: 0;
}
`

export default GlobalStyle;