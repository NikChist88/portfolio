import styled from 'styled-components'

export const StyledAboutSkills = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap: 16px;
  margin-top: 20px;

  li {
    flex: 0 1 255px;
    min-height: 254px;
    padding: 24px;
    background-color: #bdbdbd;
    transition: background-color ease-in 0.3s;

    &:hover {
      background-color: #7562e0;
    }
  }

  a {
    position: relative;
    top: 73px;

    svg {
      margin-bottom: 5px;
    }
  }
`
