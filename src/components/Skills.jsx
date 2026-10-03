export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git / GitHub', 'REST APIs', 'Data Structures & Algorithms'],
    },
    {
      title: 'Areas of Interest',
      skills: [
        'Backend Development',
        'Full-Stack Development',
        'AI / LLM Integration',
        'Cyber Security',
        'Database Development',
        'Problem Solving',
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section__title">Technical Skills</h2>
        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skills__category">
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
