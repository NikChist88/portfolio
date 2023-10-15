import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { Container } from '../../../components/Container'
import { Icon } from '../../../components/icons/Icon'
import { SkillTitle } from '../../../components/SkillTitle.styled'
import { StyledAboutSkills } from './AboutSkills.styled'

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle>About me:</SectionTitle>
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
        <StyledAboutSkills>
          <li>
            <a href="#">
              <Icon
                iconId="code"
                width="52px"
                height="52px"
                viewBox="0 0 52 52"
              />
              <SkillTitle>Ui & Ux Designer</SkillTitle>
            </a>
          </li>
          <li>
            <a href="#">
              <Icon
                iconId="code"
                width="52px"
                height="52px"
                viewBox="0 0 52 52"
              />
              <SkillTitle>Ui & Ux Designer</SkillTitle>
            </a>
          </li>
          <li>
            <a href="#">
              <Icon
                iconId="code"
                width="52px"
                height="52px"
                viewBox="0 0 52 52"
              />
              <SkillTitle>Ui & Ux Designer</SkillTitle>
            </a>
          </li>
          <li>
            <a href="#">
              <Icon
                iconId="code"
                width="52px"
                height="52px"
                viewBox="0 0 52 52"
              />
              <SkillTitle>Ui & Ux Designer</SkillTitle>
            </a>
          </li>
        </StyledAboutSkills>
      </Container>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  padding: 183px 0 80px;
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
