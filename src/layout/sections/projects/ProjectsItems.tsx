import { Flex } from '../../../components/styled/Flex'
import { Button } from '../../../components/styled/Button'
import { SkillTitle } from '../../../components/styled/SkillTitle'
import { S } from './ProjectsItems_Styles'

type ProjectsItemsPropsType = {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

export const ProjectsItems: React.FC<{
  items: Array<ProjectsItemsPropsType>
}> = (props: { items: Array<ProjectsItemsPropsType> }) => {
  return (
    <S.ProjectsItems>
      {props.items.map((item) => {
        return (
          <S.ProjectsItem key={item.id}>
            <S.ProjectsItemImage>
              <img src={item.src} alt={item.alt} />
            </S.ProjectsItemImage>
            <SkillTitle>{item.title}</SkillTitle>
            <S.ProjectsItemText>{item.description}</S.ProjectsItemText>
            <Flex justify="space-between" gap="0 10px">
              <Button href="#" height="45px" mWidth="145px">
                View Live
              </Button>
              <Button href="#" outline height="45px" mWidth="145px">
                Github Repo
              </Button>
            </Flex>
          </S.ProjectsItem>
        )
      })}
    </S.ProjectsItems>
  )
}
