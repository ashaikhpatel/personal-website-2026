"use client";
import React from 'react';

export default function BioFrame({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative w-80 h-[480px] group mx-auto">
      <div className="absolute inset-0 rounded-t-full shadow-2xl overflow-hidden border-[8px] border-[#F6DFE0]">
        <img 
          src="/arch-frame.jpeg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale-[10%]"
        />
        
        <div className="absolute inset-4 rounded-t-full overflow-hidden border-2 border-[#E5B1B6]">
          <img 
            src={imageSrc} 
            alt="Asiyah Shaikh" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#FCEEA8] rounded-full z-20 flex items-center justify-center shadow-lg border-2 border-[#E5B1B6]">
         <span className="text-[#9E616A] text-2xl">❀</span>
      </div>
    </div>
  );
}