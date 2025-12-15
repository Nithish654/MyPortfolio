import React from 'react';
import { motion } from 'framer-motion';
import { Award, Linkedin } from 'lucide-react';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Certifications & <span className="text-primary-500">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-dark-card p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <Award size={64} className="text-primary-500 transform rotate-12" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Issued by <span className="font-semibold text-gray-700 dark:text-gray-300">{cert.issuer}</span>
                </p>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-xs font-mono text-gray-400">{cert.date}</span>
                  <a 
                    href="https://www.linkedin.com/in/nithish-v-j-551741250/recent-activity/all/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
                  >
                    <Linkedin size={14} className="mr-1.5" /> Visit LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;