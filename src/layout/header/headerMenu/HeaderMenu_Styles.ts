import { Link } from 'react-scroll'
import styled, { css } from 'styled-components'

// Menu
const MenuLink = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  transition: color ease-in 0.3s;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  &.active {
    color: #7562e0;
  }
`

const MenuItem = styled.li`
  &:hover > ${MenuLink} {
    cursor: pointer;
    color: #7562e0;
  }
`

// Desktop Menu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    white-space: nowrap;
    column-gap: 50px;

    @media screen and (max-width: 992px) {
      column-gap: 22px;
    }
  }
`

// Mobile Menu
const MobileMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px 0;
    height: 100%;
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #1a1a29;
  transform: translateY(-100%);
  transition: transform ease-in 0.3s;
  overflow-y: scroll;
  z-index: 100;

  ${({ isOpen }) =>
    isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);
    `}
`

export const S = {
  MenuItem,
  MenuLink,
  DesktopMenu,
  MobileMenu,
  MobileMenuPopup,
}
