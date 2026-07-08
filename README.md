# ポートフォリオ

ポートフォリオサイト

## 環境

| ツール | バージョン |
| :----- | :--------- |
| Node.js | >= 22.12.0（開発: v22.22.0） |
| pnpm | 10.33.0 |

### 主要パッケージ

| パッケージ | バージョン |
| :--------- | :--------- |
| Astro | ^6.3.8 |
| sass | ^1.100.0 |
| gsap | ^3.15.0 |
| swiper | ^12.2.0 |

## コマンド

| コマンド | 説明 |
| :------- | :--- |
| `pnpm install` | 依存関係をインストール |
| `pnpm dev` | 開発サーバー起動（`localhost:4321`） |
| `pnpm build` | 本番ビルド（`./dist/`） |
| `pnpm preview` | ビルド結果のプレビュー |

---

## ディレクトリ構成

```text
/
├── public/                         # そのまま配信する静的ファイル（favicon, OGP など）
├── src/
│   ├── assets/images/              # import して使う画像（最適化対象）
│   ├── components/
│   │   ├── ui/                     # 汎用 UI（Button, Card など）
│   │   ├── layout/                 # Header, Footer などサイト骨格
│   │   ├── features/               # JS 付き機能（Swiper, フォームなど）
│   │   └── sections/               # ページを構成するセクション
│   │       ├── shared/             # 複数ページで使うセクション（PageHero など）
│   │       └── top/                # トップページ専用
│   ├── config/
│   │   ├── site.ts                 # サイト名・URL など基本設定
│   │   └── navigation.ts           # グローバルナビ・フッターナビ
│   ├── content.config.ts           # Content Collections 定義（Astro 6）
│   ├── data/                # ページ文言（JSON）
│   │   ├── index.ts                # getPageText() など
│   │   └── pages/                  # ページごとの文言 JSON
│   ├── layouts/
│   │   ├── BaseLayout.astro        # html / head / body
│   │   └── PageLayout.astro        # Header + main + Footer
│   ├── pages/                      # ルーティング（URL = ファイルパス）
│   ├── scripts/
│   │   ├── gsap/                   # GSAP 初期化・ユーティリティ
│   │   └── swiper/                 # Swiper 初期化・ユーティリティ
│   ├── styles/
│   │   ├── foundation/             # 変数, mixin, reset
│   │   └── global.scss             # グローバル CSS エントリ
│   ├── types/                      # 共通型定義
│   └── utils/                      # 純粋関数
├── astro.config.mjs
└── package.json
```

## 実装ルール

### ページ（`pages/`）

- **ルート定義と組み立てのみ**を書く。大きな HTML やロジックは置かない。
- 必ず `PageLayout` を使い、`title` / `description` は JSON から渡す。
- セクションは `components/sections/` のコンポーネントを import して並べる。

```astro
---
import { getPageText } from '@/data/text';
import PageHero from '@/components/sections/shared/PageHero.astro';
import PageLayout from '@/layouts/PageLayout.astro';

const text = getPageText('cgc');
---

<PageLayout title={text.meta.title} description={text.meta.description}>
  <PageHero heading={text.hero!.heading} lead={text.hero!.lead} />
</PageLayout>
```

### コンポーネント（`components/`）

| ディレクトリ | 用途 | 例 |
| :----------- | :--- | :--- |
| `ui/` | 2 ページ以上で使う小さな部品 | Button, Heading, Card |
| `layout/` | サイト全体の骨格 | Header, Footer |
| `sections/shared/` | 複数ページで使うセクション | PageHero, CTA |
| `sections/{ページ名}/` | 特定ページ専用セクション（3 個以上になったら作成） | `sections/top/Hero.astro` |
| `features/` | GSAP / Swiper など JS 付きの塊 | HeroSlider, ContactForm |

### 文言管理（`data/text/`）

固定の見出し・ボタンラベル・meta 情報は **JSON で管理**する。ページ内に日本語文字列を直書きしない。

| ファイル | 内容 |
| :------- | :--- |
| `pages/top.json` | トップページ |
| `pages/cgc.json` など | 各固定ページ |
| `common.json` | 全ページ共通（ボタン・ラベル） |

**JSON の構造**

```json
{
  "meta": { "title": "ページタイトル", "description": "" },
  "hero": { "heading": "見出し", "lead": "リード文" },
  "sections": { "sectionKey": { "heading": "セクション見出し" } }
}
```

**新しいページを追加するとき**

1. `data/text/pages/{key}.json` を作成
2. `data/text/index.ts` の `pageTexts` に登録
3. `pages/` に `.astro` ファイルを作成し `getPageText('{key}')` で参照

動的ページのタイトルは `getPageTitle(text, id)` を使う。

### 可変コンテンツデータ

- **固定文言**（見出し・ボタン）→ JSON
- **記事本文・可変データ**→ microCMS

### スタイル（`styles/`）

- 変数・mixin・reset → `styles/foundation/`
- グローバル CSS → `styles/global.scss`（`BaseLayout` から import）
- コンポーネント固有スタイル → 各 `.astro` の `<style lang="scss">` に閉じる
- BEM 風の命名（`block__element`）を基本とする

### アニメーション・スライダー（GSAP / Swiper）

- 初期化ロジック → `scripts/gsap/`, `scripts/swiper/`
- DOM 構造 → `components/features/`
- `<script>` タグまたは Astro コンポーネント内で import し、**クライアント側で実行**する（SSR では動かない）

### 設定・ナビ（`config/`）

- サイト基本情報 → `config/site.ts`
- ナビゲーション → `config/navigation.ts`（Header / Footer / パンくずはここを参照）
- ナビ項目を Header と Footer に二重管理しない

### パスエイリアス

`@/` は `src/` を指す。import は `@/` を使う。

```ts
import PageLayout from '@/layouts/PageLayout.astro';
import { getPageText } from '@/data/text';
```

### 画像

| 置き場所 | 用途 |
| :------- | :--- |
| `src/assets/images/` | コンポーネントから import する画像 |
| `public/` | パス固定の静的ファイル（`/images/logo.svg` など） |

### 命名規則

| 対象 | 規則 | 例 |
| :--- | :--- | :--- |
| ページ文言 JSON | ページキー（トップは `top`） | `top.json`, `recruit-team.json` |
| Astro コンポーネント | PascalCase | `PageHero.astro` |
| SCSS 部分ファイル | `_` プレフィックス | `_variables.scss` |
| 動的ルート | Astro の慣例に従う(予定) | `story-[id].astro`, `[id].astro` |

---

## ブランチ運用

| ブランチ | 用途 |
| :------- | :--- |
| `main` | 本番（`staging` からのマージのみ） |
| `staging` | ステージング |
| `issue/*` | 機能開発 |
