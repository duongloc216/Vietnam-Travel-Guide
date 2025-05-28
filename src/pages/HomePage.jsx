import React from 'react';
import {
  Hero,
  PlacesToGo,
  TravelTips,
  Contact,
  Galleries,
  VietnamOverview,
  SeasonalGuide,
  LocalCulture,
  VietnameseCuisine,
  TraditionalFestivals,
  Blogs,
} from '../components';

const HomePage = () => {
  return (
    <>
      <Hero />
      <VietnamOverview />
      <PlacesToGo />
      <SeasonalGuide />
      <LocalCulture />
      <VietnameseCuisine />
      <TraditionalFestivals />
      <TravelTips />
      <Blogs />
      <Contact />
      <Galleries />
    </>
  );
};

export default HomePage;
