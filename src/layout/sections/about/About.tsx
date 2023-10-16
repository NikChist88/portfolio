import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { Container } from '../../../components/Container'
import { AboutSkills } from './AboutSkills'

const skillsItems = [
  {
    id: 1,
    iconId: 'code',
    iconWidth: '52px',
    iconHeight: '52px',
    viewBox: '0 0 52 52',
    title: 'ui & ux designing',
  },
  {
    id: 2,
    iconId: 'code',
    iconWidth: '52px',
    iconHeight: '52px',
    viewBox: '0 0 52 52',
    title: 'web development',
  },
  {
    id: 3,
    iconId: 'android',
    iconWidth: '62px',
    iconHeight: '62px',
    viewBox: '0 0 62 62',
    title: 'mobile development',
  },
  {
    id: 4,
    iconId: 'python',
    iconWidth: '55px',
    iconHeight: '55px',
    viewBox: '0 0 55 55',
    title: 'web scraping with python',
  },
]

type AboutPropsType = {
  sectionTitle: string
}

export const About = (props: AboutPropsType) => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle>{props.sectionTitle}</SectionTitle>
        <StyledAboutText>
          Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
          UI designer, and Mobile developer. I jhave honed my skills in Web
          Development and advance i have core understanding of advance UI design
          principles. Here are the major skiills i have.
        </StyledAboutText>
        <StyledAboutDescription>
          <span>5+</span>Years of experience. Specialised in building apps,
          while ensuring a seamless web experience for end users.
        </StyledAboutDescription>
        <AboutSkills items={skillsItems} />
      </Container>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  padding: 180px 0 80px;
`

const StyledAboutText = styled.p`
  line-height: 32px;
  margin-top: 8px;
`

const StyledAboutDescription = styled.p`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-top: 25px;
  span {
    font-size: 96px;
    font-weight: 600;
    color: #7562e0;
    margin-right: 25px;
  }
`
