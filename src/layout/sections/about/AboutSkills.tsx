import { Icon } from '../../../components/Icon'
import { SkillTitle } from '../../../components/styled/SkillTitle'
import { S } from './AboutSkills_Styles'

type AboutSkillsPropsType = {
  id: number
  iconId: string
  width: string
  height: string
  viewbox: string
  title: string
}

export const AboutSkills: React.FC<{
  items: Array<AboutSkillsPropsType>
}> = (props: { items: Array<AboutSkillsPropsType> }) => {
  return (
    <S.AboutSkills>
      {props.items.map((item) => {
        return (
          <S.AboutSkillsItem key={item.id}>
            <S.AboutSkillsLink href="#">
              <Icon
                iconId={item.iconId}
                width={item.width}
                height={item.height}
                viewbox={item.viewbox}
                fill="none"
                stroke="#ffffff"
              />
              <SkillTitle>{item.title}</SkillTitle>
            </S.AboutSkillsLink>
          </S.AboutSkillsItem>
        )
      })}
    </S.AboutSkills>
  )
}
