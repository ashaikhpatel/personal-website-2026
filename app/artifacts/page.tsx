"use client";
import { useState } from 'react';
import { TulipIcon } from '../components/Icons';

const artifactsList = [
  { id: 1, title: "In Progress", category: "TBD", color: "border-[#9E616A]" },
  { id: 2, title: "In Progress", category: "TBD", color: "border-[#556B2F]" },
  { id: 3, title: "In Progress", category: "TBD", color: "border-[#D1AE6D]" },
  { id: 4, title: "In Progress", category: "TBD", color: "border-[#96A480]" },
  { id: 5, title: "In Progress", category: "TBD", color: "border-[#F6DFE0]" },
  { id: 6, title: "In Progress", category: "TBD", color: "border-[#800000]" },
];

function OrnateFrame({ item, onClick }: { item: typeof artifactsList[0]; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-all duration-500 relative group flex flex-col items-center
        ${item.id % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'}
        hover:scale-[1.02] hover:-translate-y-1`}
    >
      <div className="relative w-full aspect-[150/280] flex items-center justify-center">
        <img 
          src="/ornate-frame.jpeg" 
          alt="Gold Frame"
          className="absolute inset-0 w-full h-full object-contain z-10 mix-blend-multiply drop-shadow-4xl"
        />

        <div className="absolute inset-[0%] bg-[#FDF5E6] z-0 flex flex-col items-center justify-center p-6 text-center shadow-inner transition-colors duration-300">
          <span className="text-[#9E616A] text-[12px] font-serif tracking-[4px] font-bold opacity-80 mb-2">
            No. {String(item.id).padStart(2, '0')}
          </span>
          
          <h3 className="text-[11px] text-[#556B2F] italic font-medium leading-tight mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {item.title}
          </h3>

          <TulipIcon className="w-6 h-6 text-[#96A480] opacity-10" />
        </div>
      </div>
    </div>
  );
}

export default function ArtifactsPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedItem = artifactsList.find(a => a.id === selectedId);

  return (
    <main className="min-h-screen bg-[#FFF9F0] p-10 font-serif text-[#6B4E31]">
        <div className="scrapbook-bg"/>
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 space-y-2">
          <h1 className="text-7xl md:text-8xl text-[#556B2F] font-[family-name:var(--font-fleur)] tracking-tight">
            The Gallery
          </h1>
          <p className="italic text-[#9E616A] text-xl font-medium tracking-wide">
            A curated collection of artifacts & works
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {artifactsList.map((item) => (
            <OrnateFrame 
              key={item.id} 
              item={item} 
              onClick={() => setSelectedId(item.id)} 
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-[#2C1A0E]/90 backdrop-blur-md z-50 flex items-center justify-center p-10">
          <div
            className={`relative bg-[#FDF5E6] max-w-md w-full aspect-[4/5] flex flex-col items-center justify-center border-[16px] ${selectedItem.color} shadow-2xl transition-all duration-500`}
          >
            <div className="w-full h-full flex flex-col items-center justify-center bg-white/10 p-8 text-center">
              <span className="text-xs text-[#9E616A] tracking-[0.5em] font-bold uppercase mb-4">
                {selectedItem.category} No. {String(selectedItem.id).padStart(2, '0')}
              </span>
              <h2 className="text-3xl text-[#556B2F] italic mb-4">{selectedItem.title}</h2>
              <div className="w-12 h-[1px] bg-[#9E616A] opacity-30 mb-6" />
              <p className="text-sm italic text-[#6B4E31]/70 leading-relaxed">
                ...
              </p>
            </div>
            
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-[#9E616A] text-white text-3xl font-light flex items-center justify-center hover:bg-[#556B2F] hover:rotate-90 transition-all duration-300 shadow-xl"
            >
              🌺
            </button>
          </div>
        </div>
      )}
    </main>
  );
}