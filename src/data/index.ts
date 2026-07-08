import type { CommonText, PageText } from '@/types/pageText';
import type { ProductText } from '@/types/products';

import common from './common.json';
import products from './products.json';
import cgc from './pages/cgc.json';
import company from './pages/company.json';
import entry from './pages/entry.json';
import top from './pages/top.json';
import privacypolicy from './pages/privacypolicy.json';
import productMitsukejouzuDetail from './pages/product-mitsukejouzu-detail.json';
import productMitsukejouzuStory from './pages/product-mitsukejouzu-story.json';
import productMitsukejouzu from './pages/product-mitsukejouzu.json';
import product from './pages/product.json';
import recruitInterview from './pages/recruit-interview.json';
import recruitJob from './pages/recruit-job.json';
import recruitTeam from './pages/recruit-team.json';
import recruit from './pages/recruit.json';
import store from './pages/store.json';

export const pageTexts = {
  top,
  cgc,
  store,
  product,
  'product-mitsukejouzu': productMitsukejouzu,
  'product-mitsukejouzu-detail': productMitsukejouzuDetail,
  'product-mitsukejouzu-story': productMitsukejouzuStory,
  company,
  recruit,
  'recruit-team': recruitTeam,
  'recruit-interview': recruitInterview,
  'recruit-job': recruitJob,
  entry,
  privacypolicy,
} as const satisfies Record<string, PageText>;

export type PageTextKey = keyof typeof pageTexts;

export const commonText = common as CommonText;
export const productsText = products as ProductText[];

export function getPageText<K extends PageTextKey>(key: K): (typeof pageTexts)[K] {
  return pageTexts[key];
}

export function getCommonText(): CommonText {
  return commonText;
}

export function getProductsText(): ProductText[] {
  return productsText;
}

/** 動的ページなど、meta.title に識別子を付与する */
export function getPageTitle(text: PageText, suffix?: string): string {
  if (!suffix) return text.meta.title;
  return `${text.meta.title} ${suffix}`;
}
