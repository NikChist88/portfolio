import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Container } from '../../../components/Container'
import { AboutSkills } from './AboutSkills'
import { AboutDescription } from './AboutDescription.styled'
import { aboutItems } from '../../../data/data'

export const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <SectionTitle>About me:</SectionTitle>
        <StyledAboutText>
          Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
          UI designer, and Mobile developer. I jhave honed my skills in Web
          Development and advance i have core understanding of advance UI design
          principles. Here are the major skiills i have.
        </StyledAboutText>
        <AboutDescription>
          <span>5+</span>Years of experience. Specialised in building apps,
          while ensuring a seamless web experience for end users.
        </AboutDescription>
        <AboutSkills items={aboutItems} />
      </Container>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  padding: 175px 0 60px;

  @media screen and (max-width: 768px) {
    padding: 100px 0 60px;
  }
  @media screen and (max-width: 480px) {
    padding: 40px 0 40px;
  }

  ${SectionTitle} {
    margin-bottom: 10px;
  }
`

const StyledAboutText = styled.p`
  line-height: 32px;
  margin-bottom: 25px;
`
