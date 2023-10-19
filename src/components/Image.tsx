import styled from 'styled-components'

type ImagePropsType = {
  src: string
  alt: string
  height?: string
}

export const Image = (props: ImagePropsType) => {
  return (
    <></>
  )
}

const StyledImage = styled.img<ImagePropsType>`
  object-fit: cover;
  width: 100%;
`
