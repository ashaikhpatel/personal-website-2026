"use client";
import { useState } from 'react';
import { TulipIcon } from '../components/Icons';

const WaxSeal = ({ label, href }: { label: string, href: string }) => (
  <a href={href} target="_blank" className="group flex items-center gap-4 no-underline">
    <div className="relative w-14 h-14 flex items-center justify-center transition-transform group-hover:rotate-12">
      <div className="absolute inset-0 bg-[#9E616A] rounded-full opacity-90 shadow-md" />
      <TulipIcon className="relative z-10 w-7 h-7 text-[#FCEEA8]" />
    </div>
    <span className="font-serif italic text-[#6B4E31] border-b border-[#E5B1B6] group-hover:text-[#96A480] transition-colors">
      {label}
    </span>
  </a>
);

const projects = [
  {
    id: 1,
    title: "Wired Web-Dev",
    tag: "In Progress",
    shortDesc: "A personal website portfolio made using React and Next.js.",
    fullDesc: "Participated in a semester-long project to create my personal portfolio.",
    link: "https://github.com/ashaikhpatel/personal-website-2026/blob/main/readme.md",
    tech: ["Next.js", "React", "Tailwind", "Figma"],
    previewImage: "/wics-logo.png",
    comingSoon: false,
    media: [
      { type: 'image', src: '/figma-design.jpg' },
      { type: 'image', src: '/color-palette.jpeg' },
      { type: 'image', src: '/vscode-snippet.png' },
    ]
  },
  {
    id: 2,
    title: "Website Re-dev",
    tag: "Completed",
    shortDesc: "Was part of the strategic team for the digital transformation of Suffah Educational Guidance.",
    fullDesc: "Collaborated with a development team to modernize an outdated paper-based administrative system. I spearheaded the UI/UX ideation phase, defining the site's architecture, user flows, and aesthetic direction to ensure a seamless transition from physical to digital records.",
    link: "https://suffaheducational.org/",
    tech: ["UI/UX Ideation", "Product Strategy", "Information Architecture", "Project Scoping"],
    previewImage: "/Suffah.png",
    comingSoon: false,
    media: [
      { type: 'image', src: './suffah-about.png' },
      { type: 'image', src: './suffah-home.png' },
      { type: 'image', src: './suffah-contacts.png' }
    ]
  },
  {
    id: 3,
    title: "Ethereal Dreamscape",
    tag: "Art Installation",
    shortDesc: "An award-winning multimedia installation exploring spatial design and lighting.",
    fullDesc: "A full-scale physical exhibition featuring hand-crafted paper fish, light-integrated 'clouds' and jellyfish. I managed the lifecycle of this project from a small-scale prototype (Proof of Concept) to a full-room immersive installation.",
    link: "",
    tech: ["Spatial Design", "Mixed Media", "Prototyping", "Color Theory", "Hand-crafted"],
    previewImage: "/Installation_preview.jpg",
    comingSoon: false,
    media: [
      { type: 'image', src: '/Installation_preview.jpg' },
      { type: 'image', src: '/Installation_1.jpg'},
      { type: 'image', src: '/Installation_3.jpg'},
      { type: 'image', src: '/Installation_2.jpg'},
      { type: 'video', src: '/Installation-vid1.mp4', poster: '/Installation-vidPreview.jpg' }, 
    ]
  },
  {
    id: 4,
    title: "Cyber Portfolio",
    tag: "Upcoming",
    shortDesc: "Focusing on security-first design and pentesting logs.",
    fullDesc: "",
    link: "",
    tech: ["HackTheBox"],
    comingSoon: true
  },
  {
    id: 5,
    title: "CS 211",
    tag: "Upcoming",
    shortDesc: "Class project.",
    fullDesc: "",
    link: "",
    tech: ["VScode"],
    comingSoon: true
  },
  {
    id: 6,
    title: "CS 251",
    tag: "Upcoming",
    shortDesc: "Class project.",
    fullDesc: "",
    link: "",
    tech: ["VScode"],
    comingSoon: true
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleOpenProject = (project: any) => {
    setSelectedProject(project);
    setActiveMediaIndex(0);
  };

  return (
    <main className="min-h-screen bg-[#FFF9F0] p-10 font-playfair text-[#6B4E31]">
        <div className="scrapbook-bg fixed inset-0 z-0 opacity-30"/>
      <div className="max-w-6xl mx-auto">
          <div className="absolute top-15 -right-0 opacity-40 pointer-events-none rotate-45">
            <TulipIcon className="w-96 h-96 text-[#96A480]" />
           </div>
        
        <header className="text-center mb-24 space-y-4">
          <h1 className="text-6xl md:text-8xl text-[#556B2F] font-[family-name:var(--font-fleur)] tracking-tight">
            Curated Collection
          </h1>
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-20 bg-[#E5B1B6]" />
            <p className="italic text-[#9E616A] text-xl font-serif tracking-wide"> This is a gallery of all my projects.</p>
            <div className="h-[1px] w-20 bg-[#E5B1B6]" />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => !project.comingSoon && handleOpenProject(project)}
              className={`
                relative rounded-2xl p-6 transition-all duration-500 overflow-hidden
                ${project.comingSoon 
                  ? 'bg-[#F6DFE0]/30 border border-[#E5B1B6]/20 cursor-default backdrop-blur-[2px]' 
                  : 'bg-[#F6DFE0] border border-[#E5B1B6] cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:border-[#96A480]'}
              `}
            >
              <div className={`h-48 rounded-xl mb-6 flex items-center justify-center border border-[#E5B1B6]/60 overflow-hidden
                ${project.comingSoon ? 'bg-[#FCEEA8]/10' : 'bg-[#FCEEA8]'}
              `}>
                {project.previewImage && !project.comingSoon ? (
                  <img 
                    src={project.previewImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <TulipIcon className={`w-10 h-10 ${project.comingSoon ? 'text-[#96A480]/20' : 'text-[#96A480]'}`} />
                )}
              </div>

              <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mb-4 inline-block bg-[#E5B1B6] text-[#800000] 
                ${project.comingSoon ? 'opacity-60' : 'opacity-100'}`}>
                {project.comingSoon ? "Coming Soon" : project.tag}
              </span>

              <h3 className={`text-2xl mb-2 font-serif ${project.comingSoon ? 'text-[#6B4E31]/20' : 'text-[#6B4E31]'}`}>
                {project.comingSoon ? "[Locked]" : project.title}
              </h3>
              
              <p className={`text-xs leading-relaxed ${project.comingSoon ? 'text-[#6B4E31]/20' : 'text-[#6B4E31]/60'}`}>
                {project.comingSoon ? "Stay tuned! This project is currently in the nursery." : project.shortDesc}
              </p>
            </div>
          ))}
        </div>

          {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#6B4E31]/50 backdrop-blur-md">
            <div className="bg-[#FFFDFB] w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl relative border-2 border-[#E5B1B6] animate-in fade-in zoom-in duration-300">
              <button 
                type="button"
                onClick={() => setSelectedProject(null)} 
                className="absolute top-8 right-10 text-3xl text-[#9E616A] hover:scale-125 z-50 transition-transform"
              >
                🌸
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-[#F6DFE0]/40 p-10 border-r border-[#E5B1B6]">
                   <div className="aspect-square bg-black border-2 border-[#FCEEA8] rounded-2xl shadow-inner mb-6 overflow-hidden flex items-center justify-center">
                    {selectedProject.media && selectedProject.media.length > 0 ? (
                        selectedProject.media[activeMediaIndex].type === 'video' ? (
                            <video 
                              key={selectedProject.media[activeMediaIndex].src}
                              src={selectedProject.media[activeMediaIndex].src} 
                              autoPlay muted loop controls
                              className="w-full h-full object-cover" 
                            />
                        ) : (
                            <img 
                            src={selectedProject.media[activeMediaIndex].src} 
                            alt={`${selectedProject.title} preview`}
                            onClick={() => setIsZoomed(!isZoomed)}
                            className={`w-full h-full cursor-zoom-in transition-all duration-500 ${
                              isZoomed 
                                ? 'fixed inset-0 z-[60] object-contain bg-black/90 p-10' 
                                : 'object-cover'
                            }`}
                            />
                        )): (
                        <TulipIcon className="w-12 h-12 text-[#FCEEA8] opacity-20" />
                    )}
                   </div>

                   <div className="flex gap-4 overflow-x-auto pb-2">
                     {selectedProject.media?.map((m: any, idx: number) => (
                       <button
                        type="button"
                        key={idx}
                        onClick={() => setActiveMediaIndex(idx)}
                        className={`w-16 h-16 rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all
                          ${activeMediaIndex === idx ? 'border-[#96A480] scale-105 shadow-md' : 'border-[#E5B1B6] opacity-70'}
                        `}
                       >
                         {m.type === 'video' ? (
                          <img
                           src={m.poster || selectedProject.previewImage} 
                          alt="Video preview" 
                          className="w-full h-full object-cover brightness-90"
                          />
                         ) : (
                           <img 
                            src={m.src} 
                            alt={`Gallery image ${idx + 1}`}
                            className="w-full h-full object-cover"
                            />
                         )}
                       </button>
                     ))}
                   </div>
                </div>

                <div className="p-12 flex flex-col justify-center">
                  <h2 className="text-5xl text-[#96A480] mb-6 font-[family-name:var(--font-fleur)]">{selectedProject.title}</h2>
                  <p className="text-[#6B4E31] leading-relaxed mb-10 border-l-4 border-[#FCEEA8] pl-6 italic">
                    {selectedProject.fullDesc}
                  </p>
                  
                  <div className="mb-10">
                    <WaxSeal label="Visit Project" href={selectedProject.link} />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t: string) => (
                      <span key={t} className="px-3 py-1 bg-[#FCEEA8] text-[#800000] text-[10px] font-bold uppercase rounded tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}