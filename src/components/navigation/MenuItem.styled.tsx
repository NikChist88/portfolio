import styled from 'styled-components'
import { MenuLinkMask } from './MenuLinkMask.styled'

export const MenuItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 1px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: -8px;
    right: -8px;
    z-index: 2;
    transform: scale(0);
    transition: all ease-in 0.2s;
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${MenuLinkMask} {
      transition: all ease-in 0.3s;
      transform: skewX(10deg) translateX(2px);
      color: #7562e0;
      
      & + ${MenuLinkMask} {
        transform: skewX(10deg) translateX(-2px);
      }
    }
  }

  a {
    font-size: 18px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0);
  }
`
