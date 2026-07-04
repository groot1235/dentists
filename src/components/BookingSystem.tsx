'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText, CheckCircle2, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

interface BookingSystemProps {
  initialTreatment?: string;
  onSuccessClose?: () => void;
}

const CATEGORIES = {
  'Cosmetic Artistry': ['Smile Design', 'Laser Teeth Whitening', 'Porcelain Veneers'],
  'Restorative Dentistry': ['Dental Implants', 'General Restoration'],
  'Preventative & Family': ['Invisalign® Clear Aligners', 'Bespoke Family Care']
};

export default function BookingSystem({ initialTreatment, onSuccessClose }: BookingSystemProps) {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState(initialTreatment || '');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});



  // Generate next 7 days for the calendar starting tomorrow
  const getNextDays = () => {
    const days = [];
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      // Skip Sundays
      if (date.getDay() === 0) continue;
      days.push({
        formatted: date.toLocaleDateString('en-US', options),
        raw: date.toISOString().split('T')[0]
      });
    }
    return days;
  };

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '12:00 PM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM'
  ];

  const handleNextStep = () => {
    if (step === 1 && !selectedTreatment) {
      alert('Please select a treatment to continue.');
      return;
    }
    if (step === 2 && (!selectedDate || !selectedTime)) {
      alert('Please select a date and time slot to continue.');
      return;
    }
    if (step === 3) {
      const errors: Record<string, string> = {};
      if (!formData.name.trim()) errors.name = 'Name is required';
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required';
      if (!formData.phone.trim() || formData.phone.length < 10) errors.phone = 'Valid phone is required';
      
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      setFormErrors({});
      
      // Save appointment in localStorage
      const appointment = {
        id: Math.random().toString(36).substr(2, 9),
        treatment: selectedTreatment,
        date: selectedDate,
        time: selectedTime,
        patient: formData,
        createdAt: new Date().toISOString()
      };
      const existing = JSON.parse(localStorage.getItem('aura_appointments') || '[]');
      localStorage.setItem('aura_appointments', JSON.stringify([...existing, appointment]));
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const selectTreatmentDirectly = (treatment: string) => {
    setSelectedTreatment(treatment);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-stone-900 rounded-3xl border border-border-light/30 shadow-premium-xl overflow-hidden">
      {/* Header Indicator */}
      <div className="bg-primary text-white py-6 px-8 flex items-center justify-between border-b border-white/5">
        <div>
          <span className="font-sans text-[10px] uppercase tracking-widest text-accent font-semibold">
            Luxury Scheduling
          </span>
          <h3 className="font-serif text-xl font-light">
            {step === 4 ? 'Appointment Confirmed' : 'Bespoke Booking Wizard'}
          </h3>
        </div>
        {step < 4 && (
          <span className="font-sans text-xs text-stone-300">
            Step {step} of 3
          </span>
        )}
      </div>

      {/* Progress Bar */}
      {step < 4 && (
        <div className="h-1 bg-border-light/20 w-full">
          <motion.div 
            className="h-full bg-accent"
            initial={{ width: '33.33%' }}
            animate={{ width: `${step * 33.33}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* Steps Content with Slide Animation */}
      <div className="p-8 min-h-[380px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h4 className="font-serif text-lg font-light text-primary flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                Select Your Desired Treatment
              </h4>
              <div className="space-y-6">
                {Object.entries(CATEGORIES).map(([category, treatments]) => (
                  <div key={category} className="space-y-2.5">
                    <h5 className="font-sans text-xs font-semibold text-accent uppercase tracking-wider">
                      {category}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {treatments.map((treatment) => (
                        <button
                          key={treatment}
                          onClick={() => selectTreatmentDirectly(treatment)}
                          className={`text-left p-4 rounded-xl border font-sans text-sm transition-all cursor-pointer ${
                            selectedTreatment === treatment
                              ? 'border-accent bg-accent/5 text-primary font-medium'
                              : 'border-border-light/50 hover:border-accent/40 bg-transparent text-secondary'
                          }`}
                        >
                          {treatment}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h4 className="font-serif text-lg font-light text-primary flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-accent" />
                Select Date & Time Slot
              </h4>
              <div className="space-y-6">
                <div>
                  <label className="block font-sans text-xs font-semibold text-secondary uppercase tracking-widest mb-3">
                    Available Dates (Next 7 Days)
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {getNextDays().map((day) => (
                      <button
                        key={day.raw}
                        onClick={() => setSelectedDate(day.formatted)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          selectedDate === day.formatted
                            ? 'border-accent bg-accent/5 text-primary font-medium'
                            : 'border-border-light/50 hover:border-accent/40 bg-transparent text-secondary'
                        }`}
                      >
                        <span className="block font-sans text-xs font-semibold uppercase">{day.formatted.split(',')[0]}</span>
                        <span className="block font-serif text-sm font-light mt-1">{day.formatted.split(',')[1]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-secondary uppercase tracking-widest mb-3">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`flex items-center justify-center gap-2 p-3.5 rounded-xl border font-sans text-xs transition-all cursor-pointer ${
                          selectedTime === time
                            ? 'border-accent bg-accent/5 text-primary font-medium'
                            : 'border-border-light/50 hover:border-accent/40 bg-transparent text-secondary'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 opacity-60" />
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
              <h4 className="font-serif text-lg font-light text-primary flex items-center gap-2">
                <User className="w-4 h-4 text-accent" />
                Patient Information Details
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block font-sans text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-4 h-4 text-secondary/60" />
                    <input
                      type="text"
                      placeholder="Evelyn Vane"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-11 pr-4 py-3 rounded-xl border font-sans text-sm focus:outline-none focus:border-primary transition-all ${
                        formErrors.name ? 'border-red-500 bg-red-500/5' : 'border-border-light/50'
                      }`}
                    />
                  </div>
                  {formErrors.name && <span className="text-[10px] text-red-500 font-sans mt-1 block">{formErrors.name}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-4 h-4 text-secondary/60" />
                      <input
                        type="email"
                        placeholder="evelyn@aura.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border font-sans text-sm focus:outline-none focus:border-primary transition-all ${
                          formErrors.email ? 'border-red-500 bg-red-500/5' : 'border-border-light/50'
                        }`}
                      />
                    </div>
                    {formErrors.email && <span className="text-[10px] text-red-500 font-sans mt-1 block">{formErrors.email}</span>}
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-4 h-4 text-secondary/60" />
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border font-sans text-sm focus:outline-none focus:border-primary transition-all ${
                          formErrors.phone ? 'border-red-500 bg-red-500/5' : 'border-border-light/50'
                        }`}
                      />
                    </div>
                    {formErrors.phone && <span className="text-[10px] text-red-500 font-sans mt-1 block">{formErrors.phone}</span>}
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5">
                    Special Requests / Dental Concerns
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-3.5 w-4 h-4 text-secondary/60" />
                    <textarea
                      placeholder="Share details of past treatments or specific comfort requests (e.g. noise-canceling headsets required)."
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-border-light/50 font-sans text-sm focus:outline-none focus:border-primary transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center space-y-6 py-6"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-2xl font-light text-primary">Your Sanctuary Awaits</h4>
                <p className="font-sans text-sm text-secondary font-light max-w-sm leading-relaxed">
                  We have reserved your appointment. A confirmation email and calendar invitation are on their way.
                </p>
              </div>

              {/* Summary details */}
              <div className="bg-bg-light/60 border border-border-light/30 rounded-2xl p-6 w-full max-w-md text-left space-y-3 font-sans text-xs">
                <div className="flex justify-between">
                  <span className="text-secondary">Treatment:</span>
                  <span className="font-semibold text-primary">{selectedTreatment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Date:</span>
                  <span className="font-semibold text-primary">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Time:</span>
                  <span className="font-semibold text-primary">{selectedTime}</span>
                </div>
                <div className="flex justify-between border-t border-border-light/40 pt-2">
                  <span className="text-secondary">Patient:</span>
                  <span className="font-semibold text-primary">{formData.name}</span>
                </div>
              </div>

              <button
                onClick={onSuccessClose}
                className="bg-primary text-white hover:bg-accent font-sans text-xs font-semibold tracking-wider uppercase px-8 py-3.5 rounded-full transition-all duration-300 shadow-premium-md cursor-pointer"
              >
                Close Booking Portal
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wizard Controls */}
        {step < 4 && (
          <div className="flex justify-between items-center pt-8 border-t border-border-light/30 mt-8">
            <button
              onClick={handlePrevStep}
              className={`flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider uppercase transition-colors py-2 px-4 rounded-lg cursor-pointer ${
                step === 1 ? 'opacity-0 cursor-default' : 'text-secondary hover:text-primary bg-bg-light/40 hover:bg-bg-light'
              }`}
              disabled={step === 1}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={handleNextStep}
              className="flex items-center gap-1.5 bg-primary hover:bg-accent text-white font-sans text-xs font-semibold tracking-wider uppercase py-3.5 px-6 rounded-full transition-all shadow-premium-sm cursor-pointer"
            >
              {step === 3 ? 'Confirm Appointment' : 'Continue'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
