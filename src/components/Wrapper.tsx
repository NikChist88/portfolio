import styled from 'styled-components'

type WrapperPropsType = {
  maxWidth?: string
}

export const Wrapper = styled.div<WrapperPropsType>`
  max-width: ${({ maxWidth }) => maxWidth};
`
