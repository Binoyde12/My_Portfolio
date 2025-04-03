import React from 'react';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience:React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'CodeClause',
      location: 'Remote',
      period: 'Oct 2023',
      description: [
        'Developed and maintained responsive web applications using HTML, CSS, and JavaScript',
        'Ensured cross-browser compatibility and optimized the user experience',
        'Applied SEO best practices and version control with Git'
      ]
    },
    {
      title: 'Java Programming Intern',
      company: 'CodSoft',
      location: 'Remote',
      period: 'Oct 2023',
      description: [
        'Developed efficient Java applications, focusing on improving performance and maintainability',
        'Applied object-oriented programming principles and design patterns'
      ]
    }
  ];

  const education = [
    {
      school: 'Kalinga Institute of Industrial Technology (KIIT University)',
      degree: "Bachelor's Degree in Computer Science",
      period: 'Oct 2021 - Present',
      details: 'GPA: 7.95'
    },
    {
      school: 'Umakanta Academy',
      degree: 'Higher Secondary (+2) Stage',
      period: 'Completed',
      details: 'Marks: 80.06%'
    }
  ];

  const certifications = [
    {
      title: 'Problem Solving Basic and Intermediate',
      issuer: 'HackerRank'
    },
    {
      title: 'Generative AI: Introduction and Applications',
      issuer: 'Coursera'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience & Education</h2>
          
          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  variants={itemVariants}
                >
                  <h4 className="text-xl font-bold text-gray-900">{edu.school}</h4>
                  <p className="text-lg text-blue-600">{edu.degree}</p>
                  <div className="flex items-center text-gray-600 mt-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  variants={itemVariants}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                      <p className="text-lg text-blue-600">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="mr-2" /> Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  variants={itemVariants}
                >
                  <h4 className="text-lg font-bold text-gray-900">{cert.title}</h4>
                  <p className="text-gray-600">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;