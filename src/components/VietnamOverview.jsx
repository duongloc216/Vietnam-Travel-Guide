import React from 'react';
import { Link } from 'react-router-dom';

const VietnamOverview = () => {
  return (
    <section className="section bg-gray-50">
      <div className="section-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Discover Vietnam</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Vietnam, a country of breathtaking natural beauty with a unique heritage, 
            offers travelers an unparalleled experience. From the terraced rice fields 
            in the north to the bustling Mekong Delta in the south, Vietnam is a land 
            of stunning contrasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Geography */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Geography</h3>
            <p className="text-gray-600 mb-4">
              Vietnam stretches over 1,600 km along the eastern coast of the Indochinese Peninsula. 
              The country's diverse topography includes mountains, deltas, and over 3,000 km of coastline.
            </p>
            <Link to="/tips/weather" className="text-blue-600 hover:underline">
              Learn more about Vietnam's climate →
            </Link>
          </div>

          {/* Culture */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Culture</h3>
            <p className="text-gray-600 mb-4">
              Vietnamese culture is a fascinating blend of indigenous traditions, 
              Chinese influences, and French colonial heritage, creating a unique 
              cultural tapestry that's evident in everything from architecture to cuisine.
            </p>
            <Link to="/tips/culture" className="text-blue-600 hover:underline">
              Explore Vietnamese culture →
            </Link>
          </div>

          {/* History */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">History</h3>
            <p className="text-gray-600 mb-4">
              With over 4,000 years of history, Vietnam has a rich heritage that includes 
              ancient dynasties, colonial periods, and modern development, all of which 
              have shaped the country's unique character.
            </p>
            <Link to="/tips/history" className="text-blue-600 hover:underline">
              Discover Vietnam's history →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VietnamOverview; 