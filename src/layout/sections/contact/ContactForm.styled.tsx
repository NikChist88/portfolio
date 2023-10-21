import styled from 'styled-components'
import { ContactFormField } from './ContactFormField.styled'

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  max-width: 480px;

  textarea {
    min-height: 100px;
    resize: none;
  }
`
