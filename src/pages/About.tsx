import { Link } from 'react-router-dom';

const EXEC_TEAM = [
  {
    name: 'Adwik Sharma',
    role: 'President',
    team: '355Z',
    bio: 'Serves as the chief leader of the organization, setting the overall vision and strategic direction of the nonprofit. The President presides over executive meetings, makes final decisions on major organizational matters, and acts as the primary representative of the nonprofit to the public, donors, and partners.',
  },
  {
    name: 'Sagar Raut',
    role: 'Vice President',
    team: '2360C',
    bio: 'Supports the President in all leadership responsibilities and steps in to lead when the President is unavailable. The Vice President helps drive strategic initiatives, oversees cross-departmental collaboration, and serves as an internal advocate for the team to ensure all directors have the resources they need to succeed.',
  },
  {
    name: 'Arhaan Shaikh',
    role: 'Logistics Coordinator',
    team: '355P',
    bio: 'Responsible for the planning and execution of every monthly robotics workshop from start to finish. This includes securing venues, coordinating schedules, managing volunteers, organizing materials, and ensuring each event runs smoothly and on time.',
  },
  {
    name: 'Ian Shi',
    role: 'Director of Technology & Equipment',
    team: '355P',
    bio: 'Manages all robotics kits, tools, software, and technical resources used during workshops. This role is responsible for maintaining equipment inventory, troubleshooting technical issues, and staying current on robotics technology to keep the workshops engaging and up to date.',
  },
  {
    name: 'Karl Nguyen',
    role: 'Director of Finance',
    team: '355P',
    bio: "Oversees the organization's financial health by managing budgets, tracking expenses, processing transactions, and producing financial reports. This role ensures the nonprofit remains fiscally responsible and compliant with all financial regulations and reporting requirements.",
  },
  {
    name: 'Akshobya Rao',
    role: 'Director of Technology & Web Development',
    team: '2360C',
    bio: "Designs, builds, and maintains the nonprofit's website and online presence. This role is responsible for keeping the site updated with workshop information, registration pages, and organizational news, while also ensuring the website is visually appealing, user-friendly, and reflective of the nonprofit's mission.",
  },
  {
    name: 'Hardik Jain',
    role: 'Director of Fundraising & Development',
    team: '2360C',
    bio: 'Leads all efforts to secure funding for the organization, including grant writing, donor relations, sponsorship outreach, and fundraising campaigns. This role is critical to ensuring the nonprofit has the financial support needed to sustain and grow its monthly workshops.',
  },
  {
    name: 'Ryan Vaity',
    role: 'Director of Marketing & Communications',
    team: '',
    bio: "Leads the organization's branding, outreach, and public engagement efforts. This role manages social media, promotional materials, email campaigns, and external communications to increase awareness of the nonprofit's workshops. The Director of Marketing & Communications ensures consistent messaging, strengthens the organization's public image, and helps drive attendance, partnerships, and community growth.",
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
              {member.team ? <p className="exec-team">Team {member.team}</p> : null}
              <p className="exec-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
