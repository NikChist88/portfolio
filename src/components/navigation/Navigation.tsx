import styled from 'styled-components'
import { Icon } from '../Icon'

type MenuPropsType = {
  id?: number
  anchor?: string
  item?: string
}

export const Navigation = (props: { items: Array<MenuPropsType> }) => {
  return (
    <StyledNavigation>
      <Menu role="menu" aria-label={'Menu'}>
        {props.items.map((item) => {
          return (
            <MenuItem role="menuitem" key={item.id}>
              <MenuLink href={item.anchor}>{item.item}</MenuLink>
            </MenuItem>
          )
        })}
      </Menu>
      <Icon iconId="burger" width="36px" height="20px" />
    </StyledNavigation>
  )
}

const StyledNavigation = styled.nav`
  svg {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`

const Menu = styled.ul`
  display: flex;
  white-space: nowrap;
  column-gap: 52px;
  @media screen and (max-width: 992px) {
    column-gap: 22px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MenuLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  transition: color ease-in 0.3s;
`

const MenuItem = styled.li`
  &:hover > ${MenuLink} {
    color: #7562e0;
  }
`
