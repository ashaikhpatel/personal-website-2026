"use client";
import React, { useState } from 'react';
import TimeLineItem from '../components/TimeLineItem';
import { TulipIcon } from '../components/Icons';

export default function SkillsPage() {
  const [selectedArtifact, setSelectedArtifact] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FFF9F0] p-10 font-serif text-[#6B4E31]">
      <div className="max-w-6xl mx-auto relative">
        
        <div className="absolute top-10 -right-20 opacity-5 pointer-events-none rotate-45">
            <TulipIcon className="w-96 h-96 text-[#96A480]" />
        </div>

        <header className="text-center mb-24 space-y-2">
          <h1 className="text-7xl md:text-8xl text-[#556B2F] font-[family-name:var(--font-fleur)] tracking-tight">
            Technical Artistry
          </h1>
          <div className="flex items-center justify-center gap-6">
            <div className="h-[2px] w-24 bg-[#9E616A] opacity-30" />
            <p className="italic text-[#9E616A] text-xl font-medium tracking-wide">A showcase of my skills and experience</p>
            <div className="h-[2px] w-24 bg-[#9E616A] opacity-30" />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-40">
          <section className="space-y-10">
            <div className="relative bg-[#F6DFE0] p-12 rounded-[4rem] border-2 border-[#E5B1B6] shadow-[inset_0_2px_10px_rgba(158,97,106,0.1)]">
              <h2 className="text-4xl mb-10 text-[#556B2F] font-serif italic text-center decoration-4 underline-offset-8">
                Digital Languages
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Python", "Java", "C++", "C", "HTML", "Next.js", "Tailwind", "JS"].map((lang) => (
                  <button 
                    key={lang} 
                    className="py-4 bg-[#FFFDFB]/80 hover:bg-[#9E616A] hover:text-[#FCEEA8] border border-[#E5B1B6] rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-[#800000] transition-all duration-300 hover:-translate-y-1 shadow-sm active:scale-95"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#F6DFE0] p-12 rounded-[4rem] border-2 border-[#E5B1B6] relative overflow-hidden">
               <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#9E616A] rounded-full opacity-10 blur-xl" />
               
              <h2 className="text-4xl mb-10 text-[#556B2F] font-serif italic text-center">My Toolbelt</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-[#FFFDFB]/60 p-8 rounded-[2.5rem] border border-[#E5B1B6]">
                  <h3 className="font-bold text-[#800000] uppercase tracking-[0.3em] text-[11px] mb-6 border-b-2 border-[#FCEEA8] pb-2 text-center">Development</h3>
                  <ul className="space-y-4 text-sm italic">
                    <li className="flex items-center gap-3 hover:text-[#96A480] transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#9E616A]" /> VS Code & CLion
                    </li>
                    <li className="flex items-center gap-3 hover:text-[#96A480] transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#9E616A]" /> Git & GitHub
                    </li>
                    <li className="flex items-center gap-3 hover:text-[#96A480] transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#9E616A]" /> Notion & Excel
                    </li>
                  </ul>
                </div>
                <div className="bg-[#FFFDFB]/60 p-8 rounded-[2.5rem] border border-[#E5B1B6]">
                  <h3 className="font-bold text-[#800000] uppercase tracking-[0.3em] text-[11px] mb-6 border-b-2 border-[#FCEEA8] pb-2 text-center">Security & Art</h3>
                  <ul className="space-y-4 text-sm italic">
                    <li className="flex items-center gap-3 hover:text-[#96A480] transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#9E616A]" /> HackTheBox Labs
                    </li>
                    <li className="flex items-center gap-3 hover:text-[#96A480] transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#9E616A]" /> Figma (UI/UX)
                    </li>
                    <li className="flex items-center gap-3 hover:text-[#96A480] transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#9E616A]" /> Color Theory
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-10">
            <div className="text-center">
              <h3 className="text-xs uppercase tracking-[0.6em] text-[#9E616A] mb-12 font-bold border-y-2 border-[#E5B1B6] py-6 inline-block px-12">
                Artifacts
              </h3>
              <div className="grid grid-cols-2 gap-12">
                {[1, 2, 3, 4].map((num) => (
                 <div 
                    key={num}
                    onClick={() => setSelectedArtifact(num)}
                    className={`relative p-3 transition-all duration-500 cursor-pointer
                      ${num % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'} 
                      ${selectedArtifact === num ? 'scale-105' : 'hover:scale-102'}`}
                  >
                    <div className="relative z-10 aspect-[4/5] bg-[#FDF5E6] rounded-sm border-[10px] border-[#D1AE6D] shadow-[5px_15px_35px_rgba(107,78,49,0.2)] flex flex-col items-center justify-center p-6">
                      <div className="w-full h-full border-2 border-[#D1AE6D]/30 flex flex-col items-center justify-center overflow-hidden bg-white/40 backdrop-blur-sm">
                        <TulipIcon className="w-10 h-10 text-[#96A480] opacity-20 mb-3" />
                        <span className="text-[10px] text-[#9E616A] tracking-[0.3em] font-bold">No. 0{num}</span>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-[#9E616A] rounded-full shadow-lg flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">
                         <TulipIcon className="w-4 h-4 text-[#FCEEA8]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="mt-60 border-t-2 border-[#E5B1B6] pt-32 relative">
          <header className="text-center mb-24">
            <h2 className="text-6xl text-[#556B2F] font-[family-name:var(--font-fleur)] mb-6 tracking-tight">Professional Journey</h2>
          </header>
          <div className="absolute left-1/2 top-[380px] bottom-0 w-[3px] bg-gradient-to-b from-[#E5B1B6] via-[#9E616A] to-transparent -translate-x-1/2 hidden md:block opacity-30"></div>

          <div className="relative">
            <TimeLineItem 
              side="left"
              title="Head Teacher" 
              duration="5 Years" 
              description={`Guided the Saturday program at Suffah Educational Guidance. 
              Spearheaded the digital migration of traditional records and designed a cohesive curriculum architecture.`}
            />
          
            <TimeLineItem 
              side="right"
              title="Data Operations Intern" 
              duration="Summer 2021" 
              description="Developed automated tracking systems and managed high-precision database integrity." 
            />
          </div>
        </section>
      </div>
    </main>
  );
}