import styled from 'styled-components'

export const StyledHero = styled.section`
  padding-top: 80px;
  min-height: 100vh;
  height: 1px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 95px;
    width: 100%;
    height: 128px;
    background-color: #181824;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    right: 410px;
    bottom: 105px;
    width: 486px;
    height: 486px;
    border-radius: 50%;
    background-color: #7562E0;
  }
`
