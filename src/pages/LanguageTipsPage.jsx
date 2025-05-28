import React from 'react';
import { ImageHeader, TipsHeader } from '../components';
// Import icon tương ứng hoặc ảnh placeholder
import languageIcon from '../assets/guide.svg'; // Sử dụng icon guide làm tạm

const LanguageTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <main className="tips-container">
          {/* Sử dụng icon hoặc ảnh placeholder */}
          <ImageHeader img={languageIcon} />

          <article className="article-container">
            <TipsHeader
              title="Language & Communication Tips"
              author="Admin"
              date="March 15, 2024"
            />

            <div className="tip-container">
              <h3 className="tip-title">Vietnamese Language Basics</h3>
              <p>Vietnamese is the official language of Vietnam. Here are some essential phrases:</p>
              <ul>
                <li>Xin chào (sin chow) - Hello</li>
                <li>Cảm ơn (kam un) - Thank you</li>
                <li>Xin lỗi (sin loy) - Sorry/Excuse me</li>
                <li>Vâng (vung) - Yes</li>
                <li>Không (khom) - No</li>
                <li>Bao nhiêu? (bow nyew) - How much?</li>
                <li>Tôi không hiểu (toy khom hew) - I don't understand</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">English in Vietnam</h3>
              <p>English proficiency varies across Vietnam:</p>
              <ul>
                <li>Major cities (Hanoi, Ho Chi Minh City): Many people speak basic English</li>
                <li>Tourist areas: Staff usually speak English</li>
                <li>Rural areas: Limited English proficiency</li>
                <li>Younger generation: Generally better English skills</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Communication Tips</h3>
              <p>Tips for effective communication:</p>
              <ul>
                <li>Speak slowly and clearly</li>
                <li>Use simple words and short sentences</li>
                <li>Learn basic numbers for shopping and bargaining</li>
                <li>Use body language and gestures when needed</li>
                <li>Download a translation app for emergencies</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Cultural Communication</h3>
              <p>Understanding Vietnamese communication style:</p>
              <ul>
                <li>Vietnamese people are generally indirect in communication</li>
                <li>They may say "yes" to be polite even if they mean "no"</li>
                <li>Maintaining "face" is important in Vietnamese culture</li>
                <li>Non-verbal cues are significant in communication</li>
                <li>Smiling is common and doesn't always indicate agreement</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Useful Apps</h3>
              <p>Recommended language and translation apps:</p>
              <ul>
                <li>Google Translate (with offline Vietnamese language pack)</li>
                <li>Duolingo (for learning basic Vietnamese)</li>
                <li>Vietnamese Dictionary</li>
                <li>Learn Vietnamese - Phrasebook</li>
              </ul>
            </div>

            <div className="tip-container">
              <h3 className="tip-title">Emergency Phrases</h3>
              <p>Important phrases for emergencies:</p>
              <ul>
                <li>Cứu tôi! (koo toy) - Help me!</li>
                <li>Gọi cảnh sát (goy canh sat) - Call the police</li>
                <li>Bệnh viện ở đâu? (benh vien o dow) - Where is the hospital?</li>
                <li>Tôi cần bác sĩ (toy can bak see) - I need a doctor</li>
                <li>Số điện thoại khẩn cấp (so deen thoai khan cup) - Emergency phone number</li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default LanguageTipsPage; 