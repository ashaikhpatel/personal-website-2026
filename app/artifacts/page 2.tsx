"use client";
import { useState } from 'react';
import { TulipIcon } from '../components/Icons';

const artifactsList = [
  { id: 1, title: "Lunch with friends.", src: '/lunch-with-friends.jpeg', category: "Life", color: "border-[#9E616A]" },
  { id: 2, title: "Islamic Studies Degree Graduation", src: '/aalimah-graduation.jpeg', category: "Achievement", color: "border-[#556B2F]" },
  { id: 3, title: "In Progress", category: "TBD", color: "border-[#D1AE6D]" },
  { id: 4, title: "In Progress", category: "TBD", color: "border-[#96A480]" },
  { id: 5, title: "In Progress", category: "TBD", color: "border-[#F6DFE0]" },
  { id: 6, title: "In Progress", category: "TBD", color: "border-[#800000]" },
];

function OrnateFrame({ item, onClick }: { item: typeof artifactsList[0]; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-all duration-500 relative group flex flex items-center
        ${item.id % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'}
        hover:scale-[1.02] hover:-translate-y-1`}
    >
      <div className="relative w-full aspect-[160/280] flex items-center justify-center overflow-hidden shadow-sm bg-[#FDF5E6] rounded-sm">
        
        {item.src && (
          <div className="absolute inset-2 z-0 flex items-center justify-center p-5">
             <img 
              src={item.src} 
              alt={item.title}
              className="w-[68%] h-[50%] object-cover shadow-inner 
                 brightness-[0.9] contrast-[1.1] saturate-[0.9]
                 group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100
                 transition-all duration-1000 ease-in-out""
            />
          </div>
        )}

        <img 
          src="/ornate-frame.jpeg" 
          alt="Gold Frame"
          className="absolute inset-0 w-full h-full object-contain z-20 mix-blend-multiply pointer-events-none"
        />

        <div className="absolute inset-0 z-10 shadow-inner pointer-events-none opacity-10" />
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
      <div className="fixed inset-0 bg-[#2C1A0E]/90 backdrop-blur-md z-50 flex items-center justify-center p-6 md:p-12">
        <div className={`relative bg-[#FDF5E6] max-w-lg w-full aspect-[4/5] border-[12px] ${selectedItem.color} shadow-2xl overflow-visible`}>
          
      <div className="w-full h-full overflow-hidden">
        <img 
          src={selectedItem.src} 
          alt={selectedItem.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4 text-center backdrop-blur-sm border-t border-[#9E616A]/10">
        <span className="text-[10px] text-[#9E616A] tracking-[0.4em] font-bold uppercase mb-1 block">
          {selectedItem.category} No. {String(selectedItem.id).padStart(2, '0')}
        </span>
        <h2 className="text-xl text-[#556B2F] italic">{selectedItem.title}</h2>
      </div>

      <button
        type="button"
        onClick={() => setSelectedId(null)}
        className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-[#9E616A] text-white text-3xl 
                  flex items-center justify-center shadow-2xl z-[100] border-2 border-[#FFF9F0]
                  transition-all duration-1000 ease-in-out transform 
                  hover:rotate-[360deg] hover:scale-110 hover:bg-[#556B2F]"
      >
        <span className="mb-1">🌺</span>
      </button>
    </div>
  </div>
  )}
  </main>
  );
}