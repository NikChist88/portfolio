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

html,
body {
  min-height: 100%;
}

body {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  background-color: #1a1a29;
}
`