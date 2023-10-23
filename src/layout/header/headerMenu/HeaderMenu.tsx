import styled from 'styled-components'
import { StyledHeaderMenu } from './HeaderMenu.styled'
import { HeaderMenuList } from './HeaderMenuList.styled'
import { HeaderMenuLink } from './HeaderMenuLink.styled'

type MenuPropsType = {
  id?: number
  anchor?: string
  item?: string
}

export const HeaderMenu = (props: { items: Array<MenuPropsType> }) => {
  return (
    <StyledHeaderMenu>
      <HeaderMenuList role='menu' aria-label={'Menu'} isOpen={true}>
        {props.items.map((item) => {
          return (
            <HeaderMenuItem role="menuitem" key={item.id}>
              <HeaderMenuLink href={item.anchor}>{item.item}</HeaderMenuLink>
            </HeaderMenuItem>
          )
        })}
      </HeaderMenuList>
    </StyledHeaderMenu>
  )
}

const HeaderMenuItem = styled.li`
  &:hover > ${HeaderMenuLink} {
    color: #7562e0;
  }
`
