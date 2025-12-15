import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Cpu, Code } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'Software' | 'Hardware'>('Software');

  const filteredProjects = PROJECTS.filter(p => p.category === filter);

  const filters = ['Software', 'Hardware'];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            My <span className="text-primary-500">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of my software development applications and hardware engineering prototypes.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === f
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                    : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {f === 'Software' ? <Code className="mr-2" size={18} /> : <Cpu className="mr-2" size={18} />}
                {f} Projects
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {(project.githubLink || project.liveLink) && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                       {project.githubLink && (
                         <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-3 bg-white rounded-full text-gray-900 hover:text-primary-600 transition-colors"
                          title="View Code"
                         >
                           <Github size={20} />
                         </a>
                       )}
                       {project.liveLink && (
                         <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-3 bg-white rounded-full text-gray-900 hover:text-primary-600 transition-colors"
                          title="View Live Demo"
                         >
                           <ExternalLink size={20} />
                         </a>
                       )}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">{project.title}</h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 rounded uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-xs font-medium px-2 py-1 bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;