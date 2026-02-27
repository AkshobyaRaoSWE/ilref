import { Link } from 'react-router-dom';

export default function Workshops() {
  return (
    <main className="page">
      <section className="section workshops-section">
        <h1 className="page-title">Workshop Dates</h1>
        <p className="section-text">
          Our next workshops are still being finalized. Check back soon for dates, locations, and topics.
        </p>
        <div className="workshop-tbd">
          <span className="workshop-tbd-label">Upcoming workshops</span>
          <p className="workshop-tbd-value">TBD</p>
          <p className="workshop-tbd-note">
            Sign up for our mailing list so we can notify you as soon as dates are set.
          </p>
          <Link to="/signup" className="btn btn-primary">Sign up for updates</Link>
        </div>
      </section>
    </main>
  );
}
