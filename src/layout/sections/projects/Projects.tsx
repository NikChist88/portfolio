import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { ProjectsItems } from './ProjectsItems'
import { projectsItems } from '../../../data/data'
import { S } from './Projects_Styles'

export const Projects: React.FC = () => {
  return (
    <S.Projects id="projects">
      <Container>
        <SectionTitle>Featured projects:</SectionTitle>
        <S.ProjectsText>
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects
        </S.ProjectsText>
        <ProjectsItems items={projectsItems} />
      </Container>
    </S.Projects>
  )
}
