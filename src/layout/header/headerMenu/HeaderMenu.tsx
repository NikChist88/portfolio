import { useState } from 'react'
import styled from 'styled-components'
import { HeaderMenuList } from './HeaderMenuList.styled'
import { HeaderMenuLink } from './HeaderMenuLink.styled'
import { Burger } from '../../../components/Burger'

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
    <StyledHeaderMenu>
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
      <Burger isOpen={openMenu} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
    </StyledHeaderMenu>
  )
}

const StyledHeaderMenu = styled.nav``

const HeaderMenuItem = styled.li`
  &:hover > ${HeaderMenuLink} {
    color: #7562e0;
  }
`
