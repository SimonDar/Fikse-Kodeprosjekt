import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold">
          Det naturlige valget for alt av små reparasjoner
        </h1>
        <button className="mt-8 px-6 py-2 border border-black">
          Bestill fiksing
        </button>
      </header>

      {/* Main Content */}
      <main className="px-8">
        <section className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4">
            Vi gjør det enkelt og raskt å fikse
          </h2>
          <div className="flex justify-between items-center w-full">
            <div className="w-1/2 h-64 bg-gray-300"></div>
            <div className="ml-8">
              <ul className="space-y-2">
                <li className="border-b pb-2">Hva er Fikse?</li>
                <li className="border-b pb-2">Hvor er vi?</li>
                <li className="border-b pb-2">Våre tjenester</li>
                <li className="border-b pb-2">For investorer</li>
                <li className="border-b pb-2">Samarbeidspartnere</li>
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
              <div className="mt-4 h-48 bg-gray-300"></div>
            </div>
            <div className="text-center">
              <p className="font-medium">2. Velg hvordan du ønsker å levere og hente</p>
              <p className="mt-2 text-gray-600">
                Om du ønsker hjelp eller råd må du levere selv, ellers kan du sende med bud eller levere til en av våre drop off stasjoner.
              </p>
              <div className="mt-4 h-48 bg-gray-300"></div>
            </div>
            <div className="text-center">
              <p className="font-medium">3. Betal og få beskjed når det er klart</p>
              <p className="mt-2 text-gray-600">
                Bestillingen din blir reparert av en av våre dyktige reparatører og er ferdig fikset innen 10 dager.
              </p>
              <div className="mt-4 h-48 bg-gray-300"></div>
            </div>
          </div>
        </section>

        {/* Pop Up Section */}
        <section className="mt-16 text-center">
          <div className="relative">
            <h2 className="text-5xl font-bold mb-8">
              POP UP POP UP POP UP POP UP
            </h2>
            <div className="absolute top-0 left-1/3 w-64 h-96 bg-gray-300"></div>
            <div className="absolute top-12 left-1/2 w-64 h-96 bg-gray-300"></div>
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
              <a href="#" className="text-blue-600">
                → Sjekk ut flere eventer
              </a>
              <a href="#" className="text-blue-600">
                → Kontakt oss
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
