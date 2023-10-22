import styled from 'styled-components'
import { StyledHero } from './Hero.styled'
import { Container } from '../../../components/Container'
import { Flex } from '../../../components/Flex'
import { HeroText } from './HeroText.styled'
import { HeroName } from './HeroName.styled'
import { HeroDescription } from './HeroDescription.styled'
import { Button } from '../../../components/Button'
import { Icon } from '../../../components/Icon'
import { HeroContent } from './HeroContent.styled'
import { HeroImage } from './HeroImage.styled'
import photo from '../../../assets/images/photo.png'

export const Hero = () => {
  return (
    <StyledHero id="home">
      <Container>
        <Flex justify="space-between" align="center" height="100%">
          <HeroContent>
            <HeroText>Hello, i'm</HeroText>
            <HeroName>Jayjay D. Dinero</HeroName>
            <HeroDescription>
              A Web Developer. I create seamless web experiences for end-users.
            </HeroDescription>
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
          </HeroContent>
          <HeroImage>
            <img src={photo} alt="Photo" />
          </HeroImage>
        </Flex>
      </Container>
    </StyledHero>
  )
}
