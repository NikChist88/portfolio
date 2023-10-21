import styled from 'styled-components'
import { Logo } from '../../components/Logo'

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  min-height: 80px;
  height: 1px;
  background-color: #181824;

  ${Logo} {
    margin-right: 30px;
  }
`