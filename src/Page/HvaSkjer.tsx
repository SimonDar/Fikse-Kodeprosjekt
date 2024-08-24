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
          <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/99806e73-2b19-4843-bf31-0a624b7c20f3/IMG_0023%281%29.png?format=1500w" className=" w-1/3 h-96 bg-gray-300"></img>
        </div>
        <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/9ceb031b-6029-476d-a3ba-e263a42ed6d4/IMG_3153+1.png?format=1500w" className=" bg-gray-300"></img>
      </section>

    

      {/* Section 3: Event Promotion */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">Den store fikseuka</h2>
        <div className="flex justify-between items-start">
          <div className="w-1/2">
            <p className="mb-4">Ta del i Fikseuka med eksklusive rabatter og tilbud!</p>
            <p className="mb-4">Møt våre skreddere og lær om reparasjon og vedlikehold.</p>
          </div>
          <img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/1cac5dfa-0bb4-4e06-a67e-c7cd6d994d11/Group+1125.png?format" className="w-1/5 h-1/5 bg-gray-300"></img>
        </div>
        <img src='https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/0b1e3952-6cbb-4e6c-a5d7-3199e2f76514/Group+1119.png?format=750w'></img>
      </section>

      {/* Transparent Background Sections */}
      <section className="px-8 py-16 bg-transparent" style={{ backgroundImage: 'url(your-transparent-image-url.jpg)' }}>
        <h2 className="text-4xl font-bold mb-12">Fikse-dropoff på UFF Løkka</h2>
        <img src='https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/492758cd-066e-448c-8855-173bd4499af6/uff.jpeg?format=1500w'></img>
      </section>

      <section className="px-8 py-16 bg-transparent" style={{ backgroundImage: 'url(your-transparent-image-url.jpg)' }}>
        <h2 className="text-4xl font-bold mb-12">Vi fikser bunaden</h2>
<img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/99806e73-2b19-4843-bf31-0a624b7c20f3/IMG_0023%281%29.png?format=1500w" alt="" />      </section>

      <section className="px-8 py-16 bg-transparent" style={{ backgroundImage: 'url(your-transparent-image-url.jpg)' }}>
        <h2 className="text-4xl font-bold mb-12">The Fashion Archives 20. mai og 24. juni</h2>
<img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/9d376444-5d5a-4d63-8d02-7d6a19260a42/332086250_225330873304247_4053812544335186354_n.jpeg?format=1500w" alt="" />      </section>

      
    </div>
  );
};

export default HvaSkjer;


