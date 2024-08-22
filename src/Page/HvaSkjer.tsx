import React from 'react';

// Dummy component for Slideshow Gallery
const SlideshowGallery: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex space-x-4">
        {/* Replace these divs with your images */}
        <div className="w-1/3 h-48 bg-gray-300"></div>
        <div className="w-1/3 h-48 bg-gray-300"></div>
        <div className="w-1/3 h-48 bg-gray-300"></div>
      </div>
      {/* Add controls for slideshow if needed */}
    </div>
  );
};

const HvaSkjer: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Section 1 */}
      <section className="px-8 py-16">
        <h1 className="text-4xl font-bold mb-6">Fiks bunaden din til 17. mai</h1>
        <div className="flex justify-between items-start">
          <div className="w-1/2">
            <p className="mb-4">Husk å levere bunaden i tide for reparasjon før 17. mai!</p>
            <p className="mb-4">Vi garanterer kvalitetsreparasjoner utført av våre dyktige skreddere.</p>
            <p className="mb-4">Bestill din reparasjon online.</p>
          </div>
          <div className="w-1/3 h-96 bg-gray-300"></div>
        </div>
        <div className="mt-16 h-64 bg-gray-300"></div>
      </section>

      {/* Section 2 */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Cirkulær + Fikse = &lt;3</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="h-64 bg-gray-300"></div>
          <div className="h-64 bg-gray-300"></div>
        </div>
      </section>

      {/* Section 3: Event Promotion */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">Den store fikseuka</h2>
        <div className="flex justify-between items-start">
          <div className="w-1/2">
            <p className="mb-4">Ta del i Fikseuka med eksklusive rabatter og tilbud!</p>
            <p className="mb-4">Møt våre skreddere og lær om reparasjon og vedlikehold.</p>
          </div>
          <div className="w-1/3 h-96 bg-gray-300"></div>
        </div>
        <div className="mt-16 h-64 bg-gray-300"></div>
      </section>

      {/* Section 4: Offers */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">20% rabatt på rens av bunad</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="h-64 bg-gray-300"></div>
          <div className="h-64 bg-gray-300"></div>
        </div>
      </section>

      {/* Section 5: New Drop Off */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">NY DROP OFF: UFF Ingeborgveien</h2>
        <div className="h-64 bg-gray-300"></div>
        <p className="mt-4">Lever dine plagg hos UFF Ingeborgveien for rask og enkel service.</p>
      </section>

      {/* Transparent Background Sections */}
      <section className="px-8 py-16 bg-transparent" style={{ backgroundImage: 'url(your-transparent-image-url.jpg)' }}>
        <h2 className="text-4xl font-bold mb-12">Fikse-dropoff på UFF Løkka</h2>
        <div className="h-64 bg-gray-300"></div>
      </section>

      <section className="px-8 py-16 bg-transparent" style={{ backgroundImage: 'url(your-transparent-image-url.jpg)' }}>
        <h2 className="text-4xl font-bold mb-12">Vi fikser bunaden</h2>
        <div className="h-64 bg-gray-300"></div>
      </section>

      <section className="px-8 py-16 bg-transparent" style={{ backgroundImage: 'url(your-transparent-image-url.jpg)' }}>
        <h2 className="text-4xl font-bold mb-12">The Fashion Archives 20. mai og 24. juni</h2>
        <div className="h-64 bg-gray-300"></div>
      </section>

      <section className="px-8 py-16 bg-transparent" style={{ backgroundImage: 'url(your-transparent-image-url.jpg)' }}>
        <h2 className="text-4xl font-bold mb-12">The Fashion Archives 22. april 12-16</h2>
        <div className="h-64 bg-gray-300"></div>
      </section>

      <section className="px-8 py-16 bg-transparent" style={{ backgroundImage: 'url(your-transparent-image-url.jpg)' }}>
        <h2 className="text-4xl font-bold mb-12">Åpen fabrikk - Ombruksmarked og workshops</h2>
        <div className="h-64 bg-gray-300"></div>
      </section>

      <section className="px-8 py-16 bg-transparent" style={{ backgroundImage: 'url(your-transparent-image-url.jpg)' }}>
        <h2 className="text-4xl font-bold mb-12">Fiks din bunad 17. april i Oslo</h2>
        <div className="h-64 bg-gray-300"></div>
      </section>

      {/* Slideshow Gallery */}
      <section className="px-8 py-16">
        <SlideshowGallery />
      </section>
    </div>
  );
};

export default HvaSkjer;


