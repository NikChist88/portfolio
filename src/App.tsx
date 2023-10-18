import { Header } from './layout/header/Header'
import { Hero } from './layout/sections/hero/Hero'
import { About } from './layout/sections/about/About'
import { Services } from './layout/sections/services/Services'

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
    </>
  )
}
