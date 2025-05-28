import React from 'react';
import { ImageHeader, TipsHeader } from '../components';
// Import icon tương ứng hoặc ảnh placeholder
// import soloIcon from '../assets/solo.svg'; // Nếu có icon solo
import guideIcon from '../assets/guide.svg'; // Sử dụng icon guide làm tạm

const SoloTravelTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <main className="tips-container">
          {/* Sử dụng icon hoặc ảnh placeholder */}
          <ImageHeader img={guideIcon} />

          <article className="article-container">
            <TipsHeader
              title="Solo Travel Tips"
              author="Admin"
              date="March 15, 2024"
            />

            <div className="tip-container">
              <h3 className="tip-title">Safety Tips</h3>
              <p>Important safety considerations for solo travelers:</p>
              <ul>
                <li>Keep copies of important documents</li>
                <li>Share your itinerary with family/friends</li>
                <li>Use reputable transportation services</li>
                <li>Stay in well-reviewed accommodations</li>
                <li>Be cautious with valuables</li>
                <li>Trust your instincts</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Best Places for Solo Travelers</h3>
              <p>Recommended destinations for solo travel:</p>
              <ul>
                <li>Hanoi - Easy to navigate, many hostels</li>
                <li>Hoi An - Safe, walkable, friendly locals</li>
                <li>Da Nang - Modern city with beach access</li>
                <li>Ho Chi Minh City - Vibrant, well-connected</li>
                <li>Nha Trang - Beach town with good infrastructure</li>
                <li>Dalat - Cool climate, outdoor activities</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Meeting People</h3>
              <p>Tips for connecting with others:</p>
              <ul>
                <li>Stay in hostels with common areas</li>
                <li>Join group tours or activities</li>
                <li>Use social travel apps</li>
                <li>Visit local cafes and restaurants</li>
                <li>Participate in language exchanges</li>
                <li>Attend local events and festivals</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Budget Tips</h3>
              <p>Money-saving advice for solo travelers:</p>
              <ul>
                <li>Stay in dorm rooms in hostels</li>
                <li>Eat at local food stalls</li>
                <li>Use public transportation</li>
                <li>Join group tours for better rates</li>
                <li>Book accommodations in advance</li>
                <li>Use ride-sharing apps</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Cultural Tips</h3>
              <p>Cultural considerations for solo travelers:</p>
              <ul>
                <li>Learn basic Vietnamese phrases</li>
                <li>Respect local customs and traditions</li>
                <li>Dress appropriately for different settings</li>
                <li>Be mindful of local etiquette</li>
                <li>Understand cultural differences</li>
                <li>Be open to new experiences</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Practical Tips</h3>
              <p>Essential advice for solo travel:</p>
              <ul>
                <li>Get a local SIM card</li>
                <li>Download offline maps</li>
                <li>Keep emergency contacts handy</li>
                <li>Learn basic first aid</li>
                <li>Have travel insurance</li>
                <li>Keep a daily journal</li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default SoloTravelTipsPage; 