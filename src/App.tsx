import { Header } from './layout/header/Header'
import { Hero } from './layout/sections/hero/Hero'
import { About } from './layout/sections/about/About'
import { Services } from './layout/sections/services/Services'
import { Projects } from './layout/sections/projects/Projects'

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
    </>
  )
}
