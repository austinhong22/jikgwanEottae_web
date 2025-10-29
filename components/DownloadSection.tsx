import React from 'react';

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 메인 타이틀 */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            지금 다운로드하세요!
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            직관어때와 함께 야구 관람의 모든 순간을 특별하게 기록해보세요
          </p>

          {/* 다운로드 버튼 */}
          <div className="mb-16">
            <a
              href="https://apps.apple.com/kr/app/%EC%A7%81%EA%B4%80%EC%96%B4%EB%95%8C/id6752529851"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              📱 App Store에서 다운로드
            </a>
          </div>

          {/* 특징 하이라이트 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">무료 다운로드</h3>
              <p className="text-gray-600">완전 무료로 모든 기능을 이용하세요</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">안전한 서비스</h3>
              <p className="text-gray-600">개인정보 보호와 안전한 데이터 관리</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">지속적 업데이트</h3>
              <p className="text-gray-600">새로운 기능과 개선사항을 지속적으로 제공</p>
            </div>
          </div>


          {/* 마지막 CTA */}
          <div className="mt-16">
            <p className="text-lg text-gray-700 mb-6">
              지금 바로 다운로드하고 특별한 야구 관람 경험을 시작하세요!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://apps.apple.com/kr/app/%EC%A7%81%EA%B4%80%EC%96%B4%EB%95%8C/id6752529851"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📱 App Store에서 다운로드
              </a>
              
              <a
                href="#features"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
              >
                기능 더 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
