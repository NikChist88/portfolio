import styled from "styled-components"
import { Icon } from "../../components/Icon"

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>More projects I’ve worked on</FooterText>
      <FooterLink>
        <Icon iconId="github" width="31px" height="31px"/>
        @<a href="#">john-doe</a> on github
      </FooterLink>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181824;
`;

const FooterText = styled.p`
  margin-bottom: 15px;
`;

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
`;