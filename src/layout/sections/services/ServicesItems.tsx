import styled from 'styled-components'
import { Icon } from '../../../components/icons/Icon'
import { SkillTitle } from '../../../components/SkillTitle.styled'
import { ServicesItem } from './ServicesItem.styled'

type ServicesItemsPropsType = {
  id: number
  iconId: string
  iconWidth: string
  iconHeight: string
  viewBox: string
  title: string
  description: string
}

export const ServicesItems = (props: {
  items: Array<ServicesItemsPropsType>
}) => {
  return (
    <StyledServicesItems>
      {props.items.map((item) => {
        return (
          <ServicesItem key={item.id}>
            <Icon
              iconId={item.iconId}
              width={item.iconWidth}
              height={item.iconHeight}
              viewBox={item.viewBox}
            />
            <SkillTitle>{item.title}</SkillTitle>
            <p>{item.description}</p>
          </ServicesItem>
        )
      })}
    </StyledServicesItems>
  )
}

const StyledServicesItems = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px 0;
  margin-top: 32px;
`
