import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Mail, Phone, Github, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';
import './App.css';

// --- Data remains the same ---
const professionalSummary = "Enthusiastic and detail-oriented systems programmer with a strong foundation in operating systems, C programming, and Linux internals. Strong problem-solving skills and a commitment to writing performant and maintainable low-level code.";

const projects = [
  {
    title: "Share-King",
    year: "2025",
    description: "Developed an interactive stock price prediction app with machine learning and real-time graphing. Managed the full stack, from backend data pipelines to frontend model integration and a user-friendly web interface.",
    tech: ["Python", "Streamlit", "Scikit-learn", "yfinance", "Pandas", "Plotly"],
    codeLink: "https://github.com/prajwalkorde?tab=repositories"
  },
  {
    title: "MASK-VISION",
    year: "2024",
    description: "Developed an AI-based facemask detection system with real-time compliance monitoring and alerts to enhance safety. Managed the end-to-end project, including data preprocessing, model training, and deployment.",
    tech: ["Python", "Tensorflow", "Keras", "OpenCV", "Tkinter", "Matplotlib"],
    codeLink: "https://github.com/prajwalkorde?tab=repositories"
  },
  {
    title: "E-Sell",
    year: "2024",
    description: "Designed and developed a comprehensive e-commerce platform using pure HTML, CSS, and JavaScript, enabling a local business to successfully migrate from an offline to an online platform.",
    tech: ["HTML", "CSS", "JavaScript", "E-commerce"],
    codeLink: "https://github.com/prajwalkorde?tab=repositories"
  }
];

const skills = {
  programmingLanguages: ["C", "C++", "Python", "JavaScript"],
  frameworksAndLibraries: ["TensorFlow", "Scikit-learn", "Keras", "NumPy", "Pandas", "Matplotlib"],
  databasesAndTools: ["Git", "Linux", "GitHub", "RHEL", "Embedded Systems", "IoT", "Arduino", "MongoDB", "AWS Cloud"]
};

const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Zeal institute, Pune", detail: "CGPA: 8.5/10 (FY)", year: "2024-present" },
  { degree: "B.Sc. (CPS, PHY, MATH)", school: "Jijamata Mahavidyalaya, Buldhana", detail: "79.6%", year: "2019–2022" },
  { degree: "HSC (Class XII)", school: "Dyanganga Junior College, Jafrabad", detail: "Percentage: 66.2%", year: "2019" },
  { degree: "SSC (Class X)", school: "Bharat Vidyalaya, Buldhana", detail: "Percentage: 71.6%", year: "2017" }
];

const achievements = {
  technical: [
    { event: "C Programming Certification", result: "120 Hours | 5 Projects", org: "MKCL" },
    { event: "Problem Solving Certification", result: "", org: "HackerRank" },
    { event: "JavaScript Certification", result: "", org: "HackerRank" },
    { event: "Fundamentals of RHEL", result: "85%", org: "Coursera, RED HAT" },
    { event: "Hands-on Intro to Linux Commands and Sell Scripting", result: "95.66%", org: "Coursera, IBM" },
    { event: "Interfacing With Arduino", result: "100%", org: "Coursera, University of California, Irvine" },
    { event: "Intro to Iot and Embedded Systems", result: "87.12%", org: "Coursera, University of California, Irvine" },
    { event: "Programming for the IOTs Project", result: "100%", org: "Coursera, University of California, Irvine" },
    { event: "Arduino Platform and C Programming", result: "99.37%", org: "Coursera, University of California, Irvine" },
    { event: "Raspberry Pi Platform and Python Programming for the Raspberry Pi", result: "95.37%", org: "Coursera, University of California, Irvine" },
    { event: "Interfacing with Raspberry Pi", result: "95.37%", org: "Coursera, University of California, Irvine" },
    { event: "Interfacing With Arduino", result: "100%", org: "Coursera, University of California, Irvine" },
    { event: "Byte Battle Competition", result: "1st Runner-up", org: "Zeal Institutes" },
    { event: "Code Battle Competition", result: "1st Runner-up", org: "Suryadutta College" },
    { event: "Technocrat Competition", result: "1st Runner-up", org: "Suryadutta College" },
  ],
  softSkills: [
    { event: "Intro to Psychology", result: "Coursera, Yale University", org: "90%" },
    { event: "Classical Sociological Theory", result: "Coursera, University of Amsterdam", org: "82.43%" },
    { event: "Tech-Quiz Competition", result: "1st Place", org: "Zeal Institutes" },
    
  ]
};

