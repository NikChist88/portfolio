import styled from 'styled-components'

type ButtonPropsType = {
  primary?: boolean
  icon?: string
}

export const Button = styled.a<ButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 160px;
  min-height: 48px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  transition: background-color ease-in 0.3s;
  cursor: pointer;
  border: ${({ primary }) => (primary ? 'none' : '2px solid #7562e0')};
  background-color: ${({ primary }) => (primary ? '#7562e0' : '#1a1a29')};
  &:hover {
    background-color: ${({ primary }) => (primary ? '#5345a1' : '#7562e0')};
  }
  svg {
    margin-left: 8px;
  }
`
