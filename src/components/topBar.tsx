import React from 'react';
import Auth from './auth';

const TopBar = () => {
  return (
    <div className="border border-black">
      <div className="flex justify-between items-center p-4">
        <div className="h-10">
          <img src="https://www.fikse.co/images/logo.svg" alt="Fikse" className="h-full size-14" />
        </div>
        <div className="flex space-x-8 text-lg mx-10">
          <a href="#" className="hover:underline">Om oss</a>
          <a href="#" className="hover:underline">Hva skjer?</a>
          <a href="#" className="hover:underline">Her er vi</a>
          <a href="#" className="hover:underline">Popup bedrift</a>
          <a href="#" className="hover:underline">For retail</a>
          <a href="#" className="hover:underline">For reparatører</a>
        </div>
        <Auth />
      </div>
    </div>
  );
}

export default TopBar;