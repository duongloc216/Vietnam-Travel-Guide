import React from 'react';
import { Link } from 'react-router-dom';

const VietnameseCuisine = () => {
  const popularDishes = [
    {
      name: 'Pho',
      description: "Vietnam's national dish - a fragrant noodle soup with beef or chicken, fresh herbs, and rice noodles.",
      region: 'Nationwide',
      ingredients: ['Rice noodles', 'Beef/Chicken', 'Herbs', 'Bean sprouts', 'Lime']
    },
    {
      name: 'Banh Mi',
      description: "A fusion of French and Vietnamese cuisine - a crispy baguette filled with various meats, vegetables, and herbs.",
      region: 'Nationwide',
      ingredients: ['Baguette', 'Pate', 'Meat', 'Vegetables', 'Herbs']
    },
    {
      name: 'Bun Cha',
      description: "Grilled pork patties and slices served with rice vermicelli, fresh herbs, and dipping sauce.",
      region: 'Northern Vietnam',
      ingredients: ['Grilled pork', 'Rice vermicelli', 'Herbs', 'Fish sauce']
    },
    {
      name: 'Cao Lau',
      description: "A specialty of Hoi An - thick noodles with pork, greens, and crispy croutons.",
      region: 'Central Vietnam',
      ingredients: ['Thick noodles', 'Pork', 'Greens', 'Crispy croutons']
    }
  ];

  const foodTips = [
    "Try street food for authentic local flavors",
    "Look for busy food stalls - they're usually the best",
    "Don't be afraid to try new dishes",
    "Ask locals for recommendations",
    "Be mindful of food hygiene",
    "Learn basic food-related Vietnamese phrases"
  ];

  return (
    <section className="section">
      <div className="section-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Vietnamese Cuisine</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Vietnamese cuisine is known for its fresh ingredients, minimal use of oil, 
            and reliance on herbs and vegetables. It's considered one of the healthiest 
            cuisines worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {popularDishes.map((dish, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3">{dish.name}</h3>
              <p className="text-gray-600 mb-4">{dish.description}</p>
              <div className="mb-4">
                <span className="font-semibold">Region: </span>
                <span className="text-gray-600">{dish.region}</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Key Ingredients:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {dish.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold mb-6">Regional Specialties</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-4">Northern Vietnam</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Pho (Hanoi style)</li>
                <li>• Bun Cha</li>
                <li>• Cha Ca</li>
                <li>• Banh Cuon</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Central Vietnam</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Cao Lau</li>
                <li>• Mi Quang</li>
                <li>• Banh Xeo</li>
                <li>• Bun Bo Hue</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Southern Vietnam</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Com Tam</li>
                <li>• Hu Tieu</li>
                <li>• Banh Khot</li>
                <li>• Banh Xeo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Food Travel Tips</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {foodTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-600">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VietnameseCuisine; 