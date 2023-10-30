import styled from 'styled-components'
import { Flex } from '../../../components/styled/Flex'
import { SectionTitle } from '../../../components/styled/SectionTitle'
import { Button } from '../../../components/styled/Button'

const Contact = styled.section`
  padding: 80px 0;

  @media screen and (max-width: 768px) {
    padding: 40px 0;

    ${Flex} {
      flex-direction: column;
      align-items: center;
    }
  }

  ${SectionTitle} {
    margin-bottom: 16px;
  }
`

const ContactContent = styled.div`
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    margin: 0 0 30px;
    text-align: center;
  }
`

const ContactText = styled.p`
  margin-bottom: 24px;
`

const ContactForm = styled.form`
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

const ContactFormTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

const ContactFormField = styled.input`
  width: 100%;
  max-width: 472px;
  height: 60px;
  background-color: rgba(245, 245, 245, 0.11);
  border-radius: 8px;
  padding: 16px;
  color: #fff;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const S = {
  Contact,
  ContactContent,
  ContactText,
  ContactForm,
  ContactFormTitle,
  ContactFormField,
}
