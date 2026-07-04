'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, Activity, Smile, Info } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

interface Treatment {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  image?: string;
  price: string;
}

export default function Treatments() {
  const { openBooking } = useBooking();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const treatments: Treatment[] = [
    {
      id: 'smile-design',
      name: 'Smile Design',
      shortDesc: 'A complete custom aesthetic transformation tailored to your unique facial features.',
      longDesc: 'Using advanced 3D modeling and aesthetic mapping, we design a customized blueprint of your ideal smile before treatment begins.',
      image: '/images/smile_aesthetic.png',
      price: 'From $1,500'
    },
    {
      id: 'invisalign',
      name: 'Invisalign® Clear Aligners',
      shortDesc: 'Discreet, comfortable orthodontic alignment designed for busy modern lifestyles.',
      longDesc: 'Gradually position your teeth using clear, medical-grade polyurethane trays. Virtually invisible, removable for dining, and highly effective.',
      image: '/images/treatment_invisalign.png',
      price: 'From $3,500'
    },
    {
      id: 'porcelain-veneers',
      name: 'Porcelain Veneers',
      shortDesc: 'Handcrafted wafer-thin shells that mask chips, gaps, and severe discoloration.',
      longDesc: 'Our master ceramists hand-sculpt bespoke dental porcelain layers to deliver an ultra-natural appearance, perfect alignment, and enduring brilliance.',
      image: '/images/smile_aesthetic.png',
      price: 'From $1,200 / tooth'
    },
    {
      id: 'dental-implants',
      name: 'Dental Implants',
      shortDesc: 'Biocompatible restorations that replicate the strength and feel of natural teeth.',
      longDesc: 'A premium titanium anchor serves as a root replacement, crowned with bespoke porcelain. Restores full chewing power and bone health.',
      image: '/images/clinic_room.png',
      price: 'From $2,800'
    },
    {
      id: 'teeth-whitening',
      name: 'Laser Teeth Whitening',
      shortDesc: 'Advanced clinical whitening systems offering up to 8 shades of lifting in one visit.',
      longDesc: 'Safe, low-sensitivity medical laser whitening paired with customized take-home conditioning kits for lasting, radiant aesthetics.',
      image: '/images/smile_aesthetic.png',
      price: 'From $450'
    },
    {
      id: 'general-dentistry',
      name: 'Bespoke Family Care',
      shortDesc: 'Meticulous general wellness therapies delivered in a relaxing spa-like environment.',
      longDesc: 'From preventative laser cleaning to custom nightguards, our modern, low-stress care keeps your family healthy and comfortable.',
      image: '/images/clinic_room.png',
      price: 'From $150'
    }
  ];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[400px] left-[-200px] w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Featured Solutions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-primary">
            Artistic Excellence in <span className="italic font-medium">Cosmetic Dentistry</span>
          </h2>
          <div className="h-[1px] w-20 bg-accent/40 mx-auto my-6" />
          <p className="font-sans text-base text-secondary font-light">
            We focus on custom, natural-looking results that harmonize with your features. Each treatment is tailored to ensure comfort and visual beauty.
          </p>
        </div>

        {/* Before/After Interactive Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 bg-white/40 dark:bg-black/20 p-8 rounded-[32px] border border-border-light/30 backdrop-blur-md">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 py-1 px-3 rounded-full">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-accent">
                Interactive Transformation Simulator
              </span>
            </div>
            <h3 className="font-serif text-3xl font-light leading-snug text-primary">
              See the Brilliance <br />
              <span className="italic font-medium text-accent">Before it Begins</span>
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed font-light">
              Experience the power of Aura Smile Design. Using non-invasive optical scanning, we preview your porcelain veneers or laser whitening results. Drag the slider on the right to simulate the aesthetic change from dull, stained teeth to a sparkling, confident white smile.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-accent/10 mt-1">
                  <Smile className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-primary">Pre-Treatment Analysis</h4>
                  <p className="font-sans text-xs text-secondary">Identify tooth texture, staining, and spacing misalignments.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-accent/10 mt-1">
                  <Activity className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-primary">Instant digital simulation</h4>
                  <p className="font-sans text-xs text-secondary">Preview shade options from natural off-white to Hollywood bright.</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => openBooking('Smile Design Simulation')}
              className="flex items-center gap-2 bg-primary text-white hover:bg-accent font-sans text-xs font-semibold tracking-wider uppercase px-6 py-3.5 rounded-full shadow-premium-md transition-all duration-300 hover:shadow-premium-xl active:translate-y-0 cursor-pointer w-full sm:w-auto text-center justify-center"
            >
              Request Smile Simulation
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Slider Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div 
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="relative w-full max-w-[550px] aspect-[16/10] rounded-[24px] overflow-hidden shadow-premium-xl select-none cursor-ew-resize border border-border-light/20"
            >
              {/* After Image (Pearly White Smile) */}
              <div className="absolute inset-0">
                <Image
                  src="/images/smile_aesthetic.png"
                  alt="After Smile Design Treatment"
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
                <div className="absolute bottom-4 right-4 bg-primary/70 text-white font-sans text-[10px] uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-sm">
                  After Whitening
                </div>
              </div>

              {/* Before Image Overlay (Grayscaled/Sepia tinted to look yellow/stained) */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <Image
                  src="/images/smile_aesthetic.png"
                  alt="Before Smile Design Treatment"
                  fill
                  className="object-cover pointer-events-none filter brightness-85 sepia-35 saturate-70 hue-rotate-350"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
                <div className="absolute bottom-4 left-4 bg-primary/70 text-white font-sans text-[10px] uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-sm">
                  Before
                </div>
              </div>

              {/* Slider Split Line */}
              <div 
                className="absolute top-0 bottom-0 w-[2px] bg-accent z-10"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Draggable Circle handle */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 slider-handle">
                  <div className="flex gap-1">
                    <span className="text-accent text-xs font-semibold">&lt;</span>
                    <span className="text-accent text-xs font-semibold">&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatments Grid */}
        <div id="treatments" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className="group glass-premium hover:shadow-premium-xl rounded-[28px] overflow-hidden flex flex-col justify-between border border-border-light/30 transition-all duration-300"
            >
              <div>
                {/* Treatment Image Visual */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={treatment.image || '/images/smile_aesthetic.png'}
                    alt={treatment.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  {/* Subtle Accent Glow on Hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Treatment Details */}
                <div className="p-8 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-primary group-hover:text-accent transition-colors duration-300">
                      {treatment.name}
                    </h3>
                    <span className="font-sans text-[11px] font-semibold text-accent uppercase tracking-wider bg-accent/5 px-2.5 py-1 rounded">
                      {treatment.price}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-secondary font-light leading-relaxed">
                    {treatment.shortDesc}
                  </p>
                  <p className="font-sans text-[11px] text-secondary/70 leading-normal font-light pt-2 border-t border-border-light/40 group-hover:text-secondary transition-colors">
                    {treatment.longDesc}
                  </p>
                </div>
              </div>

              {/* Treatment Action */}
              <div className="px-8 pb-8">
                <button
                  onClick={() => openBooking(treatment.name)}
                  className="w-full flex items-center justify-center gap-2 border border-border-light/80 hover:border-primary hover:bg-primary hover:text-white text-secondary font-sans text-[11px] uppercase tracking-widest py-3.5 rounded-full transition-all duration-300 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Schedule Appointment
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/50 py-2.5 px-5 rounded-full border border-border-light/40 shadow-premium-sm">
            <Info className="w-4 h-4 text-accent" />
            <span className="font-sans text-xs text-secondary font-light">
              Unsure which treatment fits your budget? Schedule a free 15-minute diagnostic call.
              <button 
                onClick={() => openBooking('Free Diagnostic Call')}
                className="font-semibold text-accent hover:underline ml-1 cursor-pointer"
              >
                Book Call
              </button>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
