import styled from 'styled-components'

export const StyledHero = styled.section`
  padding-top: 80px;
  min-height: 640px;
  height: 1px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -128px;
    width: 100%;
    height: 128px;
    background-color: #181824;
  }

  &::before {
    content: '';
    position: absolute;
    right: 425px;
    bottom: -128px;
    width: 486px;
    height: 486px;
    border-radius: 50%;
    background-color: #7562E0;
  }
`