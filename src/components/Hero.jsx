import { ArrowRight, Github, Mail } from 'lucide-react';

export default function Hero() {
  const handleScroll = (e, target) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">Sagar Sawra</h1>
        <h2 className="hero__title">Computer Science Undergraduate &middot; Software Developer</h2>
        <p className="hero__description">
          Passionate about full-stack development, backend systems, AI-powered applications,
          and solving real-world problems through technology. Specializing in Cyber Security.
        </p>
        <div className="hero__actions">
          <a
            href="#projects"
            className="btn btn--primary"
            onClick={(e) => handleScroll(e, '#projects')}
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="https://github.com/sagarsawra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="mailto:sagarsawra94@gmail.com"
            className="btn btn--outline"
          >
            <Mail size={18} /> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
