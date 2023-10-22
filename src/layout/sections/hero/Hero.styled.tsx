import styled from 'styled-components'

export const StyledHero = styled.section`
  padding: 80px 0 0px;
  min-height: 640px;
  height: 1px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -120px;
    width: 100%;
    height: 128px;
    background-color: #181824;
    z-index: 2;
    
    @media screen and (max-width: 768px) {
      bottom: -60px;
    }
    @media screen and (max-width: 480px) {
      height: 64px;
      bottom: 0;
    }
  }

`
