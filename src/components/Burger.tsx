import styled, { css } from 'styled-components'

export const Burger = styled.div<{ isOpen: boolean }>`
  width: 40px;
  position: relative;
  z-index: 5;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: #ffffff;
    transition: 0.3s transform;

    &:nth-child(1) {
      width: 50%;
      margin-left: auto;
      transform-origin: top right;
      transition: 0.3s transform;
    }

    &:nth-child(2) {
      margin: 10px 0;
      transition: 0.3s transform;
    }

    &:nth-child(3) {
      width: 50%;
      transform-origin: bottom left;
      transition: 0.3s transform;
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        &:nth-child(1) {
          transform: translate(-8px, 1px) rotate(-45deg);
        }

        &:nth-child(2) {
          transform: rotate(45deg);
        }

        &:nth-child(3) {
          transform: translate(8px, -1px) rotate(-45deg);
        }
      `}

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`
