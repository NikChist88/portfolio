import { StyledNavigation } from './Menu.styled'
import { Link } from '../link/Link'

export const Menu = () => {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link text="Home" />
        </li>
        <li>
          <Link text="About me" />
        </li>
        <li>
          <Link text="Projects" />
        </li>
        <li>
          <Link text="Contact" />
        </li>
      </ul>
    </StyledNavigation>
  )
}
