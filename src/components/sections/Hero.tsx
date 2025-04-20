import dynamic from 'next/dynamic';

const HeroClient = dynamic(() => import('./HeroClient').then(mod => ({ default: mod.HeroClient })));

export const Hero = () => {
  return <HeroClient />;
}; 