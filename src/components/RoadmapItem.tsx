interface RoadmapItemProps {
  phase: string;
  duration: string;
  description: string;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ phase, duration, description }) => (
  <div className="flex items-center mb-8">
    <div className="w-12 h-12 bg-[#db7d63] rounded-full flex items-center justify-center text-white font-bold mr-4">{phase}</div>
    <div>
      <h4 className="text-lg font-semibold text-[#434343]">{duration}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default RoadmapItem;
