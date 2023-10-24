import styled, { css } from 'styled-components'

export const HeaderMenuBurger = styled.button<{ isOpen: boolean }>`
  display: none;
  background-color: transparent;
  position: relative;
  z-index: 5;

  @media screen and (max-width: 768px) {
    display: block;

    ${({ isOpen }) =>
      isOpen
        ? css`
            & svg:first-child {
              display: none;
            }
          `
        : css`
            & svg:last-child {
              display: none;
            }
          `}
  }
`
