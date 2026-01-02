import React from 'react';
import './DonatePage.css';

const DonatePage = () => {
  // Replace this URL with your actual PayPal donation link
  const paypalDonateUrl = 'https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID';

  // Placeholder QR code for UI testing - replace with your actual PayPal QR code image later
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(paypalDonateUrl)}`;

  return (
    <div className="donate-container">
      <div className="donate-content">
        <h1 className="donate-title">Support Our Mission</h1>
        <p className="donate-description">
          Your donation helps us provide accessible and affordable counselling services
          to everyone in the Argyll community who needs it. Every contribution makes a
          difference in someone's life.
        </p>

        <div className="donate-qr-section">
          <h2 className="donate-subtitle">Donate via PayPal</h2>
          <p className="donate-instruction">
            Scan the QR code below with your phone to make a donation:
          </p>
          <div className="qr-code-wrapper">
            <img
              src={qrCodeUrl}
              alt="PayPal Donation QR Code"
              className="qr-code-image"
            />
          </div>
          <p className="donate-alternative">
            Or click the button below to donate directly:
          </p>
          <a
            href={paypalDonateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            Donate with PayPal
          </a>
        </div>

        <div className="donate-info">
          <h3>How Your Donation Helps</h3>
          <ul className="donate-benefits">
            <li>Provides counselling sessions for those who cannot afford them</li>
            <li>Supports mental health awareness in our community</li>
            <li>Helps train and support our counselling team</li>
            <li>Enables us to reach more people in need</li>
          </ul>
        </div>

        <div className="donate-contact">
          <p>
            For other ways to donate or to learn more about supporting our work,
            please contact us at{' '}
            <a href="mailto:admin@argyllcommunitycounselling.org.uk">
              admin@argyllcommunitycounselling.org.uk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;

