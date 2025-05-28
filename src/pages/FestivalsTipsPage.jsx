import React from 'react';
import { ImageHeader, TipsHeader } from '../components';
// Import icon tương ứng hoặc ảnh placeholder
// import festivalIcon from '../assets/festival.svg'; // Nếu có icon festival
import cultureIcon from '../assets/culture.svg'; // Sử dụng icon culture làm tạm

const FestivalsTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <main className="tips-container">
          {/* Sử dụng icon hoặc ảnh placeholder */}
          <ImageHeader img={cultureIcon} />

          <article className="article-container">
            <TipsHeader
              title="Festivals & Events Tips"
              author="Admin"
              date="March 15, 2024"
            />

            <div className="tip-container">
              <h3 className="tip-title">Major Festivals</h3>
              <p>Important festivals in Vietnam:</p>
              <ul>
                <li>Tết Nguyên Đán (Lunar New Year) - January/February</li>
                <li>Hội An Lantern Festival - Monthly full moon</li>
                <li>Hue Festival - April/May (biennial)</li>
                <li>Mid-Autumn Festival - September</li>
                <li>Hung Kings Temple Festival - April</li>
                <li>Lim Festival - February</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Cultural Events</h3>
              <p>Notable cultural events and celebrations:</p>
              <ul>
                <li>Traditional music performances</li>
                <li>Water puppet shows</li>
                <li>Folk games and competitions</li>
                <li>Religious ceremonies</li>
                <li>Local village festivals</li>
                <li>Food festivals</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Planning Tips</h3>
              <p>Tips for attending festivals:</p>
              <ul>
                <li>Book accommodations well in advance</li>
                <li>Check festival dates (many follow lunar calendar)</li>
                <li>Research local customs and traditions</li>
                <li>Prepare for large crowds</li>
                <li>Bring appropriate clothing</li>
                <li>Learn basic festival-related phrases</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Regional Festivals</h3>
              <p>Notable festivals by region:</p>
              <ul>
                <li>North: Perfume Pagoda Festival, Yen Tu Festival</li>
                <li>Central: Hoi An Lantern Festival, Nha Trang Sea Festival</li>
                <li>South: Ok Om Bok Festival, Nghinh Ong Festival</li>
                <li>Highlands: Gong Festival, Elephant Race Festival</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Festival Etiquette</h3>
              <p>Important cultural considerations:</p>
              <ul>
                <li>Dress modestly and appropriately</li>
                <li>Ask permission before taking photos</li>
                <li>Respect religious ceremonies</li>
                <li>Follow local customs and traditions</li>
                <li>Be mindful of noise levels</li>
                <li>Participate respectfully in activities</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Festival Activities</h3>
              <p>Common activities during festivals:</p>
              <ul>
                <li>Traditional games and competitions</li>
                <li>Food and drink offerings</li>
                <li>Cultural performances</li>
                <li>Religious ceremonies</li>
                <li>Market activities</li>
                <li>Community gatherings</li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default FestivalsTipsPage; 