import React from 'react';

import styles from './AboutTodoList.module.css'
import { useTodoDispatch } from '../../context/todoContext';

interface AboutTodoListProps {
    todosLength: number;
    showClearCompleted?: boolean;
}


export default function AboutTodoList({ todosLength, showClearCompleted = true }: AboutTodoListProps) {
    const dispatch = useTodoDispatch();
    return (
        <div className={`${styles.aboutTodoList} ${todosLength > 3 ? styles.aboutTodoListReposition : ''}`}>
            <span>{`${todosLength} ${todosLength > 0 ? 'items' : 'item'} left`}</span>
            {showClearCompleted && <button onClick={() => {
                dispatch({
                    type: "CLEAR_COMPLETED_TODOS",
                })
            }}>Clear Completed</button>}
        </div>
    )
}