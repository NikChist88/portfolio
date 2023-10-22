import styled from 'styled-components'
import { Flex } from '../../../components/Flex'
import { Button } from '../../../components/Button'
import { SkillTitle } from '../../../components/SkillTitle'
import { ProjectsItem } from '../projects/ProjectsItem.styled'
import { ProjectsImage } from './ProjectsImage.styled'

type ProjectsItemsPropsType = {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

export const ProjectsItems = (props: {
  items: Array<ProjectsItemsPropsType>
}) => {
  return (
    <StyledProjectsItems>
      {props.items.map((item) => {
        return (
          <ProjectsItem key={item.id}>
            <ProjectsImage>
              <img src={item.src} alt={item.alt} />
            </ProjectsImage>
            <SkillTitle>{item.title}</SkillTitle>
            <ProjectsText>{item.description}</ProjectsText>
            <Flex justify="space-between" gap="0 10px">
              <Button href="#" height="45px" mWidth="145px">
                View Live
              </Button>
              <Button href="#" outline height="45px" mWidth="145px">
                Github Repo
              </Button>
            </Flex>
          </ProjectsItem>
        )
      })}
    </StyledProjectsItems>
  )
}

const StyledProjectsItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 16px;
`

const ProjectsText = styled.p`
  flex-grow: 1;
  margin-bottom: 24px;
`
