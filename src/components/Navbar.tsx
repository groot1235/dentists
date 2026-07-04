'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Clinic', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 glass-navbar shadow-premium-md'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col group cursor-pointer">
            <span className="font-serif text-2xl lg:text-3xl font-semibold tracking-wide text-primary transition-colors duration-300 group-hover:text-accent">
              AURA
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-secondary -mt-1">
              Dental Studio
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-secondary hover:text-primary transition-colors relative py-1 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => openBooking()}
              className="flex items-center gap-2 bg-primary text-white hover:bg-accent font-sans text-sm font-medium tracking-wide uppercase px-6 py-3 rounded-full shadow-premium-sm transition-all duration-300 hover:-translate-y-[1px] hover:shadow-premium-md active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:text-accent transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden pt-24 px-6 bg-bg-light/95 backdrop-blur-lg flex flex-col justify-between pb-8"
          >
            <div className="flex flex-col space-y-6 pt-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl font-medium text-primary hover:text-accent transition-colors py-2 border-b border-border-light cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col space-y-4"
            >
              <button
                onClick={() => {
                  setIsOpen(false);
                  openBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white hover:bg-accent font-sans text-base font-semibold tracking-wide uppercase py-4 rounded-full shadow-premium-md cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
              <div className="text-center font-sans text-xs text-secondary">
                Call us: <a href="tel:+18005552872" className="underline font-semibold">+1 (800) 555-AURA</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
