import { Icon } from '../../../components/Icon'
import { S } from './ContactSocials_Styles'

type ConatactSocialsPropsType = {
  id: number
  aria: string
  iconId: string
  width: string
  height: string
  viewbox: string
}

export const ContactSocials: React.FC<{
  socials: Array<ConatactSocialsPropsType>
}> = (props: { socials: Array<ConatactSocialsPropsType> }) => {
  
  return (
    <S.ContactSocials>
      {props.socials.map((social) => {
        return (
          <li key={social.id}>
            <a aria-label={social.aria} href="#">
              <Icon
                iconId={social.iconId}
                width={social.width}
                height={social.height}
                viewbox={social.viewbox}
                fill="#7562E0"
              />
            </a>
          </li>
        )
      })}
    </S.ContactSocials>
  )
}
