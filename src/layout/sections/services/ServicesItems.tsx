import styled from 'styled-components'
import { Icon } from '../../../components/Icon'
import { SkillTitle } from '../../../components/SkillTitle'
import { ServicesItem } from './ServicesItem.styled'

type ServicesItemsPropsType = {
  id: number
  iconId: string
  width?: string
  height?: string
  viewbox: string
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
              width={item.width}
              height={item.height}
              viewbox={item.viewbox}
              fill="none"
              stroke="#ffffff"
            />
            <SkillTitle>{item.title}</SkillTitle>
            <ServicesText>{item.description}</ServicesText>
          </ServicesItem>
        )
      })}
    </StyledServicesItems>
  )
}

const StyledServicesItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`
const ServicesText = styled.p`
  font-size: 17px;
  line-height: 32px;
`
