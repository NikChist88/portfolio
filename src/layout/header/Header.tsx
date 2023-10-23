import { Container } from '../../components/Container'
import { Flex } from '../../components/Flex'
import { HeaderLogo } from './HeaderLogo.styled'
import { HeaderMenu } from './headerMenu/HeaderMenu'
import { menuItems } from '../../data/data'
import { StyledHeader } from './Header.styled'
import { HeaderMenuBurger } from './headerMenu/HeaderMenuBurger.styled'
import { Icon } from '../../components/Icon'

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
          <HeaderMenuBurger isOpen={true}>
            <Icon iconId="burger" width="32px" height="26px" />
            <Icon iconId="close" width="24px" height="24px" />
          </HeaderMenuBurger>
        </Flex>
      </Container>
    </StyledHeader>
  )
}
