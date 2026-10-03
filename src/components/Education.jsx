import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech \u2014 Computer Science and Engineering (Cyber Security)',
    institution: 'Shri Ramdeobaba College of Engineering and Management',
    score: 'CGPA: 7.73',
    icon: <GraduationCap size={20} />,
  },
  {
    degree: 'Diploma \u2014 Computer Engineering',
    institution: 'Dr. Panjabrao Deshmukh Polytechnic',
    score: 'Percentage: 81.77%',
    icon: <GraduationCap size={20} />,
  },
  {
    degree: 'Class X / CBSE',
    institution: 'School of Scholars',
    score: 'Percentage: 83.22%',
    icon: <Award size={20} />,
  },
];

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section__title">Education</h2>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline__item">
              <div className="timeline__marker">
                {edu.icon}
              </div>
              <div className="timeline__content card">
                <h3 className="timeline__role">{edu.degree}</h3>
                <p className="timeline__company">{edu.institution}</p>
                <p className="timeline__score">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
