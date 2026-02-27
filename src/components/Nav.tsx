import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'About' },
    { to: '/signup', label: 'Sign Up' },
    { to: '/workshops', label: 'Workshops' },
    { to: '/donate', label: 'Donate' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        IREF
      </Link>
      <ul className="nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={location.pathname === to ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
