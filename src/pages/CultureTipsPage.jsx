import React from 'react';
import { ImageHeader, TipsHeader } from '../components';
import cultureTips from '../assets/van-hoa-viet-nam.jpg';

const CultureTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <main className="tips-container">
          <ImageHeader img={cultureTips} />

          <article className="article-container">
            <TipsHeader
              title="Vietnamese Culture Guide: Traditions & Customs"
              author="Admin"
              date="March 15, 2024"
            />

            {/* Introduction */}
            <div className="tip-container">
              <h3 className="tip-title">Understanding Vietnamese Culture</h3>
              <p className="mb-4">
                Vietnamese culture is a rich tapestry of traditions, customs, and values that have evolved 
                over thousands of years. Understanding these cultural aspects will help you better appreciate 
                and respect the local way of life during your visit.
              </p>
            </div>

            {/* Core Values */}
            <div className="tip-container">
              <h3 className="tip-title">Core Cultural Values</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Family Values</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Strong family bonds and respect for elders</li>
                    <li>Multi-generational households</li>
                    <li>Family-oriented decision making</li>
                    <li>Ancestral worship and traditions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Social Harmony</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Importance of maintaining face</li>
                    <li>Indirect communication style</li>
                    <li>Community-oriented mindset</li>
                    <li>Respect for social hierarchy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Work Ethic</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Strong emphasis on education</li>
                    <li>Diligence and perseverance</li>
                    <li>Entrepreneurial spirit</li>
                    <li>Adaptability and resilience</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Traditional Customs */}
            <div className="tip-container">
              <h3 className="tip-title">Traditional Customs</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Greetings & Etiquette</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Bow slightly when greeting elders</li>
                    <li>Use both hands when giving/receiving items</li>
                    <li>Remove shoes before entering homes</li>
                    <li>Address people by their title and name</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dining Customs</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Wait for the eldest to start eating</li>
                    <li>Use chopsticks properly</li>
                    <li>Share dishes family-style</li>
                    <li>Leave a small amount of food on your plate</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Festivals & Celebrations */}
            <div className="tip-container">
              <h3 className="tip-title">Major Festivals & Celebrations</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Traditional Festivals</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Tet Nguyen Dan (Lunar New Year)</li>
                    <li>Mid-Autumn Festival</li>
                    <li>Hung Kings Temple Festival</li>
                    <li>Hoi An Lantern Festival</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Modern Celebrations</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>National Day (September 2)</li>
                    <li>International Women's Day</li>
                    <li>Teacher's Day</li>
                    <li>Christmas (in urban areas)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Religious Practices */}
            <div className="tip-container">
              <h3 className="tip-title">Religious Practices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Major Religions</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Buddhism (Mahayana)</li>
                    <li>Confucianism</li>
                    <li>Taoism</li>
                    <li>Christianity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Spiritual Practices</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Ancestral worship</li>
                    <li>Temple visits</li>
                    <li>Prayer and offerings</li>
                    <li>Feng shui beliefs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Arts & Entertainment */}
            <div className="tip-container">
              <h3 className="tip-title">Arts & Entertainment</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Traditional Arts</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Water puppetry</li>
                    <li>Traditional music (Ca Tru, Quan Ho)</li>
                    <li>Folk dance</li>
                    <li>Traditional crafts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Modern Entertainment</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Karaoke culture</li>
                    <li>Contemporary music</li>
                    <li>Cinema and theater</li>
                    <li>Sports and recreation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cultural Do's & Don'ts */}
            <div className="tip-container">
              <h3 className="tip-title">Cultural Do's & Don'ts</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Do's</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Dress modestly, especially at religious sites</li>
                    <li>Show respect to elders and authority figures</li>
                    <li>Learn basic Vietnamese phrases</li>
                    <li>Accept food and drinks when offered</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Don'ts</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Touch people's heads</li>
                    <li>Point with your feet</li>
                    <li>Show public displays of affection</li>
                    <li>Criticize the government or politics</li>
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

export default CultureTipsPage; 