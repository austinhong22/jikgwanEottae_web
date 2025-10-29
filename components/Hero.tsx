import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          {/* 메인 타이틀 */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            직관어때
          </h1>
          
          {/* 서브타이틀 */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            야구 직관일기를 기록하고<br />
            <span className="text-blue-600 font-bold">오늘의 직관운세</span>를 확인하는 서비스
          </p>

          {/* 주요 기능 하이라이트 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">직관일기 기록</h3>
              <p className="text-gray-600 text-sm">야구 관람 경험을 사진과 함께 기록</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">직관운세</h3>
              <p className="text-gray-600 text-sm">오늘의 승리 요정은 누구?</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">주변 관광지</h3>
              <p className="text-gray-600 text-sm">야구장 근처 핫플레이스 추천</p>
            </div>
          </div>

          {/* CTA 버튼들 */}
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
              자세히 보기
            </a>
          </div>

          {/* 통계 정보 */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">KBO</div>
              <div className="text-gray-600 text-sm">리그 지원</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">10+</div>
              <div className="text-gray-600 text-sm">구단 지원</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600 text-sm">관광지 정보</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">일기</div>
              <div className="text-gray-600 text-sm">기록 기능</div>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
