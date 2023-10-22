import styled from 'styled-components'
import { Flex } from '../../../components/Flex'
import { SectionTitle } from '../../../components/SectionTitle'

export const StyledContact = styled.section`
  padding: 80px 0;

  @media screen and (max-width: 768px) {
    padding: 40px 0;

    ${Flex} {
      flex-direction: column;
      align-items: center;
    }
  }

  ${SectionTitle} {
    margin-bottom: 16px;
  }
`
