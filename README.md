# May Fest / Komaba Fest

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## 世代管理

第75回駒場祭以降、各学園祭ごとの差分はブランチで管理することにします。各学園祭の直前 or 直後に、その学園祭に対応するブランチ (例: 第75回駒場祭の場合は `kf75`) を発行してください。

昔は毎回デザインを変えていたようなので、体力があるならデザインを変えても良い。

## 開発

### 環境構築

インストールするもの:

- Node.js (for compat)
- Bun: JavaScript Runtime + Package Manager + Test Runner

### 依存のインストール

```sh
bun install --frozen-lockfile
```

(アップデート: `bun update`)

### 開発用サーバー

```
bun watch
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### ビルド

```sh
bun run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 運用

Cloudflare の ut.code(); アカウントで管理しています。

<!--
WANT:
- {kf,mf}\d+.utcode.net (e.g. kf75.utcode.net) は各学園祭で固定したい。
- これまでは毎回リポジトリを作り直していたが、これからは同一リポジトリで管理する。
HOW:
1. ブランチを分ける -> 誤って消しそうだが、これにする。
2. タグをつける -> CF Pages が対応していないので不可能。

もっといい案があったら置き換えても良い。
-->

### 毎世代やること

kf75 のときの例。

(開発開始時)

- Cloudflare Pages で新しい Pages を作る (kf75-website にすると分かりやすい)

  - Pages の設定で特筆すべき点は、
    - Production Branch -> `kf75`
    - Branch Preview (in Branch Control) -> オフにする
  - Custom Domain から `kf75.utcode.net` を使うように設定する

- `utcode.net` の DSN 設定から `festival.utcode.net` を `kf75.utcode.net` に REDIRECT するようにする

### デプロイ

各学園祭ごとに `https://{kf,mf}\d+\.utcode\.net` の形式の URL を発行してください。

以下は、過去の学園祭のものです。過去のものに触れる必要はありません。
学園祭が終わり次第、その学園祭で発行したブランチにデプロイを紐づけて、下に追記してください。

- <https://kf75.utcode.net/>
- <https://mf97.utcode.net/>
- <https://kf74.utcode.net/>
- <https://mf96.utcode.net/>
- <https://kf73.utcode.net/>
