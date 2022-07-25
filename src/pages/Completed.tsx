import React from 'react'
import { useTodos } from '../context/todoContext';
import TodoIten from '../components/Todo/TodoIten';
import AboutTodoList from '../components/AboutTodoList/AboutTodoList';
export default function Completed() {
    const todos = useTodos();
    const todosCompleted = todos.filter(todo => todo.completed);
    const todosLenght = todosCompleted.length;
    return (
        <>
            {todosCompleted.map(todo => <TodoIten key={todo.id} todo={todo} />)}
            <AboutTodoList todosLength={todosLenght} showClearCompleted={false} />
        </>
    )
}