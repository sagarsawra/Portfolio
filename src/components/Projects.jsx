import { Github } from 'lucide-react';

const projects = [
{
  name: 'LeetTow Browser Extension',
  subtitle: 'LLM-Powered Coding Assistant',
  technologies: [
    'JavaScript',
    'Node.js',
    'Express.js',
    'Groq LLM',
    'GraphQL',
    'Chrome Extension API',
    'REST APIs',
    'Prompt Engineering',
    'JSON',
    'Git'
  ],
  description: [
    'Developed an AI-powered Chrome extension integrated with LeetCode GraphQL APIs to provide contextual coding hints and problem recommendations.',
    'Built recommendation and hint-generation workflows using problem tags, difficulty levels, and metadata to deliver context-aware assistance.',
    'Integrated Groq LLM with prompt engineering and response parsing to generate structured coding guidance and improve response reliability.'
  ],
  github: 'https://github.com/sagarsawra/leettow',
},
{
  name: 'ChatConnect',
  subtitle: 'Anonymous Real-Time Chat & Video Calling Platform',
  technologies: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'WebRTC',
    'Socket.io',
    'STUN/TURN',
    'JavaScript',
    'REST APIs',
    'SHA-256',
    'reCAPTCHA v2'
  ],
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
  technologies: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'JWT',
    'Google OAuth 2.0',
    'bcrypt',
    'REST APIs',
    'JavaScript',
    'HTML5',
    'CSS3'
  ],
  description: [
    'Developed a full-stack e-commerce backend with secure user authentication, product management, and protected API routes using JWT.',
    'Implemented email/password login and Google OAuth authentication with encrypted password storage using bcrypt.',
    'Built RESTful APIs with MongoDB integration for product listing, inventory management, and user account handling.'
  ],
  github: 'https://github.com/sagarsawra/coTTees',
},
{
  name: 'MailExTo',
  subtitle: 'AI-Powered Gmail Event Extractor',
  technologies: [
    'React',
    'Chrome Extension API',
    'Redis',
    'BullMQ',
    'Gmail API',
    'NLP',
    'dateparser'
  ],
  description: [
    'Developed an AI-powered email intelligence system that extracts actionable events, meetings, and deadlines from Gmail using NLP and date/time parsing.',
    'Built a Chrome extension with a Node.js/Express backend and Python FastAPI microservice, integrating Gmail API and Google OAuth 2.0.',
    'Implemented asynchronous email processing using BullMQ and Redis, with MongoDB for storing extracted events and email data.'
  ],
  github: 'https://github.com/sagarsawra/mailexto',
},
{
  name: 'MediConnect',
  subtitle: 'AI-Powered Hospital Discovery & Healthcare Platform',
  technologies: [
    'React.js',
    'TypeScript',
    'Node.js',    
    'MongoDB',
    'AI Integration',
    'Groq LLM'
  ],
  description: [
    'Developed a full-stack healthcare platform that helps users discover hospitals using AI-based ratings, hospital locations, and available bed information.',
    'Implemented hospital and doctor discovery features, enabling users to explore hospital ratings, available doctors, and relevant healthcare information.',
    'Designed a responsive user interface and backend APIs to organize hospital data, improve healthcare accessibility, and simplify hospital comparison.'
  ],
  github: 'https://github.com/sagarsawra/mediconnect',
},
 {
  name: 'StockAlerts',
  subtitle: 'Real-Time Stock Price Alerts & Fundamental Analysis',
  technologies: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs',
    'Yahoo Finance API',
    'Nodemailer',
    'Node-Cron'
  ],
  description: [
    'Developed a real-time stock price alert platform that monitors stock prices and sends automated email notifications when user-defined target prices are reached or crossed.',
    'Implemented configurable price alerts with scheduled price monitoring and email delivery to help users track market movements without constant manual checking.',
    'Built a fundamental-based stock screening feature to help users identify potentially promising stocks using financial metrics and company fundamentals.'
  ],
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
