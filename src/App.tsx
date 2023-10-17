import { Header } from './layout/header/Header'
import { Hero } from './layout/sections/hero/Hero'
import { About } from './layout/sections/about/About'
import { Services } from './layout/sections/services/Services'

export const App = () => {
  return (
    <>
      <Header logoText="Jayjay Dinero" />
      <Hero
        text="Hello, i'm"
        name="Jayjay D. Dinero"
        desc="A Web Developer. I create seamless web experiences for end-users."
      />
      <About />
      <Services />
    </>
  )
}
