# デザイントークン（配色・タイポグラフィ・余白）

ポートフォリオサイト（my-portfolio2026）の配色・タイポグラフィ・余白の具体値。
**Claude Design の `Portfolio Top.dc.html` を正とする**（本ドキュメントはそれを書き起こしたもの）。

- デザイン: Claude Design プロジェクト「Design system documentation」/ `Portfolio Top.dc.html`
- 方針・トンマナ: [design-concept.md](./design-concept.md)
- 関連 Issue: [#4 デザイントークン（配色・タイポグラフィ・余白）を定める](https://github.com/kainholy/my-portfolio2026/issues/4)

色を持つのは実績画像のみ。地とテキストはグリーンをわずかに含んだ無彩色に寄せ、アクセントはグリーン1色のみとする。

---

## 配色

CSS 変数として `body` に定義する。

| 変数 | 値 | 用途 |
| --- | --- | --- |
| `--accent` | `#2F6B34` | アクセント（1色・最小限）。ラベル・番号・リンク hover・ボタン |
| `--ink` | `#232720` | 文字・主 |
| `--sub` | `#5C665A` | 文字・副（本文・概要・ナビ） |
| `--muted` | `#8C948A` | 文字・メタ（カテゴリ・コピーライト・注記） |
| `--bg` | `#FBFCFA` | 地 / 背景 |
| `--band` | `#F3F6F1` | 背景・一段（ABOUT / CONTACT の帯） |
| `--panel` | `#F7FAF5` | パネル面（プレースホルダの縞・画像下地） |
| `--placeholder` | `#FFFFFF` | プレースホルダの地 |
| `--line` | `#E3EADD` | 罫線 / ボーダー（1px） |

- `::selection` — 背景 `var(--accent)` / 文字 `#F6F2E9`
- リンクは `color: inherit` + hover で `var(--accent)`（`transition: color .3s ease`）

### 差し替え候補（デザイン側 props の options）

| 変数 | 候補 |
| --- | --- |
| `--accent` | `#2F6B34`（既定） / `#1E6E3A` / `#0F7A5A` / `#3E7A2E` |
| `--ink` | `#232720`（既定） / `#1A1E17` / `#333A2E` |
| `--sub` | `#5C665A`（既定） / `#4C564A` / `#6C766A` |
| `--muted` | `#8C948A`（既定） / `#7C847A` / `#9CA49A` |
| `--bg` | `#FBFCFA`（既定） / `#FFFFFF` / `#F3F6F1` |
| `--band` | `#F3F6F1`（既定） / `#EBF0E8` / `#FBFCFA` |
| `--panel` | `#F7FAF5`（既定） / `#FFFFFF` / `#EBF0E8` |
| `--placeholder` | `#FFFFFF`（既定） / `#F3F6F1` / `#E3EADD` |
| `--line` | `#E3EADD`（既定） / `#D6E0CD` / `#EDF2E9` |

## フォント

| 用途 | フォント | ウェイト |
| --- | --- | --- |
| 和文（基調） | `Noto Serif JP`, serif | 300 / 400 / 500 |
| 欧文（ラベル・数字・リンク） | `Cormorant Garamond`, serif | 400 / 500 / italic 400 |
| プレースホルダのラベル | `ui-monospace, Menlo, monospace` | — |

- `body`: `letter-spacing: .06em` / `font-feature-settings: "palt"` / `-webkit-font-smoothing: antialiased`
- 欧文は `.eu` クラスで `Cormorant Garamond` を当てる

## タイポグラフィ

| 用途 | サイズ | 字間・行間・その他 |
| --- | --- | --- |
| ロゴ（ヘッダー） | 20px | 欧文 / `.05em` |
| ナビ | 12.5px | 欧文 / `.24em` / uppercase / `--sub` |
| FV アイブロウ（PORTFOLIO） | 13px | 欧文 / `.34em` / uppercase / `--accent` |
| FV 見出し（h1） | `clamp(30px, 5vw, 44px)` | 400 / `lh 1.7` / `.08em` |
| FV リード | 15px | `lh 1.95` / `.08em` / `--sub` / `max-width 52ch` |
| セクション番号（01〜03） | 22px | 欧文 italic / `.04em` / `--accent` |
| セクション欧文ラベル | 14px | 欧文 / `.3em` / uppercase |
| セクション和文ラベル | 13px | `.1em` / `--muted` |
| WORKS 大カード・案件名 | `clamp(17px, 2vw, 20px)` | 400 / `lh 1.55` / `.05em` |
| WORKS 大カード・概要 | 13.5px | `lh 1.9` / `.06em` / `--sub` |
| WORKS 大カード・番号 / カテゴリ | 13px / 10px | 欧文 italic `--accent` / `.16em` uppercase `--muted` |
| WORKS 小カード・案件名 | `clamp(15px, 1.6vw, 16.5px)` | 400 / `lh 1.55` / `.05em` |
| WORKS 小カード・番号 / カテゴリ | 12px / 9.5px | 欧文 italic `--accent` / `.16em` uppercase `--muted` |
| Visit site リンク | 14px（小カード 13px） | 欧文 italic / `.06em` / `--accent` |
| View all ボタン | 13.5px | `.14em` / 欧文 italic |
| ABOUT 氏名（h2） | `clamp(20px, 2.4vw, 23px)` | 500 / `.06em` |
| ABOUT 欧文名 | `.7em` | 欧文 italic / `.04em` / `--muted` |
| ABOUT 本文 | 15px | `lh 1.95` / `.07em`（1段落目 `--ink` / 2段落目 `--sub`） |
| 経歴・年 | 14px | 欧文 italic / `.04em` / `--accent` |
| 経歴・本文 | 13.5px | `lh 1.85` / `.06em` / `--sub` |
| CAN DO サービス名 | `clamp(17px, 2vw, 20px)` | 400 / `.05em` |
| CAN DO 説明 | 13.5px | `lh 1.9` / `.07em` / `--sub` |
| CAN DO 注記 | 14px | `lh 1.95` / `.07em` / `--sub` |
| CONTACT メール | `clamp(26px, 4vw, 40px)` | 欧文 / `.04em` / 下線 `--line` |
| フッター・コピーライト | 11px | `.12em` / `--muted` |
| フッター・リンク | 12.5px | 欧文 / `.2em` / uppercase / `--sub` |

## レイアウト・余白

| 項目 | 値 |
| --- | --- |
| コンテンツ最大幅 | 1040px（ABOUT の内側のみ 860px） |
| 左右パディング | `clamp(24px, 6vw, 80px)` |
| ヘッダー | `position: fixed` / パディング `20px clamp(24px, 6vw, 80px)` / 下線 1px `--line` / `backdrop-filter: saturate(120%) blur(8px)` |
| FV セクション | パディング `clamp(90px,13vw,150px)` → `clamp(48px,7vw,80px)` |
| ヒーロー画像 | 全幅・`aspect-ratio: 21/9` / 上下 1px `--line` |
| セクション上余白 | `clamp(90px, 13vw, 180px)` |
| セクション見出し下 | `clamp(48px, 7vw, 88px)`（ABOUT `clamp(40px,6vw,72px)` / CAN DO `clamp(44px,6vw,72px)`） |
| WORKS 大カード | 2カラム / gap `clamp(48px,7vw,88px)` × `clamp(36px,5vw,64px)` |
| WORKS 小カード | 3カラム / gap `clamp(40px,5vw,56px)` × `clamp(28px,4vw,44px)` / 上 `clamp(48px,7vw,88px)` |
| View all ボタン | 上 `clamp(56px,8vw,96px)` / `158×37px` / パディング `16px 40px` / 枠線 1px `--accent` |
| ABOUT | 背景 `--band` / パディング `clamp(80px,11vw,150px) clamp(24px,6vw,80px)` |
| ABOUT グリッド | `200px 1fr` / gap `clamp(36px,5vw,72px)` |
| 顔写真 | `aspect-ratio: 3/4` |
| 経歴リスト | 上 44px / 行 `130px 1fr` / パディング `18px 0` / 下線 1px `--line` |
| CAN DO グリッド | 2カラム / gap `clamp(36px,5vw,56px)` × `clamp(36px,5vw,64px)` |
| カード画像 | `aspect-ratio: 16/10` / 枠線 1px `--line` |
| CONTACT | 背景 `--band` / 上線 1px / パディング `clamp(90px,13vw,170px)` / 中央寄せ |
| フッター | パディング `30px clamp(24px,6vw,80px)` |

## 動き

- スクロール表示（`[data-reveal]`）: `opacity 0 → 1` / `translateY(16px) → none`
- トランジション: `.9s cubic-bezier(.22, .61, .36, 1)`
- 発火: IntersectionObserver（`threshold: 0.12` / `rootMargin: "0px 0px -8% 0px"`）／一度きり
- リンク: `color .3s ease` ／ ボタン: `background, color .3s ease`
- `html { scroll-behavior: smooth }`
