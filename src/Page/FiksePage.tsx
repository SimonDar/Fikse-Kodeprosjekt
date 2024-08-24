import React, { useState } from 'react';




const HomePage: React.FC = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold">
          Det naturlige valget for alt av små reparasjoner
        </h1>
        <a href="#bestille"><button className="mt-8 px-6 py-2 border border-black">
          Bestill fiksing
        </button></a>
      </header>

      {/* Main Content */}
      <main className="px-8">
        <section className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4">
            Vi gjør det enkelt og raskt å fikse
          </h2>
          <div className="flex justify-between items-center w-full">
          <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/32b28f1b-b5b0-42c3-aacc-25b3d77ccd5f/familien.jpg?format=750w" alt="Description of image" />
             <div className="ml-8">
      <ul className="space-y-2">
        <li className="border-b pb-2">
          <button onClick={() => toggleItem(0)} className="w-full text-left">
            Hva er Fikse?
          </button>
          {activeIndex === 0 && (
            <div className="mt-2">
              Vi kobler brands og privatkunder med skreddrere og reparatører
              gjennom vår digitale løsning for reparasjoner av klær, sko og
              tilbehør.
            </div>
          )}
        </li>
        <li className="border-b pb-2">
          <button onClick={() => toggleItem(1)} className="w-full text-left">
            Hvor er vi?
          </button>
          {activeIndex === 1 && (
            <div className="mt-2">
              Vi er for tiden operative i Oslo, men sender til hele landet. Du
              kan også levere fysisk hos våre samarbeidspartnere.
            </div>
          )}
        </li>
        <li className="border-b pb-2">
          <button onClick={() => toggleItem(2)} className="w-full text-left">
            Våre tjenester
          </button>
          {activeIndex === 2 && (
            <div className="mt-2">
              Vi tilbyr reparasjon og rens av
              <ul className="list-disc list-inside">
                <li>Klær, sko og tilbehør</li>
                <li>Bunad og bunadssølv</li>
                <li>Skinnklær</li>
              </ul>
              <a
                href="http://localhost:5173/#bestille"
                className="text-blue-500 underline mt-2 block"
              >
                Se prisliste her
              </a>
            </div>
          )}
        </li>
        <li className="border-b pb-2">
          <button onClick={() => toggleItem(3)} className="w-full text-left">
            For investorer
          </button>
          {activeIndex === 3 && (
            <div className="mt-2">
              Se denne siden for nøkkeltall, resultater og milepæler.
            </div>
          )}
        </li>
        <li className="border-b pb-2">
          <button onClick={() => toggleItem(4)} className="w-full text-left">
            Samarbeidspartnere
          </button>
          {activeIndex === 4 && (
            <div className="mt-2">
              Vi samarbeider med retail, reparatører og andre aktører innen
              sirkulær økonomi. Ta gjerne kontakt med oss for en prat!
            </div>
          )}
        </li>
      </ul>
    </div>
          </div>
        </section>

        {/* How to Fix Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Slik fikser du</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="font-medium">1. Legg inn din bestilling på fikse.co</p>
              <p className="mt-2 text-gray-600">
                Velg kategori og type fiks. Husk å legge til beskrivelse, for eksempel farge på glidelås.
              </p>
                <img  className="max-h-64" src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/09aad925-ffce-4320-af80-2bb71e684f1e/F-case-illustrasjon-3.jpg" alt="en" />
              
              </div>
            <div className="text-center">
              <p className="font-medium">2. Velg hvordan du ønsker å levere og hente</p>
              <p className="mt-2 text-gray-600">
                Om du ønsker hjelp eller råd må du levere selv, ellers kan du sende med bud eller levere til en av våre drop off stasjoner.
              </p>
              <img className="max-h-64 items-center" src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/37af61c2-5429-4191-80e1-70ea9b5d8214/fikselady.png" alt="to" />
            </div>
            <div className="text-center">
              <p className="font-medium">3. Betal og få beskjed når det er klart</p>
              <p className="mt-2 text-gray-600">
                Bestillingen din blir reparert av en av våre dyktige reparatører og er ferdig fikset innen 10 dager.
              </p>
              <img className="max-h-64 items-center" src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/f83a861d-4384-44e8-807b-4592e578a9fd/chille.png" alt="to" />
            </div>
          </div>
        </section>

        {/* Pop Up Section */}
        <section className="mt-16 text-center">
          <div className="relative">
            <h2 className="text-5xl font-bold mb-8">
            POP UP POP UP POP UP POP UP POP UP POP UP POP UP
            </h2>
            <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/5c5452a0-bd78-4370-96d3-39f33b52555e/IMG_2792.jpeg?format=2500w"className="absolute top-0  left-1/3 w-64 h-96 bg-gray-300"></img>
            <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/7b5360df-9425-4613-9339-19b0f8c04b0f/bcg3.jpeg?format=2500w" className="absolute top-12 left-1/2 w-64 h-96 bg-gray-300"></img>
          </div>
          <div className="mt-16 text-left">
            <p>
              Fikse har flere popups og eventer i samarbeid med andre aktører.
              <br />
              Jobber du i retail eller på et kontor? Vi tar imot bestillinger der
              du er.
              <br />
              Kontakt oss for å se hva vi kan tilby av arrangementer for din
              arbeidsplass!
            </p>
            <div className="mt-8 flex flex-col space-y-4">

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
