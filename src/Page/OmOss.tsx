import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Section 1: Introduction */}
      <section className="px-8 py-16">
        <div className="flex justify-between items-start">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-6">
              Vi vil øke reparasjonsgraden i samfunnet
            </h1>
            <p className="mb-4">
              Vårt mål er å skape en kultur for reparasjon, ved å gjøre det så lett som mulig å reparere.
            </p>
            <p className="mb-4">
              Fikse er et digitalt bookingsystem for alt av små reparasjoner. Vi samarbeider med mange dyktige reparatører og flotte merkevarer.
            </p>
            <p className="mb-4">
              For å lykkes med omstilling til en sirkulær økonomi, må reparasjonstjenester være brukervennlige, og tilgjengelige, både for bedrifter og forbrukere.
            </p>
            <p className="mb-4">
              Fikse ble grunnlagt av Anine Dedekam-Moldskred of startet som et pilotprosjekt mai 2022 i samarbeid med Høyer-gruppen. Vi er nå et av Oslos ledende selskaper innen skreddertjenester.
            </p>
          </div>
          <div className="w-1/3 h-96 bg-gray-300"></div>
        </div>
        <div className="mt-16 h-64 bg-gray-300"></div>
      </section>

      {/* Section 2: Team */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Team Fikse</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-64 bg-gray-300 mb-4"></div>
            <h3 className="font-semibold">Anine Dedekam-Moldskred</h3>
            <p className="text-gray-600">CEO</p>
            <p className="mt-2 text-gray-600">
              Anine har 10 + år innen kommunikasjon, events og prosjektledelse. Master i statsvitenskap fra Bergen og masterprogram i digital design og kommunikasjon i København.
            </p>
          </div>
          <div className="text-center">
            <div className="h-64 bg-gray-300 mb-4"></div>
            <h3 className="font-semibold">Leon Markus Dølven</h3>
            <p className="text-gray-600">CFO</p>
            <p className="mt-2 text-gray-600">
              Leon er vår tallknuser. Han studerer siviløkonom på BI Oslo og har bakgrunn fra finans og økonomi, erfaring fra CRM-system og oppbygging av nettbutikk.
            </p>
          </div>
          <div className="text-center">
            <div className="h-64 bg-gray-300 mb-4"></div>
            <h3 className="font-semibold">Jenny Nordby</h3>
            <p className="text-gray-600">FORRETNINGSUTVIKLER</p>
            <p className="mt-2 text-gray-600">
              Jenny studerer art direction på Kristiania, og har studert innovasjon og forretningsutvikling på Kristiania. Jenny har også erfaring med å starte egen bedrift, og er vår trofaste some-produsent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
