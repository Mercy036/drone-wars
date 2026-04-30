"use client";

import { Event } from "@/lib/events";

interface EventTimelineProps {
  timeline: Event['timeline'];
  day1Date?: string;
  day2Date?: string;
}

export function EventTimeline({ timeline, day1Date, day2Date }: EventTimelineProps) {
  if (!timeline || (!timeline.day1 && !timeline.day2)) {
    return (
      <div className="w-full">
        <h4 className="text-[#00f0ff] font-orbitron font-bold tracking-widest mb-3 flex items-center gap-2.5 text-[0.95rem] uppercase leading-none">
          <div className="w-7 h-7 rounded-md bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[11px] leading-none">T</div>
          Timeline
        </h4>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
          <span className="font-mono text-[#00f0ff]/85 text-xs shrink-0 uppercase tracking-[0.2em]">TBD</span>
          <div className="w-[1px] h-4 bg-white/10 shrink-0" />
          <span className="text-white/85 text-sm font-light w-full">Schedule will be announced soon.</span>
        </div>
      </div>
    );
  }

  // Softer, less flashy colors
  const day1Color = "#3b82f6"; // blue-500
  const day2Color = "#22c55e"; // green-500
  const borderDay1 = "border-blue-400/30";
  const borderDay2 = "border-green-400/30";

  return (
    <div className="w-full">
      <h4 className="text-blue-400 font-orbitron font-bold tracking-widest mb-5 flex items-center gap-2.5 text-[1.1rem] uppercase leading-none">
        <div className="w-7 h-7 rounded-md bg-blue-400/10 border border-blue-400/30 flex items-center justify-center text-[13px] leading-none">T</div>
        Timeline
      </h4>
      <div className="space-y-8">
        {timeline.day1 && (
          <div className={`relative bg-white/5 border ${borderDay1} rounded-xl p-5 pt-8 mb-2`}> 
            <div className="absolute top-2 left-5 flex items-center gap-2 z-10">
              <span className="bg-blue-400 text-white font-bold font-mono text-xs px-3 py-1 rounded-full border border-blue-400 uppercase tracking-widest">
                Day 1{day1Date ? ` • ${day1Date}` : ''}
              </span>
            </div>
            <ul className="relative border-l-4 border-blue-400/30 ml-4 pl-8 mt-2">
              {timeline.day1.map((item, idx) => (
                <li key={idx} className="mb-8 last:mb-0 flex gap-4 items-start group relative">
                  <span className="absolute -left-6 mt-1 w-2.5 h-2.5 rounded-full bg-blue-400 border border-white/80" />
                  <div>
                    <div className="font-mono text-xs text-blue-400 mb-1 tracking-wider">{item.time}</div>
                    <div className="text-white font-semibold text-base leading-tight">{item.activity}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {timeline.day2 && (
          <div className={`relative bg-white/5 border ${borderDay2} rounded-xl p-5 pt-8`}>
            <div className="absolute top-2 left-5 flex items-center gap-2 z-10">
              <span className="bg-green-500 text-white font-bold font-mono text-xs px-3 py-1 rounded-full border border-green-500 uppercase tracking-widest">
                Day 2{day2Date ? ` • ${day2Date}` : ''}
              </span>
            </div>
            <ul className="relative border-l-4 border-green-400/30 ml-4 pl-8 mt-2">
              {timeline.day2.map((item, idx) => (
                <li key={idx} className="mb-8 last:mb-0 flex gap-4 items-start group relative">
                  <span className="absolute -left-6 mt-1 w-2.5 h-2.5 rounded-full bg-green-500 border border-white/80" />
                  <div>
                    <div className="font-mono text-xs text-green-500 mb-1 tracking-wider">{item.time}</div>
                    <div className="text-white font-semibold text-base leading-tight">{item.activity}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}