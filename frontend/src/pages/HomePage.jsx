import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedItems from '../components/FeaturedItems';

const HomePage = () => {
  const featuredItems = [
    { id: 1, name: 'Big Mac', description: 'A classic burger', price: 5.99, image_url: '/images/big-mac.jpg' },
    { id: 2, name: 'Fries', description: 'Crispy golden fries', price: 2.99, image_url: '/images/fries.jpg' }
  ];

  return (
    <div>
      <HeroSection />
      <FeaturedItems items={featuredItems} />
    </div>
  );
};

export default HomePage;