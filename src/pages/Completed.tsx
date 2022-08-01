import React from 'react'
import { useTodos } from '../context/todoContext';
import TodoItem from '../components/TodoItem/TodoItem';
import AboutTodoList from '../components/AboutTodoList/AboutTodoList';
export default function Completed() {
    const todos = useTodos();
    const todosCompleted = todos.filter(todo => todo.completed);
    const todosLenght = todosCompleted.length;
    return (
        <>
            {todosCompleted.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            <AboutTodoList todosLength={todosLenght} />
        </>
    )
}