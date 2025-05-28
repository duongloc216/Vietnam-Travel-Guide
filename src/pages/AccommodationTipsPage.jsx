import React from 'react';
import { ImageHeader, TipsHeader } from '../components';
import accommodationTips from '../assets/accommodation.svg';

const AccommodationTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <main className="tips-container">
          <ImageHeader img={accommodationTips} />

          <article className="article-container">
            <TipsHeader
              title="Accommodation Guide: Where to Stay in Vietnam"
              author="Admin"
              date="March 15, 2024"
            />

            {/* Introduction */}
            <div className="tip-container">
              <h3 className="tip-title">Types of Accommodation</h3>
              <p className="mb-4">
                Vietnam offers a wide range of accommodation options to suit every budget and preference, 
                from luxury resorts to budget hostels. Understanding the different types of accommodation 
                will help you make the best choice for your stay.
              </p>
            </div>

            {/* Hotel Categories */}
            <div className="tip-container">
              <h3 className="tip-title">Hotel Categories</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Luxury Hotels</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>International chain hotels (5-star)</li>
                    <li>Luxury resorts with full amenities</li>
                    <li>High-end boutique hotels</li>
                    <li>Price range: $200+ per night</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mid-range Hotels</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>3-4 star hotels</li>
                    <li>Local boutique hotels</li>
                    <li>Business hotels</li>
                    <li>Price range: $50-200 per night</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Budget Options</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Guesthouses</li>
                    <li>Hostels</li>
                    <li>Local hotels</li>
                    <li>Price range: $10-50 per night</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Location Tips */}
            <div className="tip-container">
              <h3 className="tip-title">Location Tips</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Major Cities</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Hanoi: Old Quarter for culture, Ba Dinh for luxury</li>
                    <li>Ho Chi Minh City: District 1 for convenience, District 2 for expats</li>
                    <li>Da Nang: Beachfront for resorts, city center for local experience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tourist Destinations</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Hoi An: Ancient Town for atmosphere, An Bang Beach for relaxation</li>
                    <li>Halong Bay: Cat Ba Island for budget, cruise ships for experience</li>
                    <li>Sapa: Town center for convenience, homestays for local experience</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking Tips */}
            <div className="tip-container">
              <h3 className="tip-title">Booking Tips</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Best Practices</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Book in advance during peak season</li>
                    <li>Check multiple booking platforms</li>
                    <li>Read recent reviews</li>
                    <li>Contact hotel directly for better rates</li>
                    <li>Check cancellation policies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Popular Booking Platforms</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Booking.com</li>
                    <li>Agoda</li>
                    <li>Airbnb</li>
                    <li>Hotels.com</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Amenities & Services */}
            <div className="tip-container">
              <h3 className="tip-title">Amenities & Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Common Amenities</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Free WiFi</li>
                    <li>Air conditioning</li>
                    <li>Breakfast included</li>
                    <li>Laundry service</li>
                    <li>Tour booking service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Additional Services</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Airport transfer</li>
                    <li>Bicycle rental</li>
                    <li>Motorbike rental</li>
                    <li>Massage service</li>
                    <li>Currency exchange</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cultural Considerations */}
            <div className="tip-container">
              <h3 className="tip-title">Cultural Considerations</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Etiquette</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Remove shoes before entering rooms</li>
                    <li>Dress modestly in common areas</li>
                    <li>Be respectful of quiet hours</li>
                    <li>Tip appropriately for good service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Customs</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Learn basic Vietnamese greetings</li>
                    <li>Respect local traditions</li>
                    <li>Be mindful of noise levels</li>
                    <li>Follow hotel rules and regulations</li>
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

export default AccommodationTipsPage; 