import { Icon } from '../../../components/icons/Icon'
import { SkillTitle } from '../../../components/SkillTitle'
import { StyledAboutSkills } from './AboutSkills.styled'

type AboutSkillsPropsType = {
  id: number
  iconId: string
  iconWidth: string
  iconHeight: string
  viewBox: string
  title: string
}

export const AboutSkills = (props: { items: Array<AboutSkillsPropsType> }) => {
  return (
    <StyledAboutSkills>
      {props.items.map((item) => {
        return (
          <li key={item.id}>
            <a href="#">
              <Icon
                iconId={item.iconId}
                width={item.iconWidth}
                height={item.iconHeight}
                viewBox={item.viewBox}
              />
              <SkillTitle>{item.title}</SkillTitle>
            </a>
          </li>
        )
      })}
    </StyledAboutSkills>
  )
}
