import type { WorkItem } from '@/types/topPage';

import albionFlarune from '@/assets/images/work-albion-flarune.png';
import albionInfinesse from '@/assets/images/work-albion-infinesse.png';
import fujiMediaTechnology from '@/assets/images/work-fuji-media-technology.png';
import fuujin from '@/assets/images/work-fuujin.png';
import seaInc from '@/assets/images/work-sea-inc.png';

/** WORKS（実績）。掲載順はこの配列の順序に従う */
export const works: WorkItem[] = [
  {
    id: 'fuji-media-technology',
    number: '01',
    category: 'コーポレート',
    name: 'フジ・メディア・テクノロジー',
    description: 'メディア技術を担うグループ会社のコーポレートサイト。情報設計から実装まで担当。',
    technologies: 'Next.js / TypeScript',
    url: 'https://fuji-mt.co.jp/',
    thumbnail: fujiMediaTechnology,
  },
  {
    id: 'fuujin',
    number: '02',
    category: '団体サイト',
    name: '千葉工業大学 よさこいソーラン風神部 公式サイト',
    description: '学生団体の魅力を伝える公式サイト。軽やかなアニメーションで演武の躍動感を表現。',
    technologies: 'Astro / GSAP',
    url: 'https://fuujin4351.com/',
    thumbnail: fuujin,
  },
  {
    id: 'albion-infinesse',
    number: '03',
    category: 'ブランドサイト',
    name: 'ALBION — infinesse 海外向けサイト',
    description: 'スキンケアブランドの海外向けサイト。ブランドの世界観を保ちつつ多言語で構築。',
    technologies: 'WordPress',
    url: 'https://www.albion-cosmetics.com/seasonal/infinesse/sg/',
    thumbnail: albionInfinesse,
  },
  {
    id: 'albion-flarune',
    number: '04',
    category: 'ブランドサイト',
    name: 'ALBION — FLARUNE 海外向けサイト',
    description: 'フレグランスラインの海外向けサイト。繊細なトーンと余白でブランド価値を訴求。',
    technologies: 'WordPress',
    url: 'https://www.albion-cosmetics.com/seasonal/flarune/sg/',
    thumbnail: albionFlarune,
  },
  {
    id: 'sea-inc',
    number: '05',
    category: 'コーポレート',
    name: 'Sea inc. コーポレートサイト',
    description: '所属する制作会社のコーポレートサイト。フロントエンド実装を担当。',
    technologies: 'React / Next.js',
    url: 'https://seainc.jp/',
    thumbnail: seaInc,
  },
  {
    id: 'penmark',
    number: '06',
    category: 'コーポレート',
    name: 'Penmark コーポレートサイト',
    description: 'サービス事業者のコーポレートサイト。端正なレイアウトと読みやすさを重視。',
    technologies: 'Next.js / TailwindCSS',
    url: 'https://corp.penmark.jp/',
    thumbnail: null,
  },
];

export function getWorkById(id: string): WorkItem | undefined {
  return works.find((work) => work.id === id);
}
