import styled from 'styled-components'
import { StyledHero } from './Hero.styled'
import { Container } from '../../../components/Container'
import { Flex } from '../../../components/Flex'
import { Block } from '../../../components/Block'
import { HeroText } from './HeroText.styled'
import { HeroName } from './HeroName.styled'
import { HeroDescription } from './HeroDescription.styled'
import { Button } from '../../../components/Button'
import { Icon } from '../../../components/Icon'
import photo from '../../../assets/images/photo.png'

export const Hero = () => {
  return (
    <StyledHero id="home">
      <Container>
        <Flex justify="space-between" align="flex-end" height="100%">
          <Block>
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
          </Block>
          <ImageWrapper>
            <img src={photo} alt="My Photo" />
          </ImageWrapper>
        </Flex>
      </Container>
    </StyledHero>
  )
}

const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: -115px;
    width: 486px;
    height: 486px;
    border-radius: 50%;
    background-color: #7562e0;
    z-index: -1;
  }

  img {
    max-width: 444px;
    height: 444px;
    object-fit: cover;
    z-index: 2;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`
