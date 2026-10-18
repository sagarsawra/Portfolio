import { FileText, Mail } from 'lucide-react';

function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <h2 className="section__title">Resume</h2>

        <div className="resume__content card">
          <div className="resume__icon-wrapper">
            <FileText size={36} className="resume__icon" />
          </div>

          <h3 className="resume__heading">Curriculum Vitae</h3>

          <p className="resume__description">
            My detailed resume highlighting my education, technical skills,
            and software development experience is available upon request.
          </p>

          <div className="resume__actions">
            <a
              href="mailto:sagarsawra94@gmail.com?subject=Resume%20Request%20-%20Sagar%20Sawra"
              className="btn btn--primary"
            >
              <Mail size={18} /> Request Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;