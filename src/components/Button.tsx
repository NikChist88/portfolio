import styled, { css } from 'styled-components'

type ButtonPropsType = {
  outline?: boolean
  height?: string
  mWidth?: string
}

export const Button = styled.a<ButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  color: #fff;
  background-color: #7562e0;
  border: none;
  transition: background-color ease-in 0.3s, border-color ease-in 0.3s;
  cursor: pointer;
  width: 100%;
  max-width: ${({ mWidth }) => mWidth || '160px'};
  height: ${({ height }) => height || '50px'};

  ${({ outline }) =>
    outline &&
    css`
      background-color: transparent;
      border: 2px solid #7562e0;
    `}

  &:hover {
    ${({ outline }) =>
      outline
        ? css`
            background-color: #7562e0;
            border-color: #7562e0;
          `
        : css`
            background-color: #5345a1;
          `}
  }

  svg {
    margin-left: 8px;
  }
`
