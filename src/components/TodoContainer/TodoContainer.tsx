import React from 'react'
import styles from './TodoContainer.module.css'
import { useTodos, useTodoDispatch } from '../../context/todoContext';

import CreateNewTodo from '../createNewNote/CreateNewTodo';
import TodoIten from '../Todo/TodoIten';

export default function TodoContainer() {
    const todos = useTodos();
    const todosCompleted = todos.filter(todo => todo.completed);
    // console.log('Todos: ', todos);
    const todoLength = todos.length;
    const dispatch = useTodoDispatch();
    return (
        <div className={styles.todosContainer}>
            <CreateNewTodo />

            <div className={styles.todosList}>
                {todos.map(todo => <TodoIten key={todo.id} todo={todo} />)}
                <div className={styles.aboutTodoList}>
                    <span>{`${todoLength} ${todoLength > 0 ? 'items' : 'item'} left`}</span>
                    <button onClick={() => {
                        dispatch({
                            type: "CLEAR_COMPLETED_TODOS",
                        })
                    }}>Clear Completed</button>
                </div>
            </div>


            <div className={styles.todosSorter}>
                <button onClick={() => dispatch({
                    type: "ALL_TODOS",
                })}>All</button>
                <button onClick={() => console.log('Implement this!!!')}>Active</button>
                <button onClick={() => console.log('Implement this!!!')}>Completed</button>

            </div>

        </div>
    )
}

// TODO: Add a footer to the todo list for amount of todos and a button to clear all todos