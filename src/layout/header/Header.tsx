import styled from 'styled-components'
import { Container } from '../../components/Container'
import { Flex } from '../../components/Flex'
import { Logo } from '../../components/Logo.styled'
import { Navigation } from '../../components/navigation/Navigation'

const menuItems = ['Home', 'About me', 'Projects', 'Contact']

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex align="center" justify="space-between" height="100%">
          <Logo href="#">Jayjay Dinero</Logo>
          <Navigation items={menuItems} />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  min-height: 80px;
  height: 1px;
  background-color: #181824;
`
