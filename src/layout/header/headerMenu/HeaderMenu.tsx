import { useState } from 'react'
import styled from 'styled-components'
import { HeaderMenuList } from './HeaderMenuList.styled'
import { HeaderMenuLink } from './HeaderMenuLink.styled'
import { HeaderMenuBurger } from './HeaderMenuBurger.styled'

type HeaderMenuPropsType = {
  id?: number
  anchor?: string
  item?: string
}

export const HeaderMenu = (props: { items: Array<HeaderMenuPropsType> }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <nav>
      <HeaderMenuList
        role="menu"
        aria-label={'Menu'}
        isOpen={openMenu}
        onClick={() => {
          setOpenMenu(false)
        }}
      >
        {props.items.map((item) => {
          return (
            <HeaderMenuItem role="menuitem" key={item.id}>
              <HeaderMenuLink href={item.anchor}>{item.item}</HeaderMenuLink>
            </HeaderMenuItem>
          )
        })}
      </HeaderMenuList>
      <HeaderMenuBurger isOpen={openMenu} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </HeaderMenuBurger>
    </nav>
  )
}

const HeaderMenuItem = styled.li`
  &:hover > ${HeaderMenuLink} {
    color: #7562e0;
  }
`
