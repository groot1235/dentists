'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import BookingSystem from './BookingSystem';

export default function BookingModal() {
  const { isBookingOpen, selectedTreatment, closeBooking } = useBooking();

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="fixed inset-0 bg-primary/40 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative z-10 w-full max-w-2xl bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-premium-xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeBooking}
              className="absolute right-6 top-6 z-20 p-2 rounded-full bg-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer border border-border-light/10 hover:bg-white/20"
              aria-label="Close booking modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Booking Wizard */}
            <BookingSystem 
              initialTreatment={selectedTreatment} 
              onSuccessClose={closeBooking} 
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
