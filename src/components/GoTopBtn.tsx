import styled from 'styled-components'
import { Icon } from './Icon'

export const GoTopBtn: React.FC = () => {
  return (
    <StyledGoTopBtn>
      <Icon iconId="arrow-anchor" width="29px" height="28px" />
    </StyledGoTopBtn>
  )
}

const StyledGoTopBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 15px;
  bottom: 15px;
  width: 50px;
  height: 50px;
  background-color: #7562e0;
  border-radius: 50%;
  transition: background-color ease-in 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #5345a1;
  }
`
