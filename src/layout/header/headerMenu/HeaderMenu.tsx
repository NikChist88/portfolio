import { useState, useEffect } from 'react'
import { MenuBtn } from '../../../components/MenuBtn'
import { S } from './HeaderMenu_Styles'

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

  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

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
      {width < breakpoint && <MenuBtn isOpen={openMenu} onClick={toggleMenu} />}
    </nav>
  )
}
