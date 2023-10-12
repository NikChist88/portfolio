import { StyledHeader } from './StyledHeader.styled'
import { StyledContainer } from '../container/Container.styled'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <Menu />
      </StyledContainer>
    </StyledHeader>
  )
}
