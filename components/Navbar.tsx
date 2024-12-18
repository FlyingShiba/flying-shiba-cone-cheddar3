import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <Link href="#home" className="brand-title">Flying Shiba Cone Cheddar</Link>
      <ul>
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#about">About Us</Link></li>
        <li><Link href="#meme-gallery">Meme Gallery</Link></li>
        <li><Link href="#tokenomics">Tokenomics</Link></li>
        <li><Link href="#how-to-buy">How To Buy</Link></li>
      </ul>
      <div className="social-icons">
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <Image src="/Pump_Fun_logo_PNG_(3).png" alt="Official Logo" width={24} height={24} />
        </a>
      </div>
    </nav>
  )
}

