import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Section 1: Introduction */}
      <section className="px-8 py-16">
        <div className="flex justify-between items-start">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold mb-20">
              Vi vil øke reparasjonsgraden i samfunnet
            </h1>
            <p className=" text-2xl mb-4">
              Vårt mål er å skape en kultur for reparasjon, ved å gjøre det så lett som mulig å reparere.
            </p>
            <p className="text-2xl mb-4">
              Fikse er et digitalt bookingsystem for alt av små reparasjoner. Vi samarbeider med mange dyktige reparatører og flotte merkevarer.
            </p>
            <p className="text-2xl mb-4">
              For å lykkes med omstilling til en sirkulær økonomi, må reparasjonstjenester være brukervennlige, og tilgjengelige, både for bedrifter og forbrukere.
            </p>
            <p className="text-2xl mb-4">
              Fikse ble grunnlagt av Anine Dedekam-Moldskred of startet som et pilotprosjekt mai 2022 i samarbeid med Høyer-gruppen. Vi er nå et av Oslos ledende selskaper innen skreddertjenester.
            </p>
          </div>
<img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/7599e224-fd8e-46f8-949c-197bc831d8fd/plakat-1+2.png?format=500w" alt="" />        </div>
      </section>

      {/* Section 2: Team */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Team Fikse</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
<img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/7eb4dfb2-3865-4580-9ca8-dc32ca57140f/anine.jpeg?format=500w" className="w-96 h-96 object-cover" alt="" />            <h3 className="font-semibold">Anine Dedekam-Moldskred</h3>
            <p className="text-gray-600">CEO</p>
            <p className="mt-2 text-gray-600">
              Anine har 10 + år innen kommunikasjon, events og prosjektledelse. Master i statsvitenskap fra Bergen og masterprogram i digital design og kommunikasjon i København.
            </p>
          </div>
          <div className="text-center">
<img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/008dbddd-633f-46f6-afea-a3cdf315e175/Leon.jpg?format=500w" className="w-96 h-96 object-cover" alt="" />            <h3 className="font-semibold">Leon Markus Dølven</h3>
            <p className="text-gray-600">CFO</p>
            <p className="mt-2 text-gray-600">
              Leon er vår tallknuser. Han studerer siviløkonom på BI Oslo og har bakgrunn fra finans og økonomi, erfaring fra CRM-system og oppbygging av nettbutikk.
            </p>
          </div>
          <div className="text-center">
<img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/14c726c3-5d39-4770-a903-d9aef2546268/IMG_9668.jpg?format=500w" className="w-96 h-96 object-cover" alt="" />            <h3 className="font-semibold">Jenny Nordby</h3>
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
