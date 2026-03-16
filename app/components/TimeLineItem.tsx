"use client";
import React from 'react';
import { TulipIcon } from './Icons';

interface TimeLineProps {
  side: 'left' | 'right';
  title: string;
  duration: string;
  description: string;
}

const TimeLineItem = ({ side, title, duration, description }: TimeLineProps) => {
  return (
    <div className={`relative flex items-center justify-between md:justify-normal w-full mb-16 group
      ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      <div className="w-full md:w-[45%] bg-[#F6DFE0] p-8 rounded-[3rem] border-2 border-transparent group-hover:border-[#9E616A] shadow-sm transition-all duration-500 hover:shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#800000] bg-[#FCEEA8] px-4 py-1.5 rounded-full border border-[#E5B1B6]">
            {duration}
          </span>
        </div>
        <h3 className="text-3xl font-serif text-[#6B4E31] mb-3">{title}</h3>
        <p className="text-xs leading-relaxed text-[#6B4E31]/80 italic">
          {description}
        </p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16">
        <div className="w-10 h-10 rounded-full bg-[#9E616A] flex items-center justify-center shadow-[0_4px_10px_rgba(158,97,106,0.4)] group-hover:scale-125 transition-transform duration-500 cursor-pointer">
          <TulipIcon className="w-5 h-5 text-[#FCEEA8]" />
        </div>
      </div>

      <div className="hidden md:block w-[45%]"></div>
    </div>
  );
};

export default TimeLineItem;