import styled from 'styled-components'
import { SectionTitle } from '../../../components/styled/SectionTitle'

const Services = styled.section`
  padding: 80px 0;
  position: relative;
  background-color: #1a1a29;

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }

  ${SectionTitle} {
    margin-bottom: 32px;
  }
`

export const S = {
  Services,
}
