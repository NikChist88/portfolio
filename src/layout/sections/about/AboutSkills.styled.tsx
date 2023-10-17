import styled from 'styled-components'

export const StyledAboutSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 17px 17px;
  
  li {
    flex: 0 1 254px;
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
