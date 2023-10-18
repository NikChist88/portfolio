import styled from 'styled-components'
import { MenuItem } from './MenuItem.styled'
import { MenuLinkMask } from './MenuLinkMask.styled'

export const Navigation = (props: { items: Array<string> }) => {
  return (
    <nav>
      <Menu role="menu" aria-label={'Menu'}>
        {props.items.map((item, index) => {
          return (
            <MenuItem role="menuitem" key={index}>
              <a href="#">
                {item}
                <MenuLinkMask>
                  <span>{item}</span>
                </MenuLinkMask>
                <MenuLinkMask>
                  <span>{item}</span>
                </MenuLinkMask>
              </a>
            </MenuItem>
          )
        })}
      </Menu>
    </nav>
  )
}

const Menu = styled.ul`
  display: flex;
  column-gap: 52px;
`
