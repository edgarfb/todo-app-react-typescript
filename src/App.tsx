import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './components/Background/Background';
import CreateNewTodo from './components/createNewNote/CreateNewTodo';
import { TodoContextDispatch, TodoContextProvider } from './context/todoContext';
import TodoContainer from './components/TodoContainer/TodoContainer';



interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

function App() {


  return (
    <div className="App">
      {/* <Background/> */}
      <TodoContextProvider>
        {/* <CreateNewTodo /> */}
        <TodoContainer />
      </TodoContextProvider>

    </div>
  );
}

export default App;
