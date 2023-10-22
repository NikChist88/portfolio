import styled from 'styled-components'
import { Button } from '../../../components/Button'

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  max-width: 480px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;

    ${Button} {
      align-self: center;
    }
  }

  textarea {
    min-height: 100px;
    resize: none;
  }
`
