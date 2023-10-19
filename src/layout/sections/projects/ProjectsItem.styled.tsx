import styled from 'styled-components'

export const ProjectsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  background-color: #31313f;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: 170px;
    margin-bottom: 16px;
    border-radius: 8px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 5px;
    color: #7562e0;
  }

  p {
    flex-grow: 1;
    margin-bottom: 24px;
  }
`
