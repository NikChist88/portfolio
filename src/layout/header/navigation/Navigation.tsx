import styled from 'styled-components'
import { StyledNavigation } from './Navigation.styled'
import { Menu } from './Menu.styled'
import { MenuLink } from './MenuLink.styled'
import { Icon } from '../../../components/Icon'

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

const MenuItem = styled.li`
  &:hover > ${MenuLink} {
    color: #7562e0;
  }
`
