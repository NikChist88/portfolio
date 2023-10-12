import styled from 'styled-components'

export const StyledLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: color ease-in 0.3s;
  & + a {
    margin-left: 10px;
  }
  &:hover {
    color: #7562e0;
  }
`
