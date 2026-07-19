/** セクション見出し（欧文ラベル + 和文ラベル） */
export type SectionHeading = {
  /** 欧文ラベル（"Works" など） */
  labelEn: string;
  /** 和文ラベル（"実績" など） */
  labelJa: string;
};

// ============================================
// FIRST VIEW
// ============================================

export type FirstViewSection = {
  /** 見出し上の小ラベル（"PORTFOLIO"） */
  eyebrow: string;
  /** 見出し。配列の1要素が1行に対応する */
  heading: string[];
  /** リード文。配列の1要素が1行に対応する */
  lead: string[];
  /** 全幅ヒーロー画像のパス。未設定なら null */
  heroImage: string | null;
};

// ============================================
// WORKS
// ============================================

import type { ImageMetadata } from 'astro';

/** WORKS の1件。トップページの一覧と詳細ページで共有する */
export type WorkItem = {
  /** 一意の識別子。詳細ページのパスにも使う */
  id: string;
  /** 表示用の通し番号（"01" 形式） */
  number: string;
  /** カテゴリ（"コーポレート" など） */
  category: string;
  /** 案件名 */
  name: string;
  /** 一覧に出す概要 */
  description: string;
  /** 使用技術（"Astro / GSAP" のようにスラッシュ区切り） */
  technologies: string;
  /** 公開サイトのURL。未公開・掲載不可なら null */
  url: string | null;
  /** サムネイル（スクリーンショット）。未設定ならプレースホルダを表示する */
  thumbnail: ImageMetadata | null;
  /** 詳細ページの内容。未整備の案件では省略する */
  detail?: WorkDetail;
};

/** WORKS 詳細ページの内容 */
export type WorkDetail = {
  /** クライアント名。掲載不可なら null */
  client: string | null;
  /** 担当した役割 */
  roles: string[];
  /** 取り組んだ内容・工夫した点 */
  approach: string[];
  /** 成果。無ければ省略する */
  results?: string[];
};

export type WorksSection = {
  heading: SectionHeading;
  /** 上部に大きく並べる件数 */
  leadCount: number;
  /** 下部に小さく並べる件数 */
  restCount: number;
  /** 各カードの外部リンクの文言 */
  visitLabel: string;
  /** 一覧ページへのボタンの文言 */
  viewAllLabel: string;
  /** 一覧ページへのボタンのリンク先 */
  viewAllHref: string;
};

// ============================================
// ABOUT
// ============================================

/** ABOUT の経歴1行 */
export type AboutHistoryItem = {
  /** 一意の識別子 */
  id: string;
  /** "2022 —" や "個人" など、年に限らない見出し */
  year: string;
  text: string;
};

export type AboutSection = {
  heading: SectionHeading;
  /** 氏名（和文） */
  name: string;
  /** 氏名（欧文） */
  nameEn: string;
  /** 顔写真。未設定ならプレースホルダを表示する */
  photo: ImageMetadata | null;
  /** 本文。1要素が1段落に対応する */
  paragraphs: string[];
  history: AboutHistoryItem[];
};

// ============================================
// CAN DO
// ============================================

/** CAN DO の1件 */
export type CanDoItem = {
  /** 一意の識別子 */
  id: string;
  /** 表示用の通し番号（"01" 形式） */
  number: string;
  name: string;
  description: string;
  /** イメージ画像。未設定ならプレースホルダを表示する */
  image: ImageMetadata | null;
  /** 画像未設定時に出すプレースホルダの説明 */
  placeholder: string;
};

export type CanDoSection = {
  heading: SectionHeading;
  items: CanDoItem[];
  /** 見出しと一覧の間に添えるリード文 */
  note: string;
};

// ============================================
// CONTACT
// ============================================

export type ContactSection = {
  /** 欧文ラベル（"Contact"） */
  labelEn: string;
  /** 問い合わせへの案内文 */
  message: string;
  email: string;
};

// ============================================
// トップページ
// ============================================

export type TopPage = {
  firstView: FirstViewSection;
  works: WorksSection;
  about: AboutSection;
  canDo: CanDoSection;
  contact: ContactSection;
};
