import { Container } from '../../components/Container'
import { Flex } from '../../components/Flex'
import { HeaderLogo } from './HeaderLogo.styled'
import { HeaderMenu } from './headerMenu/HeaderMenu'
import { menuItems } from '../../data/data'
import { StyledHeader } from './Header.styled'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex
          align="center"
          justify="space-between"
          space="nowrap"
          height="100%"
        >
          <HeaderLogo href="#">Jayjay Dinero</HeaderLogo>
          <HeaderMenu items={menuItems} />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
