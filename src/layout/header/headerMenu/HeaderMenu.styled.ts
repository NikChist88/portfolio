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

const HeaderMenuBurger = styled.button<{ isOpen: boolean }>`
  display: block;
  width: 40px;
  background-color: transparent;
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
      css<{ isOpen: boolean }>`
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
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const S = {
  HeaderMenuList,
  HeaderMenuItem,
  HeaderMenuLink,
  HeaderMenuBurger,
}
