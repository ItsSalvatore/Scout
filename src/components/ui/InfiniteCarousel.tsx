'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface InfiniteCarouselProps {
  images: string[];
}

export default function InfiniteCarousel({ images }: InfiniteCarouselProps) {
  const [duplicatedImages, setDuplicatedImages] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Duplicate the images array to create the infinite effect
    setDuplicatedImages([...images, ...images]);
  }, [images]);

  const duration = 40; // Animation duration in seconds
  
  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl bg-white shadow-inner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex gap-4 py-4"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="relative flex-shrink-0 w-[300px] aspect-[9/16] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={image}
              alt={`App Preview ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 4}
            />
          </div>
        ))}
      </motion.div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
} 