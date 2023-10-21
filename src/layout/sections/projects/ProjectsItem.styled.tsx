import styled from 'styled-components'
import { SkillTitle } from '../../../components/SkillTitle'

export const ProjectsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  background-color: #31313f;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  ${SkillTitle} {
    margin-bottom: 5px;
    color: #7562e0;
  }
`