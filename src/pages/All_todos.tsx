import React from 'react'
import AboutTodoList from '../components/AboutTodoList/AboutTodoList';
import TodoItem from '../components/TodoItem/TodoItem';
import { useTodos } from '../context/todoContext';

export default function All_todos() {
    const todos = useTodos();
    const todosLenght = todos.length;
    return (
        <div >
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            <AboutTodoList todosLength={todosLenght} showClearCompleted={false} />
        </div>
    )
}
