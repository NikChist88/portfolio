import styled from 'styled-components'
import { Icon } from './Icon'
import { animateScroll as scroll } from 'react-scroll'
import { useEffect, useState } from 'react'

export const GoTopBtn: React.FC = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setShowBtn(true) : setShowBtn(false)
    })
  }, [])

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop()
          }}
        >
          <Icon iconId="arrow-anchor" width="29px" height="28px" />
        </StyledGoTopBtn>
      )}
    </>
  )
}

const StyledGoTopBtn = styled.a`
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

  svg {
    transition: transform ease-in 0.3s;
  }

  &:hover {
    background-color: #5345a1;

    svg {
      transform: translateY(-3px);
    }
  }

  @media screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`
