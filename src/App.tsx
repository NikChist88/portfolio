import { Wrapper } from './components/styled/Wrapper'
import { Header } from './layout/header/Header'
import { Hero } from './layout/sections/hero/Hero'
import { About } from './layout/sections/about/About'
import { Services } from './layout/sections/services/Services'
import { Projects } from './layout/sections/projects/Projects'
import { Contact } from './layout/sections/contact/Contact'
import { Footer } from './layout/footer/Footer'
import { GoTopBtn } from './components/GoTopBtn'
import { Particle } from './components/Particle'

export const App = () => {
  return (
    <Wrapper>
      <Particle />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <GoTopBtn />
    </Wrapper>
  )
}
