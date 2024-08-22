import React from 'react';

const RepairServicePage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Section 1: Header */}
      <section className="px-8 py-16">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Vi gir deg flere kunder</h1>
            <p className="mb-4">
              Er du reparatør innen klær, sko eller skinn? Bli en del av Fikse og få en lettere hverdag!
            </p>
            <p className="mb-4">
              Vi tilbyr et enkelt system for bestillinger, levering og skredderlapper.
            </p>
          </div>
          <button className="px-6 py-2 border border-black">Kontakt oss</button>
        </div>
      </section>

      {/* Section 2: How it Works */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Slik funker det</h2>
        <div className="flex justify-between">
          <div className="text-center">
            <p className="font-medium mb-4">1. Vi gjør en rask screening og tar kontakt for å avklare hvor mange bestillinger dere ønsker i uken</p>
            <div className="h-48 bg-gray-300"></div>
          </div>
          <div className="text-center">
            <p className="font-medium mb-4">2. Vi leverer bestillinger til avtalt tid. Dere trenger kun å fokusere på håndverket</p>
            <div className="h-48 bg-gray-300"></div>
          </div>
          <div className="text-center">
            <p className="font-medium mb-4">3. Vi henter plagget ferdig reparert og leverer til kunden</p>
            <div className="h-48 bg-gray-300"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RepairServicePage;
