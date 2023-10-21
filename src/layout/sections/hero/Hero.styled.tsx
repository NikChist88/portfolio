import styled from 'styled-components'
import { Flex } from '../../../components/Flex'
import { Block } from '../../../components/Block'

export const StyledHero = styled.section`
  padding: 80px 0 0px;
  min-height: 640px;
  height: 1px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -120px;
    width: 100%;
    height: 128px;
    background-color: #181824;
    z-index: 2;
  }

  ${Block} {
    max-width: 435px;
    padding-bottom: 50px;
  }
`
