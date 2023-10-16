import iconsSprite from '../../assets/icons/sprite.svg'
import styled from 'styled-components'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <StyledIcon
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
    </StyledIcon>
  )
}

const StyledIcon = styled.svg`
  /* margin-left: 6px; */
`
