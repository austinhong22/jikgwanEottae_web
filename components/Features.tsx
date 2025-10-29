import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "📱",
      title: "직관일기 기록",
      description: "야구 관람 경험을 사진과 함께 기록하고, 승리/패배/무승부로 분류하여 관리할 수 있습니다.",
      details: [
        "사진과 함께 직관 경험 기록",
        "승리/패배/무승부 자동 분류",
        "개인 직관 승률 통계 제공",
        "친구들과 함께 즐거운 직관 기록"
      ]
    },
    {
      icon: "🔮",
      title: "직관운세 서비스",
      description: "오늘의 승리 요정은 누구? 매일 새로운 직관운세로 야구 관람의 재미를 더해보세요.",
      details: [
        "매일 새로운 직관운세 제공",
        "구단과의 궁합 등급 확인",
        "운세 해석 및 조언 제공",
        "오늘의 승리 요정 예측"
      ]
    },
    {
      icon: "🗺️",
      title: "주변 관광지 추천",
      description: "야구장 근처의 핫플레이스와 관광지를 추천하여 경기 전후 즐길 거리를 제공합니다.",
      details: [
        "야구장별 맞춤 관광지 추천",
        "최근 1년 데이터 기반 핫플레이스",
        "음식점, 쇼핑, 문화시설 정보",
        "지도 기반 위치 확인"
      ]
    },
    {
      icon: "📅",
      title: "KBO 경기 일정",
      description: "KBO 리그의 모든 경기 일정과 결과를 확인하고, 관심 있는 경기를 기록할 수 있습니다.",
      details: [
        "실시간 KBO 경기 일정 제공",
        "경기 결과 및 점수 확인",
        "관심 경기 즐겨찾기",
        "경기 전후 알림 서비스"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            주요 기능
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            직관어때는 야구 팬들을 위한 모든 것을 한 곳에서 제공합니다
          </p>
        </div>

        {/* 기능 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 card-shadow hover-scale transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 추가 정보 섹션 */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-gray-200">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              🎯 왜 직관어때를 선택해야 할까요?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">빠른 기록</h4>
                <p className="text-gray-600">간편한 인터페이스로 빠르게 직관 경험을 기록</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">예쁜 디자인</h4>
                <p className="text-gray-600">귀여운 캐릭터와 직관적인 UI/UX</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">상세한 통계</h4>
                <p className="text-gray-600">개인 직관 승률과 상세한 분석 제공</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
