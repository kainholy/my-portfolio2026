import type { TopPage } from '@/types/topPage';

import aboutPhoto from '@/assets/images/about.JPG';
import cando1 from '@/assets/images/cando-1.png';
import cando2 from '@/assets/images/cando-2.png';
import cando3 from '@/assets/images/cando-3.png';
import cando4 from '@/assets/images/cando-4.png';

/**
 * トップページの文言。
 * デザイン（Portfolio Top.dc.html）を正とする。
 */
export const topPage: TopPage = {
  firstView: {
    eyebrow: 'PORTFOLIO',
    heading: ['抱える課題に、', '技術者として伴走します。'],
    lead: [
      '作ることではなく「課題を解決すること」が目的です。',
      '抱える悩みを解くための手段として、技術を届けます。',
    ],
    heroImage: null,
  },

  works: {
    heading: { labelEn: 'Works', labelJa: '実績' },
    leadCount: 2,
    restCount: 6,
    visitLabel: 'Visit site →',
    viewAllLabel: 'View all →',
    viewAllHref: '/works/',
  },

  about: {
    heading: { labelEn: 'About', labelJa: '自己紹介' },
    name: '大倉 聖哉',
    nameEn: 'Okura Seiya',
    photo: aboutPhoto,
    paragraphs: [
      'ブランディングから考え、価値を伝える Web を実装します。アクセシビリティと SEO を踏まえ、売上に結びつくサイトへ。アニメーションをはじめとした表現面の作り込みも得意としています。',
      '抱える悩みに試行錯誤し、専門家として技術力を惜しみなく提供する。相手の期待を上回ることを自ら目指し、納品後も伴走を続ける。一番大事にしているのは「信頼」です。',
    ],
    history: [
      {
        id: 'sea',
        year: '2022 —',
        text: '株式会社Sea にフロントエンドエンジニアとして参画。約20件のプロジェクトに参加し、webを公開。',
      },
      {
        id: 'digital-garage',
        year: '2026',
        text: '株式会社デジタルガレージの AI システム開発プロジェクトにエンジニアとして参加。',
      },
      {
        id: 'personal',
        year: '個人',
        text: '4件の案件を個人で受注・納品。サイトの価値向上から売り上げアップに貢献。',
      },
    ],
  },

  canDo: {
    heading: { labelEn: 'Can Do', labelJa: 'できること' },
    items: [
      {
        id: 'new-site',
        number: '01',
        name: '新規webサイト制作',
        description: '目的の整理から設計・実装まで、新規サイトを一貫して構築します。',
        image: cando1,
        placeholder: 'ゼロから立ち上げるサイトのイメージ',
      },
      {
        id: 'renewal',
        number: '02',
        name: 'webサイトリニューアル',
        description: '既存サイトの課題を洗い出し、成果につながる形へ作り替えます。',
        image: cando2,
        placeholder: '刷新前後を想起させるイメージ',
      },
      {
        id: 'maintenance',
        number: '03',
        name: 'webサイト保守・更新',
        description: '公開後の更新・改善・保守を継続的にサポートします。',
        image: cando3,
        placeholder: '継続的な運用・更新のイメージ',
      },
      {
        id: 'system',
        number: '04',
        name: '業務効率化システム開発',
        description: 'Webアプリや業務システムなど、機能面の開発にも対応します。',
        image: cando4,
        placeholder: '仕組み・アプリ開発のイメージ',
      },
    ],
    note: 'ヒアリングからデザイン・実装まで一貫して対応。業務効率化のためのシステム開発にも対応します。',
  },

  contact: {
    labelEn: 'Contact',
    message: 'お気軽にご相談ください。',
    email: 'ookuraseiya0506@gmail.com',
  },
};
