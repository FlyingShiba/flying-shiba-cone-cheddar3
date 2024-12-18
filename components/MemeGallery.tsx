import Image from 'next/image'

export default function MemeGallery() {
  const memes = [
    { src: "/a/42271b98-760d-4f85-b7d1-805277e1c4ee", alt: "Motocross and Flying Shiba meme" },
    { src: "/a/047faa70-e5d6-4769-b82a-25fad2086ee2", alt: "Iron Man and Flying Shiba meme" },
    { src: "/a/f39c2787-fb4a-4741-bae0-88fde0fbd4dd", alt: "Thor and Flying Shiba meme" },
    { src: "/a/dc406af3-ae05-4d21-acff-6e2a83b9d43b", alt: "Mona Lisa and Flying Shiba meme" },
    { src: "/a/0d3cd2f4-ec6d-498c-a0bd-ecbea1fed036", alt: "UFO and Flying Shiba meme" },
    { src: "/meme 8.jpg", alt: "ET Shiba Moon" },
    { src: "/meme 9.jpg", alt: "Shiba Cornchip Jet" },
    { src: "/meme 611.jpg", alt: "Shiba Nacho United" },
    { src: "/meme 5.jpg", alt: "Shiba Cornchip Rocket" },
    { src: "/meme 10.jpg", alt: "Homer Shiba Money" },
    { src: "/meme 11.jpg", alt: "Planes Movie Poster" },
    { src: "/meme 12.jpg", alt: "Trump Doge Nacho" },
  ]

  return (
    <section id="meme-gallery" className="meme-gallery">
      <h2>Meme Gallery</h2>
      <div className="flying-shiba meme-shiba-diagonal">
        <Image src="/shibacohete 320.png" alt="Flying Shiba Diagonal" width={200} height={200} />
      </div>
      <div className="meme-container">
        {memes.map((meme, index) => (
          <Image key={index} src={meme.src} alt={meme.alt} width={500} height={300} />
        ))}
      </div>
    </section>
  )
}

