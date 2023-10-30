import styled from 'styled-components'
import { SkillTitle } from '../../../components/styled/SkillTitle'

const ServicesItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 20px;
`
const ServicesText = styled.p`
  font-size: 17px;
  line-height: 32px;
`

const ServicesItem = styled.li`
  min-height: 340px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 16px;
  border: 3px solid #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  color: #ffffff;

  &:nth-child(odd) {
    border-color: #7562e0;
    ${SkillTitle} {
      color: #ffffff;
    }
  }

  ${SkillTitle} {
    margin: 8px 0 16px;
    color: #7562e0;
  }

  @media screen and (max-width: 480px) {
    min-height: 300px;
    padding: 20px;
  }
`

export const S = {
  ServicesItems,
  ServicesText,
  ServicesItem,
}
