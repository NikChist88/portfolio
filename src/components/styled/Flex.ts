import styled from 'styled-components'

type FlexPropsType = {
  align?: string
  justify?: string
  direction?: string
  alignSefl?: string
  justifySelf?: string
  gap?: string
  space?: string
  width?: string
  height?: string
}

export const Flex = styled.div<FlexPropsType>`
  display: flex;
  white-space: ${({ space }) => space};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  align-self: ${({ alignSefl }) => alignSefl};
  justify-self: ${({ justifySelf }) => justifySelf};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`
