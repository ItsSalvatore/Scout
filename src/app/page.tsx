'use client';

import FeaturesClient from "../components/sections/FeaturesClient";
import Navbar from "../components/layout/Navbar";
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect } from "react";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";

export default function Home() {
  const { language } = useLanguage();

  // Force a re-render when language changes
  useEffect(() => {}, [language]);

  const mockupImages = Array.from({ length: 11 }, (_, i) => `/${i + 1}.png`);

  const content = {
    hero: {
      badge: language === 'nl' ? '🎉 Binnenkort Beschikbaar - Schrijf Je In' : '🎉 Coming Soon - Join the Waitlist',
      title: {
        start: language === 'nl' ? 'Ontdek Je Perfecte' : 'Discover Your Perfect',
        highlight: language === 'nl' ? 'Sociale Locatie' : 'Social Venue',
      },
      description: language === 'nl' 
        ? 'Vind en boek de beste locaties voor je evenementen, meetings en sociale bijeenkomsten. Maak direct contact met locatie-eigenaren en maak je evenementplanning moeiteloos.'
        : 'Find and book the best venues for your events, meetups, and social gatherings. Connect with venue owners and make your event planning seamless.',
      cta: {
        primary: language === 'nl' ? 'Schrijf Je In' : 'Join Waitlist',
        secondary: language === 'nl' ? 'Meer Info' : 'Learn More',
      },
    },
    waitlist: {
      title: language === 'nl' ? 'Wees de Eerste die het Weet' : 'Be the First to Know',
      description: language === 'nl'
        ? 'Schrijf je in voor de wachtlijst om vroege toegang en exclusieve updates over onze lancering te ontvangen. Word onderdeel van de toekomst van sociale locatie ontdekking!'
        : 'Join our waitlist to get early access and exclusive updates about our launch. Be part of the future of social venue discovery!',
      input: {
        placeholder: language === 'nl' ? 'Vul je e-mailadres in' : 'Enter your email',
        button: language === 'nl' ? 'Inschrijven' : 'Join Waitlist',
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-sage/5 to-sage/10">
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-1/4 -left-24 w-96 h-96 bg-sage/10 rounded-full blur-3xl opacity-80" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-sage/15 rounded-full blur-3xl opacity-80" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-sage/10 rounded-full blur-3xl opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(102,137,102,0.05)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(102,137,102,0.05)_0%,transparent_50%)]" />
        </div>

        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-sage/5 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(102,137,102,0.1)_0%,transparent_100%)]" />
          
          <div className="container relative mx-auto px-4 py-20 md:py-32">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="glass px-6 py-2 rounded-full shadow-xl">
                <span className="text-sm font-medium text-sage drop-shadow-sm">
                  {content.hero.badge}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl text-sage drop-shadow-lg">
                {content.hero.title.start}
                <span className="gradient-text drop-shadow-xl"> {content.hero.title.highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-sage/80 max-w-2xl drop-shadow-md">
                {content.hero.description}
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <a
                  href="#waitlist"
                  className="button-gradient rounded-full py-3 px-8 text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {content.hero.cta.primary}
                </a>
                <a
                  href="#features"
                  className="glass rounded-full py-3 px-8 text-base hover:bg-mint/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {content.hero.cta.secondary}
                </a>
              </div>
              
              {/* Preview Mockup */}
              <div className="mt-12 relative w-full max-w-5xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange via-peach to-mint rounded-2xl blur-2xl opacity-40" />
                <div className="glass relative rounded-2xl p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                  <InfiniteCarousel images={mockupImages} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-16 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(102,137,102,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(102,137,102,0.1)_0%,transparent_50%)]" />
          <div className="relative">
            <FeaturesClient />
          </div>
        </section>

        {/* CTA/Waitlist Section */}
        <section id="waitlist" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage/5 to-transparent" />
          <div className="container relative mx-auto px-4 py-16 md:py-32">
            <div className="glass rounded-3xl p-8 md:p-16 flex flex-col items-center text-center gap-8 shadow-2xl hover:shadow-3xl transition-shadow duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange via-peach to-mint shadow-lg" />
              <div className="absolute -right-24 -top-24 w-48 h-48 bg-orange/10 rounded-full blur-3xl" />
              <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-mint/20 rounded-full blur-3xl" />
              
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-sage drop-shadow-lg">
                {content.waitlist.title}
              </h2>
              <p className="text-lg text-sage/80 max-w-2xl drop-shadow-md">
                {content.waitlist.description}
              </p>
              
              {/* Email Input */}
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const email = new FormData(form).get('email') as string;
                  
                  try {
                    const response = await fetch('/api/waitlist', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email }),
                    });

                    const data = await response.json();
                    
                    if (response.ok) {
                      alert('Thanks for joining the waitlist!');
                      form.reset();
                    } else {
                      alert(data.error || 'Failed to join waitlist');
                    }
                  } catch {
                    alert('Failed to join waitlist');
                  }
                }}
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={content.waitlist.input.placeholder}
                  className="flex-1 glass rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-mint/50 text-sage placeholder:text-sage/50 shadow-xl"
                />
                <button 
                  type="submit"
                  className="button-gradient rounded-full py-3 px-8 text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {content.waitlist.input.button}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
