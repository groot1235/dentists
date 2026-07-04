'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

interface Testimonial {
  name: string;
  location: string;
  treatment: string;
  rating: number;
  review: string;
  date: string;
}

export default function Testimonials() {
  const { openBooking } = useBooking();

  const reviews: Testimonial[] = [
    {
      name: 'Victoria Hastings',
      location: 'Manhattan, NY',
      treatment: 'Smile Design & Porcelain Veneers',
      rating: 5,
      review: 'I never thought a dental visit could feel like a wellness retreat. The design is spectacular, and Dr. Vane’s meticulous attention to symmetry gave me a smile that feels completely natural and gorgeous.',
      date: '2 months ago'
    },
    {
      name: 'Alexander Sterling',
      location: 'Brooklyn, NY',
      treatment: 'Laser Teeth Whitening',
      rating: 5,
      review: 'Absolutely brilliant. The laser whitening process was painless, and I was fitted with customized aftercare kits. The results are astounding, lifting my shade significantly in just one session.',
      date: '1 month ago'
    },
    {
      name: 'Serena Vance',
      location: 'Greenwich, CT',
      treatment: 'Invisalign® Clear Aligners',
      rating: 5,
      review: 'Frictionless, modern dentistry. The 3D tracking allowed me to see exactly how my smile would shift. Aura is hands down the most premium dental experience in the tri-state area.',
      date: '3 months ago'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-accent/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Patient Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-primary">
            Trusted by Connoisseurs of <span className="italic font-medium text-accent">Fine Artistry</span>
          </h2>
          <div className="h-[1px] w-20 bg-accent/40 mx-auto my-6" />
          <p className="font-sans text-base text-secondary font-light">
            Read first-hand accounts of patient transformations. From standard care to complete custom smile designs, we focus on delivering a comforting experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="glass-premium p-8 rounded-[28px] border border-border-light/20 flex flex-col justify-between hover:shadow-premium-lg transition-shadow duration-300 relative group"
            >
              {/* Quote Mark Decoration */}
              <Quote className="absolute top-6 right-8 w-10 h-10 text-accent/5 group-hover:text-accent/10 transition-colors duration-300 pointer-events-none" />

              <div className="space-y-6">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm font-light text-primary leading-relaxed">
                  “{rev.review}”
                </p>
              </div>

              {/* Patient Footer */}
              <div className="pt-6 mt-6 border-t border-border-light/40 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-semibold text-primary">
                    {rev.name}
                  </h4>
                  <p className="font-sans text-[10px] text-secondary">
                    {rev.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 bg-accent/5 px-2 py-0.5 rounded text-[9px] font-semibold text-accent uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3" />
                    {rev.treatment.split('&')[0].trim()}
                  </span>
                  <p className="font-sans text-[9px] text-secondary/60 mt-1">
                    {rev.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge Callout */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex justify-center items-center gap-2">
            <span className="font-sans text-xs text-secondary">
              Aura Dental Studio is rated <strong className="font-semibold text-primary">4.9 out of 5 stars</strong> based on 500+ patient reviews across
            </span>
            <span className="font-serif text-sm font-bold tracking-wide text-primary">Google</span>
          </div>
          <button
            onClick={() => openBooking('Consultation')}
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-accent font-sans text-xs font-semibold tracking-wider uppercase px-8 py-3.5 rounded-full transition-all duration-300 shadow-premium-md hover:shadow-premium-xl cursor-pointer"
          >
            Experience Aura Yourself
          </button>
        </div>

      </div>
    </section>
  );
}
