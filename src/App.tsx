import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import BlueSparkSystem from './sections/BlueSparkSystem'
import Workflow from './sections/Workflow'
import Services from './sections/Services'
import Niche from './sections/Niche'
import Proof from './sections/Proof'
import FinalCTA from './sections/FinalCTA'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <BlueSparkSystem />
        <Workflow />
        <Services />
        <Niche />
        <Proof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
