import styled from 'styled-components'

type FlexPropsType = {
  align?: string
  justify?: string
  direction?: string
  gap?: string
  width?: string
  height?: string
  marginTop?: string
}

export const Flex = styled.div<FlexPropsType>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-top: ${({ marginTop }) => marginTop};
`
