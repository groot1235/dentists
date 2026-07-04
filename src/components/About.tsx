'use client';

import Image from 'next/image';
import { Award, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';

export default function About() {
  const { openBooking } = useBooking();

  const statistics = [
    { value: '12+', label: 'Years of Artistry' },
    { value: '5K+', label: 'Smiles Perfected' },
    { value: '99.8%', label: 'Comfort Rating' },
    { value: '100%', label: 'Bespoke Focus' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Doctor Portrait & Luxury Framing */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background design accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-accent/40 rounded-tl-[24px]" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-accent/40 rounded-br-[24px]" />
            
            {/* The main portrait frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[400px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-premium-xl group"
            >
              <Image
                src="/images/doctor_portrait.png"
                alt="Dr. Evelyn Vane - Principal Cosmetic Specialist"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-103"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-8 -right-4 bg-primary text-white py-3.5 px-6 rounded-2xl shadow-premium-lg flex items-center gap-3 border border-primary-light"
            >
              <span className="font-serif text-3xl font-semibold text-accent">AACD</span>
              <div className="h-6 w-[1px] bg-white/20" />
              <span className="font-sans text-[10px] uppercase tracking-wider text-stone-300">
                Certified <br />Dental Artist
              </span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Meet our Clinical Lead
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-primary">
                Dr. Evelyn Vane, <span className="italic font-medium text-accent">DDS, MS</span>
              </h2>
              <div className="h-[1px] w-16 bg-accent/40 my-4" />
            </div>

            <div className="space-y-6 font-sans text-base font-light text-secondary leading-relaxed">
              <p>
                “Dentistry is more than a medical science; it is a meticulous craft that blends biological health with personal self-expression. Every veneer, crown, and realignment is designed to bring out the natural symmetry unique to your face.”
              </p>
              <p>
                Educated at the Columbia University College of Dental Medicine and fellowship-trained in oral aesthetics, Dr. Vane has dedicated her career to redefining the dental experience. She established Aura Dental Studio to remove the stress and clinical coldness of traditional clinics, replacing it with a calming, luxurious, spa-like environment.
              </p>
            </div>

            {/* Philosophy Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-accent/5 mt-0.5">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-primary">Credentialed Excellence</h4>
                  <p className="font-sans text-xs text-secondary/80 font-light mt-0.5">Dr. Vane is a recognized speaker and active board member in dental aesthetics societies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-accent/5 mt-0.5">
                  <HeartHandshake className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-primary">Somatic Tranquility</h4>
                  <p className="font-sans text-xs text-secondary/80 font-light mt-0.5">We utilize aromatherapy, noise-canceling headsets, and warm towel therapy to ensure absolute calm.</p>
                </div>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-border-light/40">
              {statistics.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left space-y-1">
                  <span className="font-serif text-2xl sm:text-3xl font-medium text-accent block">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-secondary block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Option */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={() => openBooking('Consultation with Dr. Evelyn Vane')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white hover:bg-accent font-sans text-xs font-semibold tracking-wider uppercase px-8 py-4 rounded-full shadow-premium-md transition-all duration-300 hover:shadow-premium-xl cursor-pointer"
              >
                Schedule consultation with Dr. Vane
              </button>
              <div className="text-sans text-xs text-secondary/70">
                *Currently accepting selective cosmetic cases.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
