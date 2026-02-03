import React from 'react';
import { TIMELINE_DATA } from '../constants';

export const Timeline: React.FC = () => {
  return (
    <div className="relative container mx-auto px-4">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bio-main via-bio-dark to-transparent md:-translate-x-1/2 opacity-30"></div>

      <div className="space-y-12">
        {TIMELINE_DATA.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Spacer for desktop layout balance */}
              <div className="hidden md:block w-5/12" />

              {/* Node Point */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-paper border-4 border-bio-main z-10 flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 bg-bio-dark rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 w-full md:w-5/12">
                <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-bio-main hover:shadow-2xl transition-shadow duration-300 group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 bg-bio-light text-bio-dark text-xs font-bold rounded-full uppercase tracking-wider">
                      {item.week}
                    </span>
                    <span className="text-sm text-slate-500 font-mono font-medium">{item.dates}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-800 mb-2 group-hover:text-bio-main transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {item.focus}
                  </p>
                  <item.icon className="w-5 h-5 text-bio-main/60" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};