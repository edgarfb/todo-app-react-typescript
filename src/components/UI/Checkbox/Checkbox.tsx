import React from 'react'
import styles from './Checkbox.module.css'
import { useTodoDispatch } from '../../../context/todoContext';
interface checkboxProps {
    isChecked: boolean;
    todoId: string;
}

export default function Checkbox({ isChecked, todoId }: checkboxProps) {
    const dispatch = useTodoDispatch();
    return (
        <div className={styles.checkboxContainer}>
            <div className={styles.unChecked}></div>
            <div className={`${isChecked ? styles.checked : styles.notChecked}`}>
                <img src="./images/icon-check.svg" alt="" />
            </div>
            <input type="checkbox" className={styles.checkboxInput} checked={isChecked} onChange={(e) => {

                dispatch({
                    type: "MAKE_TODO_COMPLETED",
                    payload: {
                        id: todoId,
                        completed: e.target.checked
                    },
                })
            }} />

        </div>
    )
}
