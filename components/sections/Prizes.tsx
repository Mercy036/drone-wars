"use client";

import { motion } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Prizes() {
  return (
    <section id="prizes" className="py-14 md:py-16 relative overflow-hidden bg-[#03030a]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_22%,rgba(0,240,255,0.14),transparent_42%),radial-gradient(circle_at_82%_18%,rgba(255,77,0,0.14),transparent_40%)]" />
      <div className="container mx-auto px-4 z-10 text-center relative">
        <SectionHeading glowColor="primary">PRIZE POOL</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="mt-6 mb-8 relative"
        >
          <div className="mx-auto mb-5 flex flex-col md:flex-col lg:flex-row items-center justify-center gap-3 md:gap-4">
            <div className="inline-flex items-center gap-2 border border-[#00f0ff]/40 bg-[#00f0ff]/10 px-4 py-1.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#c8fcff]">
              <Trophy className="h-3.5 w-3.5 text-[#00f0ff]" />
              Championship Reward Matrix
              <Sparkles className="h-3.5 w-3.5 text-[#ffb08a]" />
            </div>

            <motion.h2
              animate={{ textShadow: ["0 0 0 rgba(0,240,255,0)", "0 0 30px rgba(0,240,255,0.2)", "0 0 0 rgba(0,240,255,0)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black text-white tracking-tighter uppercase relative inline-block whitespace-nowrap leading-none"
            >
              ₹8 LAKHS
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2" />
            </motion.h2>
          </div>

          <p className="text-xs md:text-sm text-[#00f0ff] font-mono tracking-[0.24em] mt-4 uppercase">Total Cash Prizes // Across 5 Events</p>
          <div className="mx-auto mt-3 h-px w-44 bg-gradient-to-r from-transparent via-[#ff4d00]/70 to-transparent" />
        </motion.div>

        <Card className="mx-auto max-w-3xl p-6 md:p-8 border border-white/10 bg-[linear-gradient(155deg,rgba(8,10,18,0.85),rgba(5,5,14,0.82))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_45px_rgba(0,0,0,0.4)]">
          <h3 className="text-lg md:text-xl font-orbitron font-bold tracking-[0.15em] uppercase text-white/75">Championship Status</h3>
          <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-[#ff4d00]/70 to-transparent" />
          <p className="mt-5 text-[11px] md:text-xs font-mono tracking-[0.1em] leading-relaxed uppercase text-white/72 max-w-2xl mx-auto">
            The national drone championship features 5 high-stakes arenas where pilots compete for glory and substantial rewards. Focus on technical excellence and precision maneuvering to claim your share of the massive prize pool.
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#ff4d00]/70 to-transparent" />
        </Card>
      </div>
    </section>
  );
}
