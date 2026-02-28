import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center text-xl font-bold mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white mr-2">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="text-gray-900 dark:text-white">Nithish</span>
          <span className="text-primary-500 ml-1">V J</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Nithish V J. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;