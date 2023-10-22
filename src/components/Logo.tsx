import styled from 'styled-components'

export const Logo = styled.a`
  display: inline-block;
  font-size: calc((100vw - 320px) / (1920 - 320) * (28 - 24) + 24px);
  font-weight: 600;
  color: #7562e0;
  text-decoration: none;
  transition: color ease-in 0.3s;

  &:hover {
    color: #5648a5;
  }
`