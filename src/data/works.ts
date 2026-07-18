import type { WorkItem } from '@/types/topPage';

import aarthSecurity from '@/assets/images/work-aarth-security.png';
import albionEclafutur from '@/assets/images/work-albion-eclafutur.png';
import albionElegance from '@/assets/images/work-albion-elegance.png';
import albionFlarune from '@/assets/images/work-albion-flarune.png';
import albionInfinesse from '@/assets/images/work-albion-infinesse.png';
import albionMilkfirst from '@/assets/images/work-albion-milkfirst.png';
import fujiMediaTechnology from '@/assets/images/work-fuji-media-technology.png';
import fuujin from '@/assets/images/work-fuujin.png';
import ignis from '@/assets/images/work-ignis.png';
import penmark from '@/assets/images/work-penmark.png';
import seaInc from '@/assets/images/work-sea-inc.png';
import seaLp from '@/assets/images/work-sea-lp.png';
import storyAndCo from '@/assets/images/work-story-and-co.png';
import takedaPid from '@/assets/images/work-takeda-pid.png';
import yakinikuAnija from '@/assets/images/work-yakiniku-anija.png';
import yard from '@/assets/images/work-yard.webp';

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
    thumbnail: penmark,
  },
  {
    id: 'story-and-co',
    number: '07',
    category: '',
    name: 'STORY&Co.',
    description: '',
    technologies: '',
    url: 'https://storyandco.co/',
    thumbnail: storyAndCo,
  },
  {
    id: 'yard',
    number: '08',
    category: '',
    name: 'Yard ティザーサイト',
    description: '',
    technologies: '',
    url: 'https://yard-teaser-site.vercel.app/',
    thumbnail: yard,
  },
  {
    id: 'takeda-pid',
    number: '09',
    category: '',
    name: '武田薬品工業株式会社 PID特設サイト',
    description: '',
    technologies: '',
    url: 'https://www.takeda.co.jp/patients/pidnavi/index.html',
    thumbnail: takedaPid,
  },
  {
    id: 'ignis',
    number: '10',
    category: '',
    name: 'IGNIS（イグニス） 公式サイト',
    description: '',
    technologies: '',
    url: 'https://www.ignis.jp/',
    thumbnail: ignis,
  },
  {
    id: 'yakiniku-anija',
    number: '11',
    category: '',
    name: '焼肉兄者',
    description: '',
    technologies: '',
    url: 'https://yakiniku-anija.com/',
    thumbnail: yakinikuAnija,
  },
  {
    id: 'aarth-security',
    number: '12',
    category: '',
    name: 'Aarth Security',
    description: '',
    technologies: '',
    url: 'https://aarth-security.com/',
    thumbnail: aarthSecurity,
  },
  {
    id: 'albion-elegance',
    number: '13',
    category: '',
    name: 'アルビオン株式会社（ALBION） - Elegance 海外向けサイト',
    description: '',
    technologies: '',
    url: 'https://www.albion-cosmetics.com/seasonal/elegance/sg/',
    thumbnail: albionElegance,
  },
  {
    id: 'albion-eclafutur',
    number: '14',
    category: '',
    name: 'アルビオン株式会社（ALBION） - eclafutur 海外向けサイト',
    description: '',
    technologies: '',
    url: 'https://www.albion-cosmetics.com/seasonal/eclafutur/sg/',
    thumbnail: albionEclafutur,
  },
  {
    id: 'albion-milkfirst',
    number: '15',
    category: '',
    name: 'アルビオン株式会社（ALBION） - milkfirst 海外向けサイト',
    description: '',
    technologies: '',
    url: 'https://www.albion-cosmetics.com/seasonal/milk-first/sg/',
    thumbnail: albionMilkfirst,
  },
  {
    id: 'sea-lp',
    number: '16',
    category: '',
    name: 'Sea LP',
    description: '',
    technologies: '',
    url: 'https://seainc.jp/lp/branding',
    thumbnail: seaLp,
  },
];

export function getWorkById(id: string): WorkItem | undefined {
  return works.find((work) => work.id === id);
}
