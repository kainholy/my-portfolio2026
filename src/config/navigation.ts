export type NavItem = {
  label: string;
  href: string;
};

/** ヘッダーのグローバルナビ（ページ内アンカー） */
export const globalNav: NavItem[] = [
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Can Do', href: '#can-do' },
  { label: 'Contact', href: '#contact' },
];

/** フッターの外部リンク */
export const socialLinks: NavItem[] = [
  { label: 'X', href: '#' },
  { label: 'GitHub', href: '#' },
];
