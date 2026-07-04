'use client';

import Image from 'next/image';
import { ArrowRight, Star, ShieldCheck, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-bg-light">
      {/* Background Soft Lighting Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8 text-left">
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/40 dark:bg-black/20 border border-border-light/40 py-1.5 px-3 rounded-full w-fit backdrop-blur-md shadow-premium-sm"
          >
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary">
              Premium Cosmetic & Restorative Studio
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-primary"
            >
              Crafting masteries in <br />
              <span className="font-medium italic text-accent">smiles & tranquility.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-base sm:text-lg font-light text-secondary max-w-lg leading-relaxed"
            >
              Welcome to Aura Dental Studio, a calming sanctuary where state-of-the-art dental technology merges with bespoke cosmetic artistry to elevate your care.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <button
              onClick={() => openBooking('Cosmetic Consultation')}
              className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-accent font-sans text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full shadow-premium-md transition-all duration-300 hover:-translate-y-[2px] hover:shadow-premium-xl active:translate-y-0 cursor-pointer"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#treatments"
              className="flex items-center justify-center gap-2 bg-transparent text-primary hover:text-accent border border-primary hover:border-accent font-sans text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 cursor-pointer"
            >
              View Treatments
            </a>
          </motion.div>

          {/* Review badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-4 pt-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border border-bg-light bg-stone-${i * 100} overflow-hidden relative flex items-center justify-center text-[10px] text-white font-bold`}>
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
                  P{i}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
                <span className="font-sans text-sm font-semibold text-primary ml-1">4.9★</span>
              </div>
              <p className="font-sans text-xs text-secondary">
                Trusted by 500+ smiling patients
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side Visuals */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[500px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-premium-xl group"
          >
            <Image
              src="/images/clinic_interior.png"
              alt="Aura Dental Studio Luxury Reception Lounge"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Cinematic overlay shading */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Glassmorphism Badge 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-12 -left-6 sm:-left-12 glass-premium py-4 px-6 rounded-2xl hidden sm:flex items-center gap-3 max-w-[200px]"
          >
            <div className="p-2 rounded-lg bg-accent/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-accent fill-accent" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-primary">Artistry & Care</h4>
              <p className="font-sans text-[11px] text-secondary">Bespoke cosmetic veneers</p>
            </div>
          </motion.div>

          {/* Floating Glassmorphism Badge 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-16 -right-6 sm:-right-8 glass-premium py-4 px-6 rounded-2xl hidden sm:flex items-center gap-3 max-w-[220px]"
          >
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h4 className="font-serif text-sm font-semibold text-primary">Now Welcoming</h4>
              <p className="font-sans text-[11px] text-secondary">New patients this month</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
