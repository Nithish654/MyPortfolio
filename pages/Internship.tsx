import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, ChevronUp, CheckCircle2, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Internship: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Professional <span className="text-primary-500">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-bg -translate-x-1/2 z-10 hidden md:block shadow-sm"></div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 px-4 md:px-12">
                  <div 
                    className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 cursor-pointer hover:shadow-xl transition-all"
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                        <div className="flex flex-col mt-1">
                          <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                            <Briefcase size={16} className="mr-2" />
                            {exp.company}
                          </div>
                          {exp.location && (
                             <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                                <MapPin size={14} className="mr-2" />
                                {exp.location}
                             </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-2 mb-4">
                       <span className="flex items-center text-xs font-semibold px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 w-fit">
                        <Calendar size={12} className="mr-1" /> {exp.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-4 pt-4 border-t border-gray-50 dark:border-gray-800">
                       <span>Click for responsibilities</span>
                       {expandedId === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>

                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-2">
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Key Responsibilities:</h4>
                            <ul className="space-y-2 mb-4">
                              {exp.description.map((desc, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                  <CheckCircle2 size={14} className="mr-2 mt-1 text-primary-500 flex-shrink-0" />
                                  {desc}
                                </li>
                              ))}
                            </ul>
                            
                            <div className="flex flex-wrap gap-2 mt-4">
                              {exp.techStack.map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-100 dark:border-blue-800">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;