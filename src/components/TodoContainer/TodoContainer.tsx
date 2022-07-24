import React from 'react'
import styles from './TodoContainer.module.css'
import { useTodos, useTodoDispatch } from '../../context/todoContext';

import CreateNewTodo from '../createNewNote/CreateNewTodo';
import TodoIten from '../Todo/TodoIten';

export default function TodoContainer() {
    const todos = useTodos();
    const dispatch = useTodoDispatch();
    return (
        <div className={styles.todosContainer}>
            <CreateNewTodo />

            <div className={styles.todosList}>
                {todos.map(todo => <TodoIten todo={todo} />)}

            </div>
        </div>
    )
}

// TODO: Add a footer to the todo list for amount of todos and a button to clear all todos