import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Target, Database, Wrench, Languages } from 'lucide-react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const categories = [
    { id: 'Language', icon: <Languages size={20} />, label: 'Languages' },
    { id: 'Backend/BaaS', icon: <Database size={20} />, label: 'Backend / BaaS' },
    { id: 'Development Tools', icon: <Wrench size={20} />, label: 'Dev Tools' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About <span className="text-primary-500">Me</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate Front-End Developer transforming ideas into reality through code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
             <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                    <User size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Profile</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Front-End Developer with strong foundations in JavaScript and modern web technologies.
                  I enjoy converting real-world problems into scalable digital solutions. My journey involves deep diving into React architectures and crafting responsive interfaces.
                </p>
             </div>

             <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">What I Love</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Building efficient interfaces, integrating BaaS solutions, and designing clean UI/UX experiences. I thrive in environments that challenge my problem-solving skills.
                </p>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
             <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 h-full">
               <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
                </div>
               
               <motion.div 
                 variants={containerVariants}
                 initial="hidden"
                 animate="visible"
                 className="space-y-8"
               >
                 {categories.map((cat) => (
                   <motion.div key={cat.id} variants={itemVariants}>
                     <h4 className="flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                       <span className="mr-2">{cat.icon}</span> {cat.label}
                     </h4>
                     <div className="flex flex-wrap gap-2">
                       {SKILLS.filter(skill => skill.category === cat.id).map((skill) => (
                         <div key={skill.name} className="group relative">
                           <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-200 dark:hover:border-primary-800 transition-colors cursor-default">
                             {skill.name}
                           </div>
                           <div className="absolute bottom-0 left-0 h-1 bg-primary-500 rounded-b-lg transition-all duration-300 w-0 group-hover:w-full"></div>
                         </div>
                       ))}
                     </div>
                   </motion.div>
                 ))}
               </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;