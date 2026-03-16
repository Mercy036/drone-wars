"use client";

import { motion } from "framer-motion";
import { Event } from "@/lib/events";

interface EventTimelineProps {
  timeline: Event['timeline'];
}

export function EventTimeline({ timeline }: EventTimelineProps) {
  if (!timeline || (!timeline.day1 && !timeline.day2)) return null;

  return (
    <div className="mt-6 flex flex-col gap-6 w-full">
      {timeline.day1 && (
        <div className="w-full">
          <h4 className="text-[#00f0ff] font-orbitron font-bold tracking-widest mb-3 flex items-center gap-3 text-sm">
            <div className="w-6 h-6 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[10px]">D1</div>
            DAY 1 (MAY 2)
          </h4>
          <div className="flex flex-col gap-2">
            {timeline.day1.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-md p-3"
              >
                  <span className="font-mono text-[#00f0ff]/70 text-xs shrink-0">{item.time}</span>
                  <div className="w-[1px] h-4 bg-white/10 shrink-0" />
                  <span className="text-white/90 text-sm font-light w-full">{item.activity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {timeline.day2 && (
        <div className="w-full mt-2">
          <h4 className="text-primary font-orbitron font-bold tracking-widest mb-3 flex items-center gap-3 text-sm">
            <div className="w-6 h-6 rounded bg-primary/10 border border-primary/30 flex items-center justify-center text-[10px]">D2</div>
            DAY 2 (MAY 3)
          </h4>
          <div className="flex flex-col gap-2">
            {timeline.day2.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-md p-3"
              >
                  <span className="font-mono text-primary/70 text-xs shrink-0">{item.time}</span>
                  <div className="w-[1px] h-4 bg-white/10 shrink-0" />
                  <span className="text-white/90 text-sm font-light w-full">{item.activity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
