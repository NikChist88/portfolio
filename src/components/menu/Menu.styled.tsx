import styled from 'styled-components'

export const StyledNavigation = styled.nav`
  ul {
    display: flex;
    column-gap: 42px;
    list-style: none;
    li + li {
      margin-left: 10px;
    }
  }
`
