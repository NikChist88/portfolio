import styled, { css } from 'styled-components'

const HeaderMenuList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  white-space: nowrap;
  column-gap: 50px;

  @media screen and (max-width: 992px) {
    column-gap: 22px;
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px 0;
    background-color: #1a1a29;
    transition: transform ease-in 0.3s;
    transform: translateY(-100%);
    overflow-y: scroll;
    z-index: 1;

    ${({ isOpen }) =>
      isOpen &&
      css<{ isOpen: boolean }>`
        transform: translateY(0);
      `}
  }
`

const HeaderMenuLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  transition: color ease-in 0.3s;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

const HeaderMenuItem = styled.li`
  &:hover > ${HeaderMenuLink} {
    color: #7562e0;
  }
`

export const S = {
  HeaderMenuList,
  HeaderMenuItem,
  HeaderMenuLink,
}
