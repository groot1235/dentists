'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  size: string; // 'large', 'medium', 'small'
}

export default function Gallery() {
  const galleryItems: GalleryItem[] = [
    {
      id: 'lounge',
      title: 'The Wellness Lounge',
      category: 'Clinic Atmosphere',
      image: '/images/clinic_interior.png',
      size: 'col-span-12 md:col-span-8 aspect-[16/10]'
    },
    {
      id: 'smile',
      title: 'Cosmetic Veneer Result',
      category: 'Treatment Artistry',
      image: '/images/smile_aesthetic.png',
      size: 'col-span-12 md:col-span-4 aspect-[1/1]'
    },
    {
      id: 'invisalign',
      title: 'Precision Aligners Studio',
      category: 'Technology',
      image: '/images/treatment_invisalign.png',
      size: 'col-span-12 md:col-span-4 aspect-[1/1]'
    },
    {
      id: 'operatory',
      title: 'Advanced Diagnostic Operatory',
      category: 'Clinic Atmosphere',
      image: '/images/clinic_room.png',
      size: 'col-span-12 md:col-span-8 aspect-[16/10]'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Clinic Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-primary">
            A Sanctuary Designed for <span className="italic font-medium text-accent">Your Comfort</span>
          </h2>
          <div className="h-[1px] w-20 bg-accent/40 mx-auto my-6" />
          <p className="font-sans text-base text-secondary font-light">
            Step inside our luxury clinical spaces, designed from the ground up to reduce anxiety, inspire calm, and house the industry&apos;s most advanced dental equipment.
          </p>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-[28px] shadow-premium-md group cursor-pointer border border-border-light/20 ${item.size}`}
            >
              {/* Image Asset */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 800px"
              />

              {/* Hover Dark Scrim Overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8" />
              
              {/* Hover Content Information */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <div className="space-y-1 text-white">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-accent bg-white/10 py-1 px-3 rounded-full backdrop-blur-md">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-medium pt-1">
                    {item.title}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  <Search className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
