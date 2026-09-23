import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  // タスクの一覧を管理するstateを定義
  const [todos, setTodos] = useState([]);

  // フォームの入力値を管理するstateを定義
  const [input, setInput] = useState('');
  
  // タスク追加用関数
  const addTodo = (e) => {
    e.preventDefault();

    if (!input ) {
      return;
    }

    setTodos([...todos, { 
      id: Date.now(),
      text: input,
      completed: false
    }]);
    setInput(''); 
  }

  // タスク状態切替用関数
  const changeStatus = (id) => {

    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
      )
    );
  }

  // このreturn()の中に画面に表示したい内容を書いていく
  return (
    <div className="App">
      <h1>ToDoアプリ</h1>
      {/* ここにToDoアプリの要素を追加していく */}

      {/* 新規タスク追加用フォーム */}
      <form>
        <input
        id='todo-input'
        type="text"
        placeholder='ToDo' 
        value={input}
        // 入力のタイミングでsetInputを呼び出し
        onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' onClick={addTodo}>追加</button>
      </form>

      {/* タスク一覧 */}
      <h2>未完了タスク</h2>
      <ul>
        {/* 未完了タスク一覧を表示する */}
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <li key={todo.id} onClick={() => changeStatus(todo.id)}>{todo.text}</li>
        ))}
      </ul>

      <h2>完了したタスク</h2>
      <ul>
        {/* 完了したタスク一覧を表示する */}
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <li key={todo.id} onClick={() => changeStatus(todo.id)}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
