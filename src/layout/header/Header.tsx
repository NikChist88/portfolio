import { Container } from '../../components/Container'
import { Flex } from '../../components/Flex'
import { HeaderMenu } from './headerMenu/HeaderMenu'
import { menuItems } from '../../data/data'
import { S } from './Header_Styles'

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <Flex
          align="center"
          justify="space-between"
          space="nowrap"
          height="100%"
        >
          <S.HeaderLogo href="#">Jayjay Dinero</S.HeaderLogo>
          <HeaderMenu items={menuItems} />
        </Flex>
      </Container>
    </S.Header>
  )
}
