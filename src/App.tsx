import { Header } from './layout/header/Header'
import { Hero } from './layout/sections/hero/Hero'

export const App = () => {
  return (
    <>
      <Header text="Jayjay Dinero" />
      <Hero
        text="Hello, i'm"
        name="Jayjay D. Dinero"
        desc="A Web Developer. I create seamless web experiences for end-users."
      />
    </>
  )
}
