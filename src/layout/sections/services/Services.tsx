import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { ServicesItems } from './ServicesItems'

const servicesItems = [
  {
    id: 1,
    iconId: 'ruler',
    iconWidth: '55px',
    iconHeight: '55px',
    viewBox: '0 0 55 55',
    title: 'ui & ux designing',
    description: 'I design beautiful web iterfaces with Figma and Adove XD',
  },
  {
    id: 2,
    iconId: 'code',
    iconWidth: '57px',
    iconHeight: '57px',
    viewBox: '0 0 57 57',
    title: 'web development',
    description:
      'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS',
  },
  {
    id: 3,
    iconId: 'android',
    iconWidth: '70px',
    iconHeight: '70px',
    viewBox: '0 0 70 70',
    title: 'mobile development',
    description:
      'I am an expert mobile developer. I have experience using Flutter and React Native.',
  },
  {
    id: 4,
    iconId: 'git',
    iconWidth: '62px',
    iconHeight: '62px',
    viewBox: '0 0 62 62',
    title: 'Verion Control',
    description:
      'I can use version control systems well, and Git & Mecurial are my go-to tool.',
  },
  {
    id: 5,
    iconId: 'js',
    iconWidth: '40px',
    iconHeight: '44px',
    viewBox: '0 0 40 44',
    title: 'Npm and NodeJS',
    description:
      'I have core understanding of NPM. I can also develop general purpose applications with NodeJS',
  },
  {
    id: 6,
    iconId: 'slider',
    iconWidth: '48px',
    iconHeight: '48px',
    viewBox: '0 0 48 48',
    title: 'Web Scraping',
    description:
      'I can collect content and data from the internet then manipulate and analyze as needed.',
  },
]

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
`
