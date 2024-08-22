import React from 'react';

const categories = [
    { name: 'Klær', imgSrc: 'https://www.fikse.co/images/illustration/category-clothes.svg' },
    { name: 'Sko', imgSrc: 'https://www.fikse.co/images/illustration/category-shoes.svg' },
    { name: 'Tilbehør', imgSrc: 'https://www.fikse.co/images/illustration/category-accessories.svg' },
    { name: 'Bunad', imgSrc: 'https://www.fikse.co/images/illustration/category-bunad.svg' },
  ];
  

const RepairDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-100">
      {/* Top bar */}
      <div className="flex justify-between items-center p-4 bg-blue-300">
        <span className="text-lg font-semibold">3 reparasjoner</span>
        <span className="text-lg font-semibold">837,-</span>
      </div>

      {/* Title */}
      <div className="p-6 bg-white shadow">
        <h1 className="text-3xl font-bold">Fikse</h1>
      </div>

      {/* Repair categories */}
      <div className="grid grid-cols-4 gap-3 p-6">
      {categories.map((category) => (
        <div
          key={category.name}
          className="bg-gray-100 p-4 flex flex-col items-center justify-center border border-gray-300 rounded-lg"
        >
          <img src={category.imgSrc} alt={category.name} className="w-24 h-24" />
          <span className="mt-2 text-lg font-semibold">{category.name}</span>
        </div>
      ))}
    </div>

      {/* Repair options */}
      <div className="p-6">
        <div className="bg-white p-4 mb-4 shadow border border-gray-300 rounded-lg">
          <span className="text-lg font-semibold">Hull</span>
        </div>
        <div className="bg-white p-4 mb-4 shadow border border-gray-300 rounded-lg">
          <span className="text-lg font-semibold">Legge inn eller ut</span>
        </div>
        <div className="bg-white p-4 shadow border border-gray-300 rounded-lg">
          <span className="text-lg font-semibold">Legge ned eller opp</span>
        </div>
      </div>
    </div>
  );
};

export default RepairDashboard;
