'use client'

import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Image src="./logo.svg" width={114} height={41} alt="Re:Bible Logo" />
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-gray-700 hover:text-[#db7d63]">소개</a></li>
            <li><a href="#features" className="text-gray-700 hover:text-[#db7d63]">기능</a></li>
            <li><a href="#team" className="text-gray-700 hover:text-[#db7d63]">팀</a></li>
            <li><a href="#roadmap" className="text-gray-700 hover:text-[#db7d63]">로드맵</a></li>
            <li><a href="#vision" className="text-gray-700 hover:text-[#db7d63]">비전</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
