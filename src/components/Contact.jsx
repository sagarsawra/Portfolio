import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section__title">Get In Touch</h2>
        <p className="contact__text">
          I'm always open to discussing new opportunities, interesting projects, or
          collaboration ideas. Feel free to reach out!
        </p>
        <div className="contact__links">
          <a
            href="mailto:sagarsawra94@gmail.com"
            className="contact__card card"
          >
            <Mail size={24} />
            <div>
              <h3>Email</h3>
              <p>sagarsawra94@gmail.com</p>
            </div>
            <ArrowUpRight size={18} className="contact__arrow" />
          </a>
          <a
            href="https://github.com/sagarsawra"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card card"
          >
            <Github size={24} />
            <div>
              <h3>GitHub</h3>
              <p>github.com/sagarsawra</p>
            </div>
            <ArrowUpRight size={18} className="contact__arrow" />
          </a>
          <a
            href="https://www.linkedin.com/in/sagar-sawra"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card card"
          >
            <Linkedin size={24} />
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/sagar-sawra</p>
            </div>
            <ArrowUpRight size={18} className="contact__arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
