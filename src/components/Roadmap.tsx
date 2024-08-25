import RoadmapItem from '@/components/RoadmapItem';

const Roadmap: React.FC = () => (
  <section id="roadmap" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#434343]">개발 로드맵</h2>
      <div className="max-w-2xl mx-auto">
        <RoadmapItem 
          phase="1"
          duration="MVP (2024년 12월 예정)"
          description="기본 묵상 및 커뮤니티 기능"
        />
        <RoadmapItem 
          phase="2"
          duration="파일럿 (2025년 6월 예정)"
          description="고급 개인화 및 학습 기능"
        />
        <RoadmapItem 
          phase="3"
          duration="완성 (2026년 12월 예정)"
          description="AI 시스템 고도화 및 다국어 지원"
        />
      </div>
    </div>
  </section>
);

export default Roadmap;
