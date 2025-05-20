import React from 'react';

const Skills:React.FC= () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      skills: ['Java', 'Spring Boot', 'Node.js', 'Python', 'RESTful APIs',]
    },
    {
      title: 'Database Management',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL',]
    },
    {
      title: 'AI & Machine Learning',
      skills: ['Scikit-learn', 'Natural Language Processing', 'Computer Vision']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker','Linux']
    },
    {
      title:"Additional Skills",
      skills:["Teamwork", "Time Management", "Problem Solving", "English", "Bengali", "Hindi"]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
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
};

export default Skills;