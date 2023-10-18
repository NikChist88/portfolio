import styled from 'styled-components'

export const ServicesItem = styled.li`
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
  transition: border-color ease-in 0.3s;

  &:hover {
    border-color: #7562e0;
    h3 {
      color: #7562e0;
    }
  }

  svg {
    margin-bottom: 8px;
  }

  h3 {
    margin-bottom: 16px;
    transition: color ease-in 0.3s;
  }

  a {
    color: #ffffff;
  }

  p {
    font-size: 17px;
    line-height: 32px;
  }
`
