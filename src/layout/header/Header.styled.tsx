import styled from 'styled-components'
import { HeaderLogo } from './HeaderLogo.styled'

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 80px;
  height: 1px;
  background-color: #181824;
  z-index: 100;

  ${HeaderLogo} {
    margin-right: 30px;
  }
`
