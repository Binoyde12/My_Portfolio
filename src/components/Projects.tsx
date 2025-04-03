import React, { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

const Projects:React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Myntra Clone',
      description: 'A functional e-commerce website mimicking the features of Myntra.',
      longDescription: 'Developed a comprehensive e-commerce platform that replicates core Myntra functionalities. Features include a dynamic product catalog, shopping cart implementation, user authentication, and responsive design for optimal viewing across devices.',
      image: '/images/Myntra clone Banner.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Binoyde12/MYNTRA-PROJECT-CLONE',
      demo: 'https://myntra-project-clone-zeta.vercel.app/'
    },
    {
      title: 'Face Detection Web App',
      description: 'A system to process images and identify facial expressions.',
      longDescription: 'Built an advanced face detection application that can analyze facial features and expressions in real-time. The system uses modern web technologies and machine learning models to provide accurate detection results.',
      image: '/images/Detect Face.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Medicine Recommendation System',
      description: 'AI-powered system for personalized medicine recommendations.',
      longDescription: 'Implemented a sophisticated recommendation system using machine learning algorithms to suggest appropriate medications based on symptoms and patient history. The system includes disease prediction capabilities and personalized medicine recommendations.',
      image: '/images/Medicine recom.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Machine Learning'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={selectedProject.github}
                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-2" />
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;