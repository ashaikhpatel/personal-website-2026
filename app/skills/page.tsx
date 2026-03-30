"use client";
import TimeLineItem from '../components/TimeLineItem';
import { TulipIcon } from '../components/Icons';

const languages: string[] = [
  "Python", "Java", "C++", "C", "HTML", "Next.js", "Tailwind", "JS"
];

const toolbeltCategories: { title: string; items: string[] }[] = [
  {
    title: "Development",
    items: ["VS Code & CLion", "Git & GitHub", "Notion & Excel"],
  },
  {
    title: "Security & Art",
    items: ["HackTheBox Labs", "Figma (UI/UX)", "Color Theory"],
  },
];

const experiences: { side: "left" | "right"; title: string; duration: string; description: string }[] = [
  {
    side: "left",
    title: "Head Teacher",
    duration: "5 Years",
    description:
      "Guided the Saturday program at Suffah Educational Guidance. Spearheaded the digital migration of traditional records and designed a cohesive curriculum architecture.",
  },
  {
    side: "right",
    title: "Data Operations Intern",
    duration: "Summer 2021",
    description:
      "Developed automated tracking systems and managed high-precision database integrity.",
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F0] p-10 font-serif text-[#6B4E31]">
      <div className="max-w-6xl mx-auto relative">
      <div className="scrapbook-bg"/>
        <div className="absolute top-5 -right-20 opacity-40 pointer-events-none rotate-45">
          <TulipIcon className="w-96 h-96 text-[#96A480]" />
        </div>

        <header className="text-center mb-24 space-y-2">
          <h1 className="text-7xl md:text-8xl text-[#556B2F] font-[family-name:var(--font-fleur)] tracking-tight">
            Technical Artistry
          </h1>
          <div className="flex items-center justify-center gap-6">
            <div className="h-[2px] w-24 bg-[#9E616A] opacity-30" />
            <p className="italic text-[#9E616A] text-xl font-medium tracking-wide">
              A showcase of my skills and experience
            </p>
            <div className="h-[2px] w-24 bg-[#9E616A] opacity-30" />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch mb-32">

          <div className="relative bg-[#F6DFE0] p-12 rounded-[4rem] border-2 border-[#E5B1B6] shadow-[inset_0_2px_10px_rgba(158,97,106,0.1)]">
            <h2 className="text-4xl mb-10 text-[#556B2F] font-serif italic text-center decoration-4 underline-offset-8">
              Digital Languages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {languages.map((lang) => (
                <button
                  type="button"
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
            <h2 className="text-4xl mb-10 text-[#556B2F] font-serif italic text-center">
              My Toolbelt
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {toolbeltCategories.map((category) => (
                <div
                  key={category.title}
                  className="bg-[#FFFDFB]/60 p-8 rounded-[2.5rem] border border-[#E5B1B6]"
                >
                  <h3 className="font-bold text-[#800000] uppercase tracking-[0.3em] text-[11px] mb-6 border-b-2 border-[#FCEEA8] pb-2 text-center">
                    {category.title}
                  </h3>
                  <ul className="space-y-4 text-sm italic">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 hover:text-[#96A480] transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#9E616A]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="pt-15 relative mb-32">
          <header className="text-center mb-24">
            <h2 className="text-8xl text-[#556B2F] font-[family-name:var(--font-fleur)] mb-6 tracking-tight">
              Professional Journey
            </h2>
          </header>

          <div className="absolute left-1/2 top-[380px] bottom-0 w-[3px] bg-gradient-to-b from-[#E5B1B6] via-[#9E616A] to-transparent -translate-x-1/2 hidden md:block opacity-30" />

          <div className="relative">
            {experiences.map((exp) => (
              <TimeLineItem
                key={exp.title}
                side={exp.side}
                title={exp.title}
                duration={exp.duration}
                description={exp.description}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}