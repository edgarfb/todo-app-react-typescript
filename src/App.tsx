import React from 'react';
import './App.css';
import Background from './components/Background/Background';
import { TodoContextProvider } from './context/todoContext';
import TodoContainer from './components/TodoContainer/TodoContainer';
import ThemeProvider, { useTheme } from './context/themeContext';





function App() {
  const theme = useTheme();

  return (


    <TodoContextProvider>
      <div className={theme}>
        <Background />
        <TodoContainer />
      </div>
    </TodoContextProvider>




  );
}

export default App;
