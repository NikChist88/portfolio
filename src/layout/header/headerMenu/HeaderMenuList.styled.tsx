import styled, { css } from 'styled-components'

export const HeaderMenuList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  white-space: nowrap;
  column-gap: 52px;

  @media screen and (max-width: 992px) {
    column-gap: 22px;
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(26, 26, 41);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px 0;
    transition: transform ease-in 0.3s;
    transform: translateY(-100%);

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateY(0);
      `}
  }
`
