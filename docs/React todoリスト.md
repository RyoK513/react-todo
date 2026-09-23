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

3. タスクを追加できるようにする
初期値なしのstateを定義（入力値の状態管理用）
`const [input, setInput] = useState('');`
input stateの値を入力欄に表示
入力エリアに入力された内容をinput stateに反映→setInput()
↓反映タイミング
onChange()イベントを利用
→フォーム内のエレメント（要素）の内容が変更された時に起こイベント処理
参考：https://qiita.com/kuutarou/items/a6f61d1bbc50378034af

- タスク作成作成を作成
→「追加」ボタンを押した時に関数を実行する

addTodo()→setTodosを呼び出し
→todosに新しい値を追加

- id(日付でユニークなIDを生成)
- text, input stateに入っているユーザーが入力した値
- complated, 初期は未完了状態（false）

...todos：スプレッド構文
→配列の中身をすべて展開して並べる
→元のデータを壊さずに、新しい配列を作りたいときに使われる

例）
// 1. 元の配列
const todos = ["宿題", "買い物"];
// 2. スプレッド構文を使って新しい配列を作る
const newTodos = [...todos, "掃除"]; 
// ["宿題", "買い物", "掃除"] という新しい配列が作られる

`e.preventDefault();`
→ボタンを押した時にaddTodoの処理のあとにリロードが入るので止める

- バリデーション
→空のタスクを追加できないようにする
inputが空なら処理の前にリターン

4. タスクの完了状態を切り替える
切り替え用の関数を作成
→タスククリック時に呼び出し。現在の状態と逆の状態に切り替える

変更処理詳細
*非推奨*
- 破壊的変更：単純にオブジェクトの値を書き換える→画面が再描画されない原因になる
```
// 対象タスクを取得
const tergetTask = todos.find(todo => todo.id === id);

// タスクのステータスを変更
if (tergetTask.completed) {
    tergetTask.completed = false
} else {
    tergetTask.completed = true
}
```
*推奨*
- 非破壊的変更：map() メソッドを使い、新しい配列を作成して上書き
メモ：targetTask.completed = !targetTask.completed;のように記載できるらしい

でタスクの完了状態をクリックで切り替えれるようになった