import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="flying-shiba shiba-1">
        <Image src="/shibacohete 320.png" alt="Flying Shiba 1" width={200} height={200} />
      </div>
      <div className="flying-shiba shiba-2">
        <Image src="/shibacohete 320.png" alt="Flying Shiba 2" width={200} height={200} />
      </div>
      <div className="flying-shiba shiba-3">
        <Image src="/shibacohete 320.png" alt="Flying Shiba 3" width={200} height={200} />
      </div>
      <div className="flying-shiba home-shiba-diagonal">
        <Image src="/shibacohete 320.png" alt="Flying Shiba Diagonal" width={300} height={300} />
      </div>
    </section>
  )
}

