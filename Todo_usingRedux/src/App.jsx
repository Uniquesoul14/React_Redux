
import './App.css'

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TodoForm from './Components/todoForm';
import TodoList from './Components/todoList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App with Redux Toolkit</h1>
        <TodoForm/>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;