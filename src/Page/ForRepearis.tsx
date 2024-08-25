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
            <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/41e081b4-281f-4086-8a1c-18ee62a0a9e7/matekatten.png" alt="" className='max-h-56 mx-auto' />
          </div>
          <div className="text-center">
            <p className="font-medium mb-4">2. Vi leverer bestillinger til avtalt tid. Dere trenger kun å fokusere på håndverket</p>
            <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/f83a861d-4384-44e8-807b-4592e578a9fd/chille.png" alt="" className='max-h-56 mx-auto' />
          </div>
          <div className="text-center">
            <p className="font-medium mb-4">3. Vi henter plagget ferdig reparert og leverer til kunden</p>
            <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/09aad925-ffce-4320-af80-2bb71e684f1e/F-case-illustrasjon-3.jpg" alt="" className='max-h-56 mx-auto' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RepairServicePage;