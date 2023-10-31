import styled from 'styled-components'
import { Flex } from '../../../components/styled/Flex'

const Hero = styled.section`
  padding: 80px 0 0px;
  min-height: clamp(590px, 60vw, 640px);
  height: 1px;
  position: relative;
`

const HeroContent = styled.div`
  flex: 0 1 435px;
  margin-right: 30px;
  padding-bottom: 55px;

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
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
  margin-bottom: 6px;
`

const HeroName = styled.h2`
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 600;
  margin-bottom: 12px;
`

const HeroDescription = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 32px;

  p {
    display: none;
  }
`

const HeroImage = styled.div`
  flex: 0 1 50%;
  align-self: flex-end;
  position: relative;
  display: flex;
  justify-content: flex-end;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: -115px;
    width: clamp(315px, 50vw, 486px);
    height: clamp(315px, 50vw, 486px);
    border-radius: 50%;
    background-color: #7562e0;
    z-index: -1;
  }

  img {
    max-width: 100%;
    width: 444px;
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
