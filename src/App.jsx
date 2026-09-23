import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // タスクの一覧を管理するstateを定義
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

    const newTodos = todos.map(todo => 
        todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
      );
    setTodos (newTodos);
  }

  // タスク削除用関数
  const deleteTask = (id) => {

    const newTodos = todos.filter((todo) => todo.id !== id);
    
    setTodos (newTodos);
  }

  // タスク編集用関数
  const changeTask = (id, newText) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(newTodos);
  };

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
            <li key={todo.id}>
              {/* <span onClick={() => changeStatus(todo.id)} style={{ cursor: 'pointer' }}>
                {todo.text}
              </span> */}

              <input
                type='text'
                value={todo.text}
                onChange={(e) => changeTask(todo.id, e.target.value)}
              />
              <button class='delete-button' onClick={() => deleteTask(todo.id)}>削除</button>
              <button class='complate-button' onClick={() => changeStatus(todo.id)}>完了</button>
            </li>
        ))}
      </ul>

      <h2>完了したタスク</h2>
      <ul>
        {/* 完了したタスク一覧を表示する */}
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            // <li key={todo.id} onClick={() => changeStatus(todo.id)}>{todo.text}</li>
            <li key={todo.id}>
              <span onClick={() => changeStatus(todo.id)} style={{ cursor: 'pointer' }}>
                {todo.text}
              </span>
              <button class='delete-button' onClick={() => deleteTask(todo.id)}>削除</button>
              <button class='complate-button' onClick={() => changeStatus(todo.id)}>未完了に戻す</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
