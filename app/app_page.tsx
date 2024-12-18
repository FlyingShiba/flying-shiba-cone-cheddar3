import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import MemeGallery from '../components/MemeGallery'
import Tokenomics from '../components/Tokenomics'
import HowToBuy from '../components/HowToBuy'
import CheddarDroplet from '../components/CheddarDroplet'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <MemeGallery />
      <Tokenomics />
      <HowToBuy />
      <CheddarDroplet />
    </main>
  )
}

