interface TeamMemberProps {
  name: string;
  position: string;
  career: string[];
  education: string[];
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, career, education }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-xl font-semibold mb-2 text-[#434343]">{name}</h3>
    <p className="text-[#db7d63] mb-4">{position}</p>
    <div className="mb-4">
      <h4 className="font-semibold mb-2 text-[#434343]">Career</h4>
      <ul className="list-disc pl-5 space-y-1">
        {career.map((item, index) => (
          <li key={index} className="text-gray-600">
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-2 text-[#434343]">Education</h4>
      <ul className="list-disc pl-5 space-y-1">
        {education.map((item, index) => (
          <li key={index} className="text-gray-600">
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TeamMember;
