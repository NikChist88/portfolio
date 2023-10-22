import styled from 'styled-components'

export const AboutDescription = styled.p`
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
