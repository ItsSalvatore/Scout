import dynamic from 'next/dynamic';

const FeaturesClient = dynamic(() => import('./FeaturesClient'));

export const Features = () => {
  return <FeaturesClient />;
}; 