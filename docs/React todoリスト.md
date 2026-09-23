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

進める順番の参考
https://qiita.com/yamapiiii/items/b14a7495076306cd7d5e

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

2. UIを作成
JSX：JavaScriptのコード内にHTMLのようなタグ形式でUIを直感的に記述できるようにするJavaScriptの拡張構文

- 新規タスク追加フォーム（追加ボタン）
- タスク表示エリア（完了・未完了）

- css調整
index.cssを調整
→プロジェクト全体に共通して適用されるグローバルスタイル（全体的なデザインや初期化設定）を記述するCSSファイル
index.html→/src/main.jsx→import './index.css'で読み込まれる

※今回のメインはcssでは無いのでClaudeで生成する

3. タスクの一覧を表示する
useStateを利用
→Reactの関数コンポーネント内でデータの状態を保持し・更新するためのReact Hooksの機能
→React Hooks（リアクトフック）：状態管理などのReactの機能を、クラスを書かずに使えるようになる機能

```
import { useState } from 'react';
const [todos, setTodos] = useState([...
```
const [現在の値, 値を更新する関数] = useState(初期値)

1つ目 todos … 現在のstateの値（今回は上のToDo配列そのもの）
2つ目 setTodos … todosを更新するための専用関数

- 未完了・完了のステータスによって表示領域を変更する方法
未完了・完了それぞれの<ul>で、todos配列をfilter()で絞り込んでからmap()する

```
{todos.map((todo) => (
  <li key={todo.id}>{todo.text}</li>
))}
```
↓
```
{todos
    .filter(
        (todo) => !todo.completed)
        .map((todo) => (
            <li key={todo.id}>{todo.text}</li>
        )
    )
}
```