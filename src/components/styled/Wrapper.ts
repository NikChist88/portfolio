import styled from 'styled-components'

export const Wrapper = styled.div`
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  & > main {
    flex-grow: 1;
  }
`
