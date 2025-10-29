import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AppScreenshots from '../components/AppScreenshots';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>직관어때 - 야구 직관일기 기록 앱</title>
        <meta name="description" content="야구 직관일기를 기록하고 오늘의 직관운세를 확인하는 서비스. KBO 경기 일정과 결과를 확인하고, 야구장 근처 관광지 정보를 제공합니다." />
        <meta name="keywords" content="야구, 직관, KBO, 야구일기, 직관운세, 야구장, 관광지" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <AppScreenshots />
        <DownloadSection />
        <Footer />
      </main>
    </>
  );
}
