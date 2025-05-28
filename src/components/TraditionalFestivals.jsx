import React from 'react';
import { Link } from 'react-router-dom';

const TraditionalFestivals = () => {
  const festivals = [
    {
      name: 'Tet (Lunar New Year)',
      date: 'January/February',
      description: "The most important festival in Vietnam, marking the beginning of the lunar new year. Families gather, pay respects to ancestors, and celebrate with traditional foods and customs.",
      activities: [
        'Family gatherings',
        'Ancestral worship',
        'Traditional foods',
        'Lion dances',
        'Fireworks'
      ]
    },
    {
      name: 'Mid-Autumn Festival',
      date: 'September',
      description: "A harvest festival celebrated with mooncakes, lanterns, and children's activities. It's a time for family reunions and giving thanks for the harvest.",
      activities: [
        'Mooncake making',
        'Lantern parades',
        "Children's performances",
        'Family gatherings'
      ]
    },
    {
      name: 'Hung Kings Temple Festival',
      date: 'April',
      description: "A national holiday honoring the Hung Kings, the legendary founders of Vietnam. The festival includes ceremonies, processions, and cultural performances.",
      activities: [
        'Temple ceremonies',
        'Cultural performances',
        'Traditional games',
        'Processions'
      ]
    },
    {
      name: 'Hoi An Lantern Festival',
      date: 'Monthly (Full Moon)',
      description: "A monthly celebration in Hoi An where the town turns off its electric lights and is illuminated by colorful lanterns. The festival includes cultural performances and traditional games.",
      activities: [
        'Lantern lighting',
        'Cultural shows',
        'Traditional games',
        'Floating lanterns'
      ]
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="section-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Traditional Festivals</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Vietnamese festivals are vibrant celebrations of culture, tradition, and community. 
            They offer visitors a unique insight into the country's rich heritage and customs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {festivals.map((festival, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold">{festival.name}</h3>
                <span className="text-blue-600 font-semibold">{festival.date}</span>
              </div>
              <p className="text-gray-600 mb-4">{festival.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Activities:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {festival.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Festival Travel Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-4">Planning Your Visit</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Book accommodations well in advance</li>
                <li>• Check exact festival dates (they vary by lunar calendar)</li>
                <li>• Research local customs and traditions</li>
                <li>• Plan for larger crowds and higher prices</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">During Festivals</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Respect local customs and traditions</li>
                <li>• Dress appropriately for the occasion</li>
                <li>• Be prepared for crowded conditions</li>
                <li>• Try traditional festival foods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionalFestivals; 