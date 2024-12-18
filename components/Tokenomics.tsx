import Image from 'next/image'

export default function Tokenomics() {
  return (
    <section id="tokenomics">
      <h2>Tokenomics</h2>
      <div className="flying-shiba tokenomics-shiba-left">
        <Image src="/shibacohete 320.png" alt="Flying Shiba Left" width={200} height={200} />
      </div>
      <div className="flying-shiba tokenomics-shiba-right">
        <Image src="/shibacohete 320.png" alt="Flying Shiba Right" width={200} height={200} style={{transform: 'scaleX(-1)'}} />
      </div>
      <div className="flying-shiba tokenomics-shiba-diagonal">
        <Image src="/shibacohete 320.png" alt="Flying Shiba Diagonal" width={200} height={200} />
      </div>
      <div className="tokenomics-info">
        <p>🔒 SAFE CONTRACT<br/>
        Pumpfun token, CTO, no dev wallets</p>
        <p>💸 TAXES<br/>
        We are on Solana, No taxes here</p>
        <p>🔢 TOTAL SUPPLY<br/>
        1 Billion $FSCC tokens</p>
      </div>
    </section>
  )
}

