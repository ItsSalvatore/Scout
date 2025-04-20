import dynamic from 'next/dynamic';

const FeaturesClient = dynamic(() => import('./FeaturesClient').then(mod => ({ default: mod.FeaturesClient })));

export const Features = () => {
  return <FeaturesClient />;
}; 