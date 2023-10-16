import styled from 'styled-components'

export const StyledHero = styled.section`
  min-height: 560px;
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
`
