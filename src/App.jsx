import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  // このreturn()の中に画面に表示したい内容を書いていく
  // タスクの一覧を管理するstateを定義
  const [todos, setTodos] = useState([
    { id: 1, text: '未完了タスク', completed: false },
    { id: 2, text: '完了タスク', completed: true },
  ]);

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
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <h2>完了したタスク</h2>
      <ul>
        {/* 完了したタスク一覧を表示する */}
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
