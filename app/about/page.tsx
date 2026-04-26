"use client";
import { useState, useEffect } from 'react';
import BioFrame from '../components/BioFrame';
import { GithubIcon, LinkedinIcon, MailIcon, TulipIcon } from '../components/Icons';

function SecurityNews() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?tag=cybersecurity&per_page=5')
      .then((res) => res.json())
      .then((data) => {
        const articles = Array.isArray(data) ? data : [];
        const filtered = articles.filter((article: any) => {
          const title = article.title?.toLowerCase() || "";
          return !title.includes('video') && !title.includes('youtube');
        });
        setArticles(filtered.slice(0, 3));
      })
      .catch((err) => console.error("Dev.to Fetch Error:", err));
  }, []);

  return (
    <div className="mt-12 p-6 border-2 border-[#96A480] bg-[#FDF5E6] rounded-sm font-[family-name:var(--font-smooch-sans)] shadow-md relative z-10">
      <h2 className="text-2xl text-[#556B2F] mb-4 italic border-b border-[#96A480]/30 pb-2 font-bold">
        Latest Bytes of Wisdom
      </h2>
      <ul className="space-y-6">
        {articles.length > 0 ? (
          articles.map((article: any) => (
            <li key={article.id} className="group">
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:translate-x-1 transition-transform"
              >
                <h3 className="text-lg text-[#800000] font-bold leading-tight group-hover:text-[#9E616A]">
                  {article.title}
                </h3>
                <p className="text-sm text-[#6B4E31] mt-1 opacity-80">
                  {new Date(article.published_at).toLocaleDateString()} • {article.reading_time_minutes} min read
                </p>
              </a>
            </li>
          ))
        ) : (
          <p className="italic text-[#6B4E31] opacity-60">Scanning the perimeter for updates...</p>
        )}
      </ul>
    </div>
  );
}

const About = () => {
  return (
    <main className="min-h-screen bg-[#FFF9F0] p-6 md:p-30 font-playfair text-[#6B4E31] relative overflow-x-hidden">
        <div className="scrapbook-bg"/>

      <header className="text-center mb-12 md:mb-24 space-y-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#556B2F] font-[family-name:var(--font-fleur)] tracking-tight">
          My Story
        </h1>
    </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="hidden lg:block absolute -top-20 -right-20 opacity-40 pointer-events-none rotate-45">
          </div>
        <section className="w-full order-2 lg:order-1">
          <TulipIcon className="inline-block w-10 h-10 text-[#9E616A] mr-2 -mt-2 align-middle" />
            <div className="bio-scroll-frame text-justify">
              <div className="space-y-6 text-base md:text-lg text-[#6B4E31] leading-relaxed font-bold font-[family-name:var(--font-smooch-sans)]">
              <p>
                <span className="text-3xl font-bold text-[#96A480] font-serif">H</span>i, I’m Asiyah. 
                 I’m a Computer Science student with a background that’s anything but linear. For a long time, I traded code for canvases; 
                 as an award-winning artist, my original dream was to be a fashion designer. But when 2020 shifted the world’s trajectory, 
                 it shifted mine too. I took that time to rethink my path, leading me to discover a deep fascination with the logic and security of Cybersecurity.
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
        </section>

        <section className="space-y-12 md:space-y-20 order-1 lg:order-2">
          <div className="relative flex justify-center md:justify-end">
              <div className="relative z-10 w-full max-w-[300px] sm:max-w-sm md:max-w-md">
            <BioFrame imageSrc="/Me.jpeg" />
              <div className="absolute -bottom-12 -right-12 opacity-20 pointer-events-none hidden sm:block">
                <TulipIcon className="w-48 h-48 text-[#96A480] rotate-12" />
              </div>
              </div>
          </div>

          <div className="p-8 rounded-2xl border border-[#E5B1B6] shadow-sm relative z-20">
            <h2 className="font-serif text-3xl mb-6 text-[#800000]">Let&apos;s Connect!</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-1">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#F6DFE0] text-[#9E616A]">
                  <MailIcon />
                </div>
                <a href="mailto:asiyah.sshaikh@gmail.com" className="italic text-sm md:text-base hover:text-[#9E616A] transition-colors border-b border-transparent hover:border-[#9E616A] truncate">
                  asiyah.sshaikh@gmail.com
                </a>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/ashaikhpatel" target="_blank" className="p-3 rounded-full bg-[#96A480]/10 text-[#96A480] hover:bg-[#96A480] hover:text-white transition-all duration-300">
                  <GithubIcon />
                </a>
                <a href="https://linkedin.com/in/asiyah-shaikh" target="_blank" className="p-3 rounded-full bg-[#9E616A]/10 text-[#9E616A] hover:bg-[#9E616A] hover:text-white transition-all duration-300">
                  <LinkedinIcon />
                </a>
              </div>
            </div>
            <SecurityNews />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;