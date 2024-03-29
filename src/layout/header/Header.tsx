import { useState, useEffect } from 'react'
import { Container } from '../../components/styled/Container'
import { Flex } from '../../components/styled/Flex'
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu'
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu'
import { S } from './Header_Styles'
import { animateScroll as scroll } from 'react-scroll'

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <S.Header>
      <Container>
        <Flex
          align="center"
          justify="space-between"
          space="nowrap"
          height="100%"
        >
          <S.HeaderLogo
            href="#"
            onClick={() => {
              scroll.scrollToTop()
            }}
          >
            Jayjay Dinero
          </S.HeaderLogo>
          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </Flex>
      </Container>
    </S.Header>
  )
}
