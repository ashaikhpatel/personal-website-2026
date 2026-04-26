"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const polaroids = [
    { 
      id: 1, 
      src: "/pic-of-me.jpeg", 
      rotate: "rotate-[-6deg]", 
      pos: "top-0 left-4 md:left-4",
      tape: "tape-sunshine",
      zIndex: "z-10"
    },
    { 
      id: 2, 
      src: "/fall-at-UIC.jpeg", 
      rotate: "rotate-[4deg]", 
      pos: "top-[180px] right-4 md:top-[220px] md:left-70",
      tape: "tape-lavender",
      zIndex: "z-20"
    },
    { 
      id: 3, 
      src: "/undergrad-lounge.jpeg", 
      rotate: "rotate-[-2deg]", 
      pos: "top-[380px] left-4 md:top-[480px] md:left-6",
      tape: "tape-rose",
      zIndex: "z-30"
    },
    { 
      id: 4, 
      src: "/cafe-pic.jpeg", 
      rotate: "rotate-[4deg]", 
      pos: "top-[580px] right-4 md:top-[700px] md:left-70",
      tape: "tape-bluelily",
      zIndex: "z-40"
    },
  ];

  return (
    <main className="relative min-h-screen w-full bg-[#FFF9F0] font-serif overflow-x-hidden">
      <div className="scrapbook-bg fixed inset-0 z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto p-6 md:p-10 flex flex-col">
        
        <header className="pt-10 mb-6 md:mb-10 text-center md:text-left">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-10xl text-[#9E616A] font-[family-name:var(--font-fleur)] leading-tight">
            My Portfolio
          </h1>
        </header>

        <div className="relative md:absolute md:top-32 md:right-10 rotate-[-2deg] md:rotate-[7deg] z-40 mb-12 md:mb-0 flex justify-center md:block">
          <div className="bg-[#FDF5E6] p-4 shadow-md border-l-8 md:border-l-10 border-[#96A480] max-w-[280px] md:max-w-xs relative">
            <div className="washi-tape tape-sage absolute -top-3 left-1/2 -translate-x-1/2 w-24" />
            <p className="text-[#556B2F] italic font-bold text-xl md:text-3xl leading-relaxed font-[family-name:var(--font-handwriting)]">
              Computer Science @ UIC | Aspiring Cybersecurity Analyst | Educator | Developer | Engineer
            </p>
          </div>
        </div>

        <div className="relative w-full min-h-[900px] md:min-h-[1100px] mt-4 md:mt-10">
          {polaroids.map((photo) => (
            <div 
              key={photo.id} 
              className={`absolute ${photo.pos} ${photo.rotate} ${photo.zIndex} w-48 sm:w-64 md:w-72 transition-transform hover:scale-105 hover:z-50`}
            >
              <div className="p-2 md:p-3 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] relative outline outline-4 md:outline-8 outline-white/50">
                <div className={`washi-tape ${photo.tape} absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-24 md:w-32 z-20`} />
                
                <div className="relative aspect-[4/5] w-full">
                  <Image 
                    src={photo.src} 
                    alt="Scrapbook Memory" 
                    fill
                    sizes="(max-width: 768px) 192px, 288px"
                    priority={photo.id === 1}
                    className="object-cover border border-gray-100 sepia-[0.2] brightness-[0.9] saturate-[1.1] contrast-[1.05]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative self-center md:self-end mt-10 md:mt-20 mb-20 md:mr-10 z-50 scale-90 sm:scale-100">
          <div 
            className="relative w-72 h-48 cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-[#FFF9F0] rounded-bl-xl rounded-br-xl shadow-2xl z-0" />
            
            <div className={`absolute left-4 right-4 bg-white p-6 shadow-md transition-all duration-700 z-10 
              ${isOpen ? '-translate-y-48 scale-105 opacity-100' : 'translate-y-0 h-32 opacity-0'}`}>
              <div className="border border-[#C87D87]/10 h-full w-full p-4 flex flex-col items-center justify-center text-center">
                <p className="text-sm text-black leading-relaxed font-bold italic font-[family-name:var(--font-handwriting)]">
                  Welcome to my digital garden. It is truly a pleasure to have you.
                  Please, make yourself at home as you wander through these curated corners.
                  I hope the view is worth your stay.
                </p>
              </div>
            </div>

            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[96px] border-t-transparent border-l-[144px] border-l-[#9E616A] border-b-[96px] border-b-transparent" />
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[96px] border-t-transparent border-r-[144px] border-r-[#9E616A] border-b-[96px] border-b-transparent" />
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[144px] border-l-transparent border-r-[144px] border-r-transparent border-b-[120px] border-b-[#C87D87] rounded-bl-lg rounded-br-lg" />
            </div>

            <div className={`absolute top-0 left-0 w-0 h-0 border-l-[144px] border-l-transparent border-r-[144px] border-r-transparent border-t-[120px] border-t-[#E8D3D5] origin-top transition-all duration-500 z-30
              ${isOpen ? '-rotate-x-180 opacity-0' : 'rotate-x-0'}`} />

            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-[#FCEEA8] rounded-full z-40 flex items-center justify-center shadow-lg border-2 border-white 
              ${isOpen ? 'opacity-0 scale-50' : 'opacity-100'}`}>
              <span className="text-[#800000] text-sm">❀</span>
            </div>
          </div>
          
          <div className="mt-6 text-center md:text-right">
            <p className="text-[#800000]/60 text-[11px] tracking-widest uppercase italic mb-1">
              {isOpen ? "" : "click to open"}
            </p>
            <p className="text-[#800000] text-[13px] tracking-widest uppercase italic font-bold">
              ✦ Yours Truly, Asiyah Shaikh ✦
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}