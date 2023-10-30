import { useState } from 'react'
import { Menu } from '../menu/Menu'
import { MenuBtn } from '../../../../components/MenuBtn'
import { S } from '../HeaderMenu_Styles'

export const MobileMenu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <S.MobileMenu
        isOpen={openMenu}
        onClick={() => {
          setOpenMenu(false)
        }}
      >
        <Menu />
      </S.MobileMenu>
      <MenuBtn isOpen={openMenu} onClick={toggleMenu} />
    </>
  )
}
