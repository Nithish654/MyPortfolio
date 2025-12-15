import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { api } from '../services/api';

const Resume: React.FC = () => {
  const handleDownload = async () => {
    try {
      await api.resume.download();
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to initiate download. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Resume</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Detailed breakdown of my professional journey and skills.
          </p>

          <div className="flex justify-center space-x-4">
            <button 
              onClick={handleDownload}
              className="flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-lg hover:shadow-primary-500/30 transition-all active:scale-95"
            >
              <Download className="mr-2" size={20} /> Download PDF
            </button>
          </div>
        </motion.div>

        {/* Resume Preview Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative bg-white dark:bg-gray-800 rounded shadow-2xl overflow-hidden aspect-[1/1.4] max-w-2xl mx-auto border border-gray-200 dark:border-gray-700"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-gray-50 dark:bg-gray-900/50">
             <FileText size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
             <h3 className="text-xl font-bold text-gray-400 dark:text-gray-500">PDF Preview Placeholder</h3>
             <p className="text-sm text-gray-400 dark:text-gray-500 mt-2 max-w-xs">
               Resume preview will appear here.
             </p>
          </div>
        </motion.div>

        <div className="mt-16 bg-primary-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in working with me?</h3>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              I am currently open to opportunities in Front-End Development. Let's build something amazing together.
            </p>
            <a href="/#/contact" className="inline-block px-8 py-3 bg-white text-primary-600 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Contact Me
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;