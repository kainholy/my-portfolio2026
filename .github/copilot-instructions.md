# Commit Message Rules

Use Conventional Commits format: `<type>(<scope>): <summary>`

## Types
- `feat` 新機能・新セクション追加
- `fix` バグ修正
- `style` フォーマット・空白など動作に影響しない変更
- `refactor` リファクタリング
- `docs` ドキュメントのみの変更
- `chore` ビルド・設定・依存関係など
- `perf` パフォーマンス改善・アニメーション最適化

## Scopes
top, product, mitsukejouzu, store, cgc, company, recruit, entry, ui, layout, data, styles, scripts, config

## Examples
- `feat(mitsukejouzu): concept セクションのマークアップを追加`
- `feat(mitsukejouzu): feature セクションに横スクロールアニメーションを実装`
- `fix(top): SP表示でFVのレイアウトが崩れる問題を修正`
- `chore: Astro を 6.3.8 にアップグレード`
