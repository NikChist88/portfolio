import styled from 'styled-components'

const AboutSkills = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap: 16px;
  margin-top: 20px;
`

const AboutSkillsItem = styled.li`
  flex: 0 1 255px;
  min-height: 254px;
  padding: 24px;
  background-color: #bdbdbd;
  transition: background-color ease-in 0.3s;

  &:hover {
    background-color: #7562e0;
  }
`

const AboutSkillsLink = styled.a`
  position: relative;
  top: 73px;
`

export const S = {
  AboutSkills,
  AboutSkillsItem,
  AboutSkillsLink,
}
