import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onSubmitRepair } from "../components/orderFunctions";

interface SquareProps {
  label: string;
  imgSrc: string;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ label, imgSrc, onClick }) => (
  <div
    className="border border-black w-64 h-64 flex flex-col relative cursor-pointer"
    onClick={onClick}
  >
    <span className="absolute top-2 left-2">{label}</span>
    <div className="flex justify-center items-center h-full">
      <img src={imgSrc} alt={label} className="h-32 w-32" />
    </div>
  </div>
);

interface LineProps {
  label: string;
  number: number;
}

const clickLine = (label: string, number: number) => {
  const auth = getAuth();
  const user = auth.currentUser;

  // Check if the user is logged in
  if (!user) {
    alert("You need to log in to order");
    return;
  }
  onSubmitRepair(label, number);
  // If the user is logged in
  alert(`You clicked ${label} with a price of ${number}`);
  console.log(`You clicked ${label} with a price of ${number}`);
};

const Line: React.FC<LineProps> = ({ label, number }) => (
  <div
    className="border border-black w-[1025px] h-14 flex items-center justify-between px-3"
    onClick={() => clickLine(label, number)}
  >
    <span>{label}</span>
    <span className="ml-auto">{number} ,-</span>
  </div>
);

const Bestille: React.FC = () => {
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);

  const handleSquareClick = (squareIndex: number) => {
    setSelectedSquare(squareIndex);
  };

  const renderLines = () => {
    switch (selectedSquare) {
      case 1:
        return (
          <>
            <Line label="Fikse stort hull" number={300} />
            <Line label="Fikse lite hull i buksa" number={200} />
            <Line label="Fikse lummer" number={100} />
          </>
        );
      case 2:
        return (
          <>
            <Line label="Såle" number={290} />
            <Line label="Glidelås" number={120} />
            <Line label="Hull i sko" number={330} />
            <Line label="Rens" number={140} />
          </>
        );
      case 3:
        return (
          <>
            <Line label="Stropp" number={200} />
            <Line label="Glidelås" number={100} />
            <Line label="Hull i tilbehør" number={600} />
            <Line label="Belte" number={900} />
            <Line label="Telt" number={900} />
          </>
        );
      case 4:
        return (
          <>
            <Line label="Reperasjon av bunad" number={2000} />
            <Line label="Rens av bunad" number={1000} />
            <Line label="Sy om bunad" number={1500} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-start justify-start mt-0">
      <div className="flex items-start justify-start">
        <Square
          label="Klær"
          imgSrc="https://www.fikse.co/images/illustration/category-clothes.svg"
          onClick={() => handleSquareClick(1)}
        />
        <Square
          label="Sko"
          imgSrc="https://www.fikse.co/images/illustration/category-shoes.svg"
          onClick={() => handleSquareClick(2)}
        />
        <Square
          label="Tilbehør"
          imgSrc="https://www.fikse.co/images/illustration/category-accessories.svg"
          onClick={() => handleSquareClick(3)}
        />
        <Square
          label="Bunad"
          imgSrc="https://www.fikse.co/images/illustration/category-bunad.svg"
          onClick={() => handleSquareClick(4)}
        />
      </div>

      <div className="items-start justify-start">{renderLines()}</div>
    </div>
  );
};

export default Bestille;
