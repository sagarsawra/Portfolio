import { Code2, Shield, Database, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__content">
          <p className="about__text">
            Computer Science undergraduate with strong foundations in Java, Data Structures &amp;
            Algorithms, backend development, and SQL. Experienced in building full-stack and
            AI-powered applications using modern web technologies. Passionate about delivering
            scalable software solutions, leveraging AI and automation, and solving real-world
            business challenges through technology.
          </p>
          <div className="about__highlights">
            <div className="about__highlight-card">
              <Code2 size={28} className="about__icon" />
              <h3>Full-Stack Development</h3>
              <p>Building end-to-end web applications with modern frameworks and tools</p>
            </div>
            <div className="about__highlight-card">
              <Database size={28} className="about__icon" />
              <h3>Backend Development</h3>
              <p>Designing APIs, database systems, and server-side logic</p>
            </div>
            <div className="about__highlight-card">
              <Brain size={28} className="about__icon" />
              <h3>AI Integration</h3>
              <p>Building AI-powered applications with LLM integration</p>
            </div>
            <div className="about__highlight-card">
              <Shield size={28} className="about__icon" />
              <h3>Cyber Security</h3>
              <p>Specializing in secure application development and security practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
