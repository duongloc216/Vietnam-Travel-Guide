import React from 'react';
import { Link } from 'react-router-dom';

const LocalCulture = () => {
  const culturalAspects = [
    {
      title: 'Traditional Values',
      description: 'Vietnamese culture is deeply rooted in Confucian values, emphasizing family, respect for elders, and community harmony.',
      image: '/images/culture/traditional-values.jpg',
      link: '/tips/culture/traditional-values'
    },
    {
      title: 'Festivals & Celebrations',
      description: 'From Tet (Lunar New Year) to Mid-Autumn Festival, Vietnamese celebrations are vibrant displays of cultural heritage.',
      image: '/images/culture/festivals.jpg',
      link: '/tips/culture/festivals'
    },
    {
      title: 'Arts & Crafts',
      description: 'Vietnam boasts a rich tradition of arts and crafts, from lacquerware and silk to water puppetry and traditional music.',
      image: '/images/culture/arts-crafts.jpg',
      link: '/tips/culture/arts-crafts'
    },
    {
      title: 'Religious Practices',
      description: 'A harmonious blend of Buddhism, Confucianism, and Taoism shapes Vietnamese spiritual life and customs.',
      image: '/images/culture/religion.jpg',
      link: '/tips/culture/religion'
    }
  ];

  const etiquetteTips = [
    'Remove shoes before entering homes and temples',
    'Dress modestly when visiting religious sites',
    'Use both hands when giving or receiving items',
    'Avoid public displays of affection',
    'Respect local customs and traditions',
    'Learn basic Vietnamese greetings'
  ];

  return (
    <section className="section bg-gray-50">
      <div className="section-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Vietnamese Culture & Customs</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding Vietnamese culture and customs will enrich your travel experience 
            and help you connect with local communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {culturalAspects.map((aspect, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                {/* Add actual images later */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{aspect.title}</h3>
                <p className="text-gray-600 mb-4">{aspect.description}</p>
                <Link to={aspect.link} className="text-blue-600 hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Cultural Etiquette Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-4">Do's</h4>
              <ul className="space-y-2">
                {etiquetteTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Don'ts</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-600">Point with your feet or touch someone's head</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-600">Show public displays of affection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-600">Wear revealing clothes in religious sites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-gray-600">Lose your temper in public</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalCulture; 