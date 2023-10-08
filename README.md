# Kuboston

- URL: ...
- Github: https://github.com/junpei-8/kuboston

<br>

## 🚀 使用技術

### フレームワーク

- [Astro](https://astro.build)
- [Solid.js](https://www.solidjs.com)

### スタイリングライブラリ

- [vanilla-extract](https://vanilla-extract.style/)
- [scss](https://sass-lang.com)

<br>

## 📂 プロジェクトの構成

```
/
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   └── layouts/
│           ├── assets/
│           ├── components/
│           ├── fragments/
│           ├── states/
│           ├── styles/
│   └── pages/
│       └── [slug]
│           ├── _/
│               ├── assets/
│               ├── components/
│               ├── fragments/
│               ├── layout/
│               ├── states/
│               ├── styles/
│               ├── utils/
│           └── index.astro
│           └── [slug]
│               └── ...
│   ├── routes/
│   ├── scripts/
│   ├── states/
│   └── styles/
└── package.json
```

- `/public` ... ビルド時にバンドルされたくない静的ファイルを配置するディレクトリ

- `/src`

  - `/assets` ... 静的ファイルを配置するディレクトリ

  - `/components` ... 汎用的なコンポーネントを配置するディレクトリ

  - `/fragments` ... 限定的な（原則１つのファイル内でしか使用されない）コンポーネントを配置するディレクトリ

  - `/constants` ... 定数を配置するディレクトリ

  - `/layouts` ... ページコンポーネントで用いられるレイアウトコンポーネントを配置するディレクトリ

  - `/pages` ... ページコンポーネントを配置するディレクトリ

  - `/routes` ... ルートを配置するディレクトリ

  - `/scripts` ... グローバルスコープに干渉するなどの副作用のあるスクリプトを配置するディレクトリ

  - `/states` ... 状態を配置するディレクトリ

  - `/styles` ... スタイルを配置するディレクトリ

  - `/utils` ... 汎用的なスクリプトファイルを配置するディレクトリ

  - `_` ... ページコンポーネントのみで使用されるファイルを配置するディレクトリ

<br>

## 🧞 コマンド

| コマンド            | 概要                                                                                 |
| :------------------ | :----------------------------------------------------------------------------------- |
| `pnpm install`      | 依存関係のインストール                                                               |
| `pnpm dev`          | `pnpm start` を実行                                                                  |
| `pnpm prod`         | `pnpm build` -> `pnpm preview` の順序で実行                                          |
| `pnpm start`        | 開発環境（`localhost:3000`）を起動                                                   |
| `pnpm build`        | `./dist/` に成果物を生成                                                             |
| `pnpm preview`      | `./dist/` の成果物を元にした開発環境（`localhost:3000`）を起動                       |
| `pnpm format`       | `eslint` + `stylelint` + `prettier` のフォーマッターを並列実行                       |
| `pnpm check`        | `tsc` + `astro check` + `eslint` + `stylelint` + `prettier` を静的チェックを並列実行 |
| `pnpm astro`        | Astro CLI の実行エイリアス                                                           |
| `pnpm astro --help` | Astro CLI のヘルプを表示                                                             |
