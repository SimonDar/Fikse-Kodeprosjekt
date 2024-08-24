import React from 'react';

const RetailPage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Section 1: Header */}
      <section className="px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">La oss fikse det!</h1>
        <p className="mb-8">
          Har din butikk behov for en sømløs håndtering av reklamasjoner? <br/>
          Med vårt system kan du enkelt booke reparasjon, rens og tilpasning av alle typer klær, vesker og sko. Vi henter og leverer innen 10 dager.
        </p>
        <div className="flex justify-between items-center">
          <a href="mailto:fikse@dargahi.com"><button className="px-6 py-2 border border-black">Kontakt oss</button></a>
        </div>
      </section>

      {/* Section 2: How it Works */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Slik funker det</h2>
        <div className="flex justify-between">
          <div className="text-center">
            <p className="font-medium">1. Dere får egen bedriftskode og avtale med kvartalsrapporter. Ingen begrensning på antall reparasjoner.</p>
<img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/41e081b4-281f-4086-8a1c-18ee62a0a9e7/matekatten.png" alt="" className='max-h-56 mx-auto' />          </div>
          <div className="text-center">
            <p className="font-medium">2. Ved reklamasjon, bestill på fikse.co. Registrer koden for å fullføre.</p>
<img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/f83a861d-4384-44e8-807b-4592e578a9fd/chille.png" alt="" className='max-h-56 mx-auto' />          </div>
          <div className="text-center">
            <p className="font-medium">3. Vi henter og leverer plagget til faste tider. Ferdig reparert innen 10 dager.</p>
<img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/09aad925-ffce-4320-af80-2bb71e684f1e/F-case-illustrasjon-3.jpg" alt="" className='max-h-56 mx-auto' />          </div>
        </div>
      </section>

      {/* Section 4: Images */}
      <section className="px-8 py-16 grid grid-cols-2 gap-8">
      <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/be10667c-ba37-421a-a0aa-621edbba3159/Screenshot+2023-03-10+at+15.14.06.png?format=1500w" alt="" className="w-96 h-96 object-cover" />
      <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/9867a6ad-9614-48ee-9c99-fe3a25cad619/Screenshot+2023-03-10+at+15.04.07.png?format=750w" alt="" className="w-96 h-96 object-cover" />
      <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/2b98a3a5-c43b-43a5-829f-cf8e2f7dcfc2/annisa-ica-QQKn7n5hBzw-unsplash.jpg?format=750w" alt="" className="w-96 h-96 object-cover" />
      <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/fc0df699-92b3-49de-a923-bcf0cf3b55c4/IMG_3466.JPG?format=750w" alt="" className="w-96 h-96 object-cover" />
      </section>
    </div>
  );
};

export default RetailPage;
