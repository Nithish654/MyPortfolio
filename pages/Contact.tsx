import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';
import { api } from '../services/api';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // API Call
      await api.contact.sendMessage(formData);
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-dark-card rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Left Panel */}
          <div className="p-8 md:p-12 bg-primary-600 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Chat!</h2>
              <p className="text-primary-100 mb-8 leading-relaxed">
                Have a project in mind or want to discuss the latest tech? I'm always open to new opportunities and connections.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/20 rounded-lg mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-50 text-sm uppercase tracking-wider mb-1">Email</h3>
                    <a href="mailto:nithishjoshwa6@gmail.com" className="hover:text-white transition-colors">nithishjoshwa6@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/20 rounded-lg mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-50 text-sm uppercase tracking-wider mb-1">Address</h3>
                    <p className="leading-relaxed">
                      No: 144/1,<br />
                      Maniyam Street,<br />
                      Chengalpattu – 603003
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-semibold text-primary-50 text-sm uppercase tracking-wider mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/nithish654" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-white/20 rounded-lg hover:bg-white hover:text-primary-600 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nithish-v-j-551741250/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-white/20 rounded-lg hover:bg-white hover:text-primary-600 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center space-x-2 transition-all ${
                  status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                }`}
              >
                {status === 'sending' ? (
                  <span className="animate-pulse">Sending...</span>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={20} /> <span>Message Sent!</span>
                  </>
                ) : status === 'error' ? (
                   <>
                    <AlertCircle size={20} /> <span>Try Again</span>
                  </>
                ) : (
                  <>
                    <Send size={20} /> <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;