// --- New Maintenance Page Component ---
function Maintenance() {
  return (
    <div className="maintenance-container">
      <h1>Under Maintenance</h1>
      <p>This project is currently undergoing updates. We apologize for the inconvenience.</p>
      <Link to="/" className="cta-button">
        Go Back Home
      </Link>
    </div>
  );
}

// --- Your main portfolio page component ---
function Portfolio() {
  return (
    <div className="portfolio-container">
      <header className="main-header">
        <nav>
          <div className="logo">PK</div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* All your sections (Hero, About, etc.) go here */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Prajwal_Rajiv_Korde();</h1>
            <p className="subtitle">Aspiring Linux kernel developer with a strong foundation in C and OS concepts, eager to grow by contributing to real-world kernel projects.</p>
            <a href="#projects" className="cta-button">
              View My Work <ArrowRight size={20} />
            </a>
          </div>
        </section>

        <section id="about" className="content-section">
          <h2>printf("About Me");</h2>
          <p className="professional-summary">{professionalSummary}</p>
        </section>

        <section id="projects" className="content-section">
          <h2>My Projects \n</h2>
          <div className="project-grid">
            {projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-header">
                  <h3>{proj.title}</h3>
                  <span className="project-year">{proj.year}</span>
                </div>
                <p>{proj.description}</p>
                <div className="tech-tags">
                  {proj.tech.map((t, i) => <span key={i}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={proj.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github size={18} /> Code
                  </a>
                  {/* Updated link to the maintenance page */}
                  <a href="/maintenance" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
            <h2>Skills & Expertise &#123;</h2>
            <div className="skills-grid">
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <div className="skills-container">
                        {skills.programmingLanguages.map((skill, i) => (
                            <div className="skill-pill" key={i}>{skill}</div>
                        ))}
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Tools & Other</h3>
                     <div className="skills-container">
                        {skills.databasesAndTools.map((skill, i) => (
                            <div className="skill-pill" key={i}>{skill}</div>
                        ))}
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Frameworks & Libraries</h3>
                    <div className="skills-container">
                        {skills.frameworksAndLibraries.map((skill, i) => (
                            <div className="skill-pill" key={i}>{skill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section id="credentials" className="content-section">
          <div className="credentials-grid">
            <div className="credentials-column">
              <h3>#include Education</h3>
              {education.map((edu, i) => (
                <div className="credential-item" key={i}>
                  <strong>{edu.degree}</strong>
                  <p>{edu.school}</p>
                  <span>{edu.detail} | {edu.year}</span>
                </div>
              ))}
            </div>
            <div className="credentials-column">
              <h3>#include Achievements & Certifications</h3>
              <h4>Technical</h4>
              {achievements.technical.map((ach, i) => (
                 <div className="credential-item" key={i}>
                  <strong>{ach.event}</strong>
                  <p>{ach.result}{ach.org && ` — ${ach.org}`}</p>
                </div>
              ))}
              <h4 className="sub-heading">Soft Skills</h4>
               {achievements.softSkills.map((ach, i) => (
                 <div className="credential-item" key={i}>
                  <strong>{ach.event}</strong>
                  <p>{ach.result}{ach.org && ` — ${ach.org}`}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section">
          <h2>Get In Touch</h2>
          <p>I'm open to new opportunities and collaborations. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:prajwalrk3071@gmail.com" className="contact-link">
              <Mail size={20} /> prajwalrk3071@gmail.com
            </a>
             <a href="https://github.com/prajwalkorde" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={20} /> prajwalkorde
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={20} /> Prajwalkorde
            </a>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} Prajwal Korde. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// --- Main App component to handle routing ---
function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/maintenance" element={<Maintenance />} />
    </Routes>
  );
}

export default App;