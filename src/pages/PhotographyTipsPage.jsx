import React from 'react';
import { ImageHeader, TipsHeader } from '../components';
// Import icon tương ứng hoặc ảnh placeholder
// import cameraIcon from '../assets/camera.svg'; // Nếu có icon camera
import starIcon from '../assets/star.svg'; // Sử dụng icon star làm tạm

const PhotographyTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <main className="tips-container">
          {/* Sử dụng icon hoặc ảnh placeholder */}
          <ImageHeader img={starIcon} />

          <article className="article-container">
            <TipsHeader
              title="Photography Tips"
              author="Admin"
              date="March 15, 2024"
            />

            <div className="tip-container">
              <h3 className="tip-title">Best Photography Locations</h3>
              <p>Top spots for photography in Vietnam:</p>
              <ul>
                <li>Ha Long Bay - Limestone karsts and floating villages</li>
                <li>Hoi An - Ancient town and lantern-lit streets</li>
                <li>Sapa - Rice terraces and ethnic minority villages</li>
                <li>Mekong Delta - Floating markets and rural life</li>
                <li>Hanoi Old Quarter - Street life and architecture</li>
                <li>Phong Nha Caves - Natural wonders</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Best Times for Photography</h3>
              <p>Optimal times for different types of shots:</p>
              <ul>
                <li>Early morning (5-7 AM) for soft light and local activities</li>
                <li>Golden hour (4-6 PM) for warm lighting</li>
                <li>Blue hour for city lights and night photography</li>
                <li>Rainy season for dramatic clouds and reflections</li>
                <li>Harvest season for rice fields</li>
                <li>Festival periods for cultural events</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Cultural Considerations</h3>
              <p>Tips for respectful photography:</p>
              <ul>
                <li>Always ask permission before taking portraits</li>
                <li>Be respectful of religious ceremonies</li>
                <li>Avoid photographing military installations</li>
                <li>Be mindful of local customs and traditions</li>
                <li>Consider offering small gifts for posed photos</li>
                <li>Respect privacy in rural communities</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Equipment Tips</h3>
              <p>Recommended gear and considerations:</p>
              <ul>
                <li>Lightweight and weather-resistant equipment</li>
                <li>Wide-angle lens for landscapes</li>
                <li>Telephoto lens for street photography</li>
                <li>Extra batteries and memory cards</li>
                <li>Rain protection for your gear</li>
                <li>Portable tripod for long exposures</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Street Photography</h3>
              <p>Tips for capturing street life:</p>
              <ul>
                <li>Be patient and observant</li>
                <li>Use burst mode for action shots</li>
                <li>Focus on daily activities and local life</li>
                <li>Capture street food vendors and markets</li>
                <li>Look for interesting characters and moments</li>
                <li>Consider using a small, unobtrusive camera</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Landscape Photography</h3>
              <p>Tips for capturing Vietnam's landscapes:</p>
              <ul>
                <li>Research locations and best viewpoints</li>
                <li>Use polarizing filters for vibrant skies</li>
                <li>Consider weather conditions and seasons</li>
                <li>Include local elements for scale and context</li>
                <li>Plan for sunrise and sunset shots</li>
                <li>Use HDR for high contrast scenes</li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default PhotographyTipsPage; 