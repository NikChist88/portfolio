import styled from 'styled-components'
import { Block } from '../../../components/Block'

export const StyledHero = styled.section`
  padding: 80px 0 0px;
  min-height: 640px;
  height: 1px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -130px;
    width: 100%;
    height: 130px;
    background-color: #181824;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    right: 410px;
    bottom: -100px;
    width: 486px;
    height: 486px;
    border-radius: 50%;
    background-color: #7562E0;
  }

  ${Block} {
    max-width: 435px;
    padding-bottom: 50px;
  }

  img {
    max-width: 444px;
    height: 444px;
    object-fit: cover;
    z-index: 1;
  }
`
