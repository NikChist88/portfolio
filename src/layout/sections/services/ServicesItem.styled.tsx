import styled from 'styled-components'

export const ServicesItem = styled.li`
  flex: 0 1 340px;
  min-height: 340px;
  height: 100%;
  padding: 75px 20px 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 16px;
  border: 3px solid #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

  h3 {
    margin-top: 8px;
  }

  p {
    margin-top: 16px;
    font-size: 17px;
    line-height: 32px;
  }
`
