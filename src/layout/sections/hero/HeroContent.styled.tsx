import styled from 'styled-components'
import { Flex } from '../../../components/Flex'

export const HeroContent = styled.div`
  flex: 0 1 435px;
  align-self: flex-end;
  margin-right: 30px;
  padding-bottom: 55px;

  @media screen and (max-width: 930px) {
    ${Flex} {
      flex-direction: column;
      gap: 16px 0;
    }
  }

  @media screen and (max-width: 768px) {
    flex: 1 1 auto;
    margin-right: 0px;
    padding-bottom: 0px;
    align-self: center;
    text-align: center;
    
    ${Flex} {
      flex-direction: row;
      justify-content: center;
      gap: 0 32px;

      @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 16px 0;
        align-items: center;
      }
    }
  }
`
