import React from 'react';
import { ImageHeader, TipsHeader } from '../components';
// Import icon tương ứng hoặc ảnh placeholder
import shoppingIcon from '../assets/star.svg'; // Sử dụng icon star làm tạm

const ShoppingTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <main className="tips-container">
          {/* Sử dụng icon hoặc ảnh placeholder */}
          <ImageHeader img={shoppingIcon} />

          <article className="article-container">
            <TipsHeader
              title="Shopping Tips"
              author="Admin"
              date="March 15, 2024"
            />

            <div className="tip-container">
              <h3 className="tip-title">Popular Shopping Areas</h3>
              <p>Best places to shop in Vietnam:</p>
              <ul>
                <li>Hanoi: Old Quarter, Dong Xuan Market, Trang Tien Plaza</li>
                <li>Ho Chi Minh City: Ben Thanh Market, Saigon Square, Vincom Center</li>
                <li>Hoi An: Ancient Town, Night Market, Central Market</li>
                <li>Da Nang: Han Market, Con Market, Vincom Plaza</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Traditional Souvenirs</h3>
              <p>Popular items to buy:</p>
              <ul>
                <li>Ao Dai (traditional Vietnamese dress)</li>
                <li>Non La (conical hat)</li>
                <li>Lacquerware</li>
                <li>Silk products</li>
                <li>Vietnamese coffee and tea</li>
                <li>Handicrafts and ceramics</li>
                <li>Local spices and sauces</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Shopping Etiquette</h3>
              <p>Tips for a better shopping experience:</p>
              <ul>
                <li>Always bargain at markets and street vendors</li>
                <li>Be polite and friendly while negotiating</li>
                <li>Check product quality before buying</li>
                <li>Keep your belongings secure in crowded markets</li>
                <li>Be aware of counterfeit products</li>
                <li>Ask for receipts when possible</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Best Time to Shop</h3>
              <p>Timing tips for shopping:</p>
              <ul>
                <li>Markets are busiest in the morning</li>
                <li>Evening markets offer cooler temperatures</li>
                <li>Avoid shopping during peak tourist seasons for better prices</li>
                <li>Weekdays are generally less crowded than weekends</li>
                <li>End of day can bring better deals as vendors want to clear stock</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Payment Methods</h3>
              <p>Payment options when shopping:</p>
              <ul>
                <li>Cash (VND) is preferred in markets and small shops</li>
                <li>Credit cards accepted in malls and larger stores</li>
                <li>Mobile payment apps (MoMo, ZaloPay) are becoming popular</li>
                <li>Keep small denominations for street vendors</li>
                <li>Always count your change</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Shopping Tips for Specific Items</h3>
              <p>Special considerations for different products:</p>
              <ul>
                <li>Clothing: Check sizing (usually runs small) and try before buying</li>
                <li>Electronics: Buy from authorized dealers and check warranty</li>
                <li>Food items: Check expiration dates and customs regulations</li>
                <li>Art and antiques: Verify authenticity and export regulations</li>
                <li>Custom-made items: Allow time for alterations and fittings</li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default ShoppingTipsPage; 