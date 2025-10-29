import React from 'react';
import Image from 'next/image';

const AppScreenshots = () => {
  const screenshots = [
    {
      title: "직관 운세",
      description: "오늘의 승리 요정은 누구? 매일 새로운 직관운세를 확인하세요",
      image: "/images/fortune-feature.jpg",
      features: ["직관 운세 점수", "구단과의 궁합 등급", "운세 해석 제공"],
      alt: "직관어때 앱의 직관운세 기능 화면"
    },
    {
      title: "주변 관광",
      description: "다양한 장소를 한번에 탐색하고 야구장 근처 핫플레이스를 찾아보세요",
      image: "/images/tourism-feature.jpg",
      features: ["지도 기반 탐색", "카테고리별 필터", "실시간 위치 정보"],
      alt: "직관어때 앱의 주변 관광 기능 화면"
    },
    {
      title: "직관 일기",
      description: "직관 사진으로 추억을 한눈에 보고 개인 직관 기록을 관리하세요",
      image: "/images/diary-feature.jpg",
      features: ["사진과 함께 기록", "승리/패배 분류", "개인 통계 제공"],
      alt: "직관어때 앱의 직관일기 기능 화면"
    },
    {
      title: "구장 핫플",
      description: "경기 전후로 가볼 장소를 추천받고 최신 핫플레이스를 확인하세요",
      image: "/images/hotplace-feature.jpg",
      features: ["Top 50 핫플레이스", "데이터 기반 추천", "카테고리별 분류"],
      alt: "직관어때 앱의 구장 핫플레이스 기능 화면"
    },
    {
      title: "메인 화면",
      description: "직관 기록을 쉽고 재미있게 관리하고 개인 승률을 확인하세요",
      image: "/images/main-feature.jpg",
      features: ["개인 승률 통계", "다가오는 경기", "승리 요정 확인"],
      alt: "직관어때 앱의 메인 화면"
    }
  ];

  return (
    <section id="screenshots" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            앱 미리보기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            직관어때의 주요 기능들을 미리 확인해보세요
          </p>
        </div>

        {/* 스크린샷 그리드 */}
        <div className="space-y-16">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* 텍스트 콘텐츠 */}
              <div className="flex-1">
                <div className="max-w-lg">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {screenshot.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {screenshot.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {screenshot.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 이미지 */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  {/* 폰 프레임 */}
                  <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      {/* 실제 앱 이미지 */}
                      <div className="relative">
                        <Image
                          src={screenshot.image}
                          alt={screenshot.alt}
                          width={400}
                          height={800}
                          className="w-full h-auto object-cover"
                          priority={index < 2}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 장식 요소 */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse animation-delay-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 추가 정보 */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 더 많은 기능이 기다리고 있어요!
            </h3>
            <p className="text-gray-600 mb-6">
              직관어때는 지속적으로 업데이트되어 더욱 풍부한 기능을 제공합니다
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl mb-2">🏟️</div>
                <div>모든 KBO 구장 지원</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl mb-2">📊</div>
                <div>상세한 통계 분석</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl mb-2">🎨</div>
                <div>예쁜 UI/UX</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl mb-2">🔄</div>
                <div>실시간 업데이트</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
