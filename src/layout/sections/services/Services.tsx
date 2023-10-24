import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { ServicesItems } from './ServicesItems'
import { servicesItems } from '../../../data/data'

export const Services = () => {
  return (
    <StyledServices id="services">
      <Container>
        <SectionTitle>The services i offer:</SectionTitle>
        <ServicesItems items={servicesItems} />
      </Container>
    </StyledServices>
  )
}

const StyledServices = styled.section`
  padding: 80px 0;
  
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }

  ${SectionTitle} {
    margin-bottom: 32px;
  }
`
