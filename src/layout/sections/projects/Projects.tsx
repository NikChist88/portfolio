import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { ProjectsItems } from './ProjectsItems'
import { projectsItems } from '../../../data/projectsItems'

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>Featured projects:</SectionTitle>
        <p>
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects
        </p>
        <ProjectsItems items={projectsItems} />
      </Container>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  h2 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 32px;
  }
`
