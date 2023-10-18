import styled from 'styled-components'
import { Flex } from '../../../components/Flex'
import { Button } from '../../../components/Button'
import { SkillTitle } from '../../../components/SkillTitle.styled'

type ProjectItemsPropsType = {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

export const ProjectsItems = (props: {
  items: Array<ProjectItemsPropsType>
}) => {
  return (
    <StyledProjectsItems>
      {props.items.map((item) => {
        return (
          <li key={item.id}>
            <div>
              <img src={item.src} alt={item.alt} />
              <SkillTitle>{item.title}</SkillTitle>
              <p>{item.description}</p>
            </div>
            <Flex justifySelf='flex-end'>
              <Button>View Live</Button>
              <Button>Github Repo</Button>
            </Flex>
          </li>
        )
      })}
    </StyledProjectsItems>
  )
}

const StyledProjectsItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 16px;

  li {
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 8px;
    background-color: #31313f;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    & div:first-of-type {
      margin-bottom: 24px;
    }
  }

  img {
    width: 310px;
    height: 170px;
    margin-bottom: 16px;
    border-radius: 8px;
  }

  h3 {
    margin-bottom: 5px;
  }
`
