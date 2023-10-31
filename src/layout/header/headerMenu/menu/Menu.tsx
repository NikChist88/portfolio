import { S } from '../HeaderMenu_Styles'
import { menuItems } from '../../../../data/data'

export const Menu: React.FC = () => {
  return (
    <ul role="menu" aria-label={'Menu'}>
      {menuItems.map((item) => {
        return (
          <S.MenuItem role="menuitem" key={item.id}>
            <S.MenuLink
              activeClass="active"
              spy={true}
              to={item.href}
              smooth={true}
              href="#"
            >
              {item.title}
            </S.MenuLink>
          </S.MenuItem>
        )
      })}
    </ul>
  )
}
