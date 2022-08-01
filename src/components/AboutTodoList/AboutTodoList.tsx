import React from 'react';
import TodoSorter from '../TodoSorter/TodoSorter';

import styles from './AboutTodoList.module.css'
import { useTodoDispatch } from '../../context/todoContext';

interface AboutTodoListProps {
    todosLength: number;
}


export default function AboutTodoList({ todosLength }: AboutTodoListProps) {
    const dispatch = useTodoDispatch();
    return (
        <div className={`${styles.aboutTodoList} ${todosLength > 3 ? styles.aboutTodoListReposition : ''}`}>
            <span>{`${todosLength} ${todosLength > 0 ? 'items' : 'item'} left`}</span>
            {/* <TodoSorter /> */}
            {/* <button onClick={() => {
                dispatch({
                    type: "CLEAR_COMPLETED_TODOS",
                })
            }}>Clear Completed</button> */}
        </div>
    )
}