import styled from 'styled-components'
import { MenuList } from './MenuList.styled'
import { MenuLink } from './MenuLink.styled'

export const Menu = () => {
  return (
    <StyledMenu>
      <MenuList>
        <li>
          <MenuLink href="#">Home</MenuLink>
        </li>
        <li>
          <MenuLink href="#">About me</MenuLink>
        </li>
        <li>
          <MenuLink href="#">Projects</MenuLink>
        </li>
        <li>
          <MenuLink href="#">Contacts</MenuLink>
        </li>
      </MenuList>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  li + li {
    margin-left: 10px;
  }
`
