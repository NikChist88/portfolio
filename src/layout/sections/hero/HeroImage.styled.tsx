import styled from 'styled-components'

export const HeroImage = styled.div`
  flex: 0 1 444px;
  align-self: flex-end;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: -115px;
    width: 486px;
    height: 486px;
    border-radius: 50%;
    background-color: #7562e0;
    z-index: -1;
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
