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
          <button className="px-6 py-2 border border-black">Kontakt oss</button>
        </div>
      </section>

      {/* Section 2: How it Works */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Slik funker det</h2>
        <div className="flex justify-between">
          <div className="text-center">
            <p className="font-medium">1. Dere får egen bedriftskode og avtale med kvartalsrapporter. Ingen begrensning på antall reparasjoner.</p>
            <div className="mt-4 h-48 bg-gray-300"></div>
          </div>
          <div className="text-center">
            <p className="font-medium">2. Ved reklamasjon, bestill på fikse.co. Registrer koden for å fullføre.</p>
            <div className="mt-4 h-48 bg-gray-300"></div>
          </div>
          <div className="text-center">
            <p className="font-medium">3. Vi henter og leverer plagget til faste tider. Ferdig reparert innen 10 dager.</p>
            <div className="mt-4 h-48 bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Section 3: Partners */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Noen av våre samarbeidspartnere</h2>
        <div className="flex justify-between items-center overflow-x-scroll">
          <div className="flex space-x-8">
            <div className="text-center">
              <div className="w-40 h-40 bg-yellow-200 mb-2"></div>
              <p>Holzweiler</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-200 mb-2"></div>
              <p>Acne Studios</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-300 mb-2"></div>
              <p>Dapper Oslo</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 bg-green-200 mb-2"></div>
              <p>Another Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Images */}
      <section className="px-8 py-16 grid grid-cols-3 gap-8">
        <div className="h-64 bg-gray-300"></div>
        <div className="h-64 bg-gray-300"></div>
        <div className="h-64 bg-gray-300"></div>
        <div className="h-64 bg-gray-300"></div>
        <div className="h-64 bg-gray-300"></div>
        <div className="h-64 bg-gray-300"></div>
      </section>
    </div>
  );
};

export default RetailPage;
