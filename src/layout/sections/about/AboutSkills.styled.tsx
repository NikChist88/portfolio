import styled from 'styled-components'

export const StyledAboutSkills = styled.ul`
  display: flex;
  margin-top: 20px;
  li {
    flex: 1 0 25%;
    min-height: 254px;
    padding: 24px;
    background-color: #bdbdbd;
    transition: background-color ease-in 0.3s;
    &:hover {
      background-color: #7562e0;
    }
  }
  
  li + li {
    margin-left: 17px;
  }

  a {
    position: relative;
    top: 73px;
    svg {
      margin-bottom: 5px;
    }
  }
`
