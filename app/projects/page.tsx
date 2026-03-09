import React from 'react'

const projects = () => {
  return (
    <main className="max-w-4xl mx-auto p-10 font-serif">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl mb-4 text-[#556B2F]">A Curated Collection</h1>
        <p className="italic text-[#C87D87]">This is a gallery of all my projects.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border border-[#EAD7BB] bg-pink p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
          <div className="w-full aspect-video bg-[#FDF5E6] mb-4 flex items-center justify-center text-[#D1AE6D] border border-dashed border-[#D1AE6D]">
            <img 
              src="WiCS-Logo.jpeg" 
              alt="WiCS logo"
            />
          </div>
          <h2 className="text-xl mb-2 text-[#556B2F]">Wired Web-Dev</h2>
          <p className="text-sm mb-4">A semester-long focus on creating a personal website and version control.</p>
          <span className="text-xs uppercase tracking-widest text-[#C87D87]">In Progress</span>
        </div>
         <div className="border border-[#EAD7BB] bg-pink p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
          <div className="w-full aspect-video bg-[#FDF5E6] mb-4 flex items-center justify-center text-[#D1AE6D] border border-dashed border-[#D1AE6D]">
            [Coming Soon]
          </div>
          <h2 className="text-xl mb-2 text-[#556B2F]">Website Re-dev</h2>
          <p className="text-sm">Led the institutional website redesign, defining features, user flows, and requirements to modernize the institute's digital</p>
        </div>
        <div className="border border-[#EAD7BB] bg-white p-6 rounded-sm shadow-sm opacity-60">
          <div className="w-full aspect-video bg-[#FDF5E6] mb-4 flex items-center justify-center text-[#D1AE6D]">
            [Coming Soon]
          </div>
          <h2 className="text-xl mb-2 text-[#556B2F]">coming soon</h2>
          <p className="text-sm">project 3</p>
        </div>
      </div>
    </main>
  )
}

export default projects