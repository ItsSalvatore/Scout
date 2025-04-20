'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeIn, popIn, scaleIn, staggerContainer } from '@/lib/animations/variants';
import { motion } from 'framer-motion';
import { FaUserFriends, FaCompass, FaStar, FaLayerGroup } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';

export default function FeaturesClient() {
  const { ref, isInView } = useScrollAnimation();
  const { language } = useLanguage();

  const features = [
    {
      title: language === 'nl' ? 'Sociaal Netwerk' : 'Social Following',
      description: language === 'nl' 
        ? 'Maak verbinding met gelijkgestemden en bouw je netwerk op. Ontdek nieuwe mensen met dezelfde interesses en creëer betekenisvolle connecties binnen onze community.'
        : 'Connect with fellow enthusiasts and build your network. Discover new people with similar interests and create meaningful connections within our community.',
      icon: FaUserFriends,
      className: 'bg-blue-500/10 text-blue-500',
      animate: (i: number) => fadeIn('up', 0.2 * i),
      position: 'wide-left',
    },
    {
      title: language === 'nl' ? 'Persoonlijke Ontdekking' : 'Personalized Discovery',
      description: language === 'nl'
        ? 'Krijg aanbevelingen op basis van jouw interesses en voorkeuren.'
        : 'Get tailored recommendations based on your interests and preferences.',
      icon: FaCompass,
      className: 'bg-emerald-500/10 text-emerald-500',
      animate: (i: number) => scaleIn(0.2 * i),
      position: 'narrow-right',
    },
    {
      title: language === 'nl' ? 'Betrouwbare Reviews' : 'Trusted Reviews',
      description: language === 'nl'
        ? 'Maak weloverwogen keuzes met authentieke gebruikersreviews.'
        : 'Make informed decisions with authentic user reviews.',
      icon: FaStar,
      className: 'bg-amber-500/10 text-amber-500',
      animate: (i: number) => popIn(0.2 * i),
      position: 'narrow-left',
    },
    {
      title: language === 'nl' ? 'Collecties' : 'Collections',
      description: language === 'nl'
        ? 'Organiseer en deel je favoriete locaties eenvoudig met anderen. Creëer persoonlijke lijsten voor verschillende gelegenheden.'
        : 'Organize and share your favorite venues easily with others. Create personal lists for different occasions.',
      icon: FaLayerGroup,
      className: 'bg-purple-500/10 text-purple-500',
      animate: (i: number) => scaleIn(0.2 * i),
      position: 'wide-right',
    },
  ];

  return (
    <motion.section
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-base font-semibold leading-7 text-sage"
          >
            {language === 'nl' ? 'Alles wat je nodig hebt' : 'Everything you need'}
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.4)}
            className="mt-2 text-3xl font-semibold tracking-tight text-sage sm:text-4xl"
          >
            {language === 'nl' ? 'Ontdek Geweldige Functies' : 'Discover Amazing Features'}
          </motion.p>
          <motion.p
            variants={fadeIn('up', 0.6)}
            className="mt-6 text-lg leading-8 text-sage/80"
          >
            {language === 'nl' 
              ? 'Verken een wereld aan mogelijkheden met onze uitgebreide functionaliteit'
              : 'Explore a world of possibilities with our comprehensive feature set'}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-12 gap-8 auto-rows-[280px]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={feature.animate(index + 1)}
              className={`relative overflow-hidden rounded-3xl p-8 flex flex-col ${
                feature.position === 'wide-left' ? 'col-span-12 md:col-span-8' :
                feature.position === 'narrow-right' ? 'col-span-12 md:col-span-4' :
                feature.position === 'narrow-left' ? 'col-span-12 md:col-span-4' :
                'col-span-12 md:col-span-8'
              } bg-gradient-to-br from-sage/20 to-sage/10 hover:from-sage/30 hover:to-sage/20 backdrop-blur-xl border border-sage/30 shadow-[0_8px_30px_rgba(102,137,102,0.2)] hover:shadow-[0_8px_40px_rgba(102,137,102,0.3)] transition-all duration-500`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(102,137,102,0.1)_0%,transparent_60%)]" />
              <dt className="relative flex items-center gap-x-3 text-lg font-semibold leading-7 text-sage">
                <div className={`rounded-xl p-3 ${feature.className} shadow-[0_4px_20px_rgba(102,137,102,0.3)] backdrop-blur-xl border border-sage/30`}>
                  <feature.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                {feature.title}
              </dt>
              <dd className="relative mt-6 flex flex-auto flex-col text-base leading-7 text-sage">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 