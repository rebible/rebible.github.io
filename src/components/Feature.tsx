interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
  
const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <div className="text-[#db7d63] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-[#434343]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Feature;
