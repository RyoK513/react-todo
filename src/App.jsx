import React from 'react';
import './App.css';

function App() {
  // このreturn()の中に画面に表示したい内容を書いていく
  return (
    <div className="App">
      <h1>ToDoアプリ</h1>
      {/* ここにToDoアプリの要素を追加していく */}

      {/* 新規タスク追加用フォーム */}
      <form>
        <input type="text" placeholder='ToDo' />
        <button type='submit'>追加</button>
      </form>

      {/* タスク一覧 */}
      <h2>未完了タスク</h2>
      <ul>
        {/* 未完了タスク一覧を表示する */}
        <li>サンプルToDo1</li>
      </ul>

      <h2>完了したタスク</h2>
      <ul>
        {/* 完了したタスク一覧を表示する */}
        <li>サンプルToDo（完了）</li>
      </ul>
    </div>
  );
}

export default App;
