import React from 'react';
import { Code, Database, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from '/Portfolio.jpg'


const About:React.FC = () => {
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative">
              <img
                src={Image}
                alt="Binoy Krishna Debnath"
                width={500} 
                height={400}
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/5]"
              />
          
            </div>
          </motion.div>
          <motion.div variants={containerVariants}>
            <motion.h2 
              className="text-3xl font-bold hover:text-blue-600 mb-6"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-6"
              variants={itemVariants}
            >
              ❝I'm a passionate Full Stack Developer with expertise in Java, Spring Boot, and modern web technologies.
              My journey in software development has been driven by a curiosity for solving complex problems and
              creating efficient, scalable solutions.❞
            </motion.p>
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Full Stack Development</h3>
                  <p className="mt-2 text-gray-600">
                    Proficient in both front-end and back-end development, creating seamless web applications.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Database Management</h3>
                  <p className="mt-2 text-gray-600">
                    Experience with SQL and NoSQL databases, ensuring optimal data architecture.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">AI & Machine Learning</h3>
                  <p className="mt-2 text-gray-600">
                    Implementing AI solutions and machine learning models for real-world applications.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;