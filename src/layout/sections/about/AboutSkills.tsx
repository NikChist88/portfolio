import styled from 'styled-components'
import { Icon } from '../../../components/Icon'
import { SkillTitle } from '../../../components/SkillTitle'
import { StyledAboutSkills } from './AboutSkills.styled'
import { AboutSkillsItem } from './AboutSkillsItem.styled'

type AboutSkillsPropsType = {
  id: number
  iconId: string
  width: string
  height: string
  viewbox: string
  title: string
}

export const AboutSkills = (props: { items: Array<AboutSkillsPropsType> }) => {
  return (
    <StyledAboutSkills>
      {props.items.map((item) => {
        return (
          <AboutSkillsItem key={item.id}>
            <AboutSkillsLink href="#">
              <Icon
                iconId={item.iconId}
                width={item.width}
                height={item.height}
                viewbox={item.viewbox}
                fill="none"
                stroke="#ffffff"
              />
              <SkillTitle>{item.title}</SkillTitle>
            </AboutSkillsLink>
          </AboutSkillsItem>
        )
      })}
    </StyledAboutSkills>
  )
}

const AboutSkillsLink = styled.a`
  position: relative;
  top: 73px;
`