import styled from 'styled-components'

const ContactSocials = styled.ul`
  display: flex;
  gap: 0 16px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  svg {
    transition: fill ease-in 0.3s;
    &:hover {
      fill: #5345a1;
    }
  }
`

export const S = {
  ContactSocials,
}
