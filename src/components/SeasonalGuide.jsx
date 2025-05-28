import React from 'react';

const SeasonalGuide = () => {
  const seasons = [
    {
      name: 'Spring (February - April)',
      description: 'Mild temperatures and minimal rainfall make spring an ideal time to visit Vietnam. The weather is perfect for exploring cities and countryside.',
      activities: [
        'Tet Festival celebrations',
        'Flower festivals in the north',
        'Beach activities in the south',
        'Trekking in the mountains'
      ]
    },
    {
      name: 'Summer (May - August)',
      description: 'Hot and humid weather with occasional rain showers. Great for beach activities and water sports.',
      activities: [
        'Beach holidays in Nha Trang and Phu Quoc',
        'Water activities in Halong Bay',
        'Mountain retreats in Dalat',
        'Fruit harvesting in the Mekong Delta'
      ]
    },
    {
      name: 'Autumn (September - November)',
      description: 'Pleasant temperatures and clear skies. Perfect for outdoor activities and cultural experiences.',
      activities: [
        'Rice harvesting in the north',
        'Mid-Autumn Festival celebrations',
        'Trekking in Sapa',
        'City exploration'
      ]
    },
    {
      name: 'Winter (December - January)',
      description: 'Cool and dry weather in the north, warm in the south. Ideal for exploring northern Vietnam.',
      activities: [
        'Christmas and New Year celebrations',
        'Mountain trekking in the north',
        'Beach activities in the south',
        'Cultural festivals'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="section-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Best Time to Visit Vietnam</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Vietnam's climate varies significantly from north to south. Understanding the seasonal 
            patterns will help you plan the perfect trip for your interests and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {seasons.map((season, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{season.name}</h3>
              <p className="text-gray-600 mb-4">{season.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Popular Activities:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {season.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Travel Tips</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Pack appropriate clothing for the season and region you're visiting</li>
            <li>Book accommodations in advance during peak seasons (Tet, Christmas, New Year)</li>
            <li>Check local weather forecasts before planning outdoor activities</li>
            <li>Consider regional variations in climate when planning multi-region trips</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SeasonalGuide; 