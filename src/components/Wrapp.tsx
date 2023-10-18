import styled from 'styled-components'

type WrappPropsType = {
  maxWidth?: string
}

export const Wrapp = styled.div<WrappPropsType>`
  max-width: ${({ maxWidth }) => maxWidth};
`
