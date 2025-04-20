'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/animations/variants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const HeroClient = () => {
  const { ref } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/50"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <motion.div
            variants={fadeIn('up')}
            className="flex flex-col justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <motion.h1
                variants={fadeIn('up', 0.2)}
                className="text-4xl tracking-tight sm:text-6xl xl:text-7xl/none gradient-text"
              >
                Discover Your Next Favorite Spot
              </motion.h1>
              <motion.p
                variants={fadeIn('up', 0.3)}
                className="max-w-[600px] text-zinc-200/60 md:text-xl mx-auto"
              >
                Join the community where friends share their favorite places. Find the perfect venue for any occasion.
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn('up', 0.4)}
              className="space-x-4"
            >
              <Button
                className="button-gradient"
                size="lg"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--primary)),transparent)]" />
        <div className="absolute w-full h-full bg-[linear-gradient(to_right,#4444440a_1px,transparent_1px),linear-gradient(to_bottom,#4444440a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </motion.div>
    </motion.section>
  );
}; 