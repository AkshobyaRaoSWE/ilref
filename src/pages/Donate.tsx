const PAYPAL_DONATE_URL = 'https://www.paypal.com/donate?campaign_id=HDPRCJBCR5D3J';

export default function Donate() {
  return (
    <main className="page page--donate">
      <section className="section donate-section">
        <h1 className="page-title">Donate</h1>
        <p className="section-text donate-intro">
          Your support helps us bring free VEX robotics workshops to students across Illinois. Every donation goes toward kits, venues, and materials so more youth can learn engineering and teamwork.
        </p>
        <a
          href={PAYPAL_DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary donate-btn"
        >
          Donate with PayPal
        </a>
        <p className="donate-note">
          You’ll be taken to our secure PayPal campaign page to complete your donation.
        </p>
      </section>
    </main>
  );
}
