import { Link } from "react-router-dom";

const EXEC_TEAM = [
  {
    name: "Adwik Sharma",
    role: "President",
    team: "355Z",
    bio: "I am a student with a strong background in VEX robotics. My team 355Z has state-qualified, and I lead ILREF so we can bring that same opportunity to more students across Illinois.",
  },
  {
    name: "Sagar Raut",
    role: "Vice President",
    team: "2360A",
    bio: "I compete with state-qualified team 2360C and have been in VEX for several years. I support our President and make sure every director has what they need so our workshops and outreach run smoothly.",
  },
  {
    name: "Arhaan Shaikh",
    role: "Logistics Coordinator",
    team: "355P",
    bio: "I am a sophomore at Neuqua Valley High School. I have an extensive background in robotics; I have done VEX Robotics since 2022. My current VEX V5 team, 355P, is one of the most successful in the state of Illinois, and a key part of having a successful team is planning and organization, which I manage.",
  },
  {
    name: "Ian Shi",
    role: "Director of Technology & Equipment",
    team: "355P",
    bio: "I am on 355P, a top VEX team in Illinois, and I have been working with robotics kits and software for years. I keep our workshop equipment and tech in shape so every student gets a great experience.",
  },
  {
    name: "Karl Nguyen",
    role: "Director of Finance",
    team: "355P",
    bio: "I compete with 355P and have a strong interest in how organizations run behind the scenes. I handle ILREF’s budgets, expenses, and reporting so we stay responsible and can keep offering free workshops.",
  },
  {
    name: "Akshobya Rao",
    role: "Director of Technology & Web Development",
    team: "2360C",
    bio: "I am on state-qualified team 2360C and love building things—including websites. I design and maintain our site and online presence so workshop info and sign-ups are easy to find and use.",
  },
  {
    name: "Hardik Jain",
    role: "Director of Fundraising & Development",
    team: "2360C",
    bio: "I have been in VEX with 2360C and know how much funding matters for growth. I lead our grant writing, donor relations, and fundraising so we can sustain and expand our workshops across Illinois.",
  },
  {
    name: "Ryan Vaity",
    role: "Director of Marketing & Communications",
    team: "355Z",
    bio: "I am passionate about getting the word out so more students discover robotics. I run our social media, branding, and outreach so more people hear about ILREF and show up to our workshops.",
  },
];

export default function About() {
  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero-title">Illinois Robotics Education Foundation</h1>
        <p className="hero-subtitle">
          We teach youth across Illinois the fundamentals of VEX robotics and
          engineering—from build and code to competition—so every student has a
          path into STEM.
        </p>
        <Link to="/signup" className="btn btn-primary">
          Get involved
        </Link>
      </section>

      <section className="section about-section">
        <h2 className="section-title">About Us</h2>
        <p className="section-text">
          The Illinois Robotics Education Foundation (ILREF) is a student-led
          nonprofit dedicated to making VEX robotics accessible to K–12
          students. Through workshops, mentorship, and hands-on learning, we
          introduce basic engineering principles, programming, and
          teamwork—inspired by our own experience on state-qualified VEX teams.
          Our goal is to grow the next generation of builders and
          problem-solvers across Illinois.
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
              {member.team ? (
                <p className="exec-team">Team {member.team}</p>
              ) : null}
              <p className="exec-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
