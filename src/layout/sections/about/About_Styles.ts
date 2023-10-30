import styled from 'styled-components'
import decor from '../../../assets/images/decor.jpg'
import { SectionTitle } from '../../../components/styled/SectionTitle'

const About = styled.section`
  padding: 190px 0 80px;
  background: url('${decor}') no-repeat top / 100% 130px;
  position: relative;
  background-color: #1a1a29;

  @media screen and (max-width: 768px) {
    padding: 100px 0 40px;
    background-size: 100% 75px;
  }

  ${SectionTitle} {
    margin-bottom: 10px;
  }
`

const AboutText = styled.p`
  line-height: 32px;
  margin-bottom: 25px;
`

const AboutDescription = styled.p`
  display: flex;
  align-items: center;
  font-size: calc((100vw - 320px) / (1920 - 320) * (24 - 18) + 14px);

  span {
    font-size: calc((100vw - 320px) / (1920 - 320) * (96 - 56) + 56px);
    font-weight: 600;
    color: #7562e0;
    margin-right: 25px;
  }
`

export const S = {
  About,
  AboutText,
  AboutDescription,
}
