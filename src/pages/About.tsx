import { Link } from 'react-router-dom';

const EXEC_TEAM = [
  {
    name: 'Adwik Sharma',
    role: 'President',
    team: '355Z',
    bio: 'Chief leader of ILREF—sets overall vision and strategic direction, presides over executive meetings, and makes final decisions on major organizational matters. Acts as the primary representative to the public, donors, and partners. Competes with state-qualified team 355Z.',
  },
  {
    name: 'Sagar Raut',
    role: 'Vice President',
    team: '2360C',
    bio: 'Supports the President in leadership and leads when the President is unavailable. Drives strategic initiatives, oversees cross-departmental collaboration, and advocates for the team so directors have the resources they need. Member of state-qualified team 2360C.',
  },
  {
    name: 'Arhaan Shaikh',
    role: 'Logistics Coordinator',
    team: '355P',
    bio: 'Plans and executes monthly robotics workshops from start to finish: securing venues, coordinating schedules, managing volunteers, organizing materials, and ensuring events run smoothly and on time. Part of state-qualified private team 355P.',
  },
  {
    name: 'Ian Shi',
    role: 'Director of Technology & Equipment',
    team: '355P',
    bio: 'Manages all robotics kits, tools, software, and technical resources used during workshops. Maintains equipment inventory, troubleshoots technical issues, and stays current on robotics technology to keep workshops engaging and up to date. Member of state-qualified team 355P.',
  },
  {
    name: 'Karl Nguyen',
    role: 'Director of Finance',
    team: '355P',
    bio: 'Oversees the organization’s financial health—managing budgets, tracking expenses, processing transactions, and producing financial reports. Ensures the nonprofit remains fiscally responsible and compliant with financial regulations and reporting requirements.',
  },
  {
    name: 'Akshobya Rao',
    role: 'Director of Technology & Web Development',
    team: '2360C',
    bio: 'Designs, builds, and maintains ILREF’s website and online presence. Keeps the site updated with workshop information, registration pages, and organizational news, and ensures it is visually appealing, user-friendly, and reflective of our mission. On state-qualified team 2360C.',
  },
  {
    name: 'Hardik Jain',
    role: 'Director of Fundraising & Development',
    team: '2360C',
    bio: 'Leads all efforts to secure funding, including grant writing, donor relations, sponsorship outreach, and fundraising campaigns. Critical for ensuring financial support to sustain and grow our monthly workshops. Member of state-qualified team 2360C.',
  },
];

export default function About() {
  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero-title">Illinois Robotics Education Foundation</h1>
        <p className="hero-subtitle">
          We teach youth across Illinois the fundamentals of VEX robotics and engineering—from build and code to competition—so every student has a path into STEM.
        </p>
        <Link to="/signup" className="btn btn-primary">Get involved</Link>
      </section>

      <section className="section about-section">
        <h2 className="section-title">About Us</h2>
        <p className="section-text">
          The Illinois Robotics Education Foundation (ILREF) is a student-led nonprofit dedicated to making VEX robotics accessible to K–12 students. Through workshops, mentorship, and hands-on learning, we introduce basic engineering principles, programming, and teamwork—inspired by our own experience on state-qualified VEX teams. Our goal is to grow the next generation of builders and problem-solvers across Illinois.
        </p>
      </section>

      <section className="section exec-section">
        <h2 className="section-title">Meet the Exec</h2>
        <div className="exec-grid">
          {EXEC_TEAM.map((member) => (
            <article key={member.name} className="exec-card">
              <div className="exec-avatar">{member.name.charAt(0)}</div>
              <h3 className="exec-name">{member.name}</h3>
              <p className="exec-role">{member.role}</p>
              <p className="exec-team">Team {member.team}</p>
              <p className="exec-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
