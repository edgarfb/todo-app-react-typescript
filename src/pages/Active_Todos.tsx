import React from 'react'
import { useTodos } from '../context/todoContext';
import TodoItem from '../components/TodoItem/TodoItem';
import AboutTodoList from '../components/AboutTodoList/AboutTodoList';

export default function Active_Todos() {
    const todos = useTodos();
    const todosAtive = todos.filter(todo => !todo.completed);
    const todosLenght = todosAtive.length;
    return (
        <>
            {todosAtive.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            <AboutTodoList todosLength={todosLenght} showClearCompleted={false} />
        </>
    )
}



