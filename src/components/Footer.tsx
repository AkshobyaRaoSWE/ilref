import { Link } from 'react-router-dom';

const INSTAGRAM_URL = 'https://www.instagram.com/illinoisroboticsedu/';
const FACEBOOK_URL = 'https://www.facebook.com/people/Illinois-Robotics-Education-Foundation/61575640355944/';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">IREF</Link>
          <p className="footer-tagline">Illinois Robotics Education Foundation</p>
        </div>
        <div className="footer-links">
          <Link to="/">About</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-social">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            Instagram
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            Facebook
          </a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Illinois Robotics Education Foundation</p>
    </footer>
  );
}
