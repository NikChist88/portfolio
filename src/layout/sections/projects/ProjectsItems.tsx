import styled from 'styled-components'
import { Flex } from '../../../components/Flex'
import { Button } from '../../../components/Button'
import { SkillTitle } from '../../../components/SkillTitle.styled'
import { ProjectsItem } from '../projects/ProjectsItem.styled'
import { Image } from '../../../components/Image'

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
            <img src={item.src} alt={item.alt} />
            <SkillTitle>{item.title}</SkillTitle>
            <p>{item.description}</p>
            <Flex justify='space-between' gap='0 10px'>
              <Button href="#" primary height="43px" width="145px">
                View Live
              </Button>
              <Button href="#" height="43px" width="145px" bg="transparent">
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
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 16px;
`