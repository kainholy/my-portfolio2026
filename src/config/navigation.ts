export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

/** グローバルナビ（サイトマップ準拠） */
export const globalNav: NavItem[] = [
  { label: '株式会社東海シジシー', href: '/' },
  { label: '私たちについて', href: '/cgc/' },
  { label: 'メンバー企業', href: '/store/' },
  { label: '商品紹介', href: '/product/' },
  { label: '企業情報', href: '/company/' },
  { label: '採用情報', href: '/recruit/' },
];
