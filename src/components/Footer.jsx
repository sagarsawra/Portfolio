import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__name">Sagar Sawra</p>
          <div className="footer__socials">
            <a
              href="https://github.com/sagarsawra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer__social-link"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sagar-sawra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer__social-link"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sagarsawra94@gmail.com"
              aria-label="Email"
              className="footer__social-link"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="footer__copyright">
            &copy; {currentYear} Sagar Sawra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
