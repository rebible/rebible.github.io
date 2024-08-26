import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface RoadmapItemProps {
  phase: string;
  icon: React.ReactNode;
  title: string;
  duration: string;
  description: string;
  details: string;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ phase, icon, title, duration, description, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 border-l-2 border-[#db7d63] last:border-l-0"
    >
      <div className="absolute left-0 top-0 w-4 h-4 bg-[#db7d63] rounded-full -translate-x-1/2" />
      <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#db7d63] rounded-full flex items-center justify-center text-white">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <p className="text-sm text-[#db7d63]">{duration}</p>
            </div>
          </div>
          {isExpanded ? <ChevronDown className="w-6 h-6 text-gray-500" /> : <ChevronRight className="w-6 h-6 text-gray-500" />}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-gray-200"
          >
            <p className="text-gray-700">{details}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default RoadmapItem;
