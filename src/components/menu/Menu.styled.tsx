import styled from 'styled-components'

export const StyledMenu = styled.nav`
  ul {
    display: flex;
    column-gap: 42px;
    list-style: none;
    li + li {
      margin-left: 10px;
    }
    a {
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      text-decoration: none;
      transition: color ease-in 0.3s;
      &:hover {
        color: #7562e0;
      }
    }
  }
`
