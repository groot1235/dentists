'use client';

import { Mail, Phone, MapPin, Clock, ArrowUp, Calendar } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function Footer() {
  const { openBooking } = useBooking();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      {/* Background Soft Glow */}
      <div className="absolute top-[20%] left-[-100px] w-[300px] h-[300px] rounded-full bg-accent/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-4 space-y-6">
            <a href="#" className="flex flex-col group w-fit cursor-pointer">
              <span className="font-serif text-3xl font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-accent">
                AURA
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-stone-400 -mt-1">
                Dental Studio
              </span>
            </a>
            <p className="font-sans text-xs text-stone-300 font-light leading-relaxed max-w-sm">
              Reimagining the dental experience as a holistic, soothing journey of self-care. Aura Dental Studio merges clinical excellence with bespoke artistic craftsmanship.
            </p>
            <button
              onClick={() => openBooking('Consultation')}
              className="flex items-center gap-2 bg-accent hover:bg-white hover:text-primary text-white font-sans text-xs font-semibold tracking-wider uppercase px-6 py-3.5 rounded-full transition-all duration-300 shadow-premium-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-accent uppercase">
              Navigation
            </h4>
            <div className="flex flex-col space-y-3 font-sans text-xs text-stone-300 font-light">
              <a href="#services" className="hover:text-accent transition-colors">Featured Services</a>
              <a href="#about" className="hover:text-accent transition-colors">Our Specialists</a>
              <a href="#treatments" className="hover:text-accent transition-colors">Therapies</a>
              <a href="#testimonials" className="hover:text-accent transition-colors">Patient Stories</a>
              <a href="#gallery" className="hover:text-accent transition-colors">Clinic Gallery</a>
            </div>
          </div>

          {/* Column 3: Hours */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-accent uppercase">
              Studio Hours
            </h4>
            <div className="space-y-3 font-sans text-xs text-stone-300 font-light">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <div>
                  <p className="font-medium text-white">Mon – Fri</p>
                  <p>8:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent/50" />
                <div>
                  <p className="font-medium text-white">Saturday</p>
                  <p>9:00 AM – 3:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400" />
                <div>
                  <p className="font-medium text-white">Sunday</p>
                  <p>Closed (Emergency Only)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-accent uppercase">
              Concierge Contact
            </h4>
            <div className="space-y-4 font-sans text-xs text-stone-300 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=452+Fifth+Avenue+Manhattan+NY" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transition-colors leading-relaxed"
                >
                  452 Fifth Avenue, <br />Manhattan, NY 10018
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+1800555AURA" className="hover:text-accent transition-colors">
                  +1 (800) 555-AURA
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:concierge@auradental.com" className="hover:text-accent transition-colors">
                  concierge@auradental.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] text-stone-400">
          <div className="space-x-4">
            <span>© {new Date().getFullYear()} Aura Dental Studio. All rights reserved.</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          
          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors uppercase tracking-widest cursor-pointer bg-white/5 py-1.5 px-3 rounded-full hover:bg-white/10"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
