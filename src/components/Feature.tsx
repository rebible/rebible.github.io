import React from 'react';
import { motion } from 'framer-motion';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-[#db7d63] w-12 h-12 flex items-center justify-center bg-[#db7d63] rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default Feature;
