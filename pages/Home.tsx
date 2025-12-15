import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Database, Layers, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_DATA, MARQUEE_ITEMS } from '../constants';

const Home: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Typewriter Effect
  useEffect(() => {
    const currentText = HERO_DATA.typingTexts[textIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % HERO_DATA.typingTexts.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="min-h-screen pt-20 flex flex-col justify-center overflow-hidden relative">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-4">
              Hi, I'm {HERO_DATA.name}
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              I am a <span className="gradient-text">{displayText}</span>
              <span className="inline-block w-1 h-8 md:h-12 bg-primary-500 ml-1 animate-pulse align-middle"></span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              {HERO_DATA.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-primary-500/30"
              >
                View Projects <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link 
                to="/resume" 
                className="flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 rounded-lg font-medium transition-all"
              >
                Download Resume <Download className="ml-2" size={18} />
              </Link>
            </div>

            {/* Quick Highlights */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-gray-700 pt-8">
              {HERO_DATA.stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="relative w-full aspect-square max-w-md mx-auto">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-600 rounded-2xl rotate-6 opacity-20 blur-lg"></div>
               <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-center">
                 <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <Code className="text-blue-600 dark:text-blue-400" size={32} />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Frontend Logic</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">React & JavaScript</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                      <Database className="text-green-600 dark:text-green-400" size={32} />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">BaaS Integration</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Firebase & Supabase</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                      <Layers className="text-purple-600 dark:text-purple-400" size={32} />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Modern UI</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Tailwind & Framer</p>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Marquee */}
      <div className="mt-20 py-8 bg-white dark:bg-dark-card border-y border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="flex space-x-12 animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <span key={index} className="text-xl font-semibold text-gray-400 dark:text-gray-500 flex items-center">
              <Terminal size={16} className="mr-2" /> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;