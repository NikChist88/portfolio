import { Icon } from '../../../components/Icon'
import { SkillTitle } from '../../../components/styled/SkillTitle'
import { S } from './ServicesItems_Styles'

type ServicesItemsPropsType = {
  id: number
  iconId: string
  width?: string
  height?: string
  viewbox?: string
  title?: string
  description?: string
}

export const ServicesItems: React.FC<{
  items: Array<ServicesItemsPropsType>
}> = (props: { items: Array<ServicesItemsPropsType> }) => {
  return (
    <S.ServicesItems>
      {props.items.map((item) => {
        return (
          <S.ServicesItem key={item.id}>
            <Icon
              iconId={item.iconId}
              width={item.width}
              height={item.height}
              viewbox={item.viewbox}
              fill="none"
              stroke="#ffffff"
            />
            <SkillTitle>{item.title}</SkillTitle>
            <S.ServicesText>{item.description}</S.ServicesText>
          </S.ServicesItem>
        )
      })}
    </S.ServicesItems>
  )
}
