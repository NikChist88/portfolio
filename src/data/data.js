import proj01 from '../assets/images/proj01.webp'
import proj02 from '../assets/images/proj02.webp'
import proj03 from '../assets/images/proj03.webp'

export const menuItems = [
  {
    id: 1,
    anchor: '#home',
    item: 'Home'
  },
  {
    id: 2,
    anchor: '#about',
    item: 'About me'
  },
  {
    id: 3,
    anchor: '#services',
    item: 'Services'
  },
  {
    id: 4,
    anchor: '#projects',
    item: 'Projects'
  },
  {
    id: 5,
    anchor: '#contact',
    item: 'Contact'
  }
]

export const aboutItems = [
  {
    id: 1,
    iconId: 'ruler',
    width: '40px',
    height: '40px',
    viewbox: '0 0 25 25',
    title: 'ui & ux designing',
  },
  {
    id: 2,
    iconId: 'web',
    width: '50px',
    height: '50px',
    viewbox: '0 0 60 60',
    title: 'web development',
  },
  {
    id: 3,
    iconId: 'mobile',
    width: '50px',
    height: '50px',
    viewbox: '0 0 30 30',
    title: 'mobile development',
  },
  {
    id: 4,
    iconId: 'python',
    width: '50px',
    height: '50px',
    viewbox: '0 0 25 25',
    title: 'web scraping with python',
  },
]

export const servicesItems = [
  {
    id: 1,
    iconId: 'ruler',
    width: '55px',
    height: '55px',
    viewbox: '0 0 35 35',
    title: 'ui & ux designing',
    description: 'I design beautiful web iterfaces with Figma and Adove XD',
  },
  {
    id: 2,
    iconId: 'web',
    width: '50px',
    height: '50px',
    viewbox: '0 0 60 60',
    title: 'web development',
    description:
      'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS',
  },
  {
    id: 3,
    iconId: 'mobile',
    width: '45px',
    height: '45px',
    viewbox: '0 0 25 25',
    title: 'mobile development',
    description:
      'I am an expert mobile developer. I have experience using Flutter and React Native.',
  },
  {
    id: 4,
    iconId: 'git',
    width: '45px',
    height: '45px',
    viewbox: '0 0 25 25',
    title: 'Verion Control',
    description:
      'I can use version control systems well, and Git & Mecurial are my go-to tool.',
  },
  {
    id: 5,
    iconId: 'js',
    width: '45px',
    height: '45px',
    viewbox: '0 0 55 55',
    title: 'Npm and NodeJS',
    description:
      'I have core understanding of NPM. I can also develop general purpose applications with NodeJS',
  },
  {
    id: 6,
    iconId: 'scraping',
    width: '45px',
    height: '45px',
    viewbox: '0 0 30 30',
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

export const contactSocials = [
  {
    id: 1,
    aria: 'Facebook',
    iconId: 'fb',
    width: '32px',
    height: '32px',
    viewbox: '0 0 32 32',
  },
  {
    id: 2,
    aria: 'Instagram',
    iconId: 'instagram',
    width: '32px',
    height: '32px',
    viewbox: '0 0 32 32',
  },
  {
    id: 3,
    aria: 'Dribble',
    iconId: 'dribble',
    width: '32px',
    height: '32px',
    viewbox: '0 0 32 32',
  },
  {
    id: 4,
    aria: 'SMS',
    iconId: 'sms',
    width: '32px',
    height: '32px',
    viewbox: '0 0 32 32',
  },
]
