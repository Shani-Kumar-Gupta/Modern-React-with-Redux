import React from 'react';
import './App.css';
import TodoList from './components/todo/TodoList';

const App = () => {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
