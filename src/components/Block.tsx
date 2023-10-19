import styled from 'styled-components'

type BlockPropsType = {
  maxWidth?: string
}

export const Block = styled.div<BlockPropsType>`
  max-width: ${({ maxWidth }) => maxWidth};
`
