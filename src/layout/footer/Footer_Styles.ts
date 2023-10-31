import styled from 'styled-components'

const Footer = styled.footer`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const FooterText = styled.p`
  margin-bottom: 15px;
`

const FooterLink = styled.p`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    fill: #fff;
  }

  a {
    color: #7562e0;
  }
`

export const S = {
  Footer,
  FooterText,
  FooterLink,
}
