import styled from 'styled-components'

const HeaderLogo = styled.a`
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

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 80px;
  height: 1px;
  background-color: #181824;
  z-index: 100;

  ${HeaderLogo} {
    margin-right: 30px;
  }
`

export const S = {
  Header,
  HeaderLogo
}
