import styled from 'styled-components'

type ButtonPropsType = {
  primary?: boolean
  icon?: string
  height?: string
  width?: string
  bg?: string
  border?: string
}

export const Button = styled.a<ButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  color: #fff;
  transition: background-color ease-in 0.3s, border-color ease-in 0.3s;
  cursor: pointer;
  border: ${({ border }) => border || '2px solid #7562e0'};
  background-color: ${({ bg }) => bg || '#7562e0'};
  height: ${({ height }) => height || '48px'};
  width: ${({ width }) => width || '160px'};

  &:hover {
    background-color: ${({ primary }) => (primary ? '#50439b' : '#7562e0')};
    border-color: ${({ primary }) => (primary ? '#50439b' : '#7562e0')};
  }

  svg {
    margin-left: 8px;
  }
`
