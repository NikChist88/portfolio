import styled from 'styled-components'
import { Container } from '../../components/Container'
import { Flex } from '../../components/Flex'
import { Logo } from '../../components/Logo.styled'
import { Menu } from '../../components/menu/Menu'

const menuItems = ['Home', 'About me', 'Projects', 'Contact']

type HeaderPropsType = {
  logoText: string
}

export const Header = (props: HeaderPropsType) => {
  return (
    <StyledHeader>
      <Container>
        <Flex align="center" justify="space-between" height="100%">
          <Logo href='#'>{props.logoText}</Logo>
          <Menu items={menuItems} />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  min-height: 80px;
  height: 1px;
  background-color: #181824;
`
