import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 서비스명 및 설명 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-2xl font-bold">직관어때</div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              야구 직관일기를 기록하고 오늘의 직관운세를 확인하는 서비스. 
              KBO 경기 일정과 결과를 확인하고, 야구장 근처 관광지 정보를 제공합니다.
            </p>
            
            {/* 소셜 미디어 링크 - Instagram만 표시 */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/jikgwaneottae/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                {/* Instagram 아이콘 */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  주요 기능
                </a>
              </li>
              <li>
                <a href="#screenshots" className="text-gray-400 hover:text-white transition-colors">
                  앱 미리보기
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-400 hover:text-white transition-colors">
                  다운로드
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/kr/app/%EC%A7%81%EA%B4%80%EC%96%B4%EB%95%8C/id6752529851" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  App Store
                </a>
              </li>
            </ul>
          </div>

          {/* 지원 */}
          <div>
            <h3 className="text-lg font-bold mb-4">지원</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  도움말
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 구분선 및 저작권 */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 직관어때. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with ❤️ for KBO fans</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
