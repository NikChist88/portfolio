import styled from 'styled-components'
import { StyledHero } from './Hero.styled'
import { Container } from '../../../components/Container'
import { Flex } from '../../../components/Flex'
import { Wrapp } from '../../../components/Wrapp'
import { Button } from '../../../components/Button'
import { HeroImage } from './HeroImage.styled'
import { Icon } from '../../../components/icons/Icon'
import photo from '../../../assets/images/photo.png'

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Flex justify="space-between" align="center" height='100%'>
          <Wrapp maxWidth='435px'>
            <HeroText>Hello, i'm</HeroText>
            <HeroName>Jayjay D. Dinero</HeroName>
            <HeroDescription>
              A Web Developer. I create seamless web experiences for end-users.
            </HeroDescription>
            <Flex gap="32px" marginTop="29px">
              <Button href="#" primary>
                About me
                <Icon
                  iconId="user"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                />
              </Button>
              <Button href="#" bg='transparent'>
                Projects
                <Icon
                  iconId="eye"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                />
              </Button>
            </Flex>
          </Wrapp>
          <HeroImage
            src={photo}
            alt="My photo"
            width="100%"
            maxWidth="444px"
            height="444px"
          />
        </Flex>
      </Container>
    </StyledHero>
  )
}

const HeroText = styled.span`
  font-size: 32px;
  font-weight: 600;
`

const HeroName = styled.h2`
  font-size: 52px;
  font-weight: 600;
  margin-top: 6px;
`

const HeroDescription = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-top: 12px;
`