import styled from 'styled-components'

export const StyledAboutSkills = styled.ul`
  display: flex;
  li + li {
    margin-left: 17px;
  }
  li {
    flex: 1 1 25%;
    height: 254px;
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
  }
`
