import styled from 'styled-components'
import { MenuList } from './MenuList.styled'
import { MenuLink } from './MenuLink.styled'

export const Menu = (props: { items: Array<string> }) => {
  return (
    <StyledMenu>
      <MenuList>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <MenuLink href="#">{item}</MenuLink>
            </li>
          )
        })}
      </MenuList>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  li + li {
    margin-left: 10px;
  }
`
