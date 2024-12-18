import Image from 'next/image'

export default function About() {
  return (
    <section id="about">
      <h2>About Us</h2>
      <div className="flying-shiba about-shiba-left">
        <Image src="/shibacohete 320.png" alt="Flying Shiba Left" width={200} height={200} />
      </div>
      <div className="flying-shiba about-shiba-right">
        <Image src="/shibacohete 320.png" alt="Flying Shiba Right" width={200} height={200} style={{transform: 'scaleX(-1)'}} />
      </div>
      <div className="flying-shiba about-shiba-diagonal">
        <Image src="/shibacohete 320.png" alt="Flying Shiba Diagonal" width={200} height={200} />
      </div>
      <div className="about-info">
        <p>Inspired by the joy and excitement of meme culture, Flying Shiba Cone Cheddar is the perfect ambassador for our new and thrilling coin. This quirky character combines the unmatched adorableness of Shiba Inus and the deliciousness of cheddar cone snacks.</p>
        <p>Our canine friend has blasted off into space in his cheese-powered vehicle, ready to soar through the heights of Pump.Fun and conquer the moons of Raydium. Join him on his epic adventure across the Solana blockchain, where together we&apos;ll fly to new heights and claim our place among the stars of memecoins.</p>
      </div>
    </section>
  )
}

