import React, { useState } from "react";

const DeliveryPage: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const items = [
    {
      title: "LUGA Oslo",
      description:
        "LUGA Oslo is a popular second-hand store located in the heart of Oslo. It offers a wide range of vintage and contemporary clothing.",
    },
    {
      title: "UFF Second hand Hegdehaugsveien",
      description:
        "UFF Second hand Hegdehaugsveien is known for its curated selection of high-quality second-hand clothing and accessories.",
    },
    {
      title: "UFF Second hand Løkka",
      description:
        "UFF Second hand Løkka is a trendy second-hand store located in the vibrant neighborhood of Løkka, offering unique fashion finds.",
    },
    {
      title: "Cirkulær Universitetsgata",
      description:
        "Cirkulær Universitetsgata focuses on sustainable fashion, offering a variety of eco-friendly and recycled clothing options.",
    },
    {
      title: "Cirkulær Hegdehaugsveien",
      description:
        "Cirkulær Hegdehaugsveien is another branch of Cirkulær, known for its commitment to sustainability and stylish second-hand clothing.",
    },
    {
      title: "Northern Playground",
      description:
        "Northern Playground is an innovative store that offers functional and sustainable outdoor clothing designed for active lifestyles.",
    },
    {
      title: "The Fashion Archives - månedlig",
      description:
        "The Fashion Archives is a monthly event where you can find exclusive vintage and designer pieces curated by fashion experts.",
    },
    {
      title: "LUGA Strømmen",
      description:
        "LUGA Strømmen is a well-loved second-hand store located in Strømmen, offering a diverse range of clothing and accessories.",
    },
  ];

  const toggleItem = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <div className="font-sans">
      {/* Section 1: Delivery Options */}
      <section className="px-8 py-16">
        <h1 className="text-4xl font-bold mb-12">
          Her kan du levere til Fikse
        </h1>
        <div className="flex justify-between">
          <div className="w-1/2 flex flex-col items-center">
<img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/f3004499-6ddc-47c8-a52b-ba709fa44404/fikse+launch+1.png?format=400w" alt="" className="w-96 h-96 object-cover"/>            <h2 className="text-xl font-semibold mb-2">Drop off</h2>
            <p className="text-center text-gray-600">
              Vi tilbyr flere drop off stasjoner, slik at du enkelt kan levere
              der det passer deg best.
              <br />
              Bestill på Fikse.no. Husk å legge til type fiks slik at du unngår
              ekstra kostnad. Annet sted enn der du droppet, og da er det viktig
              å markere plagget ditt med Fikse-lappen som du finner på stedet.
            </p>
            <ul className="mt-4 text-left">
              {items.map((item) => (
                <li
                  key={item.title}
                  onClick={() => toggleItem(item.title)}
                  className="cursor-pointer hover:underline mb-2"
                >
                  {item.title}
                  {expandedItem === item.title && (
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 flex flex-col items-center">
<img src="https://images.squarespace-cdn.com/content/v1/63f62f26dc92952d500bc8e7/1677078317866-GXIU46UWJCZDM1IJQZH7/fikse-tape+2.png?format=400w" alt="" className="w-96 h-96 object-cover"  />            <h2 className="text-xl square font-semibold mb-2">Send med bud</h2>
            <p className="text-center text-gray-600">
              Du kan bestille levering med bud, da vil du få en kode fra helt
              hjem og putter pakken utenfor døren, resten fikser vi.
              <br />
              Hvordan?
              <br />
              Bare følg instruksjonene når du bestiller :)
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Newsletter Sign-up */}
      <section className="relative">
        <img
          src="/path-to-your-background-image.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative flex justify-center items-center py-32">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">
              Meld deg på vårt nyhetsbrev
            </h2>
            <p className="text-gray-600 mb-8">Vi lover å ikke spamme deg.</p>
            <input
              type="email"
              placeholder="E-postadresse"
              className="p-4 border border-gray-300 w-full mb-4"
            />
            <button className="px-6 py-2 bg-black text-white w-full">
              Meld meg på
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryPage;
