import React from 'react'
import TodoIten from '../components/Todo/TodoIten';
import { useTodos } from '../context/todoContext';

export default function All_todos() {
    const todos = useTodos();
    return (
        <>
            {todos.map(todo => <TodoIten key={todo.id} todo={todo} />)}

        </>
    )
}
