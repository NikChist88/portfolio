import { Container } from '../../../components/styled/Container'
import { SectionTitle } from '../../../components/styled/SectionTitle'
import { ServicesItems } from './ServicesItems'
import { servicesItems } from '../../../data/data'
import { S } from './Services_Styles'

export const Services: React.FC = () => {
  return (
    <S.Services id="services">
      <Container>
        <SectionTitle>The services i offer:</SectionTitle>
        <ServicesItems items={servicesItems} />
      </Container>
    </S.Services>
  )
}
