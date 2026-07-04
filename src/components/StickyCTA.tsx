'use client';

import { Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useBooking } from '@/context/BookingContext';

export default function StickyCTA() {
  const { openBooking } = useBooking();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the hero section (500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-sm md:hidden"
        >
          <button
            onClick={() => openBooking('Sticky Mobile CTA')}
            className="w-full flex items-center justify-center gap-2 bg-accent text-white font-sans text-xs font-semibold uppercase tracking-widest py-4 px-6 rounded-full shadow-premium-xl border border-white/10 backdrop-blur-md cursor-pointer hover:bg-primary transition-colors"
          >
            <Calendar className="w-4 h-4 animate-pulse" />
            Book Consultation
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
