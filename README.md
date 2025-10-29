# 직관어때 랜딩페이지

야구 직관일기 기록 앱 "직관어때"의 공식 랜딩페이지입니다.

## 🎯 서비스 소개

직관어때는 야구 팬들을 위한 종합 서비스로, 다음과 같은 기능을 제공합니다:

- **직관일기 기록**: 야구 관람 경험을 사진과 함께 기록하고 관리
- **직관운세**: 매일 새로운 직관운세로 야구 관람의 재미를 더함
- **주변 관광지**: 야구장 근처의 핫플레이스와 관광지 추천
- **KBO 경기 일정**: 실시간 경기 일정과 결과 확인

## 🚀 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 📱 앱 다운로드

[App Store에서 다운로드하기](https://apps.apple.com/kr/app/%EC%A7%81%EA%B4%80%EC%96%B4%EB%95%8C/id6752529851)

## 🛠️ 개발 환경 설정

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 확인

## 📁 프로젝트 구조

```
├── components/          # React 컴포넌트
│   ├── Header.tsx     # 헤더 컴포넌트
│   ├── Hero.tsx       # 메인 히어로 섹션
│   ├── Features.tsx   # 주요 기능 소개
│   ├── AppScreenshots.tsx # 앱 스크린샷
│   ├── DownloadSection.tsx # 다운로드 섹션
│   └── Footer.tsx     # 푸터 컴포넌트
├── pages/             # Next.js 페이지
│   ├── index.tsx     # 메인 페이지
│   ├── _app.tsx      # 앱 설정
│   └── _document.tsx # 문서 설정
├── styles/           # 스타일 파일
│   └── globals.css   # 글로벌 CSS
└── public/          # 정적 파일
    └── images/      # 이미지 파일들
```

## 🎨 주요 기능

### 반응형 디자인
- 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험
- Tailwind CSS를 활용한 모던한 UI/UX

### 성능 최적화
- Next.js의 자동 최적화 기능 활용
- 이미지 최적화 및 지연 로딩
- SEO 최적화

### 접근성
- 웹 접근성 가이드라인 준수
- 키보드 네비게이션 지원
- 스크린 리더 호환성

## 🚀 배포

Vercel을 통한 자동 배포가 설정되어 있습니다:

1. GitHub 저장소에 코드 푸시
2. Vercel에서 자동으로 빌드 및 배포
3. 커스텀 도메인 설정 가능

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요.

---

Made with ❤️ for KBO fans
