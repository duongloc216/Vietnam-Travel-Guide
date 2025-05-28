import React from 'react';
import { travelTips } from '../data';
import { Link } from 'react-router-dom';

const tipLinks = {
  'Visa & Immigration': '/tips/visa',
  'Health & Safety': '/tips/safety',
  'Budget & Money': '/tips/money',
  'Language & Communication': '/tips/language',
  'Shopping': '/tips/shopping',
  'Festivals & Events': '/tips/festivals',
  'Photography': '/tips/photography',
  'Solo Travel': '/tips/solo',
};

const TravelTips = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-green-50 rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-8 tracking-wide">MẸO DU LỊCH</h1>
      <div className="text-center text-xl mb-8">Chuẩn bị cho chuyến đi của bạn với những bài viết thực tế này</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
        {travelTips.map((tip) => (
          <Link
            to={tipLinks[tip.name] || '/travel-tips'}
            key={tip.id}
            className="flex flex-col items-center justify-center bg-green-100 border border-green-200 rounded-lg p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer group"
          >
            <div className="mb-4">
              <i className={`fas fa-${tip.icon} text-5xl text-green-700 group-hover:text-green-900`}></i>
            </div>
            <div className="text-2xl font-semibold italic text-gray-900 group-hover:text-green-900 text-center">
              {tip.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TravelTips;
