import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { ProjectsItems } from './ProjectsItems'
import { projectsItems } from '../../../data/data'

export const Projects = () => {
  return (
    <StyledProjects id="projects">
      <Container>
        <SectionTitle>Featured projects:</SectionTitle>
        <ProjectsText>
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects
        </ProjectsText>
        <ProjectsItems items={projectsItems} />
      </Container>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  padding: 80px 0;

  ${SectionTitle} {
    margin-bottom: 16px;
  }
`
const ProjectsText = styled.p`
  margin-bottom: 32px;
`
