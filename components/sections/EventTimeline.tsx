"use client";

import { Event } from "@/lib/events";

interface EventTimelineProps {
  timeline: Event['timeline'];
}

export function EventTimeline({ timeline: _timeline }: EventTimelineProps) {
  void _timeline;

  return (
    <div className="mt-2 w-full">
      <h4 className="text-[#00f0ff] font-orbitron font-bold tracking-widest mb-3 flex items-center gap-3 text-sm uppercase">
        <div className="w-6 h-6 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[10px]">T</div>
        Timeline
      </h4>
      <div className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-md p-3">
        <span className="font-mono text-[#00f0ff]/85 text-xs shrink-0 uppercase tracking-[0.2em]">TBD</span>
        <div className="w-[1px] h-4 bg-white/10 shrink-0" />
        <span className="text-white/85 text-sm font-light w-full">Schedule will be announced soon.</span>
      </div>
    </div>
  );
}
