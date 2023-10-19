import styled from 'styled-components'

type ImagePropsType = {
  height?: string
  minHeight?: string
  width?: string
  maxWidth?: string
  zIndex?: string
}

export const Image = styled.img<ImagePropsType>`
  object-fit: cover;
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  z-index: ${({ zIndex }) => zIndex};
`
