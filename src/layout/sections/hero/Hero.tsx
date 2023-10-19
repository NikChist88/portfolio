import { StyledHero } from './Hero.styled'
import { Container } from '../../../components/Container'
import { Flex } from '../../../components/Flex'
import { Block } from '../../../components/Block'
import { HeroText } from './HeroText.styled'
import { HeroName } from './HeroName.styled'
import { HeroDescription } from './HeroDescription.styled'
import { Button } from '../../../components/Button'
import { Icon } from '../../../components/icons/Icon'
import photo from '../../../assets/images/photo.png'

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Flex justify="space-between" align="flex-end" height="100%">
          <Block>
            <HeroText>Hello, i'm</HeroText>
            <HeroName>Jayjay D. Dinero</HeroName>
            <HeroDescription>
              A Web Developer. I create seamless web experiences for end-users.
            </HeroDescription>
            <Flex gap="32px">
              <Button href="#" primary>
                About me
                <Icon
                  iconId="user"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                />
              </Button>
              <Button href="#" bg="transparent">
                Projects
                <Icon
                  iconId="eye"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                />
              </Button>
            </Flex>
          </Block>
          <img src={photo} alt="My Photo" />
        </Flex>
      </Container>
    </StyledHero>
  )
}
