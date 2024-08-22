import React from 'react';

const BusinessPage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Section 1: Header with Background Image */}
      <section className="relative">
        <img 
          src="/path-to-your-background-image.jpg" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative flex justify-center items-center h-96 bg-black bg-opacity-50">
          <h1 className="text-4xl text-white font-bold">FIKSE HOS DIN BEDRIFT</h1>
        </div>
        <div className="relative flex justify-center items-center py-8">
          <p className="text-white text-center">
            Gjør noe unikt for din arbeidsplass!<br/>
            Vi kommer dit du jobber og tar imot alt av små reparasjoner og tilpasninger av klær, sko og vesker. Vi henter og leverer.
          </p>
        </div>
      </section>

      {/* Section 2: A Day with Fikse */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">En dag med Fikse!</h2>
        <p className="mb-8">
          Bra for de ansatte, bra for miljøet, og bra for lommeboken.<br/>
          Vi tilbyr en skreddersydd løsning til din arbeidsplass.<br/>
          Gi de ansatte muligheten til å fikse ting de har hatt liggende hjemme – enklere blir det ikke!
        </p>
        <div className="flex justify-between">
          <div className="w-1/2 h-64 bg-gray-300"></div>
          <div className="w-1/2 ml-8">
            <h3 className="text-2xl font-bold mb-4">POPUP TILBUD</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Vi henter og leverer på ønsket lokasjon</li>
              <li>Tar imot klær, sko, vesker og smykker</li>
              <li>Reparasjon, rens og tilpasning</li>
              <li>Fast lavpris på enkle reparasjoner</li>
              <li>Konsultasjon</li>
              <li>Frakt og fordeling til reparatører</li>
              <li>Rapportering</li>
              <li>Alt av små reparasjoner</li>
              <li>Enkelt bookingsystem</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Fixed Agreement */}
      <section className="px-8 py-16 bg-blue-200 relative">
        <img 
          src="/path-to-your-background-image-2.jpg" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="relative text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Vil din bedrift ha fast avtale med oss?</h2>
          <p className="text-white mb-8">
            Vi tilbyr en løsning med ukentlig opphenting og levering på din arbeidsplass!
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white">Send oss en forespørsel da vel!</button>
        </div>
      </section>

      {/* Section 4: Previous Pop-ups */}
      <section className="px-8 py-16">
        <div className="flex justify-between items-start">
          <div className="w-1/2 bg-blue-200 p-8">
            <h3 className="text-2xl font-bold mb-4">Tidligere pop-ups</h3>
            <p>Telenor, Bearing Point, Landcredit, Finn, BCG, OBOS, Gjensidige og Furstist-gruppen.</p>
          </div>
          <div className="flex space-x-4">
            <div className="h-64 w-40 bg-gray-300"></div>
            <div className="h-64 w-40 bg-gray-300"></div>
            <div className="h-64 w-40 bg-gray-300"></div>
            <div className="h-64 w-40 bg-gray-300"></div>
            <div className="h-64 w-40 bg-gray-300"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;
