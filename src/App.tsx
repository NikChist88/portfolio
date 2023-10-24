import { Wrapper } from './components/Wrapper'
import { Header } from './layout/header/Header'
import { Hero } from './layout/sections/hero/Hero'
import { About } from './layout/sections/about/About'
import { Services } from './layout/sections/services/Services'
import { Projects } from './layout/sections/projects/Projects'
import { Contact } from './layout/sections/contact/Contact'
import { Footer } from './layout/footer/Footer'

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Wrapper>
  )
}
