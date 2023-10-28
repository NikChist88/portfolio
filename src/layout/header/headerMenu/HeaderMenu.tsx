import { useState } from 'react'
import { S } from './HeaderMenu.styled'

type HeaderMenuPropsType = {
  id?: number
  anchor?: string
  item?: string
}

export const HeaderMenu: React.FC<{
  items: Array<HeaderMenuPropsType>
}> = (props: { items: Array<HeaderMenuPropsType> }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <nav>
      <S.HeaderMenuList
        role="menu"
        aria-label={'Menu'}
        isOpen={openMenu}
        onClick={() => {
          setOpenMenu(false)
        }}
      >
        {props.items.map((item) => {
          return (
            <S.HeaderMenuItem role="menuitem" key={item.id}>
              <S.HeaderMenuLink href={item.anchor}>
                {item.item}
              </S.HeaderMenuLink>
            </S.HeaderMenuItem>
          )
        })}
      </S.HeaderMenuList>
      <S.HeaderMenuBurger isOpen={openMenu} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </S.HeaderMenuBurger>
    </nav>
  )
}
