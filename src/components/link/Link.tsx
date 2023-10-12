import { StyledLink } from './Link.styled'

type LinkPropsType = {
  text: string
}

export const Link = (props: LinkPropsType) => {
  return <StyledLink href="#">{props.text}</StyledLink>
}
