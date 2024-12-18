import Image from 'next/image'

export default function HowToBuy() {
  return (
    <section id="how-to-buy">
      <h2>How To Buy</h2>
      <div className="flying-shiba how-to-buy-shiba-left">
        <Image src="/shibacohete 320.png" alt="Flying Shiba Left" width={200} height={200} />
      </div>
      <div className="flying-shiba how-to-buy-shiba-right">
        <Image src="/shibacohete 320.png" alt="Flying Shiba Right" width={200} height={200} style={{transform: 'scaleX(-1)'}} />
      </div>
      <div className="flying-shiba how-to-buy-shiba-diagonal">
        <Image src="/shibacohete 320.png" alt="Flying Shiba Diagonal" width={200} height={200} />
      </div>
      <div className="how-to-buy-info">
        <h3>📈 HOW TO BUY?</h3>
        
        <div className="step">
          <div className="step-number">1. Create Your Wallet</div>
          📱 Download Phantom or your preferred wallet from the App Store or Google Play for free. If you are a desktop user, download the Google Chrome extension through Phantom.
        </div>

        <div className="step">
          <div className="step-number">2. Get Some SOL</div>
          💸 Make sure to have SOL in your wallet to exchange for $FSCC. If you don&apos;t have SOL, you can buy it directly on Phantom, transfer from another wallet, or purchase it on another exchange and send it to your wallet.
        </div>

        <div className="step">
          <div className="step-number">3. Go to Pump Fun</div>
          🚀 Connect to Pump Fun, where the launch will take place. There is no presale; $FSCC will be launched directly on Pump Fun. You will trade $FSCC here first, and after completing the curve, it will be available for trading on Raydium. However, you can always use your preferred platform or bot for transactions.
        </div>

        <div className="step">
          <div className="step-number">4. Swap for $FSCC</div>
          🔄 Exchange SOL for $FSCC on Pump Fun. We have zero taxes, so you don't have to worry about specific slippage!
        </div>
      </div>
    </section>
  )
}

