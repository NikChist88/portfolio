import styled from 'styled-components'
import { Flex } from '../../../components/styled/Flex'

const Hero = styled.section`
  padding: 80px 0 0px;
  min-height: 640px;
  height: 1px;
  position: relative;
`

const HeroContent = styled.div`
  flex: 0 1 435px;
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
    margin-right: 0;
    padding-bottom: 0;
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

const HeroText = styled.span`
  display: inline-block;
  font-size: calc((100vw - 320px) / (1920 - 320) * (32 - 24) + 24px);
  font-weight: 600;
  margin-bottom: 6px;
`

const HeroName = styled.h2`
  font-size: calc((100vw - 320px) / (1920 - 320) * (52 - 34) + 34px);
  font-weight: 600;
  margin-bottom: 12px;
`

const HeroDescription = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 32px;
`

const HeroImage = styled.div`
  flex: 0 1 444px;
  align-self: flex-end;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: -115px;
    width: 486px;
    height: 486px;
    border-radius: 50%;
    background-color: #7562e0;
    z-index: -1;
  }

  img {
    display: block;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const S = {
  Hero,
  HeroContent,
  HeroText,
  HeroName,
  HeroDescription,
  HeroImage,
}
