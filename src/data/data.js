import proj01 from '../assets/images/proj01.webp'
import proj02 from '../assets/images/proj02.webp'
import proj03 from '../assets/images/proj03.webp'

export const menuItems = ['Home', 'About me', 'Projects', 'Contact']

export const aboutItems = [
  {
    id: 1,
    iconId: 'ruler',
    iconWidth: '55px',
    iconHeight: '55px',
    viewBox: '0 0 55 55',
    title: 'ui & ux designing',
  },
  {
    id: 2,
    iconId: 'code',
    iconWidth: '52px',
    iconHeight: '52px',
    viewBox: '0 0 52 52',
    title: 'web development',
  },
  {
    id: 3,
    iconId: 'android',
    iconWidth: '62px',
    iconHeight: '62px',
    viewBox: '0 0 62 62',
    title: 'mobile development',
  },
  {
    id: 4,
    iconId: 'python',
    iconWidth: '55px',
    iconHeight: '55px',
    viewBox: '0 0 55 55',
    title: 'web scraping with python',
  },
]

export const servicesItems = [
  {
    id: 1,
    iconId: 'ruler',
    iconWidth: '45px',
    iconHeight: '45px',
    viewBox: '0 0 55 55',
    title: 'ui & ux designing',
    description: 'I design beautiful web iterfaces with Figma and Adove XD',
  },
  {
    id: 2,
    iconId: 'code',
    iconWidth: '45px',
    iconHeight: '45px',
    viewBox: '0 0 55 55',
    title: 'web development',
    description:
      'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS',
  },
  {
    id: 3,
    iconId: 'android',
    iconWidth: '45px',
    iconHeight: '45px',
    viewBox: '0 0 55 55',
    title: 'mobile development',
    description:
      'I am an expert mobile developer. I have experience using Flutter and React Native.',
  },
  {
    id: 4,
    iconId: 'git',
    iconWidth: '45px',
    iconHeight: '45px',
    viewBox: '0 0 60 60',
    title: 'Verion Control',
    description:
      'I can use version control systems well, and Git & Mecurial are my go-to tool.',
  },
  {
    id: 5,
    iconId: 'js',
    iconWidth: '45px',
    iconHeight: '45px',
    viewBox: '0 0 55 55',
    title: 'Npm and NodeJS',
    description:
      'I have core understanding of NPM. I can also develop general purpose applications with NodeJS',
  },
  {
    id: 6,
    iconId: 'slider',
    iconWidth: '45px',
    iconHeight: '45px',
    viewBox: '0 0 55 55',
    title: 'Web Scraping',
    description:
      'I can collect content and data from the internet then manipulate and analyze as needed.',
  },
]

export const projectsItems = [
  {
    id: 1,
    src: proj01,
    alt: 'Twinder Project',
    title: 'TWINDER',
    description:
      'A live Geolocation app for finding tweets and twitter users around you.',
  },
  {
    id: 2,
    src: proj02,
    alt: 'Livents Project',
    title: 'LIVENTS',
    description:
      'A video streaming app with live Geolocation, for streaming events.',
  },
  {
    id: 3,
    src: proj03,
    alt: 'Moove Project',
    title: 'MOOVE',
    description:
      'Mobile app for booking instant pickup & dropoff accross major cities.',
  },
]
