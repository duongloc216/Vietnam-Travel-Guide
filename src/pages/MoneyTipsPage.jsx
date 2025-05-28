import React from 'react';
import { ImageHeader, TipsHeader } from '../components';
// Import icon tương ứng hoặc ảnh placeholder
import moneyIcon from '../assets/money.svg';

const MoneyTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <main className="tips-container">
          {/* Sử dụng icon hoặc ảnh placeholder */}
          <ImageHeader img={moneyIcon} />

          <article className="article-container">
            <TipsHeader
              title="Budget & Money Tips"
              author="Admin"
              date="March 15, 2024"
            />

            <div className="tip-container">
              <h3 className="tip-title">Currency in Vietnam</h3>
              <p>The official currency of Vietnam is the Vietnamese Dong (VND). As of 2024, the exchange rate is approximately:</p>
              <ul>
                <li>1 USD = 24,500 VND</li>
                <li>1 EUR = 26,800 VND</li>
                <li>1 GBP = 31,200 VND</li>
              </ul>
              <p>While some tourist areas accept USD, it's recommended to use VND for most transactions to get better rates.</p>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Daily Budget</h3>
              <p>Vietnam is known for being very budget-friendly. Here's a rough estimate of daily expenses:</p>
              <ul>
                <li>Budget traveler: $15-25 USD/day</li>
                <li>Mid-range traveler: $30-50 USD/day</li>
                <li>Luxury traveler: $100+ USD/day</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Money Exchange</h3>
              <p>Best places to exchange money:</p>
              <ul>
                <li>Banks (most reliable but may have longer queues)</li>
                <li>Authorized money exchange counters (look for official signage)</li>
                <li>Gold shops (often offer competitive rates)</li>
              </ul>
              <p>Avoid exchanging money at hotels or unauthorized street vendors.</p>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">ATMs and Cards</h3>
              <p>ATMs are widely available in major cities and tourist areas. Tips for using ATMs:</p>
              <ul>
                <li>Use ATMs at banks rather than standalone machines</li>
                <li>Notify your bank before traveling</li>
                <li>Check withdrawal fees (usually 3-5% per transaction)</li>
                <li>Major credit cards (Visa, Mastercard) are accepted in tourist areas</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Tipping Culture</h3>
              <p>Tipping is not mandatory in Vietnam but appreciated:</p>
              <ul>
                <li>Restaurants: 5-10% for good service</li>
                <li>Hotels: 1-2 USD per day for housekeeping</li>
                <li>Tour guides: 5-10 USD per day</li>
                <li>Taxi drivers: Round up the fare</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Bargaining Tips</h3>
              <p>Bargaining is common in markets and street vendors:</p>
              <ul>
                <li>Start at 50-60% of the asking price</li>
                <li>Be polite and friendly</li>
                <li>Be prepared to walk away if the price isn't right</li>
                <li>Remember that small amounts mean more to locals than to tourists</li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default MoneyTipsPage; 