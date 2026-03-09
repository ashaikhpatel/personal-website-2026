import React from 'react'

const Skills = () => {
  return (
    <main className="max-w-6xl mx-auto p-10 font-serif text-[#6B4E31]">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl mb-4 text-[#556B2F]">Technical Artistry</h1>
        <p className="italic text-[#C87D87]">A showcase of my skills and experience.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
        <section className="space-y-12">
          <div className="bg-[#FDF5E6] p-8 rounded-sm border border-[#EAD7BB] shadow-sm">
            <h2 className="text-3xl mb-6 text-[#556B2F] border-b border-[#EAD7BB] pb-2">Digital Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-medium">
              <div className="p-4 bg-white border border-[#EAD7BB] text-center text-[#556B2F]">Python</div>
              <div className="p-4 bg-white border border-[#EAD7BB] text-center text-[#556B2F]">Java</div>
              <div className="p-4 bg-white border border-[#EAD7BB] text-center text-[#556B2F]">C++</div>
              <div className="p-4 bg-white border border-[#EAD7BB] text-center text-[#556B2F]">C</div>
              <div className="p-4 bg-white border border-[#EAD7BB] text-center text-[#556B2F]">HTML</div>
              <div className="p-4 bg-white border border-[#EAD7BB] text-center text-[#556B2F]">Next.js</div>
              <div className="p-4 bg-white border border-[#EAD7BB] text-center text-[#556B2F] col-span-2 md:col-span-1">Tailwind CSS</div>
            </div>
          </div>

          <div className="bg-[#FDF5E6] p-8 rounded-sm border border-[#EAD7BB] shadow-sm">
            <h2 className="text-3xl mb-8 text-[#556B2F] border-b border-[#EAD7BB] pb-2">Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-[#C87D87] uppercase tracking-widest text-xs">Development</h3>
                <ul className="space-y-2 text-sm text-[#6B4E31]">
                  <li className="flex items-center gap-2"><span>✦</span> VS Code</li>
                  <li className="flex items-center gap-2"><span>✦</span> CLion</li>
                  <li className="flex items-center gap-2"><span>✦</span> Git & GitHub</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-[#C87D87] uppercase tracking-widest text-xs">Cybersecurity</h3>
                <ul className="space-y-2 text-sm text-[#6B4E31]">
                  <li className="flex items-center gap-2"><span>✦</span> HackTheBox Labs</li>
                  <li className="flex items-center gap-2"><span>✦</span> Secure Version Control</li>
                </ul>
              </div>
              <div className="space-y-4 md:col-span-2">
                <h3 className="font-bold text-[#C87D87] uppercase tracking-widest text-xs border-b border-[#EAD7BB] pb-1">Design & Workflow</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm text-[#6B4E31]">
                  <li className="flex items-center gap-2"><span>✦</span> Figma (UI/UX)</li>
                  <li className="flex items-center gap-2"><span>✦</span> Notion</li>
                  <li className="flex items-center gap-2"><span>✦</span> Microsoft Excel</li>
                  <li className="flex items-center gap-2"><span>✦</span> Google Sheets</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="border-l-4 border-[#D1AE6D] pl-6 space-y-6">
            <h2 className="text-3xl text-[#556B2F]">Current Focus</h2>
            <div className="space-y-6">
              <div>
                <span className="font-bold text-lg text-[#556B2F]">Cybersecurity & Security-First Dev</span>
                <p className="italic text-sm mt-1">Focusing on resilient systems and secure web practices.</p>
              </div>
              <div>
                <span className="font-bold text-lg text-[#556B2F]">UI/UX Prototyping (Figma)</span>
                <p className="italic text-sm mt-1">Translating artistic vision into functional digital interfaces.</p>
              </div>
              <div>
                <span className="font-bold text-lg text-[#556B2F]">HackTheBox (Independent study)</span>
                <p className="italic text-sm mt-1">Building hands-on technical skills in penetration testing and security.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C87D87] mb-6 font-sans">Artifacts</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative overflow-hidden border border-[#EAD7BB] bg-white p-2 shadow-sm transition-all duration-500 hover:-rotate-2 hover:shadow-md">
                <div className="overflow-hidden bg-[#FDF5E6] aspect-video mb-2">
                </div>
                <p className="text-[10px] italic text-center text-[#6B4E31]">No. 01: coming soon</p>
              </div>

              <div className="group relative overflow-hidden border border-[#EAD7BB] bg-white p-2 shadow-sm transition-all duration-500 hover:rotate-2 hover:shadow-md">
                <div className="overflow-hidden bg-[#FDF5E6] aspect-video mb-2">
                </div>
                <p className="text-[10px] italic text-center text-[#6B4E31]">No. 02: coming soon</p>
              </div>

               <div className="group relative overflow-hidden border border-[#EAD7BB] bg-white p-2 shadow-sm transition-all duration-500 hover:-rotate-2 hover:shadow-md">
                <div className="overflow-hidden bg-[#FDF5E6] aspect-video mb-2">
                </div>
                <p className="text-[10px] italic text-center text-[#6B4E31]">No. 03: coming soon</p>
              </div>

              <div className="group relative overflow-hidden border border-[#EAD7BB] bg-white p-2 shadow-sm transition-all duration-500 hover:rotate-2 hover:shadow-md">
                <div className="overflow-hidden bg-[#FDF5E6] aspect-video mb-2">
                </div>
                <p className="text-[10px] italic text-center text-[#6B4E31]">No. 04: coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl text-[#556B2F] mb-12 text-center">Professional Experiences</h2>
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#EAD7BB] before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#EAD7BB] bg-[#FDF5E6] text-[#556B2F] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
              ❀
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white p-6 rounded-sm border border-[#EAD7BB] shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-[#556B2F] text-lg">Head Teacher</div>
                <time className="font-serif italic text-xs text-[#C87D87]">5 Years</time>
              </div>
              <p className="text-sm leading-relaxed">
                Led a transformative project to digitize an outdated paper system, 
                bridging the gap between traditional administration and modern efficiency.
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#EAD7BB] bg-[#FDF5E6] text-[#556B2F] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
              ❀
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white p-6 rounded-sm border border-[#EAD7BB] shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-[#556B2F] text-lg">Data Operations Intern</div>
                <time className="font-serif italic text-xs text-[#C87D87]">Summer 2021</time>
              </div>
              <p className="text-sm leading-relaxed">
                Maintained high-accuracy databases for travel documentation and developed automated 
                tracking systems to reduce manual entry errors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Skills