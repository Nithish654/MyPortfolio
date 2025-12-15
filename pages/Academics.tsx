import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION } from '../constants';

const Academics: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Academics
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            My educational background.
          </p>
        </motion.div>

        <div className="space-y-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl mr-4 text-primary-600 dark:text-primary-400">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{edu.degree}</p>
                  </div>
                </div>
                <div className="md:text-right ml-16 md:ml-0">
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
                    {edu.year}
                  </span>
                </div>
              </div>

              {edu.description && edu.description.length > 0 && (
                <div className="ml-16">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 flex items-center">
                    <Award size={16} className="mr-2" /> Details
                  </h4>
                  <ul className="space-y-2">
                    {edu.description.map((desc, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;