import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'LeetTow',
    subtitle: 'LLM-Based Coding Assistant',
    technologies: ['Node.js', 'Groq LLM', 'GraphQL'],
    description: [
      'Developed an AI-powered coding assistant integrated with LeetCode GraphQL APIs and a Chrome extension for real-time coding hints and problem recommendations.',
      'Built intelligent recommendation and hint systems that analyze current problem tags, difficulty, and metadata to deliver context-aware guidance.',
      'Implemented prompt engineering, response parsing, and automated testing for reliable AI-generated hint delivery using Groq LLM.',
    ],
    github: 'https://github.com/sagarsawra/leettow',
  },
  {
    name: 'ChatConnect',
    subtitle: 'Anonymous Real-Time Chat Platform',
    technologies: ['MERN', 'WebRTC', 'Socket.io', 'STUN/TURN'],
    description: [
      'Designed a queue-based matchmaking engine with interest scoring, gender filters, and timeout fallback for efficient user pairing.',
      'Optimized WebRTC signaling using Socket.io event sequencing and ICE candidate pre-buffering to improve connection performance.',
      'Implemented SHA-256 reconnect tokens with TTL expiry and reCAPTCHA v2 for secure session handling and spam prevention.',
    ],
    github: 'https://github.com/sagarsawra/Chatconnect',
  },
  {
    name: 'coTTees',
    subtitle: 'Full-Stack E-Commerce Platform',
    technologies: ['MERN', 'JWT', 'Google OAuth'],
    description: [
      'Developed a full-stack e-commerce backend with secure user authentication, product management, and protected API routes using JWT.',
      'Implemented email/password login and Google OAuth authentication with encrypted password storage using bcrypt.',
      'Built RESTful APIs with MongoDB integration for product listing, inventory management, and user account handling.',
    ],
    github: 'https://github.com/sagarsawra/coTTees',
  },
  {
    name: 'MailExTo',
    subtitle: 'Email Utility Tool',
    technologies: [],
    description: [],
    github: 'https://github.com/sagarsawra/mailexto',
  },
  {
    name: 'MediConnect',
    subtitle: 'Healthcare Application',
    technologies: [],
    description: [],
    github: 'https://github.com/sagarsawra/mediconnect',
  },
  {
    name: 'StockAlerts',
    subtitle: 'Stock Notification System',
    technologies: [],
    description: [],
    github: 'https://github.com/sagarsawra/stockalerts',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card card">
              <div className="project-card__header">
                <h3 className="project-card__name">{project.name}</h3>
                {project.subtitle && (
                  <p className="project-card__subtitle">{project.subtitle}</p>
                )}
              </div>

              {project.technologies.length > 0 && (
                <div className="project-card__tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag tag--small">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {project.description.length > 0 && (
                <ul className="project-card__description">
                  {project.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="project-card__actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline btn--small"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
