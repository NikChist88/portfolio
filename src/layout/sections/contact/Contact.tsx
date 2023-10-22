import styled from 'styled-components'
import { StyledContact } from './Contact.styled'
import { Container } from '../../../components/Container'
import { Flex } from '../../../components/Flex'
import { ContactContent } from './ContactContent.styled'
import { SectionTitle } from '../../../components/SectionTitle'
import { ContactSocials } from './ContactSocials'
import { ContactForm } from './ContactForm.styled'
import { ContactFormTitle } from './ContactFormTitle.styled'
import { ContactFormField } from './ContactFormField.styled'
import { Button } from '../../../components/Button'
import { contactSocials } from '../../../data/data'

export const Contact = () => {
  return (
    <StyledContact id="contact">
      <Container>
        <Flex justify="space-between">
          <ContactContent>
            <SectionTitle>Connect with me:</SectionTitle>
            <ContactText>Satisfied with me? Please contact me</ContactText>
            <ContactSocials socials={contactSocials} />
          </ContactContent>
          <ContactForm action="#">
            <ContactFormTitle>
              Contact me, let’s make magic together
            </ContactFormTitle>
            <ContactFormField placeholder="Name" />
            <ContactFormField placeholder="Email" />
            <ContactFormField as={'textarea'} placeholder="Message" />
            <Button as={'button'} mWidth="175px">
              Send
            </Button>
          </ContactForm>
        </Flex>
      </Container>
    </StyledContact>
  )
}

const ContactText = styled.p`
  margin-bottom: 24px;
`