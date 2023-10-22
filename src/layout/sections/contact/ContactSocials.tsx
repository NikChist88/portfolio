import styled from 'styled-components'
import { Icon } from '../../../components/Icon'

type ConatactSocialsPropsType = {
  id: number
  aria: string
  iconId: string
  width: string
  height: string
  viewbox: string
}

export const ContactSocials = (props: {
  socials: Array<ConatactSocialsPropsType>
}) => {
  return (
    <StyledContactSocials>
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
    </StyledContactSocials>
  )
}

const StyledContactSocials = styled.ul`
  display: flex;
  gap: 0 16px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  svg {
    transition: fill ease-in 0.3s;
    &:hover {
      fill: #5345a1;
    }
  }
`
