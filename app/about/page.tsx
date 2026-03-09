import React from 'react'

const About = () => {
  return (
    <main className="max-w-6xl mx-auto p-10 font-serif text-[#6B4E31]">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
       <section className="w-full">
        <div className="bio-stationery-container">
        <div className="bio-text-overlay">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#556B2F] text-center mb-6 pb-2 mx-auto w-3/4">
        My Story
        </h1>
        <div className="bio-scroll-area text-justify">
        <div className="space-y-4 text-[11px] sm:text-[13px] md:text-sm text-[#6B4E31] leading-relaxed">
           <p>
              <span className="text-2xl font-bold">H</span>i, I’m Asiyah. I’m a Computer Science student with a background that’s 
                anything but linear. For a long time, I traded code for canvases; as an award-winning artist, my original dream was 
                to be a fashion designer. But when 2020 shifted the world’s trajectory, it shifted mine, too. I took that time to 
                rethink my path, leading me to discover a deep fascination with the logic and security of Cybersecurity.
            </p>
            <p>
              My journey to tech has been built on a foundation of extreme persistence and resilience. I spent ten years pursuing and 
              earning my B.A. in Islamic Theology and Studies, a marathon that taught me more about discipline and analytical thinking 
              than any classroom ever could. During that time, I also spent five years as a Head Teacher, where I found myself leading 
              a project to digitize my institute’s entire outdated paper system. That experience - bridging the gap between "old school" 
              admin work and modern digital solutions — was the spark that led me to CS.
            </p>
            <p>
              Having lived in three different countries, I’ve grown used to navigating change and thriving in new environments. I bring 
              that same resilience to my technical work, along with a "designer’s eye" from my years of painting and drawing. Whether 
              I’m focusing on the security of a system or the layout of a page, I’ve always aimed for the highest standard—a drive that 
              has kept me on the honor roll and earned me academic recognition throughout my studies. Now I’m focusing that same drive on 
              building my first technical projects. I’m excited to merge my eye for design with the technical challenges of securing our digital spaces.
            </p>
        </div>
        </div>
        </div>
        </div>
        </section>

        <section className="space-y-12">
          <div className="flex justify-center relative z-10">
            <div className="p-10 bg-[#EAD7BB] rounded-t-full shadow-2xl">
              <div className="overflow-hidden rounded-t-full border-[6px] border-[#FFF9F0]">
                <img 
                  src="/Me.jpeg" 
                  alt="A Picture of Asiyah"
                  className="w-80 h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-[#EAD7BB] pt-8">
            <h2 className="text-2xl mb-4 text-[#C87D87]">Let's Connect</h2>
            <div className="space-y-2 italic text-[#6B4E31]">
              <p>Email: asiyah.sshaikh@gmail.com</p>
              <p>GitHub: github.com/ashaikhpatel</p>
              <p>LinkedIn: linkedin.com/in/asiyah-shaikh</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About