import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components';
import SharedLayout from './pages/SharedLayout';
import HomePage from './pages/HomePage';
import SingleTourPage from './pages/SingleTourPage';
import SinglePlacePage from './pages/SinglePlacePage';
import TravelTips from './components/TravelTips';
import FoodTipsPage from './pages/FoodTipsPage';
import CultureTipsPage from './pages/CultureTipsPage';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import ErrorPage from './pages/ErrorPage';
import PlacesToGo from './components/PlacesToGo';
import VisaTipsPage from './pages/VisaTipsPage';
import SafetyTipsPage from './pages/SafetyTipsPage';
import WeatherTipsPage from './pages/WeatherTipsPage';
import TransportTipsPage from './pages/TransportTipsPage';
import HistoryTipsPage from './pages/HistoryTipsPage';
import MoneyTipsPage from './pages/MoneyTipsPage';
import LanguageTipsPage from './pages/LanguageTipsPage';
import ShoppingTipsPage from './pages/ShoppingTipsPage';
import FestivalsTipsPage from './pages/FestivalsTipsPage';
import PhotographyTipsPage from './pages/PhotographyTipsPage';
import SoloTravelTipsPage from './pages/SoloTravelTipsPage';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="tours/:id" element={<SingleTourPage />} />
            <Route path="places/:id" element={<SinglePlacePage />} />
            <Route path="destinations" element={<PlacesToGo />} />
            <Route path="travel-tips" element={<TravelTips />} />
            <Route path="tips/food" element={<FoodTipsPage />} />
            <Route path="tips/culture" element={<CultureTipsPage />} />
            <Route path="tips/visa" element={<VisaTipsPage />} />
            <Route path="tips/safety" element={<SafetyTipsPage />} />
            <Route path="tips/weather" element={<WeatherTipsPage />} />
            <Route path="tips/transport" element={<TransportTipsPage />} />
            <Route path="tips/history" element={<HistoryTipsPage />} />
            <Route path="tips/money" element={<MoneyTipsPage />} />
            <Route path="tips/language" element={<LanguageTipsPage />} />
            <Route path="tips/shopping" element={<ShoppingTipsPage />} />
            <Route path="tips/festivals" element={<FestivalsTipsPage />} />
            <Route path="tips/photography" element={<PhotographyTipsPage />} />
            <Route path="tips/solo" element={<SoloTravelTipsPage />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
