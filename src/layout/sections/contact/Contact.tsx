import { Container } from '../../../components/Container'
import { Flex } from '../../../components/Flex'
import { SectionTitle } from '../../../components/SectionTitle'
import { ContactSocials } from './ContactSocials'
import { Button } from '../../../components/Button'
import { contactSocials } from '../../../data/data'
import { S } from './Contact_Styles'

export const Contact: React.FC = () => {
  return (
    <S.Contact id="contact">
      <Container>
        <Flex justify="space-between">
          <S.ContactContent>
            <SectionTitle>Connect with me:</SectionTitle>
            <S.ContactText>Satisfied with me? Please contact me</S.ContactText>
            <ContactSocials socials={contactSocials} />
          </S.ContactContent>
          <S.ContactForm action="#">
            <S.ContactFormTitle>
              Contact me, let’s make magic together
            </S.ContactFormTitle>
            <S.ContactFormField placeholder="Name" />
            <S.ContactFormField type="email" placeholder="Email" />
            <S.ContactFormField as={'textarea'} placeholder="Message" />
            <Button as={'button'} mWidth="175px">
              Send
            </Button>
          </S.ContactForm>
        </Flex>
      </Container>
    </S.Contact>
  )
}
