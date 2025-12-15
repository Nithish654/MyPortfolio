import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Nithish V J. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;