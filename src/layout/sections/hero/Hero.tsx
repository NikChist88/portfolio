import photo from '../../../assets/images/photo.png'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { Flex } from '../../../components/Flex'
import { Icon } from '../../../components/Icon'
import { S } from './Hero_Styles'

export const Hero: React.FC = () => {
  return (
    <S.Hero id="home">
      <Container>
        <Flex justify="space-between" align="flex-end" height="100%">
          <S.HeroContent>
            <S.HeroText>Hello, i'm</S.HeroText>
            <S.HeroName>Jayjay D. Dinero</S.HeroName>
            <S.HeroDescription>
              A Web Developer. I create seamless web experiences for end-users.
            </S.HeroDescription>
            <Flex gap="32px">
              <Button href="#">
                About me
                <Icon
                  iconId="user"
                  width="20px"
                  height="20px"
                  viewbox="0 0 20 20"
                  fill="#ffffff"
                />
              </Button>
              <Button href="#" outline>
                Projects
                <Icon
                  iconId="eye"
                  width="20px"
                  height="20px"
                  viewbox="0 0 20 20"
                  fill="#ffffff"
                />
              </Button>
            </Flex>
          </S.HeroContent>
          <S.HeroImage>
            <img src={photo} alt="Photo" />
          </S.HeroImage>
        </Flex>
      </Container>
    </S.Hero>
  )
}
