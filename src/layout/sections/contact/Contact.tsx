import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { Flex } from '../../../components/Flex'
import { Block } from '../../../components/Block'
import { SectionTitle } from '../../../components/SectionTitle'
import { ContactSocials } from './ContactSocials'
import { ContactForm } from './ContactForm.styled'
import { ContactFormField } from './ContactFormField.styled'
import { Button } from '../../../components/Button'
import { contactSocials } from '../../../data/data'

export const Contact = () => {
  return (
    <StyledContact id='contact'>
      <Container>
        <Flex justify="space-between">
          <Block>
            <SectionTitle>Connect with me:</SectionTitle>
            <ContactText>Satisfied with me? Please contact me</ContactText>
            <ContactSocials socials={contactSocials} />
          </Block>
          <ContactForm action="#">
            <ContactFormTitle>
              Contact me, let’s make magic together
            </ContactFormTitle>
            <ContactFormField placeholder="Name" />
            <ContactFormField placeholder="Email" />
            <ContactFormField as={'textarea'} placeholder="Message" />
            <Button as={'button'} mWidth='175px'>
              Send
            </Button>
          </ContactForm>
        </Flex>
      </Container>
    </StyledContact>
  )
}

const StyledContact = styled.section`
  padding: 80px 0;

  ${SectionTitle} {
    margin-bottom: 16px;
  }
`
const ContactText = styled.p`
  margin-bottom: 24px;
`

const ContactFormTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
`