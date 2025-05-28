import React from 'react';
import { ImageHeader, TipsHeader } from '../components';
import foodTips from '../assets/vietnamfoodguide.jpg';

const FoodTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <main className="tips-container">
          <ImageHeader img={foodTips} />

          <article className="article-container">
            <TipsHeader
              title="Vietnamese Food Guide: A Culinary Journey"
              author="Admin"
              date="March 15, 2024"
            />

            {/* Introduction */}
            <div className="tip-container">
              <h3 className="tip-title">Introduction to Vietnamese Cuisine</h3>
              <p className="mb-4">
                Vietnamese cuisine is known for its fresh ingredients, minimal use of oil, 
                and reliance on herbs and vegetables. It's considered one of the healthiest 
                cuisines worldwide, with a perfect balance of flavors: sweet, sour, salty, 
                bitter, and spicy.
              </p>
            </div>

            {/* Regional Specialties */}
            <div className="tip-container">
              <h3 className="tip-title">Regional Specialties</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Northern Vietnam</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Pho (Hanoi style) - Clear broth, subtle flavors</li>
                    <li>Bun Cha - Grilled pork with rice vermicelli</li>
                    <li>Cha Ca - Turmeric fish with dill</li>
                    <li>Banh Cuon - Steamed rice rolls</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Central Vietnam</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Cao Lau - Hoi An's signature noodle dish</li>
                    <li>Mi Quang - Turmeric noodles with shrimp</li>
                    <li>Banh Xeo - Crispy savory pancakes</li>
                    <li>Bun Bo Hue - Spicy beef noodle soup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Southern Vietnam</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Com Tam - Broken rice with grilled pork</li>
                    <li>Hu Tieu - Clear noodle soup</li>
                    <li>Banh Khot - Mini savory pancakes</li>
                    <li>Banh Xeo - Crispy crepes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Street Food Guide */}
            <div className="tip-container">
              <h3 className="tip-title">Street Food Guide</h3>
              <div className="space-y-4">
                <p className="mb-4">
                  Street food is an integral part of Vietnamese culture. Here's how to enjoy it safely:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Tips for Street Food</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Look for busy stalls with high turnover</li>
                    <li>Observe how food is prepared</li>
                    <li>Check if the vendor uses clean water</li>
                    <li>Watch how locals eat the dish</li>
                    <li>Start with cooked foods rather than raw</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dining Etiquette */}
            <div className="tip-container">
              <h3 className="tip-title">Dining Etiquette</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Table Manners</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Wait for the eldest person to start eating</li>
                    <li>Use chopsticks properly</li>
                    <li>Don't stick chopsticks upright in rice</li>
                    <li>Try a bit of everything offered</li>
                    <li>Leave a small amount of food on your plate when finished</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Common Phrases</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>"Ngon qua" - Very delicious</li>
                    <li>"Cam on" - Thank you</li>
                    <li>"Xin moi" - Please help yourself</li>
                    <li>"Chuc ngon mieng" - Enjoy your meal</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Food Safety */}
            <div className="tip-container">
              <h3 className="tip-title">Food Safety Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Do's</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Drink bottled or boiled water</li>
                    <li>Eat at busy restaurants</li>
                    <li>Wash hands before eating</li>
                    <li>Check food temperature</li>
                    <li>Peel fruits before eating</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Don'ts</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Drink tap water</li>
                    <li>Eat raw vegetables without washing</li>
                    <li>Consume undercooked meat</li>
                    <li>Eat from dirty food stalls</li>
                    <li>Leave food uncovered</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dietary Restrictions */}
            <div className="tip-container">
              <h3 className="tip-title">Dietary Restrictions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Vegetarian/Vegan Options</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Look for "Quan Chay" (vegetarian restaurants)</li>
                    <li>Many Buddhist restaurants offer vegetarian menus</li>
                    <li>Common vegetarian dishes include com chay, bun chay</li>
                    <li>Always specify your dietary requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Common Allergens</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Fish sauce is used in many dishes</li>
                    <li>Peanuts are common in many recipes</li>
                    <li>Shellfish is widely used</li>
                    <li>Learn to say your allergies in Vietnamese</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default FoodTipsPage; 