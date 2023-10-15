import styled from 'styled-components'

export const StyledHero = styled.section`
  height: 560px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    transform: translateY(128px);
    width: 100%;
    height: 128px;
    background-color: #181824;
  }
`
