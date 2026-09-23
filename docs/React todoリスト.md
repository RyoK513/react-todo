# ReactでTODOリストを作る

### ゴール
ローカルで動作するTODOリストアプリを作成すること

### 作成する機能
- タスク追加
- タスク一覧表示
- 完了・未完了切り替え
- タスク削除

余裕があれば
- 保存機能
- タスク編集

---------------------------------------

1. 開発環境構築
viteで作成

```
npm create vite@latest react-todo -- --template react
```

案内に従う
npm install
npm run dev

Oxlintを選択

> http://localhost:5173/にアクセス

サンプルコードを削除

> import React from 'react';
Reactを使うための記述

> export default App;
Appコンポーネントを他のファイルから読み込めるように外部へ公開するための記述
1つの主要な値や関数をデフォルトとしてエクスポート

1. UIを作成
JSX：JavaScriptのコード内にHTMLのようなタグ形式でUIを直感的に記述できるようにするJavaScriptの拡張構文

- 新規タスク追加フォーム（追加ボタン）
- タスク表示エリア（完了・未完了）