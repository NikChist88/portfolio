import { SectionTitle } from '../../../components/SectionTitle'
import { Container } from '../../../components/Container'
import { AboutSkills } from './AboutSkills'
import { aboutItems } from '../../../data/data'
import { S } from './About_Styles'

export const About: React.FC = () => {
  return (
    <S.About id="about">
      <Container>
        <SectionTitle>About me:</SectionTitle>
        <S.AboutText>
          Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
          UI designer, and Mobile developer. I jhave honed my skills in Web
          Development and advance i have core understanding of advance UI design
          principles. Here are the major skiills i have.
        </S.AboutText>
        <S.AboutDescription>
          <span>5+</span>Years of experience. Specialised in building apps,
          while ensuring a seamless web experience for end users.
        </S.AboutDescription>
        <AboutSkills items={aboutItems} />
      </Container>
    </S.About>
  )
}
