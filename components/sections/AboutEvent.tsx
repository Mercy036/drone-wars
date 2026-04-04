"use client";

import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function AboutEvent() {
  return (
    <section id="about" className="pt-10 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_15%,rgba(0,240,255,0.12),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(255,77,0,0.12),transparent_36%)]" />
      <div className="container mx-auto px-4 z-10">
        <div className="flex justify-center mb-2">
          <SectionHeading glowColor="secondary">About Us</SectionHeading>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="relative overflow-hidden p-5 md:p-8 text-center border-white/10 bg-[linear-gradient(155deg,rgba(7,10,18,0.88),rgba(5,5,14,0.86))] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_48px_rgba(0,0,0,0.4)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
            <div className="pointer-events-none absolute left-12 right-12 top-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/60 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative z-10 mb-4 inline-flex items-center gap-2 border border-[#00f0ff]/35 bg-[#00f0ff]/10 px-3 py-1"
            >
              <span className="text-[10px] md:text-xs font-mono tracking-[0.28em] uppercase text-[#bffbff]">International FPV Championship</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="relative z-10 mx-auto mb-4 max-w-5xl text-xl md:text-[2rem] font-orbitron font-bold leading-tight"
            >
              <span className="text-white">A global stage for </span>
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#ff4d00_100%)]">elite pilots, deep-tech ideas, and high-speed aerial combat</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="relative z-10 mx-auto mb-6 max-w-4xl text-xs md:text-sm text-white/78 font-mono tracking-wide leading-relaxed"
            >
              DRONOWAR at Jaypee Institute of Information Technology, Noida brings world-class FPV competition, DRDO scientist talks, advanced demonstrations, and mission-grade race formats into one high-energy international arena.
            </motion.p>

            <div className="relative z-10 mb-6 flex justify-center text-left">
              <motion.div whileHover={{ y: -4 }} className="w-full max-w-4xl border border-[#00f0ff]/35 bg-[linear-gradient(150deg,rgba(0,240,255,0.16),rgba(0,0,0,0.2))] p-4 md:p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center border border-[#00f0ff]/45 text-[#00f0ff]">
                  <Mic className="h-4 w-4" />
                </div>
                <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#8df8ff] mb-2">Expert Dialogues</p>
                <p className="text-sm text-white/82">Talks from DRDO scientists and domain specialists.</p>
              </motion.div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-3 justify-center">
              <Button
                size="sm"
                variant="outline"
                className="w-full sm:w-auto sm:min-w-[220px]"
                onClick={() => window.open("https://chat.whatsapp.com/EX3scdIr9TzLkWh4VxvXUA", "_blank", "noopener,noreferrer")}
              >
                WHATSAPP GROUP
              </Button>
              <Button size="sm" variant="primary" className="w-full sm:w-auto sm:min-w-[220px]">INSTRUCTIONS FOR RACE</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
