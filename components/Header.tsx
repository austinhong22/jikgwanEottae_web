import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <div className="flex items-center space-x-3">
            <div className="text-xl font-bold text-gray-900">
              직관어때
            </div>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              주요 기능
            </a>
            <a href="#screenshots" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              앱 미리보기
            </a>
            <a href="#download" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              다운로드
            </a>
          </nav>

          {/* 다운로드 버튼 */}
          <div className="flex items-center space-x-4">
            <a
              href="https://apps.apple.com/kr/app/%EC%A7%81%EA%B4%80%EC%96%B4%EB%95%8C/id6752529851"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              앱 다운로드
            </a>
            
            {/* 모바일 메뉴 버튼 */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
