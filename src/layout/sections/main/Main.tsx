import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { Flex } from '../../../components/Flex'
import { Wrapper } from '../../../components/Wrapper'
import { Button } from '../../../components/Button'
import photo from '../../../assets/images/photo.png'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Flex justify="space-between" align="center" height="100%">
          <Wrapper maxWidth="435px">
            <TextMain>Hello, i'm</TextMain>
            <NameMain>Jayjay D. Dinero</NameMain>
            <DescriptionMain>
              A Web Developer. I create seamless web experiences for end-users.
            </DescriptionMain>
            <Flex gap="32px" marginTop="29px">
              <Button href="#" primary>
                About me
              </Button>
              <Button href="#">Projects</Button>
            </Flex>
          </Wrapper>
          <Image src={photo} alt="My photo" />
        </Flex>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  height: 561px;
`

const TextMain = styled.span`
  font-size: 32px;
  font-weight: 600;
`

const NameMain = styled.h2`
  font-size: 52px;
  font-weight: 600;
  margin-top: 6px;
`

const DescriptionMain = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-top: 12px;
`

const Image = styled.img`
  width: 100%;
  max-width: 444px;
  object-fit: cover;
  align-self: flex-end;
`
