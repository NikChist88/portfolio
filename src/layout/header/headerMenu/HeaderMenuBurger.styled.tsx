import styled, {css} from "styled-components";

export const HeaderMenuBurger = styled.div<{ isOpen: boolean }>`
  z-index: 2;
  display: none;

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