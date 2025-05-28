import React from 'react';
import { ImageHeader, TipsHeader } from '../components';
import transportTips from '../assets/tips/transport/transport.jpg';

const TransportationTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <main className="tips-container">
          <ImageHeader img={transportTips} />

          <article className="article-container">
            <TipsHeader
              title="Getting Around Vietnam: Transportation Guide"
              author="Admin"
              date="March 15, 2024"
            />

            {/* Introduction */}
            <div className="tip-container">
              <h3 className="tip-title">Overview of Transportation in Vietnam</h3>
              <p className="mb-4">
                Vietnam offers various transportation options for travelers, from domestic flights 
                to local buses and motorbikes. Understanding the different options and their 
                pros and cons will help you plan your journey effectively.
              </p>
            </div>

            {/* Domestic Flights */}
            <div className="tip-container">
              <h3 className="tip-title">Domestic Flights</h3>
              <div className="space-y-4">
                <p className="mb-4">
                  Domestic flights are the fastest way to travel between major cities in Vietnam.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Major Airlines</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Vietnam Airlines - National carrier</li>
                    <li>Vietjet Air - Low-cost carrier</li>
                    <li>Bamboo Airways - Newer airline</li>
                    <li>Pacific Airlines - Budget option</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Tips for Domestic Flights</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Book in advance for better prices</li>
                    <li>Check baggage allowances carefully</li>
                    <li>Arrive at least 2 hours before departure</li>
                    <li>Consider weather conditions when booking</li>
                    <li>Print or save your e-ticket</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Trains */}
            <div className="tip-container">
              <h3 className="tip-title">Train Travel</h3>
              <div className="space-y-4">
                <p className="mb-4">
                  Vietnam's railway system connects major cities and offers scenic journeys.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Popular Routes</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Hanoi to Ho Chi Minh City (Reunification Express)</li>
                    <li>Hanoi to Sapa</li>
                    <li>Hanoi to Hai Phong</li>
                    <li>Ho Chi Minh City to Nha Trang</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Train Travel Tips</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Book tickets in advance, especially for sleeper trains</li>
                    <li>Choose soft sleeper for overnight journeys</li>
                    <li>Bring snacks and water for long trips</li>
                    <li>Keep valuables close to you</li>
                    <li>Consider the weather when planning train travel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Buses */}
            <div className="tip-container">
              <h3 className="tip-title">Bus Travel</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Types of Buses</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Local buses - Cheap but crowded</li>
                    <li>Tourist buses - More comfortable, fixed routes</li>
                    <li>Sleeping buses - For overnight journeys</li>
                    <li>Mini-buses - For shorter distances</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Bus Travel Tips</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Book through reputable companies</li>
                    <li>Arrive early to secure good seats</li>
                    <li>Keep your belongings close</li>
                    <li>Bring motion sickness medication if needed</li>
                    <li>Have small change for local buses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Motorbikes */}
            <div className="tip-container">
              <h3 className="tip-title">Motorbike Travel</h3>
              <div className="space-y-4">
                <p className="mb-4">
                  Motorbikes are a popular way to explore Vietnam, but require careful consideration.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Renting vs. Buying</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Short-term: Rent from reputable shops</li>
                    <li>Long-term: Consider buying and reselling</li>
                    <li>Always get proper documentation</li>
                    <li>Check insurance coverage</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Safety Tips</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Always wear a helmet</li>
                    <li>Get an international driving permit</li>
                    <li>Start with shorter trips</li>
                    <li>Be extra careful in cities</li>
                    <li>Consider guided motorbike tours</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Taxis and Ride-Hailing */}
            <div className="tip-container">
              <h3 className="tip-title">Taxis and Ride-Hailing</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Reliable Companies</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Mai Linh Taxi</li>
                    <li>Vinasun Taxi</li>
                    <li>Grab (ride-hailing app)</li>
                    <li>Be (ride-hailing app)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Tips for Taxi Travel</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Use official taxi companies</li>
                    <li>Install Grab app for convenience</li>
                    <li>Agree on price before long trips</li>
                    <li>Keep small bills for payment</li>
                    <li>Save emergency numbers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* City Transportation */}
            <div className="tip-container">
              <h3 className="tip-title">Getting Around Cities</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Options</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Local buses</li>
                    <li>Cyclo (three-wheeled bicycle taxi)</li>
                    <li>Xe om (motorbike taxi)</li>
                    <li>Walking</li>
                    <li>Bicycle rental</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">City Travel Tips</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Download offline maps</li>
                    <li>Learn basic directions in Vietnamese</li>
                    <li>Be careful when crossing streets</li>
                    <li>Keep valuables secure</li>
                    <li>Consider traffic patterns when planning</li>
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

export default TransportationTipsPage; 