import styled from 'styled-components'

type ImagePropsType = {
  height?: string
  width?: string
  maxWidth?: string
}

export const HeroImage = styled.img<ImagePropsType>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  object-fit: cover;
  z-index: 1;
`
