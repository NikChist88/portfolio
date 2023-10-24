import { createGlobalStyle } from 'styled-components'
import './fonts.css'

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

body {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: calc((100vw - 320px) / (1920 - 320) * (18 - 14) + 14px);
  font-weight: 500;
  color: #fff;
  background-color: #1a1a29;
}
`