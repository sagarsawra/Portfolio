import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        <div className="timeline">
          <div className="timeline__item">
            <div className="timeline__marker">
              <Briefcase size={20} />
            </div>
            <div className="timeline__content card">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">Software Development Intern</h3>
                  <p className="timeline__company">Mount Reach Solutions Pvt. Ltd.</p>
                </div>
                <span className="timeline__duration">
                  <Calendar size={14} /> May 2025 &ndash; July 2025
                </span>
              </div>
              <ul className="timeline__responsibilities">
                <li>
                  Developed and integrated frontend and backend modules using React.js, Node.js,
                  and REST APIs for web applications.
                </li>
                <li>
                  Designed REST API workflows, database queries, and backend logic to improve
                  application performance and reliability.
                </li>
                <li>
                  Collaborated in an Agile development environment to debug issues, implement new
                  features, and deliver clean, maintainable code across multiple projects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
