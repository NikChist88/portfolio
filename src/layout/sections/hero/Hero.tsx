import styled from 'styled-components'
import { StyledHero } from './Hero.styled'
import { Container } from '../../../components/Container'
import { Flex } from '../../../components/Flex'
import { Wrapper } from '../../../components/Wrapper'
import { Button } from '../../../components/Button'
import { Image } from '../../../components/Image'
import { Icon } from '../../../components/icons/Icon'
import photo from '../../../assets/images/photo.png'

type HeroPropsType = {
  text: string
  name: string
  desc: string
}

export const Hero = (props: HeroPropsType) => {
  return (
    <StyledHero>
      <Container>
        <Flex justify="space-between" align="center" height="100%">
          <Wrapper maxWidth="435px">
            <TextHero>{props.text}</TextHero>
            <NameHero>{props.name}</NameHero>
            <DescriptionHero>{props.desc}</DescriptionHero>
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
              <Button href="#"> 
                Projects
                <Icon
                  iconId="eye"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                />
              </Button>
            </Flex>
          </Wrapper>
          <Image
            src={photo}
            alt="My photo"
            width="100%"
            maxWidth="444px"
            height='444px'
          />
        </Flex>
      </Container>
    </StyledHero>
  )
}

const TextHero = styled.span`
  font-size: 32px;
  font-weight: 600;
`

const NameHero = styled.h2`
  font-size: 52px;
  font-weight: 600;
  margin-top: 6px;
`

const DescriptionHero = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-top: 12px;
`

const Block = styled.div`
  width: 100%;
  min-height: 128px;
  background-color: #181824;
`
