import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'What does ILREF do?',
    a: 'ILREF runs workshops and programs that teach K–12 students the basics of VEX robotics—building, coding, and competing. We’re a student-led nonprofit focused on making robotics education accessible across Illinois.',
  },
  {
    q: 'Who can participate?',
    a: 'Our workshops are open to students in Illinois. No prior robotics experience is required—we start from the basics and work up.',
  },
  {
    q: 'Do I need my own robot or kit?',
    a: 'For most workshops, we provide or coordinate equipment. Specific requirements will be shared when you sign up for an event.',
  },
  {
    q: 'How can my school or club partner with ILREF?',
    a: 'Reach out via our social channels (Instagram or Facebook) or talk to us at an event. Our Head of Outreach coordinates partnerships and visits.',
  },
  {
    q: 'When and where are workshops held?',
    a: 'Dates and locations are posted on our Workshops page and social media. Check there for the latest schedule.',
  },
  {
    q: 'How can I volunteer or help?',
    a: 'Sign up through our form to get on our list. We’ll share opportunities for volunteering at workshops and events.',
  },
];

export default function Contact() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="page">
      <section className="section contact-section">
        <h1 className="page-title">Get in Touch</h1>
        <p className="section-text contact-intro">
          Find answers below. For anything else, reach out on Instagram or Facebook.
        </p>

        <div className="contact-info">
          <p><strong>Phone:</strong> <a href="tel:3313320236">331-332-0236</a></p>
          <p><strong>Location:</strong> TBD</p>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                {item.q}
                <span className="faq-icon" aria-hidden>+</span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-social">
          <p>Follow us:</p>
          <a href="https://www.instagram.com/illinoisroboticsedu/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/people/Illinois-Robotics-Education-Foundation/61575640355944/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </section>
    </main>
  );
}
