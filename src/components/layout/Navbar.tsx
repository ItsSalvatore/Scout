'use client';

import Image from 'next/image';
import { useLanguage } from '../../hooks/useLanguage';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg h-20 border-b border-mint/20">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="relative w-[180px] h-[60px]">
            <Image
              src="/ScoutLogo.png"
              alt="Scout Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right Side: Language Toggle & Sign Up */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="glass px-3 py-1 rounded-full text-sm font-medium hover:bg-mint/20 transition-colors"
            >
              {language === 'nl' ? 'EN' : 'NL'}
            </button>
            
            <a
              href="#waitlist"
              className="button-gradient rounded-full py-2 px-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {language === 'nl' ? 'Aanmelden' : 'Sign Up'}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 