import styled from 'styled-components'
import { SectionTitle } from '../../../components/styled/SectionTitle'

const Projects = styled.section`
  padding: 80px 0;

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }

  ${SectionTitle} {
    margin-bottom: 16px;
  }
`
const ProjectsText = styled.p`
  margin-bottom: 32px;
`

export const S = {
  Projects,
  ProjectsText,
}
