"use client";
import React, { useState } from 'react';

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-20 relative">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-95 h-65 cursor-pointer group"
      >
        <div className="absolute inset-0 bg-[#FCEEA8] rounded-b-lg shadow-md z-0"></div>

        <div className={`absolute left-4 right-4 h-48 bg-white border border-[#9E616A] p-6 transition-all duration-700 ease-in-out z-10 shadow-sm
          ${isOpen ? '-translate-y-32 scale-105' : 'translate-y-0'}`}>
          <div className="border border-[#9E616A] h-full flex items-center justify-center p-2">
            <p className="font-[family-name:var(--font-playfair)] text-l text-center leading-tight">
             Welcome to my digital garden. It is truly a pleasure to have you.
                Please, make yourself at home and wander through these curated corners; I hope the view is worth your stay.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-[#9E616A] z-20 envelope-pocket shadow-inner rounded-b-lg"></div>

        <div className={`absolute top-0 left-0 w-full h-full bg-[#9E616A] origin-top transition-all duration-500 z-30 envelope-flap
          ${isOpen ? '-rotate-x-180 opacity-0' : 'rotate-x-0'}`}>
        </div>
  
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#800000] rounded-full z-40 flex items-center justify-center shadow-md border-2 border-[white] transition-opacity duration-300
          ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-white text-xs">❀</span>
        </div>
      </div>
      
      <p className="mt-8 text-[10px] tracking-widest text-[#6B7556] uppercase italic">
        {isOpen ? "Click to seal" : "Click to open"}
      </p>
    </div>
  );
}