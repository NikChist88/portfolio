import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { ServicesItems } from './ServicesItems'
import { servicesItems } from '../../../data/data'

export const Services = () => {
  return (
    <StyledServices>
      <Container>
        <SectionTitle>The services i offer:</SectionTitle>
        <ServicesItems items={servicesItems} />
      </Container>
    </StyledServices>
  )
}

const StyledServices = styled.section`
  padding: 40px 0;

  h2 {
    margin-bottom: 32px;
  }
`
