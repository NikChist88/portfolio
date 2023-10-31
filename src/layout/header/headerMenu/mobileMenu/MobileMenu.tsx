import { useState } from 'react'
import { Menu } from '../menu/Menu'
import { MenuBtn } from '../../../../components/menuBtn/MenuBtn'
import { S } from '../HeaderMenu_Styles'

export const MobileMenu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <S.MobileMenu>
      <S.MobileMenuPopup
        isOpen={openMenu}
        onClick={() => {
          setOpenMenu(false)
        }}
      >
        <Menu />
      </S.MobileMenuPopup>
      <MenuBtn isOpen={openMenu} onClick={toggleMenu} />
    </S.MobileMenu>
  )
}
