import styled from 'styled-components'

export const Menu = styled.ul`
  display: flex;
  white-space: nowrap;
  column-gap: 52px;

  @media screen and (max-width: 992px) {
    column-gap: 22px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
