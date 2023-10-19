import { Container } from '../../components/Container'
import { Flex } from '../../components/Flex'
import { Logo } from '../../components/Logo.styled'
import { Navigation } from '../../components/navigation/Navigation'
import { menuItems } from '../../data/data'
import { StyledHeader } from './Header.styled'

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