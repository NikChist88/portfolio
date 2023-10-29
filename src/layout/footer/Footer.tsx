import { S } from './Footer_Styles'
import { Icon } from '../../components/Icon'

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.FooterText>More projects I’ve worked on</S.FooterText>
      <S.FooterLink>
        <Icon iconId="github" width="31px" height="31px" />@
        <a href="#">john-doe</a> on github
      </S.FooterLink>
    </S.Footer>
  )
}
