'use client'

const Hero: React.FC = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-4xl font-bold mb-4 text-[#434343]">일상 속 묵상, 함께 나누는 믿음의 여정</h2>
      <p className="text-xl mb-8 text-gray-600">현대인의 라이프스타일에 맞춘 디지털 성경 플랫폼</p>
      <a
        href="https://open.kakao.com/o/gO3QEzDg"
        className="bg-[#db7d63] text-white py-2 px-6 rounded-full font-bold hover:bg-[#c26e56] transition duration-300"
        target="_blank"
      >
        오픈카톡방 입장하기
      </a>
    </div>
  </section>
);

export default Hero;